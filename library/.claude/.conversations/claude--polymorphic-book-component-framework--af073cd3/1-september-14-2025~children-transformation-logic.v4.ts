// Children transformation logic for Chemistry framework

interface ChildAnalysis {
    props?: any;
    template?: $Chemical;
    primitive?: string | number | boolean;
    type: 'chemical' | 'primitive' | 'intrinsic';
}

interface ArrayChildAnalysis {
    elements: ChildAnalysis[];
    arrayIndex: number;
    type: 'array';
}

type ConstructorArgument = ChildAnalysis | ArrayChildAnalysis;

function transformChildren(
    parent: $Chemical, 
    children: ReactNode
): {
    newChildren: ReactNode;
    constructorArgs: ConstructorArgument[];
} {
    const childrenArray = React.Children.toArray(children);
    const newChildren: ReactNode[] = [];
    const constructorArgs: ConstructorArgument[] = [];
    
    // Group consecutive Chemical components of the same type into arrays
    let currentGroup: { type: any; elements: ReactNode[]; startIndex: number } | null = null;
    let arrayIndex = 0;
    
    for (let i = 0; i < childrenArray.length; i++) {
        const child = childrenArray[i];
        
        // Handle primitive types (string, number, boolean)
        if (typeof child === 'string' || typeof child === 'number' || typeof child === 'boolean') {
            flushCurrentGroup();
            const primitiveAnalysis: ChildAnalysis = {
                primitive: child,
                type: 'primitive'
            };
            constructorArgs.push(primitiveAnalysis);
            newChildren.push(child);
            continue;
        }
        
        if (!React.isValidElement(child)) {
            // Other non-element types (null, undefined, fragments) - skip
            flushCurrentGroup();
            continue;
        }
        
        const component = child.type as any;
        const isChemical = component?.template instanceof $Chemical;
        
        if (!isChemical) {
            // Intrinsic element (div, span, etc.) or regular React component
            flushCurrentGroup();
            const intrinsicAnalysis: ChildAnalysis = {
                props: child.props,
                type: 'intrinsic'
            };
            constructorArgs.push(intrinsicAnalysis);
            newChildren.push(child);
            continue;
        }
        
        // This is a Chemical component
        const template = component.template;
        
        // Check if we should group with previous elements
        if (currentGroup && currentGroup.type === component) {
            // Add to current group
            currentGroup.elements.push(child);
        } else {
            // Flush previous group if exists
            flushCurrentGroup();
            
            // Check if next elements are the same type (look ahead)
            const sameTypeCount = countConsecutiveSameType(childrenArray, i, component);
            
            if (sameTypeCount > 1) {
                // Start a new group for array
                currentGroup = {
                    type: component,
                    elements: [child],
                    startIndex: i
                };
            } else {
                // Single element
                const analysis = processSingleChild(child, template, parent);
                constructorArgs.push(analysis);
                newChildren.push(analysis.props.children || child);
            }
        }
    }
    
    // Flush any remaining group
    flushCurrentGroup();
    
    function flushCurrentGroup() {
        if (!currentGroup) return;
        
        const arrayAnalysis = processArrayGroup(currentGroup, parent, arrayIndex++);
        constructorArgs.push(arrayAnalysis);
        
        // Add transformed children to newChildren
        for (const element of arrayAnalysis.elements) {
            newChildren.push(element.props.children || currentGroup.elements[arrayAnalysis.elements.indexOf(element)]);
        }
        
        currentGroup = null;
    }
    
    return {
        newChildren: newChildren.length === 1 ? newChildren[0] : newChildren,
        constructorArgs
    };
}

function countConsecutiveSameType(children: ReactNode[], startIndex: number, targetType: any): number {
    let count = 0;
    for (let i = startIndex; i < children.length; i++) {
        const child = children[i];
        if (React.isValidElement(child) && child.type === targetType) {
            count++;
        } else {
            break;
        }
    }
    return count;
}

function processSingleChild(
    child: ReactElement, 
    template: $Chemical, 
    parent: $Chemical
): ChildAnalysis {
    const dependency = new $Dependency(
        template.cid,
        parent,
        parent.molecule.__createMolecule(template), // Need to expose this method
        'parent',
        'one'
    );
    
    const newProps = {
        ...child.props,
        [Chemical.dependencyProp]: dependency
    };
    
    return {
        props: newProps,
        template
    };
}

function processArrayGroup(
    group: { type: any; elements: ReactNode[]; startIndex: number },
    parent: $Chemical,
    arrayIndex: number
): ArrayChildAnalysis {
    const template = group.type.template;
    const elements: ChildAnalysis[] = [];
    
    for (let i = 0; i < group.elements.length; i++) {
        const child = group.elements[i] as ReactElement;
        
        const dependency = new $Dependency(
            template.cid,
            parent,
            parent.molecule.__createMolecule(template),
            'parent',
            'many',
            i // Index within the array
        );
        
        const newProps = {
            ...child.props,
            [Chemical.dependencyProp]: dependency
        };
        
        elements.push({
            props: newProps,
            template
        });
    }
    
    return {
        elements,
        arrayIndex
    };
}

// Usage in the Component creation logic:
function __createComponent(): $Component<this> {
    // ... existing setup ...
    
    const Component: $Component<this> = props => {
        // Transform children before processing
        const { newChildren, constructorArgs } = transformChildren(chemical, props.children);
        
        // Update props with transformed children
        const transformedProps = {
            ...props,
            children: newChildren
        };
        
        // Now we have constructorArgs that can feed into the pseudo-constructor
        // Format: [props: any, template?: $Chemical] | [props: any, template?: $Chemical][]
        const pseudoConstructorArgs: (ChildAnalysis | ChildAnalysis[])[] = constructorArgs.map(arg => {
            if ('elements' in arg) {
                // Array group
                return arg.elements;
            } else {
                // Single element
                return arg;
            }
        });
        
        // Call the pseudo-constructor if it exists
        const constructorMethodName = chemical.getType().name;
        const pseudoConstructor = (chemical as any)[constructorMethodName];
        if (typeof pseudoConstructor === 'function') {
            // Convert to the format expected by pseudo-constructor
            const constructorParams = pseudoConstructorArgs.map(arg => {
                if (Array.isArray(arg)) {
                    // Array of chemicals - extract the actual chemical instances
                    return arg.map(analysis => analysis.template);
                } else {
                    // Single chemical
                    return arg.template;
                }
            });
            
            pseudoConstructor.apply(chemical, constructorParams);
        }
        
        // Continue with normal component processing...
        chemical.__bindProps(transformedProps);
        
        let view = chemical.view();
        return view;
    };
    
    // Add template to component
    (Component as any).template = template;
    
    return Component;
}