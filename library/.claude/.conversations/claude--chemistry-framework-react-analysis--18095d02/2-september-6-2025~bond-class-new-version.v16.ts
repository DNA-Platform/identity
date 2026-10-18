class $Bond<T extends $Chemical = any, P = any> {
    get id() { return this._id; }
    private _id: string;
    get chemical() { return this._chemical; }
    private _chemical: T;
    get property() { return this._property; }
    private _property: string;
    get type() { return this._type; }
    private _type?: Type;
    get value(): P { return (this._chemical as any)[this._property]; }
    set value(value: P) { (this._chemical as any)[this._property] = value; }
    get descriptor() { return this._descriptor; }
    private _descriptor?: PropertyDescriptor;
    
    get isChemical() { return this._isChemical; }
    private _isChemical = false;
    get isCollective() { return this._isCollective; }
    private _isCollective = false;
    get isRequired() { return this._isRequired; }
    private _isRequired = false;
    get isFrozen() { return this._isFrozen; }
    private _isFrozen = false;
    get isProp() { return this._isProp; }
    private _isProp = false;
    get symbolizer() { return this._symbolizer; }
    private _symbolizer: (value: any) => any = (value) => value;
    
    get onGet() { return this._onGet; }
    private _onGet: BondEvent<$Bond<T, P>, any>;

    private _backingField: symbol;
    private _isInitialized = false;

    constructor(property: string, chemical: T) {
        this._chemical = chemical;
        this._property = property;
        this._id = $Bond.getNextBondId(chemical, property);
        this._backingField = Symbol(`_${property}`);
        this._onGet = new BondEvent(this);
        this.configure();
    }

    freeze() { this._isFrozen = true; }
    
    activate(chemical: $Chemical): void {
        if (this._isInitialized) return;
        
        const chemical$: any = chemical;
        const bond = this;
        const backingField = this._backingField;
        
        const existingDesc = Object.getOwnPropertyDescriptor(chemical$, this._property);
        const getValue = existingDesc?.get ? 
            () => existingDesc.get!.call(chemical$) : 
            () => chemical$[backingField];
        const setValue = existingDesc?.set ? 
            (v: P) => existingDesc.set!.call(chemical$, v) : 
            (v: P) => { chemical$[backingField] = v; };
        
        if (!existingDesc?.get && chemical$[this._property] !== undefined)
            setValue(chemical$[this._property]);
        
        Object.defineProperty(chemical$, this._property, {
            get() {
                const value = getValue();
                const symbol = bond._symbolizer(value);
                bond._onGet.fire({ value, symbol });
                return value;
            },
            set(value: P) {
                if (bond._isFrozen) throw new Error(`${bond._property} is frozen`);
                if (bond._isRequired && value == null) throw new Error(`${bond._property} is required`);
                
                const previous = getValue();
                setValue(value);
                
                // Handle Chemical binding changes
                if (bond._isChemical && previous !== value) {
                    if (previous instanceof $Chemical) previous.onUpdate.unbind(chemical);
                    if (value instanceof $Chemical) value.onUpdate.bind(chemical);
                }
            },
            enumerable: true,
            configurable: false,
        });
        
        this._isInitialized = true;
    }

    private configure() {
        let proto = this._chemical as any;
        while (proto) {
            const decorators = proto[decoratorsKey];
            if (decorators) {
                const $config = decorators.$.get(this._property);
                if ($config) {
                    this._type = $config.type;
                    this._isChemical = true;
                    this._isProp = this._property.startsWith('$');
                    this._isRequired = $config.expecting === '!';
                    this._isCollective = $config.expecting === '[]';
                }
                
                if (decorators.dynamic.get(this._property))
                    this._symbolizer = decorators.dynamic.get(this._property) || symbolize;
            }
            
            if (proto === $Chemical.prototype) break;
            proto = Object.getPrototypeOf(proto);
        }
        
        // Infer symbolizer from value if not set
        const value = this.value;
        if (value != null && this._symbolizer === ((v) => v)) {
            if (value instanceof $Chemical) {
                this._isChemical = true;
                this._symbolizer = (v: any) => v?.cid;
            } else if (Array.isArray(value) && value[0] instanceof $Chemical) {
                this._isChemical = true;
                this._isCollective = true;
                this._symbolizer = (v: any[]) => symbolize(v?.map(c => c?.cid));
            } else if (typeof value === 'object') {
                this._symbolizer = symbolize;
            }
        }
    }

    private static nextBondId = 1;
    private static getNextBondId(chemical: any, property: string): string {
        const typeName = chemical.getType ? chemical.getType().name : chemical.constructor.name;
        return `${typeName}[${$Bond.nextBondId++}].${property}`;
    }
}