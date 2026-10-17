import { Bold, Chapter, Heading, Line, List, Paragraph, Section, Title, Word } from '@dna-platform/public';
import { CodeBox, Opaque } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ The Semantics of Temporal Experience: A Theory in SRT v2 ]]</Title>
        <Section>
            <Opaque />
            <Heading>The Semantics of Temporal Experience: A Theory in SRT at version 2</Heading>
            <Heading>The Semantics of Temporal Experience (Corrected)</Heading>
            <Heading>A Theory Using Proper SRT Syntax</Heading>
            <Heading>I. The Temporal Dichotomy</Heading>
            <Paragraph>Following SRT's pattern where dichotomy emerges from reference, we establish:</Paragraph>
            <CodeBox>
                {`d_time := temporal_dichotomy
now := present
then := absent

d_time == (now,then)
then == (!now)`}
            </CodeBox>
            <Paragraph>The absent further divides into a secondary dichotomy:</Paragraph>
            <CodeBox>
                {`then == (past|future)
past := before_now  
future := after_now`}
            </CodeBox>
            <Paragraph>
                This creates a trichotomy from dichotomy - the negative term contains its own distinction.
            </Paragraph>
            <Heading>II. The Now-Reference Pattern</Heading>
            <Paragraph>Within temporal reference, now serves as the universal subject:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`now =now> now     // Present is self-present
past =was> past   // Past refers to itself through "was"
future =will> future  // Future through "will"

// Inheritance structure
was -> now        // Past inherits from present
will -> now       // Future inherits from present`}
            </CodeBox>
            <Heading>III. Memory and Anticipation as Reference Types</Heading>
            <Paragraph>Rather than introduce new operators, we use SRT's typed reference:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`// Memory: present refers to past
now =remembers> past

// Anticipation: present refers to future  
now =anticipates> future

// These are distinct relationship types
remembers != anticipates
remembers -> r  // Both inherit from base reference
anticipates -> r`}
            </CodeBox>
            <Heading>IV. Temporal Frames and Perspective</Heading>
            <Paragraph>Using SRT's frame mechanism to capture temporal perspective:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}F[now]: // Present frame
  @ == now
  x => y means x =now> y
  (past) appears through remembers
  (future) appears through anticipates

F[was]: // Past frame (a remembered now)
  @ == was  
  x => y means x =was> y
  The old now appears as past
  
F[will]: // Future frame (an anticipated now)
  @ == will
  x => y means x =will> y  
  The old now will appear as past`}
            </CodeBox>
            <Heading>V. The Persistence Pattern</Heading>
            <Paragraph>Objects persist through temporal frames via canonical preservation:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}// In frame F[t1]:
x =persists> x'

// Persistence means same canonical across frames:
F[t1]: (x) == morning_star
F[t2]: (x') == morning_star

// But the instances differ:
x != x'  // Different temporal instances
(x) == (x')  // Same canonical identity`}
            </CodeBox>
            <Heading>VI. Temporal Flow as Frame Succession</Heading>
            <Paragraph>
                Following your insight about Einstein and perspective, temporal flow is frame transformation:
            </Paragraph>
            <CodeBox>
                {`${''}// Frame succession
F[t1]: now == t1
F[t2]: now == t2 & t1 == past

// What changes between frames:
// - The value of now
// - What counts as past/future
// - Dynamic properties of objects

// What persists:
// - Canonical identities
// - The structure of temporal reference
// - The narrative coherence through (i)`}
            </CodeBox>
            <Heading>VII. The Consciousness-Time Connection</Heading>
            <Paragraph>
                As you noted, consciousness is change in perspective while maintaining narrative coherence:
            </Paragraph>
            <CodeBox>
                {`${''}i := perspective
(i) := narrative_self

// Across temporal frames:
F[t1]: i == perspective_at_t1 & (i) == self
F[t2]: i == perspective_at_t2 & (i) == self

// The perspective changes but the canonical self persists
i != i' but (i) == (i')`}
            </CodeBox>
            <Heading>VIII. Causal Reference</Heading>
            <Paragraph>Causation emerges as a specific type of temporal reference:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`cause =causes> effect

// Causal constraints using SRT syntax:
cause =was> cause  // Causes are past
effect =will> effect | effect =now> effect  // Effects are future or present
cause =causes> effect =|> cause =precedes> effect`}
            </CodeBox>
            <Heading>IX. The Temporal Reference Hierarchy</Heading>
            <Paragraph>All temporal relationships inherit from the base temporal reference:</Paragraph>
            <CodeBox>
                {`temporal -> r
now -> temporal
was -> temporal  
will -> temporal
remembers -> temporal
anticipates -> temporal
causes -> temporal
persists -> temporal`}
            </CodeBox>
            <Heading>X. Key Theorems in Temporal SRT</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Theorem 1: Present Self-Reference
                </Word>
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`now =now> now & (now) == now`}
            </CodeBox>
            <Paragraph>The present is the only temporal referent that equals its own canonical.</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Theorem 2: Memory Reconstruction
                </Word>
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}now =remembers> past =|> E[trace]: trace =represents> past`}
            </CodeBox>
            <Paragraph>Memory requires traces in the present that represent the absent past.</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Theorem 3: Causal Asymmetry
                </Word>
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`x =causes> y =|> !(y =causes> x)`}
            </CodeBox>
            <Paragraph>Causation cannot be symmetric.</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Theorem 4: Persistence Identity
                </Word>
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`x =persists> x' <iff> (x) == (x') & x != x'`}
            </CodeBox>
            <Paragraph>Persistence preserves canonical identity while instances differ.</Paragraph>
            <Heading>XI. Synthesis: Time Through Reference</Heading>
            <Paragraph>
                This corrected formulation shows how temporal semantics emerges entirely within SRT's existing machinery:
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        No new operators needed
                    </Word> - just typed reference (=t&gt;)
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Frames handle perspective shifts
                    </Word> - F&#91;now&#93;, F&#91;was&#93;, F&#91;will&#93;
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Canonicals preserve identity
                    </Word> - (x) remains constant across time
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Dichotomy generates structure
                    </Word> - present/absent, then past/future
                </Line>
            </Paragraph>
            <Paragraph>
                The key insight from your correction: temporal change is perspectival change. As frames shift (i to i'), the
                value of now changes, dynamic properties update, but canonical identities and narrative coherence persist
                through (i).
            </Paragraph>
            <Paragraph>
                This aligns with Einstein's insight - time is relative to reference frame. In SRT, temporal meaning emerges
                from how references transform across perspectival frames while maintaining structural coherence.
            </Paragraph>
        </Section>
    </Chapter>
);
