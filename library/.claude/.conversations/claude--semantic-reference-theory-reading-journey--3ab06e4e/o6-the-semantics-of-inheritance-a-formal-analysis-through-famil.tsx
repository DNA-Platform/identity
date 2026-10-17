import { Chapter, Heading, Line, List, Paragraph, Section, Title, Word } from '@dna-platform/public';
import { CodeBox, Opaque, Verbatim } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ The Semantics of Inheritance: A Formal Analysis Through Family Relations v6 ]]</Title>
        <Section>
            <Opaque />
            <Heading>The Semantics of Inheritance: A Formal Analysis Through Family Relations at version 6</Heading>
            <Heading>The Semantics of Inheritance: A Formal Analysis Through Family Relations</Heading>
            <Heading>Abstract</Heading>
            <Paragraph>
                We present inheritance as the fundamental mechanism through which semantic theories compose and extend.
                Through the analysis of family relationships—specifically the mother-daughter dynamic—we demonstrate how
                inheritance operates differently for relational and non-relational entities, introduces parametric notation
                through the =|has&gt; construct, and reveals the recursive structure that makes semantic theories
                extensible. We show that inheritance is not merely a structural feature but the very mechanism through which
                meaning specializes and generalizes, enabling semantic theories to function as composable frameworks
                analogous to programming libraries.
            </Paragraph>
            <Heading>Introduction</Heading>
            <Paragraph>
                When we speak of a mother and her daughter, we invoke a web of relationships that exemplify the deepest
                patterns of semantic inheritance. A daughter inherits from the concept of child, a mother's specific
                children inherit from the general concept of children, and a particular mother inherits from the abstract
                notion of motherhood. Through this example, we will discover the recursive definition of inheritance, the
                role of fixed points in preventing semantic explosion, and how the same semantic machinery that enables
                simple property inheritance also supports complex parametric forms like <Word>
                    <Verbatim />
                    children(mother)
                </Word>.
            </Paragraph>
            <Heading>The Parametric Form Through =|has&gt;</Heading>
            <Heading>The Foundation: Properties Through Symbols</Heading>
            <Paragraph>
                Before analyzing family relationships, we must establish how properties create parametric forms. When we
                write:
            </Paragraph>
            <CodeBox>
                {`mother =|has> children`}
            </CodeBox>
            <Paragraph>This expands through the =|has&gt; construct to:</Paragraph>
            <CodeBox>
                {`(mother) =(children)> mother`}
            </CodeBox>
            <Paragraph>
                This means the canonical symbol for mother relates to mother through children. From this, we derive:
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`mother =children> mother`}
            </CodeBox>
            <Paragraph>The mother has children as a self-property.</Paragraph>
            <Heading>The Parametric Notation children(mother)</Heading>
            <Paragraph>
                The notation <Word>
                    <Verbatim />
                    children(mother)
                </Word> emerges from this relationship:
            </Paragraph>
            <CodeBox>
                {`children(mother) := that which mother relates to through children`}
            </CodeBox>
            <Paragraph>
                Since <Word>
                    <Verbatim />
                    (mother) =(children)&gt; mother
                </Word> implies <Word>
                    <Verbatim />
                    mother =(children(mother))&gt; mother
                </Word>, we get:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Verbatim />
                        children(mother)
                    </Word> is the mother's specific children
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        children(mother) -&gt; (children)
                    </Word> - it inherits from the general concept
                </Line>
            </Paragraph>
            <Paragraph>
                This isn't arbitrary notation but a consequence of the symbolic structure. The parametric form captures
                specialization while maintaining inheritance.
            </Paragraph>
            <Heading>Fixed Points and Stability</Heading>
            <Paragraph>For symbolizable entities:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`x =x> x & (x,x) == x`}
            </CodeBox>
            <Paragraph>
                This fixed point property prevents recursive explosion. When <Word>
                    <Verbatim />
                    (mother,mother) == mother
                </Word>, the self-relationship collapses to the entity itself, keeping inheritance chains manageable.
            </Paragraph>
            <Heading>The Mother-Daughter Semantic Framework</Heading>
            <Heading>Establishing the Family Context</Heading>
            <Paragraph>Let us formalize the semantics of family relationships within a dedicated frame:</Paragraph>
            <CodeBox>
                {`${''}F[family]`}
            </CodeBox>
            <Paragraph>Within this frame, certain relationships naturally inherit from the family concept:</Paragraph>
            <CodeBox>
                {`(mother, father) -> family
(mother, child) -> family
(child, mother) -> family
(mother, daughter) -> (mother, child) -> family
(daughter, mother) -> (child, mother) -> family`}
            </CodeBox>
            <Paragraph>
                These inheritance chains establish that mother-daughter relationships are specializations of mother-child
                relationships, which are themselves aspects of family.
            </Paragraph>
            <Heading>The Mother's Children</Heading>
            <Paragraph>A fundamental semantic relationship expresses that mothers have children:</Paragraph>
            <CodeBox>
                {`mother =|has> children`}
            </CodeBox>
            <Paragraph>Through our canonical symbol machinery:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`(mother) =(children)> mother =|> mother =children> mother`}
            </CodeBox>
            <Paragraph>
                This establishes that the canonical symbol for mother relates to mother through children, and consequently,
                mother relates to her children. Using our parametric notation:
            </Paragraph>
            <CodeBox>
                {`children(mother) := mother =(children(mother))> mother`}
            </CodeBox>
            <Paragraph>
                Here, children(mother) emerges from the symbolic chain, denoting the mother's specific children which
                inherit from the general concept of children through symbolic relationships.
            </Paragraph>
            <Heading>The Daughter's Identity</Heading>
            <Paragraph>Similarly, a daughter has a mother:</Paragraph>
            <CodeBox>
                {`daughter =|has> mother`}
            </CodeBox>
            <Paragraph>Leading to:</Paragraph>
            <CodeBox>
                {`(daughter) =(mother)> daughter`}
            </CodeBox>
            <Paragraph>For a daughter of a particular mother, we can express:</Paragraph>
            <CodeBox>
                {`daughter(mother)`}
            </CodeBox>
            <Paragraph>
                This notation captures the daughter's specific relationship to her mother, emerging through the symbolic
                chain and inheriting from the general daughter concept.
            </Paragraph>
            <Heading>Collection and Inclusion</Heading>
            <Paragraph>The mother's children form a collection:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`children(mother) =includes> daughter(mother)`}
            </CodeBox>
            <Paragraph>
                To properly ground this, we establish that inclusion is a specialized form of containment:
            </Paragraph>
            <CodeBox>
                {`includes -> contains
inclusion -> container`}
            </CodeBox>
            <Paragraph>The mother's children constitute a specific type of container:</Paragraph>
            <CodeBox>
                {`children(mother) -> inclusion`}
            </CodeBox>
            <Paragraph>
                This inheritance is preserved through the symbolic chain, where children(mother) participates as a
                specialized symbol inheriting from the general inclusion concept.
            </Paragraph>
            <Heading>Existence and Representation</Heading>
            <Paragraph>A mother must have at least one child to be a mother:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}E[child(mother)]: children(mother) =includes> child(mother)`}
            </CodeBox>
            <Paragraph>For collections with no single canonical element, we dereference to find the canonical:</Paragraph>
            <CodeBox>
                {`${''}child(mother) = [children(mother)]`}
            </CodeBox>
            <Paragraph>This child represents the mother through relationship:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`child(mother) -> (child(mother), mother) =|> 
child(mother) =child(mother)> mother`}
            </CodeBox>
            <Heading>The Daughter as Representative</Heading>
            <Paragraph>Through inheritance, the daughter also represents her mother:</Paragraph>
            <CodeBox>
                {`daughter(mother) -> child(mother)
(daughter(mother), mother) -> (child(mother), mother)
daughter(mother) =daughter(mother)> mother`}
            </CodeBox>
            <Paragraph>
                Each step preserves the symbolic chain structure, maintaining semantic coherence through layers of
                representation.
            </Paragraph>
            <Heading>Polymorphic Inheritance</Heading>
            <Heading>The Generalization Principle</Heading>
            <Paragraph>
                Having established the semantic framework in F&#91;family&#93;, we return to the general frame F&#91;r&#93;
                to demonstrate polymorphic inheritance:
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}F[r]
m -> mother
d -> daughter(m)
children(m) =includes> d`}
            </CodeBox>
            <Paragraph>
                Here, m inherits from mother, enabling us to speak of m's children and m's daughter. The parametric form
                children(m) is not children(mother) but a referent specific to m that participates in its own symbolic chain
                while inheriting from the general concept.
            </Paragraph>
            <Heading>The Polymorphic Mechanism</Heading>
            <Paragraph>
                When we write <Word>
                    <Verbatim />
                    children(m)
                </Word> where <Word>
                    <Verbatim />
                    m -&gt; mother
                </Word>, we invoke the symbolic chain:
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`m =((children))> ((children)) =(children)> (children) =children> children`}
            </CodeBox>
            <Paragraph>
                The notation children(m) captures m's participation in this chain, creating a specialized symbol that:
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Relates directly to m</Line>
                <Line>Inherits through the symbolic chain to children</Line>
                <Line>Preserves the semantic structure of the mother relationship</Line>
            </Paragraph>
            <Paragraph>This polymorphism enables us to write:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`c(m) -> children(m) =|> c(m) =includes> d`}
            </CodeBox>
            <Paragraph>
                We work with children(m) polymorphically, understanding it as m's specific instantiation participating in
                the symbolic chain.
            </Paragraph>
            <Heading>The Recursive Definition of Inheritance</Heading>
            <Heading>Direct Inheritance for Relationships</Heading>
            <Paragraph>
                For relationship types, direct inheritance (--&gt;) requires both canonicity and self-relationship
                inheritance:
            </Paragraph>
            <CodeBox>
                {`s --> t := (s,t) == t & (s,s) -> t`}
            </CodeBox>
            <Paragraph>
                This means s is canonical to t (the most specific relationship between them IS t) AND s's self-relationship
                inherits from t.
            </Paragraph>
            <Heading>General Inheritance</Heading>
            <Paragraph>The full recursive definition:</Paragraph>
            <CodeBox>
                {`${''}s -> t := 
  s == t ||                              // Identity
  ((s,t) == t & (s,s) -> t) ||          // Direct inheritance
  E[q]: (s,q) == q & (s,s) -> q & q -> t // Indirect through q`}
            </CodeBox>
            <Paragraph>
                This recursive structure allows inheritance chains of arbitrary length while maintaining semantic coherence.
            </Paragraph>
            <Heading>Non-Relational Inheritance</Heading>
            <Paragraph>For entities that are not relationship types:</Paragraph>
            <CodeBox>
                {`x -> y means (x,x) -> y`}
            </CodeBox>
            <Paragraph>
                Everything goes through the self-relationship. But for most non-relational entities with symbols:
            </Paragraph>
            <CodeBox>
                {`(x,x) == x  // Fixed point`}
            </CodeBox>
            <Paragraph>
                So the inheritance simplifies back to <Word>
                    <Verbatim />
                    x -&gt; y
                </Word>, preventing recursive explosion.
            </Paragraph>
            <Heading>The Frame-Relative Nature of Canonicity</Heading>
            <Paragraph>
                While the symbolic chain <Word>
                    <Verbatim />
                    x =((p))&gt; ((p)) =(p)&gt; (p) =p&gt; p
                </Word> is valid, what the frame considers canonical may differ from this pure symbolic structure. Different
                frames may:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Recognize different symbols as canonical</Line>
                <Line>Collapse certain symbolic distinctions</Line>
                <Line>Introduce their own symbolic hierarchies</Line>
            </Paragraph>
            <Paragraph>
                This frame-relativity of canonicity adds another dimension to inheritance, where the same semantic
                relationships may manifest differently in different contexts while preserving their essential structure
                through the symbolic chains.
            </Paragraph>
            <Heading>Conclusion</Heading>
            <Paragraph>
                The semantics of inheritance, as revealed through the mother-daughter example, demonstrates that inheritance
                operates through symbolic chains that create layers of meaning. The notation p(x), understood through the
                symbolic chain structure, provides the machinery for property specialization while maintaining semantic
                coherence. The chain <Word>
                    <Verbatim />
                    x =((p))&gt; ((p)) =(p)&gt; (p) =p&gt; p
                </Word> reveals that inheritance need not be direct but can flow through symbolic hierarchies, enabling
                semantic theories to function as composable, extensible frameworks. In this way, SRT achieves what
                programming languages achieve through type systems and inheritance hierarchies, but at the level of meaning
                itself, through the fundamental mechanism of symbolism.
            </Paragraph>
        </Section>
    </Chapter>
);
