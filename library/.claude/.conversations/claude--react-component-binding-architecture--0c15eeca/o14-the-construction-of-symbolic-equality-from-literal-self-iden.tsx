import { Chapter, Heading, Line, List, Paragraph, Section, Title, Word } from '@dna-platform/public';
import { CodeBox, Opaque, Verbatim } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ The Construction of Symbolic Equality from Literal Self-Identity v7 ]]</Title>
        <Section>
            <Opaque />
            <Heading>The Construction of Symbolic Equality from Literal Self-Identity at version 7</Heading>
            <Heading>The Construction of Symbolic Equality from Literal Self-Identity</Heading>
            <Heading>The Foundation: Literal Self-Identity</Heading>
            <Paragraph>In the domain of numbers, only self-identity exists:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Verbatim />
                        2 =eq&gt; 2
                    </Word>
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        3 =eq&gt; 3
                    </Word>
                </Line>
                <Line>No literal can equal another literal</Line>
            </Paragraph>
            <Heading>The Canonical Symbol Bridge</Heading>
            <Paragraph>For literals with canonical symbols:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Verbatim />
                        2 =(2)&gt; 2
                    </Word> - literal 2 possesses its canonical symbol (2)
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        (2) =(2)&gt; 2
                    </Word> - canonical symbol (2) represents literal 2
                </Line>
            </Paragraph>
            <Heading>The Construction of Equality</Heading>
            <Paragraph>Given the definition:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}A[n]: n =has> (n) ? eq -> (n) : eq -> (o,o)`}
            </CodeBox>
            <Paragraph>
                For any n possessing a canonical symbol, equality inherits from that canonical symbol. Since 2 possesses
                (2):
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Verbatim />
                        eq -&gt; (2)
                    </Word>
                </Line>
                <Line>
                    Therefore <Word>
                        <Verbatim />
                        2 =eq&gt; 2
                    </Word> (equality applies to 2)
                </Line>
            </Paragraph>
            <Heading>The Symbolic Lifting</Heading>
            <Paragraph>When we lift to the symbolic realm:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Verbatim />
                        2 =eq&gt; 2
                    </Word> becomes <Word>
                        <Verbatim />
                        (2) =(eq)&gt; 2
                    </Word>
                </Line>
                <Line>In symbolic space, (2) is the most specific relationship</Line>
                <Line>
                    Therefore: <Word>
                        <Verbatim />
                        (2) -&gt; (eq)
                    </Word> (inheritance reverses in symbolic space)
                </Line>
            </Paragraph>
            <Heading>Representations and Inheritance</Heading>
            <Paragraph>For the expression 1+1:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Verbatim />
                        (1+1) =(1+1)&gt; 2
                    </Word> - (1+1) represents literal 2
                </Line>
                <Line>
                    Since (2) is canonical for 2: <Word>
                        <Verbatim />
                        (1+1) -&gt; (2)
                    </Word>
                </Line>
                <Line>
                    Since <Word>
                        <Verbatim />
                        (2) -&gt; (eq)
                    </Word>: by transitivity <Word>
                        <Verbatim />
                        (1+1) -&gt; (eq)
                    </Word>
                </Line>
            </Paragraph>
            <Heading>The Derivation of Cross-Symbol Equality</Heading>
            <Paragraph>We now have:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Verbatim />
                        (1+1) =(eq)&gt; 2
                    </Word> (from inheritance)
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        (2) =(eq)&gt; 2
                    </Word> (from lifting)
                </Line>
            </Paragraph>
            <Paragraph>
                To understand how this leads to <Word>
                    <Verbatim />
                    (1+1) =(eq)&gt; (2)
                </Word>, we must examine the nature of (eq) itself.
            </Paragraph>
            <Paragraph>As a canonical symbol:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Verbatim />
                        (eq) =(eq)&gt; eq
                    </Word> - (eq) is the canonical symbol for the literal equality relation
                </Line>
            </Paragraph>
            <Paragraph>
                Since (eq) is a relationship type that inherits its properties from the literal eq, it carries the
                transitivity property of equality:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Verbatim />
                        A&#91;n,m&#93;: n =eq&gt; 2 &amp; m =eq&gt; 2 =|&gt; n =eq&gt; m
                    </Word> (literal transitivity)
                </Line>
            </Paragraph>
            <Paragraph>In the symbolic realm, inheriting from (eq) means inheriting this transitivity:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Verbatim />
                        A&#91;(n),(m)&#93;: (n) =(eq)&gt; 2 &amp; (m) =(eq)&gt; 2 =|&gt; (n) =(eq)&gt; (m)
                    </Word>
                </Line>
            </Paragraph>
            <Paragraph>Applied to our case:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Verbatim />
                        (1+1) =(eq)&gt; 2
                    </Word> and <Word>
                        <Verbatim />
                        (2) =(eq)&gt; 2
                    </Word>
                </Line>
                <Line>
                    Therefore: <Word>
                        <Verbatim />
                        (1+1) =(eq)&gt; (2)
                    </Word>
                </Line>
            </Paragraph>
            <Heading>The Resolution</Heading>
            <Paragraph>
                This shows that <Word>
                    <Verbatim />
                    2 = 1+1
                </Word> (as we write in mathematics) is actually <Word>
                    <Verbatim />
                    (2) =(eq)&gt; (1+1)
                </Word> - a symbolic relationship made possible by:
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>The construction of eq from canonical symbols</Line>
                <Line>The lifting of literal relationships to symbolic ones</Line>
                <Line>The inheritance of representations from canonical symbols</Line>
                <Line>The transitivity of equality through shared literal reference</Line>
            </Paragraph>
            <Paragraph>
                Only in the symbolic realm can different representations be recognized as equal. The literal domain knows
                only self-identity. Mathematics operates entirely in this symbolic space where metaphorical reference
                enables the recognition that distinct symbols refer to the same unreachable literal.
            </Paragraph>
            <Paragraph>
                This resolves the ancient question of how <Word>
                    <Verbatim />
                    2 = 1+1
                </Word> can be true when 2 and 1+1 are clearly different things: they ARE different (as symbols), but they
                refer to the same literal through the machinery of symbolic equality.
            </Paragraph>
            <Heading>The Limitation of Formal Arithmetic</Heading>
            <Paragraph>
                In Peano Arithmetic (PA), we face a fundamental limitation. While we understand intuitively that S(S(0)) is
                the canonical symbol for what we call "2", PA lacks the machinery to express this relationship. The domain
                of PA consists solely of &#123;0, S(0), S(S(0)), ...&#125; - these are the literals. But PA cannot speak
                about its own symbols or distinguish between canonical representations and derived ones.
            </Paragraph>
            <Paragraph>Consider the equality operator in PA. When we write:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Verbatim />
                        S(S(0)) = S(S(0))
                    </Word>
                </Line>
            </Paragraph>
            <Paragraph>
                We imagine this means that the thing S(S(0)) stands for relates to itself through what the equals sign
                stands for. In our notation: <Word>
                    <Verbatim />
                    &#91;S(S(0))&#93; =&#91;=&#93; &#91;S(S(0))&#93;
                </Word>, where the brackets denote the literals these symbols reference. But PA has no machinery to express
                this distinction between symbol and literal.
            </Paragraph>
            <Paragraph>Similarly, when we write:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Verbatim />
                        P(S(0), S(0)) = S(S(0))
                    </Word>
                </Line>
            </Paragraph>
            <Paragraph>
                PA treats this purely symbolically. The expression P(S(0), S(0)) has no literal of its own - it is purely a
                representation that evaluates to S(S(0)). There is no object "1+1" in the domain; it exists only as a
                symbolic expression that shares its literal with the canonical symbol S(S(0)).
            </Paragraph>
            <Paragraph>
                In our hearts, we read both sides of the equation as referring to the literal we call "2", and we understand
                the equation to assert <Word>
                    <Verbatim />
                    2 =&#91;=&#93; 2
                </Word> at the literal level. But this understanding - this bridge between symbol and literal - exists
                outside PA itself.
            </Paragraph>
            <Heading>What This Resolves</Heading>
            <Paragraph>
                This analysis addresses several foundational issues that standard formalisms cannot capture:
            </Paragraph>
            <Heading>1. The Nature of Mathematical Equality</Heading>
            <Paragraph>
                Standard formalisms like Gödel's P (his formalization of PA in first-order logic) treat equality as
                primitive and unanalyzed. They cannot explain why <Word>
                    <Verbatim />
                    S(S(0)) = P(S(0), S(0))
                </Word> is meaningful beyond syntactic manipulation. SRT reveals that equality is actually constructed from
                the canonical symbol relationships, and that mathematical equality operates entirely in the symbolic realm
                where distinct representations can reference the same literal.
            </Paragraph>
            <Heading>2. The Symbol-Literal Distinction</Heading>
            <Paragraph>
                Mathematics conflates symbols with their referents, leading to paradoxes and confusion about what
                mathematical objects "are". By explicitly distinguishing:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Literals (the actual objects in the domain)</Line>
                <Line>Canonical symbols (the primary representations)</Line>
                <Line>Derived representations (expressions that evaluate to literals)</Line>
            </Paragraph>
            <Paragraph>
                We can finally articulate what we mean when we say "2 equals 1+1" - not that they are the same thing, but
                that their symbols refer to the same literal through the constructed machinery of symbolic equality.
            </Paragraph>
            <Heading>3. The Role of Representation in Mathematical Truth</Heading>
            <Paragraph>
                Traditional foundations cannot explain why different representations of the same mathematical object are
                recognized as equal. They simply assert it axiomatically. SRT shows that this recognition emerges from:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>The inheritance structure of symbolic relationships</Line>
                <Line>The construction of equality from canonical symbols</Line>
                <Line>The lifting of literal relationships to symbolic space</Line>
            </Paragraph>
            <Heading>4. The Incompleteness of Formal Systems</Heading>
            <Paragraph>
                Gödel showed that PA cannot prove its own consistency. SRT suggests a deeper reason: PA cannot express the
                symbol-literal distinction that would allow it to reason about its own representational structure. The
                equality it uses is purely symbolic, but it cannot articulate this fact about itself. This isn't just a
                limitation of expressive power - it's a fundamental inability to distinguish between what it says (symbols)
                and what it means (literals).
            </Paragraph>
            <Paragraph>
                Consider what Gödel actually did in his incompleteness proof: he created a numbering system (Gödel
                numbering) that allowed statements about arithmetic to refer to statements OF arithmetic. He showed that
                self-reference was possible by encoding symbolic statements as numbers. But crucially, his proof relies on
                understanding the difference between:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>A number as a literal arithmetic object</Line>
                <Line>A number as a code for a symbolic statement</Line>
            </Paragraph>
            <Paragraph>
                Gödel understood this distinction perfectly - his entire proof mechanism depends on it. When he constructs
                the sentence G that says "G cannot be proved in PA," he's explicitly using the fact that the same number can
                be both:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>A literal in the arithmetic domain</Line>
                <Line>A symbol representing a statement about arithmetic</Line>
            </Paragraph>
            <Paragraph>
                But PA itself cannot express this duality. It cannot say "this S(S(...)) is both a number AND a code for a
                statement." The statement <Word>
                    <Verbatim />
                    P(S(0), S(0)) = S(S(0))
                </Word> cannot, within PA, acknowledge that:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>P(S(0), S(0)) is a symbolic expression without its own literal</Line>
                <Line>S(S(0)) is both a literal AND a canonical representation</Line>
                <Line>The equality operates purely symbolically, relating representations</Line>
            </Paragraph>
            <Paragraph>
                SRT makes explicit what Gödel's proof implicitly requires: the ability to treat the same entity as both
                literal and symbol, to understand reference relationships between different representational levels. Gödel
                showed that PA is incomplete by demonstrating you can encode symbolic reference into arithmetic. SRT shows
                WHY this encoding leads to incompleteness: because PA lacks the metalinguistic machinery to discuss its own
                symbol-literal structure.
            </Paragraph>
            <Paragraph>
                The genius of Gödel was seeing that numbers could serve as their own metalanguage through encoding. The
                limitation he exposed wasn't computational but referential - PA cannot express the reference relationships
                that make his proof possible.
            </Paragraph>
            <Heading>Conclusion</Heading>
            <Paragraph>
                By introducing the symbol-literal distinction and showing how equality is constructed rather than primitive,
                SRT provides a foundation for understanding what mathematics actually does: it manipulates symbols in a
                realm where metaphorical reference enables the recognition of equivalent representations.
            </Paragraph>
            <Paragraph>
                The limitation isn't universal to all formalisms - it's specific to formalisms like PA and ZFC that lack a
                native concept of reference. SRT demonstrates that a formalism CAN express the symbol-literal distinction by
                choosing the right domain: referents themselves. Where PA takes numbers as primitive and ZFC takes sets as
                primitive, SRT takes reference relationships as primitive.
            </Paragraph>
            <Paragraph>
                SRT succeeds where PA fails because it takes reference relationships as primitive, defines symbols, literals
                and representations semantically, and can therefore express reference as the type of relationship shared
                between symbols and literals, or more generally, representations and the things they represent. In this way,
                SRT can express meaning by capturing the semantics of reference.
            </Paragraph>
            <Paragraph>
                This choice of domain is crucial. Where PA takes numbers as primitive and ZFC takes sets as primitive, SRT
                takes referents and their relationships as primitive. It can express:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Verbatim />
                        (2) =(2)&gt; 2
                    </Word> - the symbol-literal relationship
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        (1+1) -&gt; (2)
                    </Word> - representational inheritance
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        (2) -&gt; (eq)
                    </Word> - symbolic inheritance
                </Line>
            </Paragraph>
            <Paragraph>
                PA cannot express these relationships not because it's a formal system, but because its domain (numbers) and
                primitive relations (successor, addition) don't include reference as a concept. The incompleteness Gödel
                exposed arises from trying to force reference relationships into a domain that cannot natively express them.
            </Paragraph>
            <Paragraph>
                The profound insight is that by taking reference as primitive rather than derived, SRT can formally express
                the very metalinguistic structures that other mathematical formalisms can only gesture toward through
                encoding. Mathematics has always involved symbols referring to literals - SRT is simply the first formalism
                to make this its foundation rather than an unspoken assumption.
            </Paragraph>
        </Section>
    </Chapter>
);
