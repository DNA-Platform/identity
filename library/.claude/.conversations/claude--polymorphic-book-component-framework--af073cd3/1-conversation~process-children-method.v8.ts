type $ConstructorArgument = any | any[];

private __processChildren(props: any): { props: any, args: $ConstructorArgument[] } {
    if (!props.children) return { props, args: [] };
    
    const children = React.Children.toArray(props.children);
    const newChildren: ReactNode[] = [];
    const args: $ConstructorArgument[] = [];
    
    let currentArray: any[] | null = null;
    let lastType: any = null;
    
    for (const child of children) {
        // Handle primitives
        if (typeof child === 'string' || typeof child === 'number' || typeof child === 'boolean') {
            flushArray();
            args.push(child);
            newChildren.push(child);
            continue;
        }
        
        // Handle elements
        if (!React.isValidElement(child)) continue;
        
        const component = child.type as any;
        const template = component?.template;
        const isChemical = template instanceof $Chemical;
        
        // Non-chemical elements
        if (!isChemical) {
            flushArray();
            args.push(child.props);
            newChildren.push(child);
            continue;
        }
        
        // Chemical elements - group consecutive same types
        if (component === lastType) {
            if (!currentArray) currentArray = [];
            currentArray.push(template);
        } else {
            flushArray();
            
            // Check if next elements are same type for array
            const nextSameType = children.slice(children.indexOf(child) + 1)
                .takeWhile(c => React.isValidElement(c) && c.type === component).length > 0;
            
            if (nextSameType) {
                currentArray = [template];
                lastType = component;
            } else {
                args.push(template);
                lastType = null;
            }
        }
        
        // Add dependency and update child
        const dependency = new $Dependency(template.cid, this, this.molecule, 'parent', 
            currentArray ? 'many' : 'one', currentArray?.length - 1);
        
        const newChild = React.cloneElement(child, {
            ...child.props,
            [$Chemical.dependencyProp]: dependency
        });
        
        newChildren.push(newChild);
    }
    
    flushArray();
    
    function flushArray() {
        if (currentArray) {
            args.push([...currentArray]);
            currentArray = null;
            lastType = null;
        }
    }
    
    return {
        props: { ...props, children: newChildren.length === 1 ? newChildren[0] : newChildren },
        args
    };
}