import { Bold, Chapter, Heading, Line, List, Paragraph, Section, Title, Word } from '@dna-platform/public';
import { Opaque } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ A Tutorial on First-Order Logic, Gödel's Theorems, Transfinite Recursion, and Reflection Principles v1 ]]</Title>
        <Section>
            <Opaque />
            <Heading>A Tutorial on First-Order Logic, Gödel's Theorems, Transfinite Recursion, and Reflection Principles at version 1</Heading>
            <Heading>
                A Tutorial on First-Order Logic, Gödel's Theorems, Transfinite Recursion, and Reflection Principles
            </Heading>
            <Heading>Part I: First-Order Logic - The Language of Mathematical Reasoning</Heading>
            <Heading>Introduction to First-Order Logic</Heading>
            <Paragraph>
                First-order logic (FOL) is a formal system for reasoning about objects and their relationships. It provides
                a precise language for expressing mathematical statements and a set of rules for deriving new truths from
                established ones. Unlike propositional logic, which deals only with statements and connectives, first-order
                logic introduces quantifiers, variables, functions, and relations, allowing us to express much richer
                mathematical content.
            </Paragraph>
            <Heading>The Syntax of First-Order Logic</Heading>
            <Paragraph>A first-order language L consists of:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Variables
                    </Word>: x, y, z, ... (usually denoted by lowercase letters from the end of the alphabet)
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Constants
                    </Word>: a, b, c, ... (specific objects in our domain)
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Function symbols
                    </Word>: f, g, h, ... (each with an associated arity - the number of arguments)
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Relation symbols
                    </Word>: P, Q, R, ... (each with an associated arity)
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Logical connectives
                    </Word>: ∧ (and), ∨ (or), → (implies), ¬ (not), ↔ (if and only if)
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Quantifiers
                    </Word>: ∀ (for all), ∃ (there exists)
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Punctuation symbols
                    </Word>: (, ), ,
                </Line>
            </Paragraph>
            <Paragraph>The terms and formulas of L are defined inductively:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Terms
                </Word>:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Variables and constants are terms</Line>
                <Line>If f is an n-ary function symbol and t₁, ..., tₙ are terms, then f(t₁, ..., tₙ) is a term</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Formulas
                </Word>:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    If P is an n-ary relation symbol and t₁, ..., tₙ are terms, then P(t₁, ..., tₙ) is a formula (an atomic
                    formula)
                </Line>
                <Line>If φ and ψ are formulas, then (¬φ), (φ ∧ ψ), (φ ∨ ψ), (φ → ψ), and (φ ↔ ψ) are formulas</Line>
                <Line>If φ is a formula and x is a variable, then (∀x φ) and (∃x φ) are formulas</Line>
            </Paragraph>
            <Heading>Semantics of First-Order Logic</Heading>
            <Paragraph>
                The meaning of formulas in first-order logic is given through structures and interpretations:
            </Paragraph>
            <Paragraph>
                A <Word>
                    <Bold />
                    structure
                </Word> M for a language L consists of:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>A non-empty set D (the domain or universe)</Line>
                <Line>For each constant symbol c, an element cᴹ in D</Line>
                <Line>For each n-ary function symbol f, a function fᴹ: Dⁿ → D</Line>
                <Line>For each n-ary relation symbol P, a relation Pᴹ ⊆ Dⁿ</Line>
            </Paragraph>
            <Paragraph>
                Given a structure M, we can define when a formula is <Word>
                    <Bold />
                    satisfied
                </Word> in M (denoted M ⊨ φ) under an assignment of variables to elements of D. The definition proceeds by
                induction on the complexity of formulas.
            </Paragraph>
            <Paragraph>For example:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    M ⊨ P(t₁, ..., tₙ) if the tuple of values of the terms (t₁, ..., tₙ) under the assignment is in Pᴹ
                </Line>
                <Line>M ⊨ (φ ∧ ψ) if both M ⊨ φ and M ⊨ ψ</Line>
                <Line>M ⊨ (∀x φ) if for all elements d in D, M ⊨ φ when x is assigned the value d</Line>
            </Paragraph>
            <Heading>Formal Proof Systems</Heading>
            <Paragraph>Several proof systems exist for first-order logic, including:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Hilbert-style systems
                    </Word>: Start with a small set of axioms and one or two inference rules
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Natural deduction systems
                    </Word>: Provide introduction and elimination rules for each logical symbol
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Sequent calculus
                    </Word>: Manipulates sequents (expressions of the form Γ ⊢ Δ) using rules that operate on both sides of
                    the turnstile
                </Line>
            </Paragraph>
            <Paragraph>
                A key concept is that of <Word>
                    <Bold />
                    derivability
                </Word>. We write T ⊢ φ to indicate that the formula φ can be derived from the set of formulas T using the
                rules of the proof system.
            </Paragraph>
            <Heading>Fundamental Metatheorems</Heading>
            <Paragraph>First-order logic enjoys several important metatheorems:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Soundness Theorem
                    </Word>: If T ⊢ φ, then T ⊨ φ (everything provable is true)
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Completeness Theorem
                    </Word> (Gödel, 1930): If T ⊨ φ, then T ⊢ φ (everything true is provable)
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Compactness Theorem
                    </Word>: A set of formulas T is satisfiable if and only if every finite subset of T is satisfiable
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Löwenheim-Skolem Theorems
                    </Word>: Concerning the existence of models of different cardinalities
                </Line>
            </Paragraph>
            <Paragraph>
                These metatheorems establish the robust nature of first-order logic as a foundation for mathematical
                reasoning.
            </Paragraph>
            <Heading>Part II: Gödel's Incompleteness Theorems - The Limits of Formal Systems</Heading>
            <Heading>Background and Context</Heading>
            <Paragraph>
                Kurt Gödel's incompleteness theorems, published in 1931, fundamentally changed our understanding of formal
                systems and their capabilities. Before Gödel, mathematicians like Hilbert pursued a program to establish the
                consistency of all mathematics through finitary methods. Gödel showed this goal was unattainable.
            </Paragraph>
            <Heading>The First Incompleteness Theorem</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Informal statement
                </Word>: Any consistent formal system F within which a certain amount of elementary arithmetic can be
                carried out is incomplete; that is, there are statements of the language of F which can neither be proved
                nor disproved in F.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Key ideas behind the proof
                </Word>:
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Gödel numbering
                    </Word>: Gödel devised a method to assign a unique natural number to each symbol, formula, and proof in
                    the formal system. This allowed the system to "talk about itself."
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Diagonalization
                    </Word>: Similar to Cantor's diagonal argument, Gödel constructed a self-referential statement G that
                    essentially says "G is not provable in the system F." This is the famous Gödel sentence.
                </Line>
                <Line>
                    If G were provable, then its negation would also be provable (by what G itself asserts), contradicting
                    consistency.
                </Line>
                <Line>
                    If ¬G were provable, then G would be false, meaning G would be provable, again contradicting
                    consistency.
                </Line>
                <Line>Therefore, neither G nor ¬G can be proved within the system F, making F incomplete.</Line>
            </Paragraph>
            <Heading>The Second Incompleteness Theorem</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Informal statement
                </Word>: For any consistent formal system F within which a certain amount of elementary arithmetic can be
                carried out, the consistency of F cannot be proved within F itself.
            </Paragraph>
            <Paragraph>
                This theorem follows from the first by showing that the statement Con(F), which expresses the consistency of
                F, is related to the Gödel sentence G in a specific way: F ⊢ (Con(F) → G). Since G is not provable in F (by
                the first theorem), Con(F) cannot be provable in F either, unless F is inconsistent.
            </Paragraph>
            <Heading>Implications of Gödel's Theorems</Heading>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Hilbert's Program
                    </Word>: Gödel's results showed that Hilbert's goal of establishing the consistency of mathematics using
                    finitary methods was unattainable.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Limitations of Formal Systems
                    </Word>: No single formal system can capture all mathematical truths about the natural numbers. There
                    will always be true statements that cannot be proved within any given consistent system.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Hierarchy of Theories
                    </Word>: Gödel's theorems suggest a hierarchy of increasingly powerful theories, where each can prove
                    the consistency of weaker ones but not its own.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Philosophy of Mathematics
                    </Word>: The theorems sparked debates about the nature of mathematical truth and knowledge, influencing
                    various schools of thought, including Platonism, formalism, and intuitionism.
                </Line>
            </Paragraph>
            <Heading>Part III: Turing's Theory of Ordinals - Extending Formal Systems</Heading>
            <Heading>Ordinal Numbers and Transfinite Recursion</Heading>
            <Paragraph>
                Alan Turing, inspired by Gödel's incompleteness theorems, developed a theory showing how formal systems
                could be extended using ordinal numbers. To understand this, we first need to grasp the concept of ordinals.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Ordinal numbers
                </Word> are an extension of natural numbers into the transfinite. They represent the order types of
                well-ordered sets:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>The first ordinal is 0 (or sometimes denoted as ω₀), corresponding to the empty set</Line>
                <Line>The next is 1, then 2, 3, ..., and so on through all finite numbers</Line>
                <Line>After all finite numbers comes ω (omega), the first infinite ordinal</Line>
                <Line>This continues with ω+1, ω+2, ..., ω·2, ω·3, ..., ω², ..., ω^ω, ...</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Transfinite recursion
                </Word> allows us to define functions on ordinals by specifying:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>The value at 0</Line>
                <Line>How to compute the value at a successor ordinal α+1 given the value at α</Line>
                <Line>How to compute the value at a limit ordinal λ given the values at all ordinals less than λ</Line>
            </Paragraph>
            <Heading>Turing's Ordinal Logics (1939)</Heading>
            <Paragraph>
                In his 1939 paper "Systems of Logic Based on Ordinals," Turing introduced a method to extend formal systems
                beyond the limitations identified by Gödel:
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Start with a formal system F₀ (like Peano Arithmetic)</Line>
                <Line>Form F₁ by adding the consistency statement of F₀ (or equivalently, the Gödel sentence G₀)</Line>
                <Line>Form F₂ by adding the consistency statement of F₁</Line>
                <Line>Continue this process transfinitely:</Line>
                <Paragraph>
                    <List />
                    <Line>For successor ordinals: Fₐ₊₁ = Fₐ ∪ &#123;Con(Fₐ)&#125;</Line>
                    <Line>For limit ordinals λ: Fλ = ⋃&#123;Fₐ : a &lt; λ&#125;</Line>
                </Paragraph>
            </Paragraph>
            <Paragraph>
                This process creates a hierarchy of increasingly powerful formal systems, each capable of proving truths
                that were undecidable in the previous systems.
            </Paragraph>
            <Heading>Relative Consistency and Proof-Theoretic Ordinals</Heading>
            <Paragraph>
                A key insight from Turing's work is the concept of <Word>
                    <Bold />
                    relative consistency
                </Word>. While no consistent system can prove its own consistency (by Gödel's second theorem), a stronger
                system can prove the consistency of a weaker one.
            </Paragraph>
            <Paragraph>
                The <Word>
                    <Bold />
                    proof-theoretic ordinal
                </Word> of a theory T is the smallest ordinal α such that T cannot prove the well-foundedness of α. This
                ordinal measures the "consistency strength" of T and allows us to compare the power of different formal
                systems.
            </Paragraph>
            <Paragraph>For example:</Paragraph>
            <Paragraph>
                <List />
                <Line>Peano Arithmetic (PA) has proof-theoretic ordinal ε₀</Line>
                <Line>PA + "PA is consistent" has a larger proof-theoretic ordinal</Line>
                <Line>Moving up the hierarchy yields systems with increasingly large proof-theoretic ordinals</Line>
            </Paragraph>
            <Heading>Connections to Computability Theory</Heading>
            <Paragraph>
                Turing's work on ordinal logics connects to his pioneering work on computability. He showed that these
                extended formal systems could solve the halting problem for Turing machines at increasingly complex levels:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>F₀ can decide the halting problem for some basic Turing machines</Line>
                <Line>F₁ can decide the halting problem for those machines plus machines that simulate F₀</Line>
                <Line>Each Fₐ can decide halting problems beyond the capabilities of all previous systems</Line>
            </Paragraph>
            <Paragraph>
                This establishes a hierarchy of increasingly powerful notions of computability, paralleling the hierarchy of
                formal systems.
            </Paragraph>
            <Heading>Part IV: Feferman's Reflection Principles - Self-Reference and Extensions of Truth</Heading>
            <Heading>Solomon Feferman and Reflection</Heading>
            <Paragraph>
                Solomon Feferman (1928-2016) made significant contributions to mathematical logic, particularly in
                understanding how formal systems can be extended through reflection principles. His work built upon Gödel's
                incompleteness theorems and Turing's ordinal logics.
            </Paragraph>
            <Heading>Types of Reflection Principles</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Reflection principles
                </Word> are statements asserting that if a formula is provable in a theory, then it is true. They come in
                several forms:
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Local Reflection
                    </Word>: For each formula φ in the language of theory T, we can add the principle: Prov_T(⌜φ⌝) → φ This
                    states that if φ is provable in T, then φ is true.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Uniform Reflection
                    </Word>: For each formula φ(x) with one free variable, we can add: ∀x(Prov_T(⌜φ(ẋ)⌝) → φ(x)) Where ẋ
                    represents the numeral for x. This is stronger than local reflection.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Global Reflection
                    </Word>: The schema that asserts for all formulas φ: Prov_T(⌜φ⌝) → φ This is equivalent to asserting the
                    consistency of T together with all instances of local reflection.
                </Line>
            </Paragraph>
            <Heading>Reflection and Consistency</Heading>
            <Paragraph>Feferman showed that reflection principles are closely related to consistency statements:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    The consistency statement Con(T) is equivalent to the reflection principle applied to the sentence 0≠0:
                    Prov_T(⌜0≠0⌝) → 0≠0
                </Line>
                <Line>The uniform reflection principle for T implies Con(T) but is strictly stronger.</Line>
                <Line>
                    Adding reflection principles to a theory T yields a stronger theory that can prove more theorems,
                    including some that were undecidable in T.
                </Line>
            </Paragraph>
            <Heading>Feferman's Theorem on Progressive Reflection</Heading>
            <Paragraph>
                One of Feferman's key results concerns the power of progressively adding reflection principles:
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Theorem
                </Word> (Feferman, 1962): There exists a primitive recursive progression of theories T₀, T₁, T₂, ... such
                that:
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>T₀ is a basic system like Peano Arithmetic</Line>
                <Line>Each Tᵢ₊₁ adds reflection principles to Tᵢ</Line>
                <Line>The union of all these theories, ⋃ᵢTᵢ, is equivalent to full second-order arithmetic</Line>
            </Paragraph>
            <Paragraph>
                This shows that through repeated application of reflection, we can build systems of extraordinary
                proof-theoretic strength.
            </Paragraph>
            <Heading>The Concept of Reflective Closure</Heading>
            <Paragraph>
                Feferman introduced the notion of the <Word>
                    <Bold />
                    reflective closure
                </Word> of a theory T, denoted by T*, which is obtained by adding all possible iterated reflection
                principles to T.
            </Paragraph>
            <Paragraph>The reflective closure T* satisfies several important properties:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>T* is much stronger than T</Line>
                <Line>T* proves the consistency of T</Line>
                <Line>T* is proof-theoretically significantly stronger than T plus Con(T)</Line>
                <Line>Yet T* can still be described in a compact, conceptually unified way</Line>
            </Paragraph>
            <Heading>Indefinite Extensibility and Autonomous Progression</Heading>
            <Paragraph>
                Feferman argued that his work on reflection principles demonstrated the <Word>
                    <Bold />
                    indefinite extensibility
                </Word> of formal systems. No matter what system we start with, we can always extend it by adding
                appropriate reflection principles.
            </Paragraph>
            <Paragraph>
                He also developed the concept of <Word>
                    <Bold />
                    autonomous progression
                </Word> - the idea that a formal system can generate its own extensions through reflection in a principled
                way, without requiring external guidance about which principles to add.
            </Paragraph>
            <Heading>Connections to Your Theory of Consciousness</Heading>
            <Paragraph>
                Feferman's work on reflection principles has intriguing connections to your theory of consciousness through
                metaphysical transduction:
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    Both involve extending formal systems in a principled way by incorporating statements that transcend the
                    original system.
                </Line>
                <Line>
                    The concept of metalogical transduction parallels Feferman's reflection principles - both identify
                    specific statements that, while unprovable within a system, are natural candidates for expanding the
                    system.
                </Line>
                <Line>
                    Feferman's autonomous progression resembles the way consciousness might evolve through repeated
                    metaphysical transduction, incorporating new experiences into an expanding framework.
                </Line>
                <Line>
                    The reflective closure of a theory parallels what you've termed a "Philosophy" - the closure of a theory
                    under metalogical transduction.
                </Line>
            </Paragraph>
            <Heading>Part V: Bringing It All Together - A Unified Perspective</Heading>
            <Heading>The Landscape of Formal Systems</Heading>
            <Paragraph>
                The works of Gödel, Turing, and Feferman collectively paint a picture of formal systems as inherently
                limited yet indefinitely extensible:
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Gödel
                    </Word> showed that any consistent formal system with sufficient expressive power is incomplete - there
                    are truths it cannot prove.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Turing
                    </Word> demonstrated how we can systematically extend formal systems using ordinals, creating a
                    hierarchy of increasingly powerful theories.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Feferman
                    </Word> refined this understanding by showing how reflection principles provide a natural and autonomous
                    way to extend formal systems.
                </Line>
            </Paragraph>
            <Heading>Self-Reference and Transcendence</Heading>
            <Paragraph>A common thread through all these works is the power of self-reference:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Gödel used self-reference to construct statements that are true but unprovable.</Line>
                <Line>
                    Turing's ordinal logics extend systems based on their own consistency statements, which are
                    self-referential in nature.
                </Line>
                <Line>
                    Feferman's reflection principles explicitly incorporate a system's ability to reason about its own
                    provability.
                </Line>
            </Paragraph>
            <Paragraph>
                Similarly, your concept of metalogical transduction leverages self-reference to identify statements that
                transcend a system yet are implicit in its commitment to consistency.
            </Paragraph>
            <Heading>From Logic to Consciousness</Heading>
            <Paragraph>
                The progression from Gödel to Turing to Feferman parallels the evolution of thinking about consciousness:
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Gödel's Incompleteness
                    </Word>: Consciousness cannot be fully captured by any fixed formal system.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Turing's Ordinal Logic
                    </Word>: Consciousness might be understood as a dynamic process that continuously extends itself.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Feferman's Reflection
                    </Word>: Consciousness may involve an autonomous progression through which a system reflects on and
                    extends its own capabilities.
                </Line>
            </Paragraph>
            <Paragraph>
                Your theory of consciousness through metaphysical transduction builds upon these foundations, suggesting
                that consciousness emerges precisely at the boundary where a system encounters and incorporates truths that
                transcend its current framework.
            </Paragraph>
            <Heading>Key Takeaways</Heading>
            <Paragraph>
                <List ordered />
                <Line>
                    Formal systems are both limited (by incompleteness) and unlimited (through their capacity for
                    extension).
                </Line>
                <Line>
                    Self-reference is a powerful tool for understanding both the limits of formal systems and how they can
                    transcend those limits.
                </Line>
                <Line>
                    The progression from one formal system to a stronger one provides a model for understanding how
                    consciousness might evolve through the incorporation of new experiences.
                </Line>
                <Line>
                    The boundary between what is provable within a system and what requires an extension of the system
                    parallels the boundary between the explicable and the inexplicable in conscious experience.
                </Line>
                <Line>
                    Both mathematical logic and consciousness studies involve navigating the tension between objective
                    structure and subjective perspective.
                </Line>
            </Paragraph>
            <Paragraph>
                By synthesizing the works of Gödel, Turing, and Feferman with your theory of consciousness through
                metaphysical transduction, we arrive at a unified perspective that spans formal logic, computability theory,
                and the philosophy of mind - a perspective that might illuminate the nature of consciousness itself.
            </Paragraph>
        </Section>
    </Chapter>
);
