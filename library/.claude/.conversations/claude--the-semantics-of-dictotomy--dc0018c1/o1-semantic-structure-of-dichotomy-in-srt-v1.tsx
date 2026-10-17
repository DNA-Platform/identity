import { Chapter, Heading, Line, List, Paragraph, Section, Title, Word } from '@dna-platform/public';
import { CodeBox, Opaque, Verbatim } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ Semantic Structure of Dichotomy in SRT v1 ]]</Title>
        <Section>
            <Opaque />
            <Heading>Semantic Structure of Dichotomy in SRT at version 1</Heading>
            <Heading>Semantic Structure of Dichotomy in SRT</Heading>
            <Heading>Core Dichotomy/Monotony Structure</Heading>
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
d&m -> impossibility       // Their intersection is impossible

// The pair represents dichotomy
(d,m) =(d,m)> d            // The pair symbolizes dichotomy through itself

// Negation rules (d is canonical)
!!d == d                   // Double negation returns to d
!m is non-canonical        // Must use d instead of !m`}
            </CodeBox>
            <Heading>Application to Temperature (hot/cold)</Heading>
            <Heading>Fundamental Identities</Heading>
            <CodeBox>
                {`// The core identity relationships
cold == (!hot)             // cold IS the symbol (!hot)
hot == (hot,cold)          // ERROR: hot is not the pair!

// Correcting:
temp == hot|cold           // temperature is the monotony
(hot,cold) -> dichotomy    // the pair forms a dichotomy`}
            </CodeBox>
            <Heading>Membership in the Temperature Dichotomy</Heading>
            <CodeBox
                language="srt"
            >
                {`// Both are parts of the temperature dichotomy
cold =(hot)> cold          // Wait, this seems wrong...

// Correcting - they're parts of temperature:
hot =temp> hot             // hot is a type of temperature
cold =temp> cold           // cold is a type of temperature`}
            </CodeBox>
            <Heading>Property Relationships</Heading>
            <CodeBox
                language="srt"
            >
                {`// Objects with temperature (monotony level)
obj =temp> obj             // obj has temperature (undifferentiated)
obj =hot|cold> obj         // obj is in the temperature state

// Objects with specific temperature (dichotomy level)
obj =hot> obj              // obj is hot
obj =cold> obj             // obj is cold
obj =(!hot)> obj           // obj is not hot (equals cold)

// Mutual exclusion
obj =hot> obj <iff> obj !=cold> obj
obj =cold> obj <iff> obj !=hot> obj`}
            </CodeBox>
            <Heading>Structural Relationships</Heading>
            <CodeBox>
                {`// The temperature structure
hot|cold == temp           // The union is temperature
hot&cold -> impossibility  // Can't be both
(hot,cold) =(hot,cold)> temp  // The dichotomy represents temperature

// With hot as canonical:
!!hot == hot               // Double negation returns to hot
!cold is non-canonical     // Must use hot instead of !cold`}
            </CodeBox>
            <Heading>Key Difference from d/m</Heading>
            <Paragraph>The d/m dichotomy is self-referential:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Verbatim />
                        d
                    </Word> (dichotomy) IS about having distinctions
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        m
                    </Word> (monotony) IS about lacking distinctions
                </Line>
                <Line>They apply to themselves</Line>
            </Paragraph>
            <Paragraph>The hot/cold dichotomy is about temperature:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Verbatim />
                        hot
                    </Word> and <Word>
                        <Verbatim />
                        cold
                    </Word> are values of temperature
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        temp
                    </Word> is the monotonic property
                </Line>
                <Line>The dichotomy (hot,cold) represents temperature, not hot or cold individually</Line>
            </Paragraph>
            <Heading>Corrected Temperature Semantics</Heading>
            <CodeBox
                language="srt"
            >
                {`${''}// Identity relationships
temp == hot|cold           // temperature IS the monotony
cold == (!hot)             // cold IS not-hot (when hot is canonical)

// Representation relationships  
(hot,cold) =(hot,cold)> temp   // The dichotomy represents temperature
temp =temp> [hot|cold]          // Temperature represents the literal state

// Property relationships for objects
obj =temp> obj <iff> obj =hot> obj || obj =cold> obj`}
            </CodeBox>
        </Section>
    </Chapter>
);
