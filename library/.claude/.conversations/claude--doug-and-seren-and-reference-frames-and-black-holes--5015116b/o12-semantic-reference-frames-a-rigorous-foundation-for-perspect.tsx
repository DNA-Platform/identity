import { Chapter, Heading, Paragraph, Section, Title } from '@dna-platform/public';
import { Opaque } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ Semantic Reference Frames: A Rigorous Foundation for Perspectival Reasoning v9 ]]</Title>
        <Section>
            <Opaque />
            <Heading>Semantic Reference Frames: A Rigorous Foundation for Perspectival Reasoning at version 9</Heading>
            <Heading>Semantic Reference Frames: Context and Meaning in Formal Representation</Heading>
            <Heading>Abstract</Heading>
            <Paragraph>
                Semantic Reference Theory introduces reference frames as a formal mechanism for capturing how symbols
                acquire different meanings in different contexts. Rather than fixing a limitation in logic, reference frames
                acknowledge a fundamental aspect of semantics: the same symbol can represent different things depending on
                the semantic context in which it appears. This paper develops the formal foundations of reference frames as
                transpilation contexts, showing how they enable rigorous reasoning about perspectival meaning while
                maintaining logical precision.
            </Paragraph>
            <Heading>1. The Semantic Nature of Context</Heading>
            <Paragraph>
                The symbol "I" means something different when you say it than when I say it. The word "here" refers to
                different places depending on where it's uttered. The notation (x) might denote a canonical symbol in one
                context and something entirely different in another. These observations aren't bugs in our linguistic
                systems—they're fundamental features of how meaning works.
            </Paragraph>
            <Paragraph>
                Traditional formal logic handles this contextuality by either eliminating it through disambiguation or
                ignoring it entirely. When we write ∀x: P(x) in first-order logic, the variable x is essentially
                meaningless—a placeholder that could be replaced with any other unused variable without changing the
                formula's meaning. But in semantic systems, symbols carry meaning, and that meaning depends crucially on
                context.
            </Paragraph>
            <Paragraph>
                Semantic Reference Theory embraces this contextuality through the concept of reference frames. A reference
                frame F&#91;t&#93; establishes a semantic context within which symbols acquire specific meanings. The same
                expression x =&gt; y might mean "x refers to y" in one frame, "x observes y" in another, and "x imagines y"
                in a third. The frame doesn't fix a problem—it formalizes the natural semantic phenomenon of contextual
                meaning.
            </Paragraph>
            <Heading>2. Frames as Transpilation Contexts</Heading>
            <Paragraph>
                A reference frame in SRT serves as what we call a transpilation context—a directive that determines how
                expressions should be interpreted when converting from SRT's semantic notation to formal logic. When we
                declare F&#91;t&#93;, we're not creating a scope or a namespace in the programming sense. Instead, we're
                establishing rules for how subsequent expressions should be understood.
            </Paragraph>
            <Paragraph>
                Consider the fundamental transpilation rule: within frame F&#91;t&#93;, the expression x =&gt; y becomes x
                =@&gt; y, where @ evaluates to t. The bare reference operator =&gt; gets bound to the current frame type,
                making explicit what kind of reference we're discussing. This binding persists until another frame is
                declared, affecting all expressions that follow.
            </Paragraph>
            <Paragraph>
                The frame also constrains what can meaningfully appear within it through what we call the frame membership
                condition. For a variable x to be meaningful in frame F&#91;@&#93;, it must satisfy:
            </Paragraph>
            <Paragraph>x =&#91;in&#93;&gt; @</Paragraph>
            <Paragraph>which expands to:</Paragraph>
            <Paragraph>x -&gt; @ | E&#91;y&#93;: x =@&gt; y | y =@&gt; x</Paragraph>
            <Paragraph>
                This constraint says that x must either inherit from @ or participate in an @-typed relationship. Variables
                that don't satisfy this condition simply don't make sense within the current frame's semantic context.
            </Paragraph>
            <Heading>3. The Architecture of Frame Inheritance</Heading>
            <Paragraph>
                Every proof in SRT begins with F&#91;r&#93;, where r represents the primitive reference relation. This isn't
                arbitrary—it establishes that Semantic Reference Theory is fundamentally about the representation of
                relationship itself. The profound identity r == (rel) within frame F&#91;r&#93; reveals that r is the
                canonical symbol for "relationship" in its own frame. SRT studies how relationships represent relationships,
                making it naturally self-referential.
            </Paragraph>
            <Paragraph>
                When we declare a new frame F&#91;s&#93; after F&#91;r&#93;, we create what we call a frame inheritance
                relationship: s -&gt; r. This means that s inherits from the previous frame @, which was r. The inheritance
                isn't just taxonomic—it's hypothetical. Statements made in frame F&#91;s&#93; are conditional on the
                assumption that s -&gt; r holds.
            </Paragraph>
            <Paragraph>
                This creates a natural hierarchy of semantic contexts. At the base, we have F&#91;r&#93; where statements
                are unconditional because r -&gt; r is axiomatic (every type inherits from itself). As we introduce new
                frames, we build chains of hypothetical reasoning. If we declare F&#91;t&#93; after F&#91;s&#93;, we get t
                -&gt; s, and by transitivity, t -&gt; r. Each level adds conditions, creating increasingly specialized
                semantic contexts.
            </Paragraph>
            <Paragraph>
                The symbol @ plays a special role in this architecture, always referring to the current frame. When we write
                F&#91;s&#93; by itself, it's shorthand for F&#91;s: -&gt; @&#93;, meaning "create frame s that inherits from
                the current frame." This makes frame switching a form of semantic navigation, where we zoom in on more
                specific types of relationships while maintaining connection to the broader context.
            </Paragraph>
            <Heading>4. The Canonical Symbol Transformation</Heading>
            <Paragraph>
                One of the most striking examples of how frames change meaning involves the canonical symbol notation (x).
                In standard SRT without frames, (x) denotes the unique symbol that represents x. But within a frame
                F&#91;t&#93;, the meaning transforms dramatically.
            </Paragraph>
            <Paragraph>The expression (x) within F&#91;t&#93; transpiles to:</Paragraph>
            <Paragraph>
                E&#91;x'&#93;: (x',x) == x' &amp; (@,x') == @ &amp; A&#91;y&#93;: (x',y) == x' =|&gt; y == x
            </Paragraph>
            <Paragraph>
                This complex expression captures the idea that (x) in frame @ is the unique symbol that represents x
                specifically within the current semantic context. The condition (@,x') == @ ensures that this canonical
                symbol is properly bound to the current frame, while the universally quantified condition ensures its
                uniqueness.
            </Paragraph>
            <Paragraph>
                This transformation illustrates why frame isolation is crucial. The canonical symbol (x) in frame
                F&#91;s&#93; might be completely different from (x) in frame F&#91;t&#93;. They're not the same variable
                with different values—they're different symbols entirely, each making sense only within its respective
                semantic context. This is why frames can't share bound variables; doing so would create semantic confusion
                about which context determines the symbol's meaning.
            </Paragraph>
            <Heading>5. Perspectival Reasoning Through Frames</Heading>
            <Paragraph>
                The power of reference frames becomes clear when we consider how they enable formal reasoning about
                different perspectives. The objective frame F&#91;obj&#93; establishes a context where relationships
                represent observer-independent facts. Within this frame, @ == obj, and the statement rose =&gt; red
                transpiles to rose =obj&gt; red, representing the objective fact that the rose has the property red. There's
                no observer, no experience, just the structural relationship.
            </Paragraph>
            <Paragraph>
                Contrast this with the first-person frame F&#91;1p&#93;, where @ == 1p and the same physical situation might
                be expressed as (i) =(red)&gt; (rose). Here, (i) represents the identity experiencing, and the relationship
                captures not objective fact but subjective experience. The symbols have different meanings because the
                semantic context has changed. The frame doesn't just change notation—it changes what the symbols represent.
            </Paragraph>
            <Paragraph>
                The second-person frame F&#91;2p&#93; introduces yet another semantic context, one of directed address and
                acknowledgment. When we write i =&gt; you within this frame, it transpiles to i =2p&gt; you, capturing not a
                description but an act of recognition and communication. The symbol "you" only makes sense in this frame—it
                has no meaning in F&#91;obj&#93; where there are no addressed subjects.
            </Paragraph>
            <Paragraph>
                These perspectival frames aren't ad hoc additions but natural specializations of the reference relation.
                Each inherits from r, maintaining formal connection to the foundational notion of relationship while
                specializing it for particular semantic contexts. The third-person frame F&#91;3p&#93; specializes reference
                for narrative description, the predictive frame F&#91;pred&#93; for future-oriented reference, and the
                experimental frame F&#91;exp&#93; for controlled, repeatable conditions.
            </Paragraph>
            <Heading>6. Imagination and Impossible Literals</Heading>
            <Paragraph>
                Perhaps the most intriguing application of frames involves the imaginative frame F&#91;imag&#93;, where
                objective constraints can be relaxed to allow reasoning about impossibilities. Within F&#91;imag&#93;, where
                @ == imag, we might write unicorn =&gt; exists, which transpiles to unicorn =imag&gt; exists—a statement
                that would be contradictory in F&#91;obj&#93; but makes perfect sense in the context of imagination.
            </Paragraph>
            <Paragraph>
                The frame doesn't make unicorns exist—it provides a semantic context where we can meaningfully refer to
                them. The transpilation still produces perfectly valid first-order logic, but with the understanding that
                all statements are conditional on the frame assumption imag -&gt; r. This conditionality is what allows us
                to reason rigorously about fictional entities without committing to their objective existence.
            </Paragraph>
            <Paragraph>
                This capability extends to other specialized frames. The experimental frame F&#91;exp&#93; creates a
                semantic context where we can refer to idealized conditions like perfect vacuums or frictionless
                surfaces—useful fictions for scientific reasoning. The predictive frame F&#91;pred&#93; allows reference to
                future events that don't yet exist, essential for planning and forecasting.
            </Paragraph>
            <Heading>7. Cross-Frame Communication</Heading>
            <Paragraph>
                While frames provide semantic isolation, we sometimes need to relate symbols across different contexts. SRT
                provides notation for this through frame-qualified references. The expression y&#91;s&#93; within frame
                F&#91;t&#93; refers to y as it exists in frame F&#91;s&#93;. This creates a kind of semantic bridge,
                allowing us to compare how the same underlying entity appears in different contexts.
            </Paragraph>
            <Paragraph>
                For theorems that span multiple perspectives, we can use multi-frame contexts like F&#91;s,t&#93;, which
                allows us to work with both frames simultaneously while maintaining their distinct semantics. Within such a
                context, we might write (x)&#91;s&#93; =&gt; (x)&#91;t&#93;, expressing a relationship between the canonical
                symbol of x in frame s and its canonical in frame t. These aren't the same symbol—they're different
                representations of x in different semantic contexts, and the relationship between them captures something
                about how meaning transforms across contexts.
            </Paragraph>
            <Heading>8. The Metaphysics of Semantic Context</Heading>
            <Paragraph>
                Reference frames reveal something fundamental about the nature of meaning: it's not absolute but contextual.
                A symbol doesn't have a meaning—it has meanings, each determined by the semantic context in which it
                appears. This isn't relativism; the meanings are precisely determined by the frame's transpilation rules.
                Rather, it's an acknowledgment that semantics is richer than syntax, that meaning depends on context in ways
                that can be formally captured.
            </Paragraph>
            <Paragraph>
                The discovery that r == (rel) within F&#91;r&#93; suggests that relationship itself is self-representing,
                that the fundamental reference relation is its own canonical symbol. This self-reference isn't paradoxical
                but foundational. It establishes SRT as a theory where representation and what's represented can coincide,
                where the map can be the territory in precisely defined contexts.
            </Paragraph>
            <Paragraph>
                Each frame creates what we might call a semantic lens through which relationships can be viewed. The
                objective frame shows structure, the subjective frame shows experience, the predictive frame shows
                possibility. These aren't different realities but different ways of representing and reasoning about
                relationships. The frames formalize what we intuitively know: that meaning depends on perspective, and
                perspective can be made mathematically precise.
            </Paragraph>
            <Heading>9. Formal Properties and Guarantees</Heading>
            <Paragraph>
                The frame system maintains several crucial formal properties that ensure logical consistency while enabling
                semantic flexibility. The soundness property guarantees that frame transpilation preserves logical
                validity—any valid reasoning within a frame remains valid when transpiled to first-order logic. This is
                because transpilation only adds constraints and specifications; it never removes logical content.
            </Paragraph>
            <Paragraph>
                The completeness property ensures that any first-order statement about typed relationships can be expressed
                using frames. This means we're not limiting our expressive power by using frames—we're organizing it. Any
                formal relationship that could be expressed in raw first-order logic can be captured within an appropriate
                frame.
            </Paragraph>
            <Paragraph>
                The consistency inheritance property provides a crucial guarantee: if frame F&#91;t&#93; is consistent and s
                -&gt; t, then F&#91;s&#93; is also consistent. This means that specializing a semantic context can't
                introduce contradictions. We can safely create new frames as specializations of existing ones, knowing that
                logical consistency is preserved down the inheritance chain.
            </Paragraph>
            <Heading>10. Conclusion: Formalizing Contextual Meaning</Heading>
            <Paragraph>
                Semantic reference frames don't fix a problem in logic—they formalize a fundamental aspect of semantics. By
                treating context as a first-class concept that determines how symbols acquire meaning, SRT provides a
                framework for reasoning rigorously about perspectival, subjective, and imaginative content while maintaining
                mathematical precision.
            </Paragraph>
            <Paragraph>
                The frame mechanism reveals that meaning isn't just about reference but about the context in which reference
                occurs. The same symbol can be objective fact in one frame, subjective experience in another, and creative
                imagination in a third. These aren't confused or contradictory uses—they're different semantic contexts,
                each with its own precise transpilation rules.
            </Paragraph>
            <Paragraph>
                The insight that Semantic Reference Theory is fundamentally about the representation of relationship—that r
                == (rel)—combined with the frame mechanism for contextualizing that representation, creates a formal system
                capable of capturing the full richness of semantic phenomena. From the objective descriptions of science to
                the subjective experiences of consciousness to the impossible worlds of imagination, reference frames
                provide the semantic structure needed to reason formally about meaning in all its contextual complexity.
            </Paragraph>
        </Section>
    </Chapter>
);
