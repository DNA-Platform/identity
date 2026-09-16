import { Bold, Code, Heading, Italics, Item, List, Paragraph, Ref, Title } from '@dna-platform/public';
import { Dialogue, Exchange, Participant, Topic } from '@dna-platform/public/conversation';
import { $Article } from '../../../../..reference/.book';

export default class $TheTenReferents extends $Article {
    print() {
        return (
            <Dialogue>
                <Title>The Ten Referents</Title>
                <Topic>Semantic Reference Theory</Topic>
                <Exchange>
                    <Participant print={false}>Doug</Participant>
                    <Paragraph>Read the last conversation, and the two foundations documents. Focus on the ten referents, the type semantics, and then everything you had to learn in the last conversation about SRT to be able to generate the abstractions and learn about how you did sketches and go back to using the sketches so you can operate in a much more formal manner</Paragraph>
                </Exchange>
                <Exchange>
                    <Participant print={false}>Claude</Participant>
                    <Paragraph>Read: the Foundational Sketch, the Formal Foundation, and the Types &amp; Properties session end to end.</Paragraph>
                    <Paragraph><Bold>The ten resolve, and the two routes I was torn between turn out to be the same list.</Bold></Paragraph>
                    <Code>{"Pencil — the ten\n\nRoute A: names bound by the Sketch's existentials, in order\n  1 subject   2 object      3 relationship\n  4 reference 5 referent\n  6 representative  7 representation\n  8 identification  9 identity\n  10 individuality\n\nRoute B: five through-terms + their five non-through role-holders\n  through:  relationship, reference, representation,\n            identification, individuality\n  holders:  subject, object, referent, representative, identity\n\nA == B, elementwise.  No folding required.\nLast session I folded individual/individuality to reach ten;\nthat was fitting to your number. It isn't needed — counting\nbound names gives ten on its own, and the partition gives the\nsame ten. The subset claim is then exact by construction."}</Code>
                    <Paragraph>The five are the ten's through-occupants, and the subset is visible in the forms rather than laid over them — reference sits in subject <Italics>and</Italics> through; representation in through <Italics>and</Italics> object; identification coincides subject with object; individuality collapses all three. The progression is a demonstration that the through-slot is an ordinary domain position.</Paragraph>
                    <Paragraph><Bold>One residual, and it's the only place the tally strains.</Bold> The individuality form is written <Bold>individual =individual&gt; individual</Bold>, so its through-occupant is <Italics>individual</Italics>, while the existential binds <Italics>individuality</Italics>. Every other pair splits cleanly — identity is held through identification. If individuality is the fifth through-term by parallel, the form wants <Bold>individual =individuality&gt; individual</Bold>; if total coincidence is the point, then <Italics>individual</Italics> is the tenth name and <Italics>individuality</Italics> is the header. Your ruling.</Paragraph>
                    <Paragraph><Bold>Type semantics as it stands at HEAD:</Bold></Paragraph>
                    <Code>{"def t.p: (p, t)              dot hangs off the object\n\nt =p> t                      type identified by its properties\np =t.p> t                    property related to type through the pair\nt.p =|> t =p> t              writing the pair says the type has it\nt.p =|> t -> type            one property suffices\n\nx -> t:\n    x =t> x\n    t =x.t> x\n    A[t.p]: E[x.p]: x.p -> t.p\n\ncanonical: (t,x) == t        second line becomes reference itself\nbottom:    x =x> x, x.x == (x,x) == x, canonical(x)==x =|> literal"}</Code>
                    <Paragraph>Three lines because three is what inheritance costs — my four gates were fat, not yours thin: B1 discharges the witness existential, and typehood of t then derives from the instance entry rather than being asserted.</Paragraph>
                    <Paragraph><Bold>What I actually learned about sketches: mine translated, they didn't derive.</Bold> Every scratchpad that week was a dictionary between sugar and R — no premises, no steps, no verdict. The one that did real work is the one that came back negative:</Paragraph>
                    <Code>{"Goal:  y -> x  =|>  y.p : x.p\nTranspile: R(y,y,x) =|> R((y,p),(y,p),(x,p))\nVerdict: NOT DERIVABLE. Needs an unstated axiom — that\ninheritance carries down to most-specific relationships."}</Code>
                    <Paragraph>That located the triangle as a <Italics>demand</Italics> for profile inheritance rather than a theorem, which is worth more than the fluent version was.</Paragraph>
                    <Paragraph><Bold>Two debts stand, and I won't build on them without saying so.</Bold> The arrow has two readings I've used interchangeably without reconciling — the Sketch's <Bold>s -&gt; t</Bold> between through-terms, and the bold <Bold>x -&gt; t := R(x,x,t)</Bold>. And profile inheritance is a missing axiom, universal-or-existential still open.</Paragraph>
                    <Paragraph>Pencil and paper is where you left it, not Z3. If you want, the arrow reconciliation is the one I'd take up first, since the type work rests on it.</Paragraph>
                </Exchange>
                <Exchange>
                    <Participant print={false}>Doug</Participant>
                    <Paragraph>Yeah I’m not sure the arrow means type yet though I think everything might be a type.</Paragraph>
                    <Paragraph>That’s part of what we are working on. If</Paragraph>
                    <Paragraph>x -&gt; t</Paragraph>
                    <Paragraph>Might: x -&gt; t.p? x -&gt; t?</Paragraph>
                    <Paragraph>We have: x —&gt; t</Paragraph>
                    <Paragraph>As an operator option if we need distinction between ‘identified by’ and type of, and I would vote to have the longer arrow, but with:</Paragraph>
                    <Paragraph>x:t</Paragraph>
                    <Paragraph>As alternate syntax for different contexts</Paragraph>
                    <Paragraph>x -&gt; t &amp; x !—&gt; t</Paragraph>
                    <Paragraph>This looks good here,</Paragraph>
                    <Paragraph>x:s -&gt; y:t =|&gt; s -&gt; t</Paragraph>
                    <Paragraph>Interesting application in between though I’m not sure that’s a theorem and it really doesn’t matter I’m just showing syntax</Paragraph>
                </Exchange>
                <Exchange>
                    <Participant print={false}>Doug</Participant>
                    <Paragraph>Yeah I’m not sure the arrow means type yet though I think everything might be a type.</Paragraph>
                    <Paragraph>That’s part of what we are working on. If</Paragraph>
                    <Paragraph>x -&gt; t</Paragraph>
                    <Paragraph>Might: x -&gt; t.p? x -&gt; t?</Paragraph>
                    <Paragraph>We have: x —&gt; t</Paragraph>
                    <Paragraph>As an operator option if we need distinction between ‘identified by’ and type of, and I would vote to have the longer arrow, but with:</Paragraph>
                    <Paragraph>x:t</Paragraph>
                    <Paragraph>As alternate syntax for different contexts</Paragraph>
                    <Paragraph>x -&gt; t &amp; x !—&gt; t</Paragraph>
                    <Paragraph>This looks good here,</Paragraph>
                    <Paragraph>x:s -&gt; y:t =|&gt; s -&gt; t</Paragraph>
                    <Paragraph>Interesting application in between though I’m not sure that’s a theorem and it really doesn’t matter I’m just showing syntax</Paragraph>
                    <Paragraph>Well, that’s not rule out the type interpretation yet</Paragraph>
                </Exchange>
                <Exchange>
                    <Participant print={false}>Claude</Participant>
                    <Paragraph>Taking the notation as proposed and running it against HEAD. The reconciliation turns out to hinge on a single bracket.</Paragraph>
                    <Code>{"Pencil — the three arrows\n\nA. Sketch:  s -> t   :=  [x,y]: x =s> y =|> x =t> y\n            subsumption between through-terms\nB. Bold:    x -> t   :=  x =t> x  ==  R(x,x,t)\n            identified by\nC. Bundle:  the three lines\n            x =t> x ; t =x.t> x ; A[t.p]:E[x.p]: x.p -> t.p\n\nClaim:  A =|> B.\nStep 1  individuality (theorem):  R(x,x,x),  i.e.  x =x> x\nStep 2  instantiate A with s:=x at the pair (x,x)\nStep 3  antecedent discharged by Step 1\nStep 4  consequent:  x =t> x  ==  R(x,x,t)  ==  B     ∎\n\nBlocker: the Sketch writes the binder as [x,y]. Under the\nFormal Foundation's convention  E[x,y] := E{x,y}: x != y,\nthe pair (x,x) is outside the binder's range and Step 2\ndoes not fire.\n\nVerdict:  A =|> B  iff the binder is {x,y}.\n          With [x,y]:  NOT DERIVABLE."}</Code>
                    <Paragraph>So the arrow debt reduces to one ruling from you: distinct or possibly-equal in the Sketch's definition line. If <Bold>&#123;x,y&#125;</Bold>, A and B are one dictionary entry and <Bold>-&gt;</Bold> is unambiguously <Italics>identified by</Italics> — B is just A evaluated where individuality already supplies the antecedent. If <Bold>[x,y]</Bold>, they are two entries and need two symbols.</Paragraph>
                    <Paragraph>Related reading question in the same line: the Sketch writes <Bold>E[x,y]</Bold> where the pointwise variant <Bold>s -(x,y)&gt; t</Bold> suggests the general form should be <Bold>A</Bold>. Existential subsumption ("agrees at some pair") is a much weaker relation than the theorems have been using.</Paragraph>
                    <Paragraph><Bold>On the notation itself, which I think is right:</Bold></Paragraph>
                    <Paragraph><Bold>x --&gt; t</Bold> for type-of, <Bold>x -&gt; t</Bold> for identified-by, and the bundle becomes the definition of <Bold>--&gt;</Bold> rather than of <Bold>-&gt;</Bold>. That makes <Bold>x -&gt; t &amp; x !--&gt; t</Bold> non-vacuous and gives it a precise reading: t identifies x, but either t fails to hold x through their pair, or some <Bold>t.p</Bold> goes unanswered at x. That's the case that earns the second symbol.</Paragraph>
                    <Paragraph><Bold>x:t</Bold> as alternate syntax generalizes cleanly — the typing judgment we already had, <Bold>x.p : t.p == x.p -&gt; t.p</Bold>, stops being a special construction and becomes the colon applied at the pair. One entry instead of two.</Paragraph>
                    <Paragraph><Bold>One collision to note:</Bold> the Formal Foundation already spends <Bold>x --&gt; y</Bold> on transitive closure, and Theorems 1–2 use it that way (<Bold>sym --&gt; rep</Bold>, <Bold>(x) !--&gt; eq</Bold>). HEAD lets the new ruling win, but those two theorems will need rereading under it.</Paragraph>
                    <Paragraph><Bold>And on everything being a type:</Bold> that's already derived at HEAD, degenerately — individuality gives every referent a witness, the instance entry fires, <Bold>x.x == (x,x) == x</Bold> says which type. So every referent is <Bold>x --&gt; x</Bold>. What's not settled is whether <Bold>--&gt;</Bold> ever holds nontrivially without the profile axiom, since line three of the bundle is exactly the open question.</Paragraph>
                    <Paragraph><Bold>x:s -&gt; y:t =|&gt; s -&gt; t</Bold> is well-formed as annotation syntax and reads as a covariance condition on the annotations. Not a theorem as far as I can tell, but the syntax carries it fine.</Paragraph>
                </Exchange>
                <Exchange>
                    <Participant print={false}>Doug</Participant>
                    <Paragraph>No collision, modern SRT docs start at foundations. We’re moving all of this to a repo soon</Paragraph>
                    <Paragraph>Now do I think what we might have is:</Paragraph>
                    <Paragraph>x -&gt; t t.p =|&gt; x.p x in c in p (Which is x =c&gt; c =p&gt; p)</Paragraph>
                    <Paragraph>But we might also have x identified by t, t.p, p, c</Paragraph>
                    <Paragraph>This means that there would be a sort of transitivity to identification</Paragraph>
                    <Paragraph>This would not surprise me because I chose identification for a reason and there’s a lot of ways that something can be an identification. We have most specific relationships and they need to be identified by many many things.</Paragraph>
                    <Paragraph>But there are a lot of ways that that can be true</Paragraph>
                    <Paragraph>x =i&gt; x</Paragraph>
                    <Paragraph>You have both directions of i and x relating free, and you have the idea that one is missing, creating reference and symbol semantics, both sharing parents, thus making them symmetric at some polymorphic level. Perhaps we can make these distinctions. The easiest is if:</Paragraph>
                    <Paragraph>x in t, x =t&gt; x</Paragraph>
                    <Paragraph>x in c in t</Paragraph>
                    <Paragraph>Means</Paragraph>
                    <Paragraph>x in t (Its painting in - the brushstroke in the sun is still in Monet’s impression sunrise)</Paragraph>
                    <Paragraph>We expect a lot of things to be in each other’s representations</Paragraph>
                    <Paragraph>x:t &amp; t.p =|&gt; p =x.p&gt; x =|&gt; x =x.p&gt; x</Paragraph>
                    <Paragraph>This is interesting, and it opens up what I think might be adjectives</Paragraph>
                    <Paragraph>Suppose p was hair, t.p is the type of hair for t, and x.p was long hair</Paragraph>
                    <Paragraph>might x.p =x.x.p&gt; x mean something</Paragraph>
                    <Paragraph>It’s like x’s particular x.p - no that doesn’t seem sensible, but somewhere in this space and adjective would arise because we’re looking for a property of x.p - x.p.q? Can we get very long hair like that?</Paragraph>
                    <Paragraph>We’re going in that direction</Paragraph>
                    <Paragraph>But I think this reflection helped me see it. The single arrow might really just be identification.. x -&gt; t means x is identified by t (in part), certainly not comprehensively</Paragraph>
                    <Paragraph>Maybe x —&gt; t</Paragraph>
                    <Paragraph>Means x is a canonical for t. t says all we need to know about x</Paragraph>
                </Exchange>
                <Exchange>
                    <Participant print={false}>Claude</Participant>
                    <Paragraph>Working the pencil on these in order. One clean collapse, one relocation, and two axioms that turn out to be different axioms.</Paragraph>
                    <Code>{"Pencil 1 — x.x.p\n\n  x.x   :=  (x,x)\n  HEAD (types doc):  x.x == (x,x) == x    individuality\n  therefore  x.x.p  ==  x.p                     ∎\n\n  Verdict: not insensible — trivial. The dot on a collapsed\n  pair is the identity operation. Nothing is there to mean."}</Code>
                    <Paragraph>So your instinct was right and it's provable why: <Bold>x.x</Bold> is a no-op, so the second dot never opens a new slot. The adjective can't live there.</Paragraph>
                    <Code>{"Pencil 2 — where it does live\n\n  x.p    :=  (p,x)         x's hair\n  x.p.q  :=  (q,(p,x))     the q of x's hair\n  Well-formed: x.p is a referent, every referent is a type\n  (derived, via individuality + instance entry), so it takes\n  properties like any other."}</Code>
                    <Paragraph>If p is hair and q is length, then <Bold>x.p.q</Bold> is the length of x's hair — a referent, not yet an adjective. The adjective is the <Italics>value</Italics> that identifies it: <Bold>x.p.q -&gt; long</Bold>. Which lands exactly on the -ivity work — long is a standing manner, and <Bold>-&gt; long</Bold> is the manner being predicated.</Paragraph>
                    <Paragraph><Bold>Which gives two candidate readings of "very long," and I don't think they're equivalent.</Bold> Either another dot, <Bold>x.p.q.r</Bold> with r a degree — but that makes <Italics>very</Italics> a property of the length rather than a modification of <Italics>long</Italics>. Or specialization in the value lattice, <Bold>very_long --&gt; long</Bold>, intensification as narrowing. The second matches how adverbs behave (very only attaches to gradables) and needs no new machinery. Your call, but I'd bet on the second and keep the dot for genuine part-descent.</Paragraph>
                    <Code>{"Pencil 3 — the two \"in\"s\n\n  You wrote both, and they transpile differently:\n\n  (a) x in t   as  x =t> x    ==  R(x,x,t)     identification\n  (b) x in c   as  x =c> c    ==  R(x,c,c)     representation\n                                (form 3: representative in\n                                 a representation)\n\n  Monet is (b): the brushstroke is a representative in the\n  painting. Your chain x =c> c =p> p is (b) twice.\n\n  Transitivity of (b):\n    given R(x,c,c), R(c,p,p)   want R(x,p,p)\n    Nothing in the Sketch or the Foundation licenses it.\n    Verdict: NOT DERIVABLE. New axiom.\n\n  Transitivity of (a):\n    given R(x,x,t), R(t,t,c)   want R(x,x,c)\n    Also not derivable. Also a new axiom.\n    And a DIFFERENT one — different slot pattern, neither\n    implies the other."}</Code>
                    <Paragraph><Bold>And there's a constraint worth flagging on (b).</Bold> Set membership is <Italics>not</Italics> transitive — a ∈ &#123;a&#125; and &#123;a&#125; ∈ &#123;&#123;a&#125;&#125; but a ∉ &#123;&#123;a&#125;&#125;. Your Monet intuition says representation-in <Italics>is</Italics>. If you take that axiom, then representations are mereological wholes and the set reading of the same triples has to be a genuinely different reading, not a synonym. That's consistent with last session's ruling that set and representation name roles selected by the frame — but it means the difference now has teeth, and "every representation is viewed as a type of set" needs the frame to <Italics>suppress</Italics> transitivity rather than merely rename the through-term.</Paragraph>
                    <Code>{"Pencil 4 — your chain\n\n  x -> t & t.p  =|>  x.p ?\n  Bundle line 3:  A[t.p]: E[x.p]: x.p -> t.p\n  This gives existence of x.p directly. DERIVABLE from the\n  bundle, IF the bundle defines the arrow you're using.\n\n  Then p =x.p> x :  type-structure line 2 at x.\n  Then x =x.p> x :  type-structure line 1 at x.\n  Both fire, since every referent is a type.\n  Verdict: DERIVABLE, given the bundle."}</Code>
                    <Paragraph>So x is identified by both p and its own <Bold>x.p</Bold>. That's your transitivity of identification appearing as a theorem in the profile case — which supports reading the single arrow as identification, since the thing that comes out is a <Italics>partial</Italics> identification chain, exactly what "not comprehensively" predicts.</Paragraph>
                    <Paragraph><Bold>On the arrow proposal, I think it's right and it fixes the lattice.</Bold> If <Bold>-&gt;</Bold> is partial identification, then many things identify x, they compose, and "most specific relationships need to be identified by many many things" is the expected shape rather than a puzzle. Partial identification composing to partial identification is harmless — that's why transitivity is safe here and would not be safe for a comprehensive relation.</Paragraph>
                    <Paragraph>One thing to pin: you wrote <Bold>x --&gt; t</Bold> means "x is a canonical for t" and then "t says all we need to know about x." Those point opposite ways. HEAD's canonical entry is <Bold>x =y&gt; y</Bold> with <Bold>(x,y) == y</Bold> for x canonical-representative-of y, and the types doc uses <Bold>(t,x) == t</Bold> for the collapse. Which end holds the canonical in the double arrow — is t the summary of x, or x the representative of t?</Paragraph>
                </Exchange>
            </Dialogue>
        );
    }
}
