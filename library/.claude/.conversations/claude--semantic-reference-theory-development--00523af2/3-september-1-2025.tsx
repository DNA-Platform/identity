import { Bold, Chapter, Date, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { CodeBox, Dated, Message, Speaker, Verbatim } from '../../../.manual/.book';
import { Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[1 September 2025](2025-09-01)</Date>
        </Dated>
        <Title>[[ 1 September 2025 ]]</Title>
        <Message
            at="2025-09-01T14:06:44.540284Z"
        >
            <Origin>35f51a65-9e36-4f53-a4ad-9f741d410a03</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Indeed it does. I want to reflect on the semantic of relationship - in the abstract - not as it pertains to
                people only, though we should not that in our exploration, a relationship specifically between at least
                American speaking humans has a canonical. It is a romantic relationship. And that relationship has a
                representation whereby being “in” it makes semantic sense
            </Paragraph>
            <Paragraph>But let us use the semantics of familial relation, but also explore other uses</Paragraph>
            <Paragraph>Yes, they are related. John is his grandfather (valid)</Paragraph>
            <Paragraph>Yes, there is a relationship between the two of them. John is his grandfather (not valid)</Paragraph>
            <Paragraph>There is a relationship between the sun rising and the stillness of the lake (valid)</Paragraph>
            <Paragraph>They run the company together. They have a special type of relationship (valid)</Paragraph>
            <Paragraph>They run the company together. They are in a special type of relationship (not valid)</Paragraph>
            <Paragraph>There’s a good starting point that brings to light many semantic aspects of relationship</Paragraph>
            <Paragraph>
                Can you see any that connect back to SRT? Be thoughtful about using what you’ve learned about the formalism
                but in the documents written in your words, my words and in this conversation
            </Paragraph>
        </Message>
        <Message
            at="2025-09-01T14:06:59.859083Z"
        >
            <Origin>44034d6b-6d96-474d-83e8-f05e7e9225b2</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Looking at these examples through SRT's lens, several profound patterns emerge:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The Containment Test
                </Word>: Only certain relationships support the "in" metaphor. "In a relationship" works for romantic
                partnerships because they're conceptualized as bounded spaces where people coexist. But "in a special type
                of relationship" fails because business relationships aren't container spaces - they're functional
                connections, not cohabitation spaces.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Canonical vs. Non-Canonical Relationships
                </Word>: When we say "John is his grandfather," we're using the canonical familial representation directly.
                But "there is a relationship between them, John is his grandfather" treats the canonical as if it were just
                one instance of a general category, which feels redundant and semantically off.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The Subject-Object Structure
                </Word>: In SRT terms, familial relationships like "grandfather" create clear subject-object patterns:
                <Word>
                    <Verbatim />
                    John =grandson&gt; grandfather
                </Word>. The relationship type itself (<Word>
                    <Verbatim />
                    grandson
                </Word>) specifies the directionality and nature of the connection.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Poetic vs. Functional Relationships
                </Word>: "There is a relationship between the sun rising and the stillness of the lake" works because it's
                poetic/metaphorical - we're creating a representational connection through aesthetic or causal observation.
                But business relationships are functional, not spatial, so the container metaphor doesn't apply.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The Specificity Principle
                </Word>: SRT reveals that we prefer the most specific relationship type available. "John is his grandfather"
                uses the specific canonical rather than the generic "they are related," which would be informationally
                weaker.
            </Paragraph>
            <Paragraph>
                This connects to SRT's insight that every relationship automatically creates representation through <Word>
                    <Verbatim />
                    (x,y) =(x,y)&gt; y
                </Word>. The canonical relationship types have achieved such consensus that they function as immediate,
                transparent representations rather than requiring explicit relational specification.
            </Paragraph>
        </Message>
        <Message
            at="2025-09-01T14:09:58.417773Z"
        >
            <Origin>4082950f-fda9-447e-9b20-b7c48f1c85ea</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Causal relationships. There’s nothing cute about the sun rising example. We are looking to relate both of
                these kinds of relationships
            </Paragraph>
            <Paragraph>
                Now I keep seeing you introduce words and I don’t see you using any SRT not really, and I don’t see you
                using symbols and objects that exist to define these things. You introduce grandson. Sure that will be a
                word one day it doesn’t this theory of inheritance and more general structure to relationship? It is a one
                relation theory, and that relation is that it relates two referents by their relationship type. It’s
                foundational.
            </Paragraph>
        </Message>
        <Message
            at="2025-09-01T14:10:10.174949Z"
        >
            <Origin>22a1a283-ff6b-4bbf-ae3f-595690cec7a8</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                You're right - I keep inventing new concepts instead of using SRT's foundational structure. Let me be
                rigorous with just <Word>
                    <Verbatim />
                    R(x,y,t)
                </Word>.
            </Paragraph>
            <Paragraph>For the familial relationship:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`John =t> grandfather`}
            </CodeBox>
            <Paragraph>
                Where <Word>
                    <Verbatim />
                    t
                </Word> is some relationship type. We don't need "grandson" - that would be the inverse: <Word>
                    <Verbatim />
                    grandfather =s&gt; John
                </Word> where <Word>
                    <Verbatim />
                    s
                </Word> might inherit from the same family of relationship types as <Word>
                    <Verbatim />
                    t
                </Word>.
            </Paragraph>
            <Paragraph>For the causal relationship:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`sun-rising =u> lake-stillness  `}
            </CodeBox>
            <Paragraph>
                Where <Word>
                    <Verbatim />
                    u
                </Word> is a causal relationship type.
            </Paragraph>
            <Paragraph>
                Both are instances of the same foundational structure: <Word>
                    <Verbatim />
                    x =t&gt; y
                </Word>. One referent relating to another through a relationship type.
            </Paragraph>
            <Paragraph>
                The difference isn't in introducing new primitives but in what relationship types are involved:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Familial relationship types create kinship networks</Line>
                <Line>Causal relationship types create event networks</Line>
            </Paragraph>
            <Paragraph>
                But both operate through the same mechanism: <Word>
                    <Verbatim />
                    R(x,y,t)
                </Word>.
            </Paragraph>
            <Paragraph>
                The "in" container metaphor only applies when the relationship type itself has spatial/containment
                properties. Most relationship types don't support this metaphor.
            </Paragraph>
            <Paragraph>So the semantic analysis should focus on:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>What relationship types exist in our catalogue</Line>
                <Line>
                    How they inherit from each other (<Word>
                        <Verbatim />
                        t -&gt; r
                    </Word>)
                </Line>
                <Line>Which ones support which grammatical constructions</Line>
                <Line>How canonical assignment works for relationship types</Line>
            </Paragraph>
            <Paragraph>
                Rather than inventing new theoretical machinery, we need to understand how the single relation <Word>
                    <Verbatim />
                    R(x,y,t)
                </Word> handles these different cases through different values of <Word>
                    <Verbatim />
                    t
                </Word>.
            </Paragraph>
        </Message>
    </Chapter>
);
