import { Append, Bold, Chapter, Date, Heading, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { CodeBox, Dated, Message, Speaker, Verbatim } from '../../../.manual/.book';
import { Attachment, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[13 September 2025](2025-09-13)</Date>
        </Dated>
        <Title>[[ 13 September 2025 ]]</Title>
        <Message
            at="2025-09-13T14:18:08.936661Z"
        >
            <Origin>ec05bca7-655d-4549-b729-39f84d1e868d</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                How does context work? Let's say I wanted to share context across all connected components. How can I do
                that. Does the context apply to all the children?
            </Paragraph>
        </Message>
        <Message
            at="2025-09-13T14:18:33.323483Z"
        >
            <Origin>c102c33d-e46a-437d-b08b-77bd7a8985ee</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                React Context works by creating a provider component that wraps a tree of components, and any descendant can
                access that context. Yes, context applies to all children (and their children, recursively) within the
                provider.
            </Paragraph>
            <Paragraph>For your Chemistry framework, you could integrate context like this:</Paragraph>
            <CodeBox
                language="typescript"
            >
                {`// Create a Chemistry context
const ChemistryContext = React.createContext<{
    registry: Map<number, $Chemical>;
    parent?: $Chemical;
    root?: $Chemical;
}>({
    registry: new Map(),
});

export class $Chemical {
    private __createComponent(): $Component<this, any> {
        const Component: $Component<this, any> = (props) => {
            // Access context
            const context = useContext(ChemistryContext);
            
            // Create/get instance
            let chemical = this.__create();
            chemical._parent = context.parent;
            
            // Provide context to children
            return (
                <ChemistryContext.Provider value={{
                    registry: context.registry,
                    parent: chemical,
                    root: context.root || chemical,
                }}>
                    {chemical.view()}
                </ChemistryContext.Provider>
            );
        };
        return Component;
    }
}`}
            </CodeBox>
            <Paragraph>This way:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    Every <Word>
                        <Verbatim />
                        $Chemical
                    </Word> component automatically provides context to its children
                </Line>
                <Line>Child components can access their parent via context</Line>
                <Line>All components share the same registry</Line>
                <Line>You can traverse up to the root component</Line>
            </Paragraph>
            <Paragraph>Usage in a child:</Paragraph>
            <CodeBox
                language="typescript"
            >
                {`class $SubChemical extends $Chemical {
    view() {
        // Can access context in view if needed
        return (
            <ChemistryContext.Consumer>
                {(context) => (
                    <div>
                        Parent: {context.parent?.constructor.name}
                        Root: {context.root?.constructor.name}
                    </div>
                )}
            </ChemistryContext.Consumer>
        );
    }
}`}
            </CodeBox>
            <Paragraph>
                Or make it even more automatic - children could register themselves with their parent through context
                without explicit binding:
            </Paragraph>
            <CodeBox
                language="typescript"
            >
                {`${''}useEffect(() => {
    if (context.parent && chemical.parent !== context.parent) {
        context.parent.registerChild(chemical);
        return () => context.parent.unregisterChild(chemical);
    }
}, [context.parent]);`}
            </CodeBox>
            <Paragraph>This would give you automatic parent-child relationships without manual binding.</Paragraph>
        </Message>
        <Message
            at="2025-09-13T14:19:04.874085Z"
        >
            <Origin>76a7ca4b-b576-4661-bc77-754965201e9b</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Does each component need a context provider? Or is it enough for the parent to pass it down somehow
            </Paragraph>
        </Message>
        <Message
            at="2025-09-13T14:19:30.809623Z"
        >
            <Origin>657ccb01-ca9e-413a-8090-ee01d7a2cc9b</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                You don't need a provider at every level - one provider at the root is enough! Context automatically passes
                through the entire component tree below the provider:
            </Paragraph>
            <CodeBox
                language="typescript"
            >
                {`// Single provider at the root
function App() {
    return (
        <ChemistryContext.Provider value={{ registry: new Map() }}>
            <RootChemical>
                <ChildChemical>
                    <DeepChildChemical />  {/* Can access context */}
                </ChildChemical>
            </RootChemical>
        </ChemistryContext.Provider>
    );
}`}
            </CodeBox>
            <Paragraph>
                All descendants can access the context without intermediate providers. The key decision is whether you want:
            </Paragraph>
            <Heading>Option 1: Single Root Provider</Heading>
            <CodeBox
                language="typescript"
            >
                {`export class $Chemical {
    static Root: React.FC<{ children: ReactNode }> = ({ children }) => (
        <ChemistryContext.Provider value={{ registry: chemicalRegistry }}>
            {children}
        </ChemistryContext.Provider>
    );
}

// Usage - wrap once at app root
<$Chemical.Root>
    <App />
</$Chemical.Root>`}
            </CodeBox>
            <Heading>Option 2: Each Component Updates Context</Heading>
            <CodeBox
                language="typescript"
            >
                {`export class $Chemical {
    private __createComponent() {
        return (props: any) => {
            const parentContext = useContext(ChemistryContext);
            
            // Just update specific values, don't create new provider
            const chemical = this.__create();
            chemical._parent = parentContext.currentParent;
            
            // Pass updated context down WITHOUT a new provider
            // Use a ref or mutable object
            parentContext.currentParent = chemical;
            
            return chemical.view();
        };
    }
}`}
            </CodeBox>
            <Heading>Option 3: Nested Providers (Usually Overkill)</Heading>
            <Paragraph>Only needed if each level needs to override context values:</Paragraph>
            <CodeBox
                language="typescript"
            >
                {`<ParentContext.Provider value={{ level: 1 }}>
    <Parent>
        <ChildContext.Provider value={{ level: 2 }}>  {/* Only if child needs different context */}
            <Child />
        </ChildContext.Provider>
    </Parent>
</ParentContext.Provider>`}
            </CodeBox>
            <Paragraph>
                For Chemistry, Option 1 is probably best - single provider at the root, and components just read from it. No
                need for providers at every level.
            </Paragraph>
        </Message>
        <Message
            at="2025-09-13T14:20:30.055340Z"
        >
            <Origin>d0400935-2c8d-46dc-ac23-06446352174f</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>How does the ChemicalContext get passed around to children</Paragraph>
        </Message>
        <Message
            at="2025-09-13T14:20:45.171698Z"
        >
            <Origin>8b30bd30-7dda-4ee5-8d8b-9de10e68067d</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                React Context passes through the component tree automatically via React's internal mechanism. Here's how it
                works:
            </Paragraph>
            <CodeBox
                language="typescript"
            >
                {`// When you create a provider at the root:
<ChemistryContext.Provider value={{ registry, currentChemical: null }}>
    <ParentComponent>
        <ChildComponent>
            <GrandchildComponent />
        </ChildComponent>
    </ParentComponent>
</ChemistryContext.Provider>`}
            </CodeBox>
            <Paragraph>React internally:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Stores the context value in its fiber tree</Line>
                <Line>
                    When any descendant calls <Word>
                        <Verbatim />
                        useContext(ChemistryContext)
                    </Word>, React walks up the component tree
                </Line>
                <Line>Finds the nearest Provider for that context</Line>
                <Line>Returns its value</Line>
            </Paragraph>
            <Paragraph>
                The key point: <Word>
                    <Bold />
                    You don't pass it manually
                </Word>. React handles the propagation:
            </Paragraph>
            <CodeBox
                language="typescript"
            >
                {`// Parent component - doesn't need to do anything special
function ParentComponent({ children }: { children: ReactNode }) {
    return <div>{children}</div>;  // Context passes through automatically
}

// Grandchild can access context directly
function GrandchildComponent() {
    const context = useContext(ChemistryContext);  // React finds it
    return <div>Registry size: {context.registry.size}</div>;
}`}
            </CodeBox>
            <Paragraph>For Chemistry specifically:</Paragraph>
            <CodeBox
                language="typescript"
            >
                {`export class $Chemical {
    private __createComponent() {
        return (props: any) => {
            // Every Chemical component can access context
            const context = useContext(ChemistryContext);
            
            // Use it without passing it explicitly
            const chemical = this.__create();
            chemical._registry = context.registry;
            
            // Just render - context flows through automatically
            return chemical.view();
        };
    }
}`}
            </CodeBox>
            <Paragraph>
                No props drilling, no manual passing - React's Context API handles the traversal and access for you.
                Children don't receive context as a prop; they pull it from React's internal tree when they call <Word>
                    <Verbatim />
                    useContext
                </Word>.
            </Paragraph>
        </Message>
        <Message
            at="2025-09-13T14:22:46.532893Z"
        >
            <Origin>a638b3c5-9e78-4863-9a4a-a3288e317161</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>But what is ChemistryContext. Is it a function component?</Paragraph>
            <Paragraph>
                Oh I see its a const. But can I have multiple ones? Chemistry kind of works like a series of constellations.
                You know you are your own constellation if you end up rendering as the first chemical without being given a
                prop that you are the child or belong to another chemical. So those are the ones that would create context.
                I would imagine they would pass context down through the props
            </Paragraph>
        </Message>
        <Message
            at="2025-09-13T14:23:04.773347Z"
        >
            <Origin>29ae5520-f8b3-4f8e-b9ad-cfd90dcdcc7c</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Yes, <Word>
                    <Verbatim />
                    ChemistryContext
                </Word> is created by <Word>
                    <Verbatim />
                    React.createContext()
                </Word> - it's not a component but a context object with <Word>
                    <Verbatim />
                    Provider
                </Word> and <Word>
                    <Verbatim />
                    Consumer
                </Word> components attached to it.
            </Paragraph>
            <Paragraph>You can absolutely have multiple contexts for different constellations! Here's how:</Paragraph>
            <CodeBox
                language="typescript"
            >
                {`${''}export class $Chemical {
    // Each root chemical creates its own context
    private static createConstellation() {
        return React.createContext<{
            root: $Chemical;
            registry: Map<number, $Chemical>;
            parent?: $Chemical;
        }>({
            root: null as any,
            registry: new Map(),
        });
    }
    
    private __createComponent() {
        return (props: any) => {
            // Check if we're receiving context via props (child of another chemical)
            const parentContext = props.__context;
            
            if (parentContext) {
                // We're part of an existing constellation
                const chemical = this.__create();
                chemical._context = parentContext;
                chemical._parent = parentContext.parent;
                
                // Pass context to our children via props
                const childProps = { __context: { ...parentContext, parent: chemical } };
                return React.cloneElement(chemical.view(), childProps);
            } else {
                // We're a root - create new constellation
                const ConstellationContext = $Chemical.createConstellation();
                const chemical = this.__create();
                
                const contextValue = {
                    root: chemical,
                    registry: new Map([[chemical.cid, chemical]]),
                    parent: undefined,
                };
                
                // Provide context to all descendants
                return (
                    <ConstellationContext.Provider value={contextValue}>
                        {React.Children.map(chemical.view(), child => 
                            React.isValidElement(child) 
                                ? React.cloneElement(child, { __context: contextValue } as any)
                                : child
                        )}
                    </ConstellationContext.Provider>
                );
            }
        };
    }
}`}
            </CodeBox>
            <Paragraph>This creates separate contexts for each constellation:</Paragraph>
            <CodeBox
                language="typescript"
            >
                {`// Two separate constellations with their own contexts
<div>
    <Chemical1>  {/* Creates constellation A */}
        <SubChemical />  {/* Part of constellation A */}
    </Chemical1>
    
    <Chemical2>  {/* Creates constellation B */}
        <SubChemical />  {/* Part of constellation B */}
    </Chemical2>
</div>`}
            </CodeBox>
            <Paragraph>
                Each constellation has its own isolated context, registry, and root. The context is passed through props (as
                <Word>
                    <Verbatim />
                    __context
                </Word>) rather than using React's context throughout, which gives you more control over the boundaries.
            </Paragraph>
        </Message>
        <Message
            at="2025-09-13T14:47:55.572762Z"
        >
            <Origin>a308b694-6b3c-4406-908c-76f93ba7fa75</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Take a look at this. I need to create the context in the case where the id is first set and there's no
                Binding prop:
            </Paragraph>
            <Paragraph>But this is ts not tsx, so we need to augment the view to manually build the JSX</Paragraph>
            <Paragraph>
                Can you make a helper method that I call that creates a new context and renders it around the view without
                the use of JSX?
            </Paragraph>
            <Attachment
                identifier="untitled"
                type=".txt"
            >
                Attached a file without a name
            </Attachment>
            <Attachment>Uploaded a file without a name, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2025-09-13T14:48:17.840235Z"
        >
            <Origin>a362f3de-1a07-448b-9c63-864e31c1a8b2</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                You can create the context and wrap the view using React.createElement directly without JSX:
            </Paragraph>
            <CodeBox
                language="typescript"
            >
                {`${''}private __createComponent(): $Component<this> {
    // ... existing code ...

    const Component: $Component<this> = props => {
        const nullId = -1;
        const [id, setId] = useState(nullId);
        
        let chemical = this;
        if (id == nullId) {
            chemical = this.__create();
            chemical._component = Component;
            chemical.reactivate();

            setId(chemical.cid);
            chemicalRegistry.set(chemical.cid, chemical);
        } else {
            chemical = chemicalRegistry.get(id) as any;
        }

        const binding = (props as any)['__binding'] as $BondType;

        // Handle context creation for root chemicals (no binding)
        let view = chemical.view();
        
        if (!binding && id !== nullId) {
            // This is a root chemical - create a new molecule/constellation
            view = chemical.__wrapWithContext(view, chemical);
        }

        // ... rest of existing binding logic ...

        return view;
    }
    
    return Component;
}

// Helper method to wrap view with context provider
private __wrapWithContext(view: ReactNode, rootChemical: $Chemical): ReactElement {
    const MoleculeContext = this.__createMolecule();
    
    const contextValue = {
        root: rootChemical,
        chemicals: new Map([[rootChemical.cid, rootChemical]]),
        bonds: new Map()
    };
    
    // Create Provider element without JSX
    return React.createElement(
        MoleculeContext.Provider,
        { value: contextValue },
        view  // This becomes the children
    );
}`}
            </CodeBox>
            <Paragraph>Or if you need to augment the view to pass context to children via props:</Paragraph>
            <CodeBox
                language="typescript"
            >
                {`${''}private __wrapWithContext(view: ReactNode, rootChemical: $Chemical): ReactElement {
    const MoleculeContext = this.__createMolecule();
    
    const contextValue = {
        root: rootChemical,
        chemicals: new Map([[rootChemical.cid, rootChemical]]),
        bonds: new Map()
    };
    
    // Augment children to add __molecule prop
    const augmentedView = React.Children.map(view, child => {
        if (React.isValidElement(child)) {
            return React.cloneElement(child, { __molecule: contextValue } as any);
        }
        return child;
    });
    
    return React.createElement(
        MoleculeContext.Provider,
        { value: contextValue },
        augmentedView
    );
}`}
            </CodeBox>
            <Paragraph>
                This creates the context provider using <Word>
                    <Verbatim />
                    React.createElement
                </Word> which works in .ts files without JSX.
            </Paragraph>
        </Message>
        <Append
            identifier="untitled"
            type=".txt"
        >
            ![[ untitled.txt ]]
        </Append>
    </Chapter>
);
