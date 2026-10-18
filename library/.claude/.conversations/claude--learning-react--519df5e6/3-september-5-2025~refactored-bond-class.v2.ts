class $Bond<T = any> {
    get id() { return this._id; }
    private _id: number;
    get chemical() { return this._chemical; }
    private _chemical: T;
    get property() { return this._property; }
    private _property: string;
    get type() { return this._type; }
    private _type?: Type;
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

    // Backing field for reactive property
    private _backingField: symbol;
    private _getValue?: () => any;
    private _setValue?: (value: any) => void;

    constructor(property: string, chemical: T) {
        this._id = $Bond.getNextBondId();
        this._chemical = chemical;
        this._property = property;
        this._backingField = Symbol(`_${property}${this._id}`);
        this._isInitialized = false;
        this._isReactive = false;
        this.configure();
    }

    freeze() {
        this._isInert = true;
    }

    refresh() {
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
            Object.defineProperty(chemical, this._property, {
                get: () => chemical.parent,
                enumerable: true,
                configurable: false,
            });
            this._isInitialized = true;
            return;
        }

        const chemical$: any = chemical;
        const descriptor = Object.getOwnPropertyDescriptor(chemical$, this._property);
        
        // Store getValue/setValue on bond instance for reuse
        this._getValue = descriptor?.get ? 
            () => descriptor.get!.call(chemical$) : 
            () => chemical$[this._backingField];
        this._setValue = descriptor?.set ? 
            (value: any) => descriptor.set!.call(chemical$, value) : 
            (value: any) => { chemical$[this._backingField] = value; };
        
        if (!descriptor?.get) this._setValue!(chemical$[this._property]);

        console.log(`Creating ${chemical.getType().name}.${this._property}`)
        Object.defineProperty(chemical$, this._property, {
            get: () => {
                const value = this._getValue!();
                console.log(`Getting value ${value} from property ${this._property}`)
                if (!this._isReactive || !this.isPolled) return value;
                
                const symbol = this._symbolizer(value);
                setTimeout(() => {
                    if (!this._isReactive) return;
                    const currentValue = this._getValue!();
                    const currentSymbol = this._symbolizer(currentValue);
                    if (currentSymbol !== symbol)
                        chemical.update();
                });
                return value;
            },
            set: (value: any) => {
                console.log(`Setting value ${value} from property ${this._property}`)
                if (!this._isSettable)
                    throw new Error(`${this._property} is not settable`);
                if (this._isRequired && value == null)
                    throw new Error(`${this._property} is required`);
                
                const previous = this._getValue!();
                this._setValue!(value);
                this.refresh();
                
                if (this._isChemical) {
                    this.checkType(value);
                    if (previous !== value) {
                        if (previous instanceof $Chemical) previous.onUpdate.unbind(chemical);
                        if (value instanceof $Chemical) value.onUpdate.bind(chemical);
                    }
                }

                if (!this._isReactive) return;
                if (this._symbolizer(previous) !== this._symbolizer(value)) {
                    chemical.update();
                }
            },
            enumerable: true,
            configurable: false,
        });

        this._isInitialized = true;
        this._isReactive = true;
    }

    double(chemical: T): $Bond<T> {
        const bond = Object.create(this) as $Bond<T>;
        bond._id = $Bond.getNextBondId();
        bond._chemical = chemical;
        bond._backingField = Symbol(`_${this._property}${bond._id}`);
        bond._isInitialized = false;
        bond._getValue = undefined;
        bond._setValue = undefined;
        bond.refresh();
        return bond;
    }

    equivalent(first: any, second: any) {
        return this._symbolizer(first) === this._symbolizer(second);
    }

    private configure() {
        const prototypes: any[] = [];
        let proto = this._chemical;
        while (proto) {
            prototypes.unshift(proto);
            if (proto === $Chemical.prototype) break;
            proto = Object.getPrototypeOf(proto);
        }
        
        for (const prototype of prototypes) {
            this.examine(prototype, prototype === this._chemical ? 'instance' : 'prototype');
        }
    }

    private examine(target: any, mode: 'instance' | 'prototype') {
        if (mode === 'prototype') {
            const decorators = target[decoratorsKey];
            if (!decorators) return;
            
            const parentType = decorators.parent.get(this._property);
            if (parentType) {
                this._type = parentType || $Chemical;
                this._isParent = true;
                this._isChemical = true;
                this._isInert = true;
                this._isSettable = false;
                return;
            }
            
            if (decorators.inert.get(this._property)) this._isInert = true;
            
            const dynamic = decorators.dynamic.get(this._property);
            if (dynamic !== undefined) {
                this._symbolizer = dynamic || symbolize;
                this._isMutable = true;
            }
            
            const $config = decorators.$.get(this._property);
            if ($config) {
                this._type = $config.type;
                this._isProp = this._property.startsWith('$');
                this._isChemical = true;
                this._isRequired = $config.expecting === '!';
                this._isCollective = $config.expecting === '[]';
                
                if (this._isProp) {
                    const chemical$ = this._chemical as any;
                    if (chemical$[this._property.substring(1)] === $Chemical.$set)
                        this._isExplicitlyBound = true;
                    else
                        this._isImplicitlyBound = true;
                }
            }
        }
        
        const descriptor = Object.getOwnPropertyDescriptor(target, this._property);
        if (descriptor?.get && !descriptor.set) {
            this._isSettable = false;
            this._isMutable = true;
            this._symbolizer = symbolize;
        }
        
        const value = descriptor?.get ? undefined : target[this._property];
        if (value == null) return;
        
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
            if (!this._isMutable) {
                this._isMutable = true;
                this._isValue = false;
                this._symbolizer = symbolize;
            }
        }
    }

    private checkType(value: any): void {
        if (!this._type || !this._isChemical || value == null) return;
        if (!(value instanceof this._type))
            throw new Error(`${this._property} must be an instance of ${this._type.name}`);
    }

    private static nextBondId = 1;
    private static getNextBondId(): number { return $Bond.nextBondId++; }
}