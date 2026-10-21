"use client"
import React, { ReactNode, ReactElement, useState, useRef, useEffect } from 'react';

// [Symbols remain the same]
const reactivated = Symbol('reactivated');
const backingFields = Symbol('backingFields');
const originalValues = Symbol('originalValues');
const deactivated = Symbol('deactivated');
const comparerSymbol = Symbol('comparer');
const componentUpdaters = new WeakMap<object, () => void>();

type Properties<T> = {
    [K in keyof T as K extends `$${infer Rest}` ? Rest : never]: T[K]
} & {
    children?: ReactNode;
};

/**
 * Base class for Chemical components
 */
export class $Chemical {
    // Private fields
    private childPositionCounts?: Map<any, number>;
    private _isSetup: boolean = false;

    // Public inert properties
    @inert()
    public Component!: React.FC<Properties<this>>;

    @inert()
    public parent?: $Chemical;

    @inert()
    public children: $Chemical[] = [];

    // Constructor
    constructor() {
        this.Component = this.createComponent();
    }

    // Public method - subclasses override this to control rendering
    view(): ReactNode {
        // Default implementation - subclasses should override
        return null;
    }

    // Private methods
    private createComponent(): React.FC<Properties<this>> {
        const self = this;

        const ChemicalComponent: React.FC<Properties<this>> = (props: any) => {
            const instanceRef = useRef<$Chemical | null>(null);
            const [, forceUpdate] = useState({});

            // Create instance only once
            if (!instanceRef.current) {
                instanceRef.current = self.createInstance();
            }
            const instance = instanceRef.current;

            useEffect(() => {
                // Setup happens once
                if (!instance._isSetup) {
                    self.setupInstance(instance, props, () => forceUpdate({}));
                    instance._isSetup = true;
                }
                
                return () => {
                    self.cleanupInstance(instance);
                };
            }, []);

            // CRITICAL: Process children FIRST to establish bindings
            // This treats JSX children as a "blueprint" for what to bind
            self.processChildrenAsBlueprint(instance, props);
            
            // NOW the parent's view() method can use the bound children
            // The parent completely controls what gets rendered
            return instance.view();
        };

        (ChemicalComponent as any).isChemical = true;
        return ChemicalComponent;
    }

    private createInstance(): $Chemical {
        const instance = Object.create(this);
        instance.children = [];
        instance._isSetup = false;
        return instance;
    }

    private setupInstance(instance: $Chemical, props: any, forceUpdate: () => void): void {
        this.applyProps(instance, props);
        this.setupReactivity(instance, forceUpdate);
        this.handleParentBinding(instance, props);
        this.runCatalystMethods(instance);
    }

    private cleanupInstance(instance: $Chemical): void {
        componentUpdaters.delete(instance);
        if (instance.parent) {
            this.unregisterFromParent(instance, instance.parent);
        }
    }

    private applyProps(instance: $Chemical, props: any): void {
        if (!props) return;

        for (const key in props) {
            if (props.hasOwnProperty(key) &&
                key !== 'children' &&
                key !== '__parentInstance') {
                this.setProp(instance, key, props[key]);
            }
        }
    }

    private setProp(instance: $Chemical, key: string, value: any): void {
        const componentKey = '$' + String(key);
        const transformers = instance.constructor.prototype.transformers;

        if (transformers?.has(componentKey)) {
            const transformer = transformers.get(componentKey);
            (instance as any)[componentKey] = transformer(value);
        } else {
            (instance as any)[componentKey] = value;
        }
    }

    private setupReactivity(instance: $Chemical, forceUpdate: () => void): void {
        componentUpdaters.set(instance, forceUpdate);

        decorate(instance, {
            after: (className, memberName, memberType, method, args, result) => {
                if (memberType === 'field') {
                    const updateFn = componentUpdaters.get(instance);
                    if (updateFn) updateFn();
                }
                return result;
            }
        });
    }

    private handleParentBinding(instance: $Chemical, props: any): void {
        if (!props.__parentInstance) {
            return;
        }

        instance.parent = props.__parentInstance;
        if (instance.parent) {
            this.registerWithParent(instance, instance.parent);
        }
    }

    private registerWithParent(child: $Chemical, parent: $Chemical): void {
        this.trackChild(parent, child);
        this.applyBinding(child, parent);
    }

    private trackChild(parent: $Chemical, child: $Chemical): void {
        if (!parent.children.includes(child)) {
            parent.children.push(child);
        }
    }

    private untrackChild(parent: $Chemical, child: $Chemical): void {
        const index = parent.children.indexOf(child);
        if (index >= 0) {
            parent.children.splice(index, 1);
        }
    }

    private applyBinding(child: $Chemical, parent: $Chemical): void {
        const bindings = getBindings(parent);

        if (!parent.childPositionCounts) {
            parent.childPositionCounts = new Map();
        }

        for (const binding of bindings) {
            if (binding.property === 'children') continue;

            if (this.matchesBinding(child, parent, binding)) {
                this.bindChild(child, parent, binding);
                break;
            }
        }
    }

    private matchesBinding(child: $Chemical, parent: $Chemical, binding: any): boolean {
        if (!(child instanceof binding.class!)) return false;

        if (binding.position !== undefined) {
            const count = parent.childPositionCounts!.get(binding.class) || 0;
            if (binding.position !== count) {
                parent.childPositionCounts!.set(binding.class!, count + 1);
                return false;
            }
            parent.childPositionCounts!.set(binding.class!, count + 1);
        }

        if (binding.where && !binding.where(child)) return false;

        return true;
    }

    private bindChild(child: $Chemical, parent: $Chemical, binding: any): void {
        // Ensure property is reactive before binding
        const descriptor = Object.getOwnPropertyDescriptor(parent, binding.property);
        const isReactive = descriptor && (descriptor.get || descriptor.set);
        
        if (!isReactive) {
            reactivateProperty(parent, binding.property, parent);
        }
        
        // Now assign through the reactive setter
        const prop = (parent as any)[binding.property];
        if (Array.isArray(prop)) {
            prop.push(child);
        } else if (!(parent as any)[binding.property]) {
            (parent as any)[binding.property] = child;
        }
    }

    private unbindChild(child: $Chemical, parent: $Chemical): void {
        const bindings = getBindings(parent);

        for (const binding of bindings) {
            if (binding.property === 'children') continue;

            const prop = (parent as any)[binding.property];
            if (Array.isArray(prop)) {
                const index = prop.indexOf(child);
                if (index >= 0) prop.splice(index, 1);
            } else if ((parent as any)[binding.property] === child) {
                (parent as any)[binding.property] = undefined;
            }
        }
    }

    private unregisterFromParent(child: $Chemical, parent: $Chemical): void {
        this.unbindChild(child, parent);
        this.untrackChild(parent, child);
    }

    private runCatalystMethods(instance: $Chemical): void {
        const methods = instance.constructor.prototype.catalystMethods;
        if (!methods) return;

        for (const methodName of methods) {
            if (typeof (instance as any)[methodName] === 'function') {
                (instance as any)[methodName]();
            }
        }
    }

    /**
     * Process children as a blueprint - extract binding information
     * but don't render them. The parent's view() will handle rendering.
     */
    private processChildrenAsBlueprint(instance: $Chemical, props: any): void {
        if (!props?.children) return;

        const childrenArray = React.Children.toArray(props.children);
        
        childrenArray.forEach(child => {
            if (React.isValidElement(child) && (child.type as any).isChemical) {
                // Get the constructor function from the child
                const ChildConstructor = child.type as any;
                
                // Create a lightweight instance for binding purposes
                // This is NOT a full React component - just an object for binding
                const childInstance = new ChildConstructor();
                
                // Apply props from JSX to the instance
                const childProps = child.props as any;
                for (const key in childProps) {
                    if (childProps.hasOwnProperty(key) && key !== 'children') {
                        const componentKey = '$' + String(key);
                        (childInstance as any)[componentKey] = childProps[key];
                    }
                }
                
                // Set parent reference
                childInstance.parent = instance;
                
                // Track and bind child
                this.trackChild(instance, childInstance);
                this.applyBinding(childInstance, instance);
                
                // Store the original React element on the child for later use
                (childInstance as any)._originalElement = child;
                
                // If the child has its own children, we need to preserve them
                if (childProps.children) {
                    (childInstance as any)._childrenFromJSX = childProps.children;
                }
            }
        });
    }
}

// [Rest of the decorators and helper functions remain the same...]