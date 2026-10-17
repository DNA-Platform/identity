import { Chapter, Heading, Line, List, Paragraph, Section, Title, Word } from '@dna-platform/public';
import { CodeBox, Opaque, Verbatim } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ Semantic Structure of Dichotomy in SRT v9 ]]</Title>
        <Section>
            <Opaque />
            <Heading>Semantic Structure of Dichotomy in SRT at version 9</Heading>
            <Heading>The Semantics of Dichotomy: The (Dichotomy) Dichotomy</Heading>
            <Heading>Definitions</Heading>
            <CodeBox>
                {`d := dichotomy
m := monotony  
im := impossibility`}
            </CodeBox>
            <Heading>Core d/m Structure</Heading>
            <Heading>Fundamental Identities</Heading>
            <CodeBox>
                {`// The core identity relationships
m == (!d)                  // monotony IS the symbol (!d)
d == (d,m)                 // dichotomy IS the most specific relationship between d and m
m == d|m                   // monotony IS the monotony of the (d,m) dichotomy!

// Just as:
// temp == h|c              // temperature is the monotony of (hot,cold)
// m == d|m                 // monotony is the monotony of (dichotomy,monotony)`}
            </CodeBox>
            <Heading>The Complete Identity Structure</Heading>
            <CodeBox>
                {`// The three aspects of the d/m dichotomy:
d == (d,m)                 // dichotomy IS the distinction itself
m == (!d)                  // monotony IS not-dichotomy  
m == d|m                   // monotony IS the undifferentiated union

// This creates a perfect self-reference:
// - The property of being undifferentiated (m)
// - IS the undifferentiated state (d|m) 
// - Of the distinction between differentiated and undifferentiated (d,m)

// Parallel to temperature:
temp == h|c                // temperature IS the monotony of (h,c)
(h,c) -> d                 // (h,c) is a dichotomy
h&c -> im                  // contradiction is impossible`}
            </CodeBox>
            <Heading>Property Relationships</Heading>
            <CodeBox
                language="srt"
            >
                {`// Since d == (d,m), we can substitute:
d =d> d                    // becomes d =(d,m)> d - d relates to itself through the d,m relationship
m =d> m                    // becomes m =(d,m)> m - m relates to itself through the d,m relationship

// The monotony property
m =m> m                    // m is monotonous
d =m> d                    // d has monotony (before distinction)

// But wait, if m == (!d), what does m =m> m mean?
m =m> m                    // m is monotonous
(!d) =(!d)> (!d)          // Same statement with substitution
// This says monotony/not-dichotomy is self-referential

// The dichotomy property  
d =(d,m)> d                // d is dichotomous (through its relationship with m)
m !=(d,m)> m               // m is not dichotomous? But we just said m =d> m above...

// Resolution: Both d and m are IN the dichotomy
d =(d)> d                  // d is part of the dichotomy
m =(d)> m                  // m is part of the dichotomy

// But their properties differ:
d has the property of creating distinction
m has the property of lacking distinction`}
            </CodeBox>
            <Heading>Structural Relationships</Heading>
            <CodeBox>
                {`// Union and intersection
d|m -> m                   // Their union is monotony
d&m -> im                  // Their intersection is impossibility

// Negation rules (d is canonical)
!!d == d                   // Double negation returns to d
!m is non-canonical        // Must use d instead of !m`}
            </CodeBox>
            <Heading>Impossibility Semantics</Heading>
            <CodeBox
                language="srt"
            >
                {`${''}// Impossibility as a canonical
im =im> [im]               // im represents its canonical
[im] =[im]> t              // The canonical has type t
A[x,y]: x !=t> y           // But nothing has type t

// Applied to d&m
d&m -> im                  // Being both dichotomous and monotonous
A[x]: x !=im> x            // Nothing can be impossible`}
            </CodeBox>
            <Heading>Application to Temperature (hot/cold)</Heading>
            <Heading>Setup</Heading>
            <CodeBox>
                {`h := hot
c := cold  
temp := temperature`}
            </CodeBox>
            <Heading>Fundamental Identities</Heading>
            <CodeBox>
                {`// The core identity relationships
temp == h|c                // temperature IS the monotony (undifferentiated)
c == (!h)                  // cold IS the symbol (!h) when h is canonical

// The dichotomy structure
(h,c) -> d                 // The pair (h,c) is a type of dichotomy
// Note: We DON'T say h == (h,c) because h is not the dichotomy itself`}
            </CodeBox>
            <Heading>The Key Difference from d/m</Heading>
            <Paragraph>For d/m:</Paragraph>
            <CodeBox>
                {`d == (d,m)                 // dichotomy IS the relationship between d and m`}
            </CodeBox>
            <Paragraph>For h/c:</Paragraph>
            <CodeBox>
                {`(h,c) != h                 // hot is NOT the dichotomy
(h,c) != c                 // cold is NOT the dichotomy  
(h,c) =(h,c)> temp         // The dichotomy represents temperature`}
            </CodeBox>
            <Heading>Property Relationships for Objects</Heading>
            <CodeBox
                language="srt"
            >
                {`// Monotony level (having temperature)
obj =temp> obj             // obj has temperature
obj =(h|c)> obj            // obj is in the temperature state

// Dichotomy level (specific temperature)
obj =h> obj <iff> obj !=c> obj    // obj is hot iff not cold
obj =c> obj <iff> obj !=h> obj    // obj is cold iff not hot
obj =(!h)> obj <iff> obj =c> obj  // not-hot equals cold`}
            </CodeBox>
            <Heading>Representation Relationships</Heading>
            <CodeBox
                language="srt"
            >
                {`${''}// How the dichotomy represents temperature
(h,c) =(h,c)> temp         // The dichotomy represents temperature through itself
temp =temp> [h|c]          // Temperature represents the literal state

// The complete equivalence
obj =temp> obj <iff> obj =h> obj || obj =c> obj`}
            </CodeBox>
            <Heading>Type Relationships</Heading>
            <CodeBox
                language="srt"
            >
                {`// Temperature as a type of monotony
temp -> m                  // temperature inherits from monotony
(h,c) -> d                 // (hot,cold) inherits from dichotomy
h&c -> im                  // hot&cold inherits from impossibility

// This means:
temp =m> temp              // temperature is monotonous
(h,c) =d> (h,c)            // (hot,cold) is dichotomous`}
            </CodeBox>
            <Heading>Canonical Rules for h/c</Heading>
            <CodeBox>
                {`// With h as canonical:
h                          // Valid: canonical pole
!h                         // Valid: negation of canonical
c                          // Valid: named other pole  
!c                         // Invalid: use h instead

// Equivalences
c == (!h)                  // c equals not-h
!!h == h                   // Double negation returns to h`}
            </CodeBox>
            <Heading>The Self-Describing Nature of d/m</Heading>
            <Paragraph>The d/m dichotomy is unique because:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Verbatim />
                        d == (d,m)
                    </Word> - dichotomy IS its own most specific relationship with monotony
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        m == (!d)
                    </Word> - monotony IS not-dichotomy
                </Line>
                <Line>This makes the structure completely self-describing</Line>
            </Paragraph>
            <Paragraph>When d represents itself through d (since d == (d,m)):</Paragraph>
            <Paragraph>
                <List />
                <Line>It's saying "dichotomy is the relationship that creates distinction"</Line>
                <Line>And that relationship is precisely what relates d to m</Line>
                <Line>The concept and its instance coincide</Line>
            </Paragraph>
            <Paragraph>This is different from concrete dichotomies like h/c where:</Paragraph>
            <Paragraph>
                <List />
                <Line>The values (h, c) are distinct from their dichotomy (h,c)</Line>
                <Line>The dichotomy represents something else (temperature)</Line>
                <Line>The structure instantiates rather than exemplifies the d/m pattern</Line>
            </Paragraph>
        </Section>
    </Chapter>
);
