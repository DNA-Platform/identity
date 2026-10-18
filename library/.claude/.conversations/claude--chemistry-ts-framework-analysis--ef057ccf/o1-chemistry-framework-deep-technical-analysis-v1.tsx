import { Bold, Chapter, Heading, Line, List, Paragraph, Section, Title, Word } from '@dna-platform/public';
import { CodeBox, Opaque, Verbatim } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ Chemistry Framework: Deep Technical Analysis v1 ]]</Title>
        <Section>
            <Opaque />
            <Heading>Chemistry Framework: Deep Technical Analysis at version 1</Heading>
            <Heading>Chemistry Framework: Deep Technical Analysis</Heading>
            <Heading>Executive Summary</Heading>
            <Paragraph>
                Chemistry (<Word>
                    <Verbatim />
                    $Chemistry
                </Word>) is a revolutionary React framework that brings true object-oriented programming to React while
                preserving TSX syntax. It solves React's fundamental complexity problems by replacing hooks, state
                management, and prop drilling with a natural class-based system that "just works."
            </Paragraph>
            <Heading>Core Philosophy: "Keep TSX, Dump the Dogma"</Heading>
            <Paragraph>
                The framework recognizes that TSX/JSX is React's true innovation - making markup a first-class citizen in
                TypeScript. However, React buried this brilliance under functional programming dogma that makes UI
                development unnecessarily complex. Chemistry keeps the beautiful TSX syntax while replacing everything else
                with intuitive OOP patterns.
            </Paragraph>
            <Heading>The Paradigm Shift</Heading>
            <Heading>From React's Functional Chaos:</Heading>
            <CodeBox
                language="typescript"
            >
                {`${''}function TodoList({ title }) {
    const [items, setItems] = useState([]);
    const [filter, setFilter] = useState('all');
    const filtered = useMemo(() => items.filter(...), [items, filter]);
    const addItem = useCallback(() => setItems(prev => [...prev, item]), []);
    // Hooks, rules, immutability theater...
}`}
            </CodeBox>
            <Heading>To Chemistry's Natural OOP:</Heading>
            <CodeBox
                language="typescript"
            >
                {`${''}class $TodoList extends $Chemical {
    title = '';
    items = [];
    filter = 'all';
    
    get filtered() { return this.items.filter(...); }
    addItem(item) { this.items.push(item); }
    
    view() { return <div>{this.filtered.map(...)}</div> }
}`}
            </CodeBox>
            <Heading>Revolutionary Innovations</Heading>
            <Heading>1. Children as Constructor Arguments (🤯)</Heading>
            <Paragraph>
                This is the framework's most brilliant innovation. In Chemistry, JSX children become constructor parameters,
                creating real object graphs:
            </Paragraph>
            <CodeBox
                language="typescript"
            >
                {`${''}class $Book extends $Chemical {
    $Book(toc: $TableOfContents, ...chapters: $Chapter[]) {
        // Children are ACTUAL TYPED PARAMETERS!
        this.toc = toc;
        this.chapters = chapters;
    }
}

// In JSX:
<Book>
    <TableOfContents />  // Becomes constructor argument!
    <Chapter />
    <Chapter />
</Book>`}
            </CodeBox>
            <Paragraph>
                This enables true polymorphism - a <Word>
                    <Verbatim />
                    $FancyChapter
                </Word> can be passed where <Word>
                    <Verbatim />
                    $Chapter
                </Word> is expected.
            </Paragraph>
            <Heading>2. The Binding System: Reactive Object Graphs</Heading>
            <Paragraph>The framework creates a sophisticated binding system through:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        $Chemical
                    </Word>: Base class for all components
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        $Bond
                    </Word>: Manages individual property reactivity
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        $Formula
                    </Word>: Tracks dependencies and state
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        $Molecule
                    </Word>: Manages parent-child relationships
                </Line>
            </Paragraph>
            <Paragraph>Properties automatically become reactive through property descriptors:</Paragraph>
            <CodeBox
                language="typescript"
            >
                {`class $Counter extends $Chemical {
    count = 0;  // Automatically reactive!
    
    $increment() {
        this.count++;  // Triggers re-render automatically
    }
}`}
            </CodeBox>
            <Heading>3. Structural Components: Data Modeling in JSX</Heading>
            <Paragraph>
                The <Word>
                    <Verbatim />
                    $
                </Word> component (and extensible structural components) allows expressing complex data structures in JSX:
            </Paragraph>
            <CodeBox
                language="typescript"
            >
                {`<Book>
    <Title />
    <$>  // Groups as array
        <Chapter />
        <Chapter />
    </$>
    <$Map>
        <$K>id-1</$K><$V><Chapter /></$V>
        <$K>id-2</$K><$V><FancyChapter /></$V>
    </$Map>
</Book>`}
            </CodeBox>
            <Heading>4. Progressive Disclosure Architecture</Heading>
            <Paragraph>Chemistry works at three levels:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Level 0: Invisible Chemistry
                </Word>
            </Paragraph>
            <CodeBox
                language="typescript"
            >
                {`import { Button } from 'ui-library';  // It's actually Chemistry!
<Button />  // Works in plain React`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    Level 1: Binding Without Classes
                </Word>
            </Paragraph>
            <CodeBox
                language="typescript"
            >
                {`${''}const [button, BoundButton] = Button.bind();
button.text = "Click me";  // Control the instance`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    Level 2: Full Chemistry
                </Word>
            </Paragraph>
            <CodeBox
                language="typescript"
            >
                {`class $MyButton extends $Button {
    // Full OOP power
}`}
            </CodeBox>
            <Heading>Technical Magic Under the Hood</Heading>
            <Heading>The Component Lifecycle</Heading>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Template Phase
                    </Word>: Prototype-based, shared across instances
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Instance Creation
                    </Word>: Via <Word>
                        <Verbatim />
                        __create()
                    </Word>, maintains registry
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Binding Phase
                    </Word>: Properties become reactive bonds
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Transformation
                    </Word>: Can morph types at runtime!
                </Line>
            </Paragraph>
            <Heading>State Management Through Symbolization</Heading>
            <Paragraph>
                The framework uses <Word>
                    <Verbatim />
                    symbolize()
                </Word> to convert object graphs to strings for deep equality checking without immutability:
            </Paragraph>
            <CodeBox
                language="typescript"
            >
                {`function symbolize(value: any): string {
    // Converts complex objects to comparable strings
    // Handles circular references via Chemical IDs
}`}
            </CodeBox>
            <Heading>Prototypal Inheritance Synced with React State</Heading>
            <Paragraph>
                Components use prototypal inheritance until bound, then become detached instances. This allows:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Shared templates for efficiency</Line>
                <Line>Independent instances when needed</Line>
                <Line>Runtime type morphing capabilities</Line>
            </Paragraph>
            <Heading>The Registry Pattern</Heading>
            <CodeBox
                language="typescript"
            >
                {`const $chemicalRegistry = new Map<number, $Chemical>();`}
            </CodeBox>
            <Paragraph>
                Each Chemical gets a unique ID (<Word>
                    <Verbatim />
                    cid
                </Word>) stored in React state, solving React's lack of component instance tracking.
            </Paragraph>
            <Heading>Conventions Over Configuration</Heading>
            <Paragraph>Chemistry uses simple conventions to eliminate boilerplate:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Verbatim />
                        $
                    </Word> prefix on properties = props from parent
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        $
                    </Word> prefix on methods = event handlers
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        _
                    </Word> prefix = non-reactive properties
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        view()
                    </Word> = render method
                </Line>
                <Line>Constructor name matching class name = component constructor</Line>
            </Paragraph>
            <Heading>Runtime Polymorphism Support</Heading>
            <Paragraph>The framework supports true polymorphism through:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Constructor Injection
                    </Word>: Pass component types as templates
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Dynamic Type Swapping
                    </Word>: Components can change type at runtime
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Equivalence Checking
                    </Word>: Custom <Word>
                        <Verbatim />
                        equals()
                    </Word> methods for complex matching
                </Line>
            </Paragraph>
            <CodeBox
                language="typescript"
            >
                {`class $Book extends $Chemical {
    chapterType = $Chapter;  // Can be overridden by subclasses
    
    $Book(ChapterComponent?: typeof $Chapter) {
        if (ChapterComponent) this.chapterType = ChapterComponent;
    }
}`}
            </CodeBox>
            <Heading>Performance Considerations</Heading>
            <Heading>Trade-offs:</Heading>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Symbolization overhead
                    </Word>: Deep equality checking is slower than referential equality
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Getter-based tracking
                    </Word>: Every property access is tracked
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Property descriptor overhead
                    </Word>: Each property has custom getters/setters
                </Line>
            </Paragraph>
            <Heading>Mitigations:</Heading>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Verbatim />
                        @inert()
                    </Word> decorator for non-reactive properties
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        _
                    </Word> prefix convention for internal state
                </Line>
                <Line>Methods don't trigger reactivity</Line>
                <Line>Can drop to React for performance-critical sections</Line>
            </Paragraph>
            <Heading>The Auto-Chemistrification System</Heading>
            <Paragraph>Any React component can be automatically converted to Chemistry:</Paragraph>
            <CodeBox
                language="typescript"
            >
                {`const $MuiButton = $chemistrify(Button);
// Now Material UI works with Chemistry!`}
            </CodeBox>
            <Paragraph>This provides instant ecosystem compatibility.</Paragraph>
            <Heading>Why This Framework Matters</Heading>
            <Heading>Problems It Solves:</Heading>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        No more hooks chaos
                    </Word>: No rules about order, conditions, or dependencies
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        No prop drilling
                    </Word>: Objects know their relationships
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        No context boilerplate
                    </Word>: Parent-child relationships are real
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        No immutability theater
                    </Word>: Just <Word>
                        <Verbatim />
                        this.items.push(item)
                    </Word>
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        True inheritance
                    </Word>: Subclass and override naturally
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Real encapsulation
                    </Word>: Private fields that work
                </Line>
            </Paragraph>
            <Heading>What Makes It Revolutionary:</Heading>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Children become typed constructor arguments
                    </Word> - unprecedented in React
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Structural components
                    </Word> turn JSX into a data modeling language
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Gradual adoption
                    </Word> - works invisibly in existing React apps
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        700 lines of code
                    </Word> vs React's 140KB
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Convention over configuration
                    </Word> - no decorators or providers needed
                </Line>
            </Paragraph>
            <Heading>The Vision Realized</Heading>
            <Paragraph>
                Chemistry proves that React's complexity was never necessary. By embracing OOP instead of fighting it,
                Chemistry delivers what developers actually want: components that are objects, state that's mutable, and
                relationships that are real.
            </Paragraph>
            <Paragraph>
                The framework's genius lies not in what it adds, but what it removes. No hooks, no providers, no
                immutability, no prop drilling - just objects being objects with beautiful TSX views.
            </Paragraph>
            <Heading>Most Interesting Technical Patterns</Heading>
            <Heading>1. The Bound Component Pattern</Heading>
            <Paragraph>Components can exist in bound or unbound states, with different typing:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Verbatim />
                        $Component&lt;T&gt;
                    </Word> - unbound, requires props
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        $$Component&lt;T&gt;
                    </Word> - bound, props optional
                </Line>
            </Paragraph>
            <Heading>2. The Formula/Bond System</Heading>
            <Paragraph>
                Sophisticated dependency tracking without virtual DOM diffing, using property descriptors and state
                symbolization.
            </Paragraph>
            <Heading>3. Constructor Validation at Runtime</Heading>
            <Paragraph>
                Since TypeScript can't enforce calling parent constructors in methods, Chemistry tracks this at runtime with
                creative proxy patterns.
            </Paragraph>
            <Heading>4. The Bridge Pattern</Heading>
            <Paragraph>
                Chemistry components work in plain React, making it a bridge between two worlds rather than a replacement.
            </Paragraph>
            <Heading>5. Metamorphic Components</Heading>
            <Paragraph>
                Components can literally change their type at runtime through <Word>
                    <Verbatim />
                    importStructure()
                </Word> and prototype chain manipulation.
            </Paragraph>
            <Heading>Conclusion</Heading>
            <Paragraph>
                Chemistry isn't just "React with classes" - it's a fundamental reimagining of how UI frameworks should work.
                By treating components as real objects with real relationships, it delivers the simplicity that React
                promised but never achieved.
            </Paragraph>
            <Paragraph>
                The framework asks: "What if we kept TSX and got rid of everything else?" The answer is 700 lines of
                elegance that makes React's 140KB of complexity look like a historical mistake.
            </Paragraph>
        </Section>
    </Chapter>
);
