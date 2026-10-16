import { Bold, Chapter, Date, Emphasis, Paragraph, Title, Word } from '@dna-platform/public';
import { CodeBox, Dated, Message, Speaker, Verbatim } from '../../../.manual/.book';
import { Action } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[6 June 2026](2026-06-06)</Date>
        </Dated>
        <Title>[[ 6 June 2026 ]]</Title>
        <Message
            at="2026-06-06T12:29:42.862941Z"
        >
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Take a look in the recent project documents. The evolution one. We are doing pretty well. Learn the syntax
                too. You have to understand the definitions in the syntax to lower it to first order logic so you can reason
                formally
            </Paragraph>
            <Paragraph>I want to see if we can divide ip a big insight into axioms with semantic meaning</Paragraph>
        </Message>
        <Message
            at="2026-06-06T12:32:17.481797Z"
        >
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Read /mnt/project/The_Evolution_of_SRT</Action>
            <Paragraph>Let me read the middle phases I'm missing.</Paragraph>
            <Action>Read /mnt/project/The_Evolution_of_SRT</Action>
            <Paragraph>
                I have the shape of it. Let me read the formal foundation and the FOL spec so I'm reasoning from the actual
                transpilation rules, not from intuition.
            </Paragraph>
            <Action>Read /mnt/project/Doug__Semantic_Reference_Theory__A_Formal_Foundation</Action>
            <Action>Read /mnt/project/Seren__First-Order_Logic__Complete_Formal_Specification</Action>
            <Paragraph>
                Read the Evolution doc end to end, plus the Formal Foundation and the FOL spec for the lowering target. We
                <Word>
                    <Emphasis />
                    are
                </Word> doing well — Phases I–IV are load-bearing and the current-edge section is honest about exactly where
                the soft spots are. Let me lock the syntax→FOL dictionary first, since that's the prerequisite you named,
                then show where lowering actually bites.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The lowering dictionary
                </Word> (everything bottoms out in one ternary <Word>
                    <Verbatim />
                    R
                </Word>):
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`x =t> y        R(x,y,t)              the sole primitive
x !=t> y       ¬R(x,y,t)
x == y         x = y                 (== is FOL-native; see the eq seam below)
x => y         ∃t R(x,y,t)           relatedness; ≡ R(x,y,r) once Universality fixes r
s -> t         ∀u∀v(R(u,v,s) → R(u,v,t))     RELATION reading
x -> t         R(x,x,t)                       SELF-RELATION reading  ← the two collide
s !-> t        ∃u∃v(R(u,v,s) ∧ ¬R(u,v,t))
(x,y)          eliminated by expansion to the Specification witness — never a function symbol
=|> & | || <iff> !   → ∧ XOR ∨ ↔ ¬
E[x]:P  →  ∃x P     E(x:Q):P  →  ∃x(Q ∧ P)     free vars universally closed`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    One that lowers clean
                </Word> — Specification, using only the relation reading:
            </Paragraph>
            <CodeBox>
                {`∀x∀y( (∃u R(x,y,u)) →
        ∃s( R(x,y,s) ∧ ∀t( R(x,y,t) → ∀p∀q(R(p,q,s)→R(p,q,t)) ) ) )`}
            </CodeBox>
        </Message>
    </Chapter>
);
