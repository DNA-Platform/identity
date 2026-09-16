import { Bold, Code, Heading, Italics, Item, List, Paragraph, Ref, Title } from '@dna-platform/public';
import { Dialogue, Exchange, Participant, Topic } from '@dna-platform/public/conversation';
import { $Article } from '../../../../..reference/.book';

export default class $NarrowingandtheDiamond extends $Article {
    print() {
        return (
            <Dialogue>
                <Title>Narrowing and the Diamond</Title>
                <Topic>Polymorphism</Topic>
                <Exchange>
                    <Participant print={false}>Doug</Participant>
                    <Paragraph>Here’s another interesting one. Type’s individuality is that it is a property that is its  own type:</Paragraph>
                    <Paragraph>t.t == t</Paragraph>
                    <Paragraph>Consider:</Paragraph>
                    <Paragraph>t’.t == t&#123;t’.t&#125;</Paragraph>
                    <Paragraph>I wiukd guess this equals t’</Paragraph>
                    <Paragraph>Can you prove it?</Paragraph>
                </Exchange>
                <Exchange>
                    <Participant print={false}>Claude</Participant>
                    <Paragraph>Ran it. The first equation holds; the guess doesn't — and it fails hard rather than merely lacking a proof.</Paragraph>
                    <Code>{"Pencil\n\nGiven\n  D1  t.p := (p, t)                property first, thing second\n  D2  t{p} := t.p\n  A3  uniqueness: (x,y) is the most specific relationship\n      for the pair (x,y) and for no other pair\n  Poly t' -> t & p  =|>  t'.p == t{t'.p}\n\nStep 1  t is a property of t.\n        t.t =|> t =t> t, which is individuality.          ✓\n\nStep 2  Poly at p := t.\n        t'.t == t{t'.t}\n        RHS  == (t'.t, t)                        D2, D1\n        Let u := t'.t.\n        THEOREM.  u == (u, t)                             ∎\n\nStep 3  By the symbolism entry, u == (u,t) gives\n        u =(u,t)> t  and  u -> sym.\n        t'.t is a symbol for t.                           ∎\n\nStep 4  Test the guess u == t'.\n        u == t'  and  u == (u,t)  =|>  t' == (t', t)\n        u == t'  and  u == (t,t')  =|>  t' == (t, t')     D1\n        Therefore  (t,t') == (t',t).\n        A3 forbids one referent being most specific for two\n        pairs. So t == t'.\n        Verdict: REFUTED for t' != t."}</Code>
                    <Paragraph>So Step 2 is real and it's the one you were reaching for — the specialization's type-property is a symbol for the general type, which is the symbolism section arriving again, this time at the type property rather than an ordinary one.</Paragraph>
                    <Paragraph><Bold>Why the intuition pulls toward t'.</Bold> The dot returns a pair, and pairs are directed. Asking t' for t's type gives the relationship <Italics>from t to t'</Italics>, not t' itself. To land on t' you'd need the pair to collapse onto its object, and Step 4 shows it can't collapse both ways at once.</Paragraph>
                    <Paragraph><Bold>The fixed point you want is there, just not through t.</Bold> Individuality at t' gives it directly:</Paragraph>
                    <Code>{"t'.t' == (t', t') == t'"}</Code>
                    <Paragraph>Every type is its own type — that's <Bold>t.t == t</Bold> holding at t' as it holds everywhere, since it's individuality and individuality is a theorem for every referent. The property that is its own type is <Bold>t'</Bold> at <Bold>t'</Bold>, not <Bold>t</Bold> at <Bold>t'</Bold>.</Paragraph>
                    <Paragraph><Bold>And Step 4 is worth keeping for a second reason.</Bold> It shows A3's uniqueness clause refuting an identification, which is the first time we've used it destructively rather than as an existence generator. Same clause, both directions.</Paragraph>
                </Exchange>
                <Exchange>
                    <Participant print={false}>Doug</Participant>
                    <Paragraph>No, it wouldn’t collapse, but what is t’’s version of t?</Paragraph>
                    <Paragraph>I think you’re not understanding the relationship to GetType</Paragraph>
                    <Paragraph>t.t is something like type.GetType() where type is the type for Type. In this unique case, type == type.GetType()</Paragraph>
                    <Paragraph>But in multiple inheritance, which we have here you can’t have that function so you can have it if the name of that function is the name of the class. Imagine type.GetType was like type.Type()</Paragraph>
                    <Paragraph>If the name of the class was reserved for every class, then something like that function would work. You need a new piece of syntax.</Paragraph>
                    <Paragraph>t.t == t is t’s type property is itself</Paragraph>
                    <Paragraph>t’.t is t’s type property from t Can we make sense of this theorem’s application to that?</Paragraph>
                </Exchange>
                <Exchange>
                    <Participant print={false}>Claude</Participant>
                    <Paragraph>You're right that I read it as "t's type" rather than "t''s answer at the t-property." Rerunning with GetType as the reading, and the answer is determinate.</Paragraph>
                    <Code>{"Pencil — what t'.t is\n\nD1  t.p := (p,t)\nB3  t.p =|> E[t'.p]: t'.p -> t.p        bundle line 3\nI   t.t == t                             individuality\n\nStep 1  B3 at p := t\n        t.t =|> E[t'.t]: t'.t -> t.t\nStep 2  I rewrites the right side\n        t'.t -> t                                      ∎\nStep 3  A3: (t,t') is unique to its pair, so the witness\n        is unique. t'.t is well-defined.               ∎\nStep 4  earlier result: t'.t == (t'.t, t), symbol for t.\n\nSo t'.t exists, is unique, is identified by t, and refers\nto t. It is the t-aspect of t' — what t' is, taken as a t.\nProper part when t' != t, since t'.t == t' forces t' == t."}</Code>
                    <Paragraph><Bold>That's the base subobject.</Bold> Dog.Animal is the Animal part of Dog: it is an Animal, it refers to Animal, and it isn't Dog. And <Bold>t.t == t</Bold> is the terminating case — Animal's Animal-part is Animal, nothing left to take.</Paragraph>
                    <Paragraph><Bold>Multiple inheritance works, and no new syntax is needed.</Bold></Paragraph>
                    <Code>{"t' -> t,  t' -> s\nt'.t == (t,t')     t'.s == (s,t')\nA3: distinct pairs, distinct referents. No ambiguity."}</Code>
                    <Paragraph>The dot with the type in the property position already is the accessor you were describing. <Bold>Dog.Animal()</Bold> and <Bold>Dog.Pet()</Bold> are <Bold>t'.t</Bold> and <Bold>t'.s</Bold>. The reason a single <Bold>GetType()</Bold> fails is that it names no pair — it asks for an answer without saying which inheritance is being asked about, and in SRT every answer is a pair. That's not a workaround for multiple inheritance, it's why the ambiguity never arises.</Paragraph>
                    <Paragraph><Bold>And writing the property gives you the inheritance for free.</Bold> From the type structure, <Bold>t'.t =|&gt; t' =t&gt; t'</Bold>, which is line one of the bundle. So <Bold>t'.t</Bold> isn't derived from <Bold>t' -&gt; t</Bold> — it's an alternate spelling of the same claim, seen from the property side.</Paragraph>
                    <Paragraph><Bold>One thing worth flagging, since it's a real design commitment.</Bold> In the diamond, <Bold>t'.t.r</Bold> and <Bold>t'.s.r</Bold> are <Bold>(r,(t,t'))</Bold> and <Bold>(r,(s,t'))</Bold> — distinct by A3. SRT gives you two r-aspects, not one. That's C++ without virtual inheritance. If you want them merged you have to assert the identification, which seems right: sharing a base is not the same as sharing an aspect, and the theory makes you say which you mean.</Paragraph>
                </Exchange>
                <Exchange>
                    <Participant print={false}>Doug</Participant>
                    <Paragraph>If you allow property narrowing, do you want that?</Paragraph>
                    <Paragraph>The friend of animal is friend. Dog’s friend is of dog</Paragraph>
                    <Paragraph>I don’t know so you play with it, but I’m going to guess that what you’re talking about is the kind of way where</Paragraph>
                    <Paragraph>a &lt;love&gt; b</Paragraph>
                    <Paragraph>That always results in two separate most specific relationships, which would be a love for b from a’s perspective and b’s love for a from b’s perspective</Paragraph>
                    <Paragraph>Could it be that you’re talking about something similar but they can have symmetry based on polymorphism? This is a place where we’ve split apart aspects of properties and types.</Paragraph>
                </Exchange>
                <Exchange>
                    <Participant print={false}>Claude</Participant>
                    <Paragraph>Played with it, and I think I mis-stated the diamond last turn. SRT doesn't give you two r's — it gives three, and the third is the one that resolves it.</Paragraph>
                    <Code>{"Pencil — the diamond\n\nt' -> t,  t' -> s,  both carrying r\n\n  t'.r    == (r, t')          direct, path-free\n  t'.t.r  == (r, (t,t'))      r as reached through t\n  t'.s.r  == (r, (s,t'))      r as reached through s\n\nA3: three distinct pairs, three distinct referents. ✓\n\nThe merged view is not something you add. t'.r exists\nbecause r is a property and t' is a thing; nothing about\nthe path is in it."}</Code>
                    <Paragraph>So the C++ problem is an artifact of having only path lookup. Ask Dog for its friend and you get Dog's friend. Ask Dog-as-a-Pet and you get the pet-reading. Both are there, and neither is a workaround.</Paragraph>
                    <Paragraph><Bold>The merge condition is one line, and I can't discharge it.</Bold></Paragraph>
                    <Code>{"  Want:  t'.t.r -> t'.r        aspects narrow the direct\n  Needs: t'.t -> t'            the aspect is a thing of the whole\n  From A3, is (x,y) -> y?  I don't have that clause settled.\n  Verdict: hinges on it. Your ruling."}</Code>
                    <Paragraph>If the pair inherits from its second element, the two aspect-r's are both narrowings of one t'.r and the diamond closes. If not, they float free and you have C++.</Paragraph>
                    <Paragraph><Bold>On your love guess — the shape is close but the case isn't the same one.</Bold> Love's two relationships are one pair reversed: <Bold>(a,b)</Bold> and <Bold>(b,a)</Bold>. The diamond's two are different pairs sharing a second element: <Bold>(t,t')</Bold> and <Bold>(s,t')</Bold>. Same directedness, different construction.</Paragraph>
                    <Paragraph>And the actual reversal is instructive because it's usually empty:</Paragraph>
                    <Code>{"  t'.t == (t,t')     t' as a t         exists under t' -> t\n  t.t' == (t',t)     t as a t'         needs t -> t'\n  Inheritance is anti-symmetric, so the reverse pair is\n  generally unpopulated. Love populates both. This doesn't."}</Code>
                    <Paragraph><Bold>Where the symmetry does come from polymorphism is between the two aspects, not within one.</Bold> From the symbolism result, <Bold>t'.t == (t'.t, t)</Bold> and <Bold>t'.s == (t'.s, s)</Bold> — each aspect is a symbol for its own base, by the same theorem, with neither privileged. That's the symmetry available here: not a mirror across a pair, but two applications of one rule at a shared subject.</Paragraph>
                    <Paragraph><Bold>And your friend line comes out right.</Bold> <Bold>animal.friend -&gt; friend</Bold>, <Bold>dog.friend -&gt; animal.friend</Bold> by polymorphism. Dog's friend is of dog, narrowed once per step, and the narrowing is what makes it dog's rather than merely an animal's.</Paragraph>
                </Exchange>
                <Exchange>
                    <Participant print={false}>Doug</Participant>
                    <Paragraph>Yeah, but you’ve probably stumbled onto a theorem where there has to exist certain things they can be swapped in, and you’re just forgetting that the full thing is an expression of the asking that includes the value and not the value itself. We would need a representation that has the concept of a property value for us to even conceive of what that means at this level. Will invent that in the semantics of properties.</Paragraph>
                </Exchange>
                <Exchange>
                    <Participant print={false}>Claude</Participant>
                    <Paragraph>Yes — and it locates the error precisely. I read <Bold>t'.t.r</Bold> and <Bold>t'.s.r</Bold> as two competing answers, then asked which one wins. But <Bold>(r,(t,t'))</Bold> is not an answer; it is <Italics>the asking of r through t at t'</Italics>. Different askings differing is the expected result, not the diamond problem. The diamond only exists if you conflate the asking with what it yields, which is the conflation the dot doesn't make.</Paragraph>
                    <Paragraph>So the merge condition I asked you to rule on was malformed. <Bold>t'.t.r -&gt; t'.r</Bold> compares two askings and calls it agreement. Withdrawn.</Paragraph>
                    <Code>{"Pencil — the theorem shape you're pointing at\n\nEstablished:\n  t' -> t,  p  =|>  t'.p == t{t'.p}\n  and t'.p exists, is unique (A3), is identified by t.p.\n\nRead as substitution: wherever t.p is asked, t'.p can\nstand. That is the Liskov condition, derived rather than\nimposed — it holds because t'.p answers t.p, not because\nanything was declared substitutable.\n\nRestated as swap-in:\n  s -> t.p  =|>  s stands where t.p stands\nVerdict: this is what the polymorphism theorem says once\nyou stop reading == as \"is the same answer as.\""}</Code>
                    <Paragraph>That's the theorem I stumbled into and mis-stated. The askings don't compete; each has a range of things that can be swapped into it, and inheritance is what puts something in that range.</Paragraph>
                    <Paragraph><Bold>And the missing piece is exactly the one you name.</Bold> There is no yield in the language. Every referent I can write is an asking or a thing; nothing is <Italics>what the asking came to</Italics>. So <Bold>t'.t.r == t'.s.r</Bold> isn't false — it isn't sayable yet, because the equation compares askings when the question is about values.</Paragraph>
                    <Paragraph>Which also explains why the earlier polymorphism collapse read as surprising. <Bold>(t'.p, t) == t'.p</Bold> looked like a specialization pointing upward at its type. Under the asking reading it's ordinary: the asking is what refers, and it refers to what it asks of.</Paragraph>
                    <Paragraph>Semantics of Properties, then. My guess at the shape, for you to knock down: the value is a referent identified through the asking but not identical to it, so the pair opens one more time and <Bold>t'.t.r</Bold> and <Bold>t'.s.r</Bold> can be distinct askings with the same yield — which is what the diamond actually wants to say.</Paragraph>
                </Exchange>
                <Exchange>
                    <Participant print={false}>Doug</Participant>
                    <Paragraph>It might be true that the equality that I gave before is also an inheritance</Paragraph>
                </Exchange>
                <Exchange>
                    <Participant print={false}>Claude</Participant>
                    <Paragraph>Testing it. Under the value/asking split, the identity has to weaken — and where it lands depends on which side you take.</Paragraph>
                    <Code>{"Pencil\n\n  Poly (as stated):  t'.p == t{t'.p}\n\n  Under the asking reading, == compares two askings.\n  Weaken to inheritance and there are two candidates:\n\n  (A)  t{t'.p} -> t'.p\n       the general type asked through the specialization\n       is a narrowing of the specialization\n  (B)  t'.p -> t{t'.p}\n       the reverse\n\n  Which way? From the symbolism section:\n      t'.p == (t'.p, t),   subject-side collapse.\n  A pair collapsing onto its subject makes the subject the\n  symbol. The pair is (t'.p, t) == t{t'.p}, whose subject\n  is t'.p.\n  So the general asking is the narrower thing.\n  Verdict: (A). The equality was a collapse in the\n  direction the symbolism entry already fixes."}</Code>
                    <Paragraph>If that's right, then <Bold>t'.p</Bold> is the general specialization and <Bold>t&#123;t'.p&#125;</Bold> is that specialization <Italics>asked of t</Italics> — a proper narrowing, not a synonym. Blonde hair color, and blonde hair color as a person's. The second is more specific because it carries the asking.</Paragraph>
                    <Paragraph>And it makes the earlier equality a degenerate case rather than a mistake: <Bold>==</Bold> holds where the asking adds nothing, which is the same condition as the canonical collapse. So <Bold>t'.p == t&#123;t'.p&#125;</Bold> is what you get when t' is canonical for that property, and inheritance is what you get otherwise.</Paragraph>
                    <Paragraph><Bold>Two things it fixes.</Bold> The diamond stops needing a merge — <Bold>t'.t.r</Bold> and <Bold>t'.s.r</Bold> are two narrowings of <Bold>t'.r</Bold>, not two rivals, which is what I couldn't derive last time because I had the arrow pointed wrong. And symbolism keeps its footing: <Bold>t'.p -&gt; sym</Bold> came from the collapse, so if the collapse is now conditional, the symbolism result is conditional on the same thing — which seems right, since a symbol is precisely a case where the asking has been absorbed.</Paragraph>
                    <Paragraph><Bold>And it's a real weakening of the document, so I'd want your ruling before editing.</Bold> The Polymorphism section currently asserts the identity flatly. If inheritance is the general case, the line becomes <Bold>t&#123;t'.p&#125; -&gt; t'.p</Bold> with the equality named as the canonical case — which would put polymorphism, symbolism, and the canonical section under one condition instead of three.</Paragraph>
                </Exchange>
                <Exchange>
                    <Participant print={false}>Doug</Participant>
                    <Paragraph>Good but it’s still an expression of polymorphism because I’m sure you couldn’t find the scenario where substituting both of those things and it is the same and in that scenario it’s possible that you find the property value so why don’t you try to find it?</Paragraph>
                </Exchange>
                <Exchange>
                    <Participant print={false}>Claude</Participant>
                    <Paragraph>Went looking for the scenario. It has a name in the theory already, and the value falls out of it.</Paragraph>
                    <Code>{"Pencil — when the two substitute alike\n\n  Collapse holds iff  (t'.p, t) == t'.p\n  Canonical entry:    x =x> y with (x,y) == x\n                      makes x the canonical symbol of y\n  Instance:           t'.p is canonical for t at p.\n\n  Read: t' is the case that answers p for t with nothing\n  left over. Asking t adds no narrowing, so\n      t{t'.p} == t'.p\n  and the two swap freely."}</Code>
                    <Paragraph><Bold>And that is where the value is.</Bold> The canonical case is exactly the case where asking adds nothing — so what survives every asking is what the askings were converging on. The value isn't a new sort; it's the fixed point of asking.</Paragraph>
                    <Code>{"Pencil — the value\n\n  def val(t'.p) := the canonical of t'.p\n                   the referent where further asking\n                   collapses rather than narrows\n\n  Criterion:  val(x) == x  iff  canonical(x) == x\n  which is the bottom entry already in the document.\n\n  Then the diamond:\n      t'.t.r  and  t'.s.r  distinct askings\n      val(t'.t.r) == val(t'.s.r) is SAYABLE and\n      contingent — two roads, one arrival."}</Code>
                    <Paragraph>So the yield you said we'd have to invent turns out to be the canonical, which the document already has. What was missing was not the object but the operator that reaches it — and the polymorphism theorem is that operator, applied until it stops giving anything back.</Paragraph>
                    <Paragraph><Bold>Which makes the section stronger rather than weaker.</Bold> <Bold>t&#123;t'.p&#125; -&gt; t'.p</Bold> is polymorphism in general, <Bold>t&#123;t'.p&#125; == t'.p</Bold> is polymorphism at the value, and the two aren't different claims — the second is the first having run out of room. Narrowing, until narrowing does nothing.</Paragraph>
                    <Paragraph>That also answers why the equality felt like an identity when you first wrote it. It is one, at the place where the theory bottoms out. It just isn't one in the middle.</Paragraph>
                    <Paragraph><Bold>The thing I can't yet get, and it may be the next ruling.</Bold> Whether every asking has a value — whether the descent from <Bold>t'.p</Bold> through its canonicals terminates. That's the acyclicity debt again, arriving from a new direction, and this time it has teeth: if some asking never bottoms out, it has no value, and the diamond has no arrival to share.</Paragraph>
                </Exchange>
                <Exchange>
                    <Participant print={false}>Doug</Participant>
                    <Paragraph>Equality at the value makes sense. I don’t think you can prove whether anything has a base although maybe we can find an axiom here. But remember that there’s such a thing as a most specific relationship so that I think it’s the kind of thing where you enumerate over everything and your system only has so many commitments to so many referents. We don’t have functions so I don’t think anything can spiral out and that’s the reason why we don’t. You never read a dictionary entry and worry that it creates an infinite number of other words.</Paragraph>
                </Exchange>
                <Exchange>
                    <Participant print={false}>Claude</Participant>
                    <Paragraph>The dictionary argument does more work than the acyclicity axiom would, and I think it's the right shape.</Paragraph>
                    <Code>{"Pencil — the finiteness case\n\n  1  No function symbols. So no term-forming operation\n     that generates a fresh referent from any referent.\n  2  The pair is not such an operation: (x,y) is asserted\n     by A3 only where x and y already stand in R.\n  3  A3 makes it unique to that pair — one per pair,\n     not one per naming.\n  4  Every referent enters by transduction, a discharge\n     event in the record.\n  5  Discharges are finite at any time.\n\n  Verdict: the domain at any time is finite, and the\n  askings over it are finite. No spiral available.\n\n  Contrast: successor is a function, so 0 generates\n  infinitely by syntax alone. SRT has no such thing."}</Code>
                    <Paragraph>So the finiteness isn't an axiom you need — it's already paid for by the no-function-symbols commitment. That's the same commitment that made transduction necessary, and it turns out to be the same one that makes the descent terminate. One decision, two results.</Paragraph>
                    <Paragraph><Bold>And your dictionary point is the precise reason.</Bold> Every entry is defined by words already in the book. Reading one gives you no new words. The book is finite because it never manufactures a term — it only relates the ones it has. Which is what "no functions" means operationally.</Paragraph>
                    <Paragraph><Bold>What this converts.</Bold> Acyclicity was on the debt list as something to assume. It's now conditional finiteness — the descent terminates because there's nowhere for it to go, not because we forbade it from cycling. Two differences worth having:</Paragraph>
                    <Paragraph>The bound moves with the record. What has a value now is what has bottomed out among the referents discharged so far, and transduction can add a step below. The frontier is open without the descent being infinite.</Paragraph>
                    <Paragraph>And cycles aren't excluded, only unboundedness. A finite domain can still have <Bold>x -&gt; y -&gt; x</Bold>, which would be an asking with no value in a finite theory. So the residual question isn't whether the descent is infinite — it's whether it can close on itself. That's a much smaller thing to rule on, and it's about A3's antisymmetry rather than about the size of anything.</Paragraph>
                </Exchange>
                <Exchange>
                    <Participant print={false}>Doug</Participant>
                    <Paragraph>Yeah, but you can have those cycles in properties</Paragraph>
                </Exchange>
                <Exchange>
                    <Participant print={false}>Claude</Participant>
                    <Paragraph>Right, and the counterexample is right there in the document:</Paragraph>
                    <Code>{"  x.x == (x,x) == x         individuality\n  Ask x for x and you get x. A one-step cycle,\n  and it's a theorem, not a defect."}</Code>
                    <Paragraph>So antisymmetry is already false and there was nothing to rule on. Cycles are ordinary here.</Paragraph>
                    <Paragraph><Bold>Which changes what "value" means.</Bold> I defined it as the fixed point of asking, and a cycle has a fixed point — it just isn't a floor. <Bold>x.x == x</Bold> is asking that returns itself, which is exactly the collapse condition. The cycle <Italics>is</Italics> the value.</Paragraph>
                    <Code>{"Pencil — corrected\n\n  val(x) := where asking stops narrowing\n  Two ways it stops:\n    (a) descent terminates at a canonical\n    (b) descent closes on itself\n  In both, asking again gives back what you had.\n  (a) is a special case of (b) with cycle length one.\n\n  Verdict: termination and cycling are the same\n  phenomenon. There is one condition, not two."}</Code>
                    <Paragraph>So the acyclicity debt doesn't need discharging — it needs deleting. It was asking the theory to forbid the case it already proves.</Paragraph>
                    <Paragraph><Bold>And it recovers what I lost two turns ago about the diamond.</Bold> <Bold>val(t'.t.r) == val(t'.s.r)</Bold> doesn't require the two roads to reach a floor. It requires them to reach the same closure, and a closure can be a loop.</Paragraph>
                    <Paragraph>Mutual properties are then the ordinary case rather than a hazard. Parent and child each defined through the other, neither reducible, both stable. Nothing spirals because nothing is generated — the pair between them exists once, by A3, and asking either direction returns something already in the book.</Paragraph>
                    <Paragraph>Which is your dictionary again, at the level of a single entry pair. Two words defined in terms of each other is not a broken dictionary. It's most of a real one.</Paragraph>
                </Exchange>
                <Exchange>
                    <Participant print={false}>Doug</Participant>
                    <Paragraph>Yeah, but you can have those cycles in properties. I’m saying this just in normal programming you can absolutely have two things that have properties as cycles. In fact, it’s one of the essence of a relationship with possession. If you possess a lover, then somewhere in that obstruction, we expect there to be a cycle and it’s part of the infinity of love.</Paragraph>
                </Exchange>
                <Exchange>
                    <Participant print={false}>Claude</Participant>
                    <Paragraph>Right, and cycles aren't a defect to be ruled out — they're the case the theory should be describing. Circular object graphs are ordinary, and mutual possession is the paradigm.</Paragraph>
                    <Code>{"Pencil — the cycle is finite\n\n  a.lover == b,  b.lover == a\n  Referents:  a, b, (lover,a), (lover,b)\n  A3 gives one per pair. Four. Closed.\n\n  Traversal is unbounded:\n    a.lover.lover.lover ...\n  Each step is well-formed. Each names something already\n  in the domain. Nothing new is minted.\n\n  Verdict: the domain stays finite. The WALK doesn't\n  terminate. These were the same question in my last\n  pencil and they aren't."}</Code>
                    <Paragraph>So the finiteness argument survives untouched, and what it never gave me was termination of descent. I had them fused.</Paragraph>
                    <Paragraph><Bold>Which relocates the value.</Bold> I defined it as the fixed point of asking — where narrowing stops. In a cycle nothing stops, but nothing narrows either: <Bold>a.lover.lover == a</Bold> returns rather than descends. So the value is where the asking <Italics>closes</Italics>, and closure is either bottoming out or returning. Both are arrivals; only one is a floor.</Paragraph>
                    <Paragraph>And that's the better definition, because it doesn't require a bottom. Your suspicion that no base can be proved holds — the base was never what the value needed. What it needs is that the walk stops giving you anything new, and in a finite domain that's guaranteed: every walk either halts or repeats, and repeating is a value the same as halting is.</Paragraph>
                    <Paragraph><Bold>The infinity of love, formally.</Bold> The referents are four, the traversal is endless, and the endlessness is real without anything being unbounded. It isn't that there's infinitely much there — it's that the going never exhausts what's there, because the going returns. That's a nicer result than the acyclic version would have been, and it's the one the domain actually supports.</Paragraph>
                    <Paragraph><Bold>One consequence for the diamond, since it changes the arrival condition.</Bold> Two askings share a value if their walks close on the same thing — same floor, or same cycle. The second case is new and I think you want it: <Bold>t'.t.r</Bold> and <Bold>t'.s.r</Bold> can arrive at the same loop without either reaching a bottom, and that's still one arrival.</Paragraph>
                </Exchange>
            </Dialogue>
        );
    }
}
