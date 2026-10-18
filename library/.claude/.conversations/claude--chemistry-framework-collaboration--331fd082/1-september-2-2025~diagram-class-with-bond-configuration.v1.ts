class Diagram {
    chemical: $Chemical;
    bonds: Map<string, Bond> = new Map();
    
    get props() { 
        const props: Bond[] = [];
        this.bonds.forEach(bond => { if (bond.isProp) props.push(bond); });
        return props;
    }
    
    get chemicals() { 
        const chemicals: Bond[] = [];
        this.bonds.forEach(bond => { if (bond.isChemical) chemicals.push(bond); });
        return chemicals;
    }
    
    constructor(chemical: $Chemical) {
        this.chemical = chemical;
        this.enumerateBonds();
    }

    enumerateBonds() {
        const prototypes: any[] = [];
        let proto = this.chemical;
        while (proto) {
            prototypes.unshift(proto);
            if (proto === $Chemical.prototype) break;
            proto = Object.getPrototypeOf(proto);
        }
        
        for (const p of prototypes) {
            for (const property in p) {
                const value = p[property];
                if (!isReactiveProperty(p, property, value)) continue;
                this.configureBond(property, value, p[decoratorsKey]);
            }
        }
    }
    
    configureBond(property: string, value: any, decorators?: DecoratorCache): Bond {
        let bond = this.bonds.get(property);
        if (!bond) {
            bond = new Bond(property, Object);
            this.bonds.set(property, bond);
        }
        
        if (decorators?.inert.has(property)) {
            bond.isInert = true;
            return bond;
        }
        
        const parentType = decorators?.parent.get(property);
        if (parentType) {
            bond.type = parentType;
            bond.isChemical = true;
            bond.isInert = true;
            return bond;
        }
        
        const comparer = decorators?.dynamic.get(property);
        if (comparer !== undefined) {
            bond.comparer = comparer || ((a: any, b: any) => represent(a) === represent(b));
            if (!bond.isChemical) bond.isObjective = true;
        }
        
        const $config = decorators?.$.get(property);
        if ($config) {
            if (bond.type && bond.type !== Object && bond.type !== $config.type)
                throw Error(`${property} type conflict`);
            bond.type = $config.type;
            bond.isProp = property.startsWith('$');
            bond.isChemical = $config.type.prototype instanceof $Chemical;
            if (bond.isProp && (this.chemical as any)[property.substring(1)] === $setter) 
                bond.isExplicitlyBound = true;
            else if (bond.isChemical) 
                bond.isImplicitlyBound = true;
            this.applyExpecting(bond, $config.expecting, property, value);
        }
        
        // Auto-detect objective/collective from value if not already set
        if (!bond.comparer && !bond.isChemical && typeof value === 'object' && value !== null) {
            if (Array.isArray(value)) {
                if (bond.isObjective && !bond.isCollective) 
                    throw Error(`${property} was object, now array`);
                bond.isCollective = true;
            } else {
                if (bond.isCollective) 
                    throw Error(`${property} was array, now object`);
                bond.isObjective = true;
            }
        }
        
        return bond;
    }
    
    private applyExpecting(bond: Bond, expecting: '?' | '!' | '[]', property: string, value: any) {
        const chemical = this.chemical as any;
        if (expecting === '[]') {
            bond.isCollective = true;
            bond.isRequired = true;
            if (value && !Array.isArray(value)) throw Error(`${property} marked array but isn't`);
            if (!value) chemical[property] = [];
            return;
        }
        bond.isRequired = expecting === '!';
        if (expecting === '?' && Array.isArray(value)) throw Error(`${property} optional but is array`);
        if (bond.isRequired && bond.isChemical && !value) {
            const formula = bond.type._formula || bond.type.prototype;
            chemical[property] = Object.create(formula);
            chemical[property]._reactive = false;
        }
    }
    
    duplicate(): this {
        const diagram = Object.create(this) as this;
        diagram.bonds = new Map();
        this.bonds.forEach((v, k) => diagram.bonds.set(k, v.duplicate()));
        return diagram;
    }
}