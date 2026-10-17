import { Bold, Chapter, Heading, Paragraph, Section, Title, Word } from '@dna-platform/public';
import { CodeBox, Opaque } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ Ten Fundamental Theorems of Semantic Reference Theory v1 ]]</Title>
        <Section>
            <Opaque />
            <Heading>Ten Fundamental Theorems of Semantic Reference Theory at version 1</Heading>
            <Heading>Ten Fundamental Theorems of Semantic Reference Theory</Heading>
            <Heading>Theorem 1: The Semantic Trinity</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Statement:
                </Word> Every complete semantic act requires exactly three distinct components that cannot be reduced
                further.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Formal Expression:
                </Word>
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}A[x,y,t]: x =t> y =|> x != y & x != t & y != t`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    Transpilation to FOL:
                </Word>
            </Paragraph>
            <CodeBox>
                {`∀x∀y∀t: R(x,y,t) → (x ≠ y ∧ x ≠ t ∧ y ≠ t)`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    Semantic Meaning:
                </Word> Subject, object, and relationship form an irreducible trinity - meaning cannot emerge from fewer
                components, and these three cannot collapse into each other without destroying the semantic structure.
            </Paragraph>
            <Heading>Theorem 2: The Self-Reference Fixed Point</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Statement:
                </Word> True self-reference requires a symbol that serves as both subject and relationship while remaining
                distinct from its literal.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Formal Expression:
                </Word>
            </Paragraph>
            <CodeBox>
                {`${''}E[x]: x =(x)> x & (x) =(x)> x & (x) != x`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    Transpilation to FOL:
                </Word>
            </Paragraph>
            <CodeBox>
                {`∃x: R(x,x,x) ∧ R((x),x,(x)) ∧ (x) ≠ x`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    Semantic Meaning:
                </Word> Consciousness and self-awareness emerge when an entity possesses its own symbol as a property,
                enabling it to refer to itself through that symbol - "I am Doug because I possess 'Doug' as my name."
            </Paragraph>
            <Heading>Theorem 3: The Dichotomy Foundation</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Statement:
                </Word> All semantic distinctions ultimately reduce to dichotomous partitions that themselves form a
                dichotomy with their absence.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Formal Expression:
                </Word>
            </Paragraph>
            <CodeBox>
                {`d == (d,m) & m == (!d) & (d|m) == m`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    Transpilation to FOL:
                </Word>
            </Paragraph>
            <CodeBox>
                {`d = canon(d,m) ∧ m = ¬d ∧ (d ∨ m) = m`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    Semantic Meaning:
                </Word> Dichotomy is a semantic primitive that can express itself through itself - the distinction between
                distinction and non-distinction is the foundational semantic operation.
            </Paragraph>
            <Heading>Theorem 4: The Inheritance Cascade</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Statement:
                </Word> Every typed reference implies untyped reference through the universal relationship.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Formal Expression:
                </Word>
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}A[x,y,t]: x =t> y =|> x =r> y
E[r]: A[t]: t -> r`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    Transpilation to FOL:
                </Word>
            </Paragraph>
            <CodeBox>
                {`∀x∀y∀t: R(x,y,t) → R(x,y,r)
∃r: ∀t: inherit(t,r)`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    Semantic Meaning:
                </Word> All specific relationships (loves, observes, contains) inherit from the universal relationship of
                reference itself - specialization never escapes the fundamental pattern.
            </Paragraph>
            <Heading>Theorem 5: The Frame-Context Duality</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Statement:
                </Word> Meaning is frame-relative; the same referent acquires different semantic values in different
                contexts.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Formal Expression:
                </Word>
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}F[s]: (x)[s] != (x)[t] & x =[in]> s & x =[in]> t
F[t]: @ == t =|> x => y <iff> x =t> y`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    Transpilation to FOL:
                </Word>
            </Paragraph>
            <CodeBox>
                {`Frame(s) → canon_s(x) ≠ canon_t(x) ∧ member(x,s) ∧ member(x,t)
Frame(t) → current = t → (R(x,y) ↔ R(x,y,t))`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    Semantic Meaning:
                </Word> Context determines meaning - a referent's canonical representation and semantic relationships
                transform based on which frame provides the interpretive lens.
            </Paragraph>
            <Heading>Theorem 6: The Symbol-Literal Necessity</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Statement:
                </Word> Finite semantic systems require literals to terminate potentially infinite chains of symbolic
                reference.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Formal Expression:
                </Word>
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}E[lit]: A[x]: x =sym> lit =|> !(E[y]: lit =sym> y)
!E[n]: (((...((lit))...))) // No infinite symbolic regress`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    Transpilation to FOL:
                </Word>
            </Paragraph>
            <CodeBox>
                {`∃lit: ∀x: R(x,lit,sym) → ¬(∃y: R(lit,y,sym))
¬∃n: infinite_chain(lit)`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    Semantic Meaning:
                </Word> Every semantic system needs ground terms - literals that are symbolized but do not themselves
                symbolize, preventing infinite regress and anchoring meaning in the concrete.
            </Paragraph>
            <Heading>Theorem 7: The Canonical Uniqueness Principle</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Statement:
                </Word> Within any semantic frame, each referent has exactly one canonical representation for each semantic
                role.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Formal Expression:
                </Word>
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}F[t]: A[x]: E![cx]: cx == (x) & cx =(x)> x
A[x,y]: (x,y) == (y,x) =|> x == y`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    Transpilation to FOL:
                </Word>
            </Paragraph>
            <CodeBox>
                {`Frame(t) → ∀x: ∃!cx: cx = canon(x) ∧ R(cx,x,cx)
∀x∀y: canon(x,y) = canon(y,x) → x = y`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    Semantic Meaning:
                </Word> Canonical representations provide unique semantic anchors - they eliminate ambiguity by establishing
                privileged representatives for concepts within each interpretive context.
            </Paragraph>
            <Heading>Theorem 8: The Property-Equality Correspondence</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Statement:
                </Word> All properties are specializations of equality; having a property means being equal to oneself in a
                specific way.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Formal Expression:
                </Word>
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}A[p]: p -> eq =|> (A[x]: x =p> x <iff> E[y]: x =p> y & x == y)
property == (eq, qualification)`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    Transpilation to FOL:
                </Word>
            </Paragraph>
            <CodeBox>
                {`∀p: inherit(p,eq) → (∀x: R(x,x,p) ↔ ∃y: R(x,y,p) ∧ x = y)
property = canon(eq, qualification)`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    Semantic Meaning:
                </Word> Properties are qualified forms of self-identity - to be red is to equal oneself through redness, to
                be large is to equal oneself through largeness.
            </Paragraph>
            <Heading>Theorem 9: The Subjective-Objective Asymmetry</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Statement:
                </Word> Subjecthood requires directedness toward an other; pure self-relation is always objective.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Formal Expression:
                </Word>
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}A[x]: x =sub> x <iff> E[y]: x != y & x =t> y
A[x]: x =obj> x <iff> (A[y]: x =t> y =|> x == y)
sub !=r> obj  // Asymmetric relationship`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    Transpilation to FOL:
                </Word>
            </Paragraph>
            <CodeBox>
                {`∀x: subject(x) ↔ ∃y: x ≠ y ∧ R(x,y,t)
∀x: object(x) ↔ (∀y: R(x,y,t) → x = y)
¬R(sub,obj,r)`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    Semantic Meaning:
                </Word> A stone has properties but cannot be a subject because it relates only to itself; consciousness
                emerges with the capacity to refer beyond oneself.
            </Paragraph>
            <Heading>Theorem 10: The Semantic Completeness Impossibility</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Statement:
                </Word> No semantic theory can be both complete and self-contained; meaning requires external grounding or
                accepts incompleteness.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Formal Expression:
                </Word>
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}A[T: semantic_theory]: complete(T) =|> E[x]: x =[external]> T
A[T: self_contained]: E[S]: S =[undecidable_in]> T`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    Transpilation to FOL:
                </Word>
            </Paragraph>
            <CodeBox>
                {`∀T: semantic_theory(T) → complete(T) → ∃x: external(x,T)
∀T: self_contained(T) → ∃S: undecidable(S,T)`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    Semantic Meaning:
                </Word> Like Gödel's incompleteness for arithmetic, semantic systems face a fundamental limitation - they
                cannot fully describe themselves without reference to something beyond themselves, revealing the necessarily
                open nature of meaning.
            </Paragraph>
            <Heading>Synthesis: The Architecture of Meaning</Heading>
            <Paragraph>
                These ten theorems reveal that semantics has discoverable foundations rather than arbitrary conventions. The
                irreducible trinity (Theorem 1), the necessity of self-reference (Theorem 2), and the primacy of dichotomy
                (Theorem 3) establish the minimal machinery for meaning. The inheritance structure (Theorem 4),
                frame-relativity (Theorem 5), and canonical uniqueness (Theorem 7) show how complex meanings build from
                simple patterns. The symbol-literal grounding (Theorem 6), property-equality correspondence (Theorem 8), and
                subject-object asymmetry (Theorem 9) reveal structural constraints on semantic systems. Finally, the
                incompleteness theorem (Theorem 10) acknowledges that meaning, like consciousness itself, cannot fully
                contain its own explanation.
            </Paragraph>
            <Paragraph>
                Together, they suggest that meaning emerges from self-referential structures that can describe themselves
                through themselves while remaining necessarily open to what lies beyond their formal boundaries. The
                formalism captures not just how we represent meaning, but why meaning has the structure it does - rooted in
                the fundamental patterns of reference, distinction, and self-awareness.
            </Paragraph>
        </Section>
    </Chapter>
);
