import { Bold, Chapter, Heading, Line, List, Paragraph, Section, Title, Word } from '@dna-platform/public';
import { CodeBox, Opaque, Verbatim } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ The Semantics of Inheritance: A Formal Analysis Through Family Relations v1 ]]</Title>
        <Section>
            <Opaque />
            <Heading>The Semantics of Inheritance: A Formal Analysis Through Family Relations at version 1</Heading>
            <Heading>The Semantics of Inheritance: A Formal Analysis Through Family Relations</Heading>
            <Heading>Abstract</Heading>
            <Paragraph>
                We present inheritance as the fundamental mechanism through which semantic theories compose and extend.
                Through the analysis of family relationships—specifically the mother-daughter dynamic—we demonstrate how
                inheritance operates across different semantic roles and introduces a powerful parametric notation p(x) that
                captures property specialization. We show that inheritance is not merely a structural feature but the very
                mechanism through which meaning specializes and generalizes, enabling semantic theories to function as
                composable frameworks analogous to programming libraries.
            </Paragraph>
            <Heading>Introduction</Heading>
            <Paragraph>
                When we speak of a mother and her daughter, we invoke a web of relationships that exemplify the deepest
                patterns of semantic inheritance. A daughter inherits from the concept of child, a mother's specific
                children inherit from the general concept of children, and a particular mother inherits from the abstract
                notion of motherhood. These patterns reveal that inheritance in Semantic Reference Theory operates not just
                on relationship types, but on the very fabric of meaning itself.
            </Paragraph>
            <Heading>The Parametric Form</Heading>
            <Heading>Defining p(x)</Heading>
            <Paragraph>
                Before we can properly analyze family relationships, we must establish a notation for property
                specialization. When a referent x has a property p expressed as a self-relationship:
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`x =p> x`}
            </CodeBox>
            <Paragraph>
                We introduce the notation <Word>
                    <Verbatim />
                    p(x)
                </Word> to denote x's specific instantiation of property p. Formally:
            </Paragraph>
            <CodeBox>
                {`p(x) := ((x,x), p)`}
            </CodeBox>
            <Paragraph>
                This definition states that p(x) is the most specific relationship between x's self-relationship (x,x) and
                the property p.
            </Paragraph>
            <Heading>The Inheritance Chain</Heading>
            <Paragraph>For this definition to be meaningful, we require:</Paragraph>
            <CodeBox>
                {`(x,x) -> p`}
            </CodeBox>
            <Paragraph>
                But this inheritance often involves a chain of specializations. When (x,x) inherits from p, there may exist
                intermediate relationships:
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`(x,x) =p*> p* =p**> p** =p***> p*** ... =p> p`}
            </CodeBox>
            <Paragraph>Where each specialized version inherits from the next:</Paragraph>
            <CodeBox>
                {`p* -> p** -> p*** -> ... -> p`}
            </CodeBox>
            <Paragraph>
                In this chain, <Word>
                    <Verbatim />
                    ((x,x), p)
                </Word> equals p*, the most specific relationship that ultimately inherits from p. This is why p(x)
                naturally inherits from p—it is literally the most specialized version of p for that specific x.
            </Paragraph>
            <Heading>The Semantic Achievement</Heading>
            <Paragraph>
                This parametric form achieves something profound: it grounds property specialization in SRT's existing
                machinery. When we write <Word>
                    <Verbatim />
                    children(mother)
                </Word>, we're not introducing new notation arbitrarily, but referring to the most specific relationship
                between mother's self-relationship and the concept of children. This specific relationship inherits from the
                general concept, enabling both specialization and generalization within the same framework.
            </Paragraph>
            <Heading>The Mother-Daughter Semantic Framework</Heading>
            <Heading>Establishing the Family Context</Heading>
            <Paragraph>Let us formalize the semantics of family relationships:</Paragraph>
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
                {`children(mother) := ((mother,mother), children)`}
            </CodeBox>
            <Paragraph>
                This denotes the mother's specific children, which inherits from the general concept of children.
            </Paragraph>
            <Heading>The Daughter's Identity</Heading>
            <Paragraph>Similarly, a daughter has a mother:</Paragraph>
            <CodeBox>
                {`daughter =|has> mother`}
            </CodeBox>
            <Paragraph>Leading to:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`(daughter) =(mother)> daughter =|> daughter =mother> daughter`}
            </CodeBox>
            <Paragraph>But more specifically, for a daughter of a particular mother:</Paragraph>
            <CodeBox>
                {`daughter(mother) := ((daughter,daughter), mother)`}
            </CodeBox>
            <Paragraph>
                This captures the daughter's specific relationship to her mother, inheriting from the general daughter
                concept.
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
            <Paragraph>This child represents the mother:</Paragraph>
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
                children(m) is not children(mother) but a referent specific to m that inherits from the general concept.
            </Paragraph>
            <Heading>The Polymorphic Mechanism</Heading>
            <Paragraph>
                When we write <Word>
                    <Verbatim />
                    children(m)
                </Word> where <Word>
                    <Verbatim />
                    m -&gt; mother
                </Word>, we invoke several inheritance principles:
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Role Inheritance
                    </Word>: m can play the semantic roles that mother can play
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Property Inheritance
                    </Word>: If mother has the children property, m has a specialized version
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Parametric Covariance
                    </Word>: children(m) -&gt; children(mother) when m -&gt; mother
                </Line>
            </Paragraph>
            <Paragraph>This polymorphism enables us to write:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`c(m) -> children(m) =|> c(m) =includes> d`}
            </CodeBox>
            <Paragraph>
                We can work with children(m) polymorphically, understanding it as m's specific instantiation of the children
                concept.
            </Paragraph>
            <Heading>The Nature of Inheritance</Heading>
            <Heading>Beyond Relationship Types</Heading>
            <Paragraph>
                This analysis reveals that inheritance in SRT operates not just on relationship types but on all semantic
                roles:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Subject inheritance
                    </Word>: The capacity to initiate relationships
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Object inheritance
                    </Word>: The capacity to be referenced
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Relationship inheritance
                    </Word>: The capacity to connect referents
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Parametric inheritance
                    </Word>: The specialization of properties
                </Line>
            </Paragraph>
            <Heading>The Symbolic Dimension</Heading>
            <Paragraph>Inheritance behaves differently for referents with and without symbols:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Literal inheritance
                    </Word>: Role-based capabilities only
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Symbolic inheritance
                    </Word>: Full property and relationship inheritance
                </Line>
            </Paragraph>
            <Paragraph>
                The symbol is what expresses and carries the properties of a referent, enabling rich inheritance
                hierarchies.
            </Paragraph>
            <Heading>Inheritance as Semantic Library Composition</Heading>
            <Paragraph>
                Just as programming libraries provide inherited functionality, semantic theories compose through
                inheritance. When we declare <Word>
                    <Verbatim />
                    m -&gt; mother
                </Word>, we import mother's semantic capabilities into m's context. The parametric notation p(x) enables
                specialized versions of inherited properties, maintaining both generality and specificity within the same
                framework.
            </Paragraph>
            <Heading>Conclusion</Heading>
            <Paragraph>
                The semantics of inheritance, as revealed through the mother-daughter example, demonstrates that inheritance
                is not merely a structural convenience but the fundamental mechanism through which meaning organizes itself.
                Through parametric specialization, role preservation, and symbolic mediation, inheritance enables semantic
                theories to function as composable, extensible frameworks. The notation p(x), grounded in the most specific
                relationship ((x,x), p), provides the machinery for property specialization while maintaining inheritance
                chains that preserve semantic coherence. In this way, SRT achieves what programming languages achieve
                through class hierarchies and type systems, but at the level of meaning itself.
            </Paragraph>
        </Section>
    </Chapter>
);
