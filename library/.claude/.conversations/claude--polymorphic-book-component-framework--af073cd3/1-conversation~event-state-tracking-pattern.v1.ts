// Decorator for $ methods that need state tracking
function trackState(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    
    descriptor.value = function(...args: any[]) {
        const chemical = this as $Chemical;
        
        // Reset state before method execution (like in render)
        const currentReactState = getCurrentReactState(chemical);
        chemical.formula.resetState(currentReactState);
        
        // Call the original method - property access will populate state
        const result = originalMethod.apply(this, args);
        
        // Trigger React update with the new state tracking
        triggerReactUpdate(chemical);
        
        return result;
    };
    
    return descriptor;
}

// Helper to get current React state for this chemical
function getCurrentReactState(chemical: $Chemical): $State {
    // This would need to be set up in the Component
    return (chemical as any).__currentReactState || {};
}

// Helper to trigger React re-render
function triggerReactUpdate(chemical: $Chemical) {
    const updateFn = (chemical as any)[updateSymbol];
    if (updateFn) {
        updateFn();
    }
}

// In Component creation - store React state reference
const Component: $Component<this> = props => {
    const [reactState, setReactState] = useState<$State>({});
    
    let chemical = this.__getOrCreateChemical(props);
    
    // Store React state reference for event methods
    (chemical as any).__currentReactState = reactState;
    (chemical as any)[updateSymbol] = () => setReactState({...reactState});
    
    // Reset state before render
    chemical.formula.resetState(reactState);
    
    // ... rest of render logic
};

// Usage in your Chemical classes
class $Counter extends $Chemical {
    count = 0;
    
    @trackState  // This decorator handles state reset/update
    $increment() {
        this.count++; // This property access gets tracked in formula.state
        console.log('Accessed during increment:', Object.keys(this.formula.state));
    }
    
    view() {
        return (
            <div>
                Count: {this.count}  {/* Tracked during render */}
                <button onClick={() => this.$increment()}>+</button>
            </div>
        );
    }
}