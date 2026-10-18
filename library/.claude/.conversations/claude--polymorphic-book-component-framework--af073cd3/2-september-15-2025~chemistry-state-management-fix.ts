// In $Chemical.__createComponent()
const Component: $Component<this> = props => {
    let dependency = this.__findProp<$Dependency>(props as any, $Chemical.dependencyProp);
    let context = dependency?.context!;
    
    // Get or create chemical instance
    const [cid, setChemicalId] = useState<number>(-1);
    const [state, setState] = useState<$State>({});
    
    let chemical: $Chemical = null!;
    if (cid == -1) {
        chemical = this.__create();
        if (dependency) chemical._cid = dependency.cid;
        setChemicalId(chemical.cid);
        chemicalRegistry.set(chemical.cid, chemical);
        if (!dependency) context = chemical.__createContext();
    } else {
        if (!chemicalRegistry.has(cid))
            throw new Error(`The chemical with cid ${cid} is missing from the registry`)
        chemical = chemicalRegistry.get(cid)!;
        if (!dependency) context = chemical.__createContext();
    }

    const molecule = useContext(context);
    molecule.chemicals.set(cid, chemical);
    if (dependency && cid !== dependency.cid) 
        molecule.proxies.set(dependency.cid, chemical);

    // Setup state management AFTER we have the state
    useEffect(() => {
        // Initialize formula state with current React state
        chemical.formula.resetState(state);
        
        // Setup update trigger
        const triggerUpdate = () => {
            // Capture current formula state and merge with React state
            const newState = { ...state, ...chemical.formula.state };
            setState(newState);
        };
        
        // Connect formula to React state updates
        (chemical.formula as any).__triggerUpdate = triggerUpdate;
        
        return () => {
            chemical._molecule.remove(chemical);
            chemicalRegistry.delete(cid);
            delete (chemical.formula as any).__triggerUpdate;
        };
    }, [cid]); // Depend on cid, not empty array

    // Update formula state when React state changes
    useEffect(() => {
        if (Object.keys(state).length > 0) {
            chemical.formula.resetState(state);
        }
    }, [state]);

    // Bind props and process children
    chemical.__bindProps(props);
    const result = chemical.__processChildren(props, context);
    const newProps = result.props;
    const args = result.args;

    // Call constructor with processed args
    const constructorName = chemical.getType().name;
    const constructor: Function = (chemical as any)[constructorName];
    if (typeof constructor === 'function') {
        // Extract actual values from $Child tuples
        const constructorArgs = args.map(arg => {
            if (Array.isArray(arg)) {
                return arg.map(child => child[0]); // Extract child value from tuple
            } else {
                return arg?.[0]; // Extract child value from tuple
            }
        });
        constructor.apply(chemical, constructorArgs);
    }

    // Render view and capture state access
    let view = chemical.view();
    
    // After view rendering, update formula state to React state
    const formulaState = chemical.formula.state;
    if (Object.keys(formulaState).length > 0) {
        setState(prevState => ({ ...prevState, ...formulaState }));
    }

    return view;
}

// In $Bond class, modify the getter:
Object.defineProperty(chemical, property, {
    get: () => {
        const molecule = this._chemical.molecule;
        let value = getValue();
        
        // Handle binding resolution...
        if (this.bound) {
            const cid = molecule.bonds.get(this.binding);
            let boundChemical = molecule.chemicals.get(cid!);
            if (molecule.proxies.has(cid!)) {
                boundChemical = molecule.proxies.get(cid!)!;
                molecule.proxies.delete(cid!);
                setValue(boundChemical);
            }
            value = boundChemical ? boundChemical : undefined;
            if (value) value.formula.state = this._chemical.formula.state;
        }
        
        // Update formula state when property is accessed
        this._chemical.formula.state[this.bid] = symbolize(value);
        
        // Trigger React update if we have the trigger function
        const triggerUpdate = (this._chemical.formula as any).__triggerUpdate;
        if (triggerUpdate) {
            // Use setTimeout to avoid updating during render
            setTimeout(() => triggerUpdate(), 0);
        }
        
        return value;
    },
    // ... rest of property definition
});

// Simplified context creation - use parent context when possible
private __createContext() {
    // If we have a parent, use their context
    if (this._parent) {
        return this._parent._molecule.context;
    }
    return React.createContext<$Molecule>(this._molecule);
}