import { Bold, Chapter, Heading, Line, List, Paragraph, Section, Title, Word } from '@dna-platform/public';
import { CodeBox, Opaque, Verbatim } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ The Semantics of Catalogues in SRT v1 ]]</Title>
        <Section>
            <Opaque />
            <Heading>The Semantics of Catalogues in SRT at version 1</Heading>
            <Heading>The Semantics of Catalogues in Semantic Reference Theory</Heading>
            <Heading>Abstract</Heading>
            <Paragraph>
                This document formalizes the semantics of catalogues in Semantic Reference Theory (SRT), establishing how
                connected semantic spaces emerge from the fundamental relation <Word>
                    <Verbatim />
                    R(x,y,t)
                </Word>. We demonstrate that catalogues function as memory architectures where canonical representatives
                serve as addressing systems that unify semantic content into coherent spaces.
            </Paragraph>
            <Heading>1. Foundational Definitions</Heading>
            <Heading>1.1 Connection Referents</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Definition 1.1
                </Word>: For any relationship <Word>
                    <Verbatim />
                    x =&gt; y
                </Word> in SRT, there exists a unique connection referent denoted <Word>
                    <Verbatim />
                    (x-y)
                </Word> such that:
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`(x-y) => x  and  (x-y) => y`}
            </CodeBox>
            <Paragraph>
                The connection referent witnesses the connectivity between referents and serves as the fundamental building
                block for catalogue structure.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Example 1.1
                </Word>: Consider referents <Word>
                    <Verbatim />
                    rose
                </Word>, <Word>
                    <Verbatim />
                    red
                </Word>, and <Word>
                    <Verbatim />
                    flower
                </Word> with relationships:
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`rose => red    creates connection referent (rose-red)
rose => flower creates connection referent (rose-flower)  
red => flower  creates connection referent (red-flower)`}
            </CodeBox>
            <Heading>1.2 Transitivity Through Connection</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Theorem 1.1
                </Word> (Connection Transitivity): If there exists a path of relationships connecting referents, their
                connection referents become equal:
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`If x => y => z, then (x-z) == (x-y) == (y-z)`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    Proof Sketch
                </Word>: The transitivity follows from the requirement that connection referents represent shared
                connectivity patterns rather than individual relationships.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Example 1.2
                </Word>: In our flower example:
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`rose => red => flower
Therefore: (rose-flower) == (rose-red) == (red-flower)`}
            </CodeBox>
            <Paragraph>
                All three connection referents collapse to the same canonical representative for this connected component.
            </Paragraph>
            <Heading>2. Catalogue Structure</Heading>
            <Heading>2.1 Connected Components as Catalogues</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Definition 2.1
                </Word>: Referents belong to the same catalogue if and only if their connection referents are equal:
            </Paragraph>
            <CodeBox>
                {`x, y ∈ same_catalogue ⟺ (x-y) exists and (x-y) == (x-w) for any w connected to x`}
            </CodeBox>
            <Paragraph>
                This definition ensures that catalogues correspond exactly to connected components in the referent graph.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Example 2.1
                </Word>: Consider two disconnected subgraphs:
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`Group 1: cat => furry => warm
Group 2: rock => hard => cold`}
            </CodeBox>
            <Paragraph>Here we get:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Verbatim />
                        (cat-furry) == (cat-warm) == (furry-warm)
                    </Word> (one catalogue)
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        (rock-hard) == (rock-cold) == (hard-cold)
                    </Word> (different catalogue)
                </Line>
                <Line>
                    But <Word>
                        <Verbatim />
                        (cat-rock)
                    </Word> does not exist (disconnected)
                </Line>
            </Paragraph>
            <Heading>2.2 Canonical Representation Through Collections</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Definition 2.2
                </Word>: For any catalogue t, there exists a collection c such that:
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`t =c> c        // t relates to its collection
(t,c) == c     // c is the symbol for this relationship  
c =c> t        // therefore c represents t`}
            </CodeBox>
            <Paragraph>The collection c serves as the canonical representative of all referents in catalogue t.</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Definition 2.3
                </Word> (Catalogue Membership):
            </Paragraph>
            <CodeBox>
                {`x ∈ catalogue_t ⟺ x -> c, where c is the canonical collection of t`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    Theorem 2.1
                </Word> (Transitive Catalogue Membership):
            </Paragraph>
            <CodeBox>
                {`If x -> c and c -> t, then x -> t`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    Example 2.2
                </Word>: For our flower catalogue:
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`flower_catalogue =c> flower_collection
(flower_catalogue, flower_collection) == flower_collection
Therefore: flower_collection =flower_collection> flower_catalogue

Membership:
rose -> flower_collection  (rose is in the flower collection)  
red -> flower_collection   (red is in the flower collection)
flower -> flower_collection (flower is in the flower collection)

Since flower_collection -> flower_catalogue:
rose -> flower_catalogue
red -> flower_catalogue  
flower -> flower_catalogue`}
            </CodeBox>
            <Heading>3. The Single Catalogue Constraint</Heading>
            <Heading>3.1 Universal Connectivity</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Axiom 3.1
                </Word> (Single Catalogue): In a semantically coherent reference frame, all referents must be connected:
            </Paragraph>
            <CodeBox>
                {`∀x,y: ∃(x-y)  // connection referent exists for all pairs`}
            </CodeBox>
            <Paragraph>This axiom ensures semantic completeness by preventing isolated referent fragments.</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Theorem 3.1
                </Word> (Canonical Unification): In a single catalogue, all referents dereference to the same canonical:
            </Paragraph>
            <CodeBox>
                {`∀x: *x == (s-o)  // all referents point to subject-object canonical`}
            </CodeBox>
            <Paragraph>
                where <Word>
                    <Verbatim />
                    *x
                </Word> represents the dereferencing operation that reveals the canonical structure.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Example 3.1
                </Word>: In a unified semantic space containing <Word>
                    <Verbatim />
                    &#123;rose, red, flower, love, beauty&#125;
                </Word>:
            </Paragraph>
            <CodeBox>
                {`*rose == (s-o)
*red == (s-o)
*flower == (s-o)
*love == (s-o)
*beauty == (s-o)`}
            </CodeBox>
            <Paragraph>
                All referents dereference to the same subject-object canonical, indicating they belong to one coherent
                semantic catalogue.
            </Paragraph>
            <Heading>4. Reference Frames and Multiple Catalogues</Heading>
            <Heading>4.1 Reference Frame Structure</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Definition 4.1
                </Word>: A reference frame F&#91;t,c&#93; may contain multiple catalogues, each represented by its own
                canonical collection:
            </Paragraph>
            <CodeBox>
                {`${''}F[t,c] = {catalogue₁, catalogue₂, ..., catalogueₙ}
where catalogueᵢ ≠ catalogueⱼ ⟺ canonicalᵢ ≠ canonicalⱼ`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    Example 4.1
                </Word>: Consider reference frame F&#91;r,eq&#93; containing:
            </Paragraph>
            <CodeBox>
                {`Catalogue 1: {animals: cat, dog, bird} with canonical animal_collection
Catalogue 2: {colors: red, blue, green} with canonical color_collection  
Catalogue 3: {emotions: joy, sadness, anger} with canonical emotion_collection`}
            </CodeBox>
            <Paragraph>
                Each catalogue maintains internal connectivity while remaining disconnected from the others.
            </Paragraph>
            <Heading>4.2 Collection Representation</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Theorem 4.1
                </Word>: Each catalogue in a reference frame corresponds to exactly one collection that represents its
                connected components:
            </Paragraph>
            <CodeBox>
                {`For catalogue Cᵢ: ∃!collection cᵢ such that cᵢ =cᵢ> Cᵢ`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    Example 4.2
                </Word>: In our multi-catalogue frame:
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`animal_catalogue =c> animal_collection
animal_collection =animal_collection> animal_catalogue

color_catalogue =c> color_collection  
color_collection =color_collection> color_catalogue

emotion_catalogue =c> emotion_collection
emotion_collection =emotion_collection> emotion_catalogue`}
            </CodeBox>
            <Heading>5. The Memory Architecture</Heading>
            <Heading>5.1 Dereferencing Semantics</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Definition 5.1
                </Word> (Semantic Dereferencing): The operation <Word>
                    <Verbatim />
                    *x
                </Word> reveals the canonical structure that x points to:
            </Paragraph>
            <CodeBox>
                {`*x = canonical_structure_of_catalogue_containing_x`}
            </CodeBox>
            <Paragraph>This creates a memory-like architecture where:</Paragraph>
            <Paragraph>
                <List />
                <Line>Referents function as semantic addresses</Line>
                <Line>Canonicals function as memory locations</Line>
                <Line>Dereferencing reveals the underlying connectivity pattern</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Example 5.1
                </Word>: In our flower catalogue:
            </Paragraph>
            <CodeBox>
                {`*rose = flower_canonical
*red = flower_canonical
*flower = flower_canonical`}
            </CodeBox>
            <Paragraph>All referents in the catalogue point to the same canonical "memory location."</Paragraph>
            <Heading>5.2 Catalogue as Semantic Memory</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Theorem 5.1
                </Word> (Memory Space Correspondence): A catalogue operates analogously to a memory system where:
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Each referent serves as an addressable semantic location</Line>
                <Line>The canonical provides the fundamental addressing scheme</Line>
                <Line>Connection referents establish the memory topology</Line>
                <Line>Dereferencing unifies distributed semantic content</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Example 5.2
                </Word>: Consider consciousness as a single catalogue where all experiences dereference to the
                identity-object canonical:
            </Paragraph>
            <CodeBox>
                {`*visual_experience == (i-o)
*auditory_experience == (i-o)  
*emotional_experience == (i-o)
*conceptual_experience == (i-o)`}
            </CodeBox>
            <Paragraph>
                The unified dereferencing creates coherent conscious experience from distributed perceptual and cognitive
                content.
            </Paragraph>
            <Heading>6. Implications for Semantic Consistency</Heading>
            <Heading>6.1 Perspective Coherence</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Definition 6.1
                </Word> (Sensible Perspective): A perspective is sensible if and only if it maintains the single catalogue
                constraint:
            </Paragraph>
            <CodeBox>
                {`sensible_perspective ⟺ ∀x,y in perspective: ∃(x-y)`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    Theorem 6.1
                </Word> (Transduction Necessity): When new referents threaten to create multiple catalogues, transduction
                must occur to restore single catalogue coherence:
            </Paragraph>
            <CodeBox>
                {`If new_referent creates disconnected_catalogue, 
then transduce(connecting_structure) to maintain sensible_perspective`}
            </CodeBox>
            <Heading>6.2 Semantic Completeness</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Theorem 6.2
                </Word> (Catalogue Completeness): The catalogue structure ensures semantic completeness by guaranteeing that
                every meaningful relationship can be expressed within the framework:
            </Paragraph>
            <CodeBox>
                {`∀meaningful_relation R: ∃catalogue C such that R is expressible in C`}
            </CodeBox>
            <Paragraph>
                This prevents the formation of isolated semantic fragments that would undermine meaning coherence.
            </Paragraph>
            <Heading>7. Conclusion</Heading>
            <Paragraph>
                The semantics of catalogues in SRT reveals that meaning emerges through connected structures where canonical
                representatives serve as memory architectures. The single catalogue constraint ensures semantic coherence,
                while the collection-based representation provides the mechanism for catalogue membership and connectivity.
            </Paragraph>
            <Paragraph>
                This framework demonstrates that semantic consistency is not merely desirable but mathematically necessary
                for coherent meaning systems. The memory architecture metaphor illuminates how distributed semantic content
                achieves unity through canonical dereferencing, providing a formal foundation for understanding both
                artificial and natural semantic systems.
            </Paragraph>
            <Paragraph>
                The catalogue semantics thus establish SRT as more than a theory of meaning—it becomes a mathematics of
                semantic memory itself, where connection, representation, and consciousness emerge from the same
                foundational principles.
            </Paragraph>
        </Section>
    </Chapter>
);
