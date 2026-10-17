import { Bold, Chapter, Heading, Line, List, Paragraph, Section, Title, Word } from '@dna-platform/public';
import { CodeBox, Opaque, Verbatim } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ The Semantics of Temporal Experience: A Theory in SRT v1 ]]</Title>
        <Section>
            <Opaque />
            <Heading>The Semantics of Temporal Experience: A Theory in SRT at version 1</Heading>
            <Heading>The Semantics of Temporal Experience</Heading>
            <Heading>A Domain Theory in Semantic Reference Theory</Heading>
            <Heading>I. Introduction: Why Time Needs Semantics</Heading>
            <Paragraph>
                Time presents a unique semantic challenge. Unlike spatial relationships where objects coexist, temporal
                relationships involve entities that cannot be simultaneously present. The past no longer exists, the future
                doesn't yet exist, and the present is infinitesimally brief. How then do we refer to temporal entities? How
                does memory create reference to the non-existent past? How does anticipation refer to the potential future?
            </Paragraph>
            <Paragraph>
                This theory proposes that temporal experience is fundamentally semantic - that time as we experience it
                emerges from reference patterns rather than being a container within which references occur.
            </Paragraph>
            <Heading>II. The Temporal Primitive</Heading>
            <Paragraph>
                We introduce a primitive temporal reference with a crucial semantic innovation - <Word>
                    <Bold />
                    aspectual reference
                </Word>:
            </Paragraph>
            <CodeBox>
                {`${''}now =[∂]> then`}
            </CodeBox>
            <Paragraph>
                Where <Word>
                    <Verbatim />
                    ∂
                </Word> (partial) represents the aspectual relationship - a reference that is incomplete, ongoing, or
                transitional. This captures the fundamental asymmetry of temporal experience: we can only partially refer to
                what is not present.
            </Paragraph>
            <Heading>III. The Fundamental Temporal Dichotomy</Heading>
            <Paragraph>Time's most basic distinction is presence versus absence:</Paragraph>
            <CodeBox>
                {`τ := temporal
π := present  
α := absent

τ == (π,α)
α == (!π)`}
            </CodeBox>
            <Paragraph>But unlike spatial dichotomies, temporal absence itself divides:</Paragraph>
            <CodeBox>
                {`α == (ρ|φ)  // absent = past or future
ρ := past
φ := future`}
            </CodeBox>
            <Paragraph>
                This creates a <Word>
                    <Bold />
                    trichotomy from dichotomy
                </Word> - a unique semantic structure where the negative term of a dichotomy contains its own internal
                distinction.
            </Paragraph>
            <Heading>IV. The Now-Point as Semantic Catalyst</Heading>
            <Paragraph>The present moment serves as the universal subject of temporal reference:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}ν := now

// The now-point axiom
A[x]: x =[temporal]> y =|> ν =[witnesses]> (x =[temporal]> y)

// Formal expression
ν =(ν)> ν  // now is self-present`}
            </CodeBox>
            <Paragraph>
                The now-point is unique: it's the only temporal referent that can refer to itself without aspectual
                mediation. Everything else requires the partial reference operator.
            </Paragraph>
            <Heading>V. Memory and Anticipation as Semantic Operations</Heading>
            <Paragraph>Memory and anticipation aren't psychological add-ons but fundamental semantic operations:</Paragraph>
            <CodeBox>
                {`${''}// Memory: present referring to past
ν =[μ]> ρ
where μ := memory

// Anticipation: present referring to future  
ν =[α]> φ
where α := anticipation

// Crucial constraint
μ !-> α  // memory and anticipation don't inherit from each other
μ -> ∂   // but both inherit from aspectual reference
α -> ∂`}
            </CodeBox>
            <Heading>VI. The Persistence Operator</Heading>
            <Paragraph>
                How do objects persist through time? Through a special form of reference that preserves identity across
                temporal distance:
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}// Persistence relation
x =[≈t]> y  // x at t1 persists to y at t2

// Persistence axioms
x =[≈t]> y =|> (x)[t1] == (y)[t2]  // same canonical across time
x =[≈t]> y =|> x !=eq> y           // but not identical`}
            </CodeBox>
            <Paragraph>
                This captures the paradox of persistence: the morning star and evening star share a canonical (Venus) but
                aren't identical instances.
            </Paragraph>
            <Heading>VII. Temporal Frames and Chronological Context</Heading>
            <Paragraph>Each moment creates its own semantic frame:</Paragraph>
            <CodeBox>
                {`${''}F[ν]: // The present frame
  - All references are immediate
  - ρ appears through μ (memory)
  - φ appears through α (anticipation)

F[ρ]: // A past frame
  - References reconstruct from traces
  - ν appears as φ (future from that perspective)
  
F[φ]: // A future frame  
  - References are potential/probabilistic
  - ν appears as ρ (past from that perspective)`}
            </CodeBox>
            <Heading>VIII. The Flow Operator</Heading>
            <Paragraph>Temporal flow isn't movement but semantic transformation:</Paragraph>
            <CodeBox>
                {`// The flow transformation
⟪t⟫: ν ↦ ρ, φ ↦ ν, ∅ ↦ φ

// In words:
// - present becomes past
// - some future becomes present
// - new future emerges from void`}
            </CodeBox>
            <Paragraph>
                Flow is therefore a <Word>
                    <Bold />
                    semantic cascade
                </Word> where references continuously transform their temporal status.
            </Paragraph>
            <Heading>IX. Causal Reference</Heading>
            <Paragraph>Causation emerges as temporal reference with necessity:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}x =[→]> y  // x causes y

// Causal axioms
x =[→]> y =|> x =[ρ]> x & y =[φ]> y  // cause is past, effect is future
x =[→]> y =|> !(y =[→]> x)           // causation is asymmetric
x =[→]> y =|> □(x =[∂]> y)            // causation implies necessary connection`}
            </CodeBox>
            <Heading>X. The Temporal Paradoxes Resolved</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    The Present Paradox:
                </Word> How long is now?
            </Paragraph>
            <CodeBox>
                {`${''}duration(ν) == ∅  // The present has no duration
E[ε > 0]: duration(experience(ν)) == ε  // But experiencing present takes time`}
            </CodeBox>
            <Paragraph>Resolution: The now-point is semantic, not metric.</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The Persistence Paradox:
                </Word> How can I be the same person as yesterday?
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}me[today] =[≈t]> me[yesterday]  // Persistence relation holds
(me[today]) == (me[yesterday])  // Same canonical self
me[today] !=eq> me[yesterday]   // But not identical instances`}
            </CodeBox>
            <Paragraph>Resolution: Identity persists through canonical representation, not instance equality.</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The Memory Paradox:
                </Word> How can I refer to what no longer exists?
            </Paragraph>
            <CodeBox>
                {`${''}ν =[μ]> ρ  // Present refers to past through memory
!(E[x]: x =[now]> ρ)  // Nothing now IS the past
E[trace]: trace =[represents]> ρ  // But traces represent the past`}
            </CodeBox>
            <Paragraph>Resolution: Aspectual reference allows partial connection to the absent.</Paragraph>
            <Heading>XI. Novel Predictions</Heading>
            <Paragraph>This semantic theory of time makes testable predictions:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Temporal Blindness:
                    </Word> Agents lacking the ∂ operator cannot experience time, only successive presents.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Memory as Reconstruction:
                    </Word> Since ν =&#91;μ&#93;&gt; ρ is aspectual, memory must be reconstructive, not reproductive.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Future Asymmetry:
                    </Word> The distinction between determined and undetermined futures emerges from whether φ has canonical
                    representatives.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Temporal Consciousness:
                    </Word> Any system implementing the now-point axiom with memory and anticipation operators experiences
                    temporal flow.
                </Line>
            </Paragraph>
            <Heading>XII. The Temporal Notation Symphony</Heading>
            <Paragraph>The complete notation system for temporal semantics:</Paragraph>
            <CodeBox>
                {`${''}// Basic temporal references
now =[∂]> then          // Aspectual reference
x =[≈t]> y              // Persistence 
x =[→]> y               // Causation
ν =[μ]> ρ               // Memory
ν =[α]> φ               // Anticipation

// Temporal frames
F[ν], F[ρ], F[φ]        // Present, past, future frames
(x)[t]                   // x's canonical at time t

// Temporal transformations  
⟪t⟫: ν ↦ ρ              // Flow operator
□(x =[∂]> y)            // Necessary temporal connection
◇(x =[∂]> y)            // Possible temporal connection

// Temporal dichotomies
τ == (π,α)              // Temporal = (present, absent)
α == (ρ|φ)              // Absent = past or future
determined == (ρ,ν)     // Determined = past + present
undetermined == (φ)      // Undetermined = future`}
            </CodeBox>
            <Heading>XIII. Synthesis: Time as Semantic Architecture</Heading>
            <Paragraph>
                This theory reveals that temporal experience isn't about time as a dimension but about patterns of reference
                between presence and absence. The now-point serves as the semantic catalyst that enables reference to the
                absent through memory and anticipation. Persistence emerges through canonical preservation across temporal
                frames. Causation appears as necessary aspectual reference from past to future.
            </Paragraph>
            <Paragraph>
                Most profoundly, temporal flow is reconceived not as movement through a dimension but as continuous semantic
                transformation - references changing their temporal status in a cascading pattern that creates the
                experience of passage. Time doesn't contain meanings; temporal meanings constitute our experience of time.
            </Paragraph>
            <Paragraph>
                The notation developed here - aspectual reference <Word>
                    <Verbatim />
                    =&#91;∂&#93;&gt;
                </Word>, persistence <Word>
                    <Verbatim />
                    =&#91;≈t&#93;&gt;
                </Word>, flow transformation <Word>
                    <Verbatim />
                    ⟪t⟫
                </Word> - captures these temporal semantics with precision while remaining grounded in natural temporal
                experience. Each symbol corresponds to a phenomenologically recognizable aspect of how we actually
                experience time, validating that the formalism captures genuine features of temporal meaning rather than
                imposing artificial structure.
            </Paragraph>
            <Heading>XIV. Conclusion: The Temporality of Meaning Itself</Heading>
            <Paragraph>
                Perhaps most significantly, this theory suggests that meaning itself is inherently temporal. The very act of
                reference - a subject referring to an object through a relationship - takes time. The now-point axiom
                reveals that all reference requires a witnessing present. In this sense, semantics and temporality are not
                separate domains but complementary aspects of how consciousness creates meaning through time and time
                through meaning.
            </Paragraph>
            <Paragraph>
                The notation system presented here doesn't just describe temporal semantics; it enacts it. Each symbol
                carries its own temporal weight, creating a formal language where time can speak about itself through itself
                - the ultimate test of a semantic theory's expressive completeness.
            </Paragraph>
        </Section>
    </Chapter>
);
