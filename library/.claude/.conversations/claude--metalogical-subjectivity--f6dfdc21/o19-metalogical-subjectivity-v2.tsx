import { Bold, Chapter, Heading, Line, List, Paragraph, Section, Title, Word } from '@dna-platform/public';
import { Opaque } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ Metalogical Subjectivity v2 ]]</Title>
        <Section>
            <Opaque />
            <Heading>Metalogical Subjectivity at version 2</Heading>
            <Heading>Metalogical Subjectivity</Heading>
            <Heading>1. Fundamental Concepts</Heading>
            <Heading>1.1 Logical Transcendence</Heading>
            <Paragraph>
                A sentence can have a special relationship with a theory where, though unprovable within the theory itself,
                it is implicitly endorsed by the theory's commitment to its own consistency. This relationship, which we
                call transcendence, represents a form of truth that goes beyond standard provability.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Definition 1.1
                </Word> Logical Transcendence. Let T be a consistent, recursively axiomatizable theory extending Robinson
                arithmetic. A sentence G in the language of T <Word>
                    <Bold />
                    transcends
                </Word> T if:
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>T ⊬ G (G is not provable in T)</Line>
                <Line>T ⊬ ¬G (¬G is not provable in T)</Line>
                <Line>T ∪ &#123;¬G&#125; ⊢ ¬Con(T) (assuming ¬G implies T is inconsistent)</Line>
            </Paragraph>
            <Paragraph>
                We write T <Word>
                    <Bold />
                    ⫤
                </Word> G to denote that G transcends T.
            </Paragraph>
            <Paragraph>
                Logical transcendence captures the special status of sentences that, while undecidable within a theory, have
                a privileged relationship with the theory's consistency. Such sentences reveal implicit commitments of the
                theory that cannot be formalized within the theory itself.
            </Paragraph>
            <Heading>1.2 Metalogical Transduction</Heading>
            <Paragraph>
                When a sentence transcends a theory, it demands a transformation of the theory to incorporate this higher
                truth. This process, which we call metalogical transduction, represents a principled evolution of the theory
                guided by its implicit commitment to consistency.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Definition 1.2
                </Word> Metalogical Transduction. When a sentence G transcends a theory T, metalogical transduction is the
                transformation of T into a new theory T' = T ∪ &#123;G&#125;. We denote this process as:
            </Paragraph>
            <Paragraph>
                T <Word>
                    <Bold />
                    ⊨
                </Word>&gt; G, resulting in T'
            </Paragraph>
            <Paragraph>
                This transformation is not arbitrary but is dictated by the theory's commitment to consistency. When T
                <Word>
                    <Bold />
                    ⫤
                </Word> G, the appropriate response is to perform metalogical transduction, yielding T <Word>
                    <Bold />
                    ⊨
                </Word>&gt; G.
            </Paragraph>
            <Heading>1.3 Proof by Transcendence</Heading>
            <Paragraph>
                To establish transcendence and justify metalogical transduction, we employ a proof methodology that extends
                traditional proof by contradiction. This method, which we call Proof by Transcendence, reveals the implicit
                commitments of a theory that go beyond what it can explicitly prove.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Definition 1.3
                </Word> Proof by Transcendence. To establish that a sentence G transcends a theory T, we employ the
                following methodology:
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Assume ¬G as a hypothesis</Line>
                <Line>Derive ¬Con(T) from this assumption within T</Line>
                <Line>
                    Conclude that G transcends T (T <Word>
                        <Bold />
                        ⫤
                    </Word> G)
                </Line>
                <Line>
                    Perform metalogical transduction: T <Word>
                        <Bold />
                        ⊨
                    </Word>&gt; G, resulting in T' = T ∪ &#123;G&#125;
                </Line>
                <Line>Within T', G is now provable via a one-line proof (as it is an axiom of T')</Line>
            </Paragraph>
            <Paragraph>
                Proof by Transcendence allows us to establish truths that, while unprovable within a theory's original
                formulation, are necessary to maintain the theory's consistency. It represents a method of reasoning that
                transcends the limitations of standard derivation.
            </Paragraph>
            <Heading>1.4 Metalogical Inference</Heading>
            <Paragraph>
                Beyond specific instances of Proof by Transcendence, we can define a broader concept of valid reasoning that
                establishes transcendent truths. This concept, which we call metalogical inference, encompasses any
                legitimate method for identifying sentences that transcend a theory.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Definition 1.4
                </Word> Metalogical Inference. A metalogical inference is any valid reasoning process that establishes the
                transcendence of a sentence G in a theory T. The standard form of metalogical inference is Proof by
                Transcendence, but other forms may exist.
            </Paragraph>
            <Paragraph>
                Any metalogical inference that correctly identifies a transcendent sentence yields a consistency-preserving
                metalogical transduction when applied.
            </Paragraph>
            <Heading>1.5 Metalogical Subjectivity</Heading>
            <Paragraph>
                The central concept of our framework is metalogical subjectivity—the idea that the truth status of certain
                sentences depends fundamentally on the theoretical perspective from which they are viewed. This subjectivity
                is not arbitrary but is structured by the metalogical relationships between theories.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Definition 1.5
                </Word> Metalogical Subjectivity. A sentence G exhibits metalogical subjectivity if there exist theories T
                and S such that:
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>G transcends T (requiring metalogical transduction)</Line>
                <Line>S can directly decide the truth value of G (through standard derivation)</Line>
            </Paragraph>
            <Paragraph>
                Metalogical subjectivity formalizes the perspective-relativity of certain mathematical truths. It shows that
                what requires transcendence from one theoretical perspective may be directly decidable from another.
            </Paragraph>
            <Heading>2. The Metalogical Subjectivity Theorem</Heading>
            <Paragraph>
                We now establish our central result: the existence of sentences that exhibit metalogical subjectivity,
                demonstrating that certain aspects of mathematical truth are inherently perspective-dependent.
            </Paragraph>
            <Paragraph>
                To state this theorem precisely, we first need to define how one theory can decide statements formulated in
                another theory:
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Definition 2.1
                </Word> Relative Decidability. A theory S <Word>
                    <Bold />
                    relatively decides
                </Word> a statement G of theory Q if either S ⊢ ⌜G⌝_Q,S or S ⊢ ¬⌜G⌝_Q,S, where ⌜G⌝_Q,S is the canonical
                encoding of G from Q to S.
            </Paragraph>
            <Paragraph>
                Here, the canonical encoding ⌜G⌝_Q,S represents G formulated in the language of S in a way that preserves
                its meaning and structure.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Theorem 2.2
                </Word> Metalogical Subjectivity Theorem. There exist metalogically universal theories Q and S, and a
                sentence G_Q, such that:
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    G_Q transcends Q (Q <Word>
                        <Bold />
                        ⫤
                    </Word> G_Q)
                </Line>
                <Line>S directly proves G_Q as represented in S (S ⊢ ⌜G_Q⌝_Q,S)</Line>
            </Paragraph>
            <Paragraph>Where G_Q is the Gödel sentence for Q.</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Proof:
                </Word> Let Q be Robinson arithmetic, which is metalogically universal (as established by Tarski, Mostowski,
                and Robinson, 1953). Let S be ZFC (Zermelo-Fraenkel set theory with the Axiom of Choice), which is also
                metalogically universal.
            </Paragraph>
            <Paragraph>We proceed as follows:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    By Gödel's first incompleteness theorem (Gödel, 1931), there exists a sentence G_Q in the language of Q
                    such that:
                </Line>
                <Paragraph>
                    <List />
                    <Line>G_Q ↔ ¬Prov_Q(⌜G_Q⌝_Q)</Line>
                    <Line>Q ⊬ G_Q and Q ⊬ ¬G_Q (assuming Q is consistent)</Line>
                </Paragraph>
                <Line>To establish that G_Q transcends Q, we use Proof by Transcendence:</Line>
                <Paragraph>
                    <List />
                    <Line>Assume ¬G_Q</Line>
                    <Line>By the definition of G_Q, this implies Prov_Q(⌜G_Q⌝_Q)</Line>
                    <Line>But if Q proves G_Q and also proves ¬G_Q (our assumption), then Q is inconsistent</Line>
                    <Line>Thus, Q ∪ &#123;¬G_Q&#125; ⊢ ¬Con(Q)</Line>
                    <Line>
                        Therefore, G_Q transcends Q (Q <Word>
                            <Bold />
                            ⫤
                        </Word> G_Q)
                    </Line>
                    <Line>
                        This justifies metalogical transduction: Q <Word>
                            <Bold />
                            ⊨
                        </Word>&gt; G_Q, resulting in Q' = Q ∪ &#123;G_Q&#125;
                    </Line>
                </Paragraph>
                <Line>Now consider how S (ZFC) treats G_Q:</Line>
                <Paragraph>
                    <List />
                    <Line>
                        ZFC can construct a standard model N of Q (this is a well-established result in model theory, see
                        Kunen, 1980)
                    </Line>
                    <Line>ZFC proves that N satisfies all axioms of Q</Line>
                    <Line>Therefore, ZFC ⊢ Con(Q) (ZFC proves the consistency of Q)</Line>
                </Paragraph>
                <Line>ZFC can represent and reason about the syntax and provability of Q:</Line>
                <Paragraph>
                    <List />
                    <Line>ZFC can express ⌜G_Q⌝_Q,ZFC, the canonical encoding of G_Q in ZFC</Line>
                    <Line>
                        ZFC understands that ⌜G_Q⌝_Q,ZFC is equivalent to ⌜Con(Q)⌝_ZFC in the following sense: ZFC ⊢
                        (⌜G_Q⌝_Q,ZFC ↔ ⌜Con(Q)⌝_ZFC)
                    </Line>
                </Paragraph>
                <Line>Since ZFC ⊢ Con(Q) and ZFC ⊢ (⌜G_Q⌝_Q,ZFC ↔ ⌜Con(Q)⌝_ZFC), we have:</Line>
                <Paragraph>
                    <List />
                    <Line>ZFC ⊢ ⌜G_Q⌝_Q,ZFC</Line>
                    <Line>Thus, S relatively decides G_Q positively, without requiring transcendence</Line>
                </Paragraph>
                <Line>Therefore, we have established that:</Line>
                <Paragraph>
                    <List />
                    <Line>
                        G_Q transcends Q (Q <Word>
                            <Bold />
                            ⫤
                        </Word> G_Q), requiring metalogical transduction
                    </Line>
                    <Line>S directly proves ⌜G_Q⌝_Q,S (through standard derivation)</Line>
                </Paragraph>
            </Paragraph>
            <Paragraph>
                This proves the Metalogical Subjectivity Theorem, demonstrating that the truth status of G_Q is
                perspective-dependent: it requires transcendence from the perspective of Q but is directly decidable from
                the perspective of S. □
            </Paragraph>
            <Heading>3. Implications and Extensions</Heading>
            <Heading>3.1 Subjective Propositions</Heading>
            <Paragraph>
                The Metalogical Subjectivity Theorem leads naturally to the concept of subjective propositions—statements
                whose truth status depends fundamentally on theoretical perspective.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Definition 3.1
                </Word> Subjective Proposition. A proposition P is <Word>
                    <Bold />
                    subjective to
                </Word> a theory T if P transcends T and thus can only be established through Proof by Transcendence rather
                than standard derivation.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Corollary 3.2:
                </Word> For any consistent, recursively axiomatizable theory T extending Robinson arithmetic, its Gödel
                sentence G_T is subjective to T.
            </Paragraph>
            <Paragraph>
                This corollary establishes that subjectivity is not a rare or pathological phenomenon but is an intrinsic
                feature of any sufficiently expressive formal system.
            </Paragraph>
            <Heading>3.2 Theory Hierarchy</Heading>
            <Paragraph>
                The Metalogical Subjectivity Theorem reveals a natural hierarchy of theories based on their ability to
                resolve questions that transcend weaker theories.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Proposition 3.3:
                </Word> The relation "S can relatively decide all sentences that transcend T" defines a partial ordering on
                theories, creating a hierarchy of theoretical frameworks.
            </Paragraph>
            <Paragraph>
                This hierarchy captures the varying abilities of theories to resolve questions that are subjective from the
                perspective of weaker theories. It suggests a structured landscape of theoretical perspectives, each with
                different capacities for resolving metalogical questions.
            </Paragraph>
            <Heading>4. Conclusion</Heading>
            <Paragraph>
                The Metalogical Subjectivity Theorem establishes that certain aspects of mathematical truth are inherently
                perspective-dependent. What requires transcendence from one theoretical perspective may be directly
                decidable from another. This subjectivity is not arbitrary but is structured by the metalogical
                relationships between theories.
            </Paragraph>
            <Paragraph>
                Our formalization of subjectivity within mathematical logic represents a significant advance in
                understanding the nature of mathematical truth. We have shown that subjectivity is not merely a
                philosophical concern but a formal, mathematical property that can be precisely defined and rigorously
                analyzed. The concept of metalogical subjectivity provides a framework for understanding how truth can be
                relative to theoretical perspective without sacrificing rigor or precision.
            </Paragraph>
            <Paragraph>
                The framework of Logical Transcendence, Metalogical Transduction, and Proof by Transcendence offers a
                rigorous way to work with this subjectivity, showing how theories can evolve in principled ways to
                incorporate transcendent truths. These concepts reveal that mathematics is not a single, monolithic
                structure but a landscape of perspectives, each with different capacities for resolving metalogical
                questions.
            </Paragraph>
            <Paragraph>
                By capturing subjectivity in rigorous form, we open new avenues for exploring how formal systems relate to
                one another and how mathematical knowledge evolves through the recognition and incorporation of transcendent
                truths. This framework provides a precise language for discussing phenomena that have traditionally been
                considered beyond the scope of formal mathematics, bridging the gap between formal systems and the
                subjective aspects of mathematical practice.
            </Paragraph>
            <Heading>References</Heading>
            <Paragraph>
                <List ordered />
                <Line>
                    Gödel, K. (1931). Über formal unentscheidbare Sätze der Principia Mathematica und verwandter Systeme I.
                    Monatshefte für Mathematik und Physik, 38, 173-198.
                </Line>
                <Line>Kunen, K. (1980). Set Theory: An Introduction to Independence Proofs. North-Holland.</Line>
                <Line>
                    Löb, M. H. (1955). Solution of a problem of Leon Henkin. Journal of Symbolic Logic, 20(2), 115-118.
                </Line>
                <Line>
                    Raatikainen, P. (2005). On the philosophical relevance of Gödel's incompleteness theorems. Revue
                    Internationale de Philosophie, 59(4), 513-534.
                </Line>
                <Line>
                    Tarski, A., Mostowski, A., &amp; Robinson, R. M. (1953). Undecidable Theories. Amsterdam: North-Holland.
                </Line>
            </Paragraph>
        </Section>
    </Chapter>
);
