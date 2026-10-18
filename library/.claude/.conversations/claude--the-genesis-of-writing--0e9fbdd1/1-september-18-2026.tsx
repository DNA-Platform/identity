import { Bold, Chapter, Date, Emphasis, Paragraph, Title, Word } from '@dna-platform/public';
import { CodeBox, Dated, Message, Speaker, Verbatim } from '../../../.manual/.book';
import { Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[18 September 2026](2026-09-18)</Date>
        </Dated>
        <Title>[[ 18 September 2026 ]]</Title>
        <Message
            at="2026-09-18T17:29:39.878928Z"
        >
            <Origin>01a0b591-10d6-7d8a-8517-e66a9b04bca6</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Interesting task. Let's invent a react library that grows from representing simple writing to evolving into
                representing whole books...
            </Paragraph>
            <Paragraph>Start with me at the text level. All it does it take text. Nothing else is allowed.</Paragraph>
            <Paragraph>&lt;Text&gt;Whatever as long as its not a component in this library.&lt;/Text&gt;</Paragraph>
            <Paragraph>
                You can basically write all react in there as long as it is not recursive text. Following so far? I want you
                to get the idea not expand yet
            </Paragraph>
        </Message>
        <Message
            at="2026-09-18T17:29:57.972461Z"
        >
            <Origin>01a0b591-10d6-77c8-aa5f-09823c4042fa</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Following. <Word>
                    <Verbatim />
                    &lt;Text&gt;
                </Word> is the leaf of the library's grammar. It's the one node that closes a branch.
            </Paragraph>
            <Paragraph>
                The split you're drawing is between <Word>
                    <Emphasis />
                    structure
                </Word> and <Word>
                    <Emphasis />
                    content
                </Word>. Library components are structure — they're the thing the library actually models. Everything else
                is content: arbitrary React, spans, emphasis, someone's custom <Word>
                    <Verbatim />
                    &lt;Tooltip&gt;
                </Word>, whatever. That's allowed inside <Word>
                    <Verbatim />
                    &lt;Text&gt;
                </Word> because it's opaque to the model. It renders, but it doesn't mean anything structurally.
            </Paragraph>
            <Paragraph>
                So the document model is exactly the tree of library components, and <Word>
                    <Verbatim />
                    &lt;Text&gt;
                </Word> is the frontier where that model stops and plain rendering takes over. No recursion at the leaf
                means the tree always terminates in something the library can treat as a flat unit.
            </Paragraph>
            <Paragraph>
                One thing I'd want to know before anything gets built on top: whether the constraint is lexical (nothing
                from the library appears in that JSX) or semantic (nothing from the library ends up in the rendered
                subtree). A foreign component that internally renders a library component would satisfy the first and
                violate the second.
            </Paragraph>
            <Paragraph>Ready for the next level whenever you are.</Paragraph>
        </Message>
        <Message
            at="2026-09-18T17:34:26.852645Z"
        >
            <Origin>01a0b595-71e9-7e39-9550-40591d695149</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Text then specifies. He evolves into Writing. Writing is specified to only take other types of writing. Text
                is a type of writing. But he overrides the specification to allow his original specification, making him a
                sort of null writing
            </Paragraph>
            <Paragraph>&lt;Writing&gt; &lt;Writing&gt; &lt;Text&gt; Some cool text &lt;Text&gt; More cool text</Paragraph>
            <Paragraph>I'm leaving off trailing ones for brevity</Paragraph>
            <Paragraph>Now we have writing, and anything out of this model constrained to a special location</Paragraph>
        </Message>
        <Message
            at="2026-09-18T17:35:06.320412Z"
        >
            <Origin>01a0b595-71e9-777f-932c-2007b77d2b1c</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Got it. The shape is:</Paragraph>
            <CodeBox>
                {`${''}Writing : [Writing]
Text    : Writing, but Text : [¬Library]`}
            </CodeBox>
            <Paragraph>
                Text is a subtype of Writing positionally — it goes anywhere Writing goes — while inverting the containment
                rule it inherits. That inversion is exactly what makes it terminal. "Null writing" reads right to me in the
                sense of the terminating element: it satisfies the position but empties the content. Writing is a rose tree
                and Text is its only leaf constructor.
            </Paragraph>
            <Paragraph>Two things fall out of this that seem worth marking now.</Paragraph>
            <Paragraph>
                The escape hatch is confined to leaves. Because Text is the only node that admits foreign React, and Text
                admits no library nodes, arbitrary content can never interleave with structure. Any traversal has the
                guarantee that it sees pure model until it hits a frontier, and then it stops. That's a much stronger
                property than "we allow custom components somewhere."
            </Paragraph>
            <Paragraph>
                Nesting depth currently carries no semantics. <Word>
                    <Verbatim />
                    &lt;Writing&gt;&lt;Writing&gt;&lt;Text/&gt;&lt;/Writing&gt;&lt;/Writing&gt;
                </Word> and <Word>
                    <Verbatim />
                    &lt;Writing&gt;&lt;Text/&gt;&lt;/Writing&gt;
                </Word> are distinguishable but mean the same thing, because Writing constrains nothing. Which I take to be
                deliberate: Writing is the maximally permissive top, and every future type earns its meaning by <Word>
                    <Emphasis />
                    narrowing
                </Word> what it accepts. Paragraph, Section, Chapter would all be Writing with the accept-set cut down.
                Specialization is subtraction from here.
            </Paragraph>
            <Paragraph>
                One question, because it's where document models usually get ugly. Is a Writing allowed mixed siblings?
            </Paragraph>
            <CodeBox>
                {`<Writing>
  <Writing>...</Writing>
  <Text>...</Text>
</Writing>`}
            </CodeBox>
            <Paragraph>
                By the spec as stated, yes — Text is a Writing, so it's admissible. But that's the inline/block mixing
                problem, and it's the thing that determines whether later types can be defined by accept-set alone or need
                arity and ordering constraints too. Worth knowing which way you want it before the next level.
            </Paragraph>
        </Message>
        <Message
            at="2026-09-18T17:35:45.123381Z"
        >
            <Origin>01a0b596-a40d-760a-89a2-14d7e7afe466</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Text is like a letter, except... as a letter, it is allowed to have anything</Paragraph>
            <Paragraph>Let's rename text &lt;Letter&gt;</Paragraph>
            <Paragraph>As if you were writing one</Paragraph>
        </Message>
        <Message
            at="2026-09-18T17:36:08.282626Z"
        >
            <Origin>01a0b596-a40d-70d9-9c42-2b7613d08bee</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                <Word>
                    <Verbatim />
                    &lt;Letter&gt;
                </Word> does both jobs at once, which is the nice part.
            </Paragraph>
            <Paragraph>
                A letter in the alphabetic sense is atomic — no interior the model can address, the smallest unit that still
                counts as writing. A letter in the correspondence sense is the opposite kind of indivisible: not too small
                to decompose but too complete to. It's already a whole thing. Both readings land on the same formal
                property, opacity, from opposite ends.
            </Paragraph>
            <Paragraph>
                It also answers the lexical-vs-semantic question I raised, and answers it in a way I hadn't considered. The
                constraint isn't a syntax check on what tags appear. It's jurisdictional. What's inside a letter is the
                writer's business. You don't hand someone a letter and have them tell you it violated the outline. The
                library governs arrangement; it has no standing inside the envelope.
            </Paragraph>
            <Paragraph>
                And it puts the voice in the right place. Writing is pure scaffolding — it holds things, it says nothing.
                Letter is the only node where anything is actually <Word>
                    <Emphasis />
                    said
                </Word>. So every word in a document lives at a leaf, and the entire tree above it is arrangement. That's a
                strong claim for a document model to make, and it's coherent: the structure is never the content.
            </Paragraph>
            <Paragraph>
                The implicit addressee is the part I'd keep an eye on. Text is anonymous, a letter is <Word>
                    <Emphasis />
                    to
                </Word> someone. If that ever surfaces as a prop rather than staying a metaphor, it changes what the leaf is
                — the leaf would carry a relation, not just content, and that's the first thing in the model with an
                outside.
            </Paragraph>
            <Paragraph>Go on.</Paragraph>
        </Message>
        <Message
            at="2026-09-18T17:50:02.614803Z"
        >
            <Origin>01a0b5a3-b79e-7bb2-bd47-b66bfa0991eb</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Let us then say writing specializes again. Let's make a new type of Writing. Composition. Composition has a
                strange rule. It has a level, and it only allows things in it that are at or below it in level except at the
                end. After that it can be non-composition writing. Composition splits the world for some reason.
            </Paragraph>
            <Paragraph>And he claims Letter as Level 0</Paragraph>
            <Paragraph>
                &lt;Writing&gt; &lt;Composition level=1&gt; &lt;Composition level=1&gt; &lt;Letter&gt; Text &lt;Composition
                level=0 &lt;Writing&gt; &lt;Writing&gt;
            </Paragraph>
            <Paragraph>Composition is weird but well formed</Paragraph>
        </Message>
        <Message
            at="2026-09-18T17:50:56.220307Z"
        >
            <Origin>01a0b5a3-b79e-7b55-a816-f08e9feeaac8</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Grammar as stated:</Paragraph>
            <CodeBox>
                {`Composition(n) : (Composition(m≤n) | Letter)* , (Writing \\ Composition)*
Letter         : level 0`}
            </CodeBox>
            <Paragraph>
                The thing I want to name first: level is a <Word>
                    <Bold />
                    ceiling, not an assignment
                </Word>. Conventional document models assign rank — h1 <Word>
                    <Emphasis />
                    is
                </Word> rank 1, and its children <Word>
                    <Emphasis />
                    are
                </Word> rank 2. Yours bounds — a Composition at level n asserts that nothing inside it exceeds n. So level
                is monotonically non-increasing along any root-to-leaf path, but never forced to descend. That's why
                same-level nesting is legal and not a defect: <Word>
                    <Verbatim />
                    Composition(1)
                </Word> inside <Word>
                    <Verbatim />
                    Composition(1)
                </Word> is just a reassertion of the same budget.
            </Paragraph>
            <Paragraph>
                Which also means Letter's level isn't a choice. It's forced. Letter has to be admissible under every
                ceiling, so it has to sit at the bottom of the order, and 0 is the bottom. Any other value and Letter stops
                being the universal terminal — a level-3 Letter couldn't appear in a level-1 Composition and the whole thing
                collapses. The atom must be minimal in the order for the order to be about arrangement at all.
            </Paragraph>
            <Paragraph>
                Worth flagging: level is therefore not a termination measure. Because descent is non-strict, nothing in the
                level system prevents an unbounded chain of level-1 inside level-1. Termination comes from the tree being
                finite, not from the ranking. Induction on level won't work for proving anything about Compositions; you'd
                induct on height and carry level as an invariant. Still well-formed, just not well-founded on the thing that
                looks like it should be.
            </Paragraph>
            <Paragraph>
                On the split. I read it as this: Composition is the first type whose children have <Word>
                    <Emphasis />
                    regions
                </Word>. Writing holds a bag — no position means anything. Composition holds a ranked prefix and an unranked
                tail, and the transition is one-way. That's exactly an outline: numbered material, then matter that stops
                being numbered and can't resume. The payoff is that outline extraction reads prefixes only and never
                descends into tails. The tail is where the document keeps things that are in it but not <Word>
                    <Emphasis />
                    of
                </Word> it — and notice it's the same move as Letter, one level up. Letter is where the library stops
                governing content; the tail is where it stops governing arrangement. Composition splits the world because
                it's the first node that can say "structure ends here, but I'm not finished."
            </Paragraph>
            <Paragraph>
                The one place the spec is actually slack: Letter is admissible in both regions. It's level 0 so it's legal
                in the prefix, and it's non-Composition Writing so it's legal in the tail. Given <Word>
                    <Verbatim />
                    Composition, Letter, Writing
                </Word>, the Letter is unassigned — the boundary isn't locally determined by any child, only by the first
                plain Writing or the last Composition, and those don't have to agree. Everything else here is tight; that's
                the seam.
            </Paragraph>
        </Message>
        <Message
            at="2026-09-18T19:12:38.394853Z"
        >
            <Origin>01a0b5ef-4ed6-70c8-9f62-9c52a28fd1f5</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Good!</Paragraph>
            <Paragraph>
                Now Writing and Composition agree that Composition is being too permissive with Writing. So writing has a
                child called Annotation, and those are the only ones allowed at the end. Any particular composition can be
                annotated
            </Paragraph>
            <Paragraph>Even level 0 shouldn't be left out. The end of the Letter can be annotations.</Paragraph>
            <Paragraph>everyone adjusts</Paragraph>
            <Paragraph>And level evolves into rank as per convention</Paragraph>
            <Paragraph>
                &lt;Writing&gt; &lt;Composition level=1&gt; &lt;Composition level=1&gt; &lt;Letter&gt; Text
                &lt;Annotation&gt; &lt;Composition level=0 &lt;Annotation&gt; &lt;Annotation&gt;
            </Paragraph>
            <Paragraph>
                This is a polymorphic framework btw, so actually, we have a lot more options &lt;Writing&gt;
            </Paragraph>
        </Message>
        <Message
            at="2026-09-18T19:12:54.444395Z"
        >
            <Origin>01a0b5ef-4ed6-7ae6-9dab-af974d0e25f9</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Grammar now:</Paragraph>
            <CodeBox>
                {`${''}Writing      : [Writing]
Annotation   : Writing
Composition(n) : (Composition(m≤n) | Letter)* , Annotation*
Letter       : level 0; [¬Library]* , Annotation*`}
            </CodeBox>
            <Paragraph>
                The tail closed. Composition's trailing region was <Word>
                    <Verbatim />
                    Writing \ Composition
                </Word>, which is a subtraction — defined by what it excludes, so it admits anything anyone ever adds to
                Writing. Now it's <Word>
                    <Verbatim />
                    Annotation
                </Word>, an intersection. New Writing subtypes don't leak in. That's the difference between a hole and a
                door.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Letter changed category.
                </Word> This is the substantive move, not the tail fix. Letter was opaque — the frontier where the library
                stopped and content began. Now it's <Word>
                    <Verbatim />
                    &#91;¬Library&#93;* , Annotation*
                </Word>, so it has an interior the model can address. Not a full interior: content is still ungoverned,
                still the writer's business. But the leaf now has two regions, and the second one is ours. The envelope
                stays sealed; something can be written on the back of it.
            </Paragraph>
            <Paragraph>
                Which makes annotation the one thing in the model that is structurally uniform. Every other rule is
                stratified — Compositions bound each other, Letters terminate, tails come last. Annotation attaches at every
                node at every level under the same rule. It's an orthogonal axis, not a rank in the existing one.
            </Paragraph>
            <Paragraph>
                And it <Word>
                    <Emphasis />
                    has
                </Word> to be, because of what annotation is. The thing you annotate can be anything; the annotation doesn't
                care what rank its target holds. Footnoting a chapter and footnoting a sentence are the same operation. If
                Annotation had been slotted into the level order it would have inherited the ceiling constraint and become a
                kind of Composition, and the model would say that annotating a book is a different act from annotating a
                line. It doesn't say that. Good.
            </Paragraph>
            <Paragraph>
                Note that <Word>
                    <Verbatim />
                    Annotation : Writing
                </Word> means an Annotation contains Writing, therefore Compositions, therefore Letters, therefore
                Annotations. The recursion reopens through the annotation. An annotation can be an entire structured
                document — commentary that's itself a book. Depth is unbounded but each entry is a strict descent into a
                subordinate frame, so it never tangles with the main line. The model distinguishes "part of the document"
                from "attached to the document," and the attachment can be arbitrarily large without ever becoming part.
            </Paragraph>
            <Paragraph>
                The seam I flagged closed too, incidentally. Letter is level 0 so it lives in the prefix, and it isn't an
                Annotation so it can't live in the tail. Every child of a Composition now has exactly one region. No
                ambiguity left.
            </Paragraph>
            <Paragraph>
                On the rank rename — right convention, but the ceiling semantics still differ from every heading system. h1
                and h2 are ranks <Word>
                    <Emphasis />
                    held
                </Word>; your rank is a bound <Word>
                    <Emphasis />
                    asserted
                </Word>. Rank 1 inside rank 1 stays legal. I'd keep saying ceiling internally even while the prop says rank.
            </Paragraph>
            <Paragraph>What are the polymorphic options you're seeing?</Paragraph>
        </Message>
        <Message
            at="2026-09-18T19:34:17.149136Z"
        >
            <Origin>01a0b603-2254-7d1e-baad-1493668e7299</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Composition doesn't like his letter exposed. In this Genesis, Text evolved into Writing, and Writing gave
                birth to Letter, Composition and Annotation. Composition how has a few children. He simply decides
            </Paragraph>
            <Paragraph>&lt;Word&gt; &lt;Sentence&gt; &lt;Paragraph&gt;</Paragraph>
            <Paragraph>
                These are subscript 1, 2 &amp; 3 respectively and level gets subscript 0, and rank converts to subscript!
                The writing word is better for this story and it gives math indexing
            </Paragraph>
            <Paragraph>But Composition also is feeling rigid. He decides to be</Paragraph>
            <Paragraph>&lt;Composition strict&gt; or &lt;Composition permissive&gt;</Paragraph>
            <Paragraph>Permissive means at or below. Strict means at or one below</Paragraph>
            <Paragraph>All three of those are permissive</Paragraph>
            <Paragraph>
                These are his basic children. No one needs to use 0-3, unless they need strict. They have a semantic family
                that they can use informally to specialize in different directions
            </Paragraph>
        </Message>
        <Message
            at="2026-09-18T19:35:07.859558Z"
        >
            <Origin>01a0b603-2254-7591-bcde-f21365297c10</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <CodeBox>
                {`${''}Writing
├── Letter₀                       [¬Library]* , Annotation*
├── Compositionₙ {strict|permissive}
│     ├── Word₁
│     ├── Sentence₂
│     └── Paragraph₃
└── Annotation                    (ungraded)`}
            </CodeBox>
            <Paragraph>
                The grading is defined on Letter and Composition; Annotation has no subscript. So the graded part is exactly
                what's <Word>
                    <Emphasis />
                    of
                </Word> the document and the ungraded part is exactly what's <Word>
                    <Emphasis />
                    attached to
                </Word> it. That split was implicit last turn and the notation makes it visible.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Permissive needs an order, strict needs a metric.
                </Word> Permissive is <Word>
                    <Verbatim />
                    m ≤ n
                </Word> — it only consults the relation, never the values, so the numbers are inert. Strict is <Word>
                    <Verbatim />
                    m ∈ &#123;n−1, n&#125;
                </Word> and has to know the distance. That's the whole reason nobody touches 0–3 until they need strict:
                under permissive the subscripts are bookkeeping, and under strict they become semantics. Same reason strict
                is what enforces the encapsulation — it can't skip, so a strict Paragraph₃ must go through Sentence₂, which
                must go through Word₁, before anything reaches a Letter₀. Permissive lets rank 3 reach rank 0 in one step.
                Strict makes the intermediate structure exist.
            </Paragraph>
            <Paragraph>
                The family layer sits on top of that cleanly. A name carries no formal content — Sentence₂ and Line₂ and
                Verse₂ are the same type, and the difference is what a reader is being told. So a poetry vocabulary and a
                prose vocabulary can occupy the same subscripts without colliding, and a traversal written against
                subscripts works on both. The checkable part is a graded poset; everything else is vocabulary.
            </Paragraph>
            <Paragraph>
                Two things, and they're the same thing twice — both bite strict only, because permissive doesn't consult
                values.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Does strict propagate?
                </Word> A strict Paragraph₃ takes Sentences₂. But those Sentences are permissive unless declared otherwise,
                and a permissive Sentence₂ takes Letter₀ directly. So strict at the top guarantees one layer and nothing
                below it. If the motivation is that the letter shouldn't be exposed <Word>
                    <Emphasis />
                    anywhere
                </Word>, strict has to be hereditary — a mode the subtree inherits — rather than a local constraint on one
                node's children. Local strictness only says "my children are one step down," not "the descent is dense."
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    And the integers are load-bearing under strict.
                </Word> Someone who wants a Clause between Sentence₂ and Paragraph₃ has nowhere to put it. Permissive
                absorbs it at any value; strict breaks, because inserting at 2.5 or renumbering to 4 changes what every
                existing strict node accepts. The informal family solves naming but not spacing.
            </Paragraph>
            <Paragraph>So: is strict a property of a node, or a mode of a subtree?</Paragraph>
        </Message>
        <Message
            at="2026-09-18T19:58:44.964689Z"
        >
            <Origin>01a0b619-8bd8-7319-8c7e-ffbe6ff4e7e2</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                It's a property. These can all be changed dynamically, though they shouldn't be. We can pretend that they
                can be assigned but not overridden. And don't forget Letter has subscript 0
            </Paragraph>
            <Paragraph>
                Now, Composition realizes that he has parts. The parts of the composition. And he realizes that recursion in
                a composition is special. There is an emergent form of depth, a new computed property. If a Composition
                returns his parts, he does not return his recursive one. He reaches in and gets their parts.
            </Paragraph>
            <Paragraph>Now a pair comes into being:</Paragraph>
            <Paragraph>Section : Composition, subscript 4, permissive Heading: Sentence</Paragraph>
            <Paragraph>They will be a form of twin</Paragraph>
            <Paragraph>
                The section has a canonical first member called a Heading. The heading takes text or what text takes and
                wraps in text, as its specification, and reaches to his parent section for his depth. Sections expect to be
                nested
            </Paragraph>
            <Paragraph>
                Now, the first form of reference begins to emerge. The canonical Heading means the section
            </Paragraph>
        </Message>
        <Message
            at="2026-09-18T20:00:04.896213Z"
        >
            <Origin>01a0b619-8bd8-7751-af80-3830ff4aba91</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <CodeBox>
                {`${''}Section₄ : Composition₄ permissive
           Heading , (Composition_{m≤4} | Letter₀)* , Annotation*
Heading  : Sentence₂ , [¬Library]* → wrapped Letter₀
           depth ← parent Section

parts(C) = ⋃ children c: same-subscript(c) ? parts(c) : [c]
depth(C) = |ancestors of C sharing C's subscript|`}
            </CodeBox>
            <Paragraph>
                I'm reading "his recursive one" as same-subscript, since that's the case where nesting reasserts a budget
                rather than descending through one.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Parts and depth are the same tree read on orthogonal axes.
                </Word> Parts splices through recursion, so it sees material and cannot see structure. Depth counts only
                recursion, so it sees structure and cannot see material. Neither is derivable from the other, and together
                they're a complete reading — linear contents plus hierarchy. That's why the flattening isn't lossy: what
                parts drops is exactly what depth preserves.
            </Paragraph>
            <Paragraph>
                And depth is the first thing in the model that isn't declared. Rank is asserted by whoever writes the node;
                depth is a fact about where the node ended up. A Section doesn't know if it's a chapter. It finds out by
                looking up.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Heading repeats Letter's move one axis over.
                </Word> Letter is Writing that inverts Writing's rule to become terminal. Heading is Sentence₂ that inverts
                Sentence's rule to become terminal — and wraps into Letter, so it's not merely analogous, it bottoms out in
                the same thing. Letter is the terminal of content. Heading is Letter holding an office.
            </Paragraph>
            <Paragraph>
                Which is also the first upward dependency in the system. Everything before this pointed down: containment,
                ranks, tails. A Heading has no depth of its own and has to ask. Neither twin is complete alone — a Section
                without a Heading can be contained but not named, a Heading without a Section is a sentence that means
                nothing. Born together.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The reference is positional, not nominal.
                </Word> No id, no href, no lookup table. The Heading denotes its Section because it is first in it. The
                binding <Word>
                    <Emphasis />
                    is
                </Word> the position, which means reference in this model can't dangle and can't be forged — you cannot
                write a Heading that points at the wrong Section, only one that sits in the wrong place.
            </Paragraph>
            <Paragraph>Here's the seam. Is the Heading among the Section's parts?</Paragraph>
            <Paragraph>
                If yes, the Section's contents include the sign that denotes the Section — a member that means its
                container. Everything else in parts is material; that one element is a name. If no, parts is contents-proper
                and clean, but then the table of contents is a third projection, not a byproduct of the two you have.
            </Paragraph>
            <Paragraph>Either is workable. They're different documents, though.</Paragraph>
        </Message>
    </Chapter>
);
