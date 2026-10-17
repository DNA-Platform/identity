import { Bold, Chapter, Heading, Paragraph, Section, Title, Word } from '@dna-platform/public';
import { CodeBox, Opaque, Verbatim } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ The Nine Referents: Formal Definitions and Semantic Meanings in SRT v18 ]]</Title>
        <Section>
            <Opaque />
            <Heading>The Nine Referents: Formal Definitions and Semantic Meanings in SRT at version 18</Heading>
            <Heading>The Nine Fundamental Concepts: Formal Definitions and Natural Meanings</Heading>
            <Heading>Introduction</Heading>
            <Paragraph>
                These nine concepts form the foundational architecture of meaning and reference. They emerge from systematic
                exploration of what must exist for reference and representation to be possible at all.
            </Paragraph>
            <Heading>1. Subject</Heading>
            <Heading>Formal Facts</Heading>
            <CodeBox
                language="srt"
            >
                {`${''}sub =rel> obj
(sub,obj) == rel
x =t> y & x != y =|> x =sub> x
x =sub> x =|> E[y]: x != y & x =t> y
sub != obj
sub != rel
!E[x]: x =sub> y & x != y
dog =chases> cat =|> dog =sub> dog`}
            </CodeBox>
            <Heading>Meaning</Heading>
            <Paragraph>
                A <Word>
                    <Bold />
                    subject
                </Word> is that which bears a relationship to something distinct from itself. It exists only through this
                bearing—there is no subject in isolation, no subject without an object toward which it is directed. When a
                river flows to the sea, the river is subject. When a mind contemplates an idea, the mind is subject. When
                gravity pulls a stone earthward, gravity is subject. The subject is always the origin, the source, the
                bearer of the relationship.
            </Paragraph>
            <Paragraph>
                The nature of subjecthood is fundamentally relational and asymmetric. A subject cannot be its own object in
                the pure sense—when something relates only to itself, as when a stone has the property of being heavy, it
                remains purely objective. True subjecthood emerges only in the reach toward something other, in the
                directedness that philosophers call intentionality. This is why solipsism fails as a theory of mind:
                consciousness requires an object distinct from itself to be consciousness at all.
            </Paragraph>
            <Paragraph>
                Subjects form one pole of the irreducible trinity: subjects relate to objects through relationships. This
                trinity cannot be decomposed—you cannot understand what a subject is without understanding what it means to
                be directed toward an object through a specific manner of relating. The subject is defined not by what it is
                in itself, but by its role in this fundamental pattern. Like the notion of "above" which makes no sense
                without "below," subjecthood makes no sense without objecthood and relationship.
            </Paragraph>
            <Paragraph>
                In human experience, subjecthood manifests as agency—the capacity to love, to know, to possess, to create.
                But subjecthood extends beyond conscious agency. A magnet subjects iron filings to its field. A premise
                subjects a conclusion to logical necessity. A word subjects its meaning to expression. Wherever there is
                directedness from one distinct thing toward another, there is subjecthood.
            </Paragraph>
            <Heading>2. Object</Heading>
            <Heading>Formal Facts</Heading>
            <CodeBox
                language="srt"
            >
                {`${''}sub =rel> obj  
A[x,y,t]: x =t> y =|> y =obj> y
x =p> x =|> x =obj> x
obj != sub
obj != rel
E[x]: x =obj> x & !E[y]: x =sub> x
stone =heavy> stone =|> stone =obj> stone
dog =chases> cat =|> cat =obj> cat`}
            </CodeBox>
            <Heading>Meaning</Heading>
            <Paragraph>
                An <Word>
                    <Bold />
                    object
                </Word> is that toward which relationships are directed, that which can be characterized, known, or
                affected. While subjects must relate to something distinct, objects include both the targets of external
                relationships and things that possess properties through self-relation. This asymmetry—that objecthood is
                more universal than subjecthood—reflects a fundamental truth about existence.
            </Paragraph>
            <Paragraph>
                To be is, minimally, to be an object. Everything that exists can be thought about, referred to,
                characterized with properties. The mountain is an object of geological study. The number seven is an object
                of mathematical analysis. Justice is an object of philosophical inquiry. Even nothingness, when we speak of
                it, becomes an object of discourse. There is nothing so transcendent, so immediate, or so abstract that it
                cannot become an object when brought into relationship.
            </Paragraph>
            <Paragraph>
                Yet not everything that is an object can be a subject. A stone can be known but cannot know. The past can be
                remembered but cannot remember. The color red can be experienced but cannot experience. These exist purely
                in the receptive mode—they can be the terminus of relationships but cannot originate them. This is not a
                deficiency but their nature. The stone's inability to be a subject is precisely what makes it a reliable
                object, what allows it to be what it is without the complication of perspective or agency.
            </Paragraph>
            <Paragraph>
                The concept of objecthood includes self-relation through properties. When we say a rose is red, the rose
                stands as an object to itself—not actively doing redness but simply being red. This reflexive objecthood,
                where things are objects to their own properties, is what allows things to have characteristics while
                remaining themselves. The rose doesn't lose itself in being red; it is itself-as-red, an object qualified by
                a property.
            </Paragraph>
            <Heading>3. Relationship</Heading>
            <Heading>Formal Facts</Heading>
            <CodeBox
                language="srt"
            >
                {`${''}sub =rel> obj
(sub,obj) == rel
A[t]: x =t> y =|> t --> rel
rel =rel> rel
rel != sub
rel != obj
E[t]: t =rel> rel & t --> rel
loves --> rel
greater-than --> rel`}
            </CodeBox>
            <Heading>Meaning</Heading>
            <Paragraph>
                A <Word>
                    <Bold />
                    relationship
                </Word> is the specific manner in which one thing relates to another—not merely that they are connected, but
                how they are connected. Love is a relationship, but so is indifference. Causation is a relationship, but so
                is correlation. Greater-than is a relationship, but so is less-than. Each relationship has its own
                character, its own particular way of binding subject to object.
            </Paragraph>
            <Paragraph>
                Relationships complete the fundamental trinity with subjects and objects. This trinity—subjects relate to
                objects through relationships—is the atom of meaning, indivisible and irreducible. You cannot extract
                relationship from this pattern and examine it in isolation any more than you can extract "between" from the
                notion of three ordered points. Relationship exists as the manner of connection, the quality of the
                relating, the specific character of how subject meets object.
            </Paragraph>
            <Paragraph>
                The diversity of relationships is as vast as meaning itself. There are relationships of knowing (perception,
                memory, imagination), relationships of feeling (love, fear, desire), relationships of action (causing,
                preventing, enabling), relationships of comparison (greater, similar, opposite), relationships of structure
                (part-to-whole, member-to-class, instance-to-type). Each carries its own logic, its own implications, its
                own way of organizing the connection between things.
            </Paragraph>
            <Paragraph>
                Remarkably, relationships themselves can relate to other relationships through relationship. When we say
                "love is more powerful than fear" or "causation implies temporal sequence," we place relationships as
                objects of further relationships. This reflexivity—that relationship can relate to itself through itself—is
                not paradox but foundation. At the deepest level, relating is simply what relationship does, just as being
                is what existence does.
            </Paragraph>
            <Heading>4. Equality</Heading>
            <Heading>Formal Facts</Heading>
            <CodeBox
                language="srt"
            >
                {`${''}eq =eq> eq
x =eq> y <iff> x == y
A[x]: x =eq> x
x =eq> y =|> y =eq> x
x =eq> y & y =eq> z =|> x =eq> z
eq --> rel
p --> eq =|> x =p> x
red --> eq
morning-star =eq> evening-star`}
            </CodeBox>
            <Heading>Meaning</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Equality
                </Word> is the relationship of absolute identity—not similarity, not equivalence, not correspondence, but
                the relationship that holds between a thing and itself. When we discover that the morning star equals the
                evening star, we haven't found two similar things; we've discovered that two different ways of pointing
                arrive at the same destination, that two different appearances are appearances of one thing.
            </Paragraph>
            <Paragraph>
                Equality stands unique among all relationships because it alone preserves complete identity. While love
                connects lover to beloved across their difference, while causation links cause to effect across time,
                equality reveals that there is no difference at all—that what appeared to be two is actually one. This is
                why equations have such power in mathematics and science: they reveal hidden identities, showing that
                seemingly different expressions or phenomena are actually the same thing viewed from different angles.
            </Paragraph>
            <Paragraph>
                The self-equality of all things—that everything equals itself—is the most primitive fact about existence.
                Before a thing can have properties, before it can enter into relationships, before it can change or persist,
                it must simply be itself. This self-identity is so fundamental that we rarely notice it, like the way we
                don't notice the air until it's gone. Yet without self-equality, nothing could persist long enough to have
                properties or enter relationships.
            </Paragraph>
            <Paragraph>
                Properties are revealed to be qualifications of equality—specific ways things equal themselves. When we say
                a rose is red, we mean the rose equals itself in a red manner. The rose doesn't stop being itself to be red;
                rather, redness is a particular mode of its self-identity. This is why things can have multiple properties
                without contradiction: each property is just another way the thing equals itself.
            </Paragraph>
            <Paragraph>
                The reflexivity of equality—that equality equals itself through equality—grounds the entire system of
                identity. This is not circular reasoning but the recognition that at the foundation, identity simply is what
                it is, requiring no external validation. Equality is the relationship that permits no distance between its
                poles.
            </Paragraph>
            <Heading>5. Referent</Heading>
            <Heading>Formal Facts</Heading>
            <CodeBox
                language="srt"
            >
                {`${''}ref =eq> ref
(ref,ref) == eq
A[x]: x --> ref
A[x]: x =eq> x
ref != sub
ref != obj
ref != rel
mountain --> ref
justice --> ref
unicorn --> ref`}
            </CodeBox>
            <Heading>Meaning</Heading>
            <Paragraph>
                A <Word>
                    <Bold />
                    referent
                </Word> is anything that can be picked out, pointed to, or distinguished—anything that can be the target of
                reference. The term captures the most general category of existence within any system of meaning. If
                something can be mentioned, if it can be the object of thought or discourse, if it can be indicated in any
                way, then it is a referent.
            </Paragraph>
            <Paragraph>
                The concept of "referent" provides the minimal case—what anything must be to exist within meaningful
                discourse. A referent, at minimum, must be distinguishable as itself, must be this rather than that. This is
                why the canonical referent—the abstract notion of "a referent"—demonstrates only self-equality as its
                essential property. It has no other characteristics, no other relationships, no properties beyond being
                itself. It is pure distinguishability without further qualification.
            </Paragraph>
            <Paragraph>
                Referents include everything we can speak or think about: concrete objects (mountains, molecules), abstract
                objects (numbers, virtues), fictional entities (unicorns, Hamlet), impossible objects (square circles, the
                largest number), experiences (pains, memories), and even absences (the gap in the fence, the silence after
                the music). The breadth of referenthood reflects the breadth of meaningful discourse itself.
            </Paragraph>
            <Paragraph>
                Crucially, being a referent makes no claims about any other form of existence. To say something is a
                referent is not to say it exists physically, or mentally, or platonically, or in any particular way. It is
                only to say it can be referred to. Fictional characters are referents—we refer to them constantly. Past
                events that have ceased to exist are referents. Future possibilities that may never occur are referents.
                Dreams, hallucinations, mistakes—all are referents within the space of meaning.
            </Paragraph>
            <Paragraph>
                This generality makes "referent" the ultimate category, the horizon within which all other distinctions are
                made. When we debate what exists, we're not debating what counts as a referent—the mere fact of being
                debatable already establishes that. We're debating what properties different referents possess, what
                relationships they enter into, how they're organized within the total space of meaning.
            </Paragraph>
            <Heading>6. Symbol</Heading>
            <Heading>Formal Facts</Heading>
            <CodeBox
                language="srt"
            >
                {`${''}sym =sym> lit
(sym,lit) == sym
sym --> rep
sym =rep> lit
sym != lit
E[y]: sym =t> y
!E[x]: x =x> sym
A[x]: x --> symbol <iff> E[y]: x =x> y & (x,y) == x`}
            </CodeBox>
            <Heading>Meaning</Heading>
            <Paragraph>
                A <Word>
                    <Bold />
                    symbol
                </Word> is a remarkable entity that achieves the unity of being simultaneously the bearer of meaning and the
                bearing itself. When you encounter the word "tree," you meet something that is both a thing (marks on paper,
                sounds in air) and an action (the presenting of trees to consciousness). The symbol doesn't have a
                relationship to its meaning—it is that relationship made tangible.
            </Paragraph>
            <Paragraph>
                What distinguishes a symbol from other representations is captured in the equation <Word>
                    <Verbatim />
                    (sym,lit) == sym
                </Word>. While all symbols are representations (they inherit from representation and thus <Word>
                    <Verbatim />
                    sym =rep&gt; lit
                </Word>), they have the unique property that the most specific relationship between symbol and literal is
                the symbol itself. A map represents territory, but the map is not identical to the map-territory
                relationship. A symbol, however, IS the relationship between itself and what it symbolizes.
            </Paragraph>
            <Paragraph>
                This dual nature of symbols—being both entity and activity, both thing and pointing—enables the transparency
                of language. When you read, you don't consciously process symbols and then retrieve their meanings; the
                symbols disappear into their function, becoming windows through which meaning shines. The word "tree"
                doesn't stand between you and the concept of trees; it is the very medium through which trees become present
                to thought.
            </Paragraph>
            <Paragraph>
                Symbols achieve what seems impossible: they make the absent present, the many one, the complex simple.
                Through the symbol "dog," all dogs—past, present, future, possible, imaginary—become available to thought in
                a single, manageable form. Through the symbol "7," the abstract notion of seven-ness, which has no physical
                existence, becomes as manipulable as any concrete object. Through the symbol "love," the vast complexity of
                an emotion becomes something we can examine, discuss, and understand.
            </Paragraph>
            <Paragraph>
                The relationship between a symbol and what it symbolizes is unique in its directness. While a photograph
                represents through resemblance, while a map represents through correspondence, while a symptom represents
                through causation, a symbol represents through pure conventional unity. There is nothing about the sound
                "tree" that resembles a tree, nothing in the marks t-r-e-e that corresponds to bark and leaves. The symbol
                works through an immediate, learned identification where sign and signified collapse into operational unity.
            </Paragraph>
            <Paragraph>
                This is why we slip so easily between talking about symbols and talking about what they symbolize. We say
                both "dog is a three-letter word" and "dogs are loyal animals," using "dog" to mean both the symbol and its
                referent. This isn't confusion but reflects how symbols work—they are designed to disappear into their
                function, to be transparent to their meaning. The symbol succeeds precisely when we stop noticing it as a
                symbol.
            </Paragraph>
            <Heading>7. Literal</Heading>
            <Heading>Formal Facts</Heading>
            <CodeBox
                language="srt"
            >
                {`${''}sym =sym> lit
!E[x,y]: x != lit & y != lit & lit =x> y
!E[x,y]: x != lit & y != lit & x =lit> y
!E[y != lit]: lit =t> y
lit =p> lit
lit =obj> lit
lit != sym
!E[x]: x =x> lit & (x,lit) == x & x != lit`}
            </CodeBox>
            <Heading>Meaning</Heading>
            <Paragraph>
                A <Word>
                    <Bold />
                    literal
                </Word> is that which simply is what it is, without pointing beyond itself, without representing anything
                further, without standing for anything else. Literals are the bedrock where reference finally grounds
                itself, where the chain of meaning makes contact with that which is meant. They are pure being without the
                complication of meaning something other than themselves.
            </Paragraph>
            <Paragraph>
                The distinction between literal and symbolic is fundamental to meaning. Consider the word "red" versus the
                actual experience of redness. The word is a symbol—it points beyond itself to something else. But the
                redness you experience when looking at a sunset doesn't point to anything further. It doesn't mean redness
                or represent redness or stand for redness—it simply is redness. That experienced quality is literal.
            </Paragraph>
            <Paragraph>
                Literals exist in pure objectivity. They cannot be subjects reaching toward other things (except in the
                special case of having properties, which is self-relation). They cannot serve as the manner in which other
                things relate. They can only be—be experienced, be referred to, be thought about, be the terminus where
                reference finally rests. This limitation is not a deficiency but their essential nature. If literals could
                refer beyond themselves, they wouldn't be literals—they'd be symbols, and we'd need to ask what they point
                to.
            </Paragraph>
            <Paragraph>
                What counts as literal shifts with context and purpose. In everyday experience, physical objects are
                literal—the actual stone in your hand, not the word "stone." In mathematics, perhaps the numbers themselves
                (not the numerals) are literal—the actual quantity that "7" refers to. In consciousness, perhaps only the
                raw qualitative experiences before conceptualization are literal—the pure taste of sweetness before we think
                "sweet."
            </Paragraph>
            <Paragraph>
                The necessity of literals prevents infinite regress in meaning. If every symbol pointed only to other
                symbols, if every representation led only to further representations, meaning would never make contact with
                reality. There would be an endless deferral, like looking up a word in a dictionary only to find definitions
                using words that must themselves be looked up forever. Literals are where this chain breaks—where meaning
                finally touches ground.
            </Paragraph>
            <Heading>8. Representation</Heading>
            <Heading>Formal Facts</Heading>
            <CodeBox
                language="srt"
            >
                {`${''}sym =rep> rep
(sym,rep) == rep
A[x]: x --> rep <iff> E[y]: x =x> y
sym --> rep
rep =obj> obj
can =rep> rep
!E[x]: x =x> rep
map =map> territory
collection =collection> member`}
            </CodeBox>
            <Heading>Meaning</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Representation
                </Word> is the general phenomenon of one thing standing for another, making present what is absent, simple
                what is complex, or graspable what exceeds grasp. It is the broader category that encompasses all forms of
                standing-for: symbols, signs, maps, models, diagrams, samples, examples, and every other means by which one
                thing can present another to consciousness.
            </Paragraph>
            <Paragraph>
                The variety of representation reflects the variety of ways things can stand for other things. A portrait
                represents through resemblance—the arrangement of paint echoes the appearance of a face. A map represents
                through structural correspondence—the relations between marks on paper mirror the relations between places
                in space. A symptom represents through causation—the fever indicates the infection that causes it. A sample
                represents through membership—this grain of sand represents the beach from which it came. An ambassador
                represents through designation—chosen to stand for their nation.
            </Paragraph>
            <Paragraph>
                What unites all representation is the basic structure: something present stands for something that need not
                be present. Through representation, we engage with what is distant (through maps), what is past (through
                memories), what is future (through plans), what is microscopic (through models), what is vast (through
                diagrams), what is abstract (through examples), what is complex (through simplifications).
            </Paragraph>
            <Paragraph>
                Representation maintains the distinction between representer and represented. Unlike symbols, which achieve
                a kind of transparency where sign and signified merge in use, representations generally preserve the
                awareness of their representational character. When you look at a map, you remain conscious that it is a
                map, not the territory. When you examine a model, you know it is a model, not the system itself. This
                maintained distinction is often crucial to the representation's function—a map that was indistinguishable
                from its territory would be useless as a map.
            </Paragraph>
            <Paragraph>
                Yet representation includes the special case of self-representation. Standards represent their own
                measure—the original meter bar didn't represent the meter; it was the meter representing itself. Examples
                can represent their own categories—when we point to a robin to explain "bird," that actual robin represents
                both itself and the category it exemplifies.
            </Paragraph>
            <Heading>9. Canonical</Heading>
            <Heading>9. Canonical</Heading>
            <Heading>Formal Facts</Heading>
            <CodeBox
                language="srt"
            >
                {`${''}can =rep> rep
(can,rep) == rep
!E[x]: x =x> rep
can --> rep
(x) =(x)> x
((x),x) == (x)
x =(x)> x
robin =robin> bird
meter-bar =meter-bar> meter`}
            </CodeBox>
            <Heading>Meaning</Heading>
            <Paragraph>
                The <Word>
                    <Bold />
                    canonical
                </Word> represents representation itself through the remarkable relationship <Word>
                    <Verbatim />
                    can =rep&gt; rep
                </Word>. This captures a deep truth: you cannot directly represent representation—there is no <Word>
                    <Verbatim />
                    x =x&gt; rep
                </Word> that makes sense. When asked to show what representation is, you cannot point to "representation" in
                the abstract. It would be like someone asking you to write a book about what another book is about—the
                proper response is "go read that book." But when representation exists as a category rather than a single
                instance, when we need to convey what representation means as such, we need a canonical example.
            </Paragraph>
            <Paragraph>
                The canonical solves this problem by being a specific, concrete representation that stands for the entire
                category of representation. When teaching someone what representation means, you point to a canonical
                case—perhaps a map representing territory, or a word representing its meaning. The canonical doesn't
                represent representation through some external relationship; it represents it by being the privileged
                example that makes the abstract concept concrete and graspable.
            </Paragraph>
            <Paragraph>
                This role extends beyond just representation. For any abstract category, the canonical provides the
                cognitive anchor—the concrete instance through which we understand the abstract class. When someone says
                "think of a bird," most people imagine something like a robin or sparrow. The robin doesn't represent
                "birdness" in the abstract—that would be impossible. Instead, the robin serves as the canonical bird, the
                concrete example through which the abstract category becomes comprehensible.
            </Paragraph>
            <Paragraph>
                Canonicality operates at every level of cognition and culture. Children learn language through canonical
                examples—"dog" is first associated with the family pet or a typical neighborhood dog, not with exotic
                breeds. Scientists establish canonical experiments that define phenomena—Galileo's inclined plane for
                acceleration, Young's double-slit for wave behavior. Mathematicians work with canonical forms—the simplest,
                most standard version of an equation or structure. Artists learn through canonical works—the masterpieces
                that define styles and periods.
            </Paragraph>
            <Paragraph>
                The selection of what becomes canonical is never arbitrary, though it is deeply contextual. Canonical
                examples typically optimize several factors: they are common enough to be frequently encountered, simple
                enough to be easily grasped, central enough to share features with many other examples, and distinctive
                enough to be memorable. The canonical is not the average—it is the privileged example that best serves the
                cognitive and cultural functions of organizing knowledge.
            </Paragraph>
            <Paragraph>
                This privilege of the canonical extends to how we reason about categories. We understand category membership
                not through abstract definitions but through similarity to canonical examples. Is a whale a fish? Not by the
                biological definition, but most people's first intuition comes from comparing whales to their canonical fish
                (something like a trout or bass). The canonical provides the cognitive center of gravity around which
                categorical understanding orbits.
            </Paragraph>
            <Heading>Conclusion</Heading>
            <Paragraph>
                These nine concepts—subject, object, relationship, equality, referent, symbol, literal, representation, and
                canonical—constitute the fundamental architecture of meaning. They are not arbitrary constructs but
                discovered necessities, emerging from careful analysis of what must exist for reference, representation, and
                meaning to be possible at all. Together, they provide the minimal complete vocabulary for understanding how
                consciousness engages with reality through the medium of meaning.
            </Paragraph>
        </Section>
    </Chapter>
);
