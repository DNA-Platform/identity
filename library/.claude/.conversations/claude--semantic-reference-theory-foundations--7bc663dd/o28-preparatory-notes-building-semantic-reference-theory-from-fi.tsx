import { Chapter, Heading, Paragraph, Section, Title } from '@dna-platform/public';
import { Opaque } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ Preparatory Notes: Building Semantic Reference Theory from First Principles v1 ]]</Title>
        <Section>
            <Opaque />
            <Heading>Preparatory Notes: Building Semantic Reference Theory from First Principles at version 1</Heading>
            <Heading>Preparatory Notes: Building Semantic Reference Theory from First Principles</Heading>
            <Heading>1. The Nature of First-Order Theories</Heading>
            <Paragraph>
                A first-order theory consists of a domain of discourse, a set of constants naming elements in that domain, a
                set of relations among those elements, and axioms constraining how these relations behave. In classical
                first-order logic, we typically begin with logical symbols (∧, ∨, ¬, →, ∀, ∃), variables, and then add
                non-logical symbols specific to our theory. The semantic reference theory under construction here takes the
                domain to be "referents"—things that can be referred to—and introduces a single primitive ternary relation
                R(x,y,t), interpreted as "x refers to y through t" and notationally expressed as x =t&gt; y. This choice of
                primitive is remarkably minimal compared to theories like ZFC set theory which begins with membership (∈) or
                Peano arithmetic which requires successor, addition, and multiplication.
            </Paragraph>
            <Heading>2. The Methodological Innovation</Heading>
            <Paragraph>
                Traditional theory construction follows a pattern: specify axioms, derive theorems, then interpret the
                results semantically. The approach demonstrated here inverts this process entirely. Instead of beginning
                with formal axioms and discovering their semantic consequences, we begin with semantic necessities and
                discover what formal structure they require. This is visible in how the five structural cases (s != r != o
                != s, s == r != o != s, etc.) are analyzed not as formal possibilities but as semantic situations: what does
                it mean for the subject to BE the relationship? What referents must exist to exemplify this pattern? The
                formal structure emerges from semantic requirements rather than the reverse.
            </Paragraph>
            <Heading>3. The Cyclical Notation and Its Significance</Heading>
            <Paragraph>
                The notation s != r != o != s deserves careful attention. By cycling back to check inequality with s at the
                end, this notation captures the complete triangular relationship among three variables in a linear string.
                This isn't merely notational convenience—it reflects the self-referential nature of the theory itself. When
                we write s == r != o != s, we're simultaneously asserting that s equals r, r does not equal o, o does not
                equal s (cycling back), and implicitly that s does not equal o (by transitivity of equality). This compact
                notation encodes all three binary relationships among the three variables, ensuring exhaustive coverage of
                the structural space.
            </Paragraph>
            <Heading>4. The Five Cases as Complete Partition</Heading>
            <Paragraph>
                The five cases form a complete partition of the possible equality relationships among three variables. To
                see this formally: there are three possible equalities to check (s==r, r==o, o==s), giving 2³ = 8 possible
                configurations. However, equality is transitive, so if s==r and r==o, then s==o must hold. This constraint
                reduces the valid configurations to exactly five: all distinct (no equalities), one equality (three ways:
                s==r, r==o, or o==s), two equalities (which by transitivity implies all three are equal). The cyclical
                notation elegantly captures these five cases as: s != r != o != s (none equal), s == r != o != s (s==r
                only), s != r == o != s (r==o only), s != r != o == s (o==s only), and s == r == o == s (all equal).
            </Paragraph>
            <Heading>5. The Most Specific Relationship Principle</Heading>
            <Paragraph>
                Central to the construction is the notion of "most specific relationship." Given x =t₁&gt; y and x =t₂&gt; y
                for distinct relationship types t₁ and t₂, the most specific relationship (x,y) is the unique m such that x
                =m&gt; y and for any t where x =t&gt; y, either m == t or m inherits from t (notationally: m -&gt; t), where
                inheritance for relationship types is defined as m =rel&gt; t. This principle ensures that among all ways x
                can relate to y, one is foundational. When we assert (sym,lit) == sym, we're claiming that sym is not just A
                relationship between symbols and literals, but THE most specific relationship—symbolization itself.
            </Paragraph>
            <Heading>6. Case 1: The Archetypal Trinity</Heading>
            <Paragraph>
                In the first case, s != r != o != s, all three variables are distinct. The model introduces sub =rel&gt;
                obj, establishing subject, relationship, and object as three distinct referents. From this, we can derive
                that (sub,obj) == rel, meaning rel is the most specific relationship between sub and obj. This isn't
                arbitrary—it establishes rel as the archetype of relationships, the fundamental pattern from which all other
                relationships inherit. When we later find that sym =rel&gt; rel (symbols are a type of relationship), we're
                saying sym inherits from this archetypal pattern.
            </Paragraph>
            <Heading>7. Case 2: Self-Representing Relationships</Heading>
            <Paragraph>
                The second case, s == r != o != s, presents a remarkable structure: the subject IS the relationship through
                which it relates to the object. The model captures this with sym =sym&gt; lit, where symbols symbolize
                literals through the relationship of symbolization itself. This means sym serves dual roles—it's both the
                subject doing the symbolizing and the relationship type "symbolizes." From this, we can derive that sym must
                inherit from rel (sym =rel&gt; rel) because it's being used as a relationship type, and that (sym,lit) ==
                sym, confirming that symbolization is the most specific relationship between symbols and literals.
            </Paragraph>
            <Heading>8. Case 3: Self-Reference Through External Relationship</Heading>
            <Paragraph>
                In s != r != o == s, the subject and object are identical but the relationship remains external. The model
                uses ref =eq&gt; ref, where a referent equals itself through the equality relationship. This captures a
                fundamental pattern: things can relate to themselves through external relationships. The derivation
                (ref,ref) == eq establishes equality as the most specific form of self-reference. Note that while ref serves
                as both subject and object, eq remains distinct as the mediating relationship, preventing the complete
                collapse into self-identity seen in Case 5.
            </Paragraph>
            <Heading>9. Case 4: Relationships as Objects</Heading>
            <Paragraph>
                The fourth case, s != r == o != s, reveals that relationships themselves can be objects of reference. The
                model presents sym =rep&gt; rep, where symbols relate to representations, but representation serves as both
                the relationship type and the object. This captures how symbols are "part of" or "contained in"
                representations. The dual nature of rep—being both a relationship type and an object—shows that the type
                hierarchy isn't rigid. We can derive rep =rel&gt; rel (representations are relationships) and rep =obj&gt;
                obj (representations are objects), demonstrating multiple inheritance in the semantic structure.
            </Paragraph>
            <Heading>10. Case 5: Complete Self-Reference</Heading>
            <Paragraph>
                The final case, s == r == o == s, represents pure self-reference where an entity relates to itself through
                itself. The paradigmatic example is eq =eq&gt; eq: equality equals itself through equality. This is semantic
                bedrock—a relationship so fundamental that it provides its own ground. Similarly, rel =rel&gt; rel
                establishes relationships as self-grounding. These aren't mere formal curiosities but semantic necessities:
                for equality to be universal (∀x: x =eq&gt; x), equality itself must equal itself. The self-reference is
                constitutive, not paradoxical.
            </Paragraph>
            <Heading>11. Types versus Instances</Heading>
            <Paragraph>
                A crucial distinction emerges between types and instances. When we write sub =rel&gt; obj, we're not
                describing a particular subject relating to a particular object, but establishing sub as the TYPE of
                subjects and obj as the TYPE of objects. This explains why sub =sub&gt; sub (subject has subjecthood
                property) isn't automatically derivable from the model. Just as the type "Number" in programming doesn't
                itself have numeric operations like addition or multiplication, the type sub doesn't necessarily have the
                properties of subject instances. This type/instance distinction is fundamental to understanding why certain
                seemingly obvious relationships require additional axiomatization or semantic justification.
            </Paragraph>
            <Heading>12. The Property Pattern</Heading>
            <Paragraph>
                Properties emerge as self-referential relationships: x =p&gt; x indicates that x has property p. When we see
                sub =sub&gt; sub, this means the type sub has the property of subjecthood—it relates to itself through the
                subjecthood relationship. But should types have their own properties? If sub is the canonical symbol for rel
                (that is, (rel) == sub), then sub =sub&gt; rel would mean subjecthood represents relationships, and sub
                =sub&gt; sub would follow from the general pattern of symbolic self-reference. The semantic question
                becomes: is being a subject fundamentally about being in a relationship?
            </Paragraph>
            <Heading>13. Inheritance Without Recursion</Heading>
            <Paragraph>
                The theory defines inheritance for relationship types through reference chains: s -&gt; t means s =rel&gt; t
                or s == t. This avoids recursive definition while achieving transitivity. If sym =rel&gt; rel, then sym
                inherits from rel, meaning symbols are a type of relationship. If we later introduce crimson =rel&gt; red
                and red =rel&gt; color, transitivity would give us crimson =rel&gt; color through the axiom
                ∀&#91;x,y,z&#93;: x =rel&gt; y &amp; y =rel&gt; z ⟹ x =rel&gt; z. But this transitivity must be
                axiomatized—it doesn't follow automatically from the notation.
            </Paragraph>
            <Heading>14. The Eight-Referent Model</Heading>
            <Paragraph>
                From the five cases, exactly eight referents emerge: eq (equality), ref (referent), sub (subject), rel
                (relationship), obj (object), sym (symbol), rep (representation), and lit (literal). This isn't
                arbitrary—each case forces certain referents to exist. Case 1 requires sub, rel, obj for the archetypal
                trinity. Case 2 needs sym and lit for symbolization. Case 3 needs ref and reuses eq. Case 4 reuses sym and
                introduces rep. Case 5 is satisfied by eq and rel. The economy is remarkable: eight referents suffice to
                exemplify all five structural patterns.
            </Paragraph>
            <Heading>15. Sparse Relationships and Semantic Necessity</Heading>
            <Paragraph>
                Not every pair among the eight referents has a defined relationship beyond equality. For instance, there's
                no specified relationship between lit and sub, or between obj and sym. This sparsity isn't a deficiency but
                reflects semantic reality: not everything meaningfully relates to everything else. The model includes only
                relationships that are semantically necessary. When we don't specify lit =?&gt; sub, we're acknowledging
                that literals and subjecthood don't have a direct semantic relationship that needs formal capture.
            </Paragraph>
            <Heading>16. The Symbol-Type Correspondence Hypothesis</Heading>
            <Paragraph>
                A key theoretical question emerges: is sub actually (rel), the canonical symbol for relationships? If so,
                several patterns align: sub =sub&gt; rel would mean subjecthood represents relationships through itself,
                capturing the intuition that being a subject IS being in a relationship. This would explain why sub =sub&gt;
                sub might hold—if sub is a symbol, and symbols generally self-refer (sym =sym&gt; sym), then sub would
                self-refer. This hypothesis connects the type structure to the symbolic structure, suggesting they might be
                two views of the same semantic reality.
            </Paragraph>
            <Heading>17. Formal Derivation Example</Heading>
            <Paragraph>
                Let's formally derive that sym must inherit from rel. Given: sym =sym&gt; lit (from Case 2). Since sym
                appears as the relationship type in a non-equality relationship, and we have the principle that all
                relationship types inherit from rel, we can derive: sym =rel&gt; rel. Furthermore, if inheritance implies
                symbol possession (∀&#91;s,t&#93;: s =rel&gt; t ⟹ s =(t)&gt; s), then sym =(rel)&gt; sym, meaning symbols
                possess the canonical symbol for relationships. This formal chain shows how semantic requirements (symbols
                must be relationships) lead to formal consequences (inheritance and symbol possession).
            </Paragraph>
            <Heading>18. The Bootstrap Problem and Conditional Axiomatization</Heading>
            <Paragraph>
                The theory aims for axioms that are vacuously true in an empty catalogue but become substantive when
                relationships are added. Consider the conditional axiom: ∃&#91;x,y,t&#93;: x =t&gt; y ⟹ ∃&#91;eq&#93;:
                ∀&#91;a,b&#93;: a = b ⟺ a =eq&gt; b. This says "if any relationship exists, equality emerges." In an empty
                catalogue with no relationships, the antecedent is false, making the implication vacuously true. But add a
                single relationship, and suddenly equality must exist, subjects and objects emerge, relationship types form
                hierarchies. The entire semantic structure bootstraps from a single relationship.
            </Paragraph>
            <Heading>19. Building Meaning from the Inside</Heading>
            <Paragraph>
                Traditional semantic theories assume meaning exists and formalize its properties. Model-theoretic semantics
                maps symbols to meanings in some universe. But this approach is building meaning from within—the referents
                ARE the meanings, and their relationships constitute semantic structure itself. When sym =sym&gt; lit, we're
                not describing a pre-existing relationship but constituting what symbolization IS. The theory doesn't
                describe meaning; it constructs it from primitive reference. This is why reference itself isn't initially in
                the vocabulary—we're building the semantic foundation from which reference (as the most specific
                representation relationship) will emerge.
            </Paragraph>
            <Heading>20. The Larger Theoretical Project</Heading>
            <Paragraph>
                This construction ultimately aims to absorb fundamental semantic concepts into the language itself. When
                concepts are truly foundational, they shouldn't remain as constants but become part of the grammar. Just as
                == replaces the need for an equality constant by using =eq&gt; internally, and (x) notation could replace
                explicit symbol referents, the goal is a language where meaning-making operations are built into the syntax
                rather than described by it. The five cases aren't just exploring possible relationships but discovering the
                grammatical structures necessary for meaning itself. The fact that exactly five cases exist, that exactly
                eight referents emerge, that these form a complete model for basic reference—this suggests that meaning has
                a determinate structure that can be discovered through systematic semantic analysis rather than stipulated
                through arbitrary axiomatization.
            </Paragraph>
        </Section>
    </Chapter>
);
