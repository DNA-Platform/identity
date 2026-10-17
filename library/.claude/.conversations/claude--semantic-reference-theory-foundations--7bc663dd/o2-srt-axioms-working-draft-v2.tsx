import { Bold, Chapter, Emphasis, Heading, Line, List, Paragraph, Section, Title, Word } from '@dna-platform/public';
import { CodeBox, Opaque, Verbatim } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ SRT Axioms - Working Draft v2 ]]</Title>
        <Section>
            <Opaque />
            <Heading>SRT Axioms - Working Draft at version 2</Heading>
            <Heading>Semantic Reference Theory - Axiomatic Development</Heading>
            <Paragraph>
                <Word>
                    <Emphasis />
                    Working Draft - Iteration 1
                </Word>
            </Paragraph>
            <Heading>Core Primitive</Heading>
            <CodeBox>
                {`R(x,y,t)  // x refers to y through type t`}
            </CodeBox>
            <Heading>Linguistic Extensions</Heading>
            <Heading>Basic Reference</Heading>
            <CodeBox
                language="srt"
            >
                {`${''}x =t> y    := R(x,y,t)
x => y     := E[t]: x =t> y`}
            </CodeBox>
            <Heading>Candidate Constructs to Define</Heading>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Verbatim />
                        (x)
                    </Word> - canonical symbol for x
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        (x,y)
                    </Word> - most specific relationship between x and y
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        x -&gt; t
                    </Word> - x inherits from t
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        F&#91;t&#93;
                    </Word> - reference frame of t
                </Line>
            </Paragraph>
            <Heading>Truths We Want to Capture</Heading>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Symbol-Literal Distinction
                    </Word>: Symbols represent literals but are distinct from them
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Self-Reference Without Regress
                    </Word>: (x) can represent x without infinite towers
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Inheritance Without Recursion
                    </Word>: Can define transitivity through symbolic possession
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Frame-Relative Canonicalization
                    </Word>: What's canonical depends on reference frame
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Natural Quotation Termination
                    </Word>: "word" doesn't need """"word""""
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Subject-Object Emergence
                    </Word>: The distinction emerges from reference patterns
                </Line>
            </Paragraph>
            <Heading>Attempt 1: Minimal Axioms</Heading>
            <Heading>Axiom 1: Universal Properties</Heading>
            <CodeBox
                language="srt"
            >
                {`${''}E{r,eq,o}:
  A[x]: x =eq> x                    // everything equals itself
  A([x,y,t]: x =t> y): t -> r       // all relationship types inherit from r
  A([y]: E[x]: x => y): y =o> y     // all objects have object property`}
            </CodeBox>
            <Paragraph>
                Wait, this already uses <Word>
                    <Verbatim />
                    -&gt;
                </Word> which we haven't defined yet!
            </Paragraph>
            <Heading>Attempt 2: Bootstrap Without Inheritance</Heading>
            <Heading>Axiom 1: Foundational References</Heading>
            <CodeBox
                language="srt"
            >
                {`${''}E{r,eq,o}:
  A[x]: x =eq> x                    // equality is universal
  A([x,y,t]: x =t> y): t =r> r     // all types refer to r  
  A([y]: E[x]: x => y): y =o> y    // objects self-refer through o`}
            </CodeBox>
            <Heading>Question: How do we define inheritance?</Heading>
            <Paragraph>
                If <Word>
                    <Verbatim />
                    s =&gt; t
                </Word> means s refers to t (where both are relationship types), then:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    Could <Word>
                        <Verbatim />
                        s -&gt; t
                    </Word> mean <Word>
                        <Verbatim />
                        s =(t)&gt; s
                    </Word>?
                </Line>
                <Line>This would mean s possesses the canonical symbol of t</Line>
            </Paragraph>
            <Paragraph>But we haven't defined (t) yet!</Paragraph>
            <Heading>Attempt 3: Build Up Systematically</Heading>
            <Heading>Level 1: Basic Properties</Heading>
            <CodeBox
                language="srt"
            >
                {`${''}AXIOM: E{r,eq,o}:
  A[x]: x =eq> x
  A([x,y]: x => y & x !== y): E[t]: x =t> y & t =r> r
  A([y]: E([x]: x => y)): y =o> y`}
            </CodeBox>
            <Heading>Level 2: Define Canonical Symbol Linguistically</Heading>
            <Paragraph>For any x, IF there exists z such that:</Paragraph>
            <Paragraph>
                <List />
                <Line>z =z&gt; x (z represents x through itself)</Line>
                <Line>No other w =w&gt; x exists</Line>
            </Paragraph>
            <Paragraph>Then we denote z as (x).</Paragraph>
            <Heading>Problem: Not all x have such a z!</Heading>
            <Heading>Iteration 2: Start from the True Minimum</Heading>
            <Heading>The Single Primitive</Heading>
            <CodeBox>
                {`R(x,y,t)`}
            </CodeBox>
            <Heading>First Linguistic Extension</Heading>
            <CodeBox
                language="srt"
            >
                {`x =t> y := R(x,y,t)`}
            </CodeBox>
            <Heading>Axiom 1: The Existence of Special Referents</Heading>
            <CodeBox>
                {`${''}E{r,eq}: 
  A[x]: R(x,x,eq)                         // everything relates to itself through eq
  A([x,y,t]: R(x,y,t)): R(t,r,r)         // all relationship types relate to r through r`}
            </CodeBox>
            <Paragraph>This gives us:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Verbatim />
                        x =eq&gt; x
                    </Word> for all x
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        t =r&gt; r
                    </Word> for all relationship types t
                </Line>
            </Paragraph>
            <Heading>Now Define Inheritance Linguistically</Heading>
            <CodeBox
                language="srt"
            >
                {`${''}LINGUISTIC DEFINITION:
x -> y := x == y || x =r> y || E[z]: (x =r> z & z =r> y)`}
            </CodeBox>
            <Paragraph>This gives us transitivity through chains of r-reference!</Paragraph>
            <Heading>Axiom 2: Object Property</Heading>
            <CodeBox
                language="srt"
            >
                {`${''}E[o]: A([y]: E([x,t]: x =t> y & x !== y)): y =o> y`}
            </CodeBox>
            <Paragraph>Things that are referred to (distinctly) have the object property.</Paragraph>
            <Heading>Axiom 3: Subject Property</Heading>
            <CodeBox
                language="srt"
            >
                {`${''}E[s]: A([x]: E([y,t]: x =t> y & x !== y)): x =s> x`}
            </CodeBox>
            <Paragraph>Things that refer (distinctly) have the subject property.</Paragraph>
            <Heading>Iteration 3: Canonical Symbols</Heading>
            <Heading>The Problem</Heading>
            <Paragraph>We want (x) to be the canonical symbol for x, but:</Paragraph>
            <Paragraph>
                <List />
                <Line>Not everything has a canonical symbol</Line>
                <Line>We need constraints to prevent infinite towers</Line>
            </Paragraph>
            <Heading>Linguistic Introduction of (x)</Heading>
            <Paragraph>When binding x, we can introduce x* where:</Paragraph>
            <CodeBox>
                {`x* =x*> x                    // x* represents x through itself
(x*,x) == x*                 // x* IS the relationship between itself and x`}
            </CodeBox>
            <Paragraph>We denote this x* as (x).</Paragraph>
            <Heading>But when does (x) exist?</Heading>
            <Paragraph>Perhaps we need an axiom...</Paragraph>
        </Section>
    </Chapter>
);
