"use client"
import React, { ReactNode, ReactElement, useState, useRef, useEffect } from 'react';

// Symbol for tracking reactified objects
const reactivated = Symbol('reactivated');
const backingFields = Symbol('backingFields');
const originalValues = Symbol('originalValues');
const deactivated = Symbol('deactivated');
const comparerSymbol = Symbol('comparer');

// Near the top of the file, with other symbols and constants
const componentUpdaters = new WeakMap<object, () => void>();

/**
 * Interface that allows you to use fields prefixed with $ as props
 */
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

    // Public inert properties
    @inert()
    public Component!: React.FC<Properties<this>>;

    @inert()
    public parent?: $Chemical;

    @inert()
    public children: $Chemical[] = [];

    @inert()
    public elements?: ReactNode;

    // Constructor
    constructor() {
        this.Component = this.createComponent();
    }

    // Public methods
    view(): ReactNode {
        return this.elements;
    }
    
    above(): ReactNode | undefined {
        return undefined;
    }
    
    below(): ReactNode | undefined {
        return undefined;
    }

    // Private methods
    private createComponent(): React.FC<Properties<this>> {
        const self = this;

        const ChemicalComponent: React.FC<Properties<this>> = (props: any) => {
            const instance = self.createInstance();
            const [, forceUpdate] = useState({});

            useEffect(() => {
                self.setupInstance(instance, props, () => forceUpdate({}));
                return () => self.cleanupInstance(instance);
            }, []);

            // PHASE 1: Process children and bind them FIRST
            self.processChildren(instance, props);
            
            // PHASE 2: Now render with children properly bound
            return self.renderInstance(instance);
        };

        (ChemicalComponent as any).isChemical = true;
        return ChemicalComponent;
    }

    private createInstance(): $Chemical {
        const instance = Object.create(this);
        instance.children = [];
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
        console.log('handleParentBinding called', props);
        if (!props.__parentInstance) {
            console.log('No parent instance in props');
            return;
        }

        instance.parent = props.__parentInstance;
        console.log('Registering child with parent: ' + props.__parentInstance);
        if (instance.parent)
            this.registerWithParent(instance, instance.parent);
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
        console.log('applyBinding - bindings:', bindings);
        console.log('applyBinding - child:', child);
        console.log('applyBinding - parent:', parent);

        if (!parent.childPositionCounts) {
            parent.childPositionCounts = new Map();
        }

        for (const binding of bindings) {
            if (binding.property === 'children') continue;

            console.log('Checking binding:', binding);
            if (this.matchesBinding(child, parent, binding)) {
                console.log('Binding matched! Applying...');
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
            // Use the centralized reactivateProperty function
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

    private processChildren(instance: $Chemical, props: any): void {
        if (!props?.children) return;

        // First, process all children to create their instances
        const childrenArray = React.Children.toArray(props.children);
        const childInstances: $Chemical[] = [];
        
        childrenArray.forEach(child => {
            if (React.isValidElement(child) && (child.type as any).isChemical) {
                // Create child instance
                const ChildClass = child.type as any;
                const childInstance = Object.create(ChildClass.prototype);
                childInstance.children = [];
                
                // Apply props to child
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
                
                childInstances.push(childInstance);
            }
        });
        
        // Now store the modified children for rendering
        const modifiedChildren = this.modifyChildren(instance, props.children);
        instance.elements = modifiedChildren;
    }

    private modifyChildren(instance: $Chemical, children: ReactNode): ReactNode {
        console.log('modifyChildren called, instance:', instance);
        const childrenArray = React.Children.toArray(children);
        console.log('childrenArray:', childrenArray);

        return childrenArray.map(child => {
            if (React.isValidElement(child) && (child.type as any).isChemical) {
                console.log('Found Chemical child, adding __parentInstance');
                return React.cloneElement(child as any, {
                    ...(child.props as any),
                    __parentInstance: instance
                });
            }
            return child;
        });
    }
    
    private renderInstance(instance: $Chemical): ReactNode {
        const aboveNode = instance.above();
        const mainNode = instance.view();
        const belowNode = instance.below();
        
        if (!aboveNode && !belowNode) {
            return mainNode;
        }
        
        return this.createFragment(aboveNode, mainNode, belowNode);
    }

    private createFragment(above?: ReactNode, main?: ReactNode, below?: ReactNode): ReactNode {
        const children: ReactNode[] = [];

        if (above) children.push(above);
        if (main) children.push(main);
        if (below) children.push(below);

        return React.createElement(React.Fragment, null, ...children);
    }
}

// ... rest of the file remains the same (all the helper functions, decorators, etc.)
// I'm showing just the changed parts for clarity

/**
 * Get merged bindings for a Chemical instance
 */
function getBindings(instance: $Chemical): any[] {
    const constructor = instance.constructor as any;

    // Return cached if available
    if (constructor._mergedBindings) {
        return constructor._mergedBindings;
    }

    // Build merged map
    const mergedMap = new Map<string, any>();

    // Walk up prototype chain, child bindings override parent
    let proto = constructor;
    while (proto && proto !== $Chemical) {
        if (proto.__bindingsMap) {
            proto.__bindingsMap.forEach((binding: any, key: string) => {
                // Only add if not already set by child class
                if (!mergedMap.has(key)) {
                    mergedMap.set(key, { ...binding, property: key });
                }
            });
        }
        proto = Object.getPrototypeOf(proto);
    }

    // Convert to array, filter invalid, and sort
    const bindings: any[] = [];
    mergedMap.forEach(binding => {
        if (!binding.class) {
            console.warn(`Binding for '${binding.property}' missing @child decorator`);
            return;
        }
        bindings.push(binding);
    });

    // Sort: indexed first, then by index value
    bindings.sort((a, b) => {
        if (a.position !== undefined && b.position === undefined) return -1;
        if (b.position !== undefined && a.position === undefined) return 1;
        if (a.position !== undefined && b.position !== undefined) {
            return a.position - b.position;
        }
        return 0;
    });

    // Cache and return
    constructor._mergedBindings = bindings;
    return bindings;
}