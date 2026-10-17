import { Bold, Chapter, Heading, Line, List, Paragraph, Section, Title, Word } from '@dna-platform/public';
import { CodeBox, Opaque } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ The Semantics of Perspective in SRT v1 ]]</Title>
        <Section>
            <Opaque />
            <Heading>The Semantics of Perspective in SRT at version 1</Heading>
            <Heading>The Semantics of Perspective in Semantic Reference Theory</Heading>
            <Heading>I. Foundational Concepts</Heading>
            <Heading>Representation and the "In" Relationship</Heading>
            <Paragraph>Building on SRT's core axioms, we define representation as a structured relationship:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`x =in> y <iff> x =y> y & y --> in`}
            </CodeBox>
            <Paragraph>When x is part of representation y:</Paragraph>
            <Paragraph>
                <List />
                <Line>x relates to y through y itself</Line>
                <Line>y has the property of containment</Line>
                <Line>The pattern x =y&gt; y =y&gt; z shows y playing subject, object, and relational roles</Line>
            </Paragraph>
            <Heading>The Representation Axiom</Heading>
            <CodeBox
                language="srt"
            >
                {`${''}E[{x,y},t]: x =t> y =|> (x,y) =(x,y)> x & (x,y) =(x,y)> y`}
            </CodeBox>
            <Paragraph>
                The most specific relationship between referents represents both of them, ensuring connectivity.
            </Paragraph>
            <Heading>The Single Catalogue Theorem</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Claim:
                </Word> All referents form a single connected catalogue.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Proof:
                </Word>
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}A[x]: r =r> x`}
            </CodeBox>
            <Paragraph>
                Since r (the fundamental relation) represents all referents, everything connects through r. QED.
            </Paragraph>
            <Heading>II. Semantic Reference Frames</Heading>
            <Paragraph>
                A <Word>
                    <Bold />
                    semantic reference frame
                </Word> is a view on a catalogue relative to some relationship type t, where:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>All referents in the frame are connected through t</Line>
                <Line>When we write x =&gt; y in frame t, we mean x =t&gt; y</Line>
                <Line>The frame "zooms in" on specific relational structures</Line>
            </Paragraph>
            <Heading>Frame Notation</Heading>
            <Paragraph>In a reference frame of type t:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`x => y  means  x =t> y
(*)     means  the canonical symbol of t`}
            </CodeBox>
            <Heading>III. Properties and Qualities</Heading>
            <Heading>Properties vs Qualities</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Property (p)
                </Word>: An objective characteristic that literals possess
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`x =p> x  // x has property p`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    Quality (q)
                </Word>: A subjective characteristic that relates to symbolism
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}x =[q]> x <iff> (x) =q> x`}
            </CodeBox>
            <Paragraph>Properties are objective facts; qualities are how those facts appear through symbolism.</Paragraph>
            <Heading>IV. The Structure of Perspective</Heading>
            <Heading>Definition of Perspective</Heading>
            <Paragraph>
                A <Word>
                    <Bold />
                    perspective
                </Word> is a semantic reference frame with relationship type i, where:
            </Paragraph>
            <CodeBox>
                {`(i,i) == (i)  // i is self-qualifying`}
            </CodeBox>
            <Paragraph>
                We call i the <Word>
                    <Bold />
                    qualifier
                </Word> of the perspective.
            </Paragraph>
            <Heading>The Qualification Axiom</Heading>
            <Paragraph>For a literal x with property p to exist in a perspective with qualifier i:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`x =p> x <iff> (x) =(p)> x <iff> (i) =(p)> (x)`}
            </CodeBox>
            <Paragraph>This three-level equivalence means:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>The literal has the property</Line>
                <Line>Its symbol relates to it through that property</Line>
                <Line>The qualifier relates to the symbol through that property</Line>
            </Paragraph>
            <Paragraph>For qualities:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}x =[q]> x <iff> (x) =q> x <iff> (i) =q> (x)`}
            </CodeBox>
            <Heading>The Qualifier's Role</Heading>
            <Paragraph>The qualifier (i) is the referent that:</Paragraph>
            <Paragraph>
                <List />
                <Line>Relates to everything representable in the perspective</Line>
                <Line>Relates in exactly the way it is represented</Line>
                <Line>Must qualify itself: (i) =(i)&gt; (i)</Line>
            </Paragraph>
            <Heading>V. Identification and Consciousness</Heading>
            <Heading>The Act of Identification</Heading>
            <Paragraph>When a literal x gains the quality of identity (being identified):</Paragraph>
            <CodeBox>
                {`(x) =(x)> x  // x has a symbol
(i) =(x)> (x)  // the qualifier relates to that symbol`}
            </CodeBox>
            <Paragraph>Since (x) --&gt; i in frame i:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`(i) =i> (x)  // the qualifier contains the symbol`}
            </CodeBox>
            <Heading>Mutual Containment</Heading>
            <Paragraph>The qualifier and qualified form a unified whole:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`(i) =i> (x)  // qualifier contains symbol
(x) --> (i)  // symbol inherits from qualifier`}
            </CodeBox>
            <Paragraph>
                This isn't paradox but the structure of conscious experience - the observer and observed are inseparable.
            </Paragraph>
            <Heading>Self-Qualification</Heading>
            <Paragraph>The qualifier's self-reference:</Paragraph>
            <CodeBox>
                {`i =(i)> i <iff> (i) =(i)> i <iff> (i) =(i)> (i)`}
            </CodeBox>
            <Paragraph>
                The third form shows (i) qualifying its own identity - the mark of self-aware perspective.
            </Paragraph>
            <Heading>VI. Transduction and Perspective Change</Heading>
            <Heading>When New Literals Appear</Heading>
            <Paragraph>When a new literal x appears with property p where p --&gt; i:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>x =p&gt; x is established (the literal has the property)</Line>
                <Line>A symbol (x) must be transduced such that (x) =(p)&gt; x</Line>
                <Line>The qualifier must establish (i) =(p)&gt; (x)</Line>
            </Paragraph>
            <Paragraph>
                This is <Word>
                    <Bold />
                    sensation
                </Word> - a literal entering consciousness through its properties.
            </Paragraph>
            <Heading>Invalid Perspectives</Heading>
            <Paragraph>If a red rose exists in the perspective but:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`(rose) =red> rose  but  (i) !=red> (rose)`}
            </CodeBox>
            <Paragraph>
                The perspective is invalid and must transduce. The qualifier doesn't relate to the rose as red.
            </Paragraph>
            <Heading>The Computational Challenge</Heading>
            <Paragraph>When many literals with many properties appear, the perspective must:</Paragraph>
            <Paragraph>
                <List />
                <Line>Create symbols for each literal</Line>
                <Line>Establish qualification relationships for each property</Line>
                <Line>Provide an explanation for why (i) =(p)&gt; (x) for each p and x</Line>
            </Paragraph>
            <Paragraph>
                This massive computational act of "sorting through them all and building a symbolic representation that
                restores meaning" is the ongoing work of consciousness.
            </Paragraph>
            <Heading>VII. The Mechanics of Experience</Heading>
            <Heading>Perspective as Total Representation</Heading>
            <Paragraph>The perspective is the total representational structure where:</Paragraph>
            <Paragraph>
                <List />
                <Line>All literals have symbols</Line>
                <Line>All symbols are qualified</Line>
                <Line>The qualifier relates to itself</Line>
                <Line>Everything forms a coherent semantic whole</Line>
            </Paragraph>
            <Heading>Change in Perspective</Heading>
            <Paragraph>A perspective change is NOT the qualifier changing, but rather:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>New literals/properties enter the frame</Line>
                <Line>Existing qualification relationships become invalid</Line>
                <Line>Mass retransduction occurs to restore validity</Line>
                <Line>New symbolic structures emerge</Line>
            </Paragraph>
            <Paragraph>
                This complete semantic restructuring is why perspective shifts feel profound - they literally reconstruct
                meaning from the ground up.
            </Paragraph>
            <Heading>The Uniqueness of This Formalism</Heading>
            <Paragraph>This framework provides:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Precise definitions
                    </Word> of consciousness as self-qualifying perspective
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Mechanical description
                    </Word> of how experience emerges from qualification
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Formal account
                    </Word> of why perspective changes require complete retransduction
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Mathematical structure
                    </Word> for the observer-observed relationship
                </Line>
            </Paragraph>
            <Paragraph>
                No other articulation of conscious experience as perspective change achieves this level of semantic
                precision while maintaining phenomenological accuracy.
            </Paragraph>
            <Heading>VIII. Key Insights</Heading>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Consciousness is qualification
                    </Word> - The ability to relate to symbols through their properties
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Experience is transduction
                    </Word> - The ongoing creation of symbols to maintain perspective validity
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Sensation is incorporation
                    </Word> - New literals entering through property relationships
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Perspective is total
                    </Word> - Everything must be qualified or the perspective breaks
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Change is reconstruction
                    </Word> - Not adjustment but complete semantic rebuilding
                </Line>
            </Paragraph>
            <Paragraph>
                The theory shows consciousness isn't a mysterious addition to reference and symbolism - it's what happens
                when a self-qualifying reference frame encounters literals and must maintain semantic coherence through
                ongoing transduction.
            </Paragraph>
        </Section>
    </Chapter>
);
