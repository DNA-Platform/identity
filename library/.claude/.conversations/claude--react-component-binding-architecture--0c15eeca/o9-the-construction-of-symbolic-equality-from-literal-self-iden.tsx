import { Chapter, Heading, Line, List, Paragraph, Section, Title, Word } from '@dna-platform/public';
import { CodeBox, Opaque, Verbatim } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ The Construction of Symbolic Equality from Literal Self-Identity v2 ]]</Title>
        <Section>
            <Opaque />
            <Heading>The Construction of Symbolic Equality from Literal Self-Identity at version 2</Heading>
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
                        (2) -&gt; eq
                    </Word>: by transitivity <Word>
                        <Verbatim />
                        (1+1) -&gt; eq
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
            <Paragraph>Since equality is transitive through shared reference:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    If <Word>
                        <Verbatim />
                        x =eq&gt; z
                    </Word> and <Word>
                        <Verbatim />
                        y =eq&gt; z
                    </Word>, then <Word>
                        <Verbatim />
                        x =eq&gt; y
                    </Word>
                </Line>
            </Paragraph>
            <Paragraph>Applied symbolically:</Paragraph>
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
            <Heading>Conclusion</Heading>
            <Paragraph>
                By introducing the symbol-literal distinction and showing how equality is constructed rather than primitive,
                SRT provides a foundation for understanding what mathematics actually does: it manipulates symbols in a
                realm where metaphorical reference enables the recognition of equivalent representations. This isn't a bug
                in mathematical formalism - it's the very mechanism that makes mathematics possible.
            </Paragraph>
            <Paragraph>
                The fact that PA cannot express its own symbol-literal structure isn't a weakness to be fixed, but a
                necessary limitation of any formal system that operates purely symbolically. True mathematical understanding
                requires stepping outside the formalism to see both the symbols and what they reference - precisely what SRT
                provides.
            </Paragraph>
        </Section>
    </Chapter>
);
