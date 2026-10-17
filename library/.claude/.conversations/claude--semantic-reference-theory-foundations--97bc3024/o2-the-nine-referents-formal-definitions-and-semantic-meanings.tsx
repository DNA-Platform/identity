import { Bold, Chapter, Heading, Line, List, Paragraph, Section, Title, Word } from '@dna-platform/public';
import { CodeBox, Opaque, Verbatim } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ The Nine Referents: Formal Definitions and Semantic Meanings in SRT v2 ]]</Title>
        <Section>
            <Opaque />
            <Heading>The Nine Referents: Formal Definitions and Semantic Meanings in SRT at version 2</Heading>
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
A[x]: x =eq> x
(ref,ref) == eq`}
            </CodeBox>
            <Paragraph>
                The referent <Word>
                    <Verbatim />
                    ref
                </Word> serves as the canonical example of "a referent"—it represents what it means to be a referent by
                being the prototypical instance.
            </Paragraph>
            <Heading>Semantic Meaning</Heading>
            <Paragraph>
                The referent <Word>
                    <Bold />
                    ref
                </Word> doesn't represent the entire domain of referents—rather, it represents "a referent" in the abstract
                sense. It's the canonical member of the catalogue, the prototype that exemplifies what all referents share:
                the capacity for self-equality.
            </Paragraph>
            <Paragraph>
                The key insight is that <Word>
                    <Verbatim />
                    (ref,ref) == eq
                </Word>—the most specific relationship of ref to itself is equality. This reveals what defines referenthood:
                every referent, at minimum, equals itself. When we ask "what makes something a referent?" the answer is: it
                participates in the equality relation. The expression <Word>
                    <Verbatim />
                    ref =eq&gt; ref
                </Word> isn't just saying "ref equals itself" but demonstrating the fundamental property that all referents
                possess.
            </Paragraph>
            <Paragraph>
                If we imagine <Word>
                    <Verbatim />
                    (ref)
                </Word> as the type of all referents, then <Word>
                    <Verbatim />
                    ref
                </Word> would be its prototype—the simplest, most basic instance that has no properties beyond those that
                all referents must have. It's like how in object-oriented programming, the base Object class represents the
                minimal functionality all objects share.
            </Paragraph>
            <Paragraph>
                In everyday language, when we say "let's consider a referent," we're invoking something like <Word>
                    <Verbatim />
                    ref
                </Word>—not any particular referent with special properties, but just "a thing that can be referred to."
                It's the semantic equivalent of a variable before it's bound, a placeholder that demonstrates pure
                referenthood without additional structure.
            </Paragraph>
            <Heading>2. Relationship (rel)</Heading>
            <Heading>Formal Definition</Heading>
            <CodeBox
                language="srt"
            >
                {`sub =rel> obj
(sub,obj) == rel
rel --> r (where r is the base relationship type)
rel =rel> rel (derived theorem, not definition)`}
            </CodeBox>
            <Paragraph>
                The referent <Word>
                    <Verbatim />
                    rel
                </Word> represents relationship in the abstract—it's the type or category of being a relationship.
            </Paragraph>
            <Heading>Semantic Meaning</Heading>
            <Paragraph>
                The referent <Word>
                    <Bold />
                    rel
                </Word> is best understood through the foundational trinity: <Word>
                    <Verbatim />
                    sub =rel&gt; obj
                </Word>. This expression says that subjects relate to objects through relationships, and the most specific
                way they do so IS relationship itself. The equation <Word>
                    <Verbatim />
                    (sub,obj) == rel
                </Word> reveals that rel is what emerges when we ask "what's the most specific relationship between
                subjecthood and objecthood?"—it's relationship in the abstract.
            </Paragraph>
            <Paragraph>
                The fact that <Word>
                    <Verbatim />
                    rel =rel&gt; rel
                </Word> holds is a derived theorem, not a definition. It emerges because:
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Verbatim />
                        rel =eq&gt; rel
                    </Word> (like all referents, rel equals itself)
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        eq --&gt; rel
                    </Word> (equality is a type of relationship)
                </Line>
                <Line>
                    Therefore, by inheritance, <Word>
                        <Verbatim />
                        rel =rel&gt; rel
                    </Word>
                </Line>
            </Paragraph>
            <Paragraph>
                This is indeed like <Word>
                    <Verbatim />
                    0 + 0 * 0 = 0
                </Word>—a necessary consequence that follows from the structure, not the defining characteristic.
            </Paragraph>
            <Paragraph>
                What <Word>
                    <Bold />
                    rel
                </Word> actually represents is the abstract category of relationships—when we say "love is a relationship"
                or "ownership is a relationship," we're saying these things inherit from or instantiate rel. It's the
                type-level concept that captures what all relationships share: the capacity to connect subjects to objects.
            </Paragraph>
            <Paragraph>
                In programming terms, if relationships were a class hierarchy, <Word>
                    <Verbatim />
                    rel
                </Word> would be the abstract base class that all specific relationships extend. In mathematical terms, it's
                like the category of morphisms—the abstract notion of "arrow" or "connection" independent of what's being
                connected.
            </Paragraph>
            <Heading>3. Subject (sub)</Heading>
            <Heading>Formal Definition</Heading>
            <CodeBox
                language="srt"
            >
                {`sub =rel> obj
(sub,obj) == rel
x =t> y & x != y =|> x =sub> x`}
            </CodeBox>
            <Paragraph>
                The referent <Word>
                    <Verbatim />
                    sub
                </Word> is one third of the foundational trinity that defines the basic semantic structure.
            </Paragraph>
            <Heading>Semantic Meaning</Heading>
            <Paragraph>
                The referent <Word>
                    <Bold />
                    sub
                </Word> doesn't stand alone—it's defined through its participation in the trinity <Word>
                    <Verbatim />
                    sub =rel&gt; obj
                </Word>. This isn't just saying "subjects relate to objects"—it's establishing what subjecthood,
                relationship, and objecthood ARE through their mutual definition.
            </Paragraph>
            <Paragraph>
                Subjecthood is the property referents acquire when they occupy the subject position in a relationship where
                they differ from the object. But more fundamentally, <Word>
                    <Verbatim />
                    sub
                </Word> represents the abstract concept of agency or directedness in semantic relationships. It's the "from"
                in "from-to," the active pole, the side that initiates or possesses the relationship.
            </Paragraph>
            <Paragraph>
                The trinity <Word>
                    <Verbatim />
                    sub =rel&gt; obj
                </Word> is irreducible—you can't understand any of the three without the others:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Subjects are things that relate to objects</Line>
                <Line>Objects are things that subjects relate to</Line>
                <Line>Relationships are how subjects relate to objects</Line>
            </Paragraph>
            <Paragraph>
                This mutual definition isn't circular but foundational. It's like how in physics, space, time, and matter
                are defined through their mutual relationships—none makes sense without the others.
            </Paragraph>
            <Paragraph>
                When a referent gains subjecthood (<Word>
                    <Verbatim />
                    x =sub&gt; x
                </Word>), it's not just gaining a property but entering into the fundamental semantic pattern. It becomes
                capable of bearing relationships, of being the locus from which connections originate.
            </Paragraph>
            <Heading>4. Object (obj)</Heading>
            <Heading>Formal Definition</Heading>
            <CodeBox
                language="srt"
            >
                {`${''}sub =rel> obj
(sub,obj) == rel
A[x,y,t]: x =t> y =|> y =obj> y
x =p> x =|> x =obj> x`}
            </CodeBox>
            <Paragraph>
                The referent <Word>
                    <Verbatim />
                    obj
                </Word> completes the foundational trinity, representing the receptive pole of semantic relationships.
            </Paragraph>
            <Heading>Semantic Meaning</Heading>
            <Paragraph>
                The referent <Word>
                    <Bold />
                    obj
                </Word> is the third part of the irreducible trinity <Word>
                    <Verbatim />
                    sub =rel&gt; obj
                </Word>. It represents objecthood—not in the sense of "physical object" but in the sense of being the target
                or recipient of a relationship.
            </Paragraph>
            <Paragraph>The crucial insight is that objecthood is more universal than subjecthood:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    Everything that is related to gains objecthood: <Word>
                        <Verbatim />
                        x =t&gt; y =|&gt; y =obj&gt; y
                    </Word>
                </Line>
                <Line>
                    Everything with properties gains objecthood: <Word>
                        <Verbatim />
                        x =p&gt; x =|&gt; x =obj&gt; x
                    </Word>
                </Line>
                <Line>But only things that relate to something distinct gain subjecthood</Line>
            </Paragraph>
            <Paragraph>
                This asymmetry reflects a deep semantic truth: being is more fundamental than doing. Everything that exists
                in semantic space can be an object (can be referred to, can have properties), but not everything can be a
                subject (not everything initiates relationships to distinct things).
            </Paragraph>
            <Paragraph>
                The <Word>
                    <Verbatim />
                    obj
                </Word> in the trinity represents pure receptivity—the capacity to be characterized, to be known, to be the
                terminus of a relationship. When we say something "has objecthood," we mean it can stand as the answer to
                "relates to what?" or "has what properties?"
            </Paragraph>
            <Paragraph>
                In consciousness studies, this distinction becomes crucial: while the experiencing subject requires
                distinction from what it experiences, objects include both the experienced other and the self-as-experienced
                (through properties).
            </Paragraph>
            <Heading>5. Symbol (sym)</Heading>
            <Heading>Formal Definition</Heading>
            <CodeBox
                language="srt"
            >
                {`${''}sym =sym> lit
(sym,lit) == sym
sym --> rep
x --> symbol <iff> E[y]: x =x> y & (x,y) == x`}
            </CodeBox>
            <Paragraph>
                The referent <Word>
                    <Verbatim />
                    sym
                </Word> represents the remarkable dual nature of symbolic reference—being simultaneously subject and
                relationship.
            </Paragraph>
            <Heading>Semantic Meaning</Heading>
            <Paragraph>
                A <Word>
                    <Bold />
                    symbol
                </Word> achieves something extraordinary: it collapses the distinction between doing and being into a unity.
                In <Word>
                    <Verbatim />
                    sym =sym&gt; lit
                </Word>, the symbol occupies both the subject position (the thing doing the symbolizing) and the
                relationship position (the act of symbolization itself).
            </Paragraph>
            <Paragraph>
                This dual nature isn't a formal trick but captures the essence of symbolic reference. When we use the word
                "tree":
            </Paragraph>
            <Paragraph>
                <List />
                <Line>As subject: "tree" is the thing doing the representing</Line>
                <Line>As relationship: "tree" is the way we relate to actual trees</Line>
                <Line>These aren't two different things—they're the same thing viewed from two angles</Line>
            </Paragraph>
            <Paragraph>
                The equation <Word>
                    <Verbatim />
                    (sym,lit) == sym
                </Word> makes this precise: the most specific relationship between a symbol and its literal IS the symbol
                itself. There's nothing more to say about how "tree" relates to trees than "tree"-ness itself.
            </Paragraph>
            <Paragraph>
                This explains symbolic transparency: when we read "tree," we don't experience a two-step process (see word,
                think of tree)—the word IS the relationship to tree. The symbol doesn't point to meaning through some
                external connection; it embodies the connection.
            </Paragraph>
            <Paragraph>
                The inheritance <Word>
                    <Verbatim />
                    sym --&gt; rep
                </Word> places symbols as a special case of representation. While all symbols represent, they represent in
                this unique way where representation becomes identity. A map represents territory through correspondence
                rules; a symbol represents its literal by BEING the correspondence.
            </Paragraph>
            <Heading>6. Representation (rep)</Heading>
            <Heading>Formal Definition</Heading>
            <CodeBox
                language="srt"
            >
                {`${''}sym =rep> rep
(sym,rep) == rep
x --> representation <iff> E[y]: x =x> y
can =rep> can`}
            </CodeBox>
            <Paragraph>
                The referent <Word>
                    <Verbatim />
                    rep
                </Word> captures the general phenomenon of standing-for, of making present what is absent.
            </Paragraph>
            <Heading>Semantic Meaning</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Representation
                </Word> is the broader category that includes all forms of one thing standing for another. The relationship
                <Word>
                    <Verbatim />
                    sym =rep&gt; rep
                </Word> reveals a profound self-exemplification: symbols are members of the category "representation," and
                this membership relation is itself representation. This shows how representation can represent itself—the
                concept represents all instances of representing.
            </Paragraph>
            <Paragraph>
                The key formal criterion <Word>
                    <Verbatim />
                    x =x&gt; y
                </Word> (x represents y through itself) distinguishes representation from other relationships. When <Word>
                    <Verbatim />
                    dog =chases&gt; cat
                </Word>, the dog doesn't represent the cat. But when <Word>
                    <Verbatim />
                    map =map&gt; territory
                </Word>, the map does represent the territory, using itself as the means.
            </Paragraph>
            <Paragraph>Representation includes diverse phenomena:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Symbols
                    </Word>: Complete collapse of representation into identity
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Models
                    </Word>: Structural correspondence (map to territory)
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Collections
                    </Word>: Groups representing their members
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Canonicals
                    </Word>: Privileged examples representing categories
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Indices
                    </Word>: Pointers representing what they point to
                </Line>
            </Paragraph>
            <Paragraph>
                The equation <Word>
                    <Verbatim />
                    (sym,rep) == rep
                </Word> shows that the most specific relationship between symbols and representation IS
                representation—symbols don't just belong to the category; they relate to it through the very phenomenon the
                category describes.
            </Paragraph>
            <Paragraph>
                The self-representing canonical <Word>
                    <Verbatim />
                    can =rep&gt; can
                </Word> shows that representation includes self-representation—some things represent themselves as the
                standard or prototype. This isn't paradoxical but essential for representation to be complete as a category.
            </Paragraph>
            <Heading>7. Literal (lit)</Heading>
            <Heading>Formal Definition</Heading>
            <CodeBox
                language="srt"
            >
                {`${''}sym =sym> lit
!E[x,y]: x != lit & y != lit & lit =x> y
lit =obj> lit
lit can only appear as: x =t> lit or lit =p> lit`}
            </CodeBox>
            <Paragraph>
                The referent <Word>
                    <Verbatim />
                    lit
                </Word> represents the ground of reference—what symbols ultimately point to.
            </Paragraph>
            <Heading>Semantic Meaning</Heading>
            <Paragraph>
                A <Word>
                    <Bold />
                    literal
                </Word> is something that cannot serve as a subject (except in self-relation) or as a relationship type.
                Literals are purely objective—they can only be targets of reference, never sources of reference to other
                things. They are semantic endpoints.
            </Paragraph>
            <Paragraph>
                The relationship <Word>
                    <Verbatim />
                    sym =sym&gt; lit
                </Word> establishes the fundamental asymmetry: symbols need literals to ground their meaning, but literals
                need no symbols to exist. This prevents infinite regress—not everything can be symbolic, or meaning would
                never bottom out in reality.
            </Paragraph>
            <Paragraph>What counts as literal is frame-relative and context-dependent:</Paragraph>
            <Paragraph>
                <List />
                <Line>In everyday language: physical objects, sensory experiences</Line>
                <Line>In mathematics: numbers themselves (not numerals), geometric objects</Line>
                <Line>In logic: truth values, the elements of the domain</Line>
                <Line>In consciousness: perhaps qualia, raw feels before conceptualization</Line>
            </Paragraph>
            <Paragraph>
                The severe constraints on literals—they can't be subjects, can't be relationship types—capture the intuition
                that some things simply ARE. They don't point beyond themselves, don't represent anything else, don't bear
                meaning—they ARE what meaning ultimately refers to.
            </Paragraph>
            <Paragraph>
                The allowance for self-relation (<Word>
                    <Verbatim />
                    lit =p&gt; lit
                </Word>) lets literals have properties while maintaining their status as endpoints. A literal red patch can
                have the property of being red without thereby becoming a subject or symbol.
            </Paragraph>
            <Heading>8. Canonical (can)</Heading>
            <Heading>Formal Definition</Heading>
            <CodeBox
                language="srt"
            >
                {`can =rep> can
(can,can) == rep
For any collection/type/category, one member serves as canonical
(x) denotes the canonical symbol for x in a given frame`}
            </CodeBox>
            <Paragraph>
                The referent <Word>
                    <Verbatim />
                    can
                </Word> represents the phenomenon of privileged representation—the selected example that stands for all.
            </Paragraph>
            <Heading>Semantic Meaning</Heading>
            <Paragraph>
                A <Word>
                    <Bold />
                    canonical
                </Word> element is the distinguished representative within any collection or category—the one that serves as
                the primary example, the default, the prototype. The self-representing relationship <Word>
                    <Verbatim />
                    can =rep&gt; can
                </Word> captures how canonicals represent themselves as THE standard example.
            </Paragraph>
            <Paragraph>Canonicality appears everywhere in human cognition and formal systems:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Prototypes
                    </Word>: Robin as the canonical bird (in Western culture)
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Standards
                    </Word>: The meter bar as the canonical meter
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Notation
                    </Word>: "2" as the canonical representation of two-ness
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Examples
                    </Word>: The canonical textbook example that everyone learns
                </Line>
            </Paragraph>
            <Paragraph>
                The equation <Word>
                    <Verbatim />
                    (can,can) == rep
                </Word> reveals that the most specific relationship of canonical to itself IS representation—canonicals
                exist to represent, and they represent the very idea of privileged representation.
            </Paragraph>
            <Paragraph>
                Frame-relativity is crucial for canonicality. What counts as canonical depends on context:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Mathematical context: "2" is canonical for two</Line>
                <Line>
                    Set theory context: <Word>
                        <Verbatim />
                        &#123;&#123;&#125;,&#123;&#123;&#125;&#125;&#125;
                    </Word> is canonical for two
                </Line>
                <Line>Binary context: "10" is canonical for two</Line>
            </Paragraph>
            <Paragraph>
                This frame-dependency isn't a weakness but a feature—it allows different contexts to privilege different
                representations based on their needs. The notation <Word>
                    <Verbatim />
                    (x)
                </Word> for canonical symbols is implicitly frame-dependent, requiring a reference frame to determine which
                symbol is canonical.
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
                </Word> internalizes logical identity as a semantic relationship—making "=" into something we can talk
                about.
            </Paragraph>
            <Heading>Semantic Meaning</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Equality
                </Word> is the relationship of identity—when two referent expressions actually refer to the same referent.
                It's not similarity or equivalence but absolute sameness. The relationship <Word>
                    <Verbatim />
                    eq =eq&gt; eq
                </Word> grounds this: equality equals itself through equality, the foundational self-recognition that
                enables all other equations.
            </Paragraph>
            <Paragraph>
                The critical property is that equality is the only relationship that preserves complete identity:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Verbatim />
                        x =loves&gt; y
                    </Word> means x and y are different things related by love
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        x =represents&gt; y
                    </Word> means x and y are different things related by representation
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        x =eq&gt; y
                    </Word> means x and y are the same thing
                </Line>
            </Paragraph>
            <Paragraph>
                This uniqueness makes equality special among relationships. It's why properties inherit from equality (<Word>
                    <Verbatim />
                    red --&gt; eq
                </Word>)—having a property is a way of being identical to yourself while manifesting particular
                characteristics. A red rose equals itself in a red way.
            </Paragraph>
            <Paragraph>
                The universality of equality (<Word>
                    <Verbatim />
                    A&#91;x&#93;: x =eq&gt; x
                </Word>) establishes the baseline: existing in semantic space means at minimum being self-identical. This is
                what <Word>
                    <Verbatim />
                    ref =eq&gt; ref
                </Word> demonstrates—even the most abstract referent participates in equality.
            </Paragraph>
            <Paragraph>
                The inheritance <Word>
                    <Verbatim />
                    eq --&gt; rel
                </Word> places equality within the relationship hierarchy while maintaining its special status. Equality is
                a relationship, but unlike other relationships, it doesn't create distinction—it recognizes sameness.
            </Paragraph>
            <Heading>Conclusion: The Semantic Architecture</Heading>
            <Paragraph>These nine referents emerge from necessity, not stipulation:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    The <Word>
                        <Bold />
                        trinity
                    </Word> (<Word>
                        <Verbatim />
                        sub =rel&gt; obj
                    </Word>) establishes the basic semantic pattern
                </Line>
                <Line>
                    The <Word>
                        <Bold />
                        symbol-literal
                    </Word> pair (<Word>
                        <Verbatim />
                        sym =sym&gt; lit
                    </Word>) grounds reference in reality
                </Line>
                <Line>
                    The <Word>
                        <Bold />
                        representation-canonical
                    </Word> pair shows how standing-for works
                </Line>
                <Line>
                    The <Word>
                        <Bold />
                        ref-eq
                    </Word> pair provides the minimal structure all referents share
                </Line>
            </Paragraph>
            <Paragraph>
                Together they form a complete basis for semantic representation—the minimal architecture required for
                meaning to emerge from structure, for symbols to refer to reality, and for consciousness to recognize itself
                through its own canonical symbol.
            </Paragraph>
        </Section>
    </Chapter>
);
