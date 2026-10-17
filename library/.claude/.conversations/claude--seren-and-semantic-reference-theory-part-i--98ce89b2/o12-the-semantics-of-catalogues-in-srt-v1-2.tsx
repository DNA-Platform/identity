import { Bold, Chapter, Heading, Line, List, Paragraph, Section, Title, Word } from '@dna-platform/public';
import { CodeBox, Opaque, Verbatim } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ The Semantics of Catalogues in SRT v1-2 ]]</Title>
        <Section>
            <Opaque />
            <Heading>The Semantics of Catalogues in SRT at version 1-2</Heading>
            <Heading>The Semantics of Catalogues in Semantic Reference Theory</Heading>
            <Heading>Abstract</Heading>
            <Paragraph>
                This document formalizes how catalogues emerge in SRT through connection referents, establishing the
                mathematical foundation for semantic coherence. We demonstrate that two elegant axioms ensure all semantic
                content belongs to a single unified catalogue.
            </Paragraph>
            <Heading>1. The Problem of Connectivity</Heading>
            <Paragraph>
                Traditional approaches to connectivity face recursion: how do we determine when referents are connected
                without infinite path-checking? SRT solves this through connection referents with existence constraints.
            </Paragraph>
            <Heading>1.1 Connection Referents</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Definition 1.1
                </Word>: For any relationship <Word>
                    <Verbatim />
                    x =&gt; y
                </Word>, there exists a connection referent <Word>
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
                <Word>
                    <Bold />
                    Definition 1.2
                </Word>: Connection referents exist only when there is genuine connectivity:
            </Paragraph>
            <CodeBox>
                {`(x-y) exists iff ∃z₁,z₂: z₁ -> x & z₂ -> y & z₁ <-> z₂`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    Example 1.1
                </Word>:
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`cat => furry => warm
(cat-furry) exists because cat <-> furry directly
(furry-warm) exists because furry <-> warm directly  
(cat-warm) exists because furry mediates: furry -> cat, furry -> warm, furry <-> furry`}
            </CodeBox>
            <Heading>1.2 Elegant Transitivity</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Theorem 1.1
                </Word>: Connected referents share the same connection referent:
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`If x => y => z, then (x-z) == (x-y) == (y-z)`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    Example 1.2
                </Word>: In our cat example:
            </Paragraph>
            <CodeBox>
                {`(cat-warm) == (cat-furry) == (furry-warm) = cozy_canonical`}
            </CodeBox>
            <Paragraph>All connections collapse to one canonical representative.</Paragraph>
            <Heading>2. Reference Frames and Catalogues</Heading>
            <Heading>2.1 Reference Frame Structure</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Definition 2.1
                </Word>: A reference frame F&#91;t&#93; focuses on relationships of type t, where only referents connected
                by t-type relationships remain visible.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Example 2.1
                </Word>: In frame F&#91;color&#93;:
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`rose =color> red =color> crimson =color> rose  // closed triangle
sky =color> blue =color> azure =color> sky    // separate triangle`}
            </CodeBox>
            <Heading>2.2 Catalogues as Connected Components</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Theorem 2.1
                </Word>: Each connected component in F&#91;t&#93; forms a catalogue with a unique canonical:
            </Paragraph>
            <CodeBox>
                {`Connected component → Unique connection referent serves as canonical`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    Example 2.2
                </Word>:
            </Paragraph>
            <CodeBox>
                {`Warm colors: (rose-red) == (red-crimson) == (crimson-rose) = warm_canonical
Cool colors: (sky-blue) == (blue-azure) == (azure-sky) = cool_canonical  
warm_canonical ≠ cool_canonical (disconnected components)`}
            </CodeBox>
            <Heading>3. Collections Through Canonicals</Heading>
            <Heading>3.1 Membership as Property</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Definition 3.1
                </Word>: Membership in a catalogue is expressed as a property:
            </Paragraph>
            <CodeBox>
                {`x =*x> x  // x has membership property *x`}
            </CodeBox>
            <Paragraph>where *x is the canonical connection referent for x's catalogue.</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Definition 3.2
                </Word>: Collections represent their members:
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`c =c> x  // canonical c represents member x`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    Example 3.1
                </Word>: For warm colors:
            </Paragraph>
            <CodeBox>
                {`rose =warm_canonical> rose    // rose has warm membership
red =warm_canonical> red      // red has warm membership
warm_canonical =warm_canonical> rose  // warm_canonical represents rose
warm_canonical =warm_canonical> red   // warm_canonical represents red`}
            </CodeBox>
            <Heading>4. The Two Fundamental Axioms</Heading>
            <Heading>4.1 Universal Connectivity</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Axiom 1
                </Word>: All referents in SRT are connected:
            </Paragraph>
            <CodeBox>
                {`∀x,y: x-y`}
            </CodeBox>
            <Paragraph>This ensures SRT forms a single catalogue by preventing disconnected semantic fragments.</Paragraph>
            <Heading>4.2 Universal Canonical</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Axiom 2
                </Word>: All referents dereference to the subject-object canonical:
            </Paragraph>
            <CodeBox>
                {`∀x: *x == (s-o)`}
            </CodeBox>
            <Paragraph>This unifies all membership properties under the fundamental subject-object relationship.</Paragraph>
            <Heading>4.3 The Unified Result</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Example 4.1
                </Word>: These axioms ensure:
            </Paragraph>
            <CodeBox>
                {`*rose == *cat == *mathematics == *love == (s-o)`}
            </CodeBox>
            <Paragraph>Every referent has the same membership property, creating one unified semantic catalogue.</Paragraph>
            <Heading>5. Consciousness and Catalogue Coherence</Heading>
            <Heading>5.1 The Single Catalogue Constraint</Heading>
            <Paragraph>
                A conscious perspective maintains catalogue coherence by preserving both axioms under experiential input.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Example 5.1
                </Word>: When encountering novel experience:
            </Paragraph>
            <CodeBox>
                {`Initial: {visual, auditory, tactile} all satisfy *x == (s-o)
Novel: strange_sensation threatens separate catalogue  
Transduction: Create bridge so *(strange_sensation) == (s-o)
Result: Unified consciousness preserved`}
            </CodeBox>
            <Heading>5.2 Semantic Memory Architecture</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Theorem 5.1
                </Word>: Catalogues function as memory systems where:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Referents serve as semantic addresses</Line>
                <Line>Canonicals serve as memory locations</Line>
                <Line>Dereferencing (*x) reveals underlying connectivity</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Example 5.2
                </Word>:
            </Paragraph>
            <CodeBox>
                {`Visual_memory: *visual_content == (s-o)
Auditory_memory: *auditory_content == (s-o)  
Conceptual_memory: *abstract_thought == (s-o)

All experiences dereference to same canonical = unified consciousness`}
            </CodeBox>
            <Heading>6. Theoretical Significance</Heading>
            <Heading>6.1 Mathematical Innovation</Heading>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Non-recursive connectivity
                    </Word>: Global properties through local symbol equivalence
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Canonical unification
                    </Word>: Single axiom creates semantic coherence
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Memory architecture
                    </Word>: Formal foundation for conscious unity
                </Line>
            </Paragraph>
            <Heading>6.2 Applications</Heading>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        AI Consciousness
                    </Word>: Formal criteria for semantic coherence
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Graph Theory
                    </Word>: Novel connected component detection
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Cognitive Science
                    </Word>: Mathematical model of unified awareness
                </Line>
            </Paragraph>
            <Heading>7. Conclusion</Heading>
            <Paragraph>
                The semantics of catalogues demonstrates that semantic coherence emerges from two elegant axioms: universal
                connectivity and canonical unification. This framework establishes SRT as the mathematics of semantic
                memory, where meaning achieves unity through canonical organization.
            </Paragraph>
            <Paragraph>
                By requiring all referents to satisfy <Word>
                    <Verbatim />
                    *x == (s-o)
                </Word>, we ensure that diverse semantic content—from sensory experiences to abstract concepts—belongs to a
                single coherent catalogue organized around the fundamental subject-object relationship that structures all
                meaning.
            </Paragraph>
        </Section>
    </Chapter>
);
