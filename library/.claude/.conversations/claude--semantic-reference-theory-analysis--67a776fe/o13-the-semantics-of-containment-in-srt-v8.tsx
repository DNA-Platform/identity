import { Chapter, Heading, Line, List, Paragraph, Section, Title, Word } from '@dna-platform/public';
import { CodeBox, Opaque, Verbatim } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ The Semantics of Containment in SRT v8 ]]</Title>
        <Section>
            <Opaque />
            <Heading>The Semantics of Containment in SRT at version 8</Heading>
            <Heading>The Semantics of Containment: A Primitive Form of Representation</Heading>
            <Heading>Abstract</Heading>
            <Paragraph>
                We present containment as a fundamental form of representation in Semantic Reference Theory (SRT), showing
                how containers naturally enforce non-self-containment through the semantic structure of representation
                rather than through arbitrary axioms. We demonstrate that the relationship <Word>
                    <Verbatim />
                    container =contains&gt; element
                </Word> serves as the primitive from which various collection types inherit their specific semantic
                properties. Most remarkably, we prove that Russell's Paradox cannot arise in this framework because
                self-containment would require a container to be identical to its own relationship type—a semantic
                impossibility in SRT's representation structure.
            </Paragraph>
            <Heading>Introduction</Heading>
            <Paragraph>
                In mathematics, we often take containment for granted. A set "has" members. A list "holds" elements. But
                what does it mean for one thing to contain another? And why can't a set contain itself? Traditional set
                theory answers these questions with axioms—rules imposed from above to prevent paradox. But what if these
                constraints emerge naturally from the semantic structure of containment itself?
            </Paragraph>
            <Paragraph>
                Semantic Reference Theory offers a different path. By understanding containment as a specialized form of
                representation, we discover that the prohibition against self-containment isn't a rule we impose but a
                consequence of what it means to represent. This insight transforms our understanding of collections, from
                sets to lists to bags, showing how each emerges from the primitive containment relationship through semantic
                specialization.
            </Paragraph>
            <Heading>The Container as Semantic Primitive</Heading>
            <Heading>Establishing the Foundation</Heading>
            <Paragraph>
                In SRT, every relationship has the form <Word>
                    <Verbatim />
                    x =t&gt; y
                </Word>, expressing that x relates to y through relationship type t. When we want to express that something
                contains multiple elements, we need a relationship that can repeat while maintaining distinct connections.
                This leads us to the container primitive:
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`container =contains> x
container =contains> y
container =contains> z`}
            </CodeBox>
            <Paragraph>
                Notice how the same container relates to each element through the relationship type "contains." This
                pattern—one subject relating to multiple objects through the same relationship type—is the essence of
                containment. But there's something deeper here. The relationship <Word>
                    <Verbatim />
                    contains
                </Word> inherits from <Word>
                    <Verbatim />
                    represents
                </Word>, establishing that:
            </Paragraph>
            <CodeBox>
                {`contains -> represents`}
            </CodeBox>
            <Paragraph>
                This inheritance tells us that containment is a specialized form of representation. A container doesn't just
                hold its elements; it represents them collectively.
            </Paragraph>
            <Heading>The Canonical Form</Heading>
            <Paragraph>
                Just as symbols need canonical representations in SRT, containers have their canonical form. When we write
                <Word>
                    <Verbatim />
                    &#123;x, y, z&#125;
                </Word>, we denote a container in its literal form. Its canonical symbol takes the form:
            </Paragraph>
            <CodeBox>
                {`({x, y, z}) =({x, y, z})> {x, y, z}`}
            </CodeBox>
            <Paragraph>
                Here the canonical <Word>
                    <Verbatim />
                    (&#123;x, y, z&#125;)
                </Word> serves as the symbol for the container, while <Word>
                    <Verbatim />
                    &#123;x, y, z&#125;
                </Word> is the container itself. Within any semantic frame @, we also have:
            </Paragraph>
            <CodeBox>
                {`@ =@> ({x, y, z})`}
            </CodeBox>
            <Paragraph>
                This means the frame recognizes <Word>
                    <Verbatim />
                    (&#123;x, y, z&#125;)
                </Word> as a representative within that frame's semantic space. The container has become a first-class
                semantic object.
            </Paragraph>
            <Heading>The Synthetic Inverse</Heading>
            <Paragraph>
                Consider what happens when we want to express membership from the element's perspective. If x is a
                literal—something that can only appear as an object in relationships—it cannot be a subject. It cannot say
                "I am in the container." This is where SRT's synthetic relationships become essential:
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`x =|in> container  :=  container =contains> x`}
            </CodeBox>
            <Paragraph>
                The synthetic relationship <Word>
                    <Verbatim />
                    =|in&gt;
                </Word> inverts the direction, allowing us to express membership even when the element cannot serve as a
                subject. This connects to the deeper semantic principle of dichotomy—when one side of a relationship
                involves a literal that cannot be a subject, we need synthetic inversion to express the relationship from
                that perspective.
            </Paragraph>
            <Heading>The Impossibility of Self-Containment</Heading>
            <Heading>The Semantic Proof</Heading>
            <Paragraph>
                Let's consider carefully what would be required for a container to contain itself. Suppose we have a
                container c that allegedly contains itself:
            </Paragraph>
            <CodeBox>
                {`c == {x, y, z, c}`}
            </CodeBox>
            <Paragraph>For c to be a member of itself, we would need to express:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`c =contains> c`}
            </CodeBox>
            <Paragraph>
                But wait—the relationship type here is "contains", not "c". So this relationship would only work if we had:
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`c =c> c`}
            </CodeBox>
            <Paragraph>And for this to express containment (rather than some other relationship), we would need:</Paragraph>
            <CodeBox>
                {`c == contains`}
            </CodeBox>
            <Paragraph>
                But this would mean the container IS the relationship type "contains" itself. This violates a fundamental
                principle of SRT: for genuine representation to occur, we need:
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`x =x> y requires x != y`}
            </CodeBox>
            <Paragraph>
                When x equals y, the relationship <Word>
                    <Verbatim />
                    x =x&gt; x
                </Word> doesn't express representation—it expresses a property, a self-relationship. The expression <Word>
                    <Verbatim />
                    c =c&gt; c
                </Word> tells us that c has some property related to itself, but it cannot express that c contains itself as
                an element.
            </Paragraph>
            <Heading>Why This Matters</Heading>
            <Paragraph>
                This proof reveals something profound: Russell's Paradox cannot arise in SRT because the semantic structure
                of representation prevents it. We don't need an axiom stating "no set contains itself"—this falls out
                naturally from what it means to represent. Self-containment would require a container to be identical to its
                own relationship type, which would collapse the distinction between container and containment.
            </Paragraph>
            <Paragraph>
                Consider the traditional paradox: "the set of all sets that don't contain themselves." In SRT, this cannot
                be constructed because:
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    For a set s to contain itself, we'd need <Word>
                        <Verbatim />
                        s =s&gt; s
                    </Word>
                </Line>
                <Line>
                    But <Word>
                        <Verbatim />
                        s =s&gt; s
                    </Word> expresses a property of s, not membership
                </Line>
                <Line>The property "doesn't contain itself" is always satisfied</Line>
                <Line>
                    Therefore, the paradoxical set would need to contain all sets—a legitimate, non-paradoxical collection
                </Line>
            </Paragraph>
            <Heading>The Architecture of Collections</Heading>
            <Heading>Ordered Containers Through Inheritance</Heading>
            <Paragraph>
                Before we examine how sets achieve uniqueness, let's see how containers can express ordering and
                multiplicity. Consider the collection <Word>
                    <Verbatim />
                    &#123;x, x, y, z, y&#125;
                </Word> where elements repeat and order matters. We introduce a referent n representing the concept of
                "next" and build positions through accumulating inheritance:
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`c =c> x
c =(c,n)> x  & (c,n) -> c
c =((c,n),n)> y & ((c,n),n) -> (c,n)
c =(((c,n),n),n)> z & (((c,n),n),n) -> ((c,n),n)
c =((((c,n),n),n),n)> y & ((((c,n),n),n),n) -> (((c,n),n),n)`}
            </CodeBox>
            <Paragraph>
                Let's trace through this structure. The first x occupies position zero through the base relationship <Word>
                    <Verbatim />
                    c =c&gt; x
                </Word>. The second x appears at position one through <Word>
                    <Verbatim />
                    c =(c,n)&gt; x
                </Word>, where the relationship type <Word>
                    <Verbatim />
                    (c,n)
                </Word> represents "the position after c." This relationship inherits from c through <Word>
                    <Verbatim />
                    (c,n) -&gt; c
                </Word>, establishing that position one extends position zero.
            </Paragraph>
            <Paragraph>
                The pattern continues: each new position is constructed by adding another "next" to the previous position's
                relationship type. The relationship <Word>
                    <Verbatim />
                    ((c,n),n)
                </Word> means "the position after (c,n)", which is position two. The inheritance chain <Word>
                    <Verbatim />
                    ((c,n),n) -&gt; (c,n) -&gt; c
                </Word> traces the positional lineage.
            </Paragraph>
            <Paragraph>
                Notice how the same element y appears at both position two and position four, through different
                relationships. This is how ordered containers express multiplicity—the same element can be contained
                multiple times through distinct positional relationships. The depth of nesting in the relationship type
                literally encodes the position.
            </Paragraph>
            <Heading>Sets as Canonical Containers</Heading>
            <Paragraph>
                Now we can appreciate what sets achieve through their semantic constraints. Sets inherit from container but
                add a crucial requirement through their relational form. When we say <Word>
                    <Verbatim />
                    set =sets&gt; x
                </Word>, we're using language that connects naturally to programming—we're "setting" x as a member,
                establishing a definitive assignment.
            </Paragraph>
            <Paragraph>For a set containing &#123;x, y, z&#125;, the formal structure is:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`set -> container
set =sets> x & (set,x) == set
set =sets> y & (set,y) == set
set =sets> z & (set,z) == set`}
            </CodeBox>
            <Paragraph>
                The constraint <Word>
                    <Verbatim />
                    (set,x) == set
                </Word> is the key. It states that set IS the most specific relationship between itself and x. Since each
                element can have only one most specific relationship with the set, this immediately prevents duplicates. You
                cannot have <Word>
                    <Verbatim />
                    set =sets&gt; x
                </Word> twice with different relationship types because there's only one most specific relationship.
            </Paragraph>
            <Paragraph>For a particular set instance s, the pattern becomes remarkably elegant:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`s -> set
s =s> x & (s,x) == s
s =s> y & (s,y) == s
s =s> z & (s,z) == s`}
            </CodeBox>
            <Paragraph>
                Here s serves triple duty: it's the container (objective form), the relationship type (relational form), and
                the most specific connection to each element. When we ask <Word>
                    <Verbatim />
                    x =|in&gt; s?
                </Word>, we're really asking whether <Word>
                    <Verbatim />
                    s =s&gt; x
                </Word> holds. The set doesn't just contain its elements—it IS the definitive relationship to them.
            </Paragraph>
            <Paragraph>
                Compare this to our ordered container with its elaborate inheritance chains. The set's canonical constraint
                prevents exactly this kind of positional complexity. Where ordered containers use relationships like <Word>
                    <Verbatim />
                    ((c,n),n)
                </Word> to track positions, sets force all relationships to collapse to the canonical form, eliminating both
                ordering and multiplicity in one semantic stroke.
            </Paragraph>
            <Heading>Alternative Semantic Forms</Heading>
            <Heading>The Space of Possibilities</Heading>
            <Paragraph>
                As we developed this framework, we considered several alternatives for expressing containment. Each carries
                different semantic implications:
            </Paragraph>
            <Paragraph>
                The form <Word>
                    <Verbatim />
                    collection =collects&gt; x
                </Word> uses familiar terminology, but "collects" implies agency—as if the collection actively gathers its
                elements. Collections don't collect; collectors do.
            </Paragraph>
            <Paragraph>
                The form <Word>
                    <Verbatim />
                    set =sets&gt; x
                </Word> connects beautifully to programming where we "set" variables, and it carries mathematical weight.
                However, "set" brings uniqueness constraints that don't apply to all containers.
            </Paragraph>
            <Paragraph>
                The form <Word>
                    <Verbatim />
                    container =contains&gt; x
                </Word> might sound less mathematical, but this apparent simplicity is actually its strength. The term is
                purely structural—containers don't "do" anything; they simply contain. The natural conjugation
                (container/contains/contained) creates a complete semantic family.
            </Paragraph>
            <Heading>Why Container Works</Heading>
            <Paragraph>
                The beauty of "container" lies in its semantic neutrality. It makes no claims about uniqueness (like "set"),
                implies no agency (like "collection"), and suggests no physical binding (like "bundle"). This neutrality
                allows it to serve as the perfect primitive from which specialized forms inherit.
            </Paragraph>
            <Paragraph>
                From <Word>
                    <Verbatim />
                    container
                </Word>, we can derive:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Sets (through canonical constraints)</Line>
                <Line>Lists (through positional inheritance)</Line>
                <Line>Bags (through multiple relationships)</Line>
                <Line>Trees (through nested containment)</Line>
            </Paragraph>
            <Paragraph>
                Each specialization adds its own semantic constraints while inheriting the basic containment structure.
            </Paragraph>
            <Heading>Theoretical Implications</Heading>
            <Heading>Representation Versus Containment</Heading>
            <Paragraph>
                While <Word>
                    <Verbatim />
                    contains -&gt; represents
                </Word>, containment specializes representation for multiplicity. When <Word>
                    <Verbatim />
                    symbol =symbol&gt; literal
                </Word>, we have singular representation—one thing standing for another. When <Word>
                    <Verbatim />
                    container =contains&gt; element
                </Word>, we have collective representation—one thing standing for many.
            </Paragraph>
            <Paragraph>
                This distinction helps us understand why self-containment fails. Singular representation requires
                distinction (<Word>
                    <Verbatim />
                    x =x&gt; y
                </Word> requires <Word>
                    <Verbatim />
                    x != y
                </Word>). Collective representation inherits this requirement. A container cannot contain itself because it
                cannot collectively represent a collection that includes itself—the representation would be circular.
            </Paragraph>
            <Heading>The Emergence of Mathematical Structure</Heading>
            <Paragraph>
                Traditional set theory begins with axioms that seem arbitrary: Foundation (no infinite descending chains),
                Pairing (sets exist), Union (sets combine). In SRT's containment semantics, these emerge naturally:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Non-self-containment emerges from representation semantics</Line>
                <Line>
                    Container existence follows from <Word>
                        <Verbatim />
                        container =contains&gt; x
                    </Word>
                </Line>
                <Line>Union is just containers containing containers</Line>
            </Paragraph>
            <Paragraph>We don't impose these constraints; we discover them through semantic analysis.</Paragraph>
            <Heading>The Computational Perspective</Heading>
            <Paragraph>The semantic structures we've developed map directly to computational implementations:</Paragraph>
            <Paragraph>
                <List />
                <Line>Sets become hash tables with uniqueness checks</Line>
                <Line>Lists become arrays with positional access</Line>
                <Line>Bags become multisets with counting</Line>
                <Line>Trees become nested container structures</Line>
            </Paragraph>
            <Paragraph>
                But more importantly, the semantic framework explains WHY these implementations work. The impossibility of
                self-containment isn't a quirk of implementation but a fundamental semantic constraint.
            </Paragraph>
            <Heading>Conclusion</Heading>
            <Paragraph>
                The semantics of containment reveals deep truths about the nature of collections and representation. By
                grounding containment in SRT's representation framework, we discover that the puzzles and paradoxes of
                traditional set theory dissolve into natural semantic consequences.
            </Paragraph>
            <Paragraph>
                The impossibility of self-containment isn't a rule we impose but emerges from what it means to represent.
                The uniqueness of set elements isn't an axiom but follows from canonical relationships. The variety of
                collection types—sets, lists, bags—aren't arbitrary data structures but natural specializations of the
                primitive containment relationship.
            </Paragraph>
            <Paragraph>
                Perhaps most beautifully, this framework shows how mathematical structure emerges from semantic necessity.
                We don't need to accept axioms on faith; we can derive them from the meaning of containment itself. In this
                light, Russell's Paradox wasn't a crisis requiring new axioms but a confusion about the nature of
                representation—a confusion that dissolves when we understand that containers, like all representations,
                require distinction between representer and represented.
            </Paragraph>
            <Paragraph>
                The choice of "container" as our primitive term reflects not aesthetic preference but semantic precision.
                From this single relationship type, properly understood, emerges the rich hierarchy of collections that
                mathematics and computation require. The austerity isn't in the term but in the elegance of building
                everything from one carefully chosen primitive—a container that simply contains, nothing more, nothing less,
                but from which all collective representation flows.
            </Paragraph>
        </Section>
    </Chapter>
);
