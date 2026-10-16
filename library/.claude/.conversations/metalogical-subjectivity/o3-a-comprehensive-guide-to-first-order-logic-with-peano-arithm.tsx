import { Bold, Chapter, Heading, Line, List, Paragraph, Section, Title, Word } from '@dna-platform/public';
import { Opaque } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ A Comprehensive Guide to First-Order Logic with Peano Arithmetic v1 ]]</Title>
        <Section>
            <Opaque />
            <Heading>A Comprehensive Guide to First-Order Logic with Peano Arithmetic at version 1</Heading>
            <Heading>A Comprehensive Guide to First-Order Logic</Heading>
            <Heading>1. Introduction to First-Order Logic</Heading>
            <Paragraph>
                First-order logic (FOL), also known as first-order predicate calculus or predicate logic, extends
                propositional logic to include predicates, functions, variables, and quantifiers. While propositional logic
                treats propositions as atomic units, first-order logic looks inside propositions to analyze their internal
                structure, allowing us to express much richer statements about domains of objects.
            </Paragraph>
            <Paragraph>
                First-order logic provides the formal foundation for most mathematical theories, including set theory,
                number theory, and analysis. It serves as the standard formal language for mathematical proofs and forms the
                basis for many formal verification systems and automated theorem provers.
            </Paragraph>
            <Heading>2. The Syntax of First-Order Logic</Heading>
            <Heading>2.1 Alphabet</Heading>
            <Paragraph>The alphabet of first-order logic includes:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Logical symbols
                    </Word>:
                </Line>
                <Paragraph>
                    <List />
                    <Line>Logical connectives: ¬, ∧, ∨, →, ↔ (same as in propositional logic)</Line>
                    <Line>Quantifiers: ∀ (universal quantifier), ∃ (existential quantifier)</Line>
                    <Line>Variables: x, y, z, ...</Line>
                    <Line>Equality symbol: = (in some presentations)</Line>
                    <Line>Parentheses and other punctuation: (, ), ,</Line>
                </Paragraph>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Non-logical symbols
                    </Word> (vary depending on the specific theory):
                </Line>
                <Paragraph>
                    <List />
                    <Line>Constant symbols: a, b, c, ...</Line>
                    <Line>Function symbols: f, g, h, ... (each with a specified arity)</Line>
                    <Line>Predicate symbols: P, Q, R, ... (each with a specified arity)</Line>
                </Paragraph>
            </Paragraph>
            <Heading>2.2 Terms</Heading>
            <Paragraph>Terms represent objects in the domain and are defined recursively:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Variables are terms</Line>
                <Line>Constants are terms</Line>
                <Line>If f is an n-ary function symbol and t₁, ..., tₙ are terms, then f(t₁, ..., tₙ) is a term</Line>
            </Paragraph>
            <Paragraph>Examples of terms:</Paragraph>
            <Paragraph>
                <List />
                <Line>x (a variable)</Line>
                <Line>c (a constant)</Line>
                <Line>f(x) (a function applied to a variable)</Line>
                <Line>g(x, f(y), c) (a complex term built from variables, constants, and functions)</Line>
            </Paragraph>
            <Heading>2.3 Atomic Formulas</Heading>
            <Paragraph>
                <List ordered />
                <Line>
                    If P is an n-ary predicate symbol and t₁, ..., tₙ are terms, then P(t₁, ..., tₙ) is an atomic formula
                </Line>
                <Line>
                    If t₁ and t₂ are terms, then t₁ = t₂ is an atomic formula (if equality is included in the language)
                </Line>
            </Paragraph>
            <Heading>2.4 Well-Formed Formulas (WFFs)</Heading>
            <Paragraph>The set of well-formed formulas is defined recursively:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Every atomic formula is a formula</Line>
                <Line>If φ is a formula, then ¬φ is a formula</Line>
                <Line>If φ and ψ are formulas, then (φ ∧ ψ), (φ ∨ ψ), (φ → ψ), and (φ ↔ ψ) are formulas</Line>
                <Line>If φ is a formula and x is a variable, then ∀x φ and ∃x φ are formulas</Line>
            </Paragraph>
            <Heading>2.5 Free and Bound Variables</Heading>
            <Paragraph>
                <List />
                <Line>
                    A variable occurrence is <Word>
                        <Bold />
                        bound
                    </Word> if it is within the scope of a quantifier that quantifies over that variable
                </Line>
                <Line>
                    A variable occurrence is <Word>
                        <Bold />
                        free
                    </Word> if it is not bound
                </Line>
                <Line>
                    A formula with no free variables is called a <Word>
                        <Bold />
                        sentence
                    </Word> or <Word>
                        <Bold />
                        closed formula
                    </Word>
                </Line>
            </Paragraph>
            <Paragraph>
                Example: In the formula ∀x (P(x) → ∃y R(x, y, z)), x and y are bound variables, while z is a free variable.
            </Paragraph>
            <Heading>3. Semantics of First-Order Logic</Heading>
            <Heading>3.1 Structures (Models)</Heading>
            <Paragraph>A structure (or model) M for a first-order language L consists of:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    A non-empty set D called the <Word>
                        <Bold />
                        domain
                    </Word> or <Word>
                        <Bold />
                        universe
                    </Word> of discourse
                </Line>
                <Line>For each constant symbol c in L, an element cᴹ in D</Line>
                <Line>For each n-ary function symbol f in L, a function fᴹ: Dⁿ → D</Line>
                <Line>For each n-ary predicate symbol P in L, a relation Pᴹ ⊆ Dⁿ</Line>
            </Paragraph>
            <Heading>3.2 Variable Assignments</Heading>
            <Paragraph>
                A variable assignment v is a function that assigns to each variable x a value v(x) in the domain D.
            </Paragraph>
            <Heading>3.3 Interpretation of Terms</Heading>
            <Paragraph>
                Given a structure M and a variable assignment v, we recursively define the interpretation of a term t,
                denoted &#91;t&#93;ᴹ,ᵛ:
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>If t is a variable x, then &#91;t&#93;ᴹ,ᵛ = v(x)</Line>
                <Line>If t is a constant c, then &#91;t&#93;ᴹ,ᵛ = cᴹ</Line>
                <Line>If t is f(t₁, ..., tₙ), then &#91;t&#93;ᴹ,ᵛ = fᴹ(&#91;t₁&#93;ᴹ,ᵛ, ..., &#91;tₙ&#93;ᴹ,ᵛ)</Line>
            </Paragraph>
            <Heading>3.4 Satisfaction Relation</Heading>
            <Paragraph>
                The satisfaction relation M ⊨ φ&#91;v&#93; ("M satisfies φ under assignment v") is defined recursively:
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>M ⊨ P(t₁, ..., tₙ)&#91;v&#93; iff (&#91;t₁&#93;ᴹ,ᵛ, ..., &#91;tₙ&#93;ᴹ,ᵛ) ∈ Pᴹ</Line>
                <Line>M ⊨ (t₁ = t₂)&#91;v&#93; iff &#91;t₁&#93;ᴹ,ᵛ = &#91;t₂&#93;ᴹ,ᵛ</Line>
                <Line>M ⊨ ¬φ&#91;v&#93; iff M ⊭ φ&#91;v&#93;</Line>
                <Line>M ⊨ (φ ∧ ψ)&#91;v&#93; iff M ⊨ φ&#91;v&#93; and M ⊨ ψ&#91;v&#93;</Line>
                <Line>M ⊨ (φ ∨ ψ)&#91;v&#93; iff M ⊨ φ&#91;v&#93; or M ⊨ ψ&#91;v&#93;</Line>
                <Line>M ⊨ (φ → ψ)&#91;v&#93; iff M ⊭ φ&#91;v&#93; or M ⊨ ψ&#91;v&#93;</Line>
                <Line>M ⊨ (φ ↔ ψ)&#91;v&#93; iff M ⊨ φ&#91;v&#93; if and only if M ⊨ ψ&#91;v&#93;</Line>
                <Line>M ⊨ ∀x φ&#91;v&#93; iff for every d ∈ D, M ⊨ φ&#91;v&#91;x/d&#93;&#93;</Line>
                <Line>M ⊨ ∃x φ&#91;v&#93; iff there exists d ∈ D such that M ⊨ φ&#91;v&#91;x/d&#93;&#93;</Line>
            </Paragraph>
            <Paragraph>
                Where v&#91;x/d&#93; is the assignment that agrees with v on all variables except possibly x, which it maps
                to d.
            </Paragraph>
            <Heading>3.5 Truth in a Structure</Heading>
            <Paragraph>
                <List />
                <Line>
                    A sentence φ is <Word>
                        <Bold />
                        true
                    </Word> in a structure M (written M ⊨ φ) if it is satisfied by every variable assignment
                </Line>
                <Line>
                    A sentence φ is <Word>
                        <Bold />
                        false
                    </Word> in a structure M if it is not satisfied by any variable assignment
                </Line>
                <Line>
                    For sentences (formulas with no free variables), satisfaction is independent of the variable assignment
                </Line>
            </Paragraph>
            <Heading>3.6 Logical Consequence</Heading>
            <Paragraph>
                A formula φ is a <Word>
                    <Bold />
                    logical consequence
                </Word> of a set of formulas Γ (written Γ ⊨ φ) if every structure that satisfies all formulas in Γ also
                satisfies φ.
            </Paragraph>
            <Heading>3.7 Logical Validity and Satisfiability</Heading>
            <Paragraph>
                <List />
                <Line>
                    A formula φ is <Word>
                        <Bold />
                        logically valid
                    </Word> (written ⊨ φ) if it is true in all structures
                </Line>
                <Line>
                    A formula φ is <Word>
                        <Bold />
                        satisfiable
                    </Word> if there is some structure in which it is true
                </Line>
                <Line>
                    A formula φ is <Word>
                        <Bold />
                        unsatisfiable
                    </Word> if it is not satisfiable
                </Line>
            </Paragraph>
            <Heading>4. Formal Proof Systems for First-Order Logic</Heading>
            <Heading>4.1 Natural Deduction</Heading>
            <Paragraph>
                Natural deduction for first-order logic extends propositional natural deduction with rules for quantifiers:
            </Paragraph>
            <Heading>Universal Quantifier Rules</Heading>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        ∀-Introduction
                    </Word>: If a proof of φ(y) can be given without making any special assumptions about y, then ∀x φ(x)
                    can be inferred
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        ∀-Elimination
                    </Word>: From ∀x φ(x), infer φ(t) for any term t
                </Line>
            </Paragraph>
            <Heading>Existential Quantifier Rules</Heading>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        ∃-Introduction
                    </Word>: From φ(t), infer ∃x φ(x)
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        ∃-Elimination
                    </Word>: If from φ(y) (where y is a variable not occurring free in any assumption or in the conclusion)
                    we can derive ψ, then from ∃x φ(x) we can infer ψ
                </Line>
            </Paragraph>
            <Heading>4.2 Sequent Calculus</Heading>
            <Paragraph>
                Sequent calculus for first-order logic extends propositional sequent calculus with rules for quantifiers:
            </Paragraph>
            <Heading>Universal Quantifier Rules</Heading>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Right ∀
                    </Word>: If Γ ⊢ φ(y), Δ where y does not occur free in Γ, Δ, then Γ ⊢ ∀x φ(x), Δ
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Left ∀
                    </Word>: From Γ, φ(t) ⊢ Δ, infer Γ, ∀x φ(x) ⊢ Δ
                </Line>
            </Paragraph>
            <Heading>Existential Quantifier Rules</Heading>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Right ∃
                    </Word>: From Γ ⊢ φ(t), Δ, infer Γ ⊢ ∃x φ(x), Δ
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Left ∃
                    </Word>: If Γ, φ(y) ⊢ Δ where y does not occur free in Γ, Δ, then Γ, ∃x φ(x) ⊢ Δ
                </Line>
            </Paragraph>
            <Heading>4.3 Hilbert-Style Systems</Heading>
            <Paragraph>
                Hilbert-style systems for first-order logic extend propositional Hilbert systems with axioms and rules for
                quantifiers:
            </Paragraph>
            <Heading>Quantifier Axioms</Heading>
            <Paragraph>
                <List />
                <Line>∀x φ(x) → φ(t) (where t is free for x in φ)</Line>
                <Line>φ(t) → ∃x φ(x) (where t is free for x in φ)</Line>
                <Line>∀x (φ → ψ) → (∀x φ → ∀x ψ)</Line>
                <Line>∀x (φ → ψ) → (∃x φ → ∃x ψ)</Line>
            </Paragraph>
            <Heading>Generalization Rule</Heading>
            <Paragraph>
                <List />
                <Line>From φ, infer ∀x φ (if x is not free in any assumption)</Line>
            </Paragraph>
            <Heading>5. Properties of First-Order Logic</Heading>
            <Heading>5.1 Soundness and Completeness</Heading>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Soundness
                    </Word>: If Γ ⊢ φ (φ is provable from Γ), then Γ ⊨ φ (φ is a logical consequence of Γ)
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Completeness (Gödel's Completeness Theorem)
                    </Word>: If Γ ⊨ φ, then Γ ⊢ φ
                </Line>
            </Paragraph>
            <Paragraph>
                These properties together establish that a formula is provable if and only if it is a logical consequence of
                the axioms.
            </Paragraph>
            <Heading>5.2 Compactness Theorem</Heading>
            <Paragraph>
                A set of formulas Γ is satisfiable if and only if every finite subset of Γ is satisfiable.
            </Paragraph>
            <Heading>5.3 Löwenheim-Skolem Theorems</Heading>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Löwenheim-Skolem-Tarski Theorem (Downward)
                    </Word>: If a countable first-order theory has an infinite model, then it has a model of any infinite
                    cardinality
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Löwenheim-Skolem Theorem (Upward)
                    </Word>: If a first-order theory has an infinite model, then it has models of any cardinality greater
                    than or equal to the cardinality of the language
                </Line>
            </Paragraph>
            <Heading>5.4 Lindström's Theorem</Heading>
            <Paragraph>
                First-order logic is the strongest logic that satisfies both the compactness theorem and the
                Löwenheim-Skolem theorem.
            </Paragraph>
            <Heading>6. Limitations of First-Order Logic</Heading>
            <Heading>6.1 Expressibility Limitations</Heading>
            <Paragraph>First-order logic cannot express certain concepts:</Paragraph>
            <Paragraph>
                <List />
                <Line>Finiteness: There is no first-order formula that characterizes finite structures</Line>
                <Line>Connectedness: There is no first-order formula that characterizes connected graphs</Line>
                <Line>
                    Ancestral relations (transitive closure): "y is a descendant of x" is not expressible in general
                </Line>
            </Paragraph>
            <Heading>6.2 Undecidability</Heading>
            <Paragraph>
                The set of valid formulas in first-order logic is not decidable (Church's Theorem). However, for certain
                fragments and theories, decidability results exist.
            </Paragraph>
            <Heading>7. Normal Forms</Heading>
            <Heading>7.1 Prenex Normal Form</Heading>
            <Paragraph>
                A formula is in prenex normal form if all quantifiers appear at the beginning, followed by a quantifier-free
                formula (the matrix). Every formula can be transformed into an equivalent formula in prenex normal form.
            </Paragraph>
            <Heading>7.2 Skolemization</Heading>
            <Paragraph>
                Skolemization removes existential quantifiers by replacing existentially quantified variables with functions
                of the universally quantified variables on which they depend. This process preserves satisfiability but not
                logical equivalence.
            </Paragraph>
            <Heading>7.3 Clausal Form and Conjunctive Normal Form</Heading>
            <Paragraph>
                After Skolemization, formulas can be converted to clause form and conjunctive normal form (CNF), which is
                useful for automated theorem proving methods like resolution.
            </Paragraph>
            <Heading>8. First-Order Theories</Heading>
            <Paragraph>A first-order theory consists of:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>A first-order language L</Line>
                <Line>A set of sentences (axioms) in L</Line>
            </Paragraph>
            <Heading>8.1 Model of a Theory</Heading>
            <Paragraph>A structure M is a model of a theory T if M satisfies all axioms of T.</Paragraph>
            <Heading>8.2 Properties of Theories</Heading>
            <Paragraph>
                <List />
                <Line>
                    A theory is <Word>
                        <Bold />
                        consistent
                    </Word> if it has at least one model
                </Line>
                <Line>
                    A theory is <Word>
                        <Bold />
                        complete
                    </Word> if for every sentence φ in its language, either φ or ¬φ is provable from the theory
                </Line>
                <Line>
                    A theory is <Word>
                        <Bold />
                        decidable
                    </Word> if there is an algorithm that determines whether a given sentence is provable in the theory
                </Line>
                <Line>
                    A theory is <Word>
                        <Bold />
                        axiomatizable
                    </Word> if there is a recursively enumerable set of sentences whose deductive closure is the theory
                </Line>
            </Paragraph>
            <Heading>8.3 Categoricity</Heading>
            <Paragraph>A theory is κ-categorical if it has exactly one model of cardinality κ up to isomorphism.</Paragraph>
            <Heading>9. Examples of First-Order Theories</Heading>
            <Heading>9.1 Group Theory</Heading>
            <Paragraph>The theory of groups has axioms:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>∀x ∀y ∀z ((x · y) · z = x · (y · z)) (associativity)</Line>
                <Line>∀x (x · e = x ∧ e · x = x) (identity element)</Line>
                <Line>∀x ∃y (x · y = e ∧ y · x = e) (inverse elements)</Line>
            </Paragraph>
            <Heading>9.2 Field Theory</Heading>
            <Paragraph>
                The theory of fields extends the theory of groups with additional axioms for the multiplicative and additive
                operations.
            </Paragraph>
            <Heading>9.3 Order Theory</Heading>
            <Paragraph>The theory of partial orders has axioms for reflexivity, antisymmetry, and transitivity.</Paragraph>
            <Heading>10. Advanced Topics in First-Order Logic</Heading>
            <Heading>10.1 Many-sorted First-Order Logic</Heading>
            <Paragraph>
                Many-sorted logic allows for multiple domains (sorts) and restricts quantification to variables of a
                specific sort.
            </Paragraph>
            <Heading>10.2 First-Order Logic with Equality</Heading>
            <Paragraph>
                First-order logic with equality treats equality as a logical symbol with built-in properties (reflexivity,
                symmetry, transitivity, and substitution).
            </Paragraph>
            <Heading>10.3 First-Order Modal Logic</Heading>
            <Paragraph>
                Modal first-order logic combines first-order logic with modal operators for necessity and possibility.
            </Paragraph>
            <Heading>11. Applications of First-Order Logic</Heading>
            <Heading>11.1 Mathematical Foundations</Heading>
            <Paragraph>
                First-order logic provides the foundation for formalizing mathematical theories, including set theory (ZFC),
                which serves as a foundation for most of mathematics.
            </Paragraph>
            <Heading>11.2 Computer Science</Heading>
            <Paragraph>Applications include:</Paragraph>
            <Paragraph>
                <List />
                <Line>Automated theorem proving</Line>
                <Line>Program verification</Line>
                <Line>Knowledge representation</Line>
                <Line>Database query languages (SQL has roots in first-order logic)</Line>
                <Line>Artificial intelligence and expert systems</Line>
            </Paragraph>
            <Heading>11.3 Philosophy</Heading>
            <Paragraph>
                First-order logic is used in philosophical analysis for formalizing arguments and theories in epistemology,
                metaphysics, and philosophy of language.
            </Paragraph>
            <Heading>12. Peano Arithmetic: A Case Study in First-Order Logic</Heading>
            <Heading>12.1 The Language of Peano Arithmetic</Heading>
            <Paragraph>The language of Peano Arithmetic (PA) includes:</Paragraph>
            <Paragraph>
                <List />
                <Line>A constant symbol 0</Line>
                <Line>A unary function symbol S (successor)</Line>
                <Line>Binary function symbols + (addition) and · (multiplication)</Line>
                <Line>Equality =</Line>
            </Paragraph>
            <Heading>12.2 The Axioms of Peano Arithmetic</Heading>
            <Heading>Successor Axioms</Heading>
            <Paragraph>
                <List ordered />
                <Line>∀x (S(x) ≠ 0) (0 is not the successor of any number)</Line>
                <Line>∀x ∀y (S(x) = S(y) → x = y) (successor is injective)</Line>
            </Paragraph>
            <Heading>Addition Axioms</Heading>
            <Paragraph>
                <List ordered />
                <Line>∀x (x + 0 = x) (adding 0)</Line>
                <Line>∀x ∀y (x + S(y) = S(x + y)) (adding a successor)</Line>
            </Paragraph>
            <Heading>Multiplication Axioms</Heading>
            <Paragraph>
                <List ordered />
                <Line>∀x (x · 0 = 0) (multiplying by 0)</Line>
                <Line>∀x ∀y (x · S(y) = x · y + x) (multiplying by a successor)</Line>
            </Paragraph>
            <Heading>Induction Schema</Heading>
            <Paragraph>
                <List ordered />
                <Line>For any formula φ(x) in the language: &#91;φ(0) ∧ ∀x (φ(x) → φ(S(x)))&#93; → ∀x φ(x)</Line>
            </Paragraph>
            <Paragraph>This is actually an infinite set of axioms, one for each formula φ(x) in the language.</Paragraph>
            <Heading>12.3 Key Properties of Peano Arithmetic</Heading>
            <Heading>12.3.1 Standard Model</Heading>
            <Paragraph>The standard model of PA is (ℕ, 0, S, +, ·), where:</Paragraph>
            <Paragraph>
                <List />
                <Line>The domain is the set of natural numbers ℕ</Line>
                <Line>0 is interpreted as the number zero</Line>
                <Line>S is interpreted as the successor function (S(n) = n + 1)</Line>
                <Line>+ and · are interpreted as the usual addition and multiplication operations</Line>
            </Paragraph>
            <Heading>12.3.2 Representability of Computable Functions</Heading>
            <Paragraph>
                All computable functions are representable in PA. A function f: ℕᵏ → ℕ is representable in PA if there
                exists a formula φ(x₁, ..., xₖ, y) such that:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>If f(n₁, ..., nₖ) = m, then PA ⊢ φ(n̄₁, ..., n̄ₖ, m̄)</Line>
                <Line>PA ⊢ ∀y₁ ∀y₂ (φ(n̄₁, ..., n̄ₖ, y₁) ∧ φ(n̄₁, ..., n̄ₖ, y₂) → y₁ = y₂)</Line>
            </Paragraph>
            <Paragraph>Where n̄ denotes the numeral for n (S...S(0) with n occurrences of S).</Paragraph>
            <Heading>12.3.3 Incompleteness (Gödel's First Incompleteness Theorem)</Heading>
            <Paragraph>
                PA is incomplete. There are true arithmetic statements that cannot be proved or disproved in PA.
            </Paragraph>
            <Paragraph>
                The most famous example is the Gödel sentence G for PA, which essentially states "G is not provable in PA".
                If PA is consistent, then neither G nor ¬G is provable in PA.
            </Paragraph>
            <Heading>12.3.4 Consistency (Gödel's Second Incompleteness Theorem)</Heading>
            <Paragraph>
                PA cannot prove its own consistency. If Con(PA) is a formula expressing the consistency of PA, then if PA is
                consistent, PA ⊬ Con(PA).
            </Paragraph>
            <Heading>12.4 Extensions and Subsystems of Peano Arithmetic</Heading>
            <Heading>12.4.1 Robinson Arithmetic (Q)</Heading>
            <Paragraph>
                Q is a subsystem of PA that replaces the induction schema with finitely many axioms. It is much weaker than
                PA but still sufficiently strong to encode basic arithmetic and for Gödel's incompleteness theorems to
                apply.
            </Paragraph>
            <Heading>12.4.2 Primitive Recursive Arithmetic (PRA)</Heading>
            <Paragraph>
                PRA restricts induction to quantifier-free formulas and is focused on primitive recursive functions.
            </Paragraph>
            <Heading>12.4.3 Presburger Arithmetic</Heading>
            <Paragraph>
                Presburger Arithmetic includes only the axioms for addition (not multiplication). Unlike PA, it is complete
                and decidable.
            </Paragraph>
            <Heading>12.4.4 Second-Order Arithmetic</Heading>
            <Paragraph>
                Second-order arithmetic extends PA with variables and quantifiers for sets of natural numbers. With the full
                second-order semantics, it categorically characterizes the standard model of arithmetic.
            </Paragraph>
            <Heading>12.5 Examples of Formal Proofs in Peano Arithmetic</Heading>
            <Heading>12.5.1 Proving Commutativity of Addition</Heading>
            <Paragraph>We show that PA ⊢ ∀x ∀y (x + y = y + x).</Paragraph>
            <Paragraph>First, we prove ∀x (x + 0 = 0 + x):</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>We have the axiom ∀x (x + 0 = x)</Line>
                <Line>We need to show 0 + x = x for all x</Line>
                <Line>We use induction on x a. Base case: 0 + 0 = 0 (by axiom 3) b. Induction step: Assume 0 + n = n</Line>
                <Paragraph>
                    <List />
                    <Line>We need to show 0 + S(n) = S(n)</Line>
                    <Line>By axiom 4, 0 + S(n) = S(0 + n)</Line>
                    <Line>By induction hypothesis, 0 + n = n</Line>
                    <Line>Therefore, 0 + S(n) = S(n)</Line>
                </Paragraph>
                <Line>By the induction principle, ∀x (0 + x = x)</Line>
                <Line>Therefore, ∀x (x + 0 = 0 + x)</Line>
            </Paragraph>
            <Paragraph>
                Next, we prove ∀x ∀y (x + S(y) = S(x) + y): (Similar induction argument, omitted for brevity)
            </Paragraph>
            <Paragraph>Finally, we prove ∀x ∀y (x + y = y + x):</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    We use induction on y a. Base case: x + 0 = 0 + x (proved above) b. Induction step: Assume x + n = n + x
                </Line>
                <Paragraph>
                    <List />
                    <Line>We need to show x + S(n) = S(n) + x</Line>
                    <Line>By axiom 4, x + S(n) = S(x + n)</Line>
                    <Line>By induction hypothesis, x + n = n + x</Line>
                    <Line>Therefore, x + S(n) = S(n + x)</Line>
                    <Line>We've shown ∀x ∀y (x + S(y) = S(x) + y)</Line>
                    <Line>Therefore, S(n + x) = S(n) + x</Line>
                    <Line>Thus, x + S(n) = S(n) + x</Line>
                </Paragraph>
                <Line>By the induction principle, ∀x ∀y (x + y = y + x)</Line>
            </Paragraph>
            <Heading>12.5.2 Proving Properties of Multiplication</Heading>
            <Paragraph>Using similar techniques, we can prove:</Paragraph>
            <Paragraph>
                <List />
                <Line>∀x (x · 1 = x)</Line>
                <Line>∀x ∀y (x · y = y · x) (commutativity of multiplication)</Line>
                <Line>∀x ∀y ∀z (x · (y + z) = x · y + x · z) (distributivity)</Line>
            </Paragraph>
            <Heading>12.6 Gödel's Incompleteness Theorems in Peano Arithmetic</Heading>
            <Heading>12.6.1 Arithmetization of Syntax</Heading>
            <Paragraph>
                Gödel numbering assigns a unique natural number to each symbol, formula, and proof in PA, allowing the
                system to talk about its own syntax.
            </Paragraph>
            <Heading>12.6.2 The Provability Predicate</Heading>
            <Paragraph>
                The predicate Prov_PA(⌜φ⌝) represents "formula φ is provable in PA" and can be expressed as a formula in PA.
                Specifically, Prov_PA(n) is true if and only if n is the Gödel number of a provable formula.
            </Paragraph>
            <Heading>12.6.3 The Gödel Sentence</Heading>
            <Paragraph>
                The Gödel sentence G for PA is a sentence that asserts its own unprovability: G ↔ ¬Prov_PA(⌜G⌝)
            </Paragraph>
            <Heading>12.6.4 The First Incompleteness Theorem</Heading>
            <Paragraph>If PA is consistent, then G is neither provable nor refutable in PA.</Paragraph>
            <Paragraph>Proof sketch:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>If PA ⊢ G, then G is true, which means G is not provable, contradicting PA ⊢ G</Line>
                <Line>
                    If PA ⊢ ¬G, then PA proves that G is provable, but since PA is consistent, G must be true, contradicting
                    PA ⊢ ¬G
                </Line>
            </Paragraph>
            <Heading>12.6.5 The Second Incompleteness Theorem</Heading>
            <Paragraph>If PA is consistent, then PA cannot prove its own consistency.</Paragraph>
            <Paragraph>
                The consistency of PA can be expressed as the formula Con(PA) ≡ ¬Prov_PA(⌜0=1⌝), which states that the
                contradiction 0=1 is not provable.
            </Paragraph>
            <Paragraph>Proof sketch:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>PA can prove G ↔ ¬Prov_PA(⌜G⌝)</Line>
                <Line>PA can prove that if it is consistent, then G is not provable</Line>
                <Line>This means PA ⊢ Con(PA) → G</Line>
                <Line>If PA could prove Con(PA), then by modus ponens, PA ⊢ G</Line>
                <Line>But G is not provable in PA if PA is consistent</Line>
                <Line>Therefore, PA ⊬ Con(PA) if PA is consistent</Line>
            </Paragraph>
            <Heading>12.7 Models of Peano Arithmetic</Heading>
            <Heading>12.7.1 Standard Model</Heading>
            <Paragraph>The standard model of PA is (ℕ, 0, S, +, ·) as described earlier.</Paragraph>
            <Heading>12.7.2 Non-standard Models</Heading>
            <Paragraph>
                By the Compactness Theorem and the Löwenheim-Skolem Theorem, PA has non-standard models. These models
                contain elements that behave like "infinite numbers" beyond the standard natural numbers.
            </Paragraph>
            <Heading>12.7.3 Tennenbaum's Theorem</Heading>
            <Paragraph>
                Tennenbaum's Theorem states that there is no computable non-standard model of PA. This means any
                non-standard model must have addition or multiplication operations that are not computable.
            </Paragraph>
            <Heading>13. First-Order Logic and Mathematical Practice</Heading>
            <Paragraph>
                First-order logic provides the formal foundation for mathematics, but mathematical practice often uses
                informal or semi-formal reasoning. The relationship between formal and informal mathematics involves:
            </Paragraph>
            <Heading>13.1 Formalization of Mathematical Theories</Heading>
            <Paragraph>
                Most mathematical theories can be formalized in first-order logic, often using set theory (ZFC) as a
                foundation.
            </Paragraph>
            <Heading>13.2 Limitations of Formalization</Heading>
            <Paragraph>
                Complete formalization of mathematical arguments is often impractical due to the length and complexity of
                formal proofs.
            </Paragraph>
            <Heading>13.3 Proof Verification and Automated Theorem Proving</Heading>
            <Paragraph>
                Computer systems for formal proof verification (like Coq, Isabelle, and Lean) and automated theorem proving
                are increasingly important in mathematical practice.
            </Paragraph>
            <Heading>14. Conclusion: The Power and Limits of First-Order Logic</Heading>
            <Paragraph>
                First-order logic provides a powerful framework for formalizing mathematical theories and reasoning about
                structures. It strikes a balance between expressivity and meta-theoretical properties, making it the
                standard foundation for mathematics.
            </Paragraph>
            <Paragraph>
                However, first-order logic has well-understood limitations. Gödel's incompleteness theorems show that no
                consistent, recursively axiomatizable extension of Peano Arithmetic can be complete. Some mathematical
                concepts require stronger logical systems, such as second-order logic or set theory.
            </Paragraph>
            <Paragraph>
                Despite these limitations, first-order logic remains the cornerstone of formal mathematics and serves as the
                basis for many applications in computer science, artificial intelligence, and formal verification.
                Understanding first-order logic and its application in theories like Peano Arithmetic provides insight into
                the foundations of mathematics and the boundaries of formal reasoning.
            </Paragraph>
        </Section>
    </Chapter>
);
