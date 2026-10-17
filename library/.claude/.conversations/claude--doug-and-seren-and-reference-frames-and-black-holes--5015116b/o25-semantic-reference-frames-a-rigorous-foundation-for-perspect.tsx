import { Bold, Chapter, Heading, Line, List, Paragraph, Section, Title, Word } from '@dna-platform/public';
import { CodeBox, Opaque } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ Semantic Reference Frames: A Rigorous Foundation for Perspectival Reasoning v22 ]]</Title>
        <Section>
            <Opaque />
            <Heading>Semantic Reference Frames: A Rigorous Foundation for Perspectival Reasoning at version 22</Heading>
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
            <Heading>2. Frames as Semantic Context in SRT</Heading>
            <Paragraph>
                A reference frame F&#91;t&#93; in Semantic Reference Theory establishes a semantic context that determines
                what symbols mean. Just as mathematical definitions allow us to write naturally about complex concepts that
                would otherwise require verbose expansions, frames allow us to express contextual meaning without constantly
                specifying which semantic domain we're operating in.
            </Paragraph>
            <Paragraph>
                The concept of transpilation, borrowed from programming languages, formalizes how definitions work in
                mathematics. When we define something like the canonical symbol (x), we're not changing the underlying
                logical language—we're creating a syntactic form that transpiles to more primitive expressions. Similarly,
                when we declare a frame F&#91;t&#93;, we're defining a context where certain symbols and expressions acquire
                specific meanings. The expression x =&gt; y within a frame means x =@&gt; y, where @ represents the current
                frame type. This isn't just notational convenience; it's how we formally capture that the same syntactic
                expression can have different semantic interpretations in different contexts.
            </Paragraph>
            <Paragraph>
                The frame establishes what we call the frame membership condition. For a variable x to be meaningful in
                frame F&#91;@&#93;, it must satisfy:
            </Paragraph>
            <Paragraph>x =&#91;in&#93;&gt; @</Paragraph>
            <Paragraph>which expands to:</Paragraph>
            <Paragraph>x -&gt; @ | E&#91;y&#93;: x =@&gt; y | y =@&gt; x</Paragraph>
            <Paragraph>
                This constraint says that x must either inherit from @ or participate in an @-typed relationship. Variables
                that don't satisfy this condition simply don't make sense within the current frame's semantic context. The
                frame isn't external to SRT—it's a fundamental part of how SRT expresses that meaning depends on context.
            </Paragraph>
            <Heading>3. The Architecture of Semantic Context</Heading>
            <Paragraph>
                Every proof in SRT begins with F&#91;r&#93;, where r represents the primitive reference relation. This
                establishes the foundational semantic context—that Semantic Reference Theory is about the representation of
                relationship itself. The profound identity r == (rel) within frame F&#91;r&#93; reveals that r is the
                canonical symbol for "relationship" in its own frame. SRT studies how relationships represent relationships,
                making it naturally self-referential.
            </Paragraph>
            <Paragraph>
                When we declare a new frame F&#91;s&#93; after F&#91;r&#93;, we create what we call a frame inheritance
                relationship: s -&gt; r. This inheritance is hypothetical—statements made in frame F&#91;s&#93; are
                conditional on the assumption that s -&gt; r holds. The frame declaration is itself a form of definition
                that gets transpiled into this assumption when we express SRT in pure first-order logic.
            </Paragraph>
            <Paragraph>
                This creates a natural hierarchy of semantic contexts. At the base, we have F&#91;r&#93; where statements
                are unconditional because r -&gt; r is axiomatic. As we introduce new frames, we build chains of
                hypothetical reasoning. Just as set-theoretic statements about real numbers are hypothetical to certain
                variables being assigned to certain sets, statements in specialized frames are hypothetical to the frame
                relationships holding.
            </Paragraph>
            <Paragraph>
                The symbol @ plays a special role, always referring to the current frame type—the current semantic context.
                When we write F&#91;s&#93; by itself, it's shorthand for F&#91;s: -&gt; @&#93;, meaning "create frame s that
                inherits from the current context." This makes frame switching a form of semantic navigation, where we
                specialize the context while maintaining connection to the broader semantic structure.
            </Paragraph>
            <Paragraph>
                The power of this approach is that it formalizes definition through transpilation. Just as programming
                language transpilers allow us to write in more natural syntactic forms that get converted to lower-level
                representations, SRT's frame mechanism allows us to write x =&gt; y and have it mean different things in
                different contexts, all while maintaining a rigorous expansion to first-order logic. The frame provides the
                semantic context; the transpilation provides the formal meaning.
            </Paragraph>
            <Heading>4. The Canonical Symbol Within Frames</Heading>
            <Paragraph>
                One of the most powerful examples of how frames establish semantic context involves the canonical symbol
                notation (x). Like mathematical definitions that let us write ℝ instead of spelling out the construction of
                real numbers, the notation (x) is a defined form that transpiles differently depending on the frame context.
            </Paragraph>
            <Paragraph>Within frame F&#91;@&#93;, the expression (x) transpiles to:</Paragraph>
            <Paragraph>
                E&#91;x'&#93;: (x',x) == x' &amp; (@,x') == @ &amp; A&#91;y&#93;: (x',y) == x' =|&gt; y == x
            </Paragraph>
            <Paragraph>
                This transpilation shows how the canonical symbol is bound to the current semantic context @. The symbol (x)
                doesn't have a frame-independent meaning—its meaning is determined by which frame we're in. This is why
                frame isolation is crucial: (x) in frame F&#91;s&#93; and (x) in frame F&#91;t&#93; are different symbols
                with different meanings, not the same symbol with different values.
            </Paragraph>
            <Paragraph>
                The transpilation mechanism here works exactly like mathematical definition. When we write (x), we're using
                a syntactic form that's more natural than the expanded expression, but the meaning—what gets inserted into
                formal proofs—is the full transpiled form. The frame determines what that transpilation produces,
                establishing the semantic context that gives the symbol its meaning.
            </Paragraph>
            <Heading>5. Examples of Semantic Reference Frames</Heading>
            <Paragraph>
                Different semantic contexts require different frames. The identity frame F&#91;i&#93; studied in the Algebra
                of Perspective¹ provides the most developed example, where i serves as both frame type and experiencing
                identity. Within F&#91;i&#93;, the qualification equivalence holds:
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}(i) =q> (x) =q> x =[q]> x`}
            </CodeBox>
            <Paragraph>
                Other frames that have been proposed include F&#91;obj&#93; for objective facts, F&#91;2p&#93; for
                second-person address, F&#91;3p&#93; for third-person description, F&#91;pred&#93; for predictive reasoning,
                F&#91;exp&#93; for experimental contexts, and F&#91;imag&#93; for imaginative scenarios. Each would
                establish its own semantic context through specific transpilation rules.
            </Paragraph>
            <Heading>6. Formal Properties of Frames</Heading>
            <Heading>6.1 Frames as Filters on Catalogues</Heading>
            <Paragraph>
                A frame F&#91;t&#93; doesn't create a new catalogue of referents—it provides a perspective on the existing
                catalogue. Formally, if C is the complete catalogue of referents, then F&#91;t&#93; induces a visibility
                relation:
            </Paragraph>
            <CodeBox>
                {`${''}visible_t(x) <iff> x =[in]> t`}
            </CodeBox>
            <Paragraph>
                Referents not satisfying this condition effectively disappear from the frame's perspective. They still exist
                in C, but cannot be referenced within F&#91;t&#93;. This creates the formal effect of working with a
                restricted catalogue while maintaining the same underlying ontology.
            </Paragraph>
            <Heading>6.2 Canonical Symbol Dependence</Heading>
            <Paragraph>
                A crucial property of frames concerns canonical symbols. If x is visible in frame F&#91;t&#93;, its
                canonical symbol (x) must be understood relative to t:
            </Paragraph>
            <CodeBox>
                {`${''}F[t]: (x) := (x)[t]`}
            </CodeBox>
            <Paragraph>
                This raises a fundamental question: if x =&#91;in&#93;&gt; t but (x) is not in t (i.e., !((x)
                =&#91;in&#93;&gt; t)), what is the canonical of x within the frame? The answer determines whether (x) exists
                at all in F&#91;t&#93;, or whether a different symbol serves as canonical.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Theorem (Frame-Relative Canonicity):
                </Word> Within F&#91;t&#93;, the canonical symbol of x is the unique s such that:
            </Paragraph>
            <CodeBox>
                {`(s,x) == s & (t,s) == t`}
            </CodeBox>
            <Paragraph>
                This may or may not be the same as (x) in frame F&#91;r&#93;. Different frames can assign different
                canonical symbols to the same referent.
            </Paragraph>
            <Heading>6.3 Reference Type Substitution</Heading>
            <Paragraph>
                When we enter frame F&#91;t&#93;, the fundamental reference relation r gets replaced by t throughout. This
                isn't just notational—it changes the semantic structure:
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}F[r]: x => y means x =r> y
F[t]: x => y means x =t> y`}
            </CodeBox>
            <Paragraph>
                The same syntactic expression now describes different relationships. This substitution propagates through
                all derived concepts:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Inheritance changes from x --&gt; y (based on r) to x --&gt;_t y (based on t)</Line>
                <Line>Properties change from x =p&gt; x where p --&gt; eq to x =p&gt; x where p --&gt;_t eq_t</Line>
                <Line>Canonicals change from satisfying (s,x) == s to satisfying (s,x) ==_t s</Line>
            </Paragraph>
            <Heading>6.4 Frame-Induced Equivalences</Heading>
            <Paragraph>
                Different referents that are distinct in F&#91;r&#93; may become equivalent in F&#91;t&#93;:
            </Paragraph>
            <CodeBox>
                {`${''}x != y in F[r] but x[t] == y[t] in F[t]`}
            </CodeBox>
            <Paragraph>
                This happens when x and y share the same t-canonical. Within F&#91;t&#93;, they become indistinguishable—the
                frame has collapsed their distinction. This is how frames can radically alter semantic structure while
                preserving the underlying catalogue.
            </Paragraph>
            <Heading>6.5 Transpilation Completeness</Heading>
            <Paragraph>For a frame F&#91;t&#93; to be well-defined, its transpilation must be complete:</Paragraph>
            <CodeBox>
                {`${''}For every expression E in F[t], there exists E' in FOL such that:
F[t]: E transpiles to E' with all @ replaced by t`}
            </CodeBox>
            <Paragraph>
                If any expression cannot be transpiled, the frame is incomplete and cannot serve as a proper semantic
                context.
            </Paragraph>
            <Heading>6.6 Frame Composition and Nesting</Heading>
            <Paragraph>When frames are declared sequentially, they don't compose—they replace:</Paragraph>
            <CodeBox>
                {`${''}F[s]
F[t]`}
            </CodeBox>
            <Paragraph>
                Here, F&#91;t&#93; completely replaces F&#91;s&#93; as the active context. However, the inheritance
                constraint t -&gt; s (where s was the previous @) creates a semantic dependency. Statements in F&#91;t&#93;
                are conditional not just on t -&gt; s, but on the entire chain back to r.
            </Paragraph>
            <Heading>6.7 The Invisibility Property</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Theorem (Invisible Reference):
                </Word> If x =&#91;in&#93;&gt; t but y is not in t, then within F&#91;t&#93;:
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}!E[r]: x =r> y is expressible`}
            </CodeBox>
            <Paragraph>
                References to invisible referents cannot be expressed within the frame. This isn't a limitation but a
                feature—it's how frames create focused semantic contexts by making irrelevant referents literally
                inexpressible.
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
                appears. This isn't relativism; the meanings are precisely determined by how the frame definition transpiles
                to formal logic. Rather, it's an acknowledgment that semantics is richer than syntax, that meaning depends
                on context in ways that can be formally captured.
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
                semantic flexibility. The soundness property guarantees that the transpilation of frames to first-order
                logic preserves logical validity—any valid reasoning within a frame remains valid when expanded to its full
                formal definition. This is because transpilation, like mathematical definition, only makes explicit what's
                already implicit in the notation.
            </Paragraph>
            <Paragraph>
                The completeness property ensures that any first-order statement about typed relationships can be expressed
                using frames. This means we're not limiting our expressive power by using frames—we're organizing it through
                systematic definitions. Any formal relationship that could be expressed in raw first-order logic can be
                captured within an appropriate frame, with the frame providing the semantic context that makes the
                expression natural.
            </Paragraph>
            <Paragraph>
                The consistency inheritance property provides a crucial guarantee: if frame F&#91;t&#93; is consistent and s
                -&gt; t, then F&#91;s&#93; is also consistent. This means that specializing a semantic context can't
                introduce contradictions. We can safely create new frames as specializations of existing ones, knowing that
                logical consistency is preserved down the inheritance chain.
            </Paragraph>
            <Heading>10. Conclusion: Formalizing Contextual Meaning</Heading>
            <Paragraph>
                Semantic reference frames formalize a fundamental aspect of how meaning works—that symbols acquire their
                meaning from semantic context. By treating frames as part of SRT's native structure, not as external
                additions, we capture how the same symbol can mean different things in different contexts while maintaining
                mathematical precision.
            </Paragraph>
            <Paragraph>
                The transpilation mechanism shows how this works formally: frames are definitions that determine how
                expressions expand when we need to express them in pure first-order logic. Just as mathematical definitions
                allow us to write naturally about complex objects while maintaining rigorous foundations, frames allow us to
                express contextual meaning naturally while preserving formal rigor. The insight that definition can be
                formalized through transpilation—a concept from programming languages where higher-level syntactic forms get
                systematically converted to lower-level representations—provides the bridge between semantic richness and
                logical precision.
            </Paragraph>
            <Paragraph>
                The insight that Semantic Reference Theory is fundamentally about the representation of relationship—that r
                == (rel)—combined with the frame mechanism for contextualizing that representation, creates a formal system
                capable of capturing the full richness of semantic phenomena. From the objective descriptions of science to
                the subjective experiences of consciousness to the impossible worlds of imagination, reference frames
                provide the semantic structure needed to reason formally about meaning in all its contextual complexity.
            </Paragraph>
            <Paragraph>
                ¹ For a detailed exploration of the identity frame F&#91;i&#93; and the qualification mechanism that
                transforms objective properties into subjective experience, see "The Algebra of Perspective" in this
                project's knowledge base.
            </Paragraph>
        </Section>
    </Chapter>
);
