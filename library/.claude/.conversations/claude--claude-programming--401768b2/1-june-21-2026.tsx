import { Bold, Chapter, Date, Emphasis, Heading, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker, Verbatim } from '../../../.manual/.book';
import { Action, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[21 June 2026](2026-06-21)</Date>
        </Dated>
        <Title>[[ 21 June 2026 ]]</Title>
        <Message
            at="2026-06-21T13:21:01.562074Z"
        >
            <Origin>019eea57-756f-751a-b31f-459e426c7cb9</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                I work in Claude Code (the agentic CLI coding tool). I keep seeing vector / embedding databases mentioned
                for agent memory and semantic search. Practically: how does one get a vector database working WITH Claude
                Code — what's the integration path (an MCP server? a custom tool? an indexing pipeline?) — and concretely
                what does it give the system that plain file reads and grep/ripgrep search don't? Please search the web for
                current tools, named projects, and real setups people use. I want enough substance to decide whether and how
                to set one up for a flat-file knowledge library.
            </Paragraph>
        </Message>
        <Message
            at="2026-06-21T13:22:18.004837Z"
        >
            <Origin>019eea57-756f-71f5-bcac-c89603e2ed1b</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                I'll research the current state of this — vector DB integration with Claude Code is exactly the kind of
                thing where the tooling has moved fast, so let me pull current sources rather than rely on memory.
            </Paragraph>
            <Action>Searched the web for “vector database MCP server Claude Code integration”</Action>
            <Paragraph>
                Good material. Now let me get the counter-perspective — there's been a notable debate about whether semantic
                search actually beats grep for agents, including from the Claude Code team itself.
            </Paragraph>
            <Action>
                Searched the web for “Claude Code agentic search grep vs embeddings semantic search why no vector database”
            </Action>
            <Paragraph>
                This is the crux — the debate splits on code vs. prose. Doug's case is a flat-file knowledge library, not
                code, so let me check where semantic search genuinely earns its keep for documents and how people actually
                set it up locally.
            </Paragraph>
            <Action>
                Searched the web for “semantic search knowledge base documents vs code embeddings worth it local setup
                Claude”
            </Action>
            <Paragraph>
                Good — I've got enough to give you the real picture, including the part that complicates the "just set one
                up" instinct.
            </Paragraph>
            <Heading>The honest headline first</Heading>
            <Paragraph>
                The thing worth knowing before you build anything: <Word>
                    <Bold />
                    Claude Code's own team deliberately removed vector search.
                </Word> Early versions used RAG with a local vector DB, and Boris Cherny (its creator) explained on Hacker
                News that they found plain agentic search — grep, find, read, and reasoning — consistently outperformed it.
                Their reasons were simplicity, security, privacy, staleness, and reliability. So the default tool you're
                using is vectorless <Word>
                    <Emphasis />
                    by design
                </Word>, not by omission.
            </Paragraph>
            <Paragraph>
                But that verdict is specifically about <Word>
                    <Bold />
                    code exploration
                </Word>, and your case is a <Word>
                    <Bold />
                    flat-file knowledge library
                </Word> (prose, notes, reference material). That distinction is the whole ballgame, so let me separate the
                two before getting to setup.
            </Paragraph>
            <Heading>Why grep wins for code but the case shifts for prose</Heading>
            <Paragraph>
                For code, identifiers <Word>
                    <Emphasis />
                    are
                </Word> literal strings. If you want <Word>
                    <Verbatim />
                    authenticateUser
                </Word>, grep finds it exactly, instantly, with no index to build or keep fresh. Structure matters too —
                following imports, call chains, and type hierarchies (AST navigation) often beats flattening code into
                embedding space. And an index built at session start is stale the moment the first file changes; embeddings
                of proprietary content also leak information, since research on embedding inversion has shown partial text
                recovery in some settings.
            </Paragraph>
            <Paragraph>
                Prose is different. Knowledge gets expressed in varied vocabulary, so the failure mode of grep is real here:
                it can't understand that "user authentication" and "verify login credentials" are conceptually related. When
                the <Word>
                    <Emphasis />
                    words
                </Word> you'd search for aren't the words the document used, exact-match search misses and the agent burns
                tokens reading files to compensate. That's exactly the gap embeddings fill. The vendor-driven (Milvus) claim
                is around ~40% token reduction at equivalent retrieval quality — discount it for commercial interest, but
                the <Word>
                    <Emphasis />
                    direction
                </Word> is sound for a corpus where queries are conceptual rather than keyword-shaped.
            </Paragraph>
            <Paragraph>
                The 2026 consensus that's emerged from this debate isn't "vectors" or "grep" — it's <Word>
                    <Bold />
                    hybrid
                </Word>: keyword/BM25 plus dense vectors, with vector search no longer the default, but retrieved
                just-in-time as one tool among several.
            </Paragraph>
            <Heading>The integration paths (concretely)</Heading>
            <Paragraph>Three real mechanisms, in rough order of how people actually do it:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    1. MCP server — the dominant path.
                </Word> You register a server with one command (<Word>
                    <Verbatim />
                    claude mcp add ...
                </Word>) and Claude Code discovers its tools at runtime — typically something like <Word>
                    <Verbatim />
                    index
                </Word>, <Word>
                    <Verbatim />
                    search
                </Word>, <Word>
                    <Verbatim />
                    store
                </Word>, <Word>
                    <Verbatim />
                    find
                </Word>. The agent then calls them like any other tool. Named, working options:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        zilliztech/claude-context
                    </Word> — purpose-built for this, does hybrid (BM25 + dense), AST-aware chunking, pluggable embeddings
                    (OpenAI, VoyageAI, Ollama, Gemini), backed by Milvus/Zilliz. The most "batteries-included" choice.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        danielbowne/claude-context
                    </Word> — a fork that swaps in <Word>
                        <Bold />
                        LanceDB as a local, embedded, zero-config
                    </Word> store. This is the one to look at if you want everything on-machine with no external service.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        qdrant/mcp-server-qdrant
                    </Word> — official Qdrant server; explicitly framed as a "semantic memory layer" with <Word>
                        <Verbatim />
                        store
                    </Word>/<Word>
                        <Verbatim />
                        find
                    </Word> tools. Good if you also want agent memory, not just document search.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Chroma, Pinecone, Weaviate, Milvus
                    </Word> all have MCP servers too, but those are the database back-ends; the claude-context projects are
                    the indexing layer on top.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    2. Hooks-based indexing — for memory, not library search.
                </Word> Projects like isthatamullet/claude-vector-db hook into Claude Code's lifecycle to index your <Word>
                    <Emphasis />
                    conversation history
                </Word> in real time, so the agent can semantically recall past sessions. Different problem from yours, but
                worth knowing it's the standard pattern for "agent memory."
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    3. Custom tool / skill — the DIY route.
                </Word> You write a local CLI that chunks, embeds, and queries, and let Claude call it via bash or wrap it
                as a Skill. Several people have built this with entirely local pieces (sentence-transformers or Ollama for
                embeddings, ChromaDB/LanceDB/sqlite-vec for storage) — <Word>
                    <Bold />
                    no API fees, nothing leaving the machine
                </Word>, and some report it's faster than Claude's default search on their corpus.
            </Paragraph>
            <Paragraph>
                Whichever path, the underlying pipeline is the same four steps and the operational cost lives here: <Word>
                    <Bold />
                    chunk → embed → store → query
                </Word>, plus keeping the index fresh as files change. That re-chunk/re-embed-on-change loop is the
                "operational debt" that made the Claude Code team walk away for code.
            </Paragraph>
            <Heading>So: whether to build one</Heading>
            <Paragraph>A decision test rather than a recommendation, since it genuinely depends on your corpus:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        How big is the library, and does it fit in context?
                    </Word> If it's small enough that the agent can grep + read its way through in a couple of tool calls, a
                    vector DB is mostly ceremony. The payoff scales with corpus size.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Are your queries conceptual or keyword-shaped?
                    </Word> If you mostly know the terms ("find the note where I mention X"), grep already wins. If you're
                    asking "what did I write about <Word>
                        <Emphasis />
                        this idea
                    </Word>" and the wording varies, embeddings earn their keep.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Does it change constantly?
                    </Word> A library that's appended-to occasionally indexes cleanly. One churning every hour fights
                    staleness.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Privacy posture?
                    </Word> Local embeddings (Ollama/sentence-transformers) sidestep both the API cost and the
                    inversion-leak concern.
                </Line>
            </Paragraph>
            <Paragraph>
                If you do build, my read for your specific case — a flat-file <Word>
                    <Emphasis />
                    knowledge
                </Word> library, not code — is: start with the <Word>
                    <Bold />
                    local LanceDB claude-context fork
                </Word> or a <Word>
                    <Bold />
                    small custom CLI with local embeddings
                </Word>, run it <Word>
                    <Emphasis />
                    alongside
                </Word> (not instead of) grep, and treat it as hybrid. That gets you the conceptual-recall upside without a
                cloud dependency, a monthly bill, or the failure modes that pushed Claude Code itself back to plain search.
                Then measure: if semantic retrieval isn't surfacing things grep misses on <Word>
                    <Emphasis />
                    your actual queries
                </Word>, you've learned cheaply that your corpus doesn't need it.
            </Paragraph>
            <Paragraph>
                Want me to sketch the concrete setup for either the LanceDB-MCP route or a minimal local-embeddings CLI
                you'd call from Claude Code?
            </Paragraph>
        </Message>
    </Chapter>
);
