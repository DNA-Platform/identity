import { Chapter, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ Fixed $BondOrchestrator - Children Bond First v1 ]]</Title>
        <CodeBox
            language="typescript"
        >
            {`${''}class $BondOrchestrator<T extends $Chemical> {
    private _chemical: T;
    private _bondConstructor?: Function;
    private _parameters: { isArray: boolean, isSpread: boolean }[] = [];
    private _lastProps?: any;
    private _rendered: Map<Function, ReactElement> = new Map();

    constructor(chemical: T) {
        this._chemical = chemical;
        const name = chemical.__getType().name;
        this._bondConstructor = (chemical as any)[name];
        this.parseBondConstructor();
    }

    bond(props: any, parentContext?: $BondOrchestrationContext): any {
        const chemical = this._chemical;
        let children: ReactNode = props.children;
        const context = new $BondOrchestrationContext(chemical, this._parameters);
        parentContext?.childContexts.push(context);
        
        // Early return if props haven't changed
        if (props === this._lastProps) 
            return this._lastProps;
        
        this._rendered = new Map();
        
        // STEP 1: Bind props to this chemical (but don't run constructor yet)
        this.bindProps(chemical, props);
        
        // STEP 2: Process children - this will recursively bond all descendants FIRST
        this.process(children, context);
        
        // STEP 3: Build modified children if needed
        if (context.isModified) {
            children = context.build();
            props = { ...props, children: children };
        }

        // STEP 4: Store children
        chemical[$children] = props.children;
        this._lastProps = props;

        // STEP 5: NOW run this chemical's constructor with fully-bonded children
        if (this._bondConstructor && context.argsValid) {
            console.log(\`Running constructor for \${chemical.constructor.name}[\${chemical[$cid]}] with args:\`, 
                context.args.map(arg => arg instanceof $Chemical ? \`\${arg.constructor.name}[\${arg[$cid]}]\` : typeof arg));
            this.callConstructor(context.args);
        }

        // STEP 6: Refresh formula after constructor has run
        chemical[$formula].refresh();
        
        return props;
    }

    render(): ReactNode {        
        let view = this._chemical.view();
        view = this.augmentView(view);
        return view;
    }

    private parseBondConstructor() {
        if (!this._bondConstructor) return;
        
        const match = this._bondConstructor.toString().match(/\\(([^)]*)\\)/);
        if (!match) throw new Error(\`Cannot parse constructor for \${this._chemical.__getType().name}\`);
        
        const paramString = match[1].trim();
        if (!paramString) return;
        
        this._parameters = paramString.split(',')
            .map(p => p.trim())
            .map(p => ({ 
                isSpread: p.startsWith('...'), 
                isArray: false 
            }));
    }

    private bindProps(chemical: $Chemical, props: any) {
        const $chemical$: any = chemical;
        for (const prop in props) {
            if (typeof prop === 'symbol' || prop === 'children' || prop === 'key' || prop === 'ref') continue;
            $chemical$['$' + prop] = props[prop];
        }
        chemical[$formula].refresh();
    }

    private process(children: ReactNode, context: $BondOrchestrationContext) {
        console.log(\`=== process() for \${this._chemical.constructor.name}[\${this._chemical[$cid]}] ===\`);
        const childArray = React.Children.toArray(children);
        context.singleton = !Array.isArray(children) && childArray.length === 1;
        
        childArray.forEach(child => {
            context = context.next(child);
            if (context.isElement) {
                this.processElement(child as React.ReactElement<any>, context);
            } else {
                context.args.push(child);
                context.children.push(child);
            }
        });
    }

    private processElement(element: React.ReactElement<any>, context: $BondOrchestrationContext) {
        let type = element.type as any;
        console.log(\`  processElement:\`, {
            parent: \`\${this._chemical.constructor.name}[\${this._chemical[$cid]}]\`,
            typeName: type.name || type,
            hasChildren: 'children' in element.props
        });
        
        // Handle chemistry fragments (already rendered chemicals)
        if (type === React.Fragment && element.key?.toString().startsWith('chem-')) {
            const cid = parseInt(element.key.toString().replace('chem-', ''));
            const chemical = $chemicalRegistry.get(cid)!;
            console.log(\`    Fragment chemical: \${chemical.constructor.name}[\${chemical[$cid]}]\`);
            context.args.push(chemical);
            context.children.push({ type: chemical.Component, props: {}, key: element.key });
            this._rendered.set(chemical.Component, element);
            return;
        }
        
        // Handle structural array component
        if (type === $) {
            console.log(\`    Array wrapper - processing children\`);
            context = context.array();
            React.Children.forEach(element.props?.children || [], item => {
                context.isModified = true;
                context = context.next(item);
                if (context.isElement) {
                    this.processElement(item as React.ReactElement<any>, context);
                } else {
                    context.args.push(item);
                    context.children.push(item);
                }
            });
            return;
        }
        
        // Handle Chemistry components and React function components
        if (typeof type === 'function') {
            let component: $$Component = type;
            
            // Wrap plain React components
            if (!component.$bind) {
                console.log(\`    Wrapping React component: \${type.name}\`);
                let func = type as React.FC;
                component = $(func).$Component;
            }
            
            // Bind component to this parent if not already bound
            if (!component.$bound) {
                console.log(\`    Binding \${type.name || 'Component'} to parent \${this._chemical.constructor.name}[\${this._chemical[$cid]}]\`);
                component = component.$bind(this._chemical);
            }

            const chemical = component.$chemical;
            console.log(\`    Child chemical: \${chemical.constructor.name}[\${chemical[$cid]}]\`);
            
            // CRITICAL: Bond the child BEFORE adding to parent's args
            // This ensures the child's constructor runs and processes ITS children
            console.log(\`    → Bonding child \${chemical.constructor.name}[\${chemical[$cid]}] with props\`);
            const bondedProps = context.child(chemical, element.props);
            console.log(\`    ← Child \${chemical.constructor.name}[\${chemical[$cid]}] bonded\`);
            
            const key = \`\${chemical[$cid]}\`;
            
            // Add the fully-bonded chemical to parent's args
            context.args.push(chemical);
            
            // Track if we modified the props/key
            if (bondedProps !== element.props || key !== element.key) {
                context.children.push({ type: component, props: bondedProps, key: key });
                context.isModified = true;
            } else {
                context.children.push(element);
            }
            
            console.log(\`    Child \${chemical.constructor.name}[\${chemical[$cid]}] added to parent args\`);
            return;
        }
        
        // Handle intrinsic elements (div, span, etc.)
        console.log(\`    Intrinsic element: \${type}\`);
        context.args.push(element.props);
        context.children.push(element);
    }

    private callConstructor(args: any[]) {
        const paramCount = this._parameters.filter(p => !p.isSpread).length;
        const hasRest = this._parameters.length > 0 && 
            this._parameters[this._parameters.length - 1].isSpread;
        
        console.log(\`  Calling constructor with \${args.length} args, \${paramCount} params, hasRest: \${hasRest}\`);
        
        if (hasRest) {
            const regular = args.slice(0, paramCount);
            const rest = args.slice(paramCount);
            this._bondConstructor!.apply(this._chemical, [...regular, ...rest]);
        } else {
            this._bondConstructor!.apply(this._chemical, args);
        }
    }

    private augmentView(view: ReactNode): ReactNode {
        const augmented = this.augmentNode(view);
        return React.createElement(
            React.Fragment,
            { key: \`chem-\${this._chemical[$cid]}\` },
            augmented,
        );
    }

    private augmentNode(node: ReactNode): ReactNode {
        if (!node) return node;
        
        if (React.isValidElement(node)) {
            // Check if we've already rendered this
            const rendered = this._rendered.get(node.type as Function);
            if (rendered) return rendered;
            
            const children = (node.props as any)?.children;
            
            // Only recurse if there are children
            if (children) {
                const augmented = React.Children.map(children, child => this.augmentNode(child));
                if (augmented !== children) {
                    return React.cloneElement(node, {}, augmented);
                }
            }
            
            return node;
        }
        
        if (Array.isArray(node)) {
            let changed = false;
            const augmented = node.map(child => {
                const aug = this.augmentNode(child);
                changed ||= aug !== child;
                return aug;
            });
            return changed ? augmented : node;
        }
        
        return node;
    }
}

// Updated context.child method to ensure it returns the bonded props
class $BondOrchestrationContext {
    // ... existing code ...
    
    child(chemical: $Chemical, props?: any): any {
        // This calls the child's bond() method, which will:
        // 1. Bind the child's props
        // 2. Process the child's children (recursively bonding grandchildren)
        // 3. Run the child's constructor with its bonded children
        // 4. Return the potentially modified props
        return chemical[$binder].bond(props, this);
    }
    
    // ... rest of existing code ...
}
`}
        </CodeBox>
    </Chapter>
);
