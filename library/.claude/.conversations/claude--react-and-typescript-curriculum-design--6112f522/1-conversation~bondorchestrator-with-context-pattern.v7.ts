class $BondOrchestrationContext {
    private parameters?: $BondParameter[];
    private parameterIndex = -1;
    chemical: $Chemical;
    node: any = undefined;
    args: any[] = [];
    children: any[] = [];
    parameter?: $BondParameter;
    argsValid: boolean = true;
    parent?: $BondOrchestrationContext;
    
    get isArg() { return !!this.parameters; }
    get isElement() { return React.isValidElement(this.node); }

    private _isModified = false;
    get isModified() { return this._isModified; }
    set isModified(value: boolean) { 
        this._isModified = value;
        if (value && this.parent) {
            this.parent.isModified = true;
        }
    }

    constructor(chemical: $Chemical, parameters?: $BondParameter[]) {
        this.chemical = chemical;
        this.parameters = parameters;
    }

    next(node: any): $BondOrchestrationContext {
        const context = this.clone();
        context.node = node;
        
        if (!context.isArg) return context;
        
        // Initialize first parameter
        if (!context.parameter && context.parameterIndex === -1) {
            if (context.parameters!.length === 0) {
                context.argsValid = false;
                return context;
            }
            context.parameterIndex = 0;
            context.parameter = context.parameters![0];
            if (context.parameter.isSpread) {
                context.args.push([]);
            }
            return context;
        }
        
        // Move to next parameter if not spread
        if (context.parameter && !context.parameter.isSpread) {
            context.parameterIndex++;
            if (context.parameterIndex >= context.parameters!.length) {
                context.argsValid = false;
                return context;
            }
            context.parameter = context.parameters![context.parameterIndex];
            if (context.parameter.isSpread) {
                context.args.push([]);
            }
        }
        
        return context;
    }

    array(): $BondOrchestrationContext {
        const context = this.clone();
        context.parent = this;
        
        const childArray: any[] = [];
        this.children.push(childArray);
        context.children = childArray;
        
        if (!context.isArg) return context;
        
        const arrayArg: any[] = [];
        if (context.parameter?.isSpread) {
            // Add to the spread array
            const spreadArray = this.args[this.args.length - 1] as any[];
            spreadArray.push(arrayArg);
            context.args = arrayArg;
        } else {
            this.args.push(arrayArg);
            context.args = arrayArg;
        }
        
        context.parameter = { isArray: true, isSpread: false };
        return context;
    }

    child(chemical: $Chemical): $BondOrchestrationContext {
        const context = new $BondOrchestrationContext(chemical);
        context.parent = this;
        const childArray: any[] = [];
        this.children.push(childArray);
        context.children = childArray;
        return context;
    }

    private clone(): this {
        const context = Object.create(Object.getPrototypeOf(this));
        Object.assign(context, this);
        return context;
    }
}

interface $BondParameter {
    isArray: boolean;
    isSpread: boolean;
}

class $BondOrchestrator<T extends $Chemical> {
    private _chemical: T;
    private _bondConstructor?: Function;
    private _parameters: $BondParameter[] = [];
    private _lastProps?: any;
    private _lastProcessedChildren?: ReactNode;
    private _lastArgs?: any[];
    
    constructor(chemical: T) {
        this._chemical = chemical;
        const name = chemical.getType().name;
        this._bondConstructor = (chemical as any)[name];
        this.parseBondConstructor();
    }
    
    bond(props: any): any {
        if (props === this._lastProps) return this._lastProps;
        
        const chemical = this._chemical;
        chemical.deactivate();
        this.bindProps(chemical, props);

        let children: ReactNode;
        let args: any[] = [];
        
        // Skip if children haven't changed
        if (this._lastProps && props.children === this._lastProps.children) {
            children = this._lastProcessedChildren;
        } else {
            const context = new $BondOrchestrationContext(chemical, this._parameters);
            [children, args] = this.processWithContext(props.children, context);
            this._lastProcessedChildren = children;
            this._lastArgs = args;
            
            if (!this._bondConstructor) {
                // No constructor, skip calling it
            } else if (!context.argsValid) {
                console.error(`Invalid args for ${chemical.getType().name}`);
            } else {
                this.callConstructor(args);
            }
        }
        
        const augmentedProps = { ...props, children };
        chemical.__children = augmentedProps.children;
        
        chemical.formula.refresh();
        chemical.reactivate();

        this._lastProps = augmentedProps;
        return augmentedProps;
    }

    render(): ReactNode {        
        const view = this._chemical.view();
        return this.augmentView(view, this._chemical.Component);
    }
    
    private parseBondConstructor() {
        if (!this._bondConstructor) return;
        
        const match = this._bondConstructor.toString().match(/\(([^)]*)\)/);
        if (!match) {
            throw new Error(`Cannot parse constructor for ${this._chemical.getType().name}`);
        }
        
        const paramString = match[1].trim();
        if (!paramString) return;
        
        this._parameters = paramString.split(',')
            .map(p => p.trim())
            .map(p => ({ 
                isArray: false,
                isSpread: p.startsWith('...') 
            }));
    }
    
    private callConstructor(args: any[]) {
        const paramCount = this._parameters.filter(p => !p.isSpread).length;
        const hasRest = this._parameters.length > 0 && 
            this._parameters[this._parameters.length - 1].isSpread;
        
        if (hasRest) {
            const regular = args.slice(0, paramCount);
            const rest = args.slice(paramCount);
            this._bondConstructor!.apply(this._chemical, [...regular, ...rest]);
        } else {
            this._bondConstructor!.apply(this._chemical, args);
        }
    }
    
    private bindProps(chemical: $Chemical, props: any) {
        const $chemical$: any = chemical;
        for (const prop in props) {
            if (typeof prop === 'symbol') continue;
            if (prop === 'children' || prop === 'key' || prop === 'ref') continue;
            $chemical$['$' + prop] = props[prop];
        }
    }

    private processWithContext(children: ReactNode, context: $BondOrchestrationContext): [ReactNode, any[]] {
        const augmented = React.Children.map(children, child => {
            const childContext = context.next(child);
            
            if (!React.isValidElement(child)) {
                if (childContext.isArg) {
                    if (childContext.parameter?.isSpread) {
                        const spreadArray = childContext.args[childContext.args.length - 1] as any[];
                        spreadArray.push(child);
                    } else if (childContext.parameter?.isArray) {
                        childContext.args.push(child);
                    } else {
                        childContext.args.push(child);
                    }
                }
                childContext.children.push(child);
                return child;
            }
            
            const [augmentedElement, arg] = this.processElement(child, childContext);
            
            if (arg !== undefined && childContext.isArg) {
                if (childContext.parameter?.isSpread) {
                    const spreadArray = childContext.args[childContext.args.length - 1] as any[];
                    spreadArray.push(arg);
                } else if (childContext.parameter?.isArray) {
                    childContext.args.push(arg);
                } else {
                    childContext.args.push(arg);
                }
            }
            
            childContext.children.push(augmentedElement);
            return augmentedElement;
        });
        
        return [augmented, context.args];
    }
    
    private processElement(element: React.ReactElement<any>, context: $BondOrchestrationContext): [ReactNode, any] {
        // Check for Chemistry Fragment first
        if (element.type === React.Fragment && element.key?.toString().startsWith('chem-')) {
            const cid = parseInt(element.key.toString().replace('chem-', ''));
            const chemical = $chemicalRegistry.get(cid);
            if (!chemical) return [element, undefined];
            return [element, chemical.Component];
        }
        
        const type = element.type as any;
        
        // Handle $ array wrapper
        if (type === $) {
            const arrayContext = context.array();
            const [innerChildren, innerArgs] = this.processWithContext(
                element.props.children, 
                arrayContext
            );
            // Return flattened children and the array as argument
            return [innerChildren, innerArgs];
        }
        
        // Handle DOM elements
        if (typeof type === 'string') {
            return [element, element];
        }
        
        // Handle components
        return this.processComponent(element, type, context);
    }
    
    private processComponent(element: React.ReactElement<any>, type: any, context: $BondOrchestrationContext): [ReactNode, any] {
        // Convert function to Chemistry if needed
        if (typeof type === 'function' && !type.$template) {
            type = $(type);
        }
        
        // Not a Chemistry component
        if (!type?.$template || !(type.$template instanceof $Chemical)) {
            return [element, element];
        }
        
        const component: $$Component<$Chemical> = type;
        
        // Already bound
        if (component.$bound) {
            return [element, component];
        }
        
        // Bind the component
        const bound = component.$bind(this._chemical);
        const chemical = bound.$chemical;
        
        // Process children if they exist
        if (element.props.children) {
            const childContext = context.child(chemical);
            const [processedChildren] = this.processWithContext(
                element.props.children, 
                childContext
            );
            chemical.binder.bond({ 
                ...element.props, 
                children: processedChildren 
            });
        } else {
            chemical.binder.bond(element.props);
        }
        
        context.isModified = true;
        
        return [
            React.createElement(bound, {
                ...element.props,
                key: element.key
            }),
            bound
        ];
    }

    private augmentView(view: ReactNode, component: $Component<T>): ReactNode {
        return React.createElement(
            React.Fragment,
            { key: `chem-${this._chemical.cid}` },
            view
        );
    }
}