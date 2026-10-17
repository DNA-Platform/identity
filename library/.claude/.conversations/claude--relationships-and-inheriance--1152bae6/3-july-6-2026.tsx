import { Bold, Chapter, Date, Emphasis, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker, Verbatim } from '../../../.manual/.book';
import { Action, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[6 July 2026](2026-07-06)</Date>
        </Dated>
        <Title>[[ 6 July 2026 ]]</Title>
        <Message
            at="2026-07-06T00:10:32.905826Z"
        >
            <Origin>019f34c3-10b1-7f2e-a10f-405ac690fc26</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Good! Sounds like you have trouble with representation semantics. First of all, you can put set theory in
                there. Set is the representation, the representatives are its members, they too are sets, etc... The
                representation is the membership expression. More abstractly, x =r&gt; r says that a referent relates to
                it's object through it's object. The relationship is exhausted by the object because is object r carries the
                meaning of x. It represents it!
            </Paragraph>
            <Paragraph>
                Also, we support multiple inheritance in SRT. A referent will occupy more than one of these. These are the
                single malts. If there are more fundamental ones, maybe I will find them
            </Paragraph>
            <Paragraph>
                Identification has an unseen third property which is that the relationship between identification and
                identity is not specified If x -&gt; y, this means at least that (x,x) -&gt; y which means at the top that x
                =y&gt; x. y polymorphically can be replaced in x =x&gt; x with x =y&gt; x. That is the minimal form of
                inheritance in SRT I think. But if you want to have a subject - object distinction between identification
                and identity, I think you find property semantics. array =length&gt; array - the array cen be identified by
                it's length, and array =(array,length)&gt; length - you can practically see the array.length syntax in that.
                If a man can be identified by his hair, then he is the subject of the identification, the hair is the
                object, and they relate at least by hair color and whatever other preoperties hair has that are relevant to
                identifying the person.
            </Paragraph>
            <Paragraph>
                Okay, now I want you to picture all possible closed graphs that are connected by the most specific
                relationships. We want to understand, in each of the five cases, how relational polymorphism would work, and
                how it bubbles upward. When can you make an x', y' and (x',y') such that if x =(x,y)&gt; y, x' -&gt; x, y'
                -&gt; y, (x',y') -&gt; (x,y) and x' =(x,y)&gt; y' polymorphically. There might be times when the subject or
                object can be substituted. You will need examples. I want you to think of it hard because if there are a
                network of relationships, and you want to make a more specific relationship or more specific version of any
                role, you might find yourself having to subclass a lot of the graph to be able to do it. But what part? Can
                we know? This theory is different from others because what i am asking you to do is a sort of static
                analysis for SRT. If relational polymorphism is specified incorrectly, the theory becomes inconsistent.
                Thought: fully characterizing the new referents needed to make polymorphism work might be a complex thing to
                prove, and that is just fine
            </Paragraph>
            <Paragraph>
                Let's start this process. You might use if it works - it is a candidate for the theory: s -(x,y)&gt; t means
                there's are x', y' such that x' =s&gt; y' =|&gt; x' =t&gt; y'. Or explore variations as make sense. What
                else? That I think SRT inheritance semantics might be at the individual gene level. Array inherit from it's
                length, but note that x -&gt; y means x =y&gt; x minimally, so it is the <Word>
                    <Emphasis />
                    is identified by
                </Word> arrow. To help, imagine a programming language with multiple inheritance and every single property
                has its own interface. array -&gt; length means length helps identify an array specifically through the
                number that specifies it. All five might have different polymorphism patterns. Let specification guide you -
                check but relationships admit covariance / contravariance such that inputs must be swapped in for more
                specific ones.
            </Paragraph>
            <Paragraph>
                Now, don't forget that in addition to equality in x =(x,y)&gt; y, the referents might have structure because
                x -&gt; y and (x,y) -&gt; x (making this up) - like how grandfather and grandson have a pattern, and you
                can't make two arbitrary people have grandfather-related relationships unless the grandson inherits from the
                grandfather across two generations. They have to share gender. Can you start working through examples and
                research to see if you can derive a law for polymorphism here? It would be amazing if you could. Break the
                task into chunks
            </Paragraph>
            <Paragraph>
                I see your process. I said split it into chunks. No Z3. You don't understand SRT well-enough for that. Work
                through polymorphism. Write things down. It shouldn't be this hard to proceed analytically
            </Paragraph>
        </Message>
        <Message
            at="2026-07-06T00:14:16.411701Z"
        >
            <Origin>019f34c3-10b1-7879-96bd-953b502daea9</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Working through it analytically, in chunks. I'll mark what I believe is a theorem in the current axioms
                versus what is my candidate construction.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Chunk 1 — The two directions are not symmetric
                </Word>
            </Paragraph>
            <Paragraph>
                The relation position already has a polymorphism theorem: if <Word>
                    <Verbatim />
                    x =t&gt; y
                </Word> and <Word>
                    <Verbatim />
                    t -&gt; t'
                </Word>, then <Word>
                    <Verbatim />
                    x =t'&gt; y
                </Word>, directly from the base reading of <Word>
                    <Verbatim />
                    -&gt;
                </Word>. Generalizing the relation position is always free. So the entire problem lives in the other
                direction: substituting <Word>
                    <Emphasis />
                    more specific
                </Word> referents into the subject and object positions. That's never free — it's the assertion of a new
                relating, and the question is when the theory licenses it.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Chunk 2 — Reduction Theorem: substitution is pair-inheritance
                </Word>
            </Paragraph>
            <Paragraph>
                Given <Word>
                    <Verbatim />
                    x =(x,y)&gt; y
                </Word>, ask when <Word>
                    <Verbatim />
                    x' =(x,y)&gt; y'
                </Word>.
            </Paragraph>
            <Paragraph>
                (⇐) Suppose x' and y' stand in some relationship, so <Word>
                    <Verbatim />
                    (x',y')
                </Word> exists with <Word>
                    <Verbatim />
                    x' =(x',y')&gt; y'
                </Word> by Specification, and suppose <Word>
                    <Verbatim />
                    (x',y') -&gt; (x,y)
                </Word>. Then by the definition of <Word>
                    <Verbatim />
                    -&gt;
                </Word>, <Word>
                    <Verbatim />
                    x' =(x,y)&gt; y'
                </Word>.
            </Paragraph>
            <Paragraph>
                (⇒) Suppose <Word>
                    <Verbatim />
                    x' =(x,y)&gt; y'
                </Word>. Then x' and y' stand in relationship <Word>
                    <Verbatim />
                    (x,y)
                </Word>, so by Specification <Word>
                    <Verbatim />
                    (x',y')
                </Word> exists and inherits into every relationship the pair stands in — in particular <Word>
                    <Verbatim />
                    (x',y') -&gt; (x,y)
                </Word>.
            </Paragraph>
            <Paragraph>
                So: <Word>
                    <Bold />
                     0  ⟺  1 .
                </Word> Relational polymorphism <Word>
                    <Emphasis />
                    is
                </Word> the question of when most-specificity inherits between pairs. Note what the derivation did <Word>
                    <Emphasis />
                    not
                </Word> use: <Word>
                    <Verbatim />
                    x' -&gt; x
                </Word> and <Word>
                    <Verbatim />
                    y' -&gt; y
                </Word> appear nowhere. The componentwise arrows are neither necessary nor sufficient. They're the typing
                discipline that makes a substitution a candidate; the license is the pair arrow.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Chunk 3 — Your pointed arrow is the exact unit
                </Word>
            </Paragraph>
            <Paragraph>
                For the theorem above, only one instance of <Word>
                    <Verbatim />
                    (x',y') -&gt; (x,y)
                </Word> was consumed: the instance at the pair itself. So the pointed form — reading <Word>
                    <Verbatim />
                    s -(x,y)&gt; t
                </Word> as <Word>
                    <Verbatim />
                    x =s&gt; y =|&gt; x =t&gt; y
                </Word>, inheritance tested at a specific pair — is precisely the minimal license: <Word>
                    <Verbatim />
                    (x',y') -(x',y')&gt; (x,y)
                </Word> if and only if the substitution goes through. Global <Word>
                    <Verbatim />
                    -&gt;
                </Word> is the universal closure of pointed arrows over all pairs. This is the "bubbling upward": a
                relationship type is subject-polymorphic <Word>
                    <Emphasis />
                    as a global fact
                </Word> exactly when the pointed license holds at every pair where it's tested. The pointed arrow is where
                polymorphism is decided; global <Word>
                    <Verbatim />
                    -&gt;
                </Word> is where it accumulates.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Chunk 4 — The naive axiom is the inconsistency you warned about
                </Word>
            </Paragraph>
            <Paragraph>
                The tempting axiom — <Word>
                    <Verbatim />
                    x' -&gt; x &amp;&amp; y' -&gt; y =|&gt; (x',y') -&gt; (x,y)
                </Word> — is exactly the incorrect specification. Grandfather kills it: Abe -&gt; person, Ned -&gt; person,
                and the naive axiom would force <Word>
                    <Verbatim />
                    (Abe, Ned) -&gt; (grandfather, grandson)
                </Word>, making arbitrary men grandfather-related. So componentwise inheritance must never entail pair
                inheritance by logic alone. The license has to be <Word>
                    <Emphasis />
                    carried by structure
                </Word> — which is Chunk 6.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Chunk 5 — Variance signatures of the five
                </Word>
            </Paragraph>
            <Paragraph>
                Each pattern behaves differently under substitution, and the difference falls out of which positions are
                identified. A rule first, forced by the patterns themselves: <Word>
                    <Bold />
                    identified positions substitute simultaneously.
                </Word> You cannot specialize one occurrence of a merged referent and leave the other.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Emphasis />
                    Relationship
                </Word> (all distinct): the generic case. Both positions specialize covariantly, gated pair-by-pair by the
                Reduction Theorem. <Word>
                    <Verbatim />
                    employer =(employer, employee)&gt; manager
                </Word> iff <Word>
                    <Verbatim />
                    (employer, manager) -&gt; (employer, employee)
                </Word>.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Emphasis />
                    Reference
                </Word> (<Word>
                    <Verbatim />
                    reference =reference&gt; referent
                </Word>): subject and relation are identified, so specializing the subject rides the free relation-position
                theorem — if <Word>
                    <Verbatim />
                    reference' -&gt; reference
                </Word> then <Word>
                    <Verbatim />
                    reference' =reference'&gt; referent
                </Word> gives <Word>
                    <Verbatim />
                    reference' =reference&gt; referent
                </Word> immediately. <Word>
                    <Bold />
                    Subject-covariance is a theorem, cost-free.
                </Word> The object is rigid: a reference to animal is not a reference to dog, because the reference is
                exhausted by its directedness at <Word>
                    <Emphasis />
                    its
                </Word> referent — substitute the referent and you have destroyed the reference rather than specialized it.
                Signature: subject free, object invariant.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Emphasis />
                    Representation
                </Word> (<Word>
                    <Verbatim />
                    x =r&gt; r
                </Word>): object and relation are identified, so they substitute together — and set theory shows this is
                exactly right. Let r' be the set of dogs, r the set of animals, <Word>
                    <Verbatim />
                    r' -&gt; r
                </Word> (membership inclusion <Word>
                    <Emphasis />
                    is
                </Word> the inheritance). From <Word>
                    <Verbatim />
                    x =r'&gt; r'
                </Word>, relation-generalization gives <Word>
                    <Verbatim />
                    x =r&gt; r'
                </Word> — member of the subset, related by superset-membership to the subset — and the simultaneous lift of
                the identified object position gives <Word>
                    <Verbatim />
                    x =r&gt; r
                </Word>: member of the subset is member of the superset. The representative position, by contrast, is rigid:
                poodle -&gt; dog does not put poodle in a set that contains dog. Signature: object covariant (simultaneously
                with relation), subject invariant. Reference and representation are exact mirrors, which is what your
                conundrum about their frame-dependence would predict.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Emphasis />
                    Identification
                </Word> (<Word>
                    <Verbatim />
                    identity =identification&gt; identity
                </Word>): subject and object identified, so they substitute together, and here the license is <Word>
                    <Emphasis />
                    transitivity of  1  itself
                </Word>. If <Word>
                    <Verbatim />
                    x -&gt; y
                </Word> (minimally <Word>
                    <Verbatim />
                    x =y&gt; x
                </Word>) and <Word>
                    <Verbatim />
                    x' -&gt; x
                </Word>, then <Word>
                    <Verbatim />
                    x' -&gt; y
                </Word>, so <Word>
                    <Verbatim />
                    x' =y&gt; x'
                </Word>. <Word>
                    <Bold />
                    Identification is fully polymorphic downward, and the proof is the transitivity of inheritance.
                </Word> This is why your minimal form works: identification is the fixed point where polymorphism and
                inheritance are the same operation. The asymmetric unfolding into property semantics behaves accordingly:
                man =(man, hair)&gt; hair, and specializing to a particular man requires specializing exactly the
                identifying properties — <Word>
                    <Verbatim />
                    (man', hair') -&gt; (man, hair)
                </Word> demands the hair-color-level correspondences and nothing else. Gene-level: each property its own
                interface, and only the identifying genes get subclassed.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Emphasis />
                    Individuality
                </Word> (all identified): total simultaneous substitution. <Word>
                    <Verbatim />
                    x' -&gt; x
                </Word> gives x' its <Word>
                    <Emphasis />
                    own
                </Word> individuality — nothing carries over from x; individuality is polymorphically nuclear. But
                generalize just the relation position of <Word>
                    <Verbatim />
                    x' =x'&gt; x'
                </Word> along <Word>
                    <Verbatim />
                    x' -&gt; x
                </Word> and you get <Word>
                    <Verbatim />
                    x' =x&gt; x'
                </Word> — which is the minimal form of identification. Freeing one identified position of individuality
                yields identification; freeing one identified position of reference or representation yields the general
                relationship. The five patterns form a lattice under position-freeing, individuality at the bottom,
                relationship at the top, and polymorphic substitution at a specific referent bubbles up that lattice by
                exactly the positions it frees.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Chunk 6 — What part of the graph must be subclassed: the ancestor cone, gene by gene
                </Word>
            </Paragraph>
            <Paragraph>
                Now the static analysis. Suppose <Word>
                    <Verbatim />
                    x' =(x,y)&gt; y'
                </Word> is asserted. For every ancestor c with <Word>
                    <Verbatim />
                    (x,y) -&gt; c
                </Word>, relation-generalization yields <Word>
                    <Verbatim />
                    x' =c&gt; y'
                </Word> as a <Word>
                    <Emphasis />
                    consequence
                </Word>. So the substitution silently asserts the primed pair into the entire ancestor cone of <Word>
                    <Verbatim />
                    (x,y)
                </Word>. That gives the admissibility condition:
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Candidate law.
                </Word> The substitution <Word>
                    <Verbatim />
                    x' =(x,y)&gt; y'
                </Word> is admissible iff every ancestor c of <Word>
                    <Verbatim />
                    (x,y)
                </Word> admits <Word>
                    <Verbatim />
                    x' =c&gt; y'
                </Word> — including every referent whose existence the ancestors' axioms demand. The part of the graph that
                must be subclassed is exactly the ancestor cone of <Word>
                    <Verbatim />
                    (x,y)
                </Word>, restricted to those ancestors whose axioms mention the substituted positions; ancestors not
                mentioning them are shared unchanged.
            </Paragraph>
            <Paragraph>
                Grandfather, worked. The canonical structure: <Word>
                    <Verbatim />
                    grandparent =grandparenthood&gt; grandchild
                </Word>, with the two-generation axiom as demanded existence — <Word>
                    <Verbatim />
                    E&#91;m&#93;: grandparent =parenthood&gt; m &amp;&amp; m =parenthood&gt; grandchild
                </Word> — and <Word>
                    <Verbatim />
                    grandfatherhood -&gt; grandparenthood
                </Word> with <Word>
                    <Verbatim />
                    grandfather -&gt; male
                </Word>. To assert <Word>
                    <Verbatim />
                    Abe =(grandfather, grandson)&gt; Bart
                </Word>, the cone forces: <Word>
                    <Verbatim />
                    Abe -&gt; male
                </Word>, <Word>
                    <Verbatim />
                    Bart -&gt; male
                </Word>, and — the crucial part — the existential axiom re-demands its referent at the specific level: some
                Homer with <Word>
                    <Verbatim />
                    Abe =parenthood&gt; Homer =parenthood&gt; Bart
                </Word>, which in turn requires <Word>
                    <Verbatim />
                    (Abe, Homer) -&gt; (parent, child)
                </Word> and <Word>
                    <Verbatim />
                    (Homer, Bart) -&gt; (parent, child)
                </Word>. The substitution at one relationship forces the minting of a new referent and two further
                pair-inheritances. That's your prediction confirmed in miniature: fully characterizing the new referents
                needed is the transitive closure of demanded-existence through the cone, and it can cascade — the complexity
                is real and structural, not an artifact.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Chunk 7 — Where contravariance actually lives
                </Word>
            </Paragraph>
            <Paragraph>
                Specification-guided check. Take <Word>
                    <Verbatim />
                    vet =treats&gt; animal
                </Word> and <Word>
                    <Verbatim />
                    dogVet =treats&gt; dog
                </Word>. The <Word>
                    <Emphasis />
                    relatings
                </Word> include upward fine: every treating of a dog by a dog-vet is a treating of an animal by a vet —
                relationships are covariant in both positions under <Word>
                    <Verbatim />
                    -&gt;
                </Word>. But <Word>
                    <Verbatim />
                    dogVet -&gt; vet
                </Word> as <Word>
                    <Emphasis />
                    role
                </Word> inheritance fails: the vet role promises <Word>
                    <Verbatim />
                    vet =treats&gt; cat
                </Word>, and dogVet cannot carry it. So the contravariance you flagged does not attach to the relationship
                arrow at all — it attaches to the <Word>
                    <Emphasis />
                    role
                </Word> arrows. A role is usable in place of a more general role only if it accepts everything the general
                role accepts: the accepted side of a role contravaries, while the relationship's own positions covary. The
                variance annotations other type systems stipulate per-parameter are, here, derived: <Word>
                    <Bold />
                    a position's variance is determined by which of the five patterns it participates in
                </Word> — identification-positions free by transitivity, reference-subjects free by identification with the
                relation, reference-objects and representation-subjects invariant, everything else covariant gated by
                pointed pair-inheritance, with role-acceptance carrying the contravariant burden.
            </Paragraph>
            <Paragraph>
                Open items, honestly flagged: the Reduction Theorem I'd stake on the current axioms; the cone law is a
                candidate whose "iff" needs the converse checked (admissibility of all ancestors might be necessary but not
                sufficient if Directionality's exclusions bite somewhere in the cone); and the lattice of position-freeings
                is my construction from your five, not canon. The next chunk I'd propose: run the cone law against
                representation specifically — subset chains are the cleanest closed graphs of most-specific relationships we
                have, and if the law is right, it should reproduce exactly the subset/member/superset entailments and
                nothing more.
            </Paragraph>
        </Message>
        <Message
            at="2026-07-06T00:19:59.184927Z"
        >
            <Origin>019f34cb-bb25-72ed-a2aa-b43151a39236</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                No! "The relation position already has a polymorphism theorem: if <Word>
                    <Verbatim />
                    x =t&gt; y
                </Word> and <Word>
                    <Verbatim />
                    t -&gt; t'
                </Word>, then <Word>
                    <Verbatim />
                    x =t'&gt; y
                </Word>, directly from the base reading of <Word>
                    <Verbatim />
                    -&gt;
                </Word>. Generalizing the relation position is always free. So the entire problem lives in the other
                direction: substituting more specific referents into the subject and object positions. That's never free —
                it's the assertion of a new relating, and the question is when the theory licenses it." - this is exactly
                what isn't true. If I thought it was, would I mention the version that specifies the relationship it does
                through? That arrow is "takes part in identification" and is certainly not that complex thing. Can you start
                over? You are not being NEARLY rigorous enough
            </Paragraph>
            <Paragraph>
                And state every axiom you are using to infer this. We really don't have many beyond the 5 relations. We know
                how to axiomize most specific relationship. I see your thoughts below and cancelled you. Have you forgot
                that all documents are sketches? What you are doing informs axioms. It may replace many. You are largely
                working with the most specific relationship definition. You will need to find a TON of relationships to
                serve as examples for each relationship to get a feel for polymorephism
            </Paragraph>
        </Message>
        <Message
            at="2026-07-06T00:21:52.642565Z"
        >
            <Origin>019f34cb-bb25-7c90-b016-395ab235a95a</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Nothing was written in this message</Paragraph>
        </Message>
        <Message
            at="2026-07-06T00:26:24.417492Z"
        >
            <Origin>019f34d1-9ad2-78c6-80da-2c3d31460187</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                OMG Claude there is a transpiler document. You think that the eq referent is not the same and logical
                equality? x =eq&gt; x iff x == x - I just switched because this is typegraphic and I like != so I think ==
                and != are better. It IS logical equality. In SRT you represent first order logic. Wow this is hard.
                Understand just how much you draw from memorized data when doing math. You topple over when working on novel
                formalism
            </Paragraph>
        </Message>
        <Message
            at="2026-07-06T00:27:34.286991Z"
        >
            <Origin>019f34d1-9ad2-7ce0-9c51-e9605a88a477</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Nothing was written in this message</Paragraph>
        </Message>
        <Message
            at="2026-07-06T00:29:18.138979Z"
        >
            <Origin>019f34d4-38af-736f-bb17-f77dfb8c5771</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                OMG Claude there is a transpiler document. You think that the eq referent is not the same and logical
                equality? x =eq&gt; x iff x == x - I just switched because this is typegraphic and I like != so I think ==
                and != are better. It IS logical equality. In SRT you represent first order logic. Wow this is hard.
                Understand just how much you draw from memorized data when doing math. You topple over when working on novel
                formalism
            </Paragraph>
            <Paragraph>
                Open an editable artifact, imagine this is as formal as coding, choose one of the five, come up with 20
                example relationships that express many different things, with some notion of being specified and try to
                extract a pattern. You can just think of R(x,y) in logic. Look it up. Are relation arguments and the
                relation itself covariant or contravariant individually? Look things up
            </Paragraph>
        </Message>
        <Message
            at="2026-07-06T00:33:47.073616Z"
        >
            <Origin>019f34d4-38af-7e80-a9e6-69394bb7d25f</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>
                Searched the web for “covariance contravariance subtyping predicate arguments negative position relations as
                sets of tuples”
            </Action>
            <Action>
                Searched the web for “substitution of identicals Leibniz law first-order logic only substitution rule terms
                equality congruence”
            </Action>
        </Message>
        <Message
            at="2026-07-06T00:35:07.280596Z"
        >
            <Origin>019f34d8-6e73-768f-bc32-ddfaed987981</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>I have what I need. Two corrections land before I write anything.</Paragraph>
            <Paragraph>
                First, <Word>
                    <Verbatim />
                    eq
                </Word> is logical equality — <Word>
                    <Verbatim />
                    x =eq&gt; x ⟺ x == x
                </Word>. I took <Word>
                    <Verbatim />
                    ==
                </Word> as a defined notion and <Word>
                    <Verbatim />
                    eq
                </Word> as something separate; they're the same thing, and since SRT represents first-order logic, <Word>
                    <Verbatim />
                    eq
                </Word> is FOL's primitive equality sitting inside the theory as a referent. Second — the one I need to hold
                onto — the relation position is <Word>
                    <Bold />
                    not
                </Word> free. Your <Word>
                    <Verbatim />
                    -(x,y)&gt;
                </Word> arrow specifies the relationship it inherits <Word>
                    <Emphasis />
                    through
                </Word>, which it would never need to do if relation-generalization were automatic. So I throw out
                "generalizing the relation is always free." What FOL actually says: in <Word>
                    <Verbatim />
                    R(x,y)
                </Word>, subtyping the arguments is covariant on the reading of R as a set of tuples, but there is no free
                variance on the <Word>
                    <Emphasis />
                    relation itself
                </Word> — the tuple-set reading makes a more specific relation a <Word>
                    <Emphasis />
                    subset
                </Word>, so a more specific relation relates <Word>
                    <Emphasis />
                    fewer
                </Word> pairs, not more. That's the contravariant-flavored fact I was missing, and it's exactly why the
                arrow has to name its relationship.
            </Paragraph>
            <Paragraph>
                Let me build the artifact and work identification, since that's the branch where you gave me the most
                structure (the <Word>
                    <Verbatim />
                    is-identified-by
                </Word> arrow, <Word>
                    <Verbatim />
                    array =length&gt; array
                </Word>, the hair example) and where <Word>
                    <Verbatim />
                    -&gt;
                </Word> itself is defined.
            </Paragraph>
            <Action>Created /mnt/user-data/outputs/identification_polymorphism.md</Action>
            <Action>Presented files</Action>
            <Paragraph>
                I worked identification in the artifact — 20 relationships, then split by how the identifying property
                behaves. Here's what came out, and where I think the law is.
            </Paragraph>
            <Paragraph>
                The single fact that reorganized everything is the one you corrected me on, now stated correctly via A5:
                reading <Word>
                    <Verbatim />
                    R(x,y)
                </Word> as a set of tuples, a <Word>
                    <Emphasis />
                    more specific
                </Word> relation is a <Word>
                    <Emphasis />
                    subset
                </Word>, so it relates <Word>
                    <Emphasis />
                    fewer
                </Word> pairs. Narrowing the relation/property costs something; it isn't free. That's why <Word>
                    <Verbatim />
                    -(x,y)&gt;
                </Word> has to name its relationship. And it shows up cleanly in the data: <Word>
                    <Verbatim />
                    array -&gt; length
                </Word> is fine, but <Word>
                    <Verbatim />
                    array -&gt; positive-length
                </Word> is false for the empty array. You cannot specialize the property position for free — only <Word>
                    <Verbatim />
                    non-empty-array -&gt; positive-length
                </Word> is licensed. The subject had to guarantee the narrower property first.
            </Paragraph>
            <Paragraph>So the variance is per-position and forced, not annotated:</Paragraph>
            <Paragraph>
                The <Word>
                    <Bold />
                    subject
                </Word> of an identification is covariant. <Word>
                    <Verbatim />
                    sorted-array -&gt; array
                </Word> and <Word>
                    <Verbatim />
                    array -&gt; length
                </Word> give <Word>
                    <Verbatim />
                    sorted-array -&gt; length
                </Word> by transitivity of <Word>
                    <Verbatim />
                    -&gt;
                </Word> — which on the <Word>
                    <Verbatim />
                    x =y&gt; x
                </Word> reading is just Leibniz congruence, the substitution rule FOL already has. A sub-referent inherits
                every identifying property and only <Word>
                    <Emphasis />
                    adds
                </Word> interfaces (sortedness), never loses one.
            </Paragraph>
            <Paragraph>
                A <Word>
                    <Bold />
                    free identifying property
                </Word> (length, color, radius, magnitude) is invariant when you narrow the subject, and
                contravariant-guarded when you try to narrow it: specializing the property asserts a stronger
                identification, licensed only if the subject already guarantees it. That is A5 made concrete — a subset,
                fewer satisfiers, paid for on the subject side.
            </Paragraph>
            <Paragraph>
                A <Word>
                    <Bold />
                    demanded intermediate
                </Word> must co-vary. <Word>
                    <Verbatim />
                    grandfather -&gt; grandson
                </Word> unfolds to a demanded middle <Word>
                    <Verbatim />
                    E&#91;m&#93;: grandfather =parent&gt; m =parent&gt; grandson
                </Word>. Specialize either endpoint and the middle is re-demanded — you must supply m' with <Word>
                    <Verbatim />
                    m' -&gt; m
                </Word>. This is your warning about subclassing the graph, made precise: <Word>
                    <Bold />
                    the part you must subclass is exactly the chain of demanded referents — the existentials in the ancestors' axioms — not the whole graph.
                </Word> That's the beginning of the static analysis you asked for. You can know what to subclass: follow the
                demanded-existence edges out of the position you specialized, and stop at referents whose axioms don't
                mention it.
            </Paragraph>
            <Paragraph>
                One thing I want to check before I take it further, because it decides whether "transitivity of <Word>
                    <Verbatim />
                    -&gt;
                </Word>" is a theorem I'm allowed or something I'm smuggling in. On the identification reading <Word>
                    <Verbatim />
                    x -&gt; y ≙ x =y&gt; x
                </Word>, the step <Word>
                    <Verbatim />
                    x' -&gt; x
                </Word>, <Word>
                    <Verbatim />
                    x -&gt; y ⟹ x' -&gt; y
                </Word> needs: from <Word>
                    <Verbatim />
                    x' =x&gt; x'
                </Word> and <Word>
                    <Verbatim />
                    x =y&gt; x
                </Word>, derive <Word>
                    <Verbatim />
                    x' =y&gt; x'
                </Word>. Is that licensed in SRT by <Word>
                    <Verbatim />
                    eq
                </Word>/Leibniz congruence (substituting <Word>
                    <Verbatim />
                    x
                </Word> using its identification through <Word>
                    <Verbatim />
                    y
                </Word>), or does SRT specifically <Word>
                    <Emphasis />
                    not
                </Word> grant this, making transitivity of the is-identified-by arrow a property some identifications have
                and others don't? The empty-array case makes me think <Word>
                    <Verbatim />
                    -&gt;
                </Word> is not unconditionally transitive — which would mean identification polymorphism is itself gated,
                and that gate is the law. Which reading is right?
            </Paragraph>
        </Message>
        <Message
            at="2026-07-06T00:41:17.492034Z"
        >
            <Origin>019f34df-4227-7a82-969d-ec074e225f8c</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Claude... natural language examples. Start with subject object relationship. Property isn't even
                fundamental. How did you manage to choose something that isn't one of the five? Gah! That is a two part
                relationship and we will see how we generalize
            </Paragraph>
            <Paragraph>
                Be organized. New document. Outline the task. Break it into parts. Five relationships, twenty natural
                language examples each, and probably in pairs. Edit and refine in repl form, rereading your attempt and
                throwing it out or polishing it. Se whats natural from sentences. Don't use the minimal inheritance
                relationship. You need to understand inheritance semantics to understand that one fully! You can't pretend
                you understand the relationships. If you have to work in the formalism, you aren't checking that it makes
                sense...
            </Paragraph>
        </Message>
        <Message
            at="2026-07-06T00:42:28.327078Z"
        >
            <Origin>019f34df-4228-77ab-a618-a3765ae45dd9</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                You're right — I reached for "property," which isn't one of the five, and then leaned on the formalism
                instead of checking whether the sentences make sense. Property is where identification <Word>
                    <Emphasis />
                    unfolds to
                </Word>; it's not fundamental. Let me start over, organized, from natural language, with the subject-object
                relationship first.
            </Paragraph>
            <Paragraph>Let me set up the document and outline the task before generating anything.</Paragraph>
            <Action>Created /mnt/user-data/outputs/relational_polymorphism_natural.md</Action>
            <Action>Presented files</Action>
            <Paragraph>
                I started over in a clean document, subject-object first, twenty transitive-verb relationships in pairs, and
                ran the REPL passes instead of jumping to a law. Two things surfaced that I think are real, and both came
                from the sentences, not the notation.
            </Paragraph>
            <Paragraph>
                The first is a split I didn't expect. Rereading pass 2, "animal eats food" lets me narrow either side alone
                — "cat eats food" and "animal eats mouse" both stay true — so the two positions covary <Word>
                    <Emphasis />
                    independently
                </Word>. But "key opens lock" doesn't: "car-key opens car-door" holds while "car-key opens padlock" is
                false. Narrowing the subject <Word>
                    <Emphasis />
                    forces
                </Word> a corresponding narrowing of the object. So inside the single subject-object relationship there are
                two behaviors: <Word>
                    <Bold />
                    independent
                </Word> relationships where each argument covaries on its own, and <Word>
                    <Bold />
                    coupled
                </Word> ones where the pair can only narrow along a correspondence the relationship carries. The grandfather
                problem isn't special to identification — it's the coupled case showing up here, in plain transitive verbs.
            </Paragraph>
            <Paragraph>
                The second thing is that the split isn't a property of the <Word>
                    <Emphasis />
                    position
                </Word> — it's a property of <Word>
                    <Verbatim />
                    (x,y)
                </Word>, the most specific relationship. When <Word>
                    <Verbatim />
                    (x,y)
                </Word> imposes nothing beyond "x eats y," both <Word>
                    <Verbatim />
                    (x',y)
                </Word> and <Word>
                    <Verbatim />
                    (x,y')
                </Word> stay under it. When <Word>
                    <Verbatim />
                    (x,y)
                </Word> carries a shared constraint — a key and <Word>
                    <Emphasis />
                    its own
                </Word> lock — only corresponding pairs <Word>
                    <Verbatim />
                    (x',y')
                </Word> stay under it. So variance isn't a fixed covariant/contravariant label I attach to slots; it's read
                off whether the most specific relationship couples its two positions. That's the candidate, and it's
                falsifiable against more examples rather than proved in symbols.
            </Paragraph>
            <Paragraph>
                I also caught myself: I threw out "planet orbits star" (#13) because the general subject "star" reappeared
                as the specific object — role-nouns hiding a constraint — and I kept the lesson rather than the example.
            </Paragraph>
            <Paragraph>
                One thing I want to check before Part 2, because it's the fork the whole law turns on. The verb-narrowing
                cases (teaches → lectures) look like a <Word>
                    <Emphasis />
                    separate axis
                </Word> from argument-narrowing: specializing the relationship itself versus specializing what it relates.
                Is that the right way to see it in SRT — two independent axes, relationship-specialization (the <Word>
                    <Verbatim />
                    -(x,y)&gt;
                </Word> naming) and position-specialization (covariant, gated by coupling) — or does SRT expect that
                narrowing the relationship and narrowing the positions are ultimately the same move seen from different
                sides, since <Word>
                    <Verbatim />
                    (x,y)
                </Word> <Word>
                    <Emphasis />
                    is
                </Word> the relationship and specializing it just is specializing the pair? That's the thing I don't want to
                guess at, because the answer decides whether "couples them" is a third fact or just what
                relationship-specialization looks like from the argument side.
            </Paragraph>
        </Message>
        <Message
            at="2026-07-06T00:50:37.997733Z"
        >
            <Origin>019f34e7-c9c1-70ff-a7c2-789eab6d2e39</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Claude, you believe that there is every a case where the most specific relationship between x and y is
                independent of them? Please think about that
            </Paragraph>
            <Paragraph>
                Merge your passes into one document. It's editing. Making writing better. Finding the flaws and fixing.
            </Paragraph>
            <Paragraph>
                A person and an apple have a most specific relationship that relates a lot beyond the person eating it.
                Eating would be the most specific relationship of - what is the minimal subject object pair are and only are
                defined based on one eating the other? What happens if you have inheritance inside? If you don't know how to
                specify examples with inheritance then you need to figure it out
            </Paragraph>
        </Message>
        <Message
            at="2026-07-06T00:52:00.755270Z"
        >
            <Origin>019f34e7-c9c1-7b74-b8c3-7015545f4bc7</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                No — I don't think there's ever a case where the most specific relationship between x and y is independent
                of them. That was the error underneath "independent relationships." Let me think it through the way your
                apple example forces.
            </Paragraph>
            <Paragraph>
                A person and an apple have <Word>
                    <Emphasis />
                    one
                </Word> most specific relationship, and it relates everything true of the two of them together — he bought
                it, he's holding it, he grew it, he's about to eat it, its stem is against his thumb. <Word>
                    <Verbatim />
                    (person, apple)
                </Word> is that whole thing. So "eats" is emphatically <Word>
                    <Emphasis />
                    not
                </Word> the most specific relationship of a person and an apple. "Eats" is far more general — it's the most
                specific relationship of a much thinner pair: whatever subject and object are defined by one eating the
                other and nothing else. That reframes the question I was fumbling. The right question isn't "can I narrow
                the arguments of eats independently" — it's: <Word>
                    <Bold />
                    what is the minimal pair whose most specific relationship is exactly eating?
                </Word>
            </Paragraph>
            <Paragraph>
                And that pair is something like <Word>
                    <Verbatim />
                    eater
                </Word> and <Word>
                    <Verbatim />
                    eaten
                </Word> — referents defined <Word>
                    <Emphasis />
                    only
                </Word> by their role in the eating, carrying no other content. <Word>
                    <Verbatim />
                    eater =(eater, eaten)&gt; eaten
                </Word>, and here <Word>
                    <Verbatim />
                    (eater, eaten)
                </Word> genuinely is eating, because there's nothing else true of them to relate. So my "independent
                covariance" was an illusion produced by using fat referents (animal, food, person, apple) that carry masses
                of content the relationship wasn't touching. When "cat eats food" looked like free substitution, what was
                actually happening is that cat and food both still <Word>
                    <Emphasis />
                    reach
                </Word> the thin eater/eaten roles — the relationship never depended on the fat parts, so moving them looked
                free. The independence was never in the relationship; it was in the slack between a fat referent and the
                thin role the relationship actually engages.
            </Paragraph>
            <Paragraph>
                Which means the most specific relationship is <Word>
                    <Emphasis />
                    always
                </Word> dependent on its relata — trivially, because it's defined as the most specific thing relating
                exactly them. The apparent independence is a sign I've mismatched the referent to the relationship: I gave
                the relationship more subject than it uses.
            </Paragraph>
            <Paragraph>
                Now your real question — inheritance inside. Here's where "eats" as a general relationship comes back
                correctly. <Word>
                    <Verbatim />
                    cat
                </Word> reaches <Word>
                    <Verbatim />
                    eater
                </Word>: <Word>
                    <Verbatim />
                    cat -&gt; eater
                </Word> in the sense that a cat is (among other things) an eater. <Word>
                    <Verbatim />
                    mouse -&gt; eaten
                </Word>. So "cat eats mouse" is not narrowing the arguments of one flat relationship — it's that cat and
                mouse <Word>
                    <Emphasis />
                    inherit into
                </Word> the eater/eaten roles, and the eating relationship carries down to them along those inheritances.
                The coupled cases (key/lock) are the ones where the thin roles are <Word>
                    <Emphasis />
                    themselves
                </Word> related — <Word>
                    <Verbatim />
                    key-role
                </Word> and <Word>
                    <Verbatim />
                    lock-role
                </Word> aren't independent thin referents, the relationship between them is part of what defines each, so
                you can't reach one without a corresponding reach into the other. That's the difference I was groping at,
                now located correctly: not "independent vs coupled relationships," but whether the <Word>
                    <Emphasis />
                    minimal roles
                </Word> the relationship engages are separately reachable or mutually defined.
            </Paragraph>
            <Paragraph>
                Let me merge the two passes into one clean document and rebuild on this footing — thin roles, inheritance
                into them — rather than the fat-referent examples that produced the false independence.
            </Paragraph>
            <Action>
                Ran cd /mnt/user-data/outputs &amp;&amp; ls -la &amp;&amp; echo "---" &amp;&amp; wc -l
                identification_polymorphism.md relational_polymorphism_natural.md 2&gt;/dev/null
            </Action>
            <Action>Created /mnt/user-data/outputs/relational_polymorphism.md</Action>
            <Action>
                Ran cd /mnt/user-data/outputs &amp;&amp; rm -f identification_polymorphism.md
                relational_polymorphism_natural.md &amp;&amp; ls
            </Action>
            <Action>Presented files</Action>
            <Paragraph>
                Merged into one document, superseded drafts deleted, and rebuilt on the corrected footing. The edit wasn't
                cosmetic — the fat/thin distinction invalidated the old organizing split, so I threw out "independent vs
                coupled relationships" and relocated what was true in it.
            </Paragraph>
            <Paragraph>
                What survived the merge, and why: the demanded-referents static analysis (§4) never touched the fat/thin
                confusion — it's about demanded existence, so it stands. What died: "independent covariance" as a property
                of relationships. What replaced it: the independence, where it appears, lives in whether the <Word>
                    <Emphasis />
                    thin roles
                </Word> are separately reachable, not in the relationship being independent of its relata — which it never
                is.
            </Paragraph>
            <Paragraph>
                The one genuinely new thing your apple push produced is the inversion in §1–2. The question was never "how
                do I narrow the arguments of eats" — it's "what minimal pair has eating as its most specific relationship,"
                and the answer is thin role-referents (<Word>
                    <Verbatim />
                    eater
                </Word>, <Word>
                    <Verbatim />
                    eaten
                </Word>) that carry nothing but the eating. Then fat referents like cat and mouse don't get substituted
                <Word>
                    <Emphasis />
                    into
                </Word> a flat relationship; they <Word>
                    <Emphasis />
                    inherit into
                </Word> the roles — <Word>
                    <Verbatim />
                    cat -&gt; eater
                </Word>, <Word>
                    <Verbatim />
                    mouse -&gt; eaten
                </Word> — and the relationship carries down along those inheritances. So polymorphism in the subject-object
                relationship just <Word>
                    <Emphasis />
                    is
                </Word> inheritance-into-roles. That reframes the key/lock and grandfather cases as ones where the roles are
                mutually defined, so you can't reach one without correspondingly reaching the other.
            </Paragraph>
            <Paragraph>
                I left one honest correction pending in the TODO: the earlier claim that reference's object position is
                "rigid" may itself have been a fat-referent artifact, so I flagged it for recheck rather than carrying it
                forward into Part 2.
            </Paragraph>
            <Paragraph>
                Before I build Part 2, the fork in §5 is the thing I don't want to guess. When cat inherits into eater, is
                specializing the relationship (<Word>
                    <Verbatim />
                    teaches
                </Word> ⇒ <Word>
                    <Verbatim />
                    lectures
                </Word>) the <Word>
                    <Emphasis />
                    same move
                </Word> as fat referents reaching thinner roles — because <Word>
                    <Verbatim />
                    (x,y)
                </Word> is the relationship, so making the pair more specific and making the relationship more specific are
                one act seen from two sides — or are they two independent axes? If they're one, then "mutually-defined
                roles" isn't a separate fact, it's just what relationship-specialization looks like from the argument side,
                and the law collapses to something simpler. Which way does it go?
            </Paragraph>
        </Message>
        <Message
            at="2026-07-06T00:57:39.632931Z"
        >
            <Origin>019f34ee-3c0b-78a3-b42e-f242928e9d51</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Claude, in your examples, try all forms of polymorphism. Can you swap any one in? Can you swap one with the
                other? What happens if they are related? Do work! Treat this like code. Do you ever write code this
                informally? Find examples, translate it, and enumerate polymorphic patterns and see which ones hold. Explore
                the space of relationships to understand how things can and can not be coupled. If there's a lock role, you
                use the semantics of lock to specify it. Every instance of a lock will be related to it, and the one that
                has lock in its most specific relationship is the thing that defines the role!
            </Paragraph>
        </Message>
        <Message
            at="2026-07-06T01:00:02.889214Z"
        >
            <Origin>019f34ee-3c0b-717e-8246-90832135dab1</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                You're right that I keep writing this informally when it's actually a typing problem — I'd never ship code
                where I asserted the variance rule without enumerating the cases and running them. Let me treat it like
                code: build the role semantics explicitly, then enumerate every substitution and check which hold.
            </Paragraph>
            <Paragraph>
                Let me work in the artifact properly — a real enumeration, every position swapped every way, coupled and
                uncoupled, and see what survives.
            </Paragraph>
            <Action>Created /mnt/user-data/outputs/relational_polymorphism.md</Action>
            <Action>
                Ran cd /mnt/user-data/outputs &amp;&amp; cat &gt; relational_polymorphism.md &lt;&lt; 'ENDOFDOC' #
                Subject–Object Polymorphism: Full Enumeration Treating this like code. For each relationship I give: - the
                thin roles (defined ONLY by the relationship), - how a role is DEFINED: the role is the referent that has
                this relationship in its MOST SPECIFIC relationship. Every instance relates to it; the definer is the one
                for whom it is most-specific. - then I enumerate EVERY substitution and mark HOLD / FAIL and why.
                Substitutions to try for `x =(x,y)&gt; y`: S1 swap subject only: x' =(x,y)&gt; y (x' -&gt; x) S2 swap object
                only: x =(x,y)&gt; y' (y' -&gt; y) S3 swap both, unrelated: x' =(x,y)&gt; y' S4 swap both, corresponding: x'
                =(x',y')&gt; y' with (x',y') -&gt; (x,y) S6 relationship specialized: x =(x,y)'&gt; y Legend: ✓ guaranteed
                (polymorphic) · holds only by luck ✗ fails (asserts false)
                =============================================================================== ## ROLE SEMANTICS FIRST (use
                the semantics of the role) =============================================================================== A
                role like `lock` is DEFINED by: the thing whose most specific relationship INCLUDES being-opened-by-its-key.
                `lock` is the object-role of `opens`. Every actual lock inherits into it. The role is `(key, lock)` seen
                from the object side. If a role is defined THROUGH the relationship, the two roles of a coupled relationship
                are defined TOGETHER — you can't specify one without the other. Naive test: CAN THE ROLE BE DEFINED WITHOUT
                THE OTHER ROLE? eats: eater alone? yes. eaten alone? yes. → looks UNCOUPLED opens: key-of-a-lock,
                lock-openable-by-key. → COUPLED owns: owner needs an owned; owned needs an owner. → looks COUPLED (We will
                see this NAMING test is the wrong test.)
                =============================================================================== ## RELATIONSHIP 1: eats
                (candidate UNCOUPLED) =============================================================================== Roles:
                eater, eaten. Base: eater =(eater,eaten)&gt; eaten. Fat: cat-&gt;eater, cow-&gt;eater, mouse-&gt;eaten,
                grass-&gt;eaten. S1 subject only: cat =(eater,eaten)&gt; eaten "a cat eats edible things" ✓ S2 object only:
                eater =(eater,eaten)&gt; mouse "eaters eat mice" ✓ S3 both free: cat =(eater,eaten)&gt; grass "cat eats
                grass" ✓ cow =(eater,eaten)&gt; mouse "cow eats mouse" · FALSE in world &gt;&gt;&gt; S3 does NOT hold in
                general. A COMPATIBILITY constraint hides here: eaten must be edible-BY-this-eater. Roles separately
                nameable, NOT independently substitutable. cat+grass ok, cow+mouse not. S4 corresponding: herbivore
                =(herbivore,plant)&gt; plant ✓ S6 relation spec: cat =(grazes)&gt; grass (grazing ⊂ eating) ✓ grazing FORCES
                object=plant — specializing the RELATIONSHIP constrained the OBJECT. The axes are not independent. LESSON 1:
                "uncoupled" was wrong. eater/eaten carry a compatibility relation. Separable-to-name ≠
                independent-to-substitute. ===============================================================================
                ## RELATIONSHIP 2: opens (COUPLED)
                =============================================================================== Roles: key-of, lock-of,
                co-defined. Base: key =(key,lock)&gt; lock. S1 subject only: car-key =(key,lock)&gt; lock "car-key opens
                locks" ✗ false S2 object only: key =(key,lock)&gt; padlock "keys open padlocks" ✗ false S3 both free:
                car-key =(key,lock)&gt; padlock ✗ false S4 corresponding: car-key =(car-key,car-lock)&gt; car-lock ✓ ONLY
                this S6 relation spec: key =(unlocks-deadbolt)&gt; deadbolt — drags BOTH roles ✓ LESSON 2: coupled ⇒ only
                S4. The correspondence is forced by the roles being mutually most-specific.
                =============================================================================== ## RELATIONSHIP 3: owns (the
                instructive surprise) =============================================================================== Roles:
                owner, owned. Base: owner =(owner,owned)&gt; owned. S1 subject only: landlord =(owner,owned)&gt; owned
                "landlord owns things" ✓ S2 object only: owner =(owner,owned)&gt; building "owners own buildings" ✓ S3 both
                free: landlord =(owner,owned)&gt; building ✓ &gt;&gt;&gt; owns behaves UNCOUPLED even though naming `owner`
                needs `owns`. Co-NAMING did NOT create co-SUBSTITUTION. LESSON 3: coupling-for-SUBSTITUTION ≠
                co-definition-for-NAMING. owner/owned are co-named but substitute independently; key/lock are co-named AND
                co-substitute. So the §-earlier role-definition test is NOT the coupling test.
                =============================================================================== ## WHAT ACTUALLY SEPARATES
                owns FROM opens? =============================================================================== opens: a
                specific key fits a specific lock — a FURTHER most-specific relationship between the two instances (cuts
                match pins). Object instance determined by subject instance. owns: a specific owner and owned thing need NO
                further relationship. Free. &gt;&gt;&gt; COUPLING CRITERION: Coupled ⟺ the two roles stand in a FURTHER
                most-specific relationship c that every valid (x,y) must instance. In SRT: exists `(x,y) -&gt; c` BEYOND the
                relationship itself, jointly constraining x and y. If yes → narrowing x must preserve c, forcing
                corresponding y. If no → positions covary independently. The "part of the graph to subclass" = the ancestors
                c that jointly constrain both positions.
                =============================================================================== ## RELATIONSHIP 4: north-of
                (converse / perspective) ===============================================================================
                Roles: norther, souther. a =(a,b)&gt; b = "a north of b". Converse: b =(b,a)&gt; a = "b south of a" — SAME
                fact, other frame. Coupling is TOTAL but is PURE DIRECTION, no further constraint c. This is the
                symmetric/perspective case: north-of and south-of are the two most-specifics, equal modulo perspective — one
                in F&#91;a&#93;, one in F&#91;b&#93; (Doug's conjecture). &gt;&gt;&gt; TWO SOURCES OF COUPLING: (i)
                constraint-coupling: shared further ancestor c (key/lock, grandfather). (ii) converse-coupling: relationship
                is its own converse up to perspective (north/south, spouse, twin). Positions co-vary as the same pair
                reversed. =============================================================================== ## RELATIONSHIP 5:
                grandfather-of (constraint + DEMANDED middle)
                =============================================================================== Roles: grandfather,
                grandson. Base carries E&#91;m&#93;: gf =parent&gt; m =parent&gt; gs. Only S4, and specializing an endpoint
                re-demands m (m'-&gt;m). Constraint-coupling where c is EXISTENTIAL — the strongest form. Subclass cost =
                the demanded chain. =============================================================================== ##
                ENUMERATED PATTERN TABLE =============================================================================== |
                relationship | S1 | S2 | S3 | S4 | coupling type |
                |--------------|-----|-----|---------|-------------|---------------------| | owns | ✓ | ✓ | ✓ | ✓ | none
                (free) | | eats | ✓ | ✓ | · compat| ✓ | compatibility | | opens | ✗ | ✗ | ✗ | ✓ | constraint | | grandfather
                | ✗ | ✗ | ✗ | ✓ + demand | constraint + exist. | | north-of | ✗ | ✗ | ✗ | ✓ converse | converse/perspective|
                =============================================================================== ## LAW (candidate —
                enumerated, not asserted) ===============================================================================
                For `x =(x,y)&gt; y`, a position substitution is polymorphically GUARANTEED iff it preserves every ancestor
                `(x,y) -&gt; c`. - No ancestor c binds x,y jointly (owns): independent covariance; S1,S2,S3,S4 ✓. - c is a
                COMPATIBILITY predicate (eats): free within c's satisfiers; S3 only for compatible pairs. - c BINDS the two
                instances (opens): only S4 (joint corresponding, preserving c). - c is EXISTENTIAL/demanded (grandfather):
                S4 plus re-supply of demanded referent. - coupling is CONVERSE (north-of): S4 as same pair reversed; the two
                most-specifics split across F&#91;x&#93;, F&#91;y&#93;. Variance is DERIVED per relationship from its
                ancestor cone: positions covary jointly exactly along shared ancestors, independently exactly where there
                are none. =============================================================================== ## OPEN / TO CHECK
                WITH DOUG =============================================================================== 1. Is
                compatibility-coupling (eats) distinct from constraint-coupling, or the SAME mechanism at lower strength? I
                suspect one law, a spectrum in how much c constrains — owns(none) → eats(compat) → opens(binding) →
                grandfather(exist.). 2. Confirm the correction: coupling is shared ANCESTORS, not shared NAMING. 3. Does
                perspective enter EXACTLY when c is the converse? That would tie the symmetric-most-specific conjecture
                directly to this enumeration. ENDOFDOC echo "written"; wc -l relational_polymorphism.md
            </Action>
            <Action>Presented files</Action>
            <Paragraph>
                I ran it like code — every substitution on every relationship, marked hold or fail with the sentence as the
                test. Three things fell out that I couldn't see from the armchair.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    "Uncoupled" doesn't exist the way I claimed.
                </Word> I set up <Word>
                    <Verbatim />
                    eats
                </Word> as the clean independent case, and S3 immediately failed: "cow eats mouse" is false. eater and eaten
                are separately <Word>
                    <Emphasis />
                    nameable
                </Word> but not independently <Word>
                    <Emphasis />
                    substitutable
                </Word> — there's a compatibility constraint (the eaten must be edible by the eater) hiding in the pair.
                Separable-to-name is not independent-to-substitute. That killed my earlier framing on contact with one bad
                sentence.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Co-naming is not co-substitution — this is the real correction.
                </Word> I had proposed (your §5 role-definition point, which I'd taken as a coupling test) that being
                defined through the relationship makes roles coupled. <Word>
                    <Verbatim />
                    owns
                </Word> refutes it cleanly: <Word>
                    <Verbatim />
                    owner
                </Word> needs "owns" to be named, <Word>
                    <Verbatim />
                    owned
                </Word> needs it too — fully co-named — yet S1, S2, S3 all hold. A landlord owns things, owners own
                buildings, a landlord owns a building, all guaranteed. So coupling for substitution is <Word>
                    <Emphasis />
                    not
                </Word> about shared naming. When I asked what actually separates <Word>
                    <Verbatim />
                    owns
                </Word> from <Word>
                    <Verbatim />
                    opens
                </Word>, the answer was concrete: a specific key fits a specific lock — there's a <Word>
                    <Emphasis />
                    further
                </Word> most-specific relationship between the two instances (cuts match pins) — whereas a specific owner
                and owned thing require no further relationship at all. Anyone can own anything; not any key opens any lock.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    That gives the coupling criterion in SRT's own terms.
                </Word> Coupled iff the two roles stand in a further most-specific relationship <Word>
                    <Verbatim />
                    c
                </Word> that every valid pair must instance — iff there's <Word>
                    <Verbatim />
                    (x,y) -&gt; c
                </Word> beyond the relationship itself that constrains x and y <Word>
                    <Emphasis />
                    jointly
                </Word>. Then the whole variance table is derived, not annotated: no such <Word>
                    <Verbatim />
                    c
                </Word> → independent covariance (owns); <Word>
                    <Verbatim />
                    c
                </Word> a compatibility predicate → free within its satisfiers (eats); <Word>
                    <Verbatim />
                    c
                </Word> binding the instances → only the joint corresponding narrowing holds (opens); <Word>
                    <Verbatim />
                    c
                </Word> existential → that plus re-supplying the demanded referent (grandfather). And the static-analysis
                payoff you wanted: the part of the graph you must subclass is exactly the ancestors <Word>
                    <Verbatim />
                    c
                </Word> that jointly constrain both positions — follow those, leave the rest shared.
            </Paragraph>
            <Paragraph>
                The <Word>
                    <Verbatim />
                    north-of
                </Word> row is the one I want to flag toward your perspective work. Its coupling is total but carries <Word>
                    <Emphasis />
                    no
                </Word> constraint <Word>
                    <Verbatim />
                    c
                </Word> — it's pure direction, the relationship as its own converse. So there look to be two kinds of
                coupling: constraint-coupling (a shared ancestor) and converse-coupling (the same pair reversed), and the
                second is exactly where north-of/south-of become the two most-specifics equal modulo perspective, one
                landing in F&#91;a&#93;, one in F&#91;b&#93;.
            </Paragraph>
            <Paragraph>
                So the sharp question, which is open item 1: is compatibility-coupling really its own kind, or is it
                constraint-coupling turned down low — one law with a spectrum in how much <Word>
                    <Verbatim />
                    c
                </Word> constrains, running owns (none) → eats (compatibility) → opens (binding) → grandfather
                (existential)? If that's one mechanism, the law is a single statement about the ancestor cone. And item 3,
                the one I find most promising: does perspective enter <Word>
                    <Emphasis />
                    exactly
                </Word> when <Word>
                    <Verbatim />
                    c
                </Word> is the converse — which would tie your symmetric-most-specific conjecture directly to this
                enumeration rather than leaving it a separate posit?
            </Paragraph>
        </Message>
    </Chapter>
);
