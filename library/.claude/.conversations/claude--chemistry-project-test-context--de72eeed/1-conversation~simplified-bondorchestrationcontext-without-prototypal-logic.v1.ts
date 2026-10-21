class $BondOrchestrationContext {
    private parameters: $BondParameter[];
    private parameterIndex = -1;
    arguments: $BondArguments;
    args: any[] = [];
    chemical: $Chemical;
    node: any = undefined;
    children: ReactNode[] = [];
    childContexts: $BondOrchestrationContext[] = [];
    singleton: boolean = false;
    parameter?: $BondParameter;
    argsValid?: boolean = true;
    parent?: $BondOrchestrationContext;
    
    private _isModified = false;

    get isElement() { 
        return React.isValidElement(this.node);
    }

    get isModified() { 
        return this._isModified; 
    }
    
    set isModified(value: boolean) { 
        this._isModified = value;
        if (value && this.parent) {
            this.parent.isModified = value;  // Fixed: was missing the assignment
        }
    }

    constructor(chemical: $Chemical, parameters: $BondParameter[] = []) {
        this.chemical = chemical;
        this.parameters = parameters;
        this.arguments = new $BondArguments(parameters || []);
        this.args = this.arguments.values;
    }

    next(node: any): $BondOrchestrationContext {
        // Create a new instance instead of cloning prototypally
        const context = new $BondOrchestrationContext(this.chemical, this.parameters);
        
        // Copy relevant properties
        context.parameterIndex = this.parameterIndex;
        context.arguments = this.arguments;  // Share the same arguments instance
        context.args = this.args;  // Share the same args array reference
        context.singleton = this.singleton;
        context.parameter = this.parameter;
        context.argsValid = this.argsValid;
        context.parent = this.parent;
        context.children = this.children;  // Share the same children array
        context.childContexts = this.childContexts;  // Share the same childContexts array
        
        // Set the new node
        context.node = node;
        
        // Update parameter tracking
        if (!context.parameter && context.parameterIndex === -1) {
            if (context.parameters && context.parameters.length > 0) {
                context.parameterIndex = 0;
                context.parameter = context.parameters[context.parameterIndex];
            } else {
                context.argsValid = false;
            }
        } else if (context.parameter && context.parameter.isSpread) {
            // Spread parameter continues consuming all remaining args
            context.args = context.arguments.values;
        } else if (context.parameter && !context.parameter.isSpread) {
            // Move to next parameter
            context.parameterIndex++;
            if (context.parameters && context.parameterIndex < context.parameters.length) {
                context.parameter = context.parameters[context.parameterIndex];
                if (context.parameter && context.parameter.isSpread) {
                    context.args = context.arguments.values;
                }
            } else {
                context.parameter = undefined;
                context.argsValid = false;
            }
        }
        
        return context;
    }

    array(): $BondOrchestrationContext {
        // Create a fresh context for array processing
        const context = new $BondOrchestrationContext(this.chemical, []);
        
        // Set up array-specific properties
        context.parent = this;
        context.args = [];
        context.parameters = [];
        context.parameterIndex = -1;
        context.parameter = { isArray: true, isSpread: false };
        context.children = [];
        
        // Add the new arrays to parent's args and children
        this.args.push(context.args);
        this.children.push(context.children);
        
        return context;
    }

    child(chemical: $Chemical, props: any): any {
        console.log('context.child called:', chemical.toString(), 'props.children:', props.children);
        
        if (chemical[$lastProps] === props) {
            console.log('Props unchanged, returning cached');
            return props;
        }
        
        console.log('Bonding child chemical');
        props = chemical[$orchestrator].bond(props, this);
        chemical[$lastProps] = props;
        
        console.log('Child bonded, returning props');
        return props;
    }

    build(): any {
        if (!this.isModified) {
            return undefined;
        }
        
        return this.singleton && this.children.length === 1 
            ? this.children[0] 
            : this.children;
    }
}