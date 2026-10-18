// Bond Configuration Logic Analysis:
//
// The Bond class encapsulates how a property becomes reactive. The logic flow:
// 
// 1. CONSTRUCTOR: Creates bond with property name and chemical instance
// 2. CONFIGURE: Walks prototype chain from most general to most specific:
//    - Starts at Object/Chemical prototype
//    - Works down to the actual instance
//    - Each level can add/override bond characteristics
// 3. EXAMINE: At each prototype level, checks:
//    - Decorator cache (only on prototypes) for @parent, @inert, @dynamic, @$ decorators
//    - Property descriptors for getter/setter patterns
//    - Actual values to infer type characteristics
// 4. REFRESH: Re-examines only the instance level for runtime changes
// 5. REACTIVATE: Creates the reactive property descriptor that intercepts get/set
// 6. DOUBLE: Clones bond for a new chemical instance, preserving configuration

class $Bond<T = any> {
    get id() { return this._id; }
    private _id: number;
    get chemical() { return this._chemical; }
    private _chemical: T;
    get descriptor() { return this._descriptor; }
    private _descriptor?: PropertyDescriptor;
    get type() { return this._type; }
    private _type?: Type;
    get property() { return this._property; }
    private _property: string;
    get isInitialized() { return this._isInitialized; }
    private _isInitialized: boolean;
    
    get isParent() { return this._isParent; }
    private _isParent = false;
    get isChemical() { return this._isChemical; }
    private _isChemical = false;
    get isMutable() { return this._isMutable; }
    private _isMutable = false;
    get isValue() { return this._isValue; }
    private _isValue = false;
    get isCollective() { return this._isCollective; }
    private _isCollective = false;
    get isSettable() { return this._isSettable; }
    private _isSettable = true;
    get isRequired() { return this._isRequired; }
    private _isRequired = false;
    get isInert() { return this._isInert; }
    private _isInert = false;
    get isProp() { return this._isProp; }
    private _isProp = false;
    get isDelayed() { return this._isDelayed; }
    private _isDelayed = false;
    get isImplicitlyBound() { return this._isImplicitlyBound; }
    private _isImplicitlyBound = false;
    get isExplicitlyBound() { return this._isExplicitlyBound; }
    private _isExplicitlyBound = false;
    get symbolizer() { return this._symbolizer; }
    private _symbolizer: (value: any) => any = (value) => value;
    
    private _isReactive = true;
    get isReactive() { return this._isInert ? false : this._isReactive; }
    set isReactive(value: boolean) { this._isReactive = value; }
    get isPolled() { return this._isMutable || !this._isSettable; }

    constructor(property: string, chemical: T) {
        this._id = $Bond.getNextBondId();
        this._chemical = chemical;
        this._property = property;
        this._isInitialized = false;
        this._isReactive = false;
        this.configure();
    }

    private configure() {
        // Build prototype chain from most general to most specific
        const prototypes: any[] = [];
        let proto = this._chemical;
        while (proto) {
            prototypes.unshift(proto);
            if (proto === $Chemical.prototype) break;
            proto = Object.getPrototypeOf(proto);
        }
        
        // Walk from general to specific, building up bond characteristics
        for (const prototype of prototypes) {
            this.examine(prototype, prototype === this._chemical ? 'instance' : 'prototype');
        }
    }

    private examine(target: any, mode: 'instance' | 'prototype') {
        // Check decorator cache on prototypes
        if (mode === 'prototype') {
            const decorators = target[decoratorsKey];
            if (!decorators) return;
            
            // @parent decorator
            const parentType = decorators.parent.get(this._property);
            if (parentType) {
                this._type = parentType || $Chemical;
                this._isParent = true;
                this._isChemical = true;
                this._isInert = true;
                this._isSettable = false;
                return; // Parent overrides everything else
            }
            
            // @inert decorator
            const inert = decorators.inert.get(this._property);
            if (inert) this._isInert = true;
            
            // @dynamic decorator
            const dynamic = decorators.dynamic.get(this._property);
            if (dynamic !== undefined) {
                this._symbolizer = dynamic || symbolize;
                this._isMutable = true;
            }
            
            // @$ decorator for Chemical bindings
            const $config = decorators.$.get(this._property);
            if ($config) {
                this._type = $config.type;
                this._isProp = this._property.startsWith('$');
                this._isChemical = true;
                
                // Handle expecting parameter
                if ($config.expecting === '[]') {
                    this._isCollective = true;
                    this._isRequired = true;
                    // Initialize empty array if needed
                    const chemical = this._chemical as any;
                    const value = chemical[this._property];
                    if (value && !Array.isArray(value)) 
                        throw new Error(`${this._property} marked array but isn't`);
                    if (!value) chemical[this._property] = [];
                } else {
                    this._isRequired = $config.expecting === '!';
                    if ($config.expecting === '?' && Array.isArray(target[this._property]))
                        throw new Error(`${this._property} optional but is array`);
                    
                    // Initialize required Chemical with placeholder
                    if (this._isRequired && this._isChemical && !target[this._property]) {
                        const formula = (this._type as any).example || (this._type as any).prototype;
                        const chemical = this._chemical as any;
                        chemical[this._property] = Object.create(formula);
                        chemical[this._property]._reactive = false;
                    }
                }
                
                // Check for explicit binding
                if (this._isProp) {
                    const chemical = this._chemical as any;
                    const baseName = this._property.substring(1);
                    if (chemical[baseName] === $Chemical.$set) {
                        this._isExplicitlyBound = true;
                    } else {
                        this._isImplicitlyBound = true;
                    }
                }
            }
        }
        
        // Check property descriptor for getter/setter
        const descriptor = Object.getOwnPropertyDescriptor(target, this._property);
        if (descriptor?.get && !descriptor.set) {
            this._isSettable = false;
            this._isMutable = true;
            if (!this._symbolizer || this._symbolizer === ((v: any) => v))
                this._symbolizer = symbolize;
        }
        
        // Examine value to infer type characteristics
        const value = descriptor?.get ? undefined : target[this._property];
        if (value === null || value === undefined) return;
        
        if (value instanceof $Chemical) {
            this._isChemical = true;
            this._isValue = true;
            this._isMutable = false;
            this._symbolizer = (v) => v;
            if (!this._type) this._type = value.constructor as Type;
            return;
        }
        
        const valueType = typeof value;
        if (valueType === 'string' || valueType === 'number' || valueType === 'boolean') {
            if (!this._isValue && !this._isMutable) {
                this._isValue = true;
                this._symbolizer = (v) => v;
            }
            return;
        }
        
        if (valueType === 'object') {
            if (this._isCollective && !Array.isArray(value))
                throw new Error(`${this._property} is collective but got non-array`);
            if (!this._isCollective && Array.isArray(value) && this._isRequired)
                throw new Error(`${this._property} got unexpected array`);
            
            if (!this._isMutable) {
                this._isMutable = true;
                this._isValue = false;
                this._symbolizer = symbolize;
            }
        }
    }

    refresh() {
        // Only re-examine the instance level, not prototypes
        this.examine(this._chemical, 'instance');
    }

    deactivate(chemical: $Chemical) {
        if (chemical === chemical.getType().example)
            throw new Error('Examples should not have activated properties');
        this._isReactive = false;
    }

    reactivate(chemical: $Chemical): any {
        if (chemical === chemical.getType().example)
            throw new Error('Examples should not have activated properties');

        if (this._isInitialized) {
            this._isReactive = true;
            return;
        }

        if (this._isParent) {
            console.log(`Creating ${chemical.getType().name}.${this._property} as parent`)
            this._descriptor = Object.getOwnPropertyDescriptor(
                Object.defineProperty(chemical, this._property, {
                    get() { return chemical.parent; },
                    enumerable: true,
                    configurable: false,
                }),
                this._property
            );
            this._isInitialized = true;
            return;
        }

        const thisBond = this;
        const chemical$: any = chemical;
        const backingField = Symbol(`_${this._property}${this._id}`);
        const existingDescriptor = Object.getOwnPropertyDescriptor(chemical$, this._property);
        const getValue = existingDescriptor?.get ? 
            () => existingDescriptor.get!.call(chemical$) : 
            () => chemical$[backingField];
        const setValue = existingDescriptor?.set ? 
            (value: any) => existingDescriptor.set!.call(chemical$, value) : 
            (value: any) => { chemical$[backingField] = value; };
        
        // Initialize backing field if no getter exists
        if (!existingDescriptor?.get) setValue(chemical$[this._property]);

        console.log(`Creating ${chemical.getType().name}.${this._property}`)
        this._descriptor = Object.getOwnPropertyDescriptor(
            Object.defineProperty(chemical$, this._property, {
                get() {
                    const value = getValue();
                    console.log(`Getting value ${value} from property ${thisBond._property}`)
                    if (!thisBond._isReactive || !thisBond.isPolled) return value;
                    
                    const symbol = thisBond._symbolizer(value);
                    setTimeout(() => {
                        if (!thisBond._isReactive) return;
                        const currentValue = getValue();
                        const currentSymbol = thisBond._symbolizer(currentValue);
                        if (currentSymbol !== symbol)
                            chemical.update();
                    });
                    return value;
                },
                set(value: any) {
                    console.log(`Setting value ${value} from property ${thisBond._property}`)
                    if (!thisBond._isSettable)
                        throw new Error(`${thisBond._property} is not settable`);
                    if (thisBond._isRequired && value == null)
                        throw new Error(`${thisBond._property} is required`);
                    
                    const previous = getValue();
                    setValue(value);
                    thisBond.refresh(); // Update bond characteristics based on new value
                    
                    if (thisBond._isChemical) {
                        thisBond.checkType(value);
                        if (previous !== value) {
                            if (previous instanceof $Chemical) previous.onUpdate.unbind(chemical);
                            if (value instanceof $Chemical) value.onUpdate.bind(chemical);
                        }
                    }

                    if (!thisBond._isReactive) return;
                    if (thisBond._symbolizer(previous) !== thisBond._symbolizer(value)) {
                        chemical.update();
                    }
                },
                enumerable: true,
                configurable: false,
            }),
            this._property
        );

        this._isInitialized = true;
        this._isReactive = true;
    }

    double(chemical: T): $Bond<T> {
        const bond = Object.create(this) as $Bond<T>;
        bond._id = $Bond.getNextBondId();
        bond._chemical = chemical;
        bond._isInitialized = false;
        bond._descriptor = undefined;
        
        // If original has a descriptor, we need to reactivate on new chemical
        if (this._descriptor && this._isInitialized) {
            bond.refresh(); // Update characteristics for new chemical
            if (chemical instanceof $Chemical) {
                bond.reactivate(chemical as any);
            }
        } else {
            bond.refresh();
        }
        
        return bond;
    }

    equivalent(first: any, second: any) {
        return this._symbolizer(first) === this._symbolizer(second);
    }

    private checkType(value: any): void {
        if (!this._type || !this._isChemical || value == null) return;
        if (!(value instanceof this._type))
            throw new Error(`${this._property} must be an instance of ${this._type.name}`);
    }

    private static nextBondId = 1;
    private static getNextBondId(): number { return $Bond.nextBondId++; }
}