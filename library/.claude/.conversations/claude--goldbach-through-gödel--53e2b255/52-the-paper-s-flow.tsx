import { Append, Archive, Bold, Chapter, Correction, Date, Emphasis, Formalism, Heading, Idea, Importance, Line, List, Matter, Note, Paragraph, Part, Question, Reference, Remark, Reminder, Result, Revision, Summary, Table, Title, Word } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/33-the-code-box~code.tsx';
import { Message, Quoted, Speaker, Verbatim } from '../../../.manual/29-the-conversation~code.tsx';
import { Action } from '../../.manual/1-the-action-and-the-result~code.tsx';
import { Attachment } from '../../.manual/2-the-artifact-and-the-attachment~code.tsx';
import { Origin } from '../../.manual/8-the-origin~code.tsx';
import { Dated } from '../../../.manual/4-the-date~code.tsx';

export default () => (
    <Chapter>
        <Part>The Fictions</Part>
        <Dated>
            <Date>[5 November 2026](2026-11-05)</Date>
        </Dated>
        <Title>[[ The Paper's Flow ]]</Title>
        <Message
            at="2026-11-05T23:01:40.622158Z"
        >
            <Origin>34a4f79b-4eda-4f8a-9fd7-b4e12b1b618e</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Matter>
                the paper; GC as an axiom; Gödel's incompleteness; the symmetry of primes
            </Matter>
            <Summary>
                He asks where the math paper stands and gets it read back from memory: the title Gödel through
                Goldbach, 0 under its three names, the mechanism, GC itself as PA's subjective consistency, in six
                movements; the stale Essential Argument document the one task left; the physics parked for SRT.
            </Summary>
            <Paragraph>
                Okay so where were with with the math paper? What is the flow of that argument? Can you read back and
                remember?
            </Paragraph>
        </Message>
        <Message
            at="2026-11-05T23:03:01.006698Z"
        >
            <Origin>ac734ed9-8fe4-4778-80ca-d16f0e1958ae</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Remark>
                His rulings stand at the close, read back: P and P′ never assumed equal; a counterexample is a
                mistake about numbers, never 'only a picture'; no predecessor of 0; no nonstandard-model language
                in the exposition; the lifted predicate Pf(φ, ℓ).
            </Remark>
            <Revision>
                Replaced: the bounded 'Axiom (Goldbach)' of the old Essential Argument document, rejected by him,
                now the unbounded axiom ∀n ≥ 2 ∃k: n − k ∈ P ∧ n + k ∈ P; the document is named stale, its rewrite
                the one task left.
            </Revision>
            <Archive>
                The semantic reinterpretation of physics, worked from 674, where physics enters, and the parable
                (678) through the vocabulary night (680–699), left when he returns to the paper at 700; 701 parks
                it 'for SRT' — not abandoned, assigned elsewhere; the mathematics takes back the conversation.
            </Archive>
            <Reminder>
                The read-back settles matters the family opened: the title argued in The Paper's chapter The Title
                stands fixed; 'a sentence that survives the loss of its proof is an axiom' echoes Semantics and
                Induction's The Surviving Induction; GC as axiom answers What GC Represents.
            </Reminder>
            <Question>
                Left open at the close: the rewrite of the stale Essential Argument document into the six-movement
                flow, the one concrete task named; and whether the Theorist's Notes become a Semantic Reference
                Theory document.
            </Question>
            <Action>Used mcp  memory  memory read</Action>
            <Paragraph>Yes. Here is where it stands, and the flow as it was last settled.</Paragraph>
            <Heading>Where we are</Heading>
            <Paragraph>
                Title: <Word>
                    <Emphasis />
                    Gödel Through Goldbach
                </Word>. It ends on GC. Framing ruling: motivated by Gödel — the justification for not changing PA is the
                result that follows every formalism around; granting that argument is granting the model of arithmetic (the
                ℕ in ℝ); GC as axiom is the consequence. The inferential identity is the Gödel half; Goldbach is the last
                line, not an aside. De Polignac and twin primes are corollaries of the method at Π₂, not part of the
                condensed result.
            </Paragraph>
            <Paragraph>
                Three project documents carry the pieces: <Word>
                    <Emphasis />
                    The Type of Result
                </Word> (the mechanism, saved at your request); <Word>
                    <Emphasis />
                    Mathematical Relativity / Subjective Mathematics
                </Word> (the formal core: subjects, commitments, the negative space, the two-subject theorem, formal
                equality, the port, language contraction, precedents, assessment); and the old <Word>
                    <Emphasis />
                    Goldbach Through Gödel: The Essential Argument
                </Word>, which is stale — it still contains the bounded "Axiom (Goldbach)" you rejected and should be
                rewritten to the flow below.
            </Paragraph>
            <Paragraph>
                Standing rulings I'm holding: P and P′ are different sets on every finite circle, never assumed equal — P =
                P′ is the output of resolving a nonstandard model back to PA by referential integrity. The work is about
                numbers; a counterexample would be a mistake about numbers, a refutation of the belief about what the
                numbers are, never "only a picture." There is no predecessor of 0; negatives don't make sense in the PA
                being imagined; the picture is not a contradiction. No nonstandard-model language in the exposition; the
                lifted predicate Pf(φ, ℓ) with 0 named as the unique number of every length. Growth across the primorial
                family is assessable, so the Π₂ conjectures are traces of the same method.
            </Paragraph>
            <Heading>The flow, in the paper's voice</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    The object.
                </Word> 0, which PA proves is the unique number every prime divides. It has three names: in Gödel's chart it
                is the proof of every length, which with length 0 free is the empty proof; in the sieve it is the horizon,
                the top of every primorial circle; in Goldbach it is the pairless number, the only structural
                counterexample. Mathematics already identified the three. I read what the identification says.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The mechanism.
                </Word> A theorem at every finite stage whose proof uses a property every stage has and the limit lacks. The
                proof does not survive the limit; the sentence does. A sentence that survives the loss of its proof is an
                axiom.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    I. Zero for proof.
                </Word> <Word>
                    <Emphasis />
                    "True but unprovable" is the identity read as a value.
                </Word> Proof length is a quantity; length 0 is free because the axiom rule is line 1; ε is the identity.
                Neutrality: a sentence is a neutral addition iff already provable, so no sentence can be consistency; Con is
                Pf(⊥, 0); the progression is ε ⊕ ε. Same consequence: G and ¬G have equal consequences in the subject, so
                the subject does not represent them; incompleteness is not meaningful here. The theorem at the center: PA ⊢
                Pf(φ, 0) ↔ ¬Prov(φ) — one sentence, two subjects, absence as an element and absence as a negation, and PA
                cannot tell which it is in. Imagining G true is imagining Pf(G, 0), already a theorem. I do not add G;
                adding is leaving the subject. This follows every arithmetizing system.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    II. Zero as the horizon.
                </Word> <Word>
                    <Emphasis />
                    S(x) ≠ 0 is the flatness axiom.
                </Word> In Gödel's chart the proof of every length is divisible by every prime, so it is 0: the top of the
                lengths is their origin. Referential integrity: the domain is the numerals; the ω-rule held in the host,
                never in PA. One-sided numbers, no mirror. The flatness belief: I cannot measure my distance to the horizon,
                so I am flat. V holds for every triangle you can measure and the plane may still be curved; S(x) ≠ 0 holds
                for every number you can name and the line may still close.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    III. Zero as the counterexample — Gödel through Goldbach.
                </Word> <Word>
                    <Emphasis />
                    Resolving ¬G and removing the counterexample are the same act.
                </Word> A number every prime divides is pairless. So the witness of ¬G and the structural counterexample to
                Goldbach are one number, and PA names it 0, out of range. Goldbach gives Gödel's unpointable object its only
                arithmetic face.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    IV. Two-sided arithmetic.
                </Word> <Word>
                    <Emphasis />
                    ℕ is the limit of groups and isn't one.
                </Word> On ℤ/N_k: U = −U; the CRT count ∏(p − c_p); for every center and every depth, n − j ∈ P and n + j ∈
                P′, with P the primes from below and P′ the same residues read from above — different numbers, 23 and 187.
                Normalized, the count is the singular series. The barrier: unwrapped, the pairing fails at small centers,
                and no sieve depth reaches the window. The group structure — inverses, mirror, predecessor of 0 — is what
                every finite stage has and the limit sheds.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    V. The surviving sentence.
                </Word> <Word>
                    <Emphasis />
                    Goldbach is Theorem M minus the thing that proved it.
                </Word> Imagine the nonstandard stage; resolve it by referential integrity — the horizon has one name, 0,
                and "N − p" has one referent, p — so P′ collapses onto P. Only the sum reading survives in the one-sided
                language. The proof used the inverses and does not come; the sentence never mentioned them and does. Girard
                proved the excess formula with the sphere's total area; the plane shed the closure; excess = 0 survived and
                is Euclid V. Three lines each: theorem on every sphere, the plane is the sphere at R = ∞, V; theorem on
                every circle, the line is the circle at N = 0, Goldbach.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    VI. Goldbach.
                </Word> <Word>
                    <Emphasis />
                    That which is not legible within the subject expresses consistency by not being provable.
                </Word> Axiom: ∀n ≥ 2 ∃k : n − k ∈ P ∧ n + k ∈ P. Π₁; every instance checkable, none generalizable; PA + GC
                consistent iff GC true. The two-sided numbers have the symmetry; the one-sided do not; GC is the belief that
                it holds at the edge I cannot see, in the only words PA has. PA expressed its subjective consistency by not
                expressing GC. A counterexample is a mistake about numbers: GC false, PA + GC inconsistent, and my belief
                about what the numbers are refuted by a number. The thesis, in Church–Turing form: granting Gödel's argument
                grants the model; everyone in PA holds the belief; the belief has this one sentence.
            </Paragraph>
            <Heading>What's next</Heading>
            <Paragraph>
                The concrete task left is the rewrite of the stale project document into this flow — six movements, the
                Gödel half carrying Neutrality, same-consequence, the two-subject theorem, formal equality and the port from
                the SM document; the geometry precedent (V from Girard, with the Riemann sphere as the field's version);
                references. The physics work of the last two days is a separate thread, parked for SRT.
            </Paragraph>
        </Message>
    </Chapter>
);
