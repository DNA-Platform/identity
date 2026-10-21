import { Bold, Chapter, Emphasis, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { Message, Speaker, Verbatim } from '../../../.manual/.book';
import { Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Title>[[ Conversation ]]</Title>
        <Message
            at="2026-06-17T14:43:03.455841Z"
        >
            <Origin>019ed609-1fa7-7764-8ae8-ef1658e5eac6</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                What approaches exist for maintaining bidirectional links between documentation and source code at scale?
                I'm interested in systems where the documentation references the code AND the code references the
                documentation — like Doxygen, Rustdoc, literate programming, doc-as-code. What survives maintenance at scale
                and what tends to rot? Specifically: how do teams keep the links from breaking when either side changes?
            </Paragraph>
        </Message>
        <Message
            at="2026-06-17T14:44:42.269880Z"
        >
            <Origin>019ed609-1fa7-797e-becb-3239460a693b</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                The useful way to organize this space isn't by tool but by what <Word>
                    <Emphasis />
                    forces a link to be revisited when one endpoint changes
                </Word>. Every linking scheme is really a bet about that forcing function, and durability tracks it almost
                perfectly. There are four forcing functions, in ascending order of strength:
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Proximity
                    </Word> — you see the doc because it's physically next to the code you're editing.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Shared lifecycle
                    </Word> — doc and code are co-versioned and reviewed in the same change.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Mechanical verification
                    </Word> — CI fails if the link is broken.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Single source of truth
                    </Word> — the link can't exist in a broken state because both endpoints are derived from one artifact.
                </Line>
            </Paragraph>
            <Paragraph>
                Before mapping tools onto that, the distinction that matters most at scale: there are <Word>
                    <Bold />
                    two kinds of rot
                </Word>, and almost all tooling only addresses the first.
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Emphasis />
                        Referential rot
                    </Word> — the target no longer exists (dead link, renamed symbol, stale line number). Mechanically
                    detectable.
                </Line>
                <Line>
                    <Word>
                        <Emphasis />
                        Semantic rot
                    </Word> — the link still resolves, but the prose no longer describes what the code does. The link
                    checker passes and the documentation lies.
                </Line>
            </Paragraph>
            <Paragraph>
                Semantic rot is the real killer, and only two things catch it: making the doc <Word>
                    <Emphasis />
                    executable
                </Word>, or <Word>
                    <Emphasis />
                    generating
                </Word> both sides from one source. Everything else is hygiene for referential rot.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Mapping the approaches
                </Word>
            </Paragraph>
            <Paragraph>
                The co-location/extraction family (Doxygen, Javadoc, Rustdoc, JSDoc, Sphinx autodoc) wins on proximity.
                Code→doc is free because they're the same file; doc→code is generated. This is genuinely rot-resistant
                <Word>
                    <Emphasis />
                    for API-level docs
                </Word>, because a developer editing the function stares at the docstring. But it only covers "what this
                symbol is." It does nothing for narrative ("how auth works across these twelve files"), and that narrative
                is where rot concentrates.
            </Paragraph>
            <Paragraph>
                Literate programming (WEB/CWEB, noweb, Org-babel) collapses the link by making one source — maximally
                coherent, which is why it never escapes its niches. The narrative order and the compiler's required order
                diverge, diffs get ugly, and most engineers won't write prose to write code. It's a single-source-of-truth
                win that loses on every social axis at team scale.
            </Paragraph>
            <Paragraph>
                Doc-as-code (Markdown in-repo, MkDocs, Docusaurus, Antora) buys you shared lifecycle: same repo, same PR,
                CODEOWNERS on the docs directory. That's a real improvement, but the actual cross-references inside the
                prose are still just hyperlinks and descriptions that rot silently. Shared lifecycle protects <Word>
                    <Emphasis />
                    existence
                </Word> better than <Word>
                    <Emphasis />
                    content
                </Word>.
            </Paragraph>
            <Paragraph>Then the mechanically-verified tier, which is where things actually hold:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Doctests
                    </Word> — Python <Word>
                        <Verbatim />
                        doctest
                    </Word>, Rust's compiled-and-run doc examples, Elixir doctests, Go's <Word>
                        <Verbatim />
                        ExampleFoo
                    </Word> functions in godoc. The doc <Word>
                        <Emphasis />
                        is
                    </Word> a test. Change the behavior and CI breaks. This is the single most robust bidirectional
                    mechanism in common use, because it ties doc <Word>
                        <Emphasis />
                        content
                    </Word> to code <Word>
                        <Emphasis />
                        behavior
                    </Word>, not just to an anchor's existence — so it catches semantic rot.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Transclusion
                    </Word> — instead of pasting code into docs (which drifts immediately), the doc <Word>
                        <Emphasis />
                        includes
                    </Word> real source lines by reference: Sphinx <Word>
                        <Verbatim />
                        literalinclude
                    </Word>, mdBook <Word>
                        <Verbatim />
                        &#123;&#123;#include&#125;&#125;
                    </Word>, embedme, Docusaurus snippet plugins. The doc shows current code because it pulls from the file.
                    This kills the "example diverged from reality" problem without requiring the example to be executable.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Link checking in CI
                    </Word> (lychee, Sphinx nitpicky mode) — catches referential rot only. Necessary, not sufficient.
                </Line>
            </Paragraph>
            <Paragraph>And the strongest tier, single source of truth:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Schema-first generation
                    </Word> — OpenAPI, Protobuf, GraphQL SDL, JSON Schema. Both the docs <Word>
                        <Emphasis />
                        and
                    </Word> the client/server code are generated from one spec, so the link can't rot. This is the biggest
                    practical win in the whole field, and it works precisely by <Word>
                        <Emphasis />
                        dissolving
                    </Word> the bidirectional problem into two unidirectional generations from a shared root.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Derived cross-reference graphs
                    </Word> — Kythe (Google), Glean (Meta), Sourcegraph, LSP-based indexers. These are the actual scale
                    answer for true bidirectional navigation. Rather than <Word>
                        <Emphasis />
                        authoring
                    </Word> links, language indexers <Word>
                        <Emphasis />
                        emit
                    </Word> a graph of relationships from the source on every index run. Derived links can't rot because
                    they're regenerated; if the symbol moves, the next index reflects it.
                </Line>
            </Paragraph>
            <Paragraph>
                That last point is the meta-lesson, and the one I'd press hardest: <Word>
                    <Bold />
                    at real scale, the winning move is to stop maintaining links and start deriving them.
                </Word> Authored links rot proportional to change velocity times distance. Derived links regenerate. Teams
                that win either generate both endpoints from one spec, or generate the link graph from static analysis of
                the endpoints. Hand-maintained traceability survives only where it's mandated and heavily tooled —
                DOORS-style requirement IDs in DO-178C/ISO 26262 safety-critical work — and there it survives by being
                expensive, not by being clever.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    So, concretely, how teams keep links from breaking
                </Word>
            </Paragraph>
            <Paragraph>
                The patterns that survive maintenance, roughly in order of leverage: generate API reference from source,
                never hand-write it; put anything that <Word>
                    <Emphasis />
                    can
                </Word> be an example into a doctest so the test runner enforces it; transclude real code rather than
                pasting; for APIs, go schema-first so both sides derive from the spec; run a link checker in CI for
                referential rot; co-version docs with code and gate doc directories with CODEOWNERS so changes are at least
                <Word>
                    <Emphasis />
                    seen
                </Word>; and for genuine cross-references, lean on a derived index (Sourcegraph/Kythe-style) rather than
                authored hyperlinks.
            </Paragraph>
            <Paragraph>
                What rots no matter what you do: conceptual and architectural narrative — "how the system works as a whole."
                It can't be doctested and can't be generated, because it describes an emergent property of many parts. The
                honest mitigations are to keep it deliberately high-level and slow-changing, date it, and treat it as
                append-only history (ADRs) rather than pretending it's live truth — plus generating what <Word>
                    <Emphasis />
                    can
                </Word> be generated from it, like dependency or call-graph diagrams, so at least the structural skeleton
                stays current even as the prose ages.
            </Paragraph>
            <Paragraph>
                The clean way to state the whole thing: a link's half-life is set by its forcing function, and content-level
                forcing (executable or generated) is the only kind that survives both rename <Word>
                    <Emphasis />
                    and
                </Word> rewrite. Everything weaker buys you detection of broken pointers while letting the prose quietly go
                false.
            </Paragraph>
            <Paragraph>
                If you want, I can go deeper on any one branch — the Kythe/Glean graph model is interesting if you're
                thinking about scale, and the doctest-vs-transclusion tradeoff has some subtlety worth unpacking depending
                on whether your priority is "examples are correct" or "examples are real."
            </Paragraph>
        </Message>
    </Chapter>
);
