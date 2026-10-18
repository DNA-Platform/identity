"use client"
import React, { ReactNode, ReactElement, useState, useRef, useEffect } from 'react';
import stringify from 'fast-safe-stringify';

// Core framework types
type Constructor<T = {}> = new (...args: any[]) => T;
type Type<T = any> = Constructor<T>;
type Component<T = any> = React.FC<Properties<T>>;
type OptionalComponent<T = any> = React.FC<OptionalProperties<T>>;

type Properties<T = any> = {
    [K in keyof T as K extends `$${infer Rest}` ? Rest : never]: T[K]
} & {
    children?: ReactNode;
};

type OptionalProperties<T = any> = {
    [K in keyof T as K extends `$${infer Rest}` ? Rest : never]?: T[K]
} & {
    children?: ReactNode;
};

interface Setter<T extends $Chemical = $Chemical> {
    (value: T): void;
    instance?: $Chemical;
}

// Symbols on $Chemical
const decoratorsKey = Symbol('decoratorsField');

// Global registry for Chemical instances by key
const chemicalRegistry = new Map<Component, $Chemical>();

class DecoratorCache {
    $: Map<string, { type: Type, expecting: '?' | '!' | '[]' }> = new Map();
    parent: Map<string, Type> = new Map();
    inert: Map<string, boolean> = new Map();
    dynamic: Map<string, ((value: any) => any) | undefined> = new Map();
}

// A decorator for expressing configurable binding
export function $(type: Type, expecting: '?' | '!' | '[]' = '!') {
    type = resolveType(type);
    if (!(!type || type === $Chemical || type.prototype instanceof $Chemical))
        throw new Error(`$ decorator expects a $Chemical class instead of ${type?.name}`);
    return function (target: $Chemical, property: string) {
        const dynamicTarget: any = target;
        if (!dynamicTarget[decoratorsKey])
            dynamicTarget[decoratorsKey] = new DecoratorCache();
        const decorators: DecoratorCache = dynamicTarget[decoratorsKey];
        decorators.$.set(property, { type: type, expecting: expecting });
    };
}

// A decorator for reassigning the parent property
export function parent(type?: Type) {
    return function (target: $Chemical, property: string) {
        if (!type) type = $Chemical;
        const dynamicTarget: any = target;
        if (!dynamicTarget[decoratorsKey])
            dynamicTarget[decoratorsKey] = new DecoratorCache();
        const decorators: DecoratorCache = dynamicTarget[decoratorsKey];
        decorators.parent.set(property, type);
    };
}

// Decorator to mark a field as inert (non-reactive)
export function inert() {
    return function (target: any, property: string) {
        const dynamicTarget: any = target;
        if (!dynamicTarget[decoratorsKey])
            dynamicTarget[decoratorsKey] = new DecoratorCache();
        const decorators: DecoratorCache = dynamicTarget[decoratorsKey];
        decorators.inert.set(property, true);
    };
}

// Decorator for properties that should use deep equality comparison
export function dynamic(symbolizer?: (value: any) => any) {
    return function (target: any, property: string) {
        const dynamicTarget: any = target;
        if (!dynamicTarget[decoratorsKey])
            dynamicTarget[decoratorsKey] = new DecoratorCache();
        const decorators: DecoratorCache = dynamicTarget[decoratorsKey];
        decorators.dynamic.set(property, symbolizer || symbolize);
    };
}

export class $Chemical {
    @inert()
    private _diagram!: Diagram;

    @inert()
    get chemicalId() { return this._id; }
    private _id: number;

    @inert()
    get formula(): this { return this.getType()._formula as any; }

    @inert()
    get formulaId() { return this.formula.chemicalId; }

    @inert()
    get Component(): Component<this> {
        // Ensure that the formula creates a new model every time
        if (this.formula === this) 
            this._component = undefined;
        if (!this._component)
            this.assignComponent();

        return this._component!;
    }
    private _component?: Component<this>;

    @inert()
    get reactive(): boolean { return this._reactive; }
    private _reactive: boolean = true;

    @inert()
    get intert(): boolean { return !this._reactive; }

    @inert()
    children?: ReactNode;

    @parent()
    get parent() { return this._parent; }
    private _parent: $Chemical | undefined;

    @inert()
    get onReceivingProps() { return this._onReceivingProps; }
    private _onReceivingProps = new Event<this, Properties>(this);

    @inert()
    get onRenderingView() { return this._onRenderingView; }
    private _onRenderingView = new Event<this, { props: Properties, view: ReactNode }>(this);

    @inert()
    get onRenderedView() { return this._onRenderedView; }
    private _onRenderedView = new DelayedEvent<this, { props: Properties, view: ReactNode }>(this);

    @inert()
    get onUpdate() { return this._onUpdate; }
    private _onUpdate = new UpdateEvent(this);

    @inert()
    private _updateReact?: () => void;

    $on?: Setter;

    constructor() {
        this._id = $Chemical.getNextChemicalId();
        const type = this.getType();
        if (!type._formula) {
            type._formula = this;
            this.constructFormula();
        } else {
            this._diagram = this.formula._diagram.duplicate(this);
        }
    }

    construct(parent?: $Chemical): this {
        const formula = this.getType()._formula;
        const chemical = Object.create(formula) as this;

        chemical._parent = parent;
        chemical._id = $Chemical.getNextChemicalId(); 
        chemical._diagram = formula._diagram.duplicate(chemical);

        return chemical as this;
    }

    // Override this to control rendering
    view(): ReactNode {
        // Default implementation shows the existing children from the props
        return this.children;
    }

    reactivate() {
        this._reactive = true;
        this._diagram.bonds.forEach(bond => {
            bond.isReactive = true;
            bond.reactivate(this);
        });
    }

    deactivate() {
        this._reactive = false;
        this._onUpdate.cancelUpdate();
        this._diagram.bonds.forEach(bond => {
            bond.isReactive = false;
        });
    }

    update(): void {
        console.log('Chemical update called, firing onUpdate');
        this.onUpdate.fire();
        // Also trigger React update if available
        if (this._updateReact) {
            console.log('Triggering React update');
            this._updateReact();
        }
    }

    getType<T extends Type = typeof $Chemical>(): T {
        return this.constructor as any;
    }

    // Must only be run for the formula
    private constructFormula() {
        this._diagram = new Diagram(this);
    }

    private assignComponent(): void {
        const formula = this.getType()._formula as this;
        const isFormula = this === formula;
        if (!isFormula && this._component) return

        const Component = (props: Properties) => {
            let chemical = chemicalRegistry.get(Component) as this;
            let newChemical = false;
            if (!chemical || isFormula) {
                chemical = this.construct();
                chemical._component = Component;
                chemicalRegistry.set(Component as any, chemical);
                newChemical = true;
            }

            // Set up this component's update function
            const [, update] = useState({});
            
            // Store the update function on the chemical instance
            useEffect(() => {
                console.log('Setting up React update function');
                chemical._updateReact = () => {
                    console.log('React update function called');
                    update({});
                };
                
                // Subscribe to update events
                const updateChemical = () => {
                    console.log('Update event received');
                    if (chemical._updateReact) {
                        chemical._updateReact