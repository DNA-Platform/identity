// Updated bond method with children reconstruction
bond(props: any, parentContext?: $BondOrchestrationContext): any {
    const chemical = this._chemical;
    const children: ReactNode = props.children;
    const context = new $BondOrchestrationContext(chemical, this._parameters);
    parentContext?.childContexts.push(context);
    if (props === this._lastProps) return this._lastProps;
    
    chemical.deactivate();
    this.bindProps(chemical, props);
    
    this.process(children, context);
    if (this._bondConstructor && context.argsValid) {
        this.callConstructor(context.args);
    }

    // Reconstruct children if modified
    let reconstructedProps = props;
    if (context.isModified) {
        const reconstructedChildren = this.reconstructChildren(context);
        reconstructedProps = { ...props, children: reconstructedChildren };
    }
    
    chemical.__children = reconstructedProps.children;
    this._lastProps = reconstructedProps;
    
    chemical.formula.refresh();
    chemical.reactivate();
    return reconstructedProps;
}

private reconstructChildren(context: $BondOrchestrationContext): ReactNode {
    // If there's only one child, return it directly (not wrapped in array)
    if (context.children.length === 1) {
        return this.reconstructChild(context.children[0], context);
    }
    
    // Multiple children - return as array
    return context.children.map(child => this.reconstructChild(child, context));
}

private reconstructChild(child: any, context: $BondOrchestrationContext): ReactNode {
    // Handle primitive values (strings, numbers, etc.)
    if (!React.isValidElement(child) && typeof child !== 'object') {
        return child;
    }
    
    // Handle arrays (from $ components)
    if (Array.isArray(child)) {
        return child.map(item => this.reconstructChild(item, context));
    }
    
    // Handle reconstructed elements with new props/type
    if (child && typeof child === 'object' && 'type' in child && 'props' in child) {
        const element = child as { type: any, props: any, key?: any };
        
        // Recursively reconstruct children if they exist
        let reconstructedChildren = element.props.children;
        if (reconstructedChildren) {
            // Find the child context that corresponds to this element
            const childContext = context.childContexts.find(cc => 
                cc.node && React.isValidElement(cc.node) && cc.node.key === element.key
            );
            
            if (childContext && childContext.isModified) {
                reconstructedChildren = this.reconstructChildren(childContext);
            }
        }
        
        return React.createElement(
            element.type,
            {
                ...element.props,
                key: element.key,
                children: reconstructedChildren
            }
        );
    }
    
    // Handle existing React elements that weren't modified
    if (React.isValidElement(child)) {
        // Check if any of its children were modified
        const childContext = context.childContexts.find(cc => cc.node === child);
        if (childContext && childContext.isModified) {
            const reconstructedChildren = this.reconstructChildren(childContext);
            return React.cloneElement(child, {
                ...child.props,
                children: reconstructedChildren
            });
        }
        return child;
    }
    
    return child;
}

// Updated processElement method to handle the mapping correctly
private processElement(element: React.ReactElement<any>, context: $BondOrchestrationContext) {
    let type = element.type as any;
    
    if (type === React.Fragment && element.key?.toString().startsWith('chem-')) {
        const cid = parseInt(element.key.toString().replace('chem-', ''));
        const chemical = $chemicalRegistry.get(cid)!;
        const component = chemical.Component;
        context.args.push(component); // For constructor: $$Component<T>
        context.children.push({
            type: component,
            props: element.props,
            key: element.key
        });
        context.isModified = true;
    } 
    else if (type === $) {
        // Handle array grouping
        const arrayContext = context.array();
        const arrayChildren: ReactNode[] = [];
        
        React.Children.forEach(element.props?.children || [], item => {
            const itemContext = arrayContext.next(item);
            if (itemContext.isElement) {
                this.processElement(item as React.ReactElement<any>, itemContext);
            } else {
                itemContext.args.push(item);
                arrayChildren.push(item);
            }
        });
        
        // For constructor: pass the args array
        // For children: reconstruct as flattened children (not wrapped in $)
        context.children.push(...arrayChildren);
        if (arrayContext.isModified) {
            context.isModified = true;
        }
    }
    else if (typeof type === 'function') {
        // Handle function components (React.FC or Chemistry components)
        let component: any;
        let boundChemical: $Chemical | undefined;
        
        if (type.$template) {
            // Already a Chemistry component
            component = type;
            boundChemical = type.$chemical;
        } else {
            // Convert React.FC to Chemistry using $()
            component = $(type); // This creates $Function<P>
            boundChemical = component.$chemical;
        }
        
        // Bind the component with element props
        const boundProps = boundChemical ? 
            this.bindChildComponent(boundChemical, element.props, context) : 
            element.props;
        
        // For constructor args: pass the bound component
        if (boundChemical) {
            context.args.push(boundChemical); // $Chemical for constructor
        } else {
            context.args.push(component); // $Function<P> for React.FC
        }
        
        // For children: create element with bound component
        context.children.push({
            type: component,
            props: boundProps,
            key: element.key
        });
        
        if (boundProps !== element.props) {
            context.isModified = true;
        }
    }
    else {
        // Handle DOM elements or other non-function types
        context.args.push(element); // Pass element directly for JSX.IntrinsicElements
        
        // Check if children need processing
        if (element.props.children) {
            const childContext = new $BondOrchestrationContext(context.chemical);
            childContext.parent = context;
            context.childContexts.push(childContext);
            
            this.process(element.props.children, childContext);
            
            if (childContext.isModified) {
                const reconstructedChildren = this.reconstructChildren(childContext);
                context.children.push(React.cloneElement(element, {
                    ...element.props,
                    children: reconstructedChildren
                }));
                context.isModified = true;
            } else {
                context.children.push(element);
            }
        } else {
            context.children.push(element);
        }
    }
}

private bindChildComponent(chemical: $Chemical, props: any, context: $BondOrchestrationContext): any {
    // Create a child context for this component
    const childContext = new $BondOrchestrationContext(chemical);
    childContext.parent = context;
    context.childContexts.push(childContext);
    
    // Use the component's own binder to process its props
    return chemical.binder.bond(props, childContext);
}