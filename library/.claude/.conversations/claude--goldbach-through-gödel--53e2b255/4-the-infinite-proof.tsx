import { Append, Archive, Bold, Chapter, Correction, Date, Emphasis, Formalism, Heading, Idea, Importance, Line, List, Matter, Note, Paragraph, Part, Question, Reference, Remark, Reminder, Result, Revision, Summary, Table, Title, Word } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/33-the-code-box~code.tsx';
import { Message, Quoted, Speaker, Verbatim } from '../../../.manual/29-the-conversation~code.tsx';
import { Action } from '../../.manual/1-the-action-and-the-result~code.tsx';
import { Attachment } from '../../.manual/2-the-artifact-and-the-attachment~code.tsx';
import { Origin } from '../../.manual/8-the-origin~code.tsx';
import { Dated } from '../../../.manual/4-the-date~code.tsx';

export default () => (
    <Chapter>
        <Part>The Finite Proof</Part>
        <Dated>
            <Date>[19 October 2026](2026-10-19)</Date>
        </Dated>
        <Title>[[ The Infinite Proof ]]</Title>
        <Message
            at="2026-10-19T14:55:44.212269Z"
        >
            <Origin>136357fd-e6a6-4c27-8a95-0ad5486e3132</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Matter>
                Infinite proof; the ω-rule; induction; ¬G; finite proof
            </Matter>
            <Summary>
                He takes the infinite proof apart: it collapses to one assumption, a finite program plus belief in
                it; his removal result, induction and ∀-introduction admissible under the ω-rule, lands as a
                theorem; ¬G proves the self-neutralizing axiom that an infinite proof exists, finiteness
                unwritable inside PA.
            </Summary>
            <Paragraph>
                "Take your finiteness commitment seriously" - to not means not G is a fine assumption. But.. we can check
                infinite things so can't we check every step of teh computation in turings decidability? Do we just admit
                that computers not are powerful enough to conclude that which is true? Infinite length proof are onle
                sensible if the thing that took that many steps is assumed true because we believe its infinite, thus making
                an axiom that has a finite length proof. Computation and logic really drift in the case of infinite length
                proofs, honestly. And when you allow those, you might as well allow infinite length statemetns. You're going
                to be able to encode whole finite theories in a single proof of one theorem because they are steps along the
                way. Don't imagine you'll ever read that concept in a library, but even though proof is a thing designed for
                matheamticians to share and read with each other, you should take on faith that this proof is that long
                (wait that's an assumption and those have a length 1 proof!)
            </Paragraph>
        </Message>
        <Message
            at="2026-10-19T14:56:27.060426Z"
        >
            <Origin>7003d68f-e251-4371-a6c4-07fe44518dfc</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Result>
                Proven, Claude's, from which he draws the removal result: an infinite proof is a finite program
                plus belief in its correctness; recognizing ω-proofs is Π¹₁-complete, harder than the theorem;
                proof length measures what you didn't assume — 'proof is the finite part of belief.'
            </Result>
            <Paragraph>
                Your collapse is exact, and it can be sharpened to a specific claim: an infinite proof has no more content
                than one assumption.
            </Paragraph>
            <Heading>What an infinite proof actually contains</Heading>
            <Paragraph>
                Take the ω-rule proof of ∀nP(n). It has infinitely many branches, but anyone who presents it presents a
                <Word>
                    <Emphasis />
                    rule
                </Word> for generating branch n from n. That rule is a finite program. So the proof decomposes into: a
                finite program, plus the belief that the program produces a correct proof for every n. The second part is a
                universal statement about the program. It is exactly as hard as the theorem. The branches add nothing; the
                program is the proof, and its correctness-for-all-n is the assumption, which as you say has a length-1
                proof.
            </Paragraph>
            <Paragraph>
                And then even checking it drifts out of reach. The set of codes of recursive ω-proofs is Π¹₁-complete.
                Recognizing that an infinite object <Word>
                    <Emphasis />
                    is
                </Word> a proof is harder than any arithmetical truth, including the theorem it proves. So proof-checking,
                the thing proof was invented to make finite, becomes harder than the problem. The reader doesn't read it.
                The reader takes on faith that the tree is well-founded, which is the belief in the infinite thing itself.
                That's the drift you're pointing at, and it's a theorem, not a feeling.
            </Paragraph>
            <Heading>¬G is a finite theory that believes in one infinite proof</Heading>
            <Paragraph>
                PA + ¬G is consistent. In any model of it, there is a proof of ⊥, and from outside that proof has
                nonstandard length. So ¬G isn't nonsense; it is precisely the assumption that an infinite proof exists. To
                not take finiteness seriously <Word>
                    <Emphasis />
                    is
                </Word> to find ¬G acceptable. The same holds for the Goldbach machine: in a model of PA + ¬GC it halts, at
                a nonstandard step. Computation and logic agree there; the "halting" just happens at an infinite time.
            </Paragraph>
            <Heading>The halting problem isn't about power</Heading>
            <Paragraph>
                Turing's result is your asymmetry, not a hardware limit. "Halts" has a finite witness. "Never halts" is a
                universal over steps. A machine that decided halting would be a machine that performs one ω-rule
                application, and that is the halting oracle 0′. Iterate: 0″ corresponds to nested ω-rules, and the limit
                0^(ω) is exactly the computational strength of true arithmetic. Turing jumps count nested applications of
                the infinite rule. So logic and computation don't drift apart. They stay in lockstep, with each level of
                infinite proof matching one oracle. The computer is "not powerful enough" only in the sense that it doesn't
                come with a belief in infinite checks built in.
            </Paragraph>
            <Heading>Infinite statements make quantifiers unnecessary</Heading>
            <Paragraph>
                Allow countable conjunctions (the logic L_&#123;ω₁,ω&#125;) and ∀nP(n) becomes P(0) ∧ P(1) ∧ P(2) ∧ … — no
                quantifier needed. Scott's theorem says every countable structure, the standard model of arithmetic
                included, is characterized up to isomorphism by one such sentence. So in that logic, truth is provability
                from a single infinite axiom, and every true sentence has a short proof. This is your earlier remark in
                reverse: the universal quantifier exists <Word>
                    <Emphasis />
                    because
                </Word> statements must be finite. It is the finite compression of an infinite conjunction, and induction is
                the finite compression of the corresponding infinite proof. Drop finiteness and both disappear, along with
                the distinction between a proof and a theory.
            </Paragraph>
            <Heading>What proof length was measuring</Heading>
            <Paragraph>
                Your last parenthesis is the key. In true arithmetic, every truth has a length-1 proof, because it's an
                axiom. So proof length never measured difficulty. It measured <Word>
                    <Emphasis />
                    what you didn't assume
                </Word>. A proof is finite because it is the gap between the reader's commitments and the claim. Infinite
                proofs close that gap by moving the claim into the commitments, and then there is nothing left to share.
                That is why proof is a social object and truth isn't: proof is the finite part of belief, and the infinite
                part can only be adopted, never transmitted.
            </Paragraph>
        </Message>
        <Message
            at="2026-10-19T15:00:07.706716Z"
        >
            <Origin>9b6047df-a428-4fa9-8299-acd9a9f7f413</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                <Reminder>
                    'We can remove universal generalization and induction without changing what is provable' — he
                    reaches, as a stated theorem under the ω-rule, the ambition of Semantics and Induction's
                    Dropping Induction and The Surviving Induction.
                </Reminder>
                Here's a beautiful result. i'll elave the metalogica lrepresentation up to you. Infinite proof means that if
                forall n P(n) is provable, means there is a proof listing all of them. We can remove universal
                generalization and induction without changing what is provable. Common sense of a minimality commitment says
                we should if we can, so those were never good ideas in FOL
            </Paragraph>
        </Message>
        <Message
            at="2026-10-19T15:00:56.207735Z"
        >
            <Origin>b76e4dd8-4912-4ae7-b5e2-150f63b855b9</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Result>
                Proven, Claude's confirmation of his minimality argument: induction and ∀-introduction are
                admissible under the ω-rule — removable, never primitive — the two finite compressions of
                uniformity, iteration and template; under finiteness, instead, the whole content of "proof"
                Schütte's reading, from his commitment alone.
            </Result>
            <Revision>
                Changed: Dropping Induction's program (Semantics and Induction) — induction to be dropped, Q kept
                for hypotheticals — becomes reclassification: induction is admissible under the ω-rule and under
                finiteness the whole content of "proof"; nothing needs dropping, it was never primitive.
            </Revision>
            <Paragraph>The result holds, and it can be stated exactly.</Paragraph>
            <Heading>The representation</Heading>
            <Paragraph>
                Let L be pure logic (propositional rules, ∀-elimination, equality, the recursion equations for +, ×, S as
                axioms). Consider two systems on top of L:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        PA
                    </Word> = L + ∀-introduction + induction schema. Finite proofs.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Lω
                    </Word> = L + the ω-rule: from P(0̄), P(1̄), P(2̄), … infer ∀n P(n). No ∀-introduction, no induction.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Claim:
                </Word> ∀-introduction and induction are <Word>
                    <Emphasis />
                    admissible
                </Word> in Lω: adding them derives nothing new.
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Emphasis />
                        Induction:
                    </Word> given proofs of P(0̄) and ∀n(P(n) → P(n+1)), build the proof of P(n̄) for each n by n
                    instantiations and modus ponens. Those are the premises of one ω-rule application. Conclusion: ∀n P(n).
                    So induction is a derived rule.
                </Line>
                <Line>
                    <Word>
                        <Emphasis />
                        ∀-introduction:
                    </Word> a proof of P(x) with x free is a template. Substitute each numeral to get a proof of P(n̄).
                    Apply the ω-rule. So the generic-element rule is a derived rule too, provided every element of the
                    domain has a name, which is true of the numbers.
                </Line>
            </Paragraph>
            <Paragraph>
                So Lω proves exactly what PA + ω-rule proves, and by Shoenfield that is all of true arithmetic. Your
                minimality argument then says: the two rules are not primitive; they are the finite compressions of ω-rule
                applications. That is the standard reading in Schütte's proof theory, and you've reconstructed it from the
                finiteness commitment alone.
            </Paragraph>
            <Heading>The condition that makes it arithmetic-specific</Heading>
            <Paragraph>
                ∀-introduction cannot be dropped from first-order logic in general, because logic is meant to apply to
                domains whose elements have no names. The generic element x is how you reason about something you can't
                enumerate. For the numbers you <Word>
                    <Emphasis />
                    can
                </Word> enumerate (in principle), so the generic element is redundant. This gives ∀-introduction its true
                job: it is a finiteness device for the enumerable case and an unavoidable primitive for the unenumerable
                one. Its presence in logic is the mark that logic was built for the second case and then bolted onto the
                first.
            </Paragraph>
            <Heading>What the two rules were, then</Heading>
            <Paragraph>
                In the finite system, ∀-introduction and induction are the only two ways to introduce a universal without an
                infinite proof:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    ∀-introduction compresses an ω-proof whose branches are <Word>
                        <Emphasis />
                        all the same
                    </Word> (one template, n substituted).
                </Line>
                <Line>
                    Induction compresses an ω-proof whose branches are <Word>
                        <Emphasis />
                        built from the previous one
                    </Word> (iterate the step).
                </Line>
            </Paragraph>
            <Paragraph>
                Both are special shapes of uniformity. The ω-rule is the general case, and neither compression covers it:
                there are true universals whose branches follow no template and no iteration, and those are the independent
                sentences. Every true Π₁ sentence that PA misses is exactly an ω-proof that has neither shape.
            </Paragraph>
            <Heading>The price, measured</Heading>
            <Paragraph>
                Dropping the rules buys completeness and costs representability: Lω is not finitely presentable, and
                recognizing an ω-proof is Π¹₁-complete. There's also a precise measure of what induction was worth.
                Unfolding a PA proof into an ω-proof via cut elimination gives a tree whose height is an ordinal below ε₀,
                and that is where Gentzen's ordinal comes from. So induction is the finite name for every ω-proof of height
                below ε₀, and no others. The ω-rule itself goes on to all recursive ordinals.
            </Paragraph>
            <Heading>Which commitment is primitive</Heading>
            <Paragraph>
                Your minimality principle cuts both ways, and which way depends on what you take as given:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    If <Word>
                        <Bold />
                        infinite proof
                    </Word> is primitive, the two rules are redundant and your conclusion stands: they were never logic,
                    only shorthand.
                </Line>
                <Line>
                    If <Word>
                        <Bold />
                        finiteness
                    </Word> is primitive, the ω-rule is unavailable, and the two rules are the only way a finite reader ever
                    gets to a universal. They are not minimal because they are not derivable; they are the minimal <Word>
                        <Emphasis />
                        finite
                    </Word> proxies.
                </Line>
            </Paragraph>
            <Paragraph>
                So the result sharpens to: ∀-introduction and induction are theorems of the semantics (Lω) and axioms of the
                representation (PA). They were never good ideas in logic; they are the two ways a finite system can pretend
                to have done an infinite thing. Under your earlier commitment to finiteness, they aren't bad ideas — they
                are the whole content of "proof" once you refuse the infinite one.
            </Paragraph>
        </Message>
        <Message
            at="2026-10-19T15:06:05.032948Z"
        >
            <Origin>96c75235-79f2-47c9-9716-c62fcf869ff0</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Great therefore: not G =&gt; PA is wrong because it doesn't support infinite length proof. Thjerefore we
                just write down not G, because it entails
            </Paragraph>
            <Paragraph>
                ∀-introduction cannot be dropped from first-order logic in general, because logic is meant to apply to
                domains whose elements have no names - either infinite proof is either in FOL or PA. Induction is a way to
                avoid it. And logic is the thing about proof. So it either goes in FOL or PA is not a few axioms on FOL
            </Paragraph>
        </Message>
        <Message
            at="2026-10-19T15:06:52.651784Z"
        >
            <Origin>10271e20-5970-482b-97f5-67eac6a1f50a</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Both halves close, and each closes on a known theorem.</Paragraph>
            <Heading>¬G is the axiom "infinite proofs exist"</Heading>
            <Paragraph>
                ¬G says ∃p Proof(p, ⊥). PA + ¬G is consistent, and for every numeral it also proves ¬Proof(n̄, ⊥). So the
                witness it asserts is one it can never exhibit: a proof beyond every finite length. Written out, ¬G is the
                sentence <Word>
                    <Emphasis />
                    there is an infinite proof
                </Word>, and adopting it is adopting representational inconsistency as an axiom. It doesn't make PA
                inconsistent; it makes PA + ¬G a theory that believes PA derives ⊥ by a route no one can walk.
            </Paragraph>
            <Paragraph>
                What it entails is the other half of your picture. There are two ways to "support infinite proof," and they
                are incompatible:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        As a rule:
                    </Word> the ω-rule. From ¬Proof(0̄,⊥), ¬Proof(1̄,⊥), … infer ∀p ¬Proof(p,⊥), which is G.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        As an object:
                    </Word> ¬G, a nonstandard witness.
                </Line>
            </Paragraph>
            <Paragraph>
                One application of the ω-rule refutes ¬G. So ¬G is consistent with finite proof and inconsistent with
                infinite proof. The theory that believes in infinite proof-<Word>
                    <Emphasis />
                    objects
                </Word> is exactly the one that the infinite proof-<Word>
                    <Emphasis />
                    rule
                </Word> kills. That is your r-inconsistency stated as a theorem: asserting the existence of what the rule
                says isn't there.
            </Paragraph>
            <Paragraph>
                So "PA is wrong because it doesn't support infinite proof" splits. If you want the rule, PA is incomplete
                and ¬G is false. If you want the object, PA is fine and ¬G is a consistent extension that denies PA's
                consistency. Writing down ¬G is choosing the object and forfeiting the rule.
            </Paragraph>
            <Heading>PA is not a few axioms on FOL</Heading>
            <Paragraph>
                Ryll-Nardzewski (1952): PA is not finitely axiomatizable. Induction cannot be replaced by any finite set of
                sentences. It is only ever a <Word>
                    <Emphasis />
                    schema
                </Word>: infinitely many axioms generated by a finite rule. A finite rule generating infinitely many axioms
                is a rule of inference wearing an axiom's clothes. So your dichotomy is settled by the theorem: induction is
                a proof device, and PA is FOL plus a second inference rule, not FOL plus axioms.
            </Paragraph>
            <Paragraph>
                The two rules don't hide infinite proof, though. They hide <Word>
                    <Emphasis />
                    uniformity
                </Word>, two different kinds:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        ∀-introduction (in FOL):
                    </Word> the template. A proof with a free variable is one proof that fits every instance. This is
                    finitary and sound for all structures precisely because it never looks at the instances.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Induction (added by PA):
                    </Word> iteration. Each instance's proof is built from the previous one. FOL cannot derive this, because
                    the template rule has no notion of "previous."
                </Line>
            </Paragraph>
            <Paragraph>
                Neither is infinitary. They are the two finite shapes of uniformity, and a logic is defined by which shapes
                it compresses. That gives the spectrum:
            </Paragraph>
            <Paragraph>
                <Table />
                <Line>
                    <Word>System</Word>
                    <Word>Uniformities compressed</Word>
                </Line>
                <Line>
                    <Word>FOL</Word>
                    <Word>template</Word>
                </Line>
                <Line>
                    <Word>PA</Word>
                    <Word>template + iteration along ω</Word>
                </Line>
                <Line>
                    <Word>PA + TI(α)</Word>
                    <Word>+ iteration along longer orderings</Word>
                </Line>
                <Line>
                    <Word>Lω</Word>
                    <Word>all recursive uniformities</Word>
                </Line>
            </Paragraph>
            <Paragraph>
                So infinite proof is not in FOL or in PA. It is the ceiling of the ladder they're on, and each logic is
                named by how far up it can finitely climb. Your conclusion stands in this form: logic is the thing about
                proof, and what distinguishes one logic from the next is not its axioms but which infinite proofs it has a
                finite name for.
            </Paragraph>
        </Message>
        <Message
            at="2026-10-19T15:07:46.147964Z"
        >
            <Origin>141cfbeb-e657-4b23-b49c-f938e8d613f6</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                not G says infinite proofs exist in PA right? They always did? Doesnt that make G provable?
            </Paragraph>
        </Message>
        <Message
            at="2026-10-19T15:08:14.312553Z"
        >
            <Origin>68b39883-81d5-4b0a-8ead-6204f48aeffa</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Close, and the gap between "close" and "yes" is exactly the thing your whole line of thought is about.
            </Paragraph>
            <Heading>¬G doesn't say "infinite" inside PA</Heading>
            <Paragraph>
                Inside PA, ¬G says only ∃p Proof(p, ⊥). The word <Word>
                    <Emphasis />
                    infinite
                </Word> is ours, from outside, looking at a model where the witness p is nonstandard. PA cannot say it.
                There is no formula std(x) meaning "x is a finite number": if there were, then std(0) and std(x) → std(x+1)
                would hold, and induction would give ∀x std(x). From inside, every number is finite, including the
                nonstandard ones. So PA cannot tell a real proof from a phantom one. It can only say "a proof exists," and
                leave it to the model to decide what kind.
            </Paragraph>
            <Heading>They always did</Heading>
            <Paragraph>
                Yes. Nonstandard models of PA exist by compactness, and in every one of them there are "proofs" of
                nonstandard length. Gödel II is the statement that PA cannot exclude them. PA can't prove all its proofs are
                standard, because it can't express "standard." The phantoms were always there; G is the sentence that says
                they don't exist, and PA can't see well enough to assert it.
            </Paragraph>
            <Heading>So why isn't G provable?</Heading>
            <Paragraph>
                Your argument at the meta level is correct: proofs are finite by definition, so there is no proof of ⊥, so G
                is true. But <Word>
                    <Emphasis />
                    proving
                </Word> it means PA must deploy the definition of finite, and that definition is the ω-rule: "the numerals
                are all the numbers." That is the one thing PA cannot say. Hence:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    G is <Word>
                        <Bold />
                        provable
                    </Word> in PA + ω-rule, in one step: from ¬Proof(n̄, ⊥) for every n, conclude ∀p ¬Proof(p, ⊥).
                </Line>
                <Line>
                    G is <Word>
                        <Bold />
                        not provable
                    </Word> in PA, because PA has no sentence for "finite" and no rule that enforces it.
                </Line>
            </Paragraph>
            <Paragraph>
                So your instinct is right in this form: <Word>
                    <Emphasis />
                    finiteness makes G provable.
                </Word> Your commitment "I believe in finiteness" is exactly the ω-rule, and adopting it closes the gap.
                What you've found is why that commitment can't be written into PA: inside the theory it is trivially true of
                every element, and therefore says nothing. Finiteness is a metalogical stance, not an arithmetical fact, and
                Gödel II measures the distance between the two.
            </Paragraph>
        </Message>
        <Message
            at="2026-10-19T15:09:00.273103Z"
        >
            <Origin>99d1eb27-8357-4f85-9cd3-26735f7485e5</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Haha PA + not G can still talk about PA. So either not G is the only infinite length proof, in which case
                you never needed to assume it becasue it's finite length, or you hallucinated the power of an axiom
            </Paragraph>
        </Message>
        <Message
            at="2026-10-19T15:09:34.947194Z"
        >
            <Origin>453cd61c-567d-408f-bf5b-db595899f169</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Both horns are right, and together they say something sharp.</Paragraph>
            <Heading>Nothing infinite was added</Heading>
            <Paragraph>
                PA + ¬G has only finite proofs. Its one new item is a length-1 axiom. And that axiom lets it finitely prove
                ¬Con(PA + ¬G) too, since any proof in PA is a proof in the extension. So here is a consistent theory with a
                short finite proof that it is inconsistent. The infinite proof it asserts leaves exactly one trace: a finite
                sentence claiming it exists. That's your first horn, and it's correct. The "infinite proof" was never a
                proof. It was a claim.
            </Paragraph>
            <Heading>Why the axiom has no power</Heading>
            <Paragraph>
                Adding ¬G, which is Prov(⊥), does not yield ⊥. To get from Prov(⊥) to ⊥ you need the reflection step Prov(⊥)
                → ⊥. That sentence is Con(PA), which is G. So the only thing that could cash ¬G into an actual contradiction
                is its own negation. The axiom is self-neutralizing: a belief in a proof that can't be used, because using
                it would require believing the opposite. That's the second horn, and it's the general Löb situation in its
                purest instance. A sentence asserting provability is never provability. Prov(φ) buys φ only when you already
                have φ.
            </Paragraph>
            <Heading>What ¬G actually is</Heading>
            <Paragraph>
                Consistent but unsound. It asserts a falsehood about a finite object (the proofs of PA) without ever
                deriving ⊥. This is the distinction your whole line keeps landing on. Consistency is a property of the
                finite machinery and can be written as a sentence. Soundness is a relation between the sentences and what
                they're about, and it can't be written (Tarski). ¬G is the canonical sentence that lives in the gap: it
                respects the machinery and lies about the world.
            </Paragraph>
            <Paragraph>
                So the hallucination you named is exactly located. Not in the infinite proof, which never existed, but in
                the belief that <Word>
                    <Emphasis />
                    asserting
                </Word> a proof is <Word>
                    <Emphasis />
                    having
                </Word> one. PA + ¬G is a theory that has written down a belief about itself that is false, and remains
                perfectly consistent while believing it. Which is, after all, what you said earlier about Con(PA): writing
                down a belief about proofs never changes which proofs there are.
            </Paragraph>
        </Message>
    </Chapter>
);
