import { Bold, Chapter, Heading, Line, List, Paragraph, Section, Title, Word } from '@dna-platform/public';
import { CodeBox, Opaque, Verbatim } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ Chemistry Framework: 20 Probing Questions &amp; Answers v1 ]]</Title>
        <Section>
            <Opaque />
            <Heading>Chemistry Framework: 20 Probing Questions &amp; Answers at version 1</Heading>
            <Heading>Chemistry Framework: 20 Probing Questions &amp; Answers</Heading>
            <Heading>1. How does Chemistry handle nested re-renders when a deeply nested $Chemical changes state?</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Answer:
                </Word> When a nested $Chemical changes state, it triggers its own formula's <Word>
                    <Verbatim />
                    updateState()
                </Word> which calls the bound <Word>
                    <Verbatim />
                    setState
                </Word> from React. This causes React to re-render from that component downward. Parent components don't
                re-render unless they're accessing the child's state through the bond system (via the symbolized state
                tracking). The genius is that each $Chemical maintains its own React state binding, creating isolated update
                boundaries.
            </Paragraph>
            <Heading>2. What happens to the object graph when a component unmounts and remounts?</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Answer:
                </Word> The <Word>
                    <Verbatim />
                    chemicalRegistry
                </Word> stores instances by <Word>
                    <Verbatim />
                    cid
                </Word>. On unmount, the cleanup in <Word>
                    <Verbatim />
                    useEffect
                </Word> deletes the registry entry. On remount, <Word>
                    <Verbatim />
                    cid === -1
                </Word> triggers creation of a new $Chemical instance with a fresh <Word>
                    <Verbatim />
                    cid
                </Word>. The object graph is rebuilt - parent-child relationships are re-established through the <Word>
                    <Verbatim />
                    __parent
                </Word> property during the binding phase. This means the graph is ephemeral but deterministic.
            </Paragraph>
            <Heading>
                3. How does the symbolize function prevent memory leaks while maintaining referential relationships?
            </Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Answer:
                </Word> The <Word>
                    <Verbatim />
                    symbolize
                </Word> function uses <Word>
                    <Verbatim />
                    fast-safe-stringify
                </Word> to convert objects to strings, but crucially replaces $Chemical instances with just their <Word>
                    <Verbatim />
                    cid
                </Word> number. This breaks circular references - instead of Chemical A holding Chemical B which holds
                Chemical A, we get A.cid and B.cid. The actual instances are looked up from the registry when needed,
                preventing retention of large object graphs in the state comparison.
            </Paragraph>
            <Heading>4. Can you mix Chemistry components with Context API, and what are the implications?</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Answer:
                </Word> Yes, Chemistry components are still React components at their core. Context would work normally for
                the React layer. However, Chemistry's bond system provides its own state propagation that's more efficient.
                Mixing them could cause confusion - Context changes trigger React re-renders while Chemistry state changes
                trigger formula updates. Best practice would be using Chemistry's parent-child relationships instead of
                Context.
            </Paragraph>
            <Heading>
                5. How does the $ (Collection) component maintain type safety through the constructor pattern?
            </Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Answer:
                </Word> The <Word>
                    <Verbatim />
                    $Collection
                </Word> acts as a transparent wrapper that gets "unwrapped" during the <Word>
                    <Verbatim />
                    processArray
                </Word> phase. The <Word>
                    <Verbatim />
                    process
                </Word> method extracts the children into an array that becomes a constructor argument. Type safety is
                maintained at the TypeScript level through generics, though at runtime it's just arrays. The constructor's
                rest parameters (<Word>
                    <Verbatim />
                    ...items: $Chemical&#91;&#93;
                </Word>) provide the typing contract.
            </Paragraph>
            <Heading>
                6. What's the performance impact of creating property descriptors for every reactive property?
            </Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Answer:
                </Word> There's definitely overhead - each property access goes through getter/setter functions instead of
                direct field access. However, this is amortized by:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    Only creating descriptors once during <Word>
                        <Verbatim />
                        init()
                    </Word>
                </Line>
                <Line>Crystallization can freeze frequently-accessed read-only properties</Line>
                <Line>The symbolized state comparison prevents unnecessary re-renders</Line>
                <Line>Property descriptors are a one-time cost vs React's hook overhead on every render</Line>
            </Paragraph>
            <Heading>7. How does Chemistry handle async operations in the view() method?</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Answer:
                </Word> The framework explicitly handles <Word>
                    <Verbatim />
                    Promise&lt;ReactNode&gt;
                </Word> returns from <Word>
                    <Verbatim />
                    view()
                </Word>. When detected, it wraps the promise resolution with another <Word>
                    <Verbatim />
                    augmentView
                </Word> call and attaches the component reference. This suggests Chemistry could support Suspense-like
                patterns, though the current implementation would need React.Suspense boundaries to actually handle the
                promises properly.
            </Paragraph>
            <Heading>8. What prevents infinite loops when parent and child Chemicals reference each other?</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Answer:
                </Word> Several mechanisms:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>State updates are symbolized (stringified), breaking circular references</Line>
                <Line>
                    The <Word>
                        <Verbatim />
                        _bondSet
                    </Word> only triggers if the value actually changed
                </Line>
                <Line>
                    The formula's <Word>
                        <Verbatim />
                        bindState()
                    </Word> creates a controlled update boundary
                </Line>
                <Line>React's own batching prevents multiple setState calls from causing multiple renders</Line>
            </Paragraph>
            <Heading>9. How would Chemistry handle server-side rendering (SSR)?</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Answer:
                </Word> This is a challenge. Chemistry relies heavily on:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Browser-only APIs (Object.defineProperty, Proxy potentially)</Line>
                <Line>Stateful class instances tied to React's useState</Line>
                <Line>The chemicalRegistry which is client-side only</Line>
            </Paragraph>
            <Paragraph>
                SSR would require serializing the Chemical instances' state and rehydrating on the client, similar to how
                MobX handles SSR.
            </Paragraph>
            <Heading>10. Can you dynamically change a Chemical's prototype chain at runtime?</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Answer:
                </Word> The code hints at this with <Word>
                    <Verbatim />
                    importStructure
                </Word> concepts. You could use <Word>
                    <Verbatim />
                    Object.setPrototypeOf()
                </Word> to change the prototype chain, but Chemistry's bonds are created during <Word>
                    <Verbatim />
                    init()
                </Word> based on the original prototype. You'd need to call <Word>
                    <Verbatim />
                    formula.refresh()
                </Word> to rebuild bonds, and ensure the new prototype's properties don't conflict with existing ones.
            </Paragraph>
            <Heading>
                11. How does the framework differentiate between user-defined properties and framework properties?
            </Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Answer:
                </Word> Through naming conventions:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Verbatim />
                        $property
                    </Word> (lowercase after $) = props from parent
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        _property
                    </Word> = non-reactive internal
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        __property
                    </Word> = framework internal (truly private)
                </Line>
                <Line>Regular properties = reactive state</Line>
                <Line>Methods starting with $ followed by uppercase = constructors</Line>
            </Paragraph>
            <Paragraph>
                The <Word>
                    <Verbatim />
                    isReactiveProperty
                </Word> function enforces these rules.
            </Paragraph>
            <Heading>
                12. What happens when you pass a Chemistry component to a third-party React library expecting a regular
                component?
            </Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Answer:
                </Word> It works! The Chemistry Component is just a React.FC under the hood. The third-party library would
                render it normally, passing props which get bound through the <Word>
                    <Verbatim />
                    $
                </Word> prefix convention. The Chemical instance would be created and managed normally through the
                useState/useEffect lifecycle.
            </Paragraph>
            <Heading>13. How does Chemistry handle list reconciliation compared to React's key prop?</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Answer:
                </Word> Chemistry still uses React's key prop for list reconciliation at the React level. However, the
                Chemical instances are tracked by <Word>
                    <Verbatim />
                    cid
                </Word> in the registry. The framework uses the <Word>
                    <Verbatim />
                    data-chem-bound-tree
                </Word> marker to avoid re-processing already bound subtrees. For dynamic lists, the <Word>
                    <Verbatim />
                    equals()
                </Word> method could provide custom reconciliation logic.
            </Paragraph>
            <Heading>
                14. What's the memory overhead of maintaining both the prototype chain and instance properties?
            </Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Answer:
                </Word> Each Chemical instance has:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Instance properties (from bond descriptors)</Line>
                <Line>Prototype chain (shared methods/initial values)</Line>
                <Line>Formula with bonds map</Line>
                <Line>Registry entry</Line>
            </Paragraph>
            <Paragraph>
                The overhead is roughly O(n*m) where n=instances and m=properties. Crystallization can help by preventing
                bond creation for read-only components.
            </Paragraph>
            <Heading>15. How would you implement computed properties that depend on multiple Chemicals?</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Answer:
                </Word> Currently, accessing another Chemical in a getter adds it to the symbolized state through <Word>
                    <Verbatim />
                    item&#91;$state&#93; = state
                </Word>. You could create computed properties that access multiple Chemicals:
            </Paragraph>
            <CodeBox
                language="typescript"
            >
                {`get combined() {
  return this.childA.value + this.childB.value;
}`}
            </CodeBox>
            <Paragraph>The bond system would track both dependencies automatically.</Paragraph>
            <Heading>16. Can Chemistry components be code-split and lazy loaded?</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Answer:
                </Word> Yes, but carefully. Since Chemistry components are classes, you'd use dynamic imports:
            </Paragraph>
            <CodeBox
                language="typescript"
            >
                {`const LazyChemical = React.lazy(() => 
  import('./component').then(m => ({ default: m.Chemical.Component }))
);`}
            </CodeBox>
            <Paragraph>The challenge is ensuring the prototype chain is properly established for inheritance.</Paragraph>
            <Heading>17. How does the framework handle error boundaries?</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Answer:
                </Word> Chemistry components could be wrapped in React error boundaries normally. However, errors in the
                bond system or formula calculations might not be caught. You'd want to add try-catch blocks in critical
                paths like <Word>
                    <Verbatim />
                    _bondGet
                </Word>, <Word>
                    <Verbatim />
                    _bondSet
                </Word>, and the constructor calling mechanism.
            </Paragraph>
            <Heading>
                18. What happens if a developer forgets to call the parent constructor in the Chemistry pattern?
            </Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Answer:
                </Word> The framework discussion mentions runtime validation. You could track constructor calls through a
                Set and validate the chain after construction. The <Word>
                    <Verbatim />
                    assertViewConstructors
                </Word> already validates that constructor methods exist. Adding call tracking would catch missing super
                calls.
            </Paragraph>
            <Heading>19. How would you implement two-way binding between Chemicals?</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Answer:
                </Word> Currently it's one-way (parent to child through props). For two-way:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    Child could access <Word>
                        <Verbatim />
                        this.__parent
                    </Word> and call methods on it
                </Line>
                <Line>Or implement an event system where children emit changes</Line>
                <Line>Or use the bond system to create bidirectional bonds</Line>
            </Paragraph>
            <Paragraph>The framework philosophy seems to prefer unidirectional flow with explicit parent access.</Paragraph>
            <Heading>20. What are the implications of using Proxies for the Chemical instances?</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Answer:
                </Word> The code mentions Proxy possibilities but doesn't heavily use them yet. Proxies could:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Eliminate the need for property descriptors (trap all gets/sets)</Line>
                <Line>Enable dynamic property addition</Line>
                <Line>Provide better debugging (log all operations)</Line>
                <Line>But: Proxies have performance overhead and complicate debugging</Line>
            </Paragraph>
            <Paragraph>
                The current descriptor-based approach is more explicit and performant for known properties.
            </Paragraph>
        </Section>
    </Chapter>
);
