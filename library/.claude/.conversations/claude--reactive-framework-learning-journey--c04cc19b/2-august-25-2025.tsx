import { Append, Chapter, Date, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { CodeBox, Dated, Message, Speaker, Verbatim } from '../../../.manual/.book';
import { Attachment, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[25 August 2025](2025-08-25)</Date>
        </Dated>
        <Title>[[ 25 August 2025 ]]</Title>
        <Message
            at="2025-08-25T00:03:20.115181Z"
        >
            <Origin>3d6e7769-8c99-4570-b84a-6767dd4288f6</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Wonderful. Here's thje property bidning test results. Whoops. No dice. What can we do to debug?
            </Paragraph>
            <Attachment>Uploaded “image.png”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2025-08-25T00:04:03.992983Z"
        >
            <Origin>5e9ba79f-15ac-46e4-9496-0310524601e1</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                The test is failing because the child isn't being bound to the parent. Looking at the output, it shows
                "Child bound: NO" and "Child name: N/A", which means <Word>
                    <Verbatim />
                    this.child
                </Word> is undefined in the parent.
            </Paragraph>
            <Paragraph>Let's add some debug logging to figure out what's happening. Add this to your test file:</Paragraph>
            <CodeBox
                language="typescript"
            >
                {`class $Parent extends $Chemical {
    @child($Child)
    child!: $Child;
    
    view() {
        console.log('Parent.view() - this.child:', this.child);
        console.log('Parent.view() - this.children:', this.children);
        return (
            <div style={{ border: '2px solid blue', padding: '20px', borderRadius: '8px' }}>
                <h3>Parent Component</h3>
                <div style={{ marginBottom: '10px' }}>
                    <div>✓ Child bound: {this.child ? 'YES' : 'NO'}</div>
                    <div>✓ Child name: {this.child?.$name || 'N/A'}</div>
                </div>
                <div style={{ marginLeft: '20px', marginTop: '20px' }}>
                    {this.child?.view()}
                </div>
            </div>
        );
    }
}`}
            </CodeBox>
            <Paragraph>
                Also add logging to the <Word>
                    <Verbatim />
                    applyBinding
                </Word> method in your chemistry.ts:
            </Paragraph>
            <CodeBox
                language="typescript"
            >
                {`private applyBinding(child: $Chemical, parent: $Chemical): void {
    const bindings = getBindings(parent);
    console.log('applyBinding - bindings:', bindings);
    console.log('applyBinding - child:', child);
    console.log('applyBinding - parent:', parent);
    
    if (!parent.childPositionCounts) {
        parent.childPositionCounts = new Map();
    }
    
    for (const binding of bindings) {
        if (binding.property === 'children') continue;
        
        console.log('Checking binding:', binding);
        if (this.matchesBinding(child, parent, binding)) {
            console.log('Binding matched! Applying...');
            this.bindChild(child, parent, binding);
            break;
        }
    }
}`}
            </CodeBox>
            <Paragraph>
                The likely issue is that the decorators are using single underscore (<Word>
                    <Verbatim />
                    _bindingsMap
                </Word>) but the class now uses double underscore (<Word>
                    <Verbatim />
                    __bindingsMap
                </Word>). Update your decorators:
            </Paragraph>
            <CodeBox
                language="typescript"
            >
                {`export function child(ChildClass: any) {
    return function (target: any, propertyKey: string) {
        const constructor = target.constructor;
        if (!constructor.__bindingsMap) constructor.__bindingsMap = new Map<string, Binding>();

        let binding = constructor.__bindingsMap.get(propertyKey);
        if (!binding) {
            binding = { property: propertyKey };
            constructor.__bindingsMap.set(propertyKey, binding);
        }

        binding.class = ChildClass;
        if (binding.optional === undefined)
            binding.optional = false;
    };
}`}
            </CodeBox>
            <Paragraph>
                Same change needed for <Word>
                    <Verbatim />
                    getBindings
                </Word>:
            </Paragraph>
            <CodeBox
                language="typescript"
            >
                {`${''}function getBindings(instance: $Chemical): any[] {
    const constructor = instance.constructor as any;

    if (constructor.__mergedBindings) {
        return constructor.__mergedBindings;
    }

    const mergedMap = new Map<string, any>();

    let proto = constructor;
    while (proto && proto !== $Chemical) {
        if (proto.__bindingsMap) {  // Changed from _bindingsMap
            proto.__bindingsMap.forEach((binding: any, key: string) => {
                // ... rest
            });
        }
        proto = Object.getPrototypeOf(proto);
    }
    
    // ... rest
    constructor.__mergedBindings = bindings;  // Changed from _mergedBindings
    return bindings;
}`}
            </CodeBox>
        </Message>
        <Message
            at="2025-08-25T00:08:33.465937Z"
        >
            <Origin>b7be8c2c-aa0f-4f6b-8f82-1266c5af5132</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>These are the decorators:</Paragraph>
            <Paragraph>/**</Paragraph>
            <Paragraph>
                <List />
                <Line>Interface for binding decorators</Line>
            </Paragraph>
            <Paragraph>
                */ interface Binding &#123; class?: typeof $Chemical; // The class to bind optional?: boolean; // Whether
                binding is optional position?: number; // For @first, @second, etc (0-based) where?: (instance: any) =&gt;
                boolean; // Conditional predicate property: string; // Property name (for convenience) &#125;
            </Paragraph>
            <Paragraph>/**</Paragraph>
            <Paragraph>
                <List />
                <Line>Decorator for binding a child to a property</Line>
            </Paragraph>
            <Paragraph>
                */ export function child(ChildClass: any) &#123; return function (target: any, propertyKey: string) &#123;
                const constructor = target.constructor as any; if (!constructor.__bindingsMap) constructor.__bindingsMap =
                new Map&lt;string, Binding&gt;();
            </Paragraph>
            <Paragraph>
                let binding = constructor.__bindingsMap.get(propertyKey); if (!binding) &#123; binding = &#123; property:
                propertyKey &#125;; constructor.__bindingsMap.set(propertyKey, binding); &#125;
            </Paragraph>
            <Paragraph>
                binding.class = ChildClass; if (binding.optional === undefined) binding.optional = false; &#125;; &#125;
            </Paragraph>
            <Paragraph>/**</Paragraph>
            <Paragraph>
                <List />
                <Line>Decorator for positional child property binding</Line>
            </Paragraph>
            <Paragraph>
                */ export function optional() &#123; return function (target: any, propertyKey: string) &#123; const
                constructor = target.constructor as any; if (!constructor.__bindingsMap) constructor.__bindingsMap = new
                Map&lt;string, Binding&gt;();
            </Paragraph>
            <Paragraph>
                let binding = constructor.__bindingsMap.get(propertyKey); if (!binding) &#123; binding = &#123; property:
                propertyKey &#125;; constructor.__bindingsMap.set(propertyKey, binding); &#125;
            </Paragraph>
            <Paragraph>binding.optional = true; &#125;; &#125;</Paragraph>
            <Paragraph>/**</Paragraph>
            <Paragraph>
                <List />
                <Line>Decorator for conditional child property binding</Line>
            </Paragraph>
            <Paragraph>
                */ export function where(predicate: (instance: $Chemical) =&gt; boolean) &#123; return function (target:
                any, propertyKey: string) &#123; const constructor = target.constructor as any; if
                (!constructor.__bindingsMap) constructor.__bindingsMap = new Map&lt;string, Binding&gt;();
            </Paragraph>
            <Paragraph>
                let binding = constructor.__bindingsMap.get(propertyKey); if (!binding) &#123; binding = &#123; property:
                propertyKey &#125;; constructor.__bindingsMap.set(propertyKey, binding); &#125;
            </Paragraph>
            <Paragraph>binding.where = predicate; &#125;; &#125;</Paragraph>
            <Paragraph>/**</Paragraph>
            <Paragraph>
                <List />
                <Line>Decorator for positional child property binding</Line>
            </Paragraph>
            <Paragraph>
                */ export function position(n: number) &#123; return function (target: any, propertyKey: string) &#123;
                const constructor = target.constructor as any; if (!constructor.__bindingsMap) constructor.__bindingsMap =
                new Map&lt;string, Binding&gt;();
            </Paragraph>
            <Paragraph>
                let binding = constructor.__bindingsMap.get(propertyKey); if (!binding) &#123; binding = &#123; property:
                propertyKey &#125;; constructor.__bindingsMap.set(propertyKey, binding); &#125;
            </Paragraph>
            <Paragraph>binding.position = n - 1;  // 0-based &#125;; &#125;</Paragraph>
            <Paragraph>
                I added the logging and replaced the class. Here are the console logs. The test results are the same
            </Paragraph>
            <Attachment>Uploaded “image.png”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2025-08-25T00:10:38.454623Z"
        >
            <Origin>144011f0-ca9d-4b72-8a8a-2acd04a86bd0</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                The logs show <Word>
                    <Verbatim />
                    this.child
                </Word> is undefined but <Word>
                    <Verbatim />
                    this.children
                </Word> is an empty array. This means the child isn't registering with the parent at all. The issue is that
                <Word>
                    <Verbatim />
                    applyBinding
                </Word> is never being called because the child component hasn't mounted yet when the parent's view() runs.
            </Paragraph>
            <Paragraph>
                The problem is timing. The parent's <Word>
                    <Verbatim />
                    view()
                </Word> method runs during the parent's render, but the child hasn't mounted yet to register itself. The
                child only registers during its <Word>
                    <Verbatim />
                    useEffect
                </Word>, which happens after the parent has already rendered.
            </Paragraph>
            <Paragraph>Let's add more logging to see the sequence:</Paragraph>
            <CodeBox
                language="typescript"
            >
                {`private handleParentBinding(instance: $Chemical, props: any): void {
    console.log('handleParentBinding called', props);
    if (!props.__parentInstance) {
        console.log('No parent instance in props');
        return;
    }
    
    instance.parent = props.__parentInstance;
    console.log('Registering child with parent');
    this.registerWithParent(instance, instance.parent);
}`}
            </CodeBox>
            <Paragraph>
                And in <Word>
                    <Verbatim />
                    modifyChildren
                </Word>:
            </Paragraph>
            <CodeBox
                language="typescript"
            >
                {`private modifyChildren(instance: $Chemical, children: ReactNode): ReactNode {
    console.log('modifyChildren called, instance:', instance);
    const childrenArray = React.Children.toArray(children);
    console.log('childrenArray:', childrenArray);
    
    return childrenArray.map(child => {
        if (React.isValidElement(child) && (child.type as any).isChemical) {
            console.log('Found Chemical child, adding __parentInstance');
            return React.cloneElement(child as any, { 
                ...(child.props as any),
                __parentInstance: instance
            });
        }
        return child;
    });
}`}
            </CodeBox>
            <Paragraph>
                The real issue is that <Word>
                    <Verbatim />
                    processChildren
                </Word> is called during render (synchronously), but the binding happens in <Word>
                    <Verbatim />
                    useEffect
                </Word> (asynchronously). The parent renders before children have a chance to register.
            </Paragraph>
            <Paragraph>
                To fix this, the parent needs to re-render after children register. Add this to <Word>
                    <Verbatim />
                    registerWithParent
                </Word>:
            </Paragraph>
            <CodeBox
                language="typescript"
            >
                {`private registerWithParent(child: $Chemical, parent: $Chemical): void {
    this.trackChild(parent, child);
    this.applyBinding(child, parent);
    
    // Trigger parent re-render after binding
    const parentUpdate = componentUpdaters.get(parent);
    if (parentUpdate) {
        console.log('Triggering parent update after child registration');
        parentUpdate();
    }
}`}
            </CodeBox>
            <Paragraph>
                This should cause the parent to re-render once the child registers, and then <Word>
                    <Verbatim />
                    this.child
                </Word> should be populated.
            </Paragraph>
        </Message>
        <Message
            at="2025-08-25T00:15:08.920073Z"
        >
            <Origin>5c8af408-6ace-4e21-9f4e-bb4171f76ad7</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>I added the updates. Here's the result</Paragraph>
            <Attachment>Uploaded “image.png”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2025-08-25T00:15:16.462848Z"
        >
            <Origin>3e768119-e178-43df-aa3e-671b8781c02d</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Nothing was written in this message</Paragraph>
        </Message>
        <Message
            at="2025-08-25T00:15:36.017438Z"
        >
            <Origin>2359d4dd-40b9-4016-88cc-4969ab8e44d9</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>I added the logging. Here's the result</Paragraph>
            <Attachment>Uploaded “image.png”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2025-08-25T00:16:41.480380Z"
        >
            <Origin>470c51f0-dfd7-48d4-bd9a-3cc128cb147e</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Perfect! The logs show exactly what's happening. Looking at the sequence:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Verbatim />
                        modifyChildren
                    </Word> is called during parent render - it finds the Chemical child and adds <Word>
                        <Verbatim />
                        __parentInstance
                    </Word>
                </Line>
                <Line>
                    Parent renders with <Word>
                        <Verbatim />
                        this.child
                    </Word> undefined and <Word>
                        <Verbatim />
                        this.children
                    </Word> empty
                </Line>
                <Line>
                    Later, <Word>
                        <Verbatim />
                        handleParentBinding
                    </Word> is called with the child's props
                </Line>
                <Line>But it says "No parent instance in props"</Line>
            </Paragraph>
            <Paragraph>
                The problem is clear: the <Word>
                    <Verbatim />
                    __parentInstance
                </Word> prop isn't making it to the child component. The child receives props without <Word>
                    <Verbatim />
                    __parentInstance
                </Word>.
            </Paragraph>
            <Paragraph>
                The issue is that <Word>
                    <Verbatim />
                    processChildren
                </Word> (which calls <Word>
                    <Verbatim />
                    modifyChildren
                </Word>) happens during render, but its result isn't being used properly. Looking at the component method:
            </Paragraph>
            <CodeBox
                language="typescript"
            >
                {`${''}const ChemicalComponent: React.FC<Properties<this>> = (props: any) => {
    const instance = self.createInstance();
    const [, forceUpdate] = useState({});

    useEffect(() => {
        self.setupInstance(instance, props, () => forceUpdate({}));
        return () => self.cleanupInstance(instance);
    }, []);
    
    self.processChildren(instance, props);
    return self.renderInstance(instance);
};`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Verbatim />
                    processChildren
                </Word> modifies the children and stores them in <Word>
                    <Verbatim />
                    instance.childrenElements
                </Word>, but the modified children with <Word>
                    <Verbatim />
                    __parentInstance
                </Word> aren't being passed down to the actual child components. The modified children are stored but not
                rendered.
            </Paragraph>
            <Paragraph>
                The fix is to ensure the modified children are what gets rendered. In <Word>
                    <Verbatim />
                    renderInstance
                </Word>, when calling <Word>
                    <Verbatim />
                    view()
                </Word>, the component should render the modified children:
            </Paragraph>
            <CodeBox
                language="typescript"
            >
                {`view(): ReactNode {
    return this.childrenElements;
}`}
            </CodeBox>
            <Paragraph>
                But wait, that's already what it does! The issue is that the parent's <Word>
                    <Verbatim />
                    view()
                </Word> method is overridden and doesn't use <Word>
                    <Verbatim />
                    childrenElements
                </Word>. The parent's <Word>
                    <Verbatim />
                    view()
                </Word> directly accesses <Word>
                    <Verbatim />
                    this.child?.view()
                </Word> instead of rendering its <Word>
                    <Verbatim />
                    childrenElements
                </Word>.
            </Paragraph>
            <Paragraph>The test needs to be updated to render children properly:</Paragraph>
            <CodeBox
                language="typescript"
            >
                {`class $Parent extends $Chemical {
    @child($Child)
    child!: $Child;
    
    view() {
        return (
            <div style={{ border: '2px solid blue', padding: '20px', borderRadius: '8px' }}>
                <h3>Parent Component</h3>
                <div style={{ marginBottom: '10px' }}>
                    <div>✓ Child bound: {this.child ? 'YES' : 'NO'}</div>
                    <div>✓ Child name: {this.child?.$name || 'N/A'}</div>
                </div>
                <div style={{ marginLeft: '20px', marginTop: '20px' }}>
                    {this.childrenElements}  {/* Use childrenElements instead of this.child?.view() */}
                </div>
            </div>
        );
    }
}`}
            </CodeBox>
            <Paragraph>
                The parent should render <Word>
                    <Verbatim />
                    this.childrenElements
                </Word> (which contains the modified children with <Word>
                    <Verbatim />
                    __parentInstance
                </Word>) rather than directly calling <Word>
                    <Verbatim />
                    this.child?.view()
                </Word>.
            </Paragraph>
        </Message>
        <Message
            at="2025-08-25T00:20:10.009269Z"
        >
            <Origin>1648b646-a99d-45a2-95d8-7016ad41a850</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>But we want to render the view of the child</Paragraph>
        </Message>
        <Message
            at="2025-08-25T00:20:34.225844Z"
        >
            <Origin>adb8b3bf-5658-4b0e-b1d8-00c9d03c4c36</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                You're right - we want to render the child's view. The issue is that <Word>
                    <Verbatim />
                    this.childrenElements
                </Word> contains the React elements (the <Word>
                    <Verbatim />
                    &lt;Child /&gt;
                </Word> components), not the rendered views.
            </Paragraph>
            <Paragraph>
                The real problem is that the child never receives the <Word>
                    <Verbatim />
                    __parentInstance
                </Word> prop. Looking at the logs, <Word>
                    <Verbatim />
                    handleParentBinding
                </Word> is called but the props don't contain <Word>
                    <Verbatim />
                    __parentInstance
                </Word>. This means the modified children created in <Word>
                    <Verbatim />
                    modifyChildren
                </Word> aren't being used.
            </Paragraph>
            <Paragraph>
                The issue is in the component's render flow. <Word>
                    <Verbatim />
                    processChildren
                </Word> modifies the children and stores them, but those modified children aren't actually being rendered by
                React. They're just stored in <Word>
                    <Verbatim />
                    childrenElements
                </Word>.
            </Paragraph>
            <Paragraph>Here's what's happening:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Parent component renders</Line>
                <Line>
                    <Word>
                        <Verbatim />
                        processChildren
                    </Word> creates modified children with <Word>
                        <Verbatim />
                        __parentInstance
                    </Word> and stores them
                </Line>
                <Line>
                    Parent's <Word>
                        <Verbatim />
                        view()
                    </Word> returns JSX
                </Line>
                <Line>
                    React renders the ORIGINAL <Word>
                        <Verbatim />
                        &lt;Child /&gt;
                    </Word> from the test, not the modified one
                </Line>
            </Paragraph>
            <Paragraph>
                The problem is that React already has the children from props and will render those. The modified children
                we create are never actually rendered by React.
            </Paragraph>
            <Paragraph>
                To fix this, we need to actually render the modified children. In the parent's view, when you want to show
                the child, you should render the actual React element:
            </Paragraph>
            <CodeBox
                language="typescript"
            >
                {`view() {
    return (
        <div style={{ border: '2px solid blue', padding: '20px', borderRadius: '8px' }}>
            <h3>Parent Component</h3>
            <div style={{ marginBottom: '10px' }}>
                <div>✓ Child bound: {this.child ? 'YES' : 'NO'}</div>
                <div>✓ Child name: {this.child?.$name || 'N/A'}</div>
            </div>
            <div style={{ marginLeft: '20px', marginTop: '20px' }}>
                {this.childrenElements}  {/* This renders the modified children */}
            </div>
        </div>
    );
}`}
            </CodeBox>
            <Paragraph>
                Then once the child mounts with the <Word>
                    <Verbatim />
                    __parentInstance
                </Word> prop, it will register itself and <Word>
                    <Verbatim />
                    this.child
                </Word> will be populated. After that, you could access <Word>
                    <Verbatim />
                    this.child
                </Word> for its properties.
            </Paragraph>
            <Paragraph>
                Alternatively, if you want to keep using <Word>
                    <Verbatim />
                    this.child?.view()
                </Word>, you need to wait for the child to register first. The parent could check if binding is complete and
                show a loading state until then.
            </Paragraph>
        </Message>
        <Message
            at="2025-08-25T00:22:06.517702Z"
        >
            <Origin>f685f24c-afa4-4152-95ca-91471976dc62</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                But this defeats the purpose of having the child doesn't it? Or at least, we want to support the use case of
                rendering the child. Suppose there were two children and we stored them on different properties. We would
                need to insert them accordingly. This is the prupose of binding
            </Paragraph>
        </Message>
        <Message
            at="2025-08-25T00:23:34.141834Z"
        >
            <Origin>487568ea-3767-42ed-9b95-4873f4f7ef1c</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                You're absolutely right. The binding system's purpose is to let you access and render specific children
                through their bound properties. If you have:
            </Paragraph>
            <CodeBox
                language="typescript"
            >
                {`class $Layout extends $Chemical {
    @child($Header)
    header!: $Header;
    
    @child($Sidebar) 
    sidebar!: $Sidebar;
    
    @child($Content)
    content!: $Content;
    
    view() {
        return (
            <div>
                <div>{this.header?.view()}</div>
                <div style={{display: 'flex'}}>
                    <div>{this.sidebar?.view()}</div>
                    <div>{this.content?.view()}</div>
                </div>
            </div>
        );
    }
}`}
            </CodeBox>
            <Paragraph>
                You need to be able to place specific children in specific locations, not just dump all children together.
            </Paragraph>
            <Paragraph>
                The fundamental issue is that the child components need to receive the <Word>
                    <Verbatim />
                    __parentInstance
                </Word> prop to register themselves, but the parent is trying to render children before they exist. This is
                a chicken-and-egg problem.
            </Paragraph>
            <Paragraph>
                The solution is that the parent needs to render the React elements (which will mount the children with
                <Word>
                    <Verbatim />
                    __parentInstance
                </Word>), and then once the children register, the parent re-renders with the bound children available.
            </Paragraph>
            <Paragraph>The fix is to make the parent render both:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>The React children elements (so they mount and register)</Line>
                <Line>The bound children's views (once they're available)</Line>
            </Paragraph>
            <Paragraph>But we need to hide the React elements since we only want their registration side-effect:</Paragraph>
            <CodeBox
                language="typescript"
            >
                {`private renderInstance(instance: $Chemical): ReactNode {
    const aboveNode = instance.above();
    const mainNode = instance.view();
    const belowNode = instance.below();
    
    // Hidden div to mount children for registration
    const hiddenChildren = (
        <div style={{ display: 'none' }}>
            {instance.childrenElements}
        </div>
    );
    
    if (!aboveNode && !belowNode) {
        return (
            <>
                {mainNode}
                {hiddenChildren}
            </>
        );
    }
    
    return (
        <>
            {this.createFragment(aboveNode, mainNode, belowNode)}
            {hiddenChildren}
        </>
    );
}`}
            </CodeBox>
            <Paragraph>
                This ensures children mount and register while letting the parent control where their views appear.
            </Paragraph>
        </Message>
        <Append
            identifier="page-tsx-test-suite-index"
            type=".tsx"
        >
            ![[ page-tsx-test-suite-index.tsx ]]
        </Append>
        <Append
            identifier="app-page-tsx-main-test-runner"
            type=".tsx"
        >
            ![[ app-page-tsx-main-test-runner.tsx ]]
        </Append>
        <Append
            identifier="app-tests-basic-binding-page-tsx"
            type=".tsx"
        >
            ![[ app-tests-basic-binding-page-tsx.tsx ]]
        </Append>
        <Append
            identifier="app-tests-navigation-page-tsx"
            type=".tsx"
        >
            ![[ app-tests-navigation-page-tsx.tsx ]]
        </Append>
        <Append
            identifier="app-tests-reactivity-page-tsx"
            type=".tsx"
        >
            ![[ app-tests-reactivity-page-tsx.tsx ]]
        </Append>
        <Append
            identifier="app-tests-array-binding-page-tsx"
            type=".tsx"
        >
            ![[ app-tests-array-binding-page-tsx.tsx ]]
        </Append>
        <Append
            identifier="app-tests-positional-page-tsx"
            type=".tsx"
        >
            ![[ app-tests-positional-page-tsx.tsx ]]
        </Append>
        <Append
            identifier="refactored-chemical-class"
            type=".ts"
        >
            ![[ refactored-chemical-class.ts ]]
        </Append>
        <Append
            identifier="chemical-new-version"
            type=".ts"
        >
            ![[ chemical-new-version.ts ]]
        </Append>
    </Chapter>
);
