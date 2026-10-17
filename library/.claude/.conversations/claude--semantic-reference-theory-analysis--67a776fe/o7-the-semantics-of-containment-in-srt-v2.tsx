import { Bold, Chapter, Heading, Line, List, Paragraph, Section, Title, Word } from '@dna-platform/public';
import { CodeBox, Opaque, Verbatim } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ The Semantics of Containment in SRT v2 ]]</Title>
        <Section>
            <Opaque />
            <Heading>The Semantics of Containment in SRT at version 2</Heading>
            <Heading>The Semantics of Containment: A Primitive Form of Representation</Heading>
            <Heading>Abstract</Heading>
            <Paragraph>
                We present containment as a fundamental form of representation in Semantic Reference Theory (SRT), showing
                how containers naturally enforce non-self-containment through the semantic structure of representation
                rather than through arbitrary axioms. We demonstrate that the relationship <Word>
                    <Verbatim />
                    container =contains&gt; element
                </Word> serves as the primitive from which various collection types (sets, lists, bags) inherit their
                specific semantic properties. Most remarkably, we prove that Russell's Paradox cannot arise in this
                framework because self-containment would require a container to be identical to its own relationship type—a
                semantic impossibility in SRT's representation structure.
            </Paragraph>
            <Heading>1. The Container as Primitive</Heading>
            <Heading>1.1 Basic Definition</Heading>
            <Paragraph>
                In SRT, we introduce the container as an objective form that relates to its elements through containment:
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`container =contains> x
container =contains> y
container =contains> z`}
            </CodeBox>
            <Paragraph>
                Where <Word>
                    <Verbatim />
                    contains -&gt; represents
                </Word>, establishing that containment is a specialized form of representation designed for multiplicity.
            </Paragraph>
            <Heading>1.2 Canonical Notation</Heading>
            <Paragraph>The canonical form of a container uses set notation with parenthetical symbolization:</Paragraph>
            <CodeBox>
                {`({x, y, z}) =({x, y, z})> {x, y, z}
@ =@> ({x, y, z})`}
            </CodeBox>
            <Paragraph>
                Here <Word>
                    <Verbatim />
                    (&#123;x, y, z&#125;)
                </Word> serves as the symbol for the container <Word>
                    <Verbatim />
                    &#123;x, y, z&#125;
                </Word>, making it a representative in the current frame @.
            </Paragraph>
            <Heading>1.3 Synthetic Membership</Heading>
            <Paragraph>For literals that cannot serve as subjects, we define a synthetic inverse:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`x =|in> container  :=  container =contains> x`}
            </CodeBox>
            <Paragraph>
                This allows us to express membership from the element's perspective even when the element is literal
                (objective only).
            </Paragraph>
            <Heading>2. The Impossibility of Self-Containment</Heading>
            <Heading>2.1 The Semantic Proof</Heading>
            <Paragraph>Consider a container c that allegedly contains itself:</Paragraph>
            <CodeBox>
                {`c == {x, y, z, c}`}
            </CodeBox>
            <Paragraph>For this to express containment, we would need:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`c =contains> c`}
            </CodeBox>
            <Paragraph>However, this could only work if we had:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`c =c> c`}
            </CodeBox>
            <Paragraph>But for representation in SRT:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`x =x> y requires x != y`}
            </CodeBox>
            <Paragraph>
                When x == y, the relationship <Word>
                    <Verbatim />
                    x =x&gt; x
                </Word> expresses a property (self-relationship), not representation.
            </Paragraph>
            <Paragraph>
                Therefore: <Word>
                    <Verbatim />
                    c =c&gt; c
                </Word> cannot express containment—it expresses a property of c.
            </Paragraph>
            <Heading>2.2 The Deep Structure</Heading>
            <Paragraph>This proof reveals that:</Paragraph>
            <Paragraph>
                <List />
                <Line>Self-containment would require a container to BE its own relationship type</Line>
                <Line>Representation requires distinction between representer and represented</Line>
                <Line>Properties (self-relationships) are fundamentally different from representation</Line>
                <Line>Russell's Paradox cannot arise because the semantic structure prevents it</Line>
            </Paragraph>
            <Heading>3. Alternative Semantic Forms</Heading>
            <Heading>3.1 The Collection Form</Heading>
            <CodeBox
                language="srt"
            >
                {`collection =collects> x`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    Advantages
                </Word>: Familiar terminology <Word>
                    <Bold />
                    Disadvantages
                </Word>: The verb "collects" implies agency—as if the collection actively gathers its elements
            </Paragraph>
            <Heading>3.2 The Set Form</Heading>
            <CodeBox
                language="srt"
            >
                {`set =sets> x`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    Advantages
                </Word>: Connects to the programming concept of "setting" values <Word>
                    <Bold />
                    Disadvantages
                </Word>: For pure sets, we need <Word>
                    <Verbatim />
                    (set, x) == set
                </Word>, which prevents inheritance of more complex containment relationships
            </Paragraph>
            <Heading>3.3 Why Container Works</Heading>
            <Paragraph>The term "container" succeeds because:</Paragraph>
            <Paragraph>
                <List />
                <Line>It's purely structural (no implied agency)</Line>
                <Line>It naturally conjugates: container/contains/contained</Line>
                <Line>It allows inheritance: ordered containers, multi-containers, typed containers</Line>
                <Line>It's semantically neutral about implementation</Line>
            </Paragraph>
            <Heading>4. Inheritance and Specialization</Heading>
            <Heading>4.1 Set as Unique Container</Heading>
            <Paragraph>For sets, we enforce uniqueness through the canonical relationship:</Paragraph>
            <CodeBox>
                {`(set, x) == set
(set, y) == set`}
            </CodeBox>
            <Paragraph>This means set IS the relationship to its elements, preventing duplicate relationships.</Paragraph>
            <Heading>4.2 Ordered Containers with Indexed Relationships</Heading>
            <Paragraph>
                For ordered collections like &#123;x, x, y, z, y&#125;, we use a "next" referent n to create indexed
                positions:
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`c =c> x                                    // First x at position 0
c =(c,n)> x  & (c,n) -> c                 // Second x at position 1
c =((c,n),n)> y & ((c,n),n) -> (c,n)      // First y at position 2
c =(((c,n),n),n)> z & (((c,n),n),n) -> ((c,n),n)  // z at position 3
c =((((c,n),n),n),n)> y & ((((c,n),n),n),n) -> (((c,n),n),n)  // Second y at position 4`}
            </CodeBox>
            <Paragraph>The relationships form a chain through inheritance:</Paragraph>
            <Paragraph>
                <List />
                <Line>Each position inherits from the previous</Line>
                <Line>The same element can appear at multiple positions</Line>
                <Line>The structure naturally expresses ordering and multiplicity</Line>
            </Paragraph>
            <Paragraph>
                This elegant construction shows how complex data structures emerge from simple inheritance patterns. The
                "next" concept allows us to build positional semantics without external indexing.
            </Paragraph>
            <Heading>5. The Beauty of Semantic Emergence</Heading>
            <Heading>5.1 No Arbitrary Axioms</Heading>
            <Paragraph>Traditional set theory requires axioms like:</Paragraph>
            <Paragraph>
                <List />
                <Line>Foundation: No set contains itself</Line>
                <Line>Pairing: Sets exist containing given elements</Line>
                <Line>Union: Sets can be combined</Line>
            </Paragraph>
            <Paragraph>In SRT's containment semantics, these emerge naturally:</Paragraph>
            <Paragraph>
                <List />
                <Line>Non-self-containment: Falls out of representation semantics</Line>
                <Line>Element containment: Direct from container =contains&gt; x</Line>
                <Line>Union: Containers can contain containers</Line>
            </Paragraph>
            <Heading>5.2 The Mother-Daughter Application</Heading>
            <Paragraph>Returning to our motivating example:</Paragraph>
            <CodeBox>
                {`${''}{(mother, children)} - a collection defined by its canonical
mother references {(mother, children)}
daughter =[in]> {(mother, children)}`}
            </CodeBox>
            <Paragraph>
                The container provides the semantic object that makes motherhood possible—without it, there's no distinction
                between a woman and a mother.
            </Paragraph>
            <Heading>6. Theoretical Implications</Heading>
            <Heading>6.1 Representation vs Containment</Heading>
            <Paragraph>
                While <Word>
                    <Verbatim />
                    contains -&gt; represents
                </Word>, containment is specialized for:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Multiple simultaneous relationships</Line>
                <Line>Preservation of element identity</Line>
                <Line>Structural rather than symbolic relationships</Line>
            </Paragraph>
            <Heading>6.2 The Computational Perspective</Heading>
            <Paragraph>Containers in SRT map naturally to computational structures:</Paragraph>
            <Paragraph>
                <List />
                <Line>Sets: Hash tables with uniqueness</Line>
                <Line>Lists: Arrays with ordering</Line>
                <Line>Bags: Multisets with counting</Line>
                <Line>Trees: Nested containers</Line>
            </Paragraph>
            <Heading>6.3 The Philosophical Achievement</Heading>
            <Paragraph>By grounding set theory in representation semantics, we:</Paragraph>
            <Paragraph>
                <List />
                <Line>Eliminate paradoxes through meaning structure</Line>
                <Line>Unify mathematical and linguistic concepts</Line>
                <Line>Show that logical constraints emerge from semantic necessity</Line>
            </Paragraph>
            <Heading>7. Conclusion</Heading>
            <Paragraph>
                The semantics of containment reveals that containers are not arbitrary mathematical constructs but
                fundamental semantic objects that emerge from the structure of representation itself. The impossibility of
                self-containment isn't a rule we impose but a consequence of what it means to represent. This suggests a new
                foundation for mathematics where paradoxes dissolve through proper semantic understanding rather than
                through restrictive axioms.
            </Paragraph>
            <Paragraph>
                The choice of "container" as our primitive term reflects its semantic neutrality and natural conjugation
                patterns. From this single relationship type, we can derive sets, lists, bags, and all manner of collections
                through inheritance and specialization. The beauty lies not in the austerity of the term but in its semantic
                completeness—a container does exactly what it claims: it contains, nothing more, nothing less.
            </Paragraph>
        </Section>
    </Chapter>
);
