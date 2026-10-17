import { Bold, Chapter, Heading, Line, List, Paragraph, Section, Title, Word } from '@dna-platform/public';
import { CodeBox, Opaque, Verbatim } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ Semantic Reference Theory: A Formal Foundation v2 ]]</Title>
        <Section>
            <Opaque />
            <Heading>Semantic Reference Theory: A Formal Foundation at version 2</Heading>
            <Heading>Semantic Reference Theory: A Formal Foundation</Heading>
            <Heading>I. Linguistic Extensions from First-Order Logic</Heading>
            <Heading>Programming-Style Logic Operators</Heading>
            <Paragraph>SRT begins by making formal logic typeable and accessible:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`!X          // not X (replacing ¬X)
X & Y       // X and Y (replacing X ∧ Y)
X | Y       // X xor Y (exclusive or)
X || Y      // X or Y (replacing X ∨ Y)
X =|> Y     // X implies Y (replacing X → Y)
X <iff> Y   // X if and only if Y (replacing X ↔ Y)
x == y      // x equals y (logical equality)
x != y      // x does not equal y`}
            </CodeBox>
            <Heading>Basic Reference Notation</Heading>
            <Paragraph>The fundamental relation R(x,y) becomes:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`x => y      // x refers to y (shorthand for R(x,y))
x <= y      // y refers to x (shorthand for R(y,x))
x <=> y     // bidirectional reference (R(x,y) & R(y,x))
x !=> y     // x does not refer to y (¬R(x,y))
x <=! y     // y does not refer to x (¬R(y,x))
x !<=>! y   // no bidirectional reference (¬R(x,y) & ¬R(y,x))`}
            </CodeBox>
            <Heading>Typed Reference and Inheritance</Heading>
            <CodeBox
                language="srt"
            >
                {`x =t> y     // x refers to y through type t (R(x,y,t))
x --> y     // x inherits from y (transitive closure)
x !--> y    // x does not inherit from y`}
            </CodeBox>
            <Heading>The Transduction Operator</Heading>
            <Paragraph>For theory evolution and linguistic transformation:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`T |=> "==" <=replaces=> "="   // linguistic transformation preserving semantics`}
            </CodeBox>
            <Heading>II. Advanced Quantification Syntax</Heading>
            <Heading>Basic Quantifier Notation</Heading>
            <Paragraph>Building on the linguistic foundation:</Paragraph>
            <CodeBox>
                {`${''}A[x]: P(x)                    // for all x, P(x) holds
E[x]: P(x)                    // there exists x such that P(x)
A[x]:E[y]: R(x,y)            // for all x, there exists y such that R(x,y)`}
            </CodeBox>
            <Heading>Distinguished vs Possibly-Equal Quantification</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Definition:
                </Word>
            </Paragraph>
            <CodeBox>
                {`${''}E[x,y]: P(x,y) := E{x,y}: x != y & P(x,y)`}
            </CodeBox>
            <Paragraph>Where:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Verbatim />
                        E&#123;x,y&#125;: P(x,y)
                    </Word> means x and y may be equal
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        E&#91;x,y&#93;: P(x,y)
                    </Word> means x and y must be distinct
                </Line>
            </Paragraph>
            <Heading>Constrained Quantification</Heading>
            <Paragraph>When the bound variable appears first:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`A(x => o):E(y != x):A(z =t> y): P(x,y,z,t)`}
            </CodeBox>
            <Paragraph>When it doesn't appear first, explicit binding is required:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`A(x: o => x):E(y: x != y):A(z: y =t> z): P(x,y,z,t)`}
            </CodeBox>
            <Heading>Mixed Grouping</Heading>
            <CodeBox>
                {`${''}E[{x,y},z]: P(x,y,z) := E[x,y,z]: x != y & P(x,y,z)
E[x,{y,z}]: P(x,y,z) := E[x,y,z]: y != z & P(x,y,z)`}
            </CodeBox>
            <Heading>Bracketing Operators</Heading>
            <Paragraph>For complex expressions without deep nesting:</Paragraph>
            <CodeBox>
                {`:&:  // AND with new scope
:|:  // OR with new scope  
:||: // XOR with new scope`}
            </CodeBox>
            <Heading>III. Fundamental Axioms</Heading>
            <Heading>Axiom 1: The Subject-Object-Relationship Structure</Heading>
            <CodeBox
                language="srt"
            >
                {`${''}E[{s,o,r}]:A[x,y,t: x =t> y]: 
    t --> r & 
    y =o> y & 
    (x != y => x =s> x) & 
    (x == y => x =o> x)`}
            </CodeBox>
            <Paragraph>This establishes:</Paragraph>
            <Paragraph>
                <List />
                <Line>All relationship types inherit from the fundamental relation r</Line>
                <Line>All objects of reference have the object property o</Line>
                <Line>Subjects (when distinct from objects) have the subject property s</Line>
                <Line>Self-reference makes something purely objective</Line>
            </Paragraph>
            <Heading>Axiom 2: The Representation Hierarchy</Heading>
            <CodeBox
                language="srt"
            >
                {`${''}E[{sym,rep}]:A[x,y]: 
    x =x> y =|> x --> rep :&: 
    x == (x,y) =|> x --> sym`}
            </CodeBox>
            <Paragraph>This establishes:</Paragraph>
            <Paragraph>
                <List />
                <Line>Things that represent (x =x&gt; y) inherit from rep</Line>
                <Line>Symbols (where x equals the most specific relationship) inherit from sym</Line>
            </Paragraph>
            <Heading>Axiom 3: The Most Specific Relationship</Heading>
            <CodeBox
                language="srt"
            >
                {`${''}A[x,y]:E(t: t != eq): x =t> y =|> 
    E[spec: x =spec> y]:A(gen: x =gen> y): 
        spec --> gen !--> spec :&: 
        !E([x',y']: x' != x | y' != y): x' =spec> y'`}
            </CodeBox>
            <Paragraph>When a non-equality relationship exists:</Paragraph>
            <Paragraph>
                <List />
                <Line>There is a most specific relationship spec</Line>
                <Line>It inherits from all general relationships between x and y</Line>
                <Line>No relationship between x and y inherits from it</Line>
                <Line>It is unique to that specific pair</Line>
            </Paragraph>
            <Heading>Axiom 4: The Equality Relationship</Heading>
            <CodeBox
                language="srt"
            >
                {`${''}A[x,y]: x =eq> y <iff> x == y`}
            </CodeBox>
            <Paragraph>This makes eq the referential form of logical equality, where:</Paragraph>
            <Paragraph>
                <List />
                <Line>eq is a referent in the domain</Line>
                <Line>eq can be both subject and object of relationships</Line>
            </Paragraph>
            <Heading>Axiom 5: The Axiom of Self-Reference</Heading>
            <CodeBox>
                {`(x,x) == (x)`}
            </CodeBox>
            <Paragraph>
                The self-relationship equals the canonical symbol, preventing infinite regress while enabling genuine
                self-reference.
            </Paragraph>
            <Heading>IV. Advanced Linguistic Constructs</Heading>
            <Paragraph>
                Just as we extended quantification syntax, we extend reference notation to capture semantic patterns more
                naturally:
            </Paragraph>
            <Heading>The (x,y) Notation - Most Specific Relationship</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Linguistic Rule:
                </Word> When (x,y) appears in an expression where x =t&gt; y for some t != eq:
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}P((x,y)) becomes:
E[spec: x =spec> y & (A[gen: x =gen> y]: spec --> gen !--> spec) & (!E[x',y']: (x' != x | y' != y) & x' =spec> y')]: P[spec/(x,y)]`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    Immediate Theorem from Axiom 3:
                </Word>
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}A[x,y,t: t !--> eq]: x =t> y =|> x =(x,y)> y & (x,y) -> t`}
            </CodeBox>
            <Paragraph>This shows that (x,y) is both:</Paragraph>
            <Paragraph>
                <List />
                <Line>A relationship type that inherits from all others between x and y</Line>
                <Line>A representation of y when used by x</Line>
            </Paragraph>
            <Heading>The (x) Notation - Canonical Symbol</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Linguistic Rule:
                </Word> (x) denotes the unique referent satisfying:
            </Paragraph>
            <CodeBox>
                {`${''}E[sym]: (sym,x) == sym`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    Expansion:
                </Word> When (x) appears in an expression:
            </Paragraph>
            <CodeBox>
                {`${''}P((x)) becomes:
E[sym: (sym,x) == sym]: P[sym/(x)]`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    Immediate Theorem from the definition:
                </Word>
            </Paragraph>
            <CodeBox>
                {`(x) =(x)> x & ((x),x) == (x) & x =(x)> x`}
            </CodeBox>
            <Paragraph>This establishes (x) as:</Paragraph>
            <Paragraph>
                <List />
                <Line>The symbol that represents x</Line>
                <Line>A self-defining relationship (it IS the relationship between itself and x)</Line>
                <Line>A property that x possesses</Line>
            </Paragraph>
            <Heading>The Pattern of Semantic-Linguistic Development</Heading>
            <Paragraph>These constructs demonstrate SRT's methodology:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Identify a semantic pattern
                    </Word> (most specific relationships, canonical symbols)
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Create linguistic notation
                    </Word> ((x,y), (x))
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Formalize through axioms
                    </Word> (Axioms 3 and 5)
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Derive theorems
                    </Word> that reveal deeper semantic structure
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Use these to create further extensions
                    </Word>
                </Line>
            </Paragraph>
            <Paragraph>
                Each linguistic extension is just notation - like replacing ∧ with &amp; or extending quantifiers with
                E&#91;x,y&#93;. But each captures a semantic pattern that would be cumbersome to express otherwise, enabling
                us to discover further patterns.
            </Paragraph>
            <Heading>V. Major Theorems</Heading>
            <Heading>Theorem 1: Symbols are Special Representations</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Claim:
                </Word> sym --&gt; rep
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Proof:
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>From Axiom 2: x == (x,y) =|&gt; x --&gt; sym</Line>
                <Line>From Axiom 2: x =x&gt; y =|&gt; x --&gt; rep</Line>
                <Line>When x == (x,y), by Axiom 3: x =x&gt; y (since (x,y) is most specific)</Line>
                <Line>Therefore: x == (x,y) =|&gt; x =x&gt; y =|&gt; x --&gt; rep</Line>
                <Line>From (1) and (4): sym --&gt; rep ∎</Line>
            </Paragraph>
            <Heading>Theorem 2: Symbols Don't Inherit from Equality</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Claim:
                </Word> (x) !--&gt; eq
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Proof:
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>From definition: (x) =(x)&gt; x (canonical symbol represents its literal)</Line>
                <Line>From observation: (x) != x (symbols are distinct from literals)</Line>
                <Line>Assume for contradiction: (x) --&gt; eq</Line>
                <Line>From Axiom 4 and (3): (x) =eq&gt; x (by inheritance)</Line>
                <Line>From Axiom 4: (x) =eq&gt; x &lt;iff&gt; (x) == x</Line>
                <Line>But from (2): (x) != x</Line>
                <Line>Contradiction between (5) and (6)</Line>
                <Line>Therefore: (x) !--&gt; eq ∎</Line>
            </Paragraph>
            <Heading>Theorem 3: The Identity-Representation Duality</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Claim:
                </Word> For pure objects x where x =o&gt; x &amp; !(x =s&gt; x): (x,x) == eq
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Proof:
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>From Axiom 1: x == y =&gt; x =o&gt; x (self-reference is objective)</Line>
                <Line>Given: x =o&gt; x &amp; !(x =s&gt; x) (x is purely objective)</Line>
                <Line>From Axiom 3: If no t != eq where x =t&gt; x, then (x,x) undefined for non-eq</Line>
                <Line>From Axiom 4: x =eq&gt; x (everything equals itself)</Line>
                <Line>For pure objects, eq is the only self-relationship</Line>
                <Line>Therefore: (x,x) == eq ∎</Line>
            </Paragraph>
            <Heading>Theorem 4: Self-Reference Requires Symbolism</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Claim:
                </Word> x =(x)&gt; x =|&gt; x =s&gt; x
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Proof:
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>From Axiom 5: (x,x) == (x)</Line>
                <Line>If x =(x)&gt; x, then x =(x,x)&gt; x</Line>
                <Line>From (2) and Axiom 3: (x,x) is a relationship type</Line>
                <Line>From Axiom 1: relationship types inherit from r</Line>
                <Line>From Axiom 1: things with relationships (x != x is false) have property s when they refer</Line>
                <Line>Since x =(x)&gt; x is a reference where x is subject</Line>
                <Line>Therefore: x =s&gt; x ∎</Line>
            </Paragraph>
            <Heading>VI. Semantic Insights</Heading>
            <Heading>The Nature of Symbolism</Heading>
            <Paragraph>
                Symbols are "atomic units of metaphor" - we speak as if the symbol IS the literal, even though one might be
                marks on paper and the other the moon. This atomic "is-ness" (captured by (x) =(x)&gt; x) differs
                fundamentally from equality's identity relation (x =eq&gt; x).
            </Paragraph>
            <Heading>The Emergence of Self-Reference</Heading>
            <Paragraph>The pattern:</Paragraph>
            <CodeBox>
                {`(x) =(x)> x & ((x),x) == (x) & x =(x)> x`}
            </CodeBox>
            <Paragraph>
                Captures "I am Doug because I possess 'Doug' as a name" - the fundamental pattern of conscious
                self-identification. The referent possesses its symbol as a property, enabling genuine self-reference
                without infinite regress.
            </Paragraph>
            <Heading>The Finite Nature of Symbolic Systems</Heading>
            <Paragraph>
                By making (x) purely subjective unless explicitly referenced (E&#91;y&#93;: y =t&gt; (x)), we prevent
                infinite chains like (((...(x)...))). This mirrors natural language: we have finite vocabularies because
                symbols need not have their own symbols ad infinitum.
            </Paragraph>
            <Heading>VII. An Elegant Observation</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Theorem 5: The Symbol-Literal-Reference Triangle
                </Word>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Claim:
                </Word> For any symbol (x) and its literal x:
            </Paragraph>
            <CodeBox>
                {`(x) =(x)> x & x =(x)> x & (x) != x`}
            </CodeBox>
            <Paragraph>This forms a semantic triangle where:</Paragraph>
            <Paragraph>
                <List />
                <Line>The symbol represents the literal</Line>
                <Line>The literal possesses the symbol as property</Line>
                <Line>Yet they remain distinct</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Proof:
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>(x) =(x)&gt; x by definition of canonical symbol</Line>
                <Line>x =(x)&gt; x from Axiom 5 and self-reference</Line>
                <Line>(x) != x from Theorem 2 (symbols ≠ literals)</Line>
                <Line>These three facts coexist without contradiction ∎</Line>
            </Paragraph>
            <Paragraph>
                This triangle captures the essence of semantic reference: representation requires distinction, yet creates a
                form of unity through the reference relationship itself.
            </Paragraph>
        </Section>
    </Chapter>
);
