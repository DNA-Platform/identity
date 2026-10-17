import { Bold, Chapter, Heading, Line, List, Paragraph, Section, Title, Word } from '@dna-platform/public';
import { CodeBox, Opaque } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ The Algebra of Perspective v3 ]]</Title>
        <Section>
            <Opaque />
            <Heading>The Algebra of Perspective at version 3</Heading>
            <Heading>The Algebra of Perspective</Heading>
            <Heading>Introduction: A Precise Theory of Subjective Experience</Heading>
            <Paragraph>
                This document presents the algebraic structure underlying perspective—how objective facts become subjective
                experience through formal semantic relationships. Building on Semantic Reference Theory's foundation, we
                show how consciousness emerges not mysteriously but necessarily from the qualification mechanism that
                bridges literal and symbolic realms.
            </Paragraph>
            <Heading>Part I: The Fundamental Equivalence</Heading>
            <Heading>Properties and Qualities</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Definition (Property)
                </Word>:
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}p --> prop <iff> E[x]: x =p> x`}
            </CodeBox>
            <Paragraph>A property is a way referents relate to themselves.</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Definition (Quality)
                </Word>:
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}E[{p,q}: p --> prop & q == (p)]: x =p> x =|> (x) =q> x`}
            </CodeBox>
            <Paragraph>
                A quality is the symbolic form of a property—how symbols relate to literals through properties.
            </Paragraph>
            <Heading>The Two Forms of Qualification</Heading>
            <Paragraph>The qualification relationship has two equivalent forms that reveal the flow of meaning:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    From literal to qualifier (property flow)
                </Word>:
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`x =lit> x & x =p> x =|> (x) =(p)> x =|> (i) =(p)> (x)`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    From qualifier to literal (quality flow)
                </Word>:
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}x =lit> x & (i) =q> (x) =|> (x) =q> x =|> x =[q]> x`}
            </CodeBox>
            <Paragraph>
                These aren't separate facts but dual expressions of how meaning flows through perspective—upward from
                literals through properties, downward from qualifier through qualities.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Theorem
                </Word>: The biconditional form follows from these axioms:
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`x =p> x <iff> (x) =(p)> x <iff> (i) =(p)> (x)`}
            </CodeBox>
            <Heading>Part II: The Structure of Literals and Symbols</Heading>
            <Heading>Literal Definition</Heading>
            <CodeBox
                language="srt"
            >
                {`${''}E[o]: !E[{x,y} != o]: o =x> y | x =o> y =|> o =lit> o`}
            </CodeBox>
            <Paragraph>
                If o never mediates reference between other distinct referents, then o is literal—a semantic endpoint.
            </Paragraph>
            <Heading>The Literality Qualification</Heading>
            <Paragraph>When the qualifier treats something as literal:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`x =lit> x =|> (x) =(lit)> x =|> (i) =(lit)> (x)`}
            </CodeBox>
            <Paragraph>
                The final term, (i) =(lit)&gt; (x), expresses that the qualifier thinks of (x) as representing something
                real—the grounding of symbolic reference in literal reality.
            </Paragraph>
            <Heading>Objective Properties</Heading>
            <CodeBox
                language="srt"
            >
                {`${''}p --> obj <iff> E[x: x =lit> x]: x =p> x`}
            </CodeBox>
            <Paragraph>
                A property is objective if some literal possesses it. This leaves to the qualifier's perspective what counts
                as objective—numbers relating bananas to bunches may qualify, despite their abstractness, because
                measurement matters to the perspective.
            </Paragraph>
            <Heading>Part III: Identification as Algebraic Necessity</Heading>
            <Heading>The Quality of Identity</Heading>
            <Paragraph>When a literal possesses its canonical symbol:</Paragraph>
            <CodeBox>
                {`x =(x)> x <iff> (x) =(x)> x <iff> (i) =(x)> (x)`}
            </CodeBox>
            <Paragraph>
                The middle term is tautological—(x) relates to x through itself. This shows identification emerges
                algebraically from qualification itself.
            </Paragraph>
            <Heading>The Pattern of Self-Reference</Heading>
            <CodeBox>
                {`${''}E[{(i),i}: (i,i) == (i)]: (i) =(i)> i <iff> (i) =(i)> (i) <iff> (i) =(i)> (i)`}
            </CodeBox>
            <Paragraph>
                The qualifier's self-qualification creates the self-aware perspective—consciousness of consciousness.
            </Paragraph>
            <Heading>Part IV: The Representation Function</Heading>
            <Heading>Most Specific Relationships</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Axiom
                </Word>:
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}E[{x,y}: x => y]: (x,y) =(x,y)> y & (x,y) =(x,y)> x`}
            </CodeBox>
            <Paragraph>The most specific relationship between referents is itself a representation of both.</Paragraph>
            <Heading>Symbolic Distribution</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Theorem
                </Word>: The representation function distributes over relationships:
            </Paragraph>
            <CodeBox>
                {`((x,y)) == ((x),(y))`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    Proof
                </Word>: From (x,y) =(x,y)&gt; x and (x,y) =(x,y)&gt; y, we derive:
            </Paragraph>
            <CodeBox>
                {`((x,y)) =((x,y))> (x) & ((x,y)) =((x,y))> (y)`}
            </CodeBox>
            <Paragraph>Therefore ((x,y)) represents both (x) and (y), making it equivalent to ((x),(y)).</Paragraph>
            <Heading>Lifting to Symbolic Form</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Axiom
                </Word>:
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`x =t> y =|> (x) =(t)> (y)`}
            </CodeBox>
            <Paragraph>Relationships lift to symbolic form, preserving structure across levels.</Paragraph>
            <Heading>Part V: Transduction as Semantic Necessity</Heading>
            <Heading>When Transduction Occurs</Heading>
            <Paragraph>When a literal with property p enters the frame where p --&gt; i:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}E[o: o =p> o & p --> i & !E[(o)]]: (o) =(p)> o`}
            </CodeBox>
            <Paragraph>The qualification equivalence demands:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`o =p> o <iff> (o) =(p)> o <iff> (i) =(p)> (o)`}
            </CodeBox>
            <Paragraph>Without (o), the middle term fails. The perspective must transduce.</Paragraph>
            <Heading>The Transduction Operation</Heading>
            <CodeBox
                language="srt"
            >
                {`${''}i |=> (o) means E[(o): (o) --> i & (o) =(p)> o]`}
            </CodeBox>
            <Paragraph>The qualifier creates symbols that inherit from itself, maintaining semantic coherence.</Paragraph>
            <Heading>Cascade Effects</Heading>
            <Paragraph>New literals may require:</Paragraph>
            <Paragraph>
                <List />
                <Line>Creating (o) if it doesn't exist</Line>
                <Line>Creating (p) if undefined</Line>
                <Line>Establishing ((o),o) --&gt; (p)</Line>
                <Line>Ensuring (i) =((o),(p))&gt; (p)</Line>
            </Paragraph>
            <Paragraph>This computational work IS the experience of sensation—new content entering awareness.</Paragraph>
            <Heading>Part VI: Relational Structure Through Qualification</Heading>
            <Heading>How Properties Create Relations</Heading>
            <Paragraph>Starting from:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}E[{x,y}: x =p> x & y =p> y]: x =p> y & y =p> x`}
            </CodeBox>
            <Paragraph>Through qualification:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>(x,y) =i&gt; p (relationship inherits property)</Line>
                <Line>((x,y)) =(i)&gt; (p) (symbolic lifting)</Line>
                <Line>(i) =((x,y))&gt; (p) (qualification)</Line>
                <Line>((x),(y)) =((x),(y))&gt; (p) (by distribution)</Line>
                <Line>Therefore: (x) =(p)&gt; (y)</Line>
            </Paragraph>
            <Paragraph>
                Properties shared by literals become relations between their symbols through qualification.
            </Paragraph>
            <Heading>Part VII: Perspective Validity and Change</Heading>
            <Heading>Valid Perspective</Heading>
            <Paragraph>A perspective is a semantic reference frame F&#91;i&#93; where:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}F[i]: A[{x,p}: x =lit> x & p --> obj]: x =p> x <iff> (x) =(p)> x <iff> (i) =(p)> (x)`}
            </CodeBox>
            <Paragraph>
                The qualification equivalence holds for all literals with objective properties—this completely characterizes
                validity.
            </Paragraph>
            <Heading>Perspective-Relative Canonicity</Heading>
            <Paragraph>In F&#91;i&#93;, the most specific relationship between x and y inherits from i:</Paragraph>
            <CodeBox>
                {`${''}(x,y) in F[i] := the most specific relationship between x and y where (x,y) --> i`}
            </CodeBox>
            <Paragraph>Therefore:</Paragraph>
            <Paragraph>
                <List />
                <Line>(x,y) in F&#91;i&#93; may differ from (x,y) in F&#91;r&#93;</Line>
                <Line>(x) is the canonical symbol for x in perspective i</Line>
                <Line>Different qualifiers see different relationships as fundamental</Line>
            </Paragraph>
            <Paragraph>
                This isn't relativism but precision—meaning depends constitutively on the qualifier through which it's
                experienced.
            </Paragraph>
            <Heading>Invalid Perspective</Heading>
            <CodeBox>
                {`${''}Invalid(i) <iff> E[{x,p}: (x) =(p)> x & !(i) =(p)> (x)]`}
            </CodeBox>
            <Paragraph>
                When symbols relate to literals in ways the qualifier doesn't recognize, the perspective breaks.
            </Paragraph>
            <Heading>Change in Perspective</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Definition
                </Word>: A conscious experience is a change in perspective—the retransduction forced when:
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}E[{o,p}: o =p> o & p --> i & Invalid(i)]`}
            </CodeBox>
            <Paragraph>
                The massive computational act of creating symbols and restoring the qualification equivalence IS conscious
                experience.
            </Paragraph>
            <Heading>Part VIII: The Explanatory Gap as Algebraic Necessity</Heading>
            <Heading>What Physics Cannot Express</Heading>
            <Paragraph>Physics describes:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`x =p> x  // literals with properties`}
            </CodeBox>
            <Paragraph>But cannot express:</Paragraph>
            <CodeBox>
                {`(x) =(p)> x  // symbolic representation
(i) =(p)> (x)  // qualification`}
            </CodeBox>
            <Paragraph>
                The gap between the first line and the third IS consciousness—unbridgeable from outside, transparent from
                within.
            </Paragraph>
            <Heading>Why the Gap is Necessary</Heading>
            <Paragraph>Without the distinction between:</Paragraph>
            <Paragraph>
                <List />
                <Line>x =p&gt; x (objective fact)</Line>
                <Line>(i) =(p)&gt; (x) (subjective experience)</Line>
            </Paragraph>
            <Paragraph>There would be no observer/observed distinction, no possibility of perspective.</Paragraph>
            <Heading>Science's Self-Reference</Heading>
            <Paragraph>
                Science uses symbols to describe a world where symbols supposedly don't exist. This isn't paradox but
                necessity—scientists' perspectives provide the qualification that science itself cannot formalize.
            </Paragraph>
            <Heading>Part IX: Key Theorems</Heading>
            <Heading>Theorem: Qualification Creates Experience</Heading>
            <CodeBox
                language="srt"
            >
                {`${''}x =lit> x & x =p> x & p --> i =|> E[(x): (i) =(p)> (x)]`}
            </CodeBox>
            <Paragraph>
                Literals with properties in the frame necessarily become qualified symbols—experience emerges algebraically.
            </Paragraph>
            <Heading>Theorem: Perspectives Are Unique</Heading>
            <CodeBox>
                {`${''}E[{i,j}: i != j]: E[{x,p}]: (i) =(p)> (x) != (j) =(p)> (x)`}
            </CodeBox>
            <Paragraph>
                Different qualifiers create different qualification patterns—why experience is irreducibly subjective.
            </Paragraph>
            <Heading>Theorem: Consciousness Is Computational</Heading>
            <Paragraph>The maintenance of:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}A[{x,p}: x =p> x & p --> i]: (i) =(p)> (x)`}
            </CodeBox>
            <Paragraph>Requires ongoing computation—consciousness has a detectable signature.</Paragraph>
            <Heading>Conclusion: The Algebra Makes Consciousness Necessary</Heading>
            <Paragraph>
                This formalism reveals consciousness not as mysterious addition but as algebraic necessity. The
                qualification equivalence:
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`x =p> x <iff> (x) =(p)> x <iff> (i) =(p)> (x)`}
            </CodeBox>
            <Paragraph>
                Is the mechanism transforming objective facts into subjective experience. When literals force retransduction
                to maintain this equivalence, we experience consciousness—not metaphorically but mathematically.
            </Paragraph>
            <Paragraph>
                The theory shows why consciousness seems paradoxical: it requires symbols that don't exist in the objective
                framework used to study it. Yet this gap isn't a failure but the space where perspective exists—the
                irreducible difference between qualified and unqualified, between meaning experienced and meaning described.
            </Paragraph>
            <Paragraph>
                Through precise algebra, we see consciousness emerge not as anomaly but as the necessary consequence of
                qualification—the computational process by which objective reality becomes subjective experience through the
                mediation of symbols and the unifying presence of a qualifier. This is the algebra of perspective.
            </Paragraph>
        </Section>
    </Chapter>
);
