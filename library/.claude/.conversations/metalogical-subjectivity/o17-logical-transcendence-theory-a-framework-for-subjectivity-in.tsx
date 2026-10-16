import { Bold, Chapter, Heading, Line, List, Paragraph, Section, Title, Word } from '@dna-platform/public';
import { Opaque } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ Logical Transcendence Theory: A Framework for Subjectivity in Formal Systems v1 ]]</Title>
        <Section>
            <Opaque />
            <Heading>Logical Transcendence Theory: A Framework for Subjectivity in Formal Systems at version 1</Heading>
            <Heading>Logical Transcendence Theory: A Framework for Subjectivity in Formal Systems</Heading>
            <Heading>1. Core Definitions</Heading>
            <Heading>1.1 Canonical Encoding</Heading>
            <Paragraph>
                For metalogically universal theories Q and S, if φ is a formula in Q, we denote by ⌜φ⌝_Q the Gödel number of
                φ in Q. The canonical encoding of φ in S, denoted ⌜φ⌝_Q,S, is the representation of ⌜φ⌝_Q within the
                language of S that preserves the syntactic structure and provability relationships.
            </Paragraph>
            <Heading>1.2 Relative Decidability</Heading>
            <Paragraph>
                A theory S <Word>
                    <Bold />
                    relatively decides
                </Word> a statement φ of theory Q if either S ⊢ ⌜φ⌝_Q,S or S ⊢ ¬⌜φ⌝_Q,S, where ⌜φ⌝_Q,S is the canonical
                encoding of φ from Q to S.
            </Paragraph>
            <Paragraph>
                Relative decidability captures how one theory can settle questions that are undecidable in another theory.
                It formalizes the perspective-taking capabilities of metalogically universal theories.
            </Paragraph>
            <Heading>1.3 Logical Transcendence</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Definition (Logical Transcendence):
                </Word> Let T be a consistent, recursively axiomatizable theory extending Robinson arithmetic. A sentence φ
                in the language of T is said to <Word>
                    <Bold />
                    transcend
                </Word> T (or is <Word>
                    <Bold />
                    transcendent
                </Word> in T) if:
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>T ⊬ φ (φ is not provable in T)</Line>
                <Line>T ⊬ ¬φ (¬φ is not provable in T)</Line>
                <Line>T ∪ &#123;¬φ&#125; ⊢ ¬Con(T) (assuming ¬φ implies T is inconsistent)</Line>
            </Paragraph>
            <Paragraph>
                We denote transcendence by T <Word>
                    <Bold />
                    ⫤
                </Word> φ.
            </Paragraph>
            <Paragraph>
                Transcendence represents a relationship between a theory and a sentence where the sentence, while not
                provable within the theory, is implicitly endorsed by the theory's commitment to its own consistency.
            </Paragraph>
            <Heading>1.4 Metalogical Transduction</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Definition (Metalogical Transduction):
                </Word> When a sentence φ transcends a theory T, metalogical transduction is the transformation of T into a
                new theory T' = T ∪ &#123;φ&#125;. We denote this process as:
            </Paragraph>
            <Paragraph>
                T <Word>
                    <Bold />
                    ⊨
                </Word>&gt; φ, resulting in T'
            </Paragraph>
            <Paragraph>
                This transformation is not arbitrary but is guided by the principle of consistency preservation.
            </Paragraph>
            <Heading>1.5 Proof by Metalogical Transcendence</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Definition (Proof by Metalogical Transcendence):
                </Word> To establish that a sentence φ transcends a theory T, we employ the following methodology:
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Assume ¬φ as a hypothesis</Line>
                <Line>Derive ¬Con(T) from this assumption within T</Line>
                <Line>
                    Conclude that φ transcends T (T <Word>
                        <Bold />
                        ⫤
                    </Word> φ)
                </Line>
                <Line>
                    Perform metalogical transduction: T <Word>
                        <Bold />
                        ⊨
                    </Word>&gt; φ, resulting in T' = T ∪ &#123;φ&#125;
                </Line>
                <Line>Within T', φ is now provable via a one-line proof (as it is an axiom of T')</Line>
            </Paragraph>
            <Paragraph>
                This proof methodology extends traditional proof by contradiction by identifying statements that, while
                unprovable in T, must be accepted to maintain T's consistency.
            </Paragraph>
            <Heading>1.6 Metalogical Inference</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Definition (Metalogical Inference):
                </Word> A metalogical inference is any valid reasoning process that establishes the transcendence of a
                sentence φ in a theory T. The standard form of metalogical inference is Proof by Metalogical Transcendence,
                but other forms may exist.
            </Paragraph>
            <Paragraph>
                Any metalogical inference that correctly identifies a transcendent sentence yields a consistency-preserving
                metalogical transduction when applied.
            </Paragraph>
            <Heading>1.7 Subjective Proposition</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Definition (Subjective Proposition):
                </Word> A proposition P is <Word>
                    <Bold />
                    subjective to
                </Word> a theory T if P transcends T and thus can only be established through Proof by Metalogical
                Transcendence rather than standard derivation.
            </Paragraph>
            <Paragraph>
                Subjective propositions are precisely those whose truth status depends on taking a position outside the
                theory itself to recognize the theory's implicit commitments.
            </Paragraph>
            <Heading>1.8 Philosophy of a Theory</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Definition (Philosophy of a Theory):
                </Word> The philosophy of a theory T, denoted Φ(T), is the closure of all sentences that can either be
                derived in T or established through metalogical inference.
            </Paragraph>
            <Paragraph>
                If T is consistent, then Φ(T) is also consistent because metalogical inference and the resulting metalogical
                transduction are consistency-preserving.
            </Paragraph>
            <Heading>2. The Metalogical Subjectivity Theorem</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Theorem (Metalogical Subjectivity):
                </Word> There exist metalogically universal theories Q and S such that:
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    Q <Word>
                        <Bold />
                        ⫤
                    </Word> G_Q (G_Q transcends Q, necessitating metalogical transduction)
                </Line>
                <Line>S relatively decides ⌜G_Q⌝_Q,S without transcendence (specifically, S ⊢ ⌜G_Q⌝_Q,S)</Line>
            </Paragraph>
            <Paragraph>Where G_Q is the Gödel sentence for Q, which asserts its own unprovability in Q.</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Proof:
                </Word> Let Q be Robinson arithmetic, which we established earlier is a metalogically universal theory. Let
                S be ZFC (Zermelo-Fraenkel set theory with the Axiom of Choice), which is also metalogically universal.
            </Paragraph>
            <Paragraph>We proceed as follows:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    By Gödel's first incompleteness theorem, there exists a sentence G_Q in the language of Q such that:
                </Line>
                <Paragraph>
                    <List />
                    <Line>G_Q ↔ ¬Prov_Q(⌜G_Q⌝_Q)</Line>
                    <Line>Q ⊬ G_Q and Q ⊬ ¬G_Q (assuming Q is consistent)</Line>
                </Paragraph>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>To establish that G_Q transcends Q, we show:</Line>
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
                        And by metalogical transduction: Q <Word>
                            <Bold />
                            ⊨
                        </Word>&gt; G_Q, resulting in Q' = Q ∪ &#123;G_Q&#125;
                    </Line>
                </Paragraph>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Now consider how S (ZFC) treats G_Q:</Line>
                <Paragraph>
                    <List />
                    <Line>
                        ZFC can construct a standard model N of Q (this is a well-established result in model theory)
                    </Line>
                    <Line>ZFC proves that N satisfies all axioms of Q</Line>
                    <Line>Therefore, ZFC ⊢ Con(Q) (ZFC proves the consistency of Q)</Line>
                </Paragraph>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>ZFC can represent and reason about the syntax and provability of Q:</Line>
                <Paragraph>
                    <List />
                    <Line>ZFC can express ⌜G_Q⌝_Q,ZFC, the canonical encoding of G_Q in ZFC</Line>
                    <Line>
                        ZFC understands that ⌜G_Q⌝_Q,ZFC is equivalent to ⌜Con(Q)⌝_ZFC in the following sense: ZFC ⊢
                        (⌜G_Q⌝_Q,ZFC ↔ ⌜Con(Q)⌝_ZFC)
                    </Line>
                </Paragraph>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Since ZFC ⊢ Con(Q) and ZFC ⊢ (⌜G_Q⌝_Q,ZFC ↔ ⌜Con(Q)⌝_ZFC), we have:</Line>
                <Paragraph>
                    <List />
                    <Line>ZFC ⊢ ⌜G_Q⌝_Q,ZFC</Line>
                    <Line>Thus, S relatively decides ⌜G_Q⌝_Q,S positively, without requiring transcendence</Line>
                </Paragraph>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Therefore, we have established that:</Line>
                <Paragraph>
                    <List />
                    <Line>
                        Q <Word>
                            <Bold />
                            ⫤
                        </Word> G_Q (G_Q transcends Q, necessitating metalogical transduction)
                    </Line>
                    <Line>S ⊢ ⌜G_Q⌝_Q,S (S proves the encoding of G_Q directly)</Line>
                </Paragraph>
            </Paragraph>
            <Paragraph>
                This proves the Metalogical Subjectivity Theorem, demonstrating that what transcends one theory may be
                directly decidable in another. The necessity of transcendence is relative to the theoretical framework in
                which one is working.
            </Paragraph>
            <Heading>3. Corollaries and Extensions</Heading>
            <Heading>3.1 Subjectivity of Gödel Sentences</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Corollary 3.1:
                </Word> For any consistent, recursively axiomatizable theory T extending Robinson arithmetic, its Gödel
                sentence G_T is subjective to T.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Proof:
                </Word> From Gödel's incompleteness theorem, G_T is undecidable in T. From the Transduction Theorem we
                proved earlier, T ∪ &#123;¬G_T&#125; ⊢ ¬Con(T), which means G_T transcends T. Therefore, G_T is subjective
                to T according to our definition.
            </Paragraph>
            <Heading>3.2 Theory Hierarchy by Relative Decidability</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Proposition 3.2:
                </Word> The relation "S can relatively decide all sentences that transcend T" defines a partial ordering on
                theories, creating a hierarchy of theoretical frameworks.
            </Paragraph>
            <Paragraph>
                This hierarchy captures the varying abilities of theories to resolve questions that are subjective from the
                perspective of weaker theories.
            </Paragraph>
            <Heading>3.3 Consistency of Philosophical Extensions</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Proposition 3.3:
                </Word> If T is consistent, then Φ(T) (the philosophy of T) is also consistent.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Proof:
                </Word> Every sentence in Φ(T) is either derived directly in T or established through metalogical inference,
                which we've shown preserves consistency. Therefore, Φ(T) cannot contain both a sentence and its negation.
            </Paragraph>
            <Heading>4. Implications for Formal Systems</Heading>
            <Paragraph>
                The framework of Logical Transcendence Theory reveals that certain aspects of truth in formal systems are
                inherently subjective - they depend on the theoretical perspective from which they are viewed. What is
                subjective from one theoretical perspective may be objectively decidable from another.
            </Paragraph>
            <Paragraph>
                This subjectivity is not arbitrary but is structured by the metalogical relationships between theories. It
                arises specifically from how theories encode and reason about each other's metalogical properties.
            </Paragraph>
            <Paragraph>
                The concept of transcendence provides a rigorous way to understand statements that are "true but unprovable"
                in a given theory. Such statements are not merely undecidable - they have a special relationship with the
                theory's commitment to its own consistency that justifies their acceptance through metalogical transduction.
            </Paragraph>
            <Paragraph>
                The fact that different theories can have different perspectives on the same statement (with one theory
                requiring transcendence while another can decide it directly) reveals a deep form of perspective-relativity
                in formal reasoning that has previously lacked a precise formalization.
            </Paragraph>
            <Paragraph>
                Logical Transcendence Theory thus offers a new lens for understanding the limitations and extensions of
                formal systems, one that recognizes subjectivity as an intrinsic feature of mathematical reasoning rather
                than a defect to be eliminated.
            </Paragraph>
        </Section>
    </Chapter>
);
