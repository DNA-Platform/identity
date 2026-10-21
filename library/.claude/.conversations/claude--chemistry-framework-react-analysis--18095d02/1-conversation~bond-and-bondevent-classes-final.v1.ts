class BondEvent {
    private bond: $Bond;
    private subscribers: ((chemical: $Chemical, symbol: any) => void)[] = []
    private map = new Map<$Chemical, (chemical: $Chemical, symbol: any) => void>();

    constructor(bond: $Bond) {
        this.bond = bond;
    }
    
    subscribe(chemical: $Chemical, subscriber: (chemical: $Chemical, symbol: any) => void): void {
        this.subscribers.push(subscriber);
        this.map.set(chemical, subscriber);
    }
    
    unsubscribe(chemical: $Chemical): void {
        const subscriber = this.map.get(chemical);
        if (!subscriber) return;
        
        const index = this.subscribers.indexOf(subscriber);
        if (index >= 0) this.subscribers.splice(index, 1);
        this.map.delete(chemical);
    }

    fire(symbol: any): void {
        const chemical = this.bond.chemical;
        for (const subscriber of this.subscribers)
            subscriber(chemical, symbol);
    }
    
    clear() {
        this.map.clear();
        this.subscribers = [];
    }
}

class $Bond<T extends $Chemical = any, P = any> {
    private _id: string;
    private _chemical: T;
    private _property: string;
    private _type?: Type;
    private _backingField: symbol;
    private _isInitialized = false;
    private _isChemical = false;
    private _isCollective = false;
    private _isRequired = false;
    private _isFrozen = false;
    private _isProp = false;
    private _symbolizer: (value: any) => any = (v) => v;
    private _onGet: BondEvent;

    get id() { return this._id; }
    get chemical() { return this._chemical; }
    get property() { return this._property; }
    get type() { return this._type; }
    get value(): P { return (this._chemical as any)[this._property]; }
    set value(value: P) { (this._chemical as any)[this._property] = value; }
    get descriptor() { return Object.getOwnPropertyDescriptor(this._chemical, this._property); }
    get isChemical() { return this._isChemical; }
    get isCollective() { return this._isCollective; }
    get isRequired() { return this._isRequired; }
    get isFrozen() { return this._isFrozen; }
    get isProp() { return this._isProp; }
    get symbolizer() { return this._symbolizer; }
    get onGet() { return this._onGet; }

    constructor(property: string, chemical: T) {
        this._chemical = chemical;
        this._property = property;
        this._id = `${chemical.getType().name}[${$Bond.nextId++}].${property}`;
        this._backingField = Symbol(`_${property}`);
        this._onGet = new BondEvent(this);
        this.configure();
    }

    freeze() { this._isFrozen = true; }
    
    reactivate(chemical: $Chemical): void {
        if (this._isInitialized) return;
        
        const bond = this;
        const chemical$: any = chemical;
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
                bond._onGet.fire(bond._symbolizer(value));
                return value;
            },
            set(value: P) {
                if (bond._isFrozen) throw new Error(`${bond._property} is frozen`);
                if (bond._isRequired && value == null) throw new Error(`${bond._property} is required`);
                setValue(value);
            },
            enumerable: true,
            configurable: false,
        });
        
        this._isInitialized = true;
    }

    private configure() {
        let proto = this._chemical as any;
        while (proto && proto !== $Chemical.prototype) {
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
                
                const dynamic = decorators.dynamic.get(this._property);
                if (dynamic) this._symbolizer = dynamic;
            }
            proto = Object.getPrototypeOf(proto);
        }
        
        const value = this.value;
        if (value == null) return;
        if (this._symbolizer !== ((v) => v)) return;
        
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

    private static nextId = 1;
}