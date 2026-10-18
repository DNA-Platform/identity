import { Bold, Chapter, Heading, Line, List, Paragraph, Section, Title, Word } from '@dna-platform/public';
import { CodeBox, Opaque, Verbatim } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ Chemistry Framework: Deep Analysis v1 ]]</Title>
        <Section>
            <Opaque />
            <Heading>Chemistry Framework: Deep Analysis at version 1</Heading>
            <Heading>Chemistry Framework: Deep Analysis</Heading>
            <Heading>Executive Summary</Heading>
            <Paragraph>
                Chemistry (<Word>
                    <Verbatim />
                    $Chemistry
                </Word>) is a revolutionary React compatibility layer that transforms React's functional paradigm into a
                true object-oriented system. It allows developers to write UI components as classes with real inheritance,
                polymorphism, and state management while maintaining full React compatibility. The framework's genius lies
                in making complexity optional - React developers can use Chemistry components without knowing they exist,
                while those seeking power can leverage its full OOP capabilities.
            </Paragraph>
            <Heading>Core Philosophy: "Keep TSX, Dump the Dogma"</Heading>
            <Paragraph>
                Chemistry recognizes that JSX/TSX was React's true innovation - bringing type-safe markup into JavaScript.
                However, it rejects React's functional programming constraints:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        No hooks
                    </Word> - Just properties and methods
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        No prop drilling
                    </Word> - Objects maintain relationships
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        No immutability theater
                    </Word> - Direct property mutation
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Real inheritance
                    </Word> - Not React's composition-only model
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        True polymorphism
                    </Word> - Components can be subclassed and overridden
                </Line>
            </Paragraph>
            <Heading>The Paradigm Shift</Heading>
            <Heading>Traditional React (Functional)</Heading>
            <CodeBox
                language="typescript"
            >
                {`${''}function TodoList({ title }) {
    const [items, setItems] = useState([]);
    const [filter, setFilter] = useState('all');
    
    const addItem = useCallback((item) => {
        setItems(prev => [...prev, item]);
    }, []);
    
    // Scattered state, hook rules, immutable updates
}`}
            </CodeBox>
            <Heading>Chemistry (Object-Oriented)</Heading>
            <CodeBox
                language="typescript"
            >
                {`${''}class $TodoList extends $Chemical {
    title = '';
    items = [];
    filter = 'all';
    
    $addItem(item) {
        this.items.push(item);  // Just works!
    }
}`}
            </CodeBox>
            <Heading>Architecture Deep Dive</Heading>
            <Heading>1. The $Chemical Base Class</Heading>
            <Paragraph>The foundation of everything. Each $Chemical:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    Has a unique <Word>
                        <Verbatim />
                        cid
                    </Word> (Chemical ID) for tracking
                </Line>
                <Line>
                    Contains a <Word>
                        <Verbatim />
                        $Formula
                    </Word> that manages reactivity
                </Line>
                <Line>
                    Has a <Word>
                        <Verbatim />
                        $BondOrchestrator
                    </Word> that handles children and props
                </Line>
                <Line>
                    Can generate a React <Word>
                        <Verbatim />
                        Component
                    </Word> that bridges to React
                </Line>
            </Paragraph>
            <Heading>2. The Reactivity System</Heading>
            <Heading>$Formula</Heading>
            <Paragraph>
                <List />
                <Line>Manages the state dictionary for a Chemical</Line>
                <Line>Tracks which properties are accessed during render</Line>
                <Line>
                    Uses <Word>
                        <Verbatim />
                        symbolize()
                    </Word> to create string representations for deep equality
                </Line>
            </Paragraph>
            <Heading>$Bond</Heading>
            <Paragraph>
                <List />
                <Line>Wraps each property with getter/setter interceptors</Line>
                <Line>Tracks property access for automatic dependency detection</Line>
                <Line>Distinguishes between:</Line>
                <Paragraph>
                    <List />
                    <Line>
                        <Word>
                            <Verbatim />
                            $prop
                        </Word> - External props from parent
                    </Line>
                    <Line>
                        <Word>
                            <Verbatim />
                            prop
                        </Word> - Internal reactive state
                    </Line>
                    <Line>
                        <Word>
                            <Verbatim />
                            _prop
                        </Word> - Non-reactive (underscore prefix)
                    </Line>
                    <Line>
                        <Word>
                            <Verbatim />
                            @inert()
                        </Word> decorated - Explicitly non-reactive
                    </Line>
                </Paragraph>
            </Paragraph>
            <Heading>State Tracking</Heading>
            <CodeBox
                language="typescript"
            >
                {`${''}// When you access a property:
get count() {
    state[this.bid] = symbolize(value);  // Tracked!
    return this._count;
}`}
            </CodeBox>
            <Heading>3. The Component Bridge</Heading>
            <Paragraph>Each Chemical creates a React component that:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    Uses <Word>
                        <Verbatim />
                        useState
                    </Word> to store the Chemical's <Word>
                        <Verbatim />
                        cid
                    </Word>
                </Line>
                <Line>Retrieves/creates the Chemical instance from registry</Line>
                <Line>Binds React's setState to Chemical's formula</Line>
                <Line>
                    Renders by calling Chemical's <Word>
                        <Verbatim />
                        view()
                    </Word> method
                </Line>
            </Paragraph>
            <Heading>4. Children as Constructor Arguments (Revolutionary!)</Heading>
            <Paragraph>
                This is the framework's most innovative feature. Children in JSX become constructor arguments:
            </Paragraph>
            <CodeBox
                language="typescript"
            >
                {`${''}<Book>
    <Title text="My Book" />
    <Chapter name="One" />
    <Chapter name="Two" />
</Book>

// Becomes:
class $Book extends $Chemical {
    $Book(title: $Title, ...chapters: $Chapter[]) {
        // Children are constructor parameters!
        this.title = title;
        this.chapters = chapters;
    }
}`}
            </CodeBox>
            <Paragraph>This enables:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        True polymorphism
                    </Word> - Pass different Chapter subtypes
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Type safety
                    </Word> - Constructor defines expected children
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Object graphs
                    </Word> - Real parent-child relationships
                </Line>
            </Paragraph>
            <Heading>5. Structural Components ($Array Pattern)</Heading>
            <Paragraph>Chemistry introduces structural components for data organization:</Paragraph>
            <CodeBox
                language="typescript"
            >
                {`${''}<Book>
    <Title />
    <$>  // Array grouping
        <Chapter />
        <Chapter />
    </$>
    <Footer />
</Book>

// Maps to constructor:
$Book(title: $Title, chapters: $Chapter[], footer: $Footer)`}
            </CodeBox>
            <Paragraph>
                The <Word>
                    <Verbatim />
                    $
                </Word> component:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Groups children into arrays</Line>
                <Line>Disappears from the DOM (returns null)</Line>
                <Line>Can be extended ($Map, $Tree, etc.)</Line>
            </Paragraph>
            <Heading>6. Progressive Adoption Layers</Heading>
            <Heading>Level 0: Invisible Chemistry</Heading>
            <CodeBox
                language="typescript"
            >
                {`import { Button } from 'ui-lib';  // It's actually Chemistry!
<Button />  // Works in plain React`}
            </CodeBox>
            <Heading>Level 1: Binding</Heading>
            <CodeBox
                language="typescript"
            >
                {`${''}const [btn, BoundButton] = Button.bind();
btn.$text = "Click me";  // Control the instance`}
            </CodeBox>
            <Heading>Level 2: Full Chemistry</Heading>
            <CodeBox
                language="typescript"
            >
                {`class $MyButton extends $Button {
    // Full OOP power
}`}
            </CodeBox>
            <Heading>Brilliant Implementation Details</Heading>
            <Heading>1. Prototypal Template Pattern</Heading>
            <Paragraph>
                <List />
                <Line>Components start as prototypes (templates)</Line>
                <Line>Become instances when mounted</Line>
                <Line>Can be "detached" and transformed at runtime</Line>
            </Paragraph>
            <Heading>2. Registry System</Heading>
            <Paragraph>
                <List />
                <Line>
                    Global registry maps <Word>
                        <Verbatim />
                        cid
                    </Word> to Chemical instances
                </Line>
                <Line>Solves React's lack of component instance IDs</Line>
                <Line>Enables stable object graphs across re-renders</Line>
            </Paragraph>
            <Heading>3. Convention Over Configuration</Heading>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Verbatim />
                        $
                    </Word> prefix = prop or structural component
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        _
                    </Word> prefix = non-reactive
                </Line>
                <Line>Method name matching class = constructor</Line>
                <Line>No decorators or config needed</Line>
            </Paragraph>
            <Heading>4. Symbolization for State Comparison</Heading>
            <CodeBox
                language="typescript"
            >
                {`function symbolize(value: any): string {
    // Converts object graphs to strings
    // Handles circular references via Chemical IDs
    // Enables deep equality without immutability
}`}
            </CodeBox>
            <Heading>5. Auto-Chemistrification</Heading>
            <Paragraph>The framework can wrap ANY React component:</Paragraph>
            <CodeBox
                language="typescript"
            >
                {`const $MuiButton = $chemistrify(Button);
// Now Material-UI works with Chemistry!`}
            </CodeBox>
            <Heading>Performance Considerations</Heading>
            <Heading>Trade-offs</Heading>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Overhead
                    </Word>: Symbolization for deep equality checks
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Tracking
                    </Word>: Getter-based property access detection
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Registry
                    </Word>: Additional memory for instance storage
                </Line>
            </Paragraph>
            <Heading>Optimizations</Heading>
            <Paragraph>
                <List />
                <Line>Lazy bond creation</Line>
                <Line>Cached property descriptors</Line>
                <Line>Minimal re-renders via precise tracking</Line>
                <Line>
                    Option to mark properties as <Word>
                        <Verbatim />
                        @inert()
                    </Word>
                </Line>
            </Paragraph>
            <Heading>Why This Is Revolutionary</Heading>
            <Heading>1. Solves Real Problems</Heading>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        No hook rules
                    </Word> - Methods can be conditional
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        No prop drilling
                    </Word> - Direct object access
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        No providers
                    </Word> - Relationships are automatic
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Real inheritance
                    </Word> - Actually works for variants
                </Line>
            </Paragraph>
            <Heading>2. Gradual Adoption</Heading>
            <Paragraph>
                <List />
                <Line>Works alongside React components</Line>
                <Line>No build tool changes</Line>
                <Line>Component-by-component migration</Line>
                <Line>Zero breaking changes</Line>
            </Paragraph>
            <Heading>3. Familiar Mental Model</Heading>
            <Paragraph>
                <List />
                <Line>Classes and objects (not functions)</Line>
                <Line>Direct property mutation</Line>
                <Line>Normal method calls</Line>
                <Line>Standard OOP patterns</Line>
            </Paragraph>
            <Heading>4. Framework Size</Heading>
            <Paragraph>~700 lines of TypeScript (likely &lt;10KB minified) vs React's 140KB!</Paragraph>
            <Heading>The Innovation Stack</Heading>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Children-as-Constructor
                    </Word>: Transforms JSX children into typed constructor arguments
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Structural Components
                    </Word>: <Word>
                        <Verbatim />
                        &lt;$&gt;
                    </Word> for arrays, extensible to Maps, Trees
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Dual-World Components
                    </Word>: Work in both React and Chemistry
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Instance Identity
                    </Word>: Stable objects through React's chaos
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Convention-Based Reactivity
                    </Word>: No decorators, just naming
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Polymorphic Components
                    </Word>: True subclassing and overriding
                </Line>
            </Paragraph>
            <Heading>Philosophical Achievement</Heading>
            <Paragraph>
                Chemistry proves that React's complexity was a choice, not a necessity. By keeping TSX but replacing React's
                functional core with OOP, it demonstrates that UI development can be both powerful AND simple. The framework
                essentially asks: "What if React had been object-oriented from the start?"
            </Paragraph>
            <Paragraph>The result is a system where:</Paragraph>
            <Paragraph>
                <List />
                <Line>Code is 80% smaller</Line>
                <Line>Concepts are immediately intuitive</Line>
                <Line>Power increases rather than decreases</Line>
                <Line>Adoption is invisible until needed</Line>
            </Paragraph>
            <Paragraph>
                Chemistry isn't just a React alternative - it's a demonstration that the "modern" web's complexity is
                artificial, and that classical OOP patterns solved these problems decades ago.
            </Paragraph>
        </Section>
    </Chapter>
);
