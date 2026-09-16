import { Bold, Code, Heading, Italics, Item, List, Paragraph, Ref, Title } from '@dna-platform/public';
import { Dialogue, Exchange, Participant, Topic } from '@dna-platform/public/conversation';
import { $Article } from '../../../../..reference/.book';

export default class $TheLittleTypeDocument extends $Article {
    print() {
        return (
            <Dialogue>
                <Title>The Little Type Document</Title>
                <Topic>Style</Topic>
                <Exchange>
                    <Participant print={false}>Doug</Participant>
                    <Paragraph>I want you to read the little type document that we wrote and really study style because it’s very compact and then I want you to take the same essential few equations and append what polymorphism is to the end of that document using</Paragraph>
                    <Paragraph>t’.p == t&#123;t’.p&#125;</Paragraph>
                    <Paragraph>As the essential theorem. Quickly define t&#123;p&#125; == t.p definitionally as in JavaScript, here to easily accommodate left and right associativity</Paragraph>
                    <Paragraph>I would call them, possibly the context operator</Paragraph>
                </Exchange>
                <Exchange>
                    <Participant print={false}>Claude</Participant>
                    <Code>{"This block is not supported on your current device yet."}</Code>
                </Exchange>
                <Exchange>
                    <Participant print={false}>Doug</Participant>
                    <Paragraph>I want you to read the little type document that we wrote and really study style because it’s very compact and then I want you to take the same essential few equations and append what polymorphism is to the end of that document using</Paragraph>
                    <Paragraph>t’.p == t&#123;t’.p&#125;</Paragraph>
                    <Paragraph>As the essential theorem. Quickly define t&#123;p&#125; == t.p definitionally as in JavaScript, here to easily accommodate left and right associativity</Paragraph>
                    <Paragraph>I would call them, possibly the specificity operator, though including the word context in the name is being considered</Paragraph>
                </Exchange>
                <Exchange>
                    <Participant print={false}>Claude</Participant>
                    <Paragraph>Two sections appended, same grammar as the rest — presenting sentence, grouped equations, one interpreting line.</Paragraph>
                    <Paragraph>Three flags for your red pen:</Paragraph>
                    <Code>{"Pencil\n\n1. def t{p}: t.p is definitional, so t{t'.p} == (t'.p, t).\n   Then  t'.p == t{t'.p}  is NOT an identity — it asserts\n       (t'.p, t) == t'.p\n   The pair equals its subject. By the canonical entry\n   (x =x> y with (x,y) == x), that makes t'.p the canonical\n   symbol of t at that address.\n   Verdict: substantive, and I wrote the collapse line\n   explicitly so the content is visible rather than hidden\n   in the theorem.\n\n2. You wrote t'.p == t{t'.p}.  Two turns ago the form was\n   t'.p == t'{t.p}, which collapses the other way:\n       (t.p, t') == t'.p\n   Both are collapses; they differ in which side is asked.\n   I used yours as ruled. Flagging only because they aren't\n   the same claim.\n\n3. The document uses -> throughout. The double arrow isn't\n   ruled yet, so I left it alone rather than silently\n   promoting the inheritance lines."}</Code>
                    <Paragraph>On the name: <Bold>specificity operator</Bold> is doing the work in the document, and I'd keep it. Context is what the operator supplies, but it's also what frames supply, what determiners supply, and what the qualifier supplies — so putting it in this name spends a word you'll want free. Specificity says what's distinctive: the address carries how narrow the answer is.</Paragraph>
                </Exchange>
                <Exchange>
                    <Participant print={false}>Doug</Participant>
                    <Paragraph>You can compress that a lot. No literal. Let’s leave that out. When you define t.p do t&#123;p&#125; as alternate syntax, and suggest when x -&gt; t represents inheritance, x : t is the syntactic form</Paragraph>
                    <Paragraph>Propose as a tentative that x -&gt; t means x is identified by t, which carries the</Paragraph>
                    <Paragraph>x =t&gt; x x =t&gt; t</Paragraph>
                    <Paragraph>x is identified by t, which means access part of what t represents</Paragraph>
                </Exchange>
                <Exchange>
                    <Participant print={false}>Doug</Participant>
                    <Paragraph>You can compress that a lot. No literal. Let’s leave that out. When you define t.p do t&#123;p&#125; as alternate syntax, and suggest when x -&gt; t represents inheritance, x : t is the syntactic form</Paragraph>
                    <Paragraph>Propose as a tentative that x -&gt; t means x is identified by t, which carries the</Paragraph>
                    <Paragraph>x =t&gt; x x =t&gt; t</Paragraph>
                    <Paragraph>x is identified by t, which means access part of what t represents</Paragraph>
                    <Paragraph>I want it to not use jargon like slots, because the more words you introduce the harder is to build a dictionary so I want you to study how I speak about it. Compress your version to 60% of the size, even after adding what I told you</Paragraph>
                </Exchange>
                <Exchange>
                    <Participant print={false}>Claude</Participant>
                    <Paragraph>Compressed and rebuilt. Brace sits with the dot, colon added under inheritance, identification in as tentative, literal gone. Slots, textures, and addresses are out — the working words are now identified by, property, pair, holds, answered, reaches, narrows.</Paragraph>
                    <Paragraph>One thing the identification section does that's worth watching:</Paragraph>
                    <Code>{"Pencil\n\nx =t> x  and  x =t> t  together\n\nSecond line is form 3 — object == through — so it reads\nas representation: x is a representative in t.\nThen \"reaches part of what t represents\" is not a gloss\nbut the transpilation. ✓\n\nBut it now sits above the three-line bundle defining the\nsame arrow. Two entries, one word. Either the bundle is\ninheritance under a different symbol, or the two lines\nare what the bundle's first two lines reduce to."}</Code>
                    <Paragraph>Both readings are live and the document doesn't choose, which I think is right while it's tentative.</Paragraph>
                </Exchange>
                <Exchange>
                    <Participant print={false}>Doug</Participant>
                    <Paragraph>Your: (t’.p, t) == t’.p</Paragraph>
                    <Paragraph>t&#123;t’.p&#125;</Paragraph>
                    <Paragraph>t’.p =(t’.p,t)&gt; t</Paragraph>
                    <Paragraph>That says t’.p refers to t</Paragraph>
                    <Paragraph>I mean, it does. I think that’s surprising because we think of it as a specification of the property that refers to t</Paragraph>
                    <Paragraph>That’s right but we need to see related referential results</Paragraph>
                    <Paragraph>I would move that last line should be moved to a small next section about the equivalence with symbolism</Paragraph>
                </Exchange>
                <Exchange>
                    <Participant print={false}>Claude</Participant>
                    <Paragraph>Moved. Polymorphism now carries only the two lines, and the collapse stands on its own with its referential consequence.</Paragraph>
                    <Code>{"Pencil — the third line\n\n  Axiom 2:  x == (x,y)  =|>  x --> sym\n  Instance: t'.p == (t'.p, t)  =|>  t'.p --> sym\n  Verdict: DERIVABLE, direct instance. Not an addition."}</Code>
                    <Paragraph>So the section is Axiom 2 met at the polymorphism case, which is why it earns its own heading rather than a footnote — nothing new is assumed, the existing symbolism axiom just turns out to be what specialization is.</Paragraph>
                    <Paragraph><Bold>On the surprise.</Bold> It's the direction that's surprising, not the fact. We read <Bold>t'.p</Bold> as narrower than <Bold>t.p</Bold>, so we expect it to point down, toward what it constrains. Instead it points up, at t. But that's what a symbol does — the more specific thing carries the less specific, which is why a name is shorter than what it names.</Paragraph>
                    <Paragraph>And it gives the polymorphism theorem a second reading. <Bold>t'.p == t&#123;t'.p&#125;</Bold> says the general type, asked through the specialization, answers with it. Under symbolism, that's the type answering with its own symbol. Blonde hair color doesn't merely narrow hair color — it refers back to person, and that reference is what makes the narrowing an account of a person rather than a free-standing property.</Paragraph>
                    <Paragraph>Which is a related referential result of the kind you were looking for. If you want the next one, the candidate is whether <Bold>t'.p -&gt; sym</Bold> plus <Bold>t' -&gt; t</Bold> gives a symbol chain — whether specializing twice composes as reference or only as narrowing.</Paragraph>
                </Exchange>
                <Exchange>
                    <Participant print={false}>Doug</Participant>
                    <Paragraph>(t'.p, t) == t'.p</Paragraph>
                    <Paragraph>The last section this should be removed as the third equation and put into a little new section that also says what this means symbolically which is that the first in the most specific relationship refers to the second</Paragraph>
                </Exchange>
                <Exchange>
                    <Participant print={false}>Claude</Participant>
                    <Paragraph>Done — the equation was already out of Polymorphism from the last edit, so this turn just fixed what the section says. It now opens with the general rule and closes with the instance:</Paragraph>
                    <Code>{"### Symbolism\n\nWhere the most specific relationship is its own first term,\nthat term refers to the second.\n\n(t'.p, t) == t'.p\nt'.p =(t'.p,t)> t\nt'.p -> sym\n\nThe specialized property refers to the type it specializes."}</Code>
                    <Paragraph>Polymorphism is back to two equations.</Paragraph>
                    <Paragraph>The general statement is stronger than the polymorphism case needs, and worth noting as such: it isn't a fact about specialization, it's the condition under which anything refers to anything. Specialization just happens to satisfy it. Which puts the section in a slightly odd position — it's a general result appearing at the end of a types document because that's where it was found.</Paragraph>
                </Exchange>
            </Dialogue>
        );
    }
}
