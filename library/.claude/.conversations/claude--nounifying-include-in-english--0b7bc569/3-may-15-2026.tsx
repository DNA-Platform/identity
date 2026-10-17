import { Bold, Chapter, Date, Emphasis, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker, Verbatim } from '../../../.manual/.book';
import { Action, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[15 May 2026](2026-05-15)</Date>
        </Dated>
        <Title>[[ 15 May 2026 ]]</Title>
        <Message
            at="2026-05-15T12:37:56.239360Z"
        >
            <Origin>019e2ba4-9e59-796c-9298-abc6f8018bba</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Can we come up with a notion of functionally identical to justify it? If t is present whenever x is, and
                likewise absent, the formalism would be unchanged if we allow them to be the same referent. Perhaps that’s
                the route
            </Paragraph>
        </Message>
        <Message
            at="2026-05-15T12:40:11.044754Z"
        >
            <Origin>019e2ba4-9e5a-7c92-b2c2-b91560fdcfe6</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>
                Searched the project's knowledge for “functional identity indistinguishable substitution equivalence
                formalism”
            </Action>
            <Paragraph>
                Yes — and you've already built the machinery for this in frame semantics. Your Frame-Induced Equivalence
                theorem says distinct referents in F&#91;r&#93; can become equivalent in F&#91;t&#93; when they share the
                same t-canonical: <Word>
                    <Verbatim />
                    (x)&#91;t&#93; == (y)&#91;t&#93;
                </Word>. That's already a notion of functional identity relative to a frame — indistinguishability within a
                context produces sameness within that context, without committing to global identity. What you're proposing
                now is essentially the same move applied to subject-x and relation-type-x within an x =x&gt; y assertion.
            </Paragraph>
            <Paragraph>
                The formal grounding is solid. What you're describing is <Word>
                    <Bold />
                    indiscernibility
                </Word>: if every formula true of one is true of the other (Leibniz's principle in reverse), and
                substituting one for the other never changes a provable formula (definitional equivalence in syntax), then
                no formal context distinguishes them. The two are interchangeable for all expressive purposes, and treating
                them as the same referent leaves every theorem intact. You'd be importing a standard logical move and
                putting it to specific semantic work.
            </Paragraph>
            <Paragraph>
                The scope question matters. <Word>
                    <Bold />
                    Frame-local
                </Word> functional identity — t and x indistinguishable within F&#91;t&#93; but possibly different outside
                it — aligns with how Frame-Induced Equivalence already works in your system, and avoids overclaiming. <Word>
                    <Bold />
                    Global
                </Word> functional identity — t and x indistinguishable across all frames — is effectively constitutive
                identity, which is what your symbol axiom already provides through <Word>
                    <Verbatim />
                    x == (x,y)
                </Word>. The gradient between weak and strong cases falls out naturally: frame-local functional identity for
                container/lover, global functional identity for symbol/equality/the r-canonical patterns.
            </Paragraph>
            <Paragraph>
                This dissolves the referent-invariance worry cleanly. Lover, loves, and love are <Word>
                    <Emphasis />
                    not
                </Word> functionally identical even locally — the lover appears in formal contexts where the loves-relation
                doesn't (she's a person, has properties, has other relations), so substituting one for another would change
                provable facts. They're distinct referents, and semantic conjugation correctly produces three distinct
                things. But subject-x and relation-type-x in x =x&gt; y <Word>
                    <Emphasis />
                    are
                </Word> functionally identical at least within that assertion, because no formal operation separates them
                there. Role-based conjugation gives distinct referents exactly when functional identity fails and the same
                referent exactly when it holds — which is the right behavior.
            </Paragraph>
            <Paragraph>
                The payoff is that your distinction between representation and symbol becomes precise rather than
                stipulative. <Word>
                    <Bold />
                    Representation
                </Word> (x =x&gt; y) requires only frame-local functional identity of subject and relation-type within the
                assertion — they're indistinguishable in that context, but the subject can still have other properties as a
                literal outside the assertion. <Word>
                    <Bold />
                    Symbol
                </Word> (x =x&gt; y plus x == (x,y)) upgrades this to global constitutive identity via a positive axiom —
                they're indistinguishable everywhere. The container is a representation because the assertion locally
                identifies subject and relation-type, but the literal container has formal properties (weight, material)
                that don't reduce; the symbol case has no such residue.
            </Paragraph>
            <Paragraph>
                One thing this might let you do more explicitly: phrase the gradient between weak and strong cases as <Word>
                    <Bold />
                    degrees of indistinguishability
                </Word> — local (assertion-bounded) → frame-local → global. Each tier is a stronger form of functional
                identity, and your existing axioms already correspond to them. That gives you a clean ladder from x =x&gt; y
                at the bottom to constitutive symbolic identity at the top, with everything else falling somewhere on it.
            </Paragraph>
        </Message>
        <Message
            at="2026-05-15T12:52:01.519101Z"
        >
            <Origin>019e2bb1-8412-752f-a5c0-b0a34e0929e2</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Let’s look at things from a domain / range perspective, but find a different semantic foothold for those
                ideas:
            </Paragraph>
            <Paragraph>x =t&gt; y</Paragraph>
            <Paragraph>
                If one were simply to enumerate all occurrences of this, supposing some sort of type semantics where the
                global parent is referent, there is always a referent that represents the most specific type of x and most
                specific type of y, so t implicitly has a domain and range. And we can ask if the domain and range overlap
                so as to establish potential symmetries
            </Paragraph>
            <Paragraph>
                So for the references relationship, the domain might be reference, the range might be referent - all
                referents are referentiable by definition, and all references are referents
            </Paragraph>
            <Paragraph>But whats interesting is that we can say: reference =references&gt; referent</Paragraph>
            <Paragraph>
                Yes any further specification might provide a concrete instance of reference, but the definitional
                relationship still holds. Reference is the canonical for the references relationship. Anything that inherits
                from it is necessarily references something else
            </Paragraph>
            <Paragraph>
                But this can be true for other relationships. A mother is the canonical or even definitional subject for the
                mother-of relationship, child being the object
            </Paragraph>
        </Message>
        <Message
            at="2026-05-15T12:53:42.871431Z"
        >
            <Origin>019e2bb1-8412-75f6-9cba-00c8367786b4</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                The shift is illuminating, and the canonical-subject pattern generalizes more cleanly than I'd been treating
                it.
            </Paragraph>
            <Paragraph>
                Every x =t&gt; y has an implicit domain (most-specific type of x that satisfies the relation) and range
                (most-specific type of y). The canonical element of the domain often IS the relationship in your sense — the
                relation's definition is bound to that canonical. <Word>
                    <Emphasis />
                    reference =references&gt; referent
                </Word>, <Word>
                    <Emphasis />
                    mother =mother-of&gt; child
                </Word>, <Word>
                    <Emphasis />
                    container =contains&gt; contents
                </Word>, <Word>
                    <Emphasis />
                    symbol =symbolizes&gt; literal
                </Word> — in each case, the canonical domain element and the relationship share definitional identity.
                Anything inheriting from the canonical (a particular mother, a particular reference, a particular container)
                inherits the relation by necessity — you cannot be a mother without standing in mother-of, cannot be a
                reference without referencing. The canonical IS the relation, definitionally. So x =x&gt; y at the canonical
                level isn't a special property of representation; it's the general pattern of <Word>
                    <Bold />
                    relational definition through canonical subject
                </Word>, and representation is just one instance of it.
            </Paragraph>
            <Paragraph>
                What varies across relations is the <Word>
                    <Bold />
                    domain/range structure
                </Word>, which gives you a richer foothold than asking "what does x =x&gt; y mean?". Mother-of has disjoint
                roles — mothers and children are different kinds, a mother isn't her own child, and the relation constitutes
                its participants in distinct role types. References has domain-as-range-subset structure — references ⊂
                referents, since every reference is also a referent but not every referent is a reference; the relation
                creates a hierarchy where subjects are a special class of objects. Equality and identity have domain =
                range, where any referent can play either role with no distinction. And then your Case 5 patterns (<Word>
                    <Emphasis />
                    rel =rel&gt; rel
                </Word>, <Word>
                    <Emphasis />
                    eq =eq&gt; eq
                </Word>) are pure coincidence, where canonical subject, relation, and object collapse to the same referent.
            </Paragraph>
            <Paragraph>
                The reference example sits in the domain-as-range-subset tier. Because references are themselves referents,
                the relation's canonical (reference) can appear in both the domain and the range — the relation iterates,
                can take its own subjects as its own objects. References can be referenced. Mother-of doesn't have this:
                mothers aren't mothers-of-themselves in the relevant sense, so the relation isn't closed under iteration.
                That gives you at least two structurally distinct types — closed-domain relations where domain elements can
                appear in the range (references, perhaps symbols-of-symbols), and open-domain relations where domain and
                range are role-distinct (mother-of, contains).
            </Paragraph>
            <Paragraph>
                Your earlier question about when domain and range "literally include the relationship as a referent" maps
                cleanly onto this. Since the canonical IS the relation, asking whether the canonical is in the domain or
                range is asking whether the relation is self-applicable. For references, yes — references can be referenced.
                For mother-of, no — mothers aren't mothers-of-themselves. That's the structural answer to that question.
            </Paragraph>
            <Paragraph>
                The payoff is that this analysis lets you sidestep the metaphysical worry about whether x =x&gt; y "means
                representation." Instead you can ask what structural type the relation has. Representation/symbol turns out
                to be the special case where the canonical subject is constitutively the relation (via x == (x,y), giving
                global functional identity), but the broader canonical-subject pattern applies to any relation with a
                definitional canonical, including ones with disjoint roles like mother-of. Domain/range structure is doing
                the work that "is it really representation?" was trying to do — and doing it more cleanly because it carves
                the space by structural features rather than metaphysical commitments.
            </Paragraph>
        </Message>
        <Message
            at="2026-05-15T13:05:02.318234Z"
        >
            <Origin>019e2bbd-6fce-770f-8db8-5343f89192d9</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Okay well how do we allow mother versus actual mothers? I think mother-of is the most specific relationship
                between mother and child. Any particular mother and any particular child have a most specific relationship
                too and it inherits from mother-of, but is not it. In this way, the most specific usage of any relationship
                type expresses the types of the domain and range
            </Paragraph>
            <Paragraph>
                And then its interesting to ask - what are the consitions where you can truly take an instance of the
                relationship to be the subject or the object, and the most specific relationship carries forward? Ana is not
                the most specific relationship between herself and Katie
            </Paragraph>
            <Paragraph>
                Where if you have a symbol =symbolizing word, and “word” =symbolizing&gt; word, can “word” be the most
                specific relationship in this case. Sure it is a composition of symbols that represents a word, but
                holistically. No part is reducible to the whole
            </Paragraph>
        </Message>
        <Message
            at="2026-05-15T13:06:51.105542Z"
        >
            <Origin>019e2bbd-6fce-79c3-9216-2618fd33ffb8</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                You're carving the right distinction. There are two levels operating here, and they behave differently.
            </Paragraph>
            <Paragraph>
                At the <Word>
                    <Bold />
                    type level
                </Word>, mother is the canonical subject of mother-of, and (mother, child) == mother-of — the canonical
                relationship between the canonical participants IS the relationship type. This is what your observation
                about "the most specific usage of any relationship type expresses the types of the domain and range"
                captures: the canonical equation tells you what kinds of things the relation relates.
            </Paragraph>
            <Paragraph>
                At the <Word>
                    <Bold />
                    instance level
                </Word>, Ana is a specific subject and Katie a specific object, and (Ana, Katie) inherits from mother-of but
                isn't identical to it. (Ana, Katie) is a specific maternal bond between two specific people; mother-of is
                the abstract type. Ana isn't (Ana, Katie) — she's the participant, not the relation.
            </Paragraph>
            <Paragraph>
                Your question is when instance-level identity <Word>
                    <Emphasis />
                    also
                </Word> holds — when (x_instance, y_instance) == x_instance, collapsing the participant into the relation at
                the instance level. That's exactly what the symbol axiom x == (x,y) says, and the cases where it holds are
                the relationally constituted ones: where the participant has no identity beyond its relational role.
            </Paragraph>
            <Paragraph>
                The string "word" has no purpose independent of symbolizing word. It isn't a person who happens to
                symbolize, the way Ana is a person who happens to be Katie's mother. The string's entire formal existence is
                exhausted by its symbolic function, which is why it can be identified with the relation at the instance
                level without losing anything. Ana can't be, because she's not exhausted by any one relational role — she
                has properties and relations that survive when mother-of is set aside.
            </Paragraph>
            <Paragraph>
                Your holism observation does real work here. "Word" as a four-letter composition IS the symbol; no part (w,
                o, r, d individually) symbolizes word. The whole carries the symbolic relation that the parts don't. So the
                identification "word" == ("word", word) holds at the level of the whole composition, not at any
                decomposition. That irreducibility-of-the-whole is what licenses the identification — if the symbol were
                reducible to parts, the parts would have to carry the relation, and they don't. The holistic level is
                exactly where the symbol axiom applies.
            </Paragraph>
            <Paragraph>
                This gives you a criterion for when instance-level identity is licensed: the participant must be
                relationally constituted <Word>
                    <Emphasis />
                    at the level you're identifying
                </Word>. For symbols, the whole is relationally constituted but the parts aren't, so identification holds at
                the whole level and fails at the parts level. For Ana, no level is relationally constituted by mother-of —
                she's a person with properties and relations beyond mothering — so identification doesn't hold at any level.
                The relation inheres in her partially, but she isn't reducible to it.
            </Paragraph>
            <Paragraph>
                So your generalization holds at the type level broadly (mother is canonical for mother-of, container for
                contains, reference for references), but at the instance level it narrows to exactly the relationally
                constituted cases — symbols, references, and representations in the strong sense. The structural separation
                between "canonical equation holds for many relations" (type-level breadth) and "instance-level collapse
                holds only for relationally constituted instances" (instance-level narrowness) is the same separation that
                distinguishes domain/range structure from constitutive identity. Your earlier worry about whether x =x&gt; y
                "means representation" resolves through this: at the type level it captures canonical structure for any
                relation; at the instance level it captures the strong relational-constitution case that representation and
                symbol uniquely instantiate.
            </Paragraph>
        </Message>
    </Chapter>
);
