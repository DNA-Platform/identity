import { Bold, Chapter, Heading, Line, List, Math, Paragraph, Section, Title, Word } from '@dna-platform/public';
import { CodeBox, Opaque, Verbatim } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ Chemistry Framework Analysis v1 ]]</Title>
        <Section>
            <Opaque />
            <Heading>Chemistry Framework Analysis at version 1</Heading>
            <Heading>Chemistry Framework Analysis</Heading>
            <Heading>Core Concept</Heading>
            <Paragraph>
                The Chemistry framework is a React component system that treats child components as <Word>
                    <Bold />
                    constructor dependencies
                </Word> rather than traditional React children. This enables true polymorphism where a <Word>
                    <Verbatim />
                    $Book
                </Word> can become a <Word>
                    <Verbatim />
                    ChildrensBook
                </Word>, <Word>
                    <Verbatim />
                    Dictionary
                </Word>, or <Word>
                    <Verbatim />
                    ChooseYourOwnAdventure
                </Word> simply by changing what child components are passed to it.
            </Paragraph>
            <Heading>Key Innovations</Heading>
            <Heading>1. Chemical-as-Constructor Pattern</Heading>
            <CodeBox
                language="typescript"
            >
                {`${''}class $Book extends $Chemical {
    first!: $React<'div'>;
    second = $($Chemical);
    third = $($Chemical, '[]');
    rest: $React<any>[] = [];
    
    $Book(first: $React<'div'>, second: $Chemical, third: $Chemical[], ...rest: $React<any>[]) {
        this.first = first;
        this.second = second;
        this.third = third;
        this.rest = rest;
    }
}`}
            </CodeBox>
            <Paragraph>
                The <Word>
                    <Verbatim />
                    $Book
                </Word> method acts like a constructor, defining <Word>
                    <Bold />
                    what types of components
                </Word> this Chemical expects. This is fundamentally different from React's loose children approach.
            </Paragraph>
            <Heading>2. Binding System with $Formula and $Bond</Heading>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        $Formula
                    </Word>: Manages all the reactive bonds for a Chemical
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        $Bond
                    </Word>: Represents a single reactive property with type information and binding state
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        $Molecule
                    </Word>: Context system for managing Chemical relationships
                </Line>
            </Paragraph>
            <Heading>3. State Propagation Architecture</Heading>
            <CodeBox
                language="typescript"
            >
                {`get computed() {
    // ... binding resolution logic
    value.formula.state = this._chemical.formula.state;
    return value;
}`}
            </CodeBox>
            <Paragraph>
                State propagates through the object graph, allowing a subset to behave as if it were the whole object.
            </Paragraph>
            <Heading>Evolution from Previous Versions</Heading>
            <Heading>chemistry.ts (v1) Limitations:</Heading>
            <Paragraph>
                <List />
                <Line>
                    Complex binding decorators (<Word>
                        <Verbatim />
                        @child
                    </Word>, <Word>
                        <Verbatim />
                        @optional
                    </Word>, <Word>
                        <Verbatim />
                        @where
                    </Word>)
                </Line>
                <Line>Manual property management with backing fields</Line>
                <Line>Prototype-based inheritance complications</Line>
                <Line>No clear constructor pattern</Line>
            </Paragraph>
            <Heading>chemistry3.ts (v2) Improvements:</Heading>
            <Paragraph>
                <List />
                <Line>
                    Simplified <Word>
                        <Verbatim />
                        $()
                    </Word> function for binding declaration
                </Line>
                <Line>Constructor-like methods for dependency injection</Line>
                <Line>
                    Cleaner state management with <Math>{"Formula/"}</Math>Bond
                </Line>
                <Line>Better separation of concerns</Line>
            </Paragraph>
            <Heading>Polymorphism Architecture</Heading>
            <Heading>Current State</Heading>
            <CodeBox
                language="typescript"
            >
                {`${''}// A Book that expects specific child types
second = $($Chemical);        // Single child of any Chemical type
third = $($Chemical, '[]');   // Array of Chemical children`}
            </CodeBox>
            <Heading>Polymorphic Vision</Heading>
            <CodeBox
                language="typescript"
            >
                {`// Different Book types through different child injection
<Book>
    <Chapter>...</Chapter>     // Regular Book
    <PictureChapter>...</PictureChapter>  // Children's Book
    <DefinitionEntry>...</DefinitionEntry> // Dictionary
    <ChoiceChapter>...</ChoiceChapter>     // Choose Your Own Adventure
</Book>`}
            </CodeBox>
            <Paragraph>
                The same <Word>
                    <Verbatim />
                    $Book
                </Word> component becomes different things based on what children are passed.
            </Paragraph>
            <Heading>Technical Strengths</Heading>
            <Heading>1. Type Safety</Heading>
            <Paragraph>
                <List />
                <Line>
                    Strong TypeScript integration with <Word>
                        <Verbatim />
                        $&lt;T&gt;
                    </Word> generic system
                </Line>
                <Line>
                    Property type inference: <Word>
                        <Verbatim />
                        $Properties&lt;T&gt;
                    </Word>
                </Line>
                <Line>
                    Component type mapping: <Word>
                        <Verbatim />
                        $Component&lt;T&gt;
                    </Word>
                </Line>
            </Paragraph>
            <Heading>2. Reactive System</Heading>
            <Paragraph>
                <List />
                <Line>Property change detection through bond system</Line>
                <Line>Automatic re-rendering via state propagation</Line>
                <Line>Support for complex object reactivity</Line>
            </Paragraph>
            <Heading>3. Context Management</Heading>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Verbatim />
                        $Molecule
                    </Word> provides component relationship context
                </Line>
                <Line>Automatic cleanup on unmount</Line>
                <Line>Dependency tracking between components</Line>
            </Paragraph>
            <Heading>Current Implementation Gaps</Heading>
            <Heading>1. Constructor Method Integration</Heading>
            <Paragraph>
                The <Word>
                    <Verbatim />
                    $Book(...)
                </Word> method isn't fully integrated with the React rendering system yet. Need to connect this to the
                binding resolution.
            </Paragraph>
            <Heading>2. State Propagation</Heading>
            <Paragraph>
                The <Word>
                    <Verbatim />
                    symbolize
                </Word> function and state sharing system is partially implemented but not complete.
            </Paragraph>
            <Heading>3. Child Resolution</Heading>
            <Paragraph>The binding from JSX children to constructor parameters needs completion.</Paragraph>
            <Heading>Strategic Advantages</Heading>
            <Heading>1. True Component Polymorphism</Heading>
            <Paragraph>
                Unlike React's loose children system, Chemistry enforces <Word>
                    <Bold />
                    type contracts
                </Word> while enabling <Word>
                    <Bold />
                    behavioral flexibility
                </Word>.
            </Paragraph>
            <Heading>2. Dependency Injection for UI</Heading>
            <Paragraph>
                Treats UI composition like dependency injection in backend systems - explicit, typed, and predictable.
            </Paragraph>
            <Heading>3. Object Graph Abstraction</Heading>
            <Paragraph>
                The state propagation system allows treating component hierarchies as unified objects, enabling complex
                state management patterns.
            </Paragraph>
            <Heading>Next Development Priorities</Heading>
            <Heading>1. Complete Constructor Integration</Heading>
            <Paragraph>
                Connect the <Word>
                    <Verbatim />
                    $Book(...)
                </Word> pattern to the React component rendering pipeline.
            </Paragraph>
            <Heading>2. Finish State Propagation</Heading>
            <Paragraph>
                Complete the state sharing system so child components can access parent state transparently.
            </Paragraph>
            <Heading>3. Build Polymorphic Examples</Heading>
            <Paragraph>
                Create working examples of <Word>
                    <Verbatim />
                    ChildrensBook
                </Word>, <Word>
                    <Verbatim />
                    Dictionary
                </Word>, etc. to validate the polymorphic concept.
            </Paragraph>
            <Heading>4. Performance Optimization</Heading>
            <Paragraph>
                The current system may have performance implications with the complex binding resolution - needs profiling
                and optimization.
            </Paragraph>
            <Heading>Framework Philosophy</Heading>
            <Paragraph>
                Chemistry represents a <Word>
                    <Bold />
                    paradigm shift
                </Word> from React's "everything is children" approach to a <Word>
                    <Bold />
                    typed dependency injection
                </Word> model for UI components. This enables:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Predictable Composition
                    </Word>: Clear contracts about what components expect
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        True Polymorphism
                    </Word>: Same component, different behaviors based on dependencies
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        State Transparency
                    </Word>: Object graph abstraction for complex state management
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Type Safety
                    </Word>: Full TypeScript integration with compile-time guarantees
                </Line>
            </Paragraph>
            <Paragraph>
                The framework is ambitious and addresses real limitations in React's composition model, particularly for
                complex, polymorphic component hierarchies.
            </Paragraph>
        </Section>
    </Chapter>
);
