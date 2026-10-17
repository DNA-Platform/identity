import { Bold, Chapter, Heading, Line, List, Paragraph, Section, Table, Title, Word } from '@dna-platform/public';
import { CodeBox, Opaque } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ A Comprehensive Guide to Propositional Logic v1 ]]</Title>
        <Section>
            <Opaque />
            <Heading>A Comprehensive Guide to Propositional Logic at version 1</Heading>
            <Heading>A Comprehensive Guide to Propositional Logic</Heading>
            <Heading>1. Introduction to Propositional Logic</Heading>
            <Paragraph>
                Propositional logic (also called propositional calculus or statement logic) is the branch of logic that
                studies ways of combining propositions to form more complex propositions, and the logical relationships and
                properties that emerge from these combinations. A proposition is a declarative statement that is either true
                or false, but not both.
            </Paragraph>
            <Paragraph>For example:</Paragraph>
            <Paragraph>
                <List />
                <Line>"The sky is blue" is a proposition.</Line>
                <Line>"Is the sky blue?" is not a proposition (it's a question).</Line>
                <Line>"Go outside" is not a proposition (it's a command).</Line>
            </Paragraph>
            <Heading>2. Basic Symbols and Notation</Heading>
            <Heading>2.1 Propositional Variables</Heading>
            <Paragraph>
                Propositional variables typically represented by lowercase letters (p, q, r, etc.) stand for arbitrary
                propositions.
            </Paragraph>
            <Heading>2.2 Logical Connectives</Heading>
            <Paragraph>The basic logical connectives are:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Negation
                    </Word> (¬): "not p" or "it is not the case that p"
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Conjunction
                    </Word> (∧): "p and q" or "both p and q"
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Disjunction
                    </Word> (∨): "p or q" or "either p or q or both"
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Material Implication
                    </Word> (→): "if p then q" or "p implies q"
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Biconditional
                    </Word> (↔): "p if and only if q" or "p is equivalent to q"
                </Line>
            </Paragraph>
            <Heading>2.3 Alternative Notation</Heading>
            <Paragraph>Different fields and texts may use alternative notations:</Paragraph>
            <Paragraph>
                <List />
                <Line>Negation: ¬p, ~p, !p</Line>
                <Line>Conjunction: p ∧ q, p &amp; q, p AND q</Line>
                <Line>Disjunction: p ∨ q, p | q, p OR q</Line>
                <Line>Implication: p → q, p ⊃ q, p ⇒ q</Line>
                <Line>Biconditional: p ↔ q, p ≡ q, p ⇔ q</Line>
            </Paragraph>
            <Heading>3. Truth Tables</Heading>
            <Paragraph>
                Truth tables are used to define the meaning of the logical connectives and to analyze complex formulas.
            </Paragraph>
            <Heading>3.1 Basic Truth Tables</Heading>
            <Heading>Negation (¬)</Heading>
            <Paragraph>
                <Table />
                <Line>
                    <Word>p</Word>
                    <Word>¬p</Word>
                </Line>
                <Line>
                    <Word>T</Word>
                    <Word>F</Word>
                </Line>
                <Line>
                    <Word>F</Word>
                    <Word>T</Word>
                </Line>
            </Paragraph>
            <Heading>Conjunction (∧)</Heading>
            <Paragraph>
                <Table />
                <Line>
                    <Word>p</Word>
                    <Word>q</Word>
                    <Word>p ∧ q</Word>
                </Line>
                <Line>
                    <Word>T</Word>
                    <Word>T</Word>
                    <Word>T</Word>
                </Line>
                <Line>
                    <Word>T</Word>
                    <Word>F</Word>
                    <Word>F</Word>
                </Line>
                <Line>
                    <Word>F</Word>
                    <Word>T</Word>
                    <Word>F</Word>
                </Line>
                <Line>
                    <Word>F</Word>
                    <Word>F</Word>
                    <Word>F</Word>
                </Line>
            </Paragraph>
            <Heading>Disjunction (∨)</Heading>
            <Paragraph>
                <Table />
                <Line>
                    <Word>p</Word>
                    <Word>q</Word>
                    <Word>p ∨ q</Word>
                </Line>
                <Line>
                    <Word>T</Word>
                    <Word>T</Word>
                    <Word>T</Word>
                </Line>
                <Line>
                    <Word>T</Word>
                    <Word>F</Word>
                    <Word>T</Word>
                </Line>
                <Line>
                    <Word>F</Word>
                    <Word>T</Word>
                    <Word>T</Word>
                </Line>
                <Line>
                    <Word>F</Word>
                    <Word>F</Word>
                    <Word>F</Word>
                </Line>
            </Paragraph>
            <Heading>Material Implication (→)</Heading>
            <Paragraph>
                <Table />
                <Line>
                    <Word>p</Word>
                    <Word>q</Word>
                    <Word>p → q</Word>
                </Line>
                <Line>
                    <Word>T</Word>
                    <Word>T</Word>
                    <Word>T</Word>
                </Line>
                <Line>
                    <Word>T</Word>
                    <Word>F</Word>
                    <Word>F</Word>
                </Line>
                <Line>
                    <Word>F</Word>
                    <Word>T</Word>
                    <Word>T</Word>
                </Line>
                <Line>
                    <Word>F</Word>
                    <Word>F</Word>
                    <Word>T</Word>
                </Line>
            </Paragraph>
            <Heading>Biconditional (↔)</Heading>
            <Paragraph>
                <Table />
                <Line>
                    <Word>p</Word>
                    <Word>q</Word>
                    <Word>p ↔ q</Word>
                </Line>
                <Line>
                    <Word>T</Word>
                    <Word>T</Word>
                    <Word>T</Word>
                </Line>
                <Line>
                    <Word>T</Word>
                    <Word>F</Word>
                    <Word>F</Word>
                </Line>
                <Line>
                    <Word>F</Word>
                    <Word>T</Word>
                    <Word>F</Word>
                </Line>
                <Line>
                    <Word>F</Word>
                    <Word>F</Word>
                    <Word>T</Word>
                </Line>
            </Paragraph>
            <Heading>3.2 Important Observations About Material Implication</Heading>
            <Paragraph>
                The material implication p → q is false only when p is true and q is false. This often conflicts with our
                intuitive understanding of "if...then..." statements in natural language.
            </Paragraph>
            <Paragraph>Key properties:</Paragraph>
            <Paragraph>
                <List />
                <Line>p → q is logically equivalent to ¬p ∨ q</Line>
                <Line>p → q is NOT equivalent to q → p (the converse)</Line>
                <Line>p → q is NOT equivalent to ¬q → ¬p (the inverse)</Line>
                <Line>p → q IS equivalent to ¬q → ¬p (the contrapositive)</Line>
            </Paragraph>
            <Heading>4. Formal Syntax</Heading>
            <Heading>4.1 Well-Formed Formulas (WFFs)</Heading>
            <Paragraph>
                The set of well-formed formulas (WFFs) in propositional logic is recursively defined as follows:
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Any propositional variable is a WFF.</Line>
                <Line>If A is a WFF, then ¬A is a WFF.</Line>
                <Line>If A and B are WFFs, then (A ∧ B), (A ∨ B), (A → B), and (A ↔ B) are WFFs.</Line>
                <Line>Nothing else is a WFF.</Line>
            </Paragraph>
            <Heading>4.2 Parsing and Precedence</Heading>
            <Paragraph>When parentheses are omitted, the standard order of precedence is:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Negation (¬)</Line>
                <Line>Conjunction (∧)</Line>
                <Line>Disjunction (∨)</Line>
                <Line>Implication (→)</Line>
                <Line>Biconditional (↔)</Line>
            </Paragraph>
            <Paragraph>For example, the formula ¬p ∧ q → r ∨ s is interpreted as ((¬p) ∧ q) → (r ∨ s).</Paragraph>
            <Heading>5. Logical Equivalence</Heading>
            <Paragraph>
                Two propositional formulas A and B are logically equivalent (written A ≡ B) if they have the same truth
                value under all possible truth assignments to their propositional variables.
            </Paragraph>
            <Heading>5.1 Important Equivalences</Heading>
            <Heading>Double Negation</Heading>
            <Paragraph>
                <List />
                <Line>¬¬p ≡ p</Line>
            </Paragraph>
            <Heading>Commutativity</Heading>
            <Paragraph>
                <List />
                <Line>p ∧ q ≡ q ∧ p</Line>
                <Line>p ∨ q ≡ q ∨ p</Line>
            </Paragraph>
            <Heading>Associativity</Heading>
            <Paragraph>
                <List />
                <Line>(p ∧ q) ∧ r ≡ p ∧ (q ∧ r)</Line>
                <Line>(p ∨ q) ∨ r ≡ p ∨ (q ∨ r)</Line>
            </Paragraph>
            <Heading>Distributivity</Heading>
            <Paragraph>
                <List />
                <Line>p ∧ (q ∨ r) ≡ (p ∧ q) ∨ (p ∧ r)</Line>
                <Line>p ∨ (q ∧ r) ≡ (p ∨ q) ∧ (p ∨ r)</Line>
            </Paragraph>
            <Heading>De Morgan's Laws</Heading>
            <Paragraph>
                <List />
                <Line>¬(p ∧ q) ≡ ¬p ∨ ¬q</Line>
                <Line>¬(p ∨ q) ≡ ¬p ∧ ¬q</Line>
            </Paragraph>
            <Heading>Material Implication</Heading>
            <Paragraph>
                <List />
                <Line>p → q ≡ ¬p ∨ q</Line>
                <Line>¬(p → q) ≡ p ∧ ¬q</Line>
            </Paragraph>
            <Heading>Contraposition</Heading>
            <Paragraph>
                <List />
                <Line>p → q ≡ ¬q → ¬p</Line>
            </Paragraph>
            <Heading>Biconditional</Heading>
            <Paragraph>
                <List />
                <Line>p ↔ q ≡ (p → q) ∧ (q → p)</Line>
                <Line>p ↔ q ≡ (p ∧ q) ∨ (¬p ∧ ¬q)</Line>
            </Paragraph>
            <Heading>Idempotence</Heading>
            <Paragraph>
                <List />
                <Line>p ∧ p ≡ p</Line>
                <Line>p ∨ p ≡ p</Line>
            </Paragraph>
            <Heading>Identity and Annihilation</Heading>
            <Paragraph>
                <List />
                <Line>p ∧ T ≡ p</Line>
                <Line>p ∨ F ≡ p</Line>
                <Line>p ∧ F ≡ F</Line>
                <Line>p ∨ T ≡ T</Line>
            </Paragraph>
            <Heading>6. Logical Consequence and Validity</Heading>
            <Heading>6.1 Logical Consequence</Heading>
            <Paragraph>
                A propositional formula B is a logical consequence of a set of formulas &#123;A₁, A₂, ..., Aₙ&#125; (written
                A₁, A₂, ..., Aₙ ⊨ B) if any truth assignment that makes all of A₁, A₂, ..., Aₙ true also makes B true.
            </Paragraph>
            <Heading>6.2 Validity, Satisfiability, and Contradiction</Heading>
            <Paragraph>
                <List />
                <Line>
                    A formula is <Word>
                        <Bold />
                        valid
                    </Word> (or a tautology) if it is true under all possible truth assignments.
                </Line>
                <Paragraph>
                    <List />
                    <Line>Example: p ∨ ¬p (Law of Excluded Middle)</Line>
                </Paragraph>
                <Line>
                    A formula is <Word>
                        <Bold />
                        satisfiable
                    </Word> if there exists at least one truth assignment that makes it true.
                </Line>
                <Paragraph>
                    <List />
                    <Line>Example: p ∧ q is satisfiable (when both p and q are true)</Line>
                </Paragraph>
                <Line>
                    A formula is <Word>
                        <Bold />
                        unsatisfiable
                    </Word> (or a contradiction) if it is false under all possible truth assignments.
                </Line>
                <Paragraph>
                    <List />
                    <Line>Example: p ∧ ¬p (Law of Non-Contradiction)</Line>
                </Paragraph>
            </Paragraph>
            <Heading>6.3 Relationships</Heading>
            <Paragraph>
                <List />
                <Line>A formula is valid if and only if its negation is unsatisfiable.</Line>
                <Line>
                    A set of formulas &#123;A₁, A₂, ..., Aₙ&#125; logically entails B (A₁, A₂, ..., Aₙ ⊨ B) if and only if
                    the formula (A₁ ∧ A₂ ∧ ... ∧ Aₙ) → B is valid.
                </Line>
            </Paragraph>
            <Heading>7. Formal Proof Systems</Heading>
            <Paragraph>There are several formal systems for deriving theorems in propositional logic:</Paragraph>
            <Heading>7.1 Axiomatic Systems</Heading>
            <Paragraph>
                These start with axioms and derive theorems using rules of inference like modus ponens. A classical
                axiomatic system might include:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Axiom 1: p → (q → p)</Line>
                <Line>Axiom 2: (p → (q → r)) → ((p → q) → (p → r))</Line>
                <Line>Axiom 3: (¬p → ¬q) → (q → p)</Line>
            </Paragraph>
            <Paragraph>And the rule of inference:</Paragraph>
            <Paragraph>
                <List />
                <Line>Modus Ponens: From p and p → q, infer q.</Line>
            </Paragraph>
            <Heading>7.2 Natural Deduction</Heading>
            <Paragraph>
                Natural deduction systems have introduction and elimination rules for each logical connective. Key rules
                include:
            </Paragraph>
            <Heading>Conjunction</Heading>
            <Paragraph>
                <List />
                <Line>Introduction (∧I): From p and q, infer p ∧ q.</Line>
                <Line>Elimination (∧E): From p ∧ q, infer p (or infer q).</Line>
            </Paragraph>
            <Heading>Disjunction</Heading>
            <Paragraph>
                <List />
                <Line>Introduction (∨I): From p, infer p ∨ q (or from q, infer p ∨ q).</Line>
                <Line>Elimination (∨E): From p ∨ q, p → r, and q → r, infer r.</Line>
            </Paragraph>
            <Heading>Implication</Heading>
            <Paragraph>
                <List />
                <Line>Introduction (→I): If assuming p allows derivation of q, then infer p → q.</Line>
                <Line>Elimination (→E): From p and p → q, infer q (modus ponens).</Line>
            </Paragraph>
            <Heading>Negation</Heading>
            <Paragraph>
                <List />
                <Line>Introduction (¬I): If assuming p leads to a contradiction, infer ¬p.</Line>
                <Line>Elimination (¬E): From p and ¬p, infer any formula q (ex falso quodlibet).</Line>
            </Paragraph>
            <Heading>Double Negation</Heading>
            <Paragraph>
                <List />
                <Line>Introduction (¬¬I): From p, infer ¬¬p.</Line>
                <Line>Elimination (¬¬E): From ¬¬p, infer p.</Line>
            </Paragraph>
            <Heading>7.3 Truth Tables</Heading>
            <Paragraph>Truth tables provide a decision procedure for propositional logic:</Paragraph>
            <Paragraph>
                <List />
                <Line>To check if a formula is valid, compute its truth table; it's valid if true in all rows.</Line>
                <Line>
                    To check if an argument is valid, compute the truth table for the premises and conclusion; the argument
                    is valid if the conclusion is true in all rows where all premises are true.
                </Line>
            </Paragraph>
            <Heading>8. Applications of Propositional Logic</Heading>
            <Heading>8.1 Argument Analysis</Heading>
            <Paragraph>Propositional logic can be used to analyze the validity of arguments. For example:</Paragraph>
            <Paragraph>
                <List />
                <Line>Premise 1: p → q</Line>
                <Line>Premise 2: p</Line>
                <Line>Conclusion: q</Line>
            </Paragraph>
            <Paragraph>This is a valid argument form known as modus ponens.</Paragraph>
            <Heading>8.2 Digital Circuit Design</Heading>
            <Paragraph>Propositional logic is fundamental to digital circuit design:</Paragraph>
            <Paragraph>
                <List />
                <Line>AND gates implement conjunction</Line>
                <Line>OR gates implement disjunction</Line>
                <Line>NOT gates implement negation</Line>
                <Line>XOR gates implement exclusive or (p ⊕ q, true when exactly one of p or q is true)</Line>
            </Paragraph>
            <Heading>8.3 Boolean Algebra</Heading>
            <Paragraph>
                Boolean algebra, which is used in set theory, computer science, and digital electronics, is an algebraic
                structure that captures the behavior of propositional logic.
            </Paragraph>
            <Heading>8.4 Computer Science</Heading>
            <Paragraph>Propositional logic is essential for:</Paragraph>
            <Paragraph>
                <List />
                <Line>Program verification</Line>
                <Line>Database query languages</Line>
                <Line>Logic programming</Line>
                <Line>Algorithm design</Line>
                <Line>Artificial intelligence and automated reasoning</Line>
            </Paragraph>
            <Heading>9. Normal Forms</Heading>
            <Heading>9.1 Conjunctive Normal Form (CNF)</Heading>
            <Paragraph>
                A formula is in CNF if it is a conjunction of disjunctions of literals (a literal is a propositional
                variable or its negation). Every propositional formula can be converted to CNF.
            </Paragraph>
            <Paragraph>Example: (p ∨ q) ∧ (¬p ∨ r) is in CNF.</Paragraph>
            <Heading>9.2 Disjunctive Normal Form (DNF)</Heading>
            <Paragraph>
                A formula is in DNF if it is a disjunction of conjunctions of literals. Every propositional formula can be
                converted to DNF.
            </Paragraph>
            <Paragraph>Example: (p ∧ q) ∨ (¬p ∧ r) is in DNF.</Paragraph>
            <Heading>9.3 Conversion to Normal Forms</Heading>
            <Paragraph>To convert a formula to CNF or DNF:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Eliminate biconditionals using p ↔ q ≡ (p → q) ∧ (q → p)</Line>
                <Line>Eliminate implications using p → q ≡ ¬p ∨ q</Line>
                <Line>Push negations inward using De Morgan's laws</Line>
                <Line>Distribute conjunctions over disjunctions (for CNF) or disjunctions over conjunctions (for DNF)</Line>
            </Paragraph>
            <Heading>10. Decision Procedures</Heading>
            <Heading>10.1 Truth Tables</Heading>
            <Paragraph>
                For formulas with n distinct propositional variables, the truth table has 2^n rows. This becomes
                computationally infeasible for large n.
            </Paragraph>
            <Heading>10.2 SAT Solving</Heading>
            <Paragraph>
                The Boolean satisfiability problem (SAT) asks whether a given propositional formula is satisfiable. Modern
                SAT solvers use techniques like:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>DPLL (Davis-Putnam-Logemann-Loveland) algorithm</Line>
                <Line>Conflict-driven clause learning</Line>
                <Line>Heuristics for variable selection</Line>
            </Paragraph>
            <Heading>10.3 Resolution</Heading>
            <Paragraph>
                Resolution is a rule of inference that can be used as a complete proof procedure for propositional logic.
                The resolution rule states:
            </Paragraph>
            <Paragraph>From (p ∨ A) and (¬p ∨ B), infer (A ∨ B).</Paragraph>
            <Paragraph>
                A formula is unsatisfiable if and only if the empty clause (a contradiction) can be derived from its CNF
                representation using resolution.
            </Paragraph>
            <Heading>11. Limitations of Propositional Logic</Heading>
            <Paragraph>While powerful, propositional logic has limitations:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        No internal structure
                    </Word>: Propositions are treated as atomic, with no internal structure. We can't express statements
                    like "All men are mortal" in a way that reveals the logical relationship to "Socrates is mortal."
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        No quantification
                    </Word>: We can't express statements involving "all," "some," "none," etc., which limits the
                    expressiveness of the logic.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        No predicates
                    </Word>: We can't express properties or relations between objects.
                </Line>
            </Paragraph>
            <Paragraph>
                These limitations are addressed by first-order logic, which extends propositional logic with variables,
                predicates, and quantifiers.
            </Paragraph>
            <Heading>12. Conditional Proof and Formal Derivation</Heading>
            <Heading>12.1 Conditional Proof</Heading>
            <Paragraph>
                Conditional proof (CP) is a proof strategy in natural deduction. To prove an implication p → q:
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Assume p</Line>
                <Line>Derive q from p and other available premises or theorems</Line>
                <Line>Conclude p → q (discharging the assumption p)</Line>
            </Paragraph>
            <Paragraph>This rule is also known as conditional introduction or →-introduction.</Paragraph>
            <Heading>12.2 Formal Derivation Example</Heading>
            <Paragraph>Example: Prove (p → q) ∧ (q → r) ⊢ (p → r)</Paragraph>
            <CodeBox>
                {`1. (p → q) ∧ (q → r)    Premise
2. p → q                 Conjunction elimination (1)
3. q → r                 Conjunction elimination (1)
4. p                     Assumption (for conditional proof)
5. q                     Modus ponens (4, 2)
6. r                     Modus ponens (5, 3)
7. p → r                 Conditional proof (4-6)`}
            </CodeBox>
            <Heading>12.3 Relevance to Theorem Proving</Heading>
            <Paragraph>In the context of formal proof systems:</Paragraph>
            <Paragraph>
                <List />
                <Line>If T ⊢ A and T ⊢ B, then T ⊢ (A ∧ B) by conjunction introduction</Line>
                <Line>
                    If T ⊢ B (i.e., B is provable without any special assumptions), then T ⊢ (A → B) by conditional proof
                </Line>
            </Paragraph>
            <Paragraph>
                This last point is particularly important: if a statement B is already a theorem of theory T, then any
                implication A → B is also a theorem of T, regardless of what A is. This is because B can be derived
                independently of the assumption A.
            </Paragraph>
            <Heading>13. Propositional Logic in Mathematical Theories</Heading>
            <Heading>13.1 Role in Formal Theories</Heading>
            <Paragraph>In a formal theory T:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    If T ⊢ A (A is provable in T) and T ⊢ A → B (the implication A → B is provable in T), then T ⊢ B (B is
                    provable in T) by modus ponens.
                </Line>
                <Line>
                    If T ⊢ A and T ⊢ B, then T ⊢ A → B by conditional proof. This works because we can derive B (which we
                    already know how to prove) without actually using the assumption A.
                </Line>
            </Paragraph>
            <Heading>13.2 Connection to Gödel's Work</Heading>
            <Paragraph>
                In the context of Gödel's incompleteness theorems, understanding these principles is crucial:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    A theory T can prove that if it proves a contradiction, then it can prove any formula. This is
                    formalized as T ⊢ (Prov_T(⌜0=1⌝) → Prov_T(⌜φ⌝)) for any formula φ.
                </Line>
                <Line>
                    The provability predicate Prov_T satisfies certain conditions (the Hilbert-Bernays-Löb derivability
                    conditions) that allow T to reason about its own proofs.
                </Line>
                <Line>
                    These principles are at the heart of how Gödel constructed self-referential statements that lead to the
                    incompleteness theorems.
                </Line>
            </Paragraph>
            <Heading>14. Conclusion</Heading>
            <Paragraph>
                Propositional logic provides the foundation for formal reasoning and the development of more expressive
                logical systems. By understanding its syntax, semantics, and proof methods, we gain insights into the
                fundamental nature of logical truth and derivation that apply across mathematics, computer science, and
                philosophical logic.
            </Paragraph>
            <Paragraph>
                Though limited in expressiveness compared to first-order logic, propositional logic offers a complete and
                decidable formal system with wide-ranging applications. Its principles underlie everything from digital
                circuit design to program verification and from mathematical proof to artificial intelligence.
            </Paragraph>
        </Section>
    </Chapter>
);
