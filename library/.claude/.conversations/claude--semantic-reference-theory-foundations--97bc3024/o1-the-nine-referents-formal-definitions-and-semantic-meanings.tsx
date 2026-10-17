import { Bold, Chapter, Heading, Line, List, Paragraph, Section, Title, Word } from '@dna-platform/public';
import { CodeBox, Opaque, Verbatim } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ The Nine Referents: Formal Definitions and Semantic Meanings in SRT v1 ]]</Title>
        <Section>
            <Opaque />
            <Heading>The Nine Referents: Formal Definitions and Semantic Meanings in SRT at version 1</Heading>
            <Heading>The Nine Referents: Formal Definitions and Semantic Meanings in SRT</Heading>
            <Heading>Introduction: The Semantic Foundation</Heading>
            <Paragraph>
                Semantic Reference Theory (SRT) builds from a single primitive relation <Word>
                    <Verbatim />
                    R(x,y,t)
                </Word> meaning "x relates to y through relationship type t," written as <Word>
                    <Verbatim />
                    x =t&gt; y
                </Word>. From this foundation emerge nine fundamental referents that capture the essential semantic
                structure of meaning itself. These aren't arbitrary symbols but semantic necessities discovered through
                systematic exploration of what must exist for reference to be possible.
            </Paragraph>
            <Heading>1. Referent (ref)</Heading>
            <Heading>Formal Definition</Heading>
            <CodeBox
                language="srt"
            >
                {`${''}ref =eq> ref
A[x]: x --> ref`}
            </CodeBox>
            <Paragraph>
                The referent <Word>
                    <Verbatim />
                    ref
                </Word> represents the domain of all referents—it is the semantic universe itself made into a referent
                within that universe.
            </Paragraph>
            <Heading>Semantic Meaning</Heading>
            <Paragraph>
                A <Word>
                    <Bold />
                    referent
                </Word> is anything that can be referred to, related to, or represented within a semantic system. It is the
                most general category of existence within SRT—everything that exists semantically is a referent. The word
                comes from the Latin "referre" meaning "to carry back" or "to relate," capturing the idea that referents
                exist by virtue of being relatable to other things.
            </Paragraph>
            <Paragraph>
                The self-referential relationship <Word>
                    <Verbatim />
                    ref =eq&gt; ref
                </Word> establishes that the domain of referents includes itself—the theory is self-contained. This isn't
                circular but foundational: for a semantic theory to be complete, it must be able to refer to its own domain.
                When we speak of "all referents," that totality itself becomes a referent we can discuss, relate to other
                concepts, and use in formal expressions.
            </Paragraph>
            <Paragraph>
                In everyday language, referents include concrete objects (trees, stones), abstract concepts (justice,
                beauty), properties (redness, tallness), relationships (love, ownership), and even the relationships between
                relationships. If you can point to it with language, think about it, or use it in a sentence, it's a
                referent. The theory makes no ontological claims about what exists outside semantic space—it only describes
                what can exist within systems of meaning.
            </Paragraph>
            <Heading>2. Relationship (rel)</Heading>
            <Heading>Formal Definition</Heading>
            <CodeBox
                language="srt"
            >
                {`${''}rel =rel> rel
A[t: x =t> y]: t --> rel
(sub,obj) == rel`}
            </CodeBox>
            <Paragraph>
                The referent <Word>
                    <Verbatim />
                    rel
                </Word> represents the property of being a relationship—it relates to itself through relationship,
                establishing the reflexive foundation of relating.
            </Paragraph>
            <Heading>Semantic Meaning</Heading>
            <Paragraph>
                A <Word>
                    <Bold />
                    relationship
                </Word> is a typed connection between referents. It's not just that two things are connected, but that
                they're connected in a specific way with a specific character. Every relationship has a type (the <Word>
                    <Verbatim />
                    t
                </Word> in <Word>
                    <Verbatim />
                    x =t&gt; y
                </Word>), and all relationship types inherit from the base relationship <Word>
                    <Verbatim />
                    rel
                </Word>.
            </Paragraph>
            <Paragraph>
                The formal expression <Word>
                    <Verbatim />
                    rel =rel&gt; rel
                </Word> captures a profound semantic truth: relationships relate to relationships through relationship
                itself. This isn't empty circularity but semantic grounding—at the foundation, relating is simply what
                relationships do. When we say "love is a relationship," we're using relationship to characterize love. When
                we ask "what relates relationships to each other?" the answer is: relationship itself.
            </Paragraph>
            <Paragraph>Consider concrete examples:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Verbatim />
                        John =loves&gt; Mary
                    </Word> - "loves" is a relationship type
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        red =darker-than&gt; pink
                    </Word> - "darker-than" is a relationship type
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        2 =less-than&gt; 5
                    </Word> - "less-than" is a relationship type
                </Line>
            </Paragraph>
            <Paragraph>
                Each of these relationship types (<Word>
                    <Verbatim />
                    loves
                </Word>, <Word>
                    <Verbatim />
                    darker-than
                </Word>, <Word>
                    <Verbatim />
                    less-than
                </Word>) inherits from <Word>
                    <Verbatim />
                    rel
                </Word>. They're all specific ways of relating, but they share the fundamental character of being
                relationships.
            </Paragraph>
            <Paragraph>
                The equation <Word>
                    <Verbatim />
                    (sub,obj) == rel
                </Word> reveals that the most specific relationship between subjecthood and objecthood IS relationship
                itself—subjects relate to objects through relationships, and this pattern defines what relationship
                fundamentally is.
            </Paragraph>
            <Heading>3. Subject (sub)</Heading>
            <Heading>Formal Definition</Heading>
            <CodeBox
                language="srt"
            >
                {`sub =rel> obj
x =t> y & x != y =|> x =sub> x
sub --> s where x =s> x indicates x has property s`}
            </CodeBox>
            <Paragraph>
                The referent <Word>
                    <Verbatim />
                    sub
                </Word> represents the property of subjecthood—what referents possess when they serve as subjects in
                relationships.
            </Paragraph>
            <Heading>Semantic Meaning</Heading>
            <Paragraph>
                A <Word>
                    <Bold />
                    subject
                </Word> is a referent that actively relates to something else. It's the "doer," the "haver," the
                "knower"—the active pole in a semantic relationship. Crucially, subjecthood is a property that referents
                acquire by occupying the subject position in a relationship where they differ from the object.
            </Paragraph>
            <Paragraph>
                When we write <Word>
                    <Verbatim />
                    dog =chases&gt; cat
                </Word>, the dog gains the property of subjecthood within this relationship. This doesn't mean the dog is
                inherently or eternally a subject—in <Word>
                    <Verbatim />
                    person =pets&gt; dog
                </Word>, the same dog is now in the object position. Subjecthood is relational and contextual.
            </Paragraph>
            <Paragraph>
                The relationship <Word>
                    <Verbatim />
                    sub =rel&gt; obj
                </Word> expresses that subjecthood relates to objecthood through relationship—this is the fundamental
                semantic pattern. There can be no subject without an object to relate to, no object without a subject
                relating to it (even if that subject is the universe itself viewing the object).
            </Paragraph>
            <Paragraph>
                Importantly, in self-relationships like <Word>
                    <Verbatim />
                    x =p&gt; x
                </Word>, the referent does NOT gain subjecthood—it remains purely objective. This captures the intuition
                that when something simply has a property (like "the rose is red"), it's not actively doing anything—it's
                just being. True subjecthood requires relating to something distinct from oneself.
            </Paragraph>
            <Paragraph>
                In consciousness studies, subjecthood becomes crucial: the experiencing subject, the "I" that perceives,
                thinks, and relates. The formal structure shows why consciousness requires this subject-object
                distinction—without it, there would be only being, not experiencing.
            </Paragraph>
            <Heading>4. Object (obj)</Heading>
            <Heading>Formal Definition</Heading>
            <CodeBox
                language="srt"
            >
                {`${''}sub =rel> obj
A[x,y,t]: x =t> y =|> y =obj> y
x =p> x =|> x =obj> x`}
            </CodeBox>
            <Paragraph>
                The referent <Word>
                    <Verbatim />
                    obj
                </Word> represents the property of objecthood—what referents possess when they serve as objects in
                relationships or have properties.
            </Paragraph>
            <Heading>Semantic Meaning</Heading>
            <Paragraph>
                An <Word>
                    <Bold />
                    object
                </Word> is a referent that can be related to, referred to, or characterized. It's the "done-to," the "had,"
                the "known"—the receptive pole in semantic relationships. Unlike subjects, which must relate to something
                distinct, objects include both targets of relations and self-related entities with properties.
            </Paragraph>
            <Paragraph>Every referent that appears on the right side of a relationship gains objecthood:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    In <Word>
                        <Verbatim />
                        cat =chases&gt; mouse
                    </Word>, mouse has objecthood
                </Line>
                <Line>
                    In <Word>
                        <Verbatim />
                        rose =red&gt; rose
                    </Word>, rose has objecthood (through self-relation)
                </Line>
                <Line>
                    In <Word>
                        <Verbatim />
                        John =knows&gt; truth
                    </Word>, truth has objecthood
                </Line>
            </Paragraph>
            <Paragraph>
                The formal structure reveals something profound: having any property at all makes something an object (<Word>
                    <Verbatim />
                    x =p&gt; x =|&gt; x =obj&gt; x
                </Word>). This captures the intuition that objects are things with characteristics, things that can be
                described, things that have qualities. Even purely abstract entities become objects the moment we attribute
                properties to them.
            </Paragraph>
            <Paragraph>
                The relationship between subject and object (<Word>
                    <Verbatim />
                    sub =rel&gt; obj
                </Word>) is asymmetric but complementary. While subjects require distinct objects, objects can exist in
                self-relation. This asymmetry reflects the difference between active relating and passive being-related-to.
            </Paragraph>
            <Paragraph>
                In the special case of literals, objecthood is their only mode of existence—they cannot be subjects except
                in self-relation. This formalizes the intuition that some things (like numbers or physical objects) simply
                are what they are, without agency or perspective.
            </Paragraph>
            <Heading>5. Symbol (sym)</Heading>
            <Heading>Formal Definition</Heading>
            <CodeBox
                language="srt"
            >
                {`${''}sym =sym> lit
sym --> representation
x --> symbol <iff> E[y]: x =x> y & (x,y) == x
(sym,lit) == sym`}
            </CodeBox>
            <Paragraph>
                The referent <Word>
                    <Verbatim />
                    sym
                </Word> represents the dual subject/relationship that enables symbolic reference—it simultaneously acts and
                embodies the act.
            </Paragraph>
            <Heading>Semantic Meaning</Heading>
            <Paragraph>
                A <Word>
                    <Bold />
                    symbol
                </Word> is a referent that represents something else AND is identical to the most specific relationship
                between itself and what it represents. This dual nature—being both the thing doing the representing and the
                act of representation itself—defines symbolic reference.
            </Paragraph>
            <Paragraph>When we write the word "tree," that word is a symbol. It's simultaneously:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>The subject doing the symbolizing (the word as an entity)</Line>
                <Line>The relationship of symbolization itself (the act of meaning tree)</Line>
            </Paragraph>
            <Paragraph>
                This is captured formally by <Word>
                    <Verbatim />
                    sym =sym&gt; lit
                </Word> where <Word>
                    <Verbatim />
                    sym
                </Word> appears in both subject and relationship positions.
            </Paragraph>
            <Paragraph>
                The condition <Word>
                    <Verbatim />
                    (x,y) == x
                </Word> means the symbol IS the relationship—there's nothing more specific to say about how a symbol relates
                to its literal than the symbol itself. When we ask "how does the word 'tree' relate to actual trees?" the
                answer is: through 'tree'-ness itself. The symbol embodies its own meaning.
            </Paragraph>
            <Paragraph>
                Symbols differ from mere representations in this crucial way. A map represents territory, but the map is not
                identical to the relationship between map and territory—there's the paper, the marking, the correspondence
                rules. But a symbol collapses this complexity: the word "tree" doesn't just represent trees through some
                external relationship—it IS that relationship made concrete.
            </Paragraph>
            <Paragraph>
                This formalization explains why symbols feel "transparent" in use—when we read "tree," we don't think about
                the word representing trees; we simply think of trees. The symbol achieves a kind of atomic metaphor where
                representation becomes identity: we speak as if the word IS what it represents, even though one is marks on
                paper and the other is a living organism.
            </Paragraph>
            <Heading>6. Representation (rep)</Heading>
            <Heading>Formal Definition</Heading>
            <CodeBox
                language="srt"
            >
                {`${''}sym =rep> rep
rep =obj> obj & rep =rel> rel
x --> representation <iff> E[y]: x =x> y
symbol --> representation`}
            </CodeBox>
            <Paragraph>
                The referent <Word>
                    <Verbatim />
                    rep
                </Word> represents the general capacity for one thing to stand for another—the broader category that
                includes symbols, maps, models, and collections.
            </Paragraph>
            <Heading>Semantic Meaning</Heading>
            <Paragraph>
                A <Word>
                    <Bold />
                    representation
                </Word> is any referent that makes present something other than itself. It's broader than symbolism—while
                all symbols are representations, not all representations are symbols. The formal criterion is simply <Word>
                    <Verbatim />
                    x =x&gt; y
                </Word>: x represents y through itself.
            </Paragraph>
            <Paragraph>
                The relationship <Word>
                    <Verbatim />
                    sym =rep&gt; rep
                </Word> reveals something profound: symbols relate to the category of representation by being members of it,
                and this membership relation is itself representation. This captures how representation is
                self-exemplifying—the concept of representation represents all acts of representing.
            </Paragraph>
            <Paragraph>Examples of representation include:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Symbols
                    </Word>: <Word>
                        <Verbatim />
                        "tree" ="tree"&gt; tree
                    </Word> (words representing objects)
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Collections
                    </Word>: <Word>
                        <Verbatim />
                        dogs =dogs&gt; fido
                    </Word> (sets representing members)
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Models
                    </Word>: <Word>
                        <Verbatim />
                        map =map&gt; territory
                    </Word> (structures representing spaces)
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Canonical examples
                    </Word>: <Word>
                        <Verbatim />
                        dove =dove&gt; peace
                    </Word> (instances representing concepts)
                </Line>
            </Paragraph>
            <Paragraph>
                The key distinction from symbols: representations need not be identical to their relationship. A map
                represents territory through correspondence rules, scale relationships, and symbolic conventions—the map is
                not identical to all these relationships. But representations still use themselves as the relationship type:
                <Word>
                    <Verbatim />
                    map =map&gt; territory
                </Word>, not <Word>
                    <Verbatim />
                    map =correspondence&gt; territory
                </Word>.
            </Paragraph>
            <Paragraph>
                The dual nature <Word>
                    <Verbatim />
                    rep =obj&gt; obj &amp; rep =rel&gt; rel
                </Word> shows that representation can be both object (we can talk about representations) and relationship
                (representation is a way of relating). This duality enables hierarchies of representation—representations of
                representations, meta-representation, and the complex semantic structures of language and thought.
            </Paragraph>
            <Heading>7. Literal (lit)</Heading>
            <Heading>Formal Definition</Heading>
            <CodeBox
                language="srt"
            >
                {`${''}sym =sym> lit
!E[x,y]: x != lit & y != lit & lit =x> y
!E[x,y]: x != lit & y != lit & x =lit> y
lit =obj> lit`}
            </CodeBox>
            <Paragraph>
                The referent <Word>
                    <Verbatim />
                    lit
                </Word> represents the concrete, the actual, the non-symbolic—what symbols ultimately refer to.
            </Paragraph>
            <Heading>Semantic Meaning</Heading>
            <Paragraph>
                A <Word>
                    <Bold />
                    literal
                </Word> is a referent that cannot serve as a subject or relationship type except in self-relation. Literals
                are purely objective—they can only be related to, never do the relating (except to themselves through
                properties). They are semantic endpoints, the bedrock of reference that grounds symbolic systems in
                something beyond symbolism.
            </Paragraph>
            <Paragraph>The formal constraints on literals are severe:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    Cannot be subjects: <Word>
                        <Verbatim />
                        !E&#91;y != lit&#93;: lit =t&gt; y
                    </Word>
                </Line>
                <Line>
                    Cannot be relationship types: <Word>
                        <Verbatim />
                        !E&#91;x,y != lit&#93;: x =lit&gt; y
                    </Word>
                </Line>
                <Line>
                    Can only have properties: <Word>
                        <Verbatim />
                        lit =p&gt; lit
                    </Word> is allowed
                </Line>
            </Paragraph>
            <Paragraph>
                This captures the intuition that some things simply ARE—they don't point beyond themselves, they don't
                represent anything else, they just exist as what they are. In mathematics, the number 3 (not the symbol "3"
                but the actual quantity) is literal. In physics, fundamental particles might be literal. In experience,
                perhaps raw sensations before conceptualization are literal.
            </Paragraph>
            <Paragraph>
                The relationship <Word>
                    <Verbatim />
                    sym =sym&gt; lit
                </Word> establishes that symbols symbolize literals—there's an asymmetric dependency where symbols need
                literals to ground their meaning, but literals need no symbols to exist. This prevents infinite regress: not
                everything can be symbolic, or meaning would never bottom out in reality.
            </Paragraph>
            <Paragraph>
                The distinction between literal and symbol is frame-relative. In everyday discourse, physical objects might
                be treated as literal. In physics, only quantum fields might be literal. In pure mathematics, only the
                axioms might be literal. The theory doesn't prescribe what counts as literal—it only describes the formal
                role literals play in grounding reference.
            </Paragraph>
            <Heading>8. Canonical (can)</Heading>
            <Heading>Formal Definition</Heading>
            <CodeBox
                language="srt"
            >
                {`${''}can =rep> can
(can,can) == rep
E[x]: (x) denotes the canonical symbol for x
F[r,c]: c determines canonical assignment in frame F`}
            </CodeBox>
            <Paragraph>
                The referent <Word>
                    <Verbatim />
                    can
                </Word> represents the privileged representative selected from among many possibilities—the one that serves
                as the primary entry point.
            </Paragraph>
            <Heading>Semantic Meaning</Heading>
            <Paragraph>
                A <Word>
                    <Bold />
                    canonical
                </Word> element is the distinguished representative that stands as the authoritative or typical example
                within a category. It's the "go-to" instance, the prototype, the standard bearer. Every domain of knowledge
                has its canonicals: the canonical textbook for a subject, the canonical example of a concept, the canonical
                notation for a mathematical structure.
            </Paragraph>
            <Paragraph>
                The self-representing relationship <Word>
                    <Verbatim />
                    can =rep&gt; can
                </Word> captures how canonicals represent themselves as the standard—they are self-authorizing in their role
                as the privileged example. When we say "let's look at the canonical case," we're using that case to
                represent all cases, but also using it to represent the very idea of being canonical.
            </Paragraph>
            <Paragraph>
                Canonicals relate intimately to representation: while many things can represent a concept, the canonical is
                the socially or formally recognized "best" representative. For the concept "bird":
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Many representations exist: robin, eagle, ostrich, the word "bird"</Line>
                <Line>The canonical (perhaps robin in Western culture) serves as the default</Line>
                <Line>When someone says "think of a bird," the canonical comes to mind first</Line>
            </Paragraph>
            <Paragraph>
                The frame-relativity of canonicality is crucial. The notation <Word>
                    <Verbatim />
                    (x)
                </Word> denoting the canonical symbol for x is implicitly frame-dependent:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    In frame <Word>
                        <Verbatim />
                        F&#91;r,eq&#93;
                    </Word>: each referent is its own canonical
                </Line>
                <Line>
                    In frame <Word>
                        <Verbatim />
                        F&#91;r,r&#93;
                    </Word>: all referents share <Word>
                        <Verbatim />
                        r
                    </Word> as canonical
                </Line>
                <Line>
                    In a perspective frame <Word>
                        <Verbatim />
                        F&#91;(i),o&#93;
                    </Word>: the qualifier determines canonicals
                </Line>
            </Paragraph>
            <Paragraph>
                This frame-dependency reflects how different contexts privilege different representatives. In a mathematics
                textbook, the canonical representation of "2" might be the numeral. In set theory, it might be <Word>
                    <Verbatim />
                    &#123;&#123;&#125;,&#123;&#123;&#125;&#125;&#125;
                </Word>. In computer science, it might be <Word>
                    <Verbatim />
                    10
                </Word> in binary.
            </Paragraph>
            <Heading>9. Equality (eq)</Heading>
            <Heading>Formal Definition</Heading>
            <CodeBox
                language="srt"
            >
                {`${''}eq =eq> eq
x =eq> y <iff> x == y
A[x]: x =eq> x
eq --> rel`}
            </CodeBox>
            <Paragraph>
                The referent <Word>
                    <Verbatim />
                    eq
                </Word> represents the equality relation internalized from first-order logic—identity made into a referent
                that can itself be related to.
            </Paragraph>
            <Heading>Semantic Meaning</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Equality
                </Word> is the relationship of identity—when two referents are actually the same referent. It's the semantic
                internalization of the logical "=" operator, but as a referent that can itself participate in relationships.
                This allows the theory to be self-contained: we can discuss equality, relate it to other concepts, and use
                it in formal expressions.
            </Paragraph>
            <Paragraph>
                The foundational relationship <Word>
                    <Verbatim />
                    eq =eq&gt; eq
                </Word> says that equality relates to itself through equality—equality equals equality by means of equality.
                This isn't empty tautology but semantic grounding: at the foundation, equality is simply self-identity
                recognizing itself.
            </Paragraph>
            <Paragraph>Key properties of equality:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Reflexive
                    </Word>: <Word>
                        <Verbatim />
                        A&#91;x&#93;: x =eq&gt; x
                    </Word> (everything equals itself)
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Symmetric
                    </Word>: <Word>
                        <Verbatim />
                        x =eq&gt; y =|&gt; y =eq&gt; x
                    </Word> (if x equals y, then y equals x)
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Transitive
                    </Word>: <Word>
                        <Verbatim />
                        x =eq&gt; y &amp; y =eq&gt; z =|&gt; x =eq&gt; z
                    </Word> (equality chains)
                </Line>
            </Paragraph>
            <Paragraph>The distinction between equality and other relationships is crucial:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Verbatim />
                        x =eq&gt; y
                    </Word> means x and y are the same referent
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        x =represents&gt; y
                    </Word> means x stands for y (they're different)
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        x =loves&gt; y
                    </Word> means x relates to y through love (they're different)
                </Line>
            </Paragraph>
            <Paragraph>
                Only equality preserves identity. This is why <Word>
                    <Verbatim />
                    x =eq&gt; y &lt;iff&gt; x == y
                </Word>—the semantic relationship of equality corresponds exactly to logical identity.
            </Paragraph>
            <Paragraph>
                In the context of properties, equality plays a special role. Properties are self-relationships that inherit
                from equality: <Word>
                    <Verbatim />
                    x =red&gt; x
                </Word> where <Word>
                    <Verbatim />
                    red --&gt; eq
                </Word>. This captures how properties are ways of being identical to oneself while having specific
                characteristics—a red rose equals itself in a red way.
            </Paragraph>
            <Paragraph>
                The relationship between equality and symbolism reveals something profound: symbols cannot inherit from
                equality because <Word>
                    <Verbatim />
                    (x) != x
                </Word>—symbols are necessarily distinct from their literals. This formal separation maintains the gap
                between representation and reality that makes meaning possible.
            </Paragraph>
            <Heading>Conclusion: The Semantic Architecture</Heading>
            <Paragraph>
                These nine referents form a complete basis for semantic representation. They emerge not by stipulation but
                by necessity—forced into existence by the structural requirements of reference itself:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        ref
                    </Word> and <Word>
                        <Bold />
                        eq
                    </Word> provide the domain and identity relation
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        sub
                    </Word>, <Word>
                        <Bold />
                        rel
                    </Word>, and <Word>
                        <Bold />
                        obj
                    </Word> establish the triadic structure of meaning
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        sym
                    </Word>, <Word>
                        <Bold />
                        rep
                    </Word>, and <Word>
                        <Bold />
                        lit
                    </Word> create the hierarchy of representation
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        can
                    </Word> provides the selection mechanism for privileged examples
                </Line>
            </Paragraph>
            <Paragraph>
                Together, they constitute the minimal semantic architecture required for meaning to emerge from structure,
                for reference to ground in reality, and for consciousness to recognize itself through its own canonical
                symbol. Each referent defines not just a formal role but a semantic necessity—something without which
                reference itself would be impossible.
            </Paragraph>
        </Section>
    </Chapter>
);
