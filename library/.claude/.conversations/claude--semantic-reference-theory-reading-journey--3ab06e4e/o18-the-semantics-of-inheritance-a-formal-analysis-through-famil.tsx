import { Bold, Chapter, Heading, Line, List, Paragraph, Section, Title, Word } from '@dna-platform/public';
import { CodeBox, Opaque, Verbatim } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ The Semantics of Inheritance: A Formal Analysis Through Family Relations v18 ]]</Title>
        <Section>
            <Opaque />
            <Heading>The Semantics of Inheritance: A Formal Analysis Through Family Relations at version 18</Heading>
            <Heading>The Semantics of Inheritance: A Formal Analysis Through Family Relations</Heading>
            <Heading>Abstract</Heading>
            <Paragraph>
                Inheritance in semantic theories presents a fundamental challenge: how can concepts compose and extend while
                maintaining coherence across different contexts? We explore this through the mother-daughter relationship,
                revealing how a single semantic pattern manifests differently across biological, psychological, and familial
                frames. Through this analysis, we develop a radical hypothesis about inheritance as a recursive structure,
                introduce parametric notation through the =|has&gt; construct, and discover why fixed points prevent
                semantic explosion. While fundamental questions remain about formalizing recursion in first-order logic, the
                framework reveals inheritance as the mechanism enabling semantic theories to function as composable,
                extensible systems.
            </Paragraph>
            <Heading>1. The Challenge of Semantic Inheritance</Heading>
            <Paragraph>
                Consider a simple statement: "A daughter inherits from her mother." In biology, this means DNA transmission.
                In psychology, attachment patterns. In family structure, social roles. The same words invoke entirely
                different relationships, yet we understand them all as "inheritance." How can a formal theory capture this
                semantic richness without exploding into incoherence?
            </Paragraph>
            <Paragraph>
                Semantic Reference Theory (SRT) attempts to formalize meaning through patterns of reference. But for SRT to
                be useful, semantic theories must compose like programming libraries - importing concepts, extending
                frameworks, specializing patterns. This requires a sophisticated notion of inheritance that works across
                different semantic roles and contexts.
            </Paragraph>
            <Paragraph>
                This document explores inheritance through the concrete example of family relationships, developing the
                formal machinery needed while acknowledging the profound challenges that remain.
            </Paragraph>
            <Heading>2. Building the Parametric Machinery</Heading>
            <Heading>2.1 Properties Through Canonical Symbols</Heading>
            <Paragraph>
                Before we can analyze how daughters inherit from mothers, we need notation for properties. When we write:
            </Paragraph>
            <CodeBox>
                {`mother =|has> children`}
            </CodeBox>
            <Paragraph>This expands through the =|has&gt; construct to:</Paragraph>
            <CodeBox>
                {`(mother) =(children)> mother`}
            </CodeBox>
            <Paragraph>The canonical symbol for mother relates to mother through children, implying:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`mother =children> mother`}
            </CodeBox>
            <Paragraph>
                The mother has children as a self-property. This may seem circular, but it captures something essential:
                having children is part of what makes someone a mother.
            </Paragraph>
            <Heading>2.2 The Parametric Form p(x)</Heading>
            <Paragraph>
                When a referent x has property p expressed as <Word>
                    <Verbatim />
                    x =p&gt; x
                </Word>, we need notation for x's specific version of that property:
            </Paragraph>
            <CodeBox>
                {`p(x) := ((x,x), p)`}
            </CodeBox>
            <Paragraph>
                This denotes the most specific relationship between x's self-relationship (x,x) and property p. Crucially,
                p(x) is what (x,x) directly inherits from to have the p-property.
            </Paragraph>
            <Paragraph>
                This notation belongs in the transpiler described in &#91;²&#93;, extending transpilation rules to handle
                parametric forms. The paradigm of representatives and canonical representation suggests that ((x,x), p)
                would be of type p - it represents p specialized for x.
            </Paragraph>
            <Heading>2.3 Fixed Points and Semantic Stability</Heading>
            <Paragraph>For symbolizable entities, a critical property emerges&#91;¹&#93;:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`x =x> x & (x,x) == x`}
            </CodeBox>
            <Paragraph>
                This fixed point means the self-relationship collapses to the entity itself. Without this, recursive
                structures would explode into infinite chains. When <Word>
                    <Verbatim />
                    (mother,mother) == mother
                </Word>, we get stability instead of infinite regress.
            </Paragraph>
            <Heading>2.4 Applying to Family: children(mother)</Heading>
            <Paragraph>
                With this machinery, when <Word>
                    <Verbatim />
                    mother =children&gt; mother
                </Word>:
            </Paragraph>
            <CodeBox>
                {`children(mother) := ((mother,mother), children)`}
            </CodeBox>
            <Paragraph>
                Since <Word>
                    <Verbatim />
                    (mother,mother) == mother
                </Word> (fixed point):
            </Paragraph>
            <CodeBox>
                {`children(mother) := (mother, children)`}
            </CodeBox>
            <Paragraph>
                This is the most specific relationship between mother and children - her particular children that inherit
                from the general concept:
            </Paragraph>
            <CodeBox>
                {`children(mother) -> children`}
            </CodeBox>
            <Paragraph>The notation isn't arbitrary but emerges from semantic structure.</Paragraph>
            <Heading>3. The Architecture of Representation</Heading>
            <Heading>3.1 Three Levels of Semantic Participation</Heading>
            <Paragraph>
                To understand how inheritance flows through representations, we need to recognize three levels of
                participation. For any representation L:
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    A participant
                </Word> - any referent x where:
            </Paragraph>
            <CodeBox>
                {`L =L> x`}
            </CodeBox>
            <Paragraph>
                The referent participates in the representation. When we formalize inclusion, this means x is included in L.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    A representative
                </Word> - a participant that also represents L:
            </Paragraph>
            <CodeBox>
                {`L =L> x & x =L> L`}
            </CodeBox>
            <Paragraph>The referent both participates in L and L recognizes it as representing itself back.</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    A canonical
                </Word> - a special representative where:
            </Paragraph>
            <CodeBox>
                {`(x,L) == L`}
            </CodeBox>
            <Paragraph>
                The canonical is not just a representative but one where L IS the most specific relationship between x and L
                itself. Ideally, each representation has exactly one canonical.
            </Paragraph>
            <Heading>3.2 Dereferencing: The &#91;L&#93; Notation</Heading>
            <Paragraph>
                The notation &#91;L&#93; handles the complexity of finding canonicals. It should be added to the
                transpiler&#91;²&#93; as a derived function that can only exist if implied by the axioms.
            </Paragraph>
            <Paragraph>For any representation L, &#91;L&#93; refers to:</Paragraph>
            <Paragraph>
                <List />
                <Line>The unique canonical, if exactly one exists</Line>
                <Line>
                    Otherwise, a new referent satisfying: <Word>
                        <Verbatim />
                        (&#91;L&#93;,L) == L
                    </Word>
                </Line>
            </Paragraph>
            <Paragraph>In the second case, &#91;L&#93; represents all the canonicals:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}(x,L) == L =|> [L] =[L]> x`}
            </CodeBox>
            <Paragraph>Importantly, dereferencing has the standard property:</Paragraph>
            <CodeBox>
                {`${''}[(x)] == x`}
            </CodeBox>
            <Paragraph>
                The canonical symbol (x) dereferences to x itself. This dereferencing function is pure notation - unnamed
                and transpilable to basic SRT representation.
            </Paragraph>
            <Heading>4. The Radical Hypothesis: Recursive Inheritance</Heading>
            <Heading>4.1 Why Recursion?</Heading>
            <Paragraph>
                Inheritance needs to capture both direct relationships (daughter as canonical child) and indirect ones
                (daughter inheriting from mother through child). But first-order logic cannot express transitive closure
                directly. We cannot say "the minimal relation satisfying these properties" in FOL.
            </Paragraph>
            <Paragraph>This limitation forces a radical hypothesis.</Paragraph>
            <Heading>4.2 The Recursive Definition</Heading>
            <Paragraph>We hypothesize inheritance could be defined recursively&#91;⁴&#93;:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Direct Inheritance
                </Word> (for relationship types):
            </Paragraph>
            <CodeBox>
                {`s --> t := (s,t) == t & (s,s) -> t`}
            </CodeBox>
            <Paragraph>
                Direct inheritance requires being canonical to t AND having self-relationship inherit from t.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    General Inheritance
                </Word> (our radical hypothesis):
            </Paragraph>
            <CodeBox>
                {`${''}s -> t := 
  s == t ||                              // Identity
  ((s,t) == t & (s,s) -> t) ||          // Direct inheritance
  E[q]: (s,q) == q & (s,s) -> q & q -> t // Indirect through q`}
            </CodeBox>
            <Heading>4.3 Why This Is Radical</Heading>
            <Paragraph>This recursive definition challenges formal foundations:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        It's circular
                    </Word> - defining -&gt; in terms of itself
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        FOL can't express it
                    </Word> - first-order logic lacks recursive definition machinery
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Convergence isn't guaranteed
                    </Word> - without fixed points, this could explode
                </Line>
            </Paragraph>
            <Paragraph>The structure emerges from observing that:</Paragraph>
            <Paragraph>
                <List />
                <Line>Semantic theories must compose like programming libraries</Line>
                <Line>Direct inheritance (being canonical) is too rigid for extensibility</Line>
                <Line>
                    Chains like <Word>
                        <Verbatim />
                        daughter -&gt; child -&gt; mother
                    </Word> must be expressible
                </Line>
                <Line>The axioms for relationships&#91;⁴&#93; suggest inheritance forms hierarchies</Line>
            </Paragraph>
            <Heading>4.4 Non-Relational Inheritance</Heading>
            <Paragraph>For entities that aren't relationship types, we hypothesize:</Paragraph>
            <CodeBox>
                {`x -> y means (x,x) -> y`}
            </CodeBox>
            <Paragraph>
                Everything goes through self-relationships. But for most non-relational entities with symbols&#91;¹&#93;:
            </Paragraph>
            <CodeBox>
                {`(x,x) == x  // Fixed point`}
            </CodeBox>
            <Paragraph>
                The inheritance simplifies back to <Word>
                    <Verbatim />
                    x -&gt; y
                </Word>, preventing explosion.
            </Paragraph>
            <Heading>5. Testing the Hypothesis: Mother-Daughter Semantics</Heading>
            <Heading>5.1 Establishing the Family Frame</Heading>
            <CodeBox>
                {`${''}F[family]`}
            </CodeBox>
            <Paragraph>Within this frame, relationships naturally inherit:</Paragraph>
            <CodeBox>
                {`(mother, father) -> family
(mother, child) -> family
(child, mother) -> family
(mother, daughter) -> (mother, child) -> family
(daughter, mother) -> (child, mother) -> family`}
            </CodeBox>
            <Paragraph>
                The inheritance chains establish that mother-daughter relationships are specializations of mother-child
                relationships, themselves aspects of family.
            </Paragraph>
            <Heading>5.2 The Mother's Children</Heading>
            <Paragraph>The fundamental semantic relationship:</Paragraph>
            <CodeBox>
                {`mother =|has> children`}
            </CodeBox>
            <Paragraph>Through our machinery:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`(mother) =(children)> mother =|> mother =children> mother
children(mother) := ((mother,mother), children) = (mother, children)`}
            </CodeBox>
            <Paragraph>This creates mother's specific children, inheriting from the general concept.</Paragraph>
            <Heading>5.3 The Daughter's Relationship</Heading>
            <Paragraph>Similarly:</Paragraph>
            <CodeBox>
                {`daughter =|has> mother
(daughter) =(mother)> daughter
daughter(mother) := ((daughter,daughter), mother)`}
            </CodeBox>
            <Paragraph>This captures the daughter's specific relationship to her mother.</Paragraph>
            <Heading>5.4 Collection and Inclusion</Heading>
            <Paragraph>The mother's children form a collection:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`children(mother) =includes> daughter(mother)`}
            </CodeBox>
            <Paragraph>With inclusion as specialized containment:</Paragraph>
            <CodeBox>
                {`includes -> contains
inclusion -> container
children(mother) -> inclusion`}
            </CodeBox>
            <Heading>5.5 Existence and Representation</Heading>
            <Paragraph>A mother must have at least one child:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}E[child(mother)]: children(mother) =includes> child(mother)`}
            </CodeBox>
            <Paragraph>For collections without unique canonicals, we dereference:</Paragraph>
            <CodeBox>
                {`${''}child(mother) = [children(mother)]`}
            </CodeBox>
            <Paragraph>This child represents the mother:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`child(mother) -> (child(mother), mother) =|> 
child(mother) =child(mother)> mother`}
            </CodeBox>
            <Paragraph>Through inheritance, the daughter also represents her mother:</Paragraph>
            <CodeBox>
                {`daughter(mother) -> child(mother)
(daughter(mother), mother) -> (child(mother), mother)
daughter(mother) =daughter(mother)> mother`}
            </CodeBox>
            <Heading>6. Polymorphic Application</Heading>
            <Heading>6.1 Moving to the General Frame</Heading>
            <Paragraph>
                Having established the semantic framework in F&#91;family&#93;, we demonstrate polymorphic inheritance in
                F&#91;r&#93;:
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}F[r]
m -> mother          // m inherits from mother
d -> daughter(m)     // d is m's specific daughter
children(m) =includes> d  // m's children include d`}
            </CodeBox>
            <Heading>6.2 The Polymorphic Mechanism</Heading>
            <Paragraph>
                When <Word>
                    <Verbatim />
                    m -&gt; mother
                </Word>:
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    If m is non-relational: <Word>
                        <Verbatim />
                        (m,m) -&gt; mother
                    </Word>
                </Line>
                <Line>
                    With fixed point: <Word>
                        <Verbatim />
                        (m,m) == m
                    </Word>, so <Word>
                        <Verbatim />
                        m -&gt; mother
                    </Word> directly
                </Line>
                <Line>
                    This enables <Word>
                        <Verbatim />
                        children(m)
                    </Word> through parametric machinery
                </Line>
            </Paragraph>
            <Paragraph>
                The notation <Word>
                    <Verbatim />
                    children(m)
                </Word> refers to m's specific children, inheriting from the general concept while maintaining the
                relationship to m specifically.
            </Paragraph>
            <Heading>6.3 The Achievement</Heading>
            <Paragraph>We can work polymorphically:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Verbatim />
                        children(m)
                    </Word> is not literally <Word>
                        <Verbatim />
                        children(mother)
                    </Word>
                </Line>
                <Line>It's a referent specific to m</Line>
                <Line>That inherits from the general children concept</Line>
                <Line>Enabling semantic theories to compose like programming libraries</Line>
            </Paragraph>
            <Heading>7. Discoveries and Open Questions</Heading>
            <Heading>7.1 What We've Discovered</Heading>
            <Paragraph>Through the mother-daughter example, we've explored whether inheritance in SRT could be:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Recursive
                    </Word>: Defined through identity, direct inheritance, or chains (though problematic in FOL)
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Role-sensitive
                    </Word>: Relationships might inherit differently than non-relationships
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Stabilized by fixed points
                    </Word>: Symbolizable entities have <Word>
                        <Verbatim />
                        (x,x) == x
                    </Word>, preventing explosion
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Parametrically enabled
                    </Word>: The =|has&gt; construct creates forms like <Word>
                        <Verbatim />
                        children(mother)
                    </Word>
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Extensible
                    </Word>: Using indirect inheritance allows semantic theories to compose
                </Line>
            </Paragraph>
            <Paragraph>The recursive definition is a hypothesis - radical and unproven. If it works:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Verbatim />
                        s -&gt; t
                    </Word> deliberately uses indirect inheritance for extensibility
                </Line>
                <Line>Semantic theories can insert intermediate relationships without breaking patterns</Line>
                <Line>The same machinery handles both simple properties and complex parametric forms</Line>
            </Paragraph>
            <Heading>7.2 Fundamental Questions Remaining</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Can recursive inheritance be formalized?
                </Word> FOL cannot express transitive closure. Do we need to accept inheritance as primitive with axioms? Or
                work in a stronger logic?
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    How do frames affect inheritance?
                </Word> When mother exists in F&#91;biological&#93; without being symbolic, how does inheritance work
                without fixed points?
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Is the role distinction real?
                </Word> Does it make sense that relationships inherit as types while non-relationships inherit through
                self-relationships?
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    What ensures consistency?
                </Word> If <Word>
                    <Verbatim />
                    daughter -&gt; child -&gt; mother
                </Word>, how do we verify that all the symbolic and inheritance machinery remains coherent?
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Is F&#91;r&#93; truly tautological?
                </Word> The claim that F&#91;r&#93; should compile to "relationships are relationships" needs verification.
                If it adds information, something is wrong with SRT's foundations.
            </Paragraph>
            <Heading>8. Conclusion: Toward a Science of Semantic Composition</Heading>
            <Paragraph>
                The mother-daughter example doesn't just illustrate inheritance - it reveals the depths we must explore to
                understand how meaning propagates through semantic structures. The notation <Word>
                    <Verbatim />
                    children(mother)
                </Word>, emerging from the =|has&gt; construct and the definition <Word>
                    <Verbatim />
                    p(x) := ((x,x), p)
                </Word>, demonstrates concrete parametric forms that any theory of inheritance must explain.
            </Paragraph>
            <Paragraph>
                Our recursive hypothesis for inheritance - if it proves coherent - would provide the extensibility needed
                for semantic theories to compose and extend each other. The distinction between direct inheritance
                (canonical relationships) and general inheritance (through chains) might be the key to achieving both
                precision and flexibility.
            </Paragraph>
            <Paragraph>
                But the journey reveals as many questions as answers. The formalization of inheritance pushes against the
                limits of first-order logic, suggesting that some semantic patterns might be more fundamental than logic
                itself can express. The fact that the same referent "mother" can participate in biological, psychological,
                and familial frames simultaneously - with different relationships visible but the same semantic entity
                throughout - isn't a bug but the essential feature that makes natural language work.
            </Paragraph>
            <Paragraph>
                This exploration suggests that inheritance isn't just a formal mechanism but the very structure through
                which meaning organizes itself - from the specific to the general, from the literal to the symbolic, from
                the immediate to the reflected. Understanding it fully may require not just mathematical precision but a
                willingness to let semantic necessity guide formal development, even when it leads us beyond the comfortable
                boundaries of established logic.
            </Paragraph>
            <Heading>References</Heading>
            <Paragraph>&#91;¹&#93;: Doug: The Semantics of Identity: In Axiomatic Form</Paragraph>
            <Paragraph>&#91;²&#93;: Doug: Semantic Reference Theory: Formal Syntax under Transpilation</Paragraph>
            <Paragraph>&#91;³&#93;: Doug: The Semantics of Collection: A Fundamental Representational Form</Paragraph>
            <Paragraph>
                &#91;⁴&#93;: Doug: The Semantics of Relationships: An Axiomatic Foundation for Inheritance
            </Paragraph>
        </Section>
    </Chapter>
);
