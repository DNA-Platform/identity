// In $Bond initialization, detect functions but don't wrap them yet
const isFunction = !descriptor.get ? typeof backingField === 'function' : 
                   descriptor.get ? typeof descriptor.get() === 'function' : false;

if (isFunction) {
    // Mark this bond as a function that needs state tracking
    this._isFunction = true;
    
    // Store original function reference
    this._originalFunction = descriptor.get ? descriptor.get() : backingField;
    
    // Create wrapped function that will be set by the Component
    const wrappedFunction = (...args: any[]) => {
        // This will be replaced by Component with proper React state
        console.warn('Function called before React state setup');
        return this._originalFunction.apply(this._chemical, args);
    };
    
    if (descriptor.get) {
        descriptor.get = () => wrappedFunction;
    } else {
        backingField = wrappedFunction;
    }
}

// In Component creation - set up function state tracking
const Component: $Component<this> = props => {
    const [reactState, setReactState] = useState<$State>({ cid: symbolize(this.cid) });
    
    let chemical = this.__getOrCreateChemical(props);
    
    // Set up function wrappers with proper React state
    useEffect(() => {
        for (const bond of chemical.formula.bonds.values()) {
            if (bond._isFunction) {
                const originalFunction = bond._originalFunction;
                
                // Create wrapper with access to React state
                const stateTrackingWrapper = (...args: any[]) => {
                    // Reset state before function execution
                    chemical.formula.resetState(reactState);
                    
                    // Call original function
                    const result = originalFunction.apply(chemical, args);
                    
                    // Trigger re-render with updated state
                    setReactState({ ...chemical.formula.state });
                    
                    return result;
                };
                
                // Replace the placeholder wrapper
                if (bond._descriptor?.get) {
                    bond._descriptor.get = () => stateTrackingWrapper;
                } else {
                    (chemical as any)[bond.property] = stateTrackingWrapper;
                }
            }
        }
    }, []); // Only run once on mount
    
    // Rest of component logic...
};