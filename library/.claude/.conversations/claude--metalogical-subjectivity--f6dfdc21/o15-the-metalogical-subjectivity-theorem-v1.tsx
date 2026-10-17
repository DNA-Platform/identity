import { Bold, Chapter, Heading, Line, List, Paragraph, Section, Title, Word } from '@dna-platform/public';
import { Opaque } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ The Metalogical Subjectivity Theorem v1 ]]</Title>
        <Section>
            <Opaque />
            <Heading>The Metalogical Subjectivity Theorem at version 1</Heading>
            <Heading>The Metalogical Subjectivity Theorem</Heading>
            <Heading>1. Preliminary Definitions</Heading>
            <Heading>1.1 Canonical Encoding</Heading>
            <Paragraph>
                For metalogically universal theories Q and S, if φ is a formula in Q, we denote by ⌜φ⌝_Q the Gödel number of
                φ in Q. The canonical encoding of φ in S, denoted ⌜φ⌝_Q,S, is the representation of ⌜φ⌝_Q within the
                language of S that preserves the syntactic structure and provability relationships.
            </Paragraph>
            <Heading>1.2 Metalogical Transduction</Heading>
            <Paragraph>
                Let T be a consistent, recursively axiomatizable theory extending Robinson arithmetic, and let φ be a
                sentence in the language of T where T ⊬ φ and T ⊬ ¬φ. We say φ <Word>
                    <Bold />
                    transcends
                </Word> T, denoted T <Word>
                    <Bold />
                    ⊨
                </Word>&gt; φ, if T ∪ &#123;¬φ&#125; ⊢ ¬Con(T).
            </Paragraph>
            <Paragraph>
                When a sentence φ transcends T, the appropriate action is to <Word>
                    <Bold />
                    transform
                </Word> T into a new theory T' = T ∪ &#123;φ&#125;.
            </Paragraph>
            <Heading>1.3 Proof by Metalogical Transduction</Heading>
            <Paragraph>
                To establish that T <Word>
                    <Bold />
                    ⊨
                </Word>&gt; φ, we use the following proof method:
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Assume ¬φ</Line>
                <Line>Derive ¬Con(T)</Line>
                <Line>Conclude that φ transcends T</Line>
                <Line>Transform T into T' = T ∪ &#123;φ&#125;</Line>
                <Line>In T', φ is provable with a single-line proof (since it is an axiom of T')</Line>
            </Paragraph>
            <Heading>1.4 Relative Decidability</Heading>
            <Paragraph>
                A theory S <Word>
                    <Bold />
                    relatively decides
                </Word> a statement φ of theory Q if either S ⊢ ⌜φ⌝_Q,S or S ⊢ ¬⌜φ⌝_Q,S, where ⌜φ⌝_Q,S is the canonical
                encoding of φ from Q to S.
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
                        ⊨
                    </Word>&gt; G_Q (Q must transduce its Gödel sentence)
                </Line>
                <Line>S relatively decides ⌜G_Q⌝_Q,S without transduction (specifically, S ⊢ ⌜G_Q⌝_Q,S)</Line>
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
                <Line>
                    By the Transduction Theorem we established earlier, Q <Word>
                        <Bold />
                        ⊨
                    </Word>&gt; G_Q, meaning:
                </Line>
                <Paragraph>
                    <List />
                    <Line>Q ∪ &#123;¬G_Q&#125; ⊢ ¬Con(Q)</Line>
                    <Line>Therefore, G_Q transcends Q</Line>
                </Paragraph>
                <Line>Now consider how S (ZFC) treats G_Q:</Line>
                <Paragraph>
                    <List />
                    <Line>
                        ZFC can construct a standard model N of Q (this is a well-established result in model theory)
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
                    <Line>Thus, S relatively decides ⌜G_Q⌝_Q,S positively, without requiring transduction</Line>
                </Paragraph>
                <Line>Therefore, we have established that:</Line>
                <Paragraph>
                    <List />
                    <Line>
                        Q <Word>
                            <Bold />
                            ⊨
                        </Word>&gt; G_Q (Q must transduce G_Q)
                    </Line>
                    <Line>S ⊢ ⌜G_Q⌝_Q,S (S proves the encoding of G_Q directly)</Line>
                </Paragraph>
            </Paragraph>
            <Paragraph>
                This proves the Metalogical Subjectivity Theorem, demonstrating that what requires transduction in one
                theory may be directly decidable in another theory. The necessity of transduction is relative to the
                theoretical framework in which one is working.
            </Paragraph>
            <Heading>3. Philosophical Implications</Heading>
            <Paragraph>
                The Metalogical Subjectivity Theorem reveals that certain aspects of metalogical reasoning are
                theory-relative. The undecidable statements that require transduction in one formal system may be decidable
                in another, more powerful system.
            </Paragraph>
            <Paragraph>
                This subjectivity arises specifically from how theories encode and reason about each other's metalogical
                properties. While the Gödel sentence G_Q is undecidable within Q itself, requiring transduction to maintain
                consistency, the sentence becomes decidable when considered from the perspective of a stronger theory like
                ZFC.
            </Paragraph>
            <Paragraph>
                This phenomenon illuminates the broader philosophical question of mathematical truth and its relationship to
                particular formal systems. What is "true but unprovable" in one context may be provably true in another,
                suggesting that mathematical truth transcends any particular formal system while still being expressible
                within the landscape of formal systems as a whole.
            </Paragraph>
            <Paragraph>
                The Metalogical Subjectivity Theorem thus demonstrates that self-reference creates a kind of
                perspective-relativity in formal systems. What is "correct" to transduce is not an objective fact about the
                mathematical universe but depends on the theoretical framework within which one is operating.
            </Paragraph>
        </Section>
    </Chapter>
);
