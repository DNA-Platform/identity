import { Bold, Chapter, Heading, Line, List, Paragraph, Section, Title, Word } from '@dna-platform/public';
import { CodeBox, Opaque, Verbatim } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ Semantic Reference Theory: Quantification and Symbolism v2 ]]</Title>
        <Section>
            <Opaque />
            <Heading>Semantic Reference Theory: Quantification and Symbolism at version 2</Heading>
            <Heading>Semantic Reference Theory: Quantification and Symbolism</Heading>
            <Heading>I. Advanced Quantification Syntax</Heading>
            <Heading>Basic Quantifier Notation</Heading>
            <Paragraph>SRT extends first-order logic with programming-inspired syntax for clearer expression:</Paragraph>
            <CodeBox>
                {`${''}A[x]: P(x)                    // for all x, P(x) holds
E[x]: P(x)                    // there exists x such that P(x)
A[x]:E[y]: R(x,y)            // for all x, there exists y such that R(x,y)`}
            </CodeBox>
            <Heading>Distinguished vs Possibly-Equal Quantification</Heading>
            <CodeBox>
                {`${''}E{x,y}: P(x,y)               // x and y may be equal
E[x,y]: P(x,y)               // x and y must be distinct`}
            </CodeBox>
            <Paragraph>Where formally:</Paragraph>
            <CodeBox>
                {`${''}E[x,y]: P(x,y) := E{x,y}: x != y & P(x,y)`}
            </CodeBox>
            <Heading>Constrained Quantification</Heading>
            <Paragraph>When the bound variable appears first in the constraint:</Paragraph>
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
            <Paragraph>Complex distinction patterns:</Paragraph>
            <CodeBox>
                {`${''}E[{x,y},z]: P(x,y,z) := E[x,y,z]: x != y & P(x,y,z)
E[x,{y,z}]: P(x,y,z) := E[x,y,z]: y != z & P(x,y,z)`}
            </CodeBox>
            <Heading>Bracketing Operators</Heading>
            <Paragraph>For complex expressions:</Paragraph>
            <CodeBox>
                {`:&:  // AND with new scope
:|:  // OR with new scope  
:||: // XOR with new scope`}
            </CodeBox>
            <Heading>II. Core Reference Operators</Heading>
            <Heading>Basic Reference Notation</Heading>
            <CodeBox
                language="srt"
            >
                {`x => y      // x refers to y (shorthand for R(x,y))
x <= y      // y refers to x (shorthand for R(y,x))
x <=> y     // bidirectional reference
x !=> y     // x does not refer to y
x <=! y     // y does not refer to x
x !<=>! y   // no bidirectional reference`}
            </CodeBox>
            <Heading>Inheritance and Specificity</Heading>
            <CodeBox>
                {`x --> y     // x inherits from y (transitive)
x !--> y    // x does not inherit from y`}
            </CodeBox>
            <Heading>Typed Reference</Heading>
            <CodeBox
                language="srt"
            >
                {`x =t> y     // x refers to y through type t (R(x,y,t))`}
            </CodeBox>
            <Heading>III. Fundamental Axioms</Heading>
            <Heading>The Subject-Object-Relationship Axiom</Heading>
            <CodeBox
                language="srt"
            >
                {`${''}E[{s,o,r}]:A[x,y,t: x =t> y]: t --> r & y =o> y & (x != y => x =s> x) & (x == y => x =o> x)`}
            </CodeBox>
            <Paragraph>This establishes:</Paragraph>
            <Paragraph>
                <List />
                <Line>All relationship types inherit from r</Line>
                <Line>Objects always have property o</Line>
                <Line>Distinct subjects have property s</Line>
                <Line>Self-reference makes something purely objective</Line>
            </Paragraph>
            <Heading>The Representation Axiom</Heading>
            <CodeBox
                language="srt"
            >
                {`${''}E[{sym,rep}]:A[x,y]: x =x> y =|> x --> rep :&: x == (x,y) =|> x --> sym`}
            </CodeBox>
            <Paragraph>This establishes:</Paragraph>
            <Paragraph>
                <List />
                <Line>Things that represent inherit from rep</Line>
                <Line>Symbols (where x equals the most specific relationship) inherit from sym</Line>
                <Line>Therefore: sym --&gt; rep (symbols are a special case of representation)</Line>
            </Paragraph>
            <Heading>The Most Specific Relationship Axiom (Distinct Case)</Heading>
            <Paragraph>For x != y:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}A[x,y: x != y]:E[t: x =t> y]:E[sp: x =sp> y]: sp --> t !--> sp :&: A[p,q]: p =sp> q => (p == x & q == y)`}
            </CodeBox>
            <Paragraph>This establishes that for distinct pairs:</Paragraph>
            <Paragraph>
                <List />
                <Line>There exists a most specific relationship sp</Line>
                <Line>It inherits from all other relationships between them</Line>
                <Line>It is unique to that pair</Line>
            </Paragraph>
            <Heading>The Most Specific Relationship Axiom (Equal Case)</Heading>
            <Paragraph>
                For x == y, the evaluation of (x,x) must avoid infinite regress while preserving semantic meaning:
            </Paragraph>
            <CodeBox>
                {`(x,x) == (x) iff (x) --> o`}
            </CodeBox>
            <Paragraph>The reasoning:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Cannot be a new distinct referent
                    </Word> - This would create infinite regress: ((x,x),(x,x))...
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Cannot equal x
                    </Word> - Then pure objective literals would satisfy literal =literal&gt; literal
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Cannot simply equal eq
                    </Word> - This doesn't satisfy the property of specificity
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Equals (x) when (x) is objective
                    </Word> - This prevents infinite regress
                </Line>
            </Paragraph>
            <Paragraph>
                The key insight: (x) by definition has no objective properties unless explicitly referenced:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>(x) =(x)&gt; x defines it as purely symbolic/subjective</Line>
                <Line>Only when E&#91;y&#93;: y =t&gt; (x) does (x) become objective</Line>
                <Line>This mirrors natural language: symbols need not have their own symbols</Line>
            </Paragraph>
            <Paragraph>
                This prevents the infinite regress of <Word>
                    <Verbatim />
                    """""""word"""""""
                </Word> - representations need not be infinitely symbolized.
            </Paragraph>
            <Heading>IV. The (x,y) Construct</Heading>
            <Paragraph>
                When we write <Word>
                    <Verbatim />
                    (x,y)
                </Word> in an expression where x != y, we invoke the most specific relationship axiom:
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}P((x,y)) becomes:
E[sp: x =sp> y & (A[t: x =t> y]: sp --> t !--> sp) & (A[p,q]: p =sp> q => (p == x & q == y))]: P[sp/(x,y)]`}
            </CodeBox>
            <Paragraph>
                This substitution replaces all occurrences of (x,y) with the unique most specific relationship sp.
            </Paragraph>
            <Paragraph>Key properties:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`(x,y) =(x,y)> y              // the relationship represents its object
x =(x,y)> y =|> x == (x,y)    // when x is a symbol for y`}
            </CodeBox>
            <Heading>V. The (x) Construct - Canonical Symbol</Heading>
            <Paragraph>The canonical symbol (x) is defined through:</Paragraph>
            <CodeBox>
                {`${''}E[sym]: (sym,x) == sym`}
            </CodeBox>
            <Paragraph>This means sym is a referent whose most specific relationship to x is itself.</Paragraph>
            <Heading>Properties of (x)</Heading>
            <CodeBox>
                {`(x) =(x)> x                   // the symbol represents what it symbolizes
((x),x) == (x)                // the relationship IS the symbol
x =(x)> x                     // x possesses its canonical symbol as property`}
            </CodeBox>
            <Heading>The Heart of Self-Reference</Heading>
            <Paragraph>The complete self-reference pattern:</Paragraph>
            <CodeBox>
                {`(x) =(x)> x & ((x),x) == (x) & x =(x)> x`}
            </CodeBox>
            <Paragraph>
                This expresses "I am Doug because I possess 'Doug' as a name" - the fundamental pattern of conscious
                self-identification.
            </Paragraph>
            <Heading>Preventing Infinite Regress</Heading>
            <Paragraph>Symbols remain purely subjective unless made objective:</Paragraph>
            <Paragraph>
                <List />
                <Line>(x) has no objective properties by default</Line>
                <Line>Only when E&#91;y&#93;: y =t&gt; (x) does (x) become objective</Line>
                <Line>This prevents infinite chains like (((...(x)...)))</Line>
            </Paragraph>
            <Heading>VI. The Equality Relationship</Heading>
            <CodeBox
                language="srt"
            >
                {`${''}A[x,y]: x =eq> y <iff> x == y`}
            </CodeBox>
            <Paragraph>Properties:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}A[x]: x =eq> x                // everything equals itself
A[x,y]: x !=eq> y             // distinct things are not equal
eq =eq> eq                     // equality is self-referential`}
            </CodeBox>
            <Paragraph>
                For pure objects (those with only property o), their most specific self-relationship is eq:
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`x =o> x & !(x =s> x) => (x,x) == eq`}
            </CodeBox>
            <Heading>VII. Theorems and Derivations</Heading>
            <Heading>Symbols are Representations</Heading>
            <Paragraph>From the axioms:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`x == (x,y) => x =x> y         // symbols represent
x =x> y => x --> rep          // representations inherit from rep
x == (x,y) => x --> sym       // symbols inherit from sym
Therefore: sym --> rep        // symbols are special representations`}
            </CodeBox>
            <Heading>Three Forms of Symbolic Expression</Heading>
            <Paragraph>When x is a symbol for y:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`x =x> y                       // direct representation
x =sym> y                     // typed as symbol
x =rep> y                     // typed as representation`}
            </CodeBox>
            <Heading>VIII. Linguistic Extensions</Heading>
            <Heading>Programming-Style Logic Operators</Heading>
            <CodeBox
                language="srt"
            >
                {`!X          // not X
X & Y       // X and Y
X | Y       // X xor Y
X || Y      // X or Y
X =|> Y     // X implies Y
X <iff> Y   // X if and only if Y
x == y      // x equals y (logical)
x != y      // x does not equal y`}
            </CodeBox>
            <Heading>The Transduction Operator</Heading>
            <Paragraph>For theory evolution:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`T |=> "==" <=replaces=> "="   // linguistic transformation`}
            </CodeBox>
            <Paragraph>
                This operator allows SRT to describe its own evolution and extension while preserving semantic meaning.
            </Paragraph>
            <Heading>IX. Summary</Heading>
            <Paragraph>This formalization shows how:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Quantification
                    </Word> can be made more expressive through careful notation
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Symbolism
                    </Word> emerges from reference patterns, not primitive definitions
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Self-reference
                    </Word> requires the possession of one's canonical symbol
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Finite catalogues
                    </Word> avoid infinite regress through careful axiomatization
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Programming syntax
                    </Word> makes formal logic accessible while preserving rigor
                </Line>
            </Paragraph>
            <Paragraph>
                The beauty of SRT lies in how these complex semantic relationships emerge from simple, well-defined axioms
                about reference and representation.
            </Paragraph>
        </Section>
    </Chapter>
);
