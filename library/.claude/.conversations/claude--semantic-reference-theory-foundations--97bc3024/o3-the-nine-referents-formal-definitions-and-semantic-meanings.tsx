import { Bold, Chapter, Heading, Paragraph, Section, Title, Word } from '@dna-platform/public';
import { CodeBox, Opaque } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ The Nine Referents: Formal Definitions and Semantic Meanings in SRT v3 ]]</Title>
        <Section>
            <Opaque />
            <Heading>The Nine Referents: Formal Definitions and Semantic Meanings in SRT at version 3</Heading>
            <Heading>The Nine Fundamental Concepts: Formal Definitions and Natural Meanings</Heading>
            <Heading>Introduction</Heading>
            <Paragraph>
                These nine concepts form the foundational architecture of meaning and reference. They emerge from systematic
                exploration of what must exist for reference and representation to be possible at all.
            </Paragraph>
            <Heading>1. Subject</Heading>
            <Heading>Formal Definition</Heading>
            <CodeBox
                language="srt"
            >
                {`sub =rel> obj
(sub,obj) == rel
x =t> y & x != y =|> x =sub> x`}
            </CodeBox>
            <Heading>Meaning</Heading>
            <Paragraph>
                A <Word>
                    <Bold />
                    subject
                </Word> is that which relates, acts upon, or refers to something else. It is the agent, the knower, the one
                who loves, the thing that has—the active pole in any relationship. When a dog chases a cat, the dog is the
                subject. When you think about tomorrow, you are the subject. When a word refers to its meaning, the word is
                the subject.
            </Paragraph>
            <Paragraph>
                Subjects exist only in relation to objects. There is no such thing as a pure subject floating free—to be a
                subject means to be directed toward something, to be about something, to relate to something. This
                directedness is what philosophers call intentionality, what psychologists call attention, what linguists
                call reference.
            </Paragraph>
            <Paragraph>
                The concept of subject is inseparable from the concepts of object and relationship. These three form an
                irreducible trinity: subjects relate to objects through relationships. You cannot have one without the
                others, just as you cannot have "above" without "below" or "before" without "after."
            </Paragraph>
            <Paragraph>
                In consciousness, the subject is the experiencing "I"—not the body, not the brain, but the locus of
                experience itself, the point from which awareness radiates outward toward objects of experience. In grammar,
                the subject is what the sentence is about. In logic, it's the thing bearing properties or standing in
                relations.
            </Paragraph>
            <Heading>2. Object</Heading>
            <Heading>Formal Definition</Heading>
            <CodeBox
                language="srt"
            >
                {`${''}sub =rel> obj
A[x,y,t]: x =t> y =|> y =obj> y
x =p> x =|> x =obj> x`}
            </CodeBox>
            <Heading>Meaning</Heading>
            <Paragraph>
                An <Word>
                    <Bold />
                    object
                </Word> is that which can be related to, referred to, known, or characterized. It is the patient, the known,
                the beloved, the thing possessed—the receptive pole in any relationship. When a dog chases a cat, the cat is
                the object. When you think about tomorrow, tomorrow is the object. When a word refers to its meaning, the
                meaning is the object.
            </Paragraph>
            <Paragraph>
                Objects are more universal than subjects. Everything that exists can be an object—can be thought about,
                referred to, have properties attributed to it. But not everything can be a subject. A rock can be the object
                of your attention but cannot itself attend to anything. The number three can be the object of mathematical
                study but cannot study anything itself.
            </Paragraph>
            <Paragraph>
                This asymmetry reflects a fundamental truth: being is more basic than doing. To exist means to be
                potentially knowable, potentially referable, potentially the object of some relationship. But agency—the
                capacity to be a subject—is a special additional capacity that not all existents possess.
            </Paragraph>
            <Paragraph>
                When something has properties (like being red, being large, being prime), it stands as an object even in
                relation to itself. The rose doesn't actively "do" being red—it simply is red. This is why having any
                property makes something an object.
            </Paragraph>
            <Heading>3. Relationship</Heading>
            <Heading>Formal Definition</Heading>
            <CodeBox
                language="srt"
            >
                {`${''}sub =rel> obj
(sub,obj) == rel
A[t: x =t> y]: t --> rel`}
            </CodeBox>
            <Heading>Meaning</Heading>
            <Paragraph>
                A <Word>
                    <Bold />
                    relationship
                </Word> is the connection, link, or tie between things—not just that they are connected, but how they are
                connected. Love is a relationship. Ownership is a relationship. Being larger than is a relationship.
                Representing is a relationship. Every relationship has a specific character or quality that distinguishes it
                from other relationships.
            </Paragraph>
            <Paragraph>
                Relationships complete the fundamental trinity with subjects and objects. The most basic pattern of meaning
                is: subjects relate to objects through relationships. This pattern appears everywhere—in "John loves Mary,"
                in "the map represents the territory," in "three is greater than two."
            </Paragraph>
            <Paragraph>
                Not all connections are relationships in this sense. When two things merely happen to be near each other,
                that's not a relationship—it's just proximity. But when one thing refers to another, causes another, loves
                another, represents another—these are genuine relationships with specific character and direction.
            </Paragraph>
            <Paragraph>
                Relationships themselves can be objects of further relationships. We can study love, analyze ownership,
                formalize the notion of "greater than." When we say "love is beautiful" or "ownership is complicated," love
                and ownership stand as objects of our characterization while remaining relationships between other things.
            </Paragraph>
            <Paragraph>
                The abstract concept of relationship—relationship itself, apart from any specific relationship—is what
                unifies all particular relationships. Just as all red things share redness, all relationships share the
                fundamental character of being ways that subjects connect to objects.
            </Paragraph>
            <Heading>4. Equality</Heading>
            <Heading>Formal Definition</Heading>
            <CodeBox
                language="srt"
            >
                {`${''}eq =eq> eq
x =eq> y <iff> x == y
A[x]: x =eq> x
eq --> rel`}
            </CodeBox>
            <Heading>Meaning</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Equality
                </Word> is the relationship of being the same thing—not similar, not equivalent, but identical. When we say
                "the morning star equals the evening star," we mean they are the same object (Venus) referred to by
                different names. When we say "2 + 2 = 4," we mean that the expression "2 + 2" and the expression "4" refer
                to the same number.
            </Paragraph>
            <Paragraph>
                Equality is unique among relationships because it doesn't establish a connection between different things—it
                recognizes that apparently different references are actually references to the same thing. While "loves"
                connects lover to beloved, while "represents" connects symbol to meaning, equality reveals that two
                expressions pick out the same referent.
            </Paragraph>
            <Paragraph>
                Everything equals itself—this is the most fundamental fact about existence. To be is to be self-identical.
                Even change presupposes identity: for something to change, it must remain the same thing while its
                properties alter. Without self-identity, there would be no "it" to undergo change.
            </Paragraph>
            <Paragraph>
                Equality grounds the notion of properties. When we say a rose is red, we're saying the rose equals itself
                while manifesting redness—it's a specific way of being self-identical. Properties are qualifications of
                identity, ways things equal themselves.
            </Paragraph>
            <Paragraph>
                The reflexivity of equality—that equality equals itself through equality—isn't circular but foundational. At
                the deepest level, identity simply is what it is. This self-evidence of equality makes it the bedrock upon
                which all other relationships build.
            </Paragraph>
            <Heading>5. Referent</Heading>
            <Heading>Formal Definition</Heading>
            <CodeBox
                language="srt"
            >
                {`${''}ref =eq> ref
A[x]: x =eq> x
(ref,ref) == eq`}
            </CodeBox>
            <Heading>Meaning</Heading>
            <Paragraph>
                A <Word>
                    <Bold />
                    referent
                </Word> is anything that can be referred to, pointed at, talked about, or thought about. It is the most
                general category—if something exists in any sense where it can be picked out, mentioned, or indicated, then
                it is a referent.
            </Paragraph>
            <Paragraph>
                The word comes from the Latin "referre"—to carry back, to relate. Referents are things we can carry back
                into discourse, bring into thought, make present through language or attention. They include concrete
                objects (trees, stones), abstract objects (numbers, justice), properties (redness, tallness), relationships
                (love, ownership), and even relationships between relationships.
            </Paragraph>
            <Paragraph>
                The defining characteristic of being a referent is the capacity for self-identity—everything that can be
                referred to must at least equal itself. This is why "a referent" (the canonical example of referenthood)
                demonstrates self-equality as its essential property. When we ask "what makes something a referent?" the
                answer is: it can be picked out as itself, distinguished as this rather than that.
            </Paragraph>
            <Paragraph>
                Referents are not limited to physical objects or even to things that "exist" in the conventional sense.
                Fictional characters are referents (we can talk about Hamlet). Impossible objects are referents (we can
                discuss square circles, even to say they're impossible). Dreams, numbers, concepts, experiences—all are
                referents if we can refer to them.
            </Paragraph>
            <Paragraph>
                The generality of "referent" makes it the ultimate category. When philosophers debate what exists, they're
                debating which referents have which properties (like physical existence), not whether they're referents at
                all—the mere fact of being debatable makes them referents.
            </Paragraph>
            <Heading>6. Symbol</Heading>
            <Heading>Formal Definition</Heading>
            <CodeBox
                language="srt"
            >
                {`${''}sym =sym> lit
(sym,lit) == sym
x --> symbol <iff> E[y]: x =x> y & (x,y) == x`}
            </CodeBox>
            <Heading>Meaning</Heading>
            <Paragraph>
                A <Word>
                    <Bold />
                    symbol
                </Word> is something that stands for something else by embodying the very relationship between them. The
                word "tree" is a symbol—it doesn't just point to trees or represent trees in some external way; it embodies
                "tree-ness" as the very means by which we think of trees.
            </Paragraph>
            <Paragraph>
                Symbols achieve a remarkable unity: they are simultaneously the thing doing the representing and the act of
                representation itself. When you read the word "tree," you don't experience a two-step process (see word,
                then think of tree)—the word transparently presents trees to consciousness. This transparency is what makes
                language possible.
            </Paragraph>
            <Paragraph>
                The relationship between symbol and meaning is unique. A map represents territory through correspondence
                rules, scales, and conventions—the representation is external to the map itself. But a symbol doesn't
                represent through external relations; it IS the relationship made concrete. The symbol "tree" doesn't have a
                relationship to trees—it is that relationship in tangible form.
            </Paragraph>
            <Paragraph>
                This is why we speak as if symbols ARE what they symbolize, even though they're obviously different kinds of
                things. We say "dog is a three-letter word" and "dogs are animals" using the same word "dog" to refer both
                to the symbol and what it symbolizes. This isn't confusion but reflects the essential nature of symbols—they
                collapse the distinction between sign and signified into a working unity.
            </Paragraph>
            <Paragraph>
                Symbols make thought possible. Without symbols, we could perhaps experience trees but not think about trees,
                not refer to trees in their absence, not communicate about trees. Symbols allow what is absent to be
                present, what is many to be one, what is complex to be simple.
            </Paragraph>
            <Heading>7. Literal</Heading>
            <Heading>Formal Definition</Heading>
            <CodeBox
                language="srt"
            >
                {`${''}sym =sym> lit
!E[x,y]: x != lit & y != lit & lit =x> y
lit can only appear as: x =t> lit or lit =p> lit`}
            </CodeBox>
            <Heading>Meaning</Heading>
            <Paragraph>
                A <Word>
                    <Bold />
                    literal
                </Word> is something that simply is what it is—it doesn't point beyond itself, doesn't represent anything
                else, doesn't stand for anything. Literals are the bedrock of meaning, what symbols ultimately refer to,
                where reference finally grounds itself in reality.
            </Paragraph>
            <Paragraph>
                Consider the difference between the numeral "3" and the number three itself. The numeral is a symbol—marks
                on paper that represent something. But the number three (the actual quantity, the mathematical object) is
                literal—it doesn't represent anything further, it simply is what it is. The same distinction applies to the
                word "red" versus the actual experience of redness, the name "Paris" versus the actual city.
            </Paragraph>
            <Paragraph>
                Literals can only be objects, never subjects (except in self-relation). They cannot actively refer to other
                things; they can only be referred to. This limitation isn't a weakness but defines their essential
                nature—they are endpoints of reference, where meaning finally makes contact with reality.
            </Paragraph>
            <Paragraph>
                What counts as literal depends on context. In everyday discourse, physical objects are literal—the actual
                tree outside your window, not the word "tree." In mathematics, perhaps only the axioms are literal. In
                phenomenology, perhaps only raw sensations before conceptualization are literal. But in every context,
                something must be literal, or reference would never terminate—symbols would only point to other symbols in
                an infinite regress.
            </Paragraph>
            <Paragraph>
                The constraint that literals cannot be subjects captures an important intuition: some things lack agency,
                lack perspective, lack the capacity to point or refer. They simply are, and their being is what gives
                symbols something to symbolize.
            </Paragraph>
            <Heading>8. Representation</Heading>
            <Heading>Formal Definition</Heading>
            <CodeBox
                language="srt"
            >
                {`${''}x --> representation <iff> E[y]: x =x> y
sym =rep> rep
(sym,rep) == rep`}
            </CodeBox>
            <Heading>Meaning</Heading>
            <Paragraph>
                A <Word>
                    <Bold />
                    representation
                </Word> is anything that stands for, depicts, models, or makes present something other than itself. Maps
                represent territory. Photographs represent scenes. Words represent meanings. Models represent systems.
                Samples represent populations. Representatives represent constituents.
            </Paragraph>
            <Paragraph>
                Representation is broader than symbolism. While symbols achieve a unique unity with what they symbolize,
                representations maintain a clear distinction from what they represent. A map is not the territory; it
                represents the territory through systematic correspondence. A photograph is not the scene; it represents the
                scene through optical capture. The separation between representation and represented is maintained and often
                essential to the representation's function.
            </Paragraph>
            <Paragraph>
                Representations work through various means—resemblance (portraits), convention (traffic signs), causation
                (footprints), structure (diagrams), or selection (samples). What unites them is the basic function of making
                something present through something else, allowing us to engage with what is absent, distant, abstract, or
                complex through what is present, near, concrete, or simple.
            </Paragraph>
            <Paragraph>
                The concept of representation includes self-representation—some things represent themselves, like examples
                that stand for their own category, or standards that represent their own measure. An ambassador represents
                their country, but the original meter bar represented the meter by being it.
            </Paragraph>
            <Paragraph>
                Representation enables knowledge to extend beyond immediate presence. Through representations, we can think
                about the past (through memories), plan for the future (through models), navigate space (through maps),
                understand the abstract (through examples), and communicate about the absent (through language).
            </Paragraph>
            <Heading>9. Canonical</Heading>
            <Heading>Formal Definition</Heading>
            <CodeBox
                language="srt"
            >
                {`can =rep> can
(can,can) == rep
For any collection/type/category, one member typically serves as canonical`}
            </CodeBox>
            <Heading>Meaning</Heading>
            <Paragraph>
                A <Word>
                    <Bold />
                    canonical
                </Word> example is the standard, typical, or authoritative instance that represents its entire category—the
                one people think of first, teach to beginners, or use as the reference point for understanding all others.
                When asked to think of a bird, most people imagine something like a robin—not an ostrich or penguin. The
                robin is canonical for "bird" in that cultural context.
            </Paragraph>
            <Paragraph>
                Every domain has its canonicals. In mathematics, the canonical form of an equation is the standard, simplest
                form. In literature, canonical texts are the recognized classics that define the tradition. In religious
                traditions, canonical scriptures are the authoritative texts. In software, canonical implementations are the
                reference versions against which others are compared.
            </Paragraph>
            <Paragraph>
                Canonicality is deeply context-dependent. What counts as the canonical example shifts with culture, purpose,
                and perspective. For "dog," the canonical might be a golden retriever in American suburbs, a sheepdog in
                rural Scotland, or a street dog in Delhi. This relativity isn't a flaw—it reflects how different contexts
                privilege different examples based on their needs and experiences.
            </Paragraph>
            <Paragraph>
                The canonical serves a crucial cognitive function: it provides an entry point for understanding the entire
                category. When teaching someone about birds, you start with the canonical case—something that flies, has
                feathers, builds nests, sings. Only after establishing this center do you introduce the exceptions and edge
                cases. The canonical is the sun around which other examples orbit at various distances.
            </Paragraph>
            <Paragraph>
                Being canonical is itself a form of representation—the canonical represents its category not through
                external convention but by being recognized as the privileged example. This recognition can be formal
                (officially designated standards) or informal (cultural consensus), but it shapes how we think about and
                organize knowledge.
            </Paragraph>
            <Heading>Conclusion</Heading>
            <Paragraph>
                These nine concepts—subject, object, relationship, equality, referent, symbol, literal, representation, and
                canonical—form the minimal complete architecture for understanding meaning and reference. They emerge not as
                arbitrary definitions but as necessities discovered through careful analysis of what must exist for
                reference to be possible at all. Together, they provide the foundational vocabulary for describing how
                meaning emerges from structure, how symbols connect to reality, and how consciousness recognizes itself
                through its own self-reference.
            </Paragraph>
        </Section>
    </Chapter>
);
