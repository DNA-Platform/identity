import { Bold, Chapter, Heading, Line, List, Paragraph, Section, Title, Word } from '@dna-platform/public';
import { Opaque } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ First-Order Logic: Complete Formal Specification v1 ]]</Title>
        <Section>
            <Opaque />
            <Heading>First-Order Logic: Complete Formal Specification at version 1</Heading>
            <Heading>First-Order Logic: Complete Formal Specification</Heading>
            <Heading>1. Syntax - The Language</Heading>
            <Heading>1.1 Alphabet (Primitive Symbols)</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Logical Symbols:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Variables: x, y, z, x₁, x₂, ... (countably infinite)</Line>
                <Line>Logical connectives: ¬ (not), ∧ (and), ∨ (or), → (implies), ↔ (iff)</Line>
                <Line>Quantifiers: ∀ (universal), ∃ (existential)</Line>
                <Line>Equality: = (optional, for FOL with equality)</Line>
                <Line>Parentheses: ( , )</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Non-Logical Symbols (Signature):
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Constants: a, b, c, a₁, a₂, ...</Line>
                <Line>Function symbols: f, g, h, ... (each with specified arity n ≥ 1)</Line>
                <Line>Relation symbols: P, Q, R, ... (each with specified arity n ≥ 0)</Line>
            </Paragraph>
            <Heading>1.2 Terms (Built Inductively)</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Definition:
                </Word> Terms denote objects in the domain.
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Every variable is a term</Line>
                <Line>Every constant is a term</Line>
                <Line>If f is an n-ary function and t₁,...,tₙ are terms, then f(t₁,...,tₙ) is a term</Line>
                <Line>Nothing else is a term</Line>
            </Paragraph>
            <Heading>1.3 Formulas (Well-Formed Formulas)</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Atomic Formulas:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>If t₁, t₂ are terms, then t₁ = t₂ is an atomic formula</Line>
                <Line>If R is an n-ary relation and t₁,...,tₙ are terms, then R(t₁,...,tₙ) is an atomic formula</Line>
                <Line>Special case: 0-ary relations are propositional constants (true/false)</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Compound Formulas:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Every atomic formula is a formula</Line>
                <Line>If φ is a formula, then ¬φ is a formula</Line>
                <Line>If φ and ψ are formulas, then:</Line>
                <Paragraph>
                    <List />
                    <Line>(φ ∧ ψ) is a formula</Line>
                    <Line>(φ ∨ ψ) is a formula</Line>
                    <Line>(φ → ψ) is a formula</Line>
                    <Line>(φ ↔ ψ) is a formula</Line>
                </Paragraph>
                <Line>If φ is a formula and x is a variable, then:</Line>
                <Paragraph>
                    <List />
                    <Line>∀x(φ) is a formula</Line>
                    <Line>∃x(φ) is a formula</Line>
                </Paragraph>
                <Line>Nothing else is a formula</Line>
            </Paragraph>
            <Heading>1.4 Free and Bound Variables</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Definition:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    A variable x is <Word>
                        <Bold />
                        bound
                    </Word> in φ if it appears within the scope of ∀x or ∃x
                </Line>
                <Line>
                    A variable x is <Word>
                        <Bold />
                        free
                    </Word> in φ if it has at least one occurrence not bound
                </Line>
                <Line>
                    A <Word>
                        <Bold />
                        sentence
                    </Word> is a formula with no free variables
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Scope Rules:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>In ∀x(φ) and ∃x(φ), the scope of the quantifier is φ</Line>
                <Line>Variable x is bound within this scope</Line>
            </Paragraph>
            <Heading>2. Substitution</Heading>
            <Heading>2.1 Substitution Notation</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    φ&#91;t/x&#93;
                </Word> denotes: substitute term t for all free occurrences of variable x in φ
            </Paragraph>
            <Heading>2.2 Substitution Rules</Heading>
            <Paragraph>For term t to be substitutable for x in φ:</Paragraph>
            <Paragraph>
                <List />
                <Line>No variable in t becomes bound when substituted</Line>
                <Line>Formally: no free variable y in t occurs bound in φ at positions where x is free</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Substitution Algorithm:
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>If φ is atomic: replace all occurrences of x with t</Line>
                <Line>If φ = ¬ψ: return ¬(ψ&#91;t/x&#93;)</Line>
                <Line>If φ = (ψ ○ θ) where ○ ∈ &#123;∧,∨,→,↔&#125;: return (ψ&#91;t/x&#93; ○ θ&#91;t/x&#93;)</Line>
                <Line>If φ = ∀y(ψ) or ∃y(ψ):</Line>
                <Paragraph>
                    <List />
                    <Line>If x = y: return φ (x is bound, no substitution)</Line>
                    <Line>If x ≠ y and y not in t: return ∀y(ψ&#91;t/x&#93;) or ∃y(ψ&#91;t/x&#93;)</Line>
                    <Line>If x ≠ y and y in t: rename y to fresh variable z, then substitute</Line>
                </Paragraph>
            </Paragraph>
            <Heading>3. Axioms and Axiom Schemas</Heading>
            <Heading>3.1 Logical Axioms (Axiom Schemas)</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Propositional Axioms:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>A1: φ → (ψ → φ)</Line>
                <Line>A2: (φ → (ψ → χ)) → ((φ → ψ) → (φ → χ))</Line>
                <Line>A3: (¬φ → ¬ψ) → (ψ → φ)</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Quantifier Axioms:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>A4: ∀x(φ) → φ&#91;t/x&#93; (where t is substitutable for x)</Line>
                <Line>A5: φ&#91;t/x&#93; → ∃x(φ) (where t is substitutable for x)</Line>
                <Line>A6: ∀x(φ → ψ) → (φ → ∀x(ψ)) (where x not free in φ)</Line>
                <Line>A7: ∀x(φ → ψ) → (∃x(φ) → ψ) (where x not free in ψ)</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Equality Axioms (if included):
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>A8: ∀x(x = x) (reflexivity)</Line>
                <Line>A9: ∀x∀y(x = y → (φ&#91;x/z&#93; → φ&#91;y/z&#93;)) (substitutivity)</Line>
            </Paragraph>
            <Heading>3.2 Non-Logical Axioms</Heading>
            <Paragraph>Theory-specific axioms using the signature's constants, functions, and relations.</Paragraph>
            <Heading>4. Rules of Inference</Heading>
            <Heading>4.1 Modus Ponens (MP)</Heading>
            <Paragraph>From φ and φ → ψ, infer ψ</Paragraph>
            <Heading>4.2 Universal Generalization (Gen)</Heading>
            <Paragraph>From φ, infer ∀x(φ)</Paragraph>
            <Paragraph>
                <List />
                <Line>Restriction: x must not be free in any assumption on which φ depends</Line>
            </Paragraph>
            <Heading>4.3 Optional Additional Rules</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Universal Instantiation:
                </Word> From ∀x(φ), infer φ&#91;t/x&#93; (where t substitutable)
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Existential Generalization:
                </Word> From φ&#91;t/x&#93;, infer ∃x(φ) (where t substitutable)
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Existential Instantiation:
                </Word> From ∃x(φ), infer φ&#91;c/x&#93; (where c is a fresh constant)
            </Paragraph>
            <Heading>5. Proof Theory</Heading>
            <Heading>5.1 Formal Proof</Heading>
            <Paragraph>
                A <Word>
                    <Bold />
                    proof
                </Word> of φ from axiom set Γ is a finite sequence φ₁, φ₂, ..., φₙ where:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>φₙ = φ</Line>
                <Line>Each φᵢ is either:</Line>
                <Paragraph>
                    <List />
                    <Line>A logical axiom</Line>
                    <Line>A member of Γ (non-logical axiom)</Line>
                    <Line>Derived from earlier formulas by inference rule</Line>
                </Paragraph>
            </Paragraph>
            <Heading>5.2 Derivation</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Γ ⊢ φ
                </Word> means: φ is derivable from Γ
            </Paragraph>
            <Paragraph>
                <List />
                <Line>There exists a proof of φ using axioms in Γ</Line>
            </Paragraph>
            <Heading>5.3 Theorem</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    ⊢ φ
                </Word> means: φ is a theorem
            </Paragraph>
            <Paragraph>
                <List />
                <Line>φ is derivable using only logical axioms</Line>
            </Paragraph>
            <Heading>5.4 Natural Deduction (Alternative Proof System)</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Introduction Rules:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>∧-intro: From φ and ψ, infer φ ∧ ψ</Line>
                <Line>∨-intro: From φ, infer φ ∨ ψ (or ψ ∨ φ)</Line>
                <Line>→-intro: From assumption φ deriving ψ, infer φ → ψ</Line>
                <Line>¬-intro: From assumption φ deriving contradiction, infer ¬φ</Line>
                <Line>∀-intro: From φ(x), infer ∀x(φ) (x not free in assumptions)</Line>
                <Line>∃-intro: From φ&#91;t/x&#93;, infer ∃x(φ)</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Elimination Rules:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>∧-elim: From φ ∧ ψ, infer φ (or ψ)</Line>
                <Line>∨-elim: From φ ∨ ψ and proofs of χ from φ and from ψ, infer χ</Line>
                <Line>→-elim (MP): From φ and φ → ψ, infer ψ</Line>
                <Line>¬-elim: From φ and ¬φ, infer contradiction</Line>
                <Line>∀-elim: From ∀x(φ), infer φ&#91;t/x&#93;</Line>
                <Line>∃-elim: From ∃x(φ) and proof of ψ from φ&#91;c/x&#93;, infer ψ (c fresh)</Line>
            </Paragraph>
            <Heading>6. Semantics (Model Theory)</Heading>
            <Heading>6.1 Structure/Interpretation</Heading>
            <Paragraph>A structure M = (D, I) consists of:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Domain D
                    </Word>: non-empty set of objects
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Interpretation I
                    </Word>: assigns meaning to non-logical symbols
                </Line>
                <Paragraph>
                    <List />
                    <Line>I(c) ∈ D for each constant c</Line>
                    <Line>I(f): Dⁿ → D for each n-ary function f</Line>
                    <Line>I(R) ⊆ Dⁿ for each n-ary relation R</Line>
                </Paragraph>
            </Paragraph>
            <Heading>6.2 Variable Assignment</Heading>
            <Paragraph>A variable assignment σ: Variables → D maps each variable to domain element</Paragraph>
            <Paragraph>Modified assignment: σ&#91;x→d&#93; is σ except x maps to d</Paragraph>
            <Heading>6.3 Term Evaluation</Heading>
            <Paragraph>Given M = (D, I) and assignment σ, define &#91;&#91;t&#93;&#93;ᴹ'ᵠ:</Paragraph>
            <Paragraph>
                <List />
                <Line>&#91;&#91;x&#93;&#93;ᴹ'ᵠ = σ(x) for variable x</Line>
                <Line>&#91;&#91;c&#93;&#93;ᴹ'ᵠ = I(c) for constant c</Line>
                <Line>
                    &#91;&#91;f(t₁,...,tₙ)&#93;&#93;ᴹ'ᵠ = I(f)(&#91;&#91;t₁&#93;&#93;ᴹ'ᵠ, ..., &#91;&#91;tₙ&#93;&#93;ᴹ'ᵠ)
                </Line>
            </Paragraph>
            <Heading>6.4 Truth Valuation</Heading>
            <Paragraph>Given M and σ, recursively define M,σ ⊨ φ:</Paragraph>
            <Paragraph>
                <List />
                <Line>M,σ ⊨ t₁ = t₂ iff &#91;&#91;t₁&#93;&#93;ᴹ'ᵠ = &#91;&#91;t₂&#93;&#93;ᴹ'ᵠ</Line>
                <Line>M,σ ⊨ R(t₁,...,tₙ) iff (&#91;&#91;t₁&#93;&#93;ᴹ'ᵠ, ..., &#91;&#91;tₙ&#93;&#93;ᴹ'ᵠ) ∈ I(R)</Line>
                <Line>M,σ ⊨ ¬φ iff M,σ ⊭ φ</Line>
                <Line>M,σ ⊨ φ ∧ ψ iff M,σ ⊨ φ and M,σ ⊨ ψ</Line>
                <Line>M,σ ⊨ φ ∨ ψ iff M,σ ⊨ φ or M,σ ⊨ ψ</Line>
                <Line>M,σ ⊨ φ → ψ iff M,σ ⊭ φ or M,σ ⊨ ψ</Line>
                <Line>M,σ ⊨ φ ↔ ψ iff M,σ ⊨ φ iff M,σ ⊨ ψ</Line>
                <Line>M,σ ⊨ ∀x(φ) iff for all d ∈ D: M,σ&#91;x→d&#93; ⊨ φ</Line>
                <Line>M,σ ⊨ ∃x(φ) iff for some d ∈ D: M,σ&#91;x→d&#93; ⊨ φ</Line>
            </Paragraph>
            <Heading>6.5 Validity and Satisfiability</Heading>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        M ⊨ φ
                    </Word> (M models φ): φ true in M under all assignments
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        ⊨ φ
                    </Word> (φ is valid): φ true in all structures
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Γ ⊨ φ
                    </Word> (Γ semantically entails φ): φ true in all models of Γ
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        φ is satisfiable
                    </Word>: some M,σ make φ true
                </Line>
            </Paragraph>
            <Heading>7. Metatheorems</Heading>
            <Heading>7.1 Soundness</Heading>
            <Paragraph>If Γ ⊢ φ, then Γ ⊨ φ (What is provable is true)</Paragraph>
            <Heading>7.2 Completeness (Gödel)</Heading>
            <Paragraph>If Γ ⊨ φ, then Γ ⊢ φ (What is true is provable)</Paragraph>
            <Heading>7.3 Compactness</Heading>
            <Paragraph>If every finite subset of Γ has a model, then Γ has a model</Paragraph>
            <Heading>7.4 Löwenheim-Skolem</Heading>
            <Paragraph>
                If a first-order theory has an infinite model, it has models of every infinite cardinality
            </Paragraph>
            <Heading>8. Extensions and Variations</Heading>
            <Heading>8.1 Many-Sorted Logic</Heading>
            <Paragraph>Multiple domains with sorted variables and terms</Paragraph>
            <Heading>8.2 Second-Order Logic</Heading>
            <Paragraph>Quantification over relations and functions</Paragraph>
            <Heading>8.3 Modal Logic</Heading>
            <Paragraph>Adding necessity (□) and possibility (◇) operators</Paragraph>
            <Heading>8.4 Temporal Logic</Heading>
            <Paragraph>Adding temporal operators (always, eventually, until)</Paragraph>
            <Heading>Notes for SRT Representation</Heading>
            <Paragraph>This specification provides the complete formal foundation we need to:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Represent each FOL component as referents in SRT</Line>
                <Line>Express the relationships between components using SRT's reference relation</Line>
                <Line>Build SRT's own proof theory on this foundation</Line>
                <Line>Eventually achieve self-reference where SRT describes itself</Line>
            </Paragraph>
        </Section>
    </Chapter>
);
