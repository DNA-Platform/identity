class $Bond<T extends $Chemical = any, P = any> {
    get id() { return this._id; }
    private _id: string;
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
    get symbolizer() { return this._symbolizer; }
    private _symbolizer: (value: any) => any = (value) => value;
    
    private _isReactive = true;
    get isReactive() { return this._isInert ? false : this._isReactive; }
    set isReactive(value: boolean) { this._isReactive = value; }
    get isPolled() { return this._isMutable || !this._isSettable; }

    get onGet() { return this._onGet; }
    private _onGet: Event<$Bond<T, P>, P>;

    get value(): P { return (this._chemical as any)[this._property]; }
    set value(value: P) { (this._chemical as any)[this._property] = value; }

    private _backingField: symbol;

    constructor(property: string, chemical: T) {
        this._chemical = chemical;
        this._property = property;
        this._id = $Bond.getNextBondId(chemical, property);
        this._backingField = Symbol(`_${property}${this._id}`);
        this._onGet = new Event(this);
        this._isInitialized = false;
        this._isReactive = false;
        this.configure();
    }

    freeze() { this._isInert = true; }
    refresh() { this.examine(this._chemical, 'instance'); }

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

        const chemical$: any = chemical;
        const bond = this;
        const backingField = this._backingField;
        
        if (this._isParent) {
            Object.defineProperty(chemical, this._property, {
                get: () => chemical.parent,
                enumerable: true,
                configurable: false,
            });
            this._isInitialized = true;
            return;
        }
        
        const existingDesc = Object.getOwnPropertyDescriptor(chemical$, this._property);
        const getValue = existingDesc?.get ? 
            () => existingDesc.get!.call(chemical$) : 
            () => chemical$[backingField];
        const setValue = existingDesc?.set ? 
            (v: P) => existingDesc.set!.call(chemical$, v) : 
            (v: P) => { chemical$[backingField] = v; };
        
        if (!existingDesc?.get) setValue(chemical$[this._property]);
        
        Object.defineProperty(chemical$, this._property, {
            get() {
                const value = getValue();
                if (!bond._isReactive || !bond.isPolled) return value;
                
                const result = bond._onGet.fire(value);
                if (result !== undefined) return result;
                
                const symbol = bond._symbolizer(value);
                setTimeout(() => {
                    if (!bond._isReactive) return;
                    if (bond._symbolizer(getValue()) !== symbol) chemical.update();
                });
                return value;
            },
            set(value: P) {
                if (!bond._isSettable) throw new Error(`${bond._property} is not settable`);
                if (bond._isRequired && value == null) throw new Error(`${bond._property} is required`);
                
                const previous = getValue();
                setValue(value);
                bond.refresh();
                
                if (bond._isChemical && previous !== value) {
                    bond.checkType(value);
                    if (previous instanceof $Chemical) previous.onUpdate.unbind(chemical);
                    if (value instanceof $Chemical) value.onUpdate.bind(chemical);
                }
                
                if (bond._isReactive && bond._symbolizer(previous) !== bond._symbolizer(value))
                    chemical.update();
            },
            enumerable: true,
            configurable: false,
        });
        
        this._isInitialized = true;
        this._isReactive = true;
    }

    equivalent(first: any, second: any) {
        return this._symbolizer(first) === this._symbolizer(second);
    }

    private configure() {
        let proto = this._chemical as any;
        const protos = [];
        while (proto) {
            protos.unshift(proto);
            if (proto === $Chemical.prototype) break;
            proto = Object.getPrototypeOf(proto);
        }
        protos.forEach(p => this.examine(p, p === this._chemical ? 'instance' : 'prototype'));
    }

    private examine(target: any, mode: 'instance' | 'prototype') {
        const value = target[this._property];
        const descriptor = Object.getOwnPropertyDescriptor(target, this._property);
        
        if (mode === 'prototype') {
            const decorators = target[decoratorsKey];
            if (!decorators) return;
            
            if (decorators.parent.get(this._property)) {
                this._isParent = this._isChemical = this._isInert = true;
                this._isSettable = false;
                this._type = decorators.parent.get(this._property) || $Chemical;
                return;
            }
            
            if (decorators.inert.get(this._property)) {
                this._isInert = true;
                return;
            }
            
            const $config = decorators.$.get(this._property);
            if ($config) {
                this._type = $config.type;
                this._isChemical = true;
                this._isProp = this._property.startsWith('$');
                this._isRequired = $config.expecting === '!';
                this._isCollective = $config.expecting === '[]';
            }
            
            if (decorators.dynamic.get(this._property)) {
                this._symbolizer = decorators.dynamic.get(this._property) || symbolize;
                this._isMutable = true;
            }
            
            if (typeof value === 'function') {
                this._isInert = !decorators.reactive.get(this._property);
                if (!this._isInert) {
                    this._isMutable = true;
                    this._symbolizer = () => this._property;
                }
                return;
            }
        }
        
        if (descriptor?.get && !descriptor.set) {
            this._isSettable = false;
            this._isMutable = true;
            this._symbolizer ||= symbolize;
        }
        
        if (value == null) return;
        
        if (value instanceof $Chemical) {
            this._isChemical = true;
            this._symbolizer = (v: any) => v?.cid;
            this._type ||= value.constructor as Type;
        } else if (typeof value === 'object') {
            if (Array.isArray(value) && value[0] instanceof $Chemical) {
                this._isCollective = true;
                this._isChemical = true;
                this._symbolizer = (v: any[]) => symbolize(v?.map(c => c?.cid));
            } else {
                this._isMutable = true;
                this._symbolizer = symbolize;
            }
        } else if (typeof value !== 'function') {
            this._symbolizer = (v) => v;
        }
    }

    private checkType(value: any): void {
        if (!this._type || !this._isChemical || value == null) return;
        if (!(value instanceof this._type))
            throw new Error(`${this._property} must be an instance of ${this._type.name}`);
    }

    private static nextBondId = 1;
    private static getNextBondId(chemical: any, property: string): string {
        const typeName = chemical.getType ? chemical.getType().name : chemical.constructor.name;
        return `${typeName}[${$Bond.nextBondId++}].${property}`;
    }
}