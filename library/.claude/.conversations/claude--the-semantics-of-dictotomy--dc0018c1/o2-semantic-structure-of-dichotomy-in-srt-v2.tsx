import { Chapter, Heading, Line, List, Paragraph, Section, Title, Word } from '@dna-platform/public';
import { CodeBox, Opaque, Verbatim } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ Semantic Structure of Dichotomy in SRT v2 ]]</Title>
        <Section>
            <Opaque />
            <Heading>Semantic Structure of Dichotomy in SRT at version 2</Heading>
            <Heading>Semantic Structure of Dichotomy in SRT</Heading>
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
d == (d,m)                 // dichotomy IS the pair itself`}
            </CodeBox>
            <Heading>Membership in the Dichotomy</Heading>
            <CodeBox>
                {`// Both are parts of the dichotomy
m =(d)> m                  // m is part of dichotomy (as (!d))
d =(d)> d                  // d is part of dichotomy (self-exemplifying)`}
            </CodeBox>
            <Heading>Property Relationships</Heading>
            <CodeBox
                language="srt"
            >
                {`// The monotony property
m =m> m                    // m is monotonous
d =m> d                    // d has monotony (before distinction)

// The dichotomy property
d =d> d                    // d is dichotomous (has distinction)
m !=d> m                   // m is not dichotomous`}
            </CodeBox>
            <Heading>Structural Relationships</Heading>
            <CodeBox>
                {`// Union and intersection
d|m -> m                   // Their union is monotony
d&m -> im                  // Their intersection is impossibility

// The pair represents dichotomy
(d,m) =(d,m)> d            // The pair symbolizes dichotomy through itself

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
temp == h|c                // temperature IS the monotony
c == (!h)                  // cold IS the symbol (!h) when h is canonical

// The dichotomy structure
(h,c) -> d                 // The pair forms a dichotomy
h|c -> m                   // The union is monotony
h&c -> im                  // The intersection is impossibility`}
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
(h,c) =(h,c)> temp         // The dichotomy represents temperature
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
            <Heading>The Meta-Pattern</Heading>
            <Paragraph>The d/m dichotomy applied to itself shows that:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Both d and m start in monotony (undifferentiated)</Line>
                <Line>The dichotomy d distinguishes them</Line>
                <Line>
                    m IS the negation of d: <Word>
                        <Verbatim />
                        m == (!d)
                    </Word>
                </Line>
                <Line>
                    d IS the distinction itself: <Word>
                        <Verbatim />
                        d == (d,m)
                    </Word>
                </Line>
                <Line>The structure completely describes itself</Line>
            </Paragraph>
            <Paragraph>When applied to concrete properties like temperature:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>The property (temp) is the monotony</Line>
                <Line>The values (h, c) form the dichotomy</Line>
                <Line>One value is canonical, the other is its negation</Line>
                <Line>The structure instantiates the d/m pattern</Line>
            </Paragraph>
        </Section>
    </Chapter>
);
