import { Bold, Chapter, Heading, Line, List, Paragraph, Section, Title, Word } from '@dna-platform/public';
import { CodeBox, Opaque, Verbatim } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ Semantic Reference Theory: Transpiled Syntax and Formal Theorems v1 ]]</Title>
        <Section>
            <Opaque />
            <Heading>Semantic Reference Theory: Transpiled Syntax and Formal Theorems at version 1</Heading>
            <Heading>Semantic Reference Theory: Transpiled Syntax and Formal Theorems</Heading>
            <Heading>Core Typographical Conventions</Heading>
            <Heading>Logical Operations (FOL Level)</Heading>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Verbatim />
                        &amp;
                    </Word> - logical AND (∧ in traditional notation)
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        |
                    </Word> - logical OR (∨ in traditional notation)
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        !!
                    </Word> - exclusive OR (XOR)
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        !
                    </Word> - logical NOT (¬ in traditional notation)
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        =|&gt;
                    </Word> - implies (→ in traditional notation)
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        !=|&gt;
                    </Word> - does not imply
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        &lt;|=|&gt;
                    </Word> - bidirectional implication (↔)
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        &lt;iff&gt;
                    </Word> - shorthand for bidirectional implication
                </Line>
            </Paragraph>
            <Heading>Reference Operations (SRT Level)</Heading>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Verbatim />
                        x =&gt; y
                    </Word> - x refers to y (shorthand for R(x,y))
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        x &lt;= y
                    </Word> - y refers to x (reverse reference)
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        x &lt;=&gt; y
                    </Word> - bidirectional reference
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        x =t&gt; y
                    </Word> - x refers to y through type t
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        x --&gt; y
                    </Word> - x inherits from y (transitive)
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        x == y
                    </Word> - semantic equality (x =eq&gt; y)
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        x != y
                    </Word> - semantic inequality
                </Line>
            </Paragraph>
            <Heading>Quantification Syntax</Heading>
            <CodeBox
                language="srt"
            >
                {`${''}E[x]: P(x)                    // exists x such that P(x)
A[x]: P(x)                    // for all x, P(x)
E[x,y]: P(x,y)                // exists distinct x,y (x != y implicit)
E{x,y}: P(x,y)                // exists x,y (may be equal)
E[{x,y},z]: P(x,y,z)          // x,y may equal, but z != x,y
E([x,y]: x => y): P(x,y)      // with preconditions
E(x: -> r): P(x)              // when variable appears first`}
            </CodeBox>
            <Heading>Bracketing Operations</Heading>
            <CodeBox
                language="srt"
            >
                {`P &: Q | R | S                // P & (Q | R | S)
P |: Q & R & S                // P | (Q & R & S)  
P =||> Q & R & S              // P =|> (Q & R & S)`}
            </CodeBox>
            <Heading>Transpilation Examples</Heading>
            <Heading>Basic Reference Frame</Heading>
            <CodeBox
                language="srt"
            >
                {`${''}F[r]: x => y
// Transpiles to:
x =r> y`}
            </CodeBox>
            <Heading>Quantified Statement with Constraints</Heading>
            <CodeBox
                language="srt"
            >
                {`${''}E([x,y]: x => y & y =t> x): x <=> y
// Transpiles to:
∃x∃y: x ≠ y & x =r> y & y =t> x & x =r> y & y =r> x`}
            </CodeBox>
            <Heading>Canonical Symbol in Frame</Heading>
            <CodeBox
                language="srt"
            >
                {`${''}F[t]: (x) => y
// Transpiles to:
∃s: (s,x) == s & (t,s) == t & ∀z: (s,z) == s =|> z == x & s =t> y`}
            </CodeBox>
            <Heading>Core Theorems with Updated Notation</Heading>
            <Heading>Theorem 1: Symbol-Literal Distinction</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Statement:
                </Word>
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}A[x]: x --> symbol <iff> E[y]: x =x> y & (x,y) == x`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    Meaning:
                </Word> A referent is a symbol iff it refers to something through itself.
            </Paragraph>
            <Heading>Theorem 2: Symbols Don't Equal Literals</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Statement:
                </Word>
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}A[sym,lit]: sym =sym> lit =|> sym != lit`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    Proof:
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Assume sym == lit</Line>
                <Line>From sym =sym&gt; lit: sym =sym&gt; sym</Line>
                <Line>But (sym,sym) != sym (axiom)</Line>
                <Line>Contradiction ∎</Line>
            </Paragraph>
            <Heading>Theorem 3: Reference Requires Distinction</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Statement:
                </Word>
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}A[x,y,t]: x =t> y & t --> rep =|> x != y`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    Meaning:
                </Word> True reference (not just relationship) requires distinction.
            </Paragraph>
            <Heading>Theorem 4: Self-Reference Through Symbolism</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Statement:
                </Word>
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`x =(x)> x <iff> x =s> x & (x,x) == (x)`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    Meaning:
                </Word> Self-reference occurs when something refers to itself through its canonical symbol.
            </Paragraph>
            <Heading>Theorem 5: Inheritance Transitivity</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Statement:
                </Word>
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`x --> y & y --> z =|> x --> z`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    Proof:
                </Word> By construction of --&gt; as transitive closure of base inheritance.
            </Paragraph>
            <Heading>Theorem 6: Frame Membership Constraint</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Statement:
                </Word>
            </Paragraph>
            <CodeBox>
                {`${''}F[t]: E[x]: P(x) <iff> E[x]: x =[in]> t & P(x)`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    Meaning:
                </Word> In frame F&#91;t&#93;, existence claims require frame membership.
            </Paragraph>
            <Heading>Theorem 7: Canonical Uniqueness</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Statement:
                </Word>
            </Paragraph>
            <CodeBox>
                {`${''}F[t]: A[x]: E![s]: (s,x) == s & (t,s) == t`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    Meaning:
                </Word> Every referent has exactly one canonical in each frame.
            </Paragraph>
            <Heading>Theorem 8: Identity Semantics</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Statement:
                </Word>
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`(i) =(i)> i <iff> i =sub> i & i =obj> i & (i,i) == (i)`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    Meaning:
                </Word> An identity qualifies itself through its canonical symbol, serving as both subject and object.
            </Paragraph>
            <Heading>Theorem 9: Perspective Reduction</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Statement:
                </Word>
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}F[i]: x => y <iff> (i) =(x)> (y)`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    Meaning:
                </Word> In a perspective frame, all reference reduces to qualification.
            </Paragraph>
            <Heading>Theorem 10: Semantic Triangle</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Statement:
                </Word>
            </Paragraph>
            <CodeBox>
                {`(x) =(x)> x & x =(x)> x & (x) != x`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    Meaning:
                </Word> The symbol represents the literal, the literal possesses the symbol, yet they remain distinct.
            </Paragraph>
            <Heading>Advanced Theorems</Heading>
            <Heading>Theorem 11: Reference Frame Inheritance</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Statement:
                </Word>
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}F[s]: F[t]: P =|> (t -> s & s -> r) =||> P[@ := t]`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    Meaning:
                </Word> Nested frames create inheritance chains with increasing conditionality.
            </Paragraph>
            <Heading>Theorem 12: Canonical Collapse in Frames</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Statement:
                </Word>
            </Paragraph>
            <CodeBox>
                {`${''}E[x,y]: x != y & E[t]: (x)[t] == (y)[t]`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    Meaning:
                </Word> Distinct referents can map to the same canonical in certain frames.
            </Paragraph>
            <Heading>Theorem 13: Visibility Constraint</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Statement:
                </Word>
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}F[t]: x => y =|> x =[in]> t & y =[in]> t`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    Meaning:
                </Word> Reference within a frame requires both referents be visible.
            </Paragraph>
            <Heading>Theorem 14: Qualification Equivalence</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Statement:
                </Word>
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`x =p> x <iff> (x) =(p)> x <iff> (i) =(p)> (x)`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    Meaning:
                </Word> Properties, symbolic representation, and qualification are equivalent semantic structures.
            </Paragraph>
            <Heading>Theorem 15: Semantic Bootstrap</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Statement:
                </Word>
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}E[x,y,t]: x =t> y =||> E[eq,sub,obj,rel]: 
    A[a]: a =eq> a &
    x =sub> x &
    y =obj> y &
    t =rel> rel`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    Meaning:
                </Word> A single relationship forces the entire semantic architecture into existence.
            </Paragraph>
        </Section>
    </Chapter>
);
