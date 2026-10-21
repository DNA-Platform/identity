import { Bold, Chapter, Emphasis, Paragraph, Title, Word } from '@dna-platform/public';
import { Message, Speaker } from '../../../.manual/.book';
import { Action, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Title>[[ Conversation ]]</Title>
        <Message
            at="2026-06-16T17:14:28.877868Z"
        >
            <Origin>019ed16d-651d-70cd-8e70-d0b0c8d05953</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                What are the three most important differences between MCP and A2A protocol for AI agent communication?
            </Paragraph>
        </Message>
        <Message
            at="2026-06-16T17:14:55.751112Z"
        >
            <Origin>019ed16d-651d-7d45-a343-e609e691dfcb</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>I'll verify the current state of both protocols since they've been evolving quickly.</Paragraph>
            <Action>Searched the web for “MCP vs A2A protocol differences AI agents”</Action>
            <Paragraph>
                The cleanest way to think about it: MCP and A2A operate at different layers and were built to solve
                different problems, so the "differences" are really about where each one sits in an agent stack. The three
                that matter most:
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    1. What they connect — tools vs. other agents.
                </Word> MCP (from Anthropic) standardizes how a single agent reaches <Word>
                    <Emphasis />
                    outward
                </Word> to tools, APIs, and data sources — it's the vertical connection between a model and the external
                world. A2A (from Google) is a communication protocol that lets AI agents built on different frameworks talk
                to one another, the horizontal connection between peers. MCP handles how an agent talks to tools; A2A
                handles how agents talk to each other. Confusing the two is the most common architectural mistake people
                make here.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    2. Topology — client-server vs. peer-to-peer.
                </Word> MCP uses a host-client-server model where the agent is always the client calling into servers that
                expose capabilities; the relationship is asymmetric and hierarchical. A2A is symmetric: each agent functions
                as both client and server, exposing endpoints and publishing its capabilities. Discovery works differently
                as a result — A2A agents advertise themselves through "Agent Cards" (a JSON description of what they can do)
                so other agents can find and delegate to them, whereas MCP servers are typically configured into a host
                rather than discovered peer-to-peer.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    3. Interaction model — stateless tool calls vs. stateful task delegation.
                </Word> MCP is built around relatively discrete request/response tool invocations grounded in shared
                context. A2A is built around a task-oriented state machine that supports asynchronous, multi-step workflows
                with defined task states — meaning it's designed for long-running, negotiated collaboration where one agent
                hands a task to another, the work streams back over time, and the requesting agent doesn't need to know how
                the other agent does it internally. This is what makes A2A suited to orchestrating swarms of autonomous
                agents while MCP is suited to grounding a single agent in real tools.
            </Paragraph>
            <Paragraph>
                Worth flagging that they're explicitly complementary rather than competing — a common pattern is a planner
                agent that reaches out to other agents via A2A, each of which uses MCP underneath to fetch its own tools.
                One detail that may matter for currency: MCP was donated to the Linux Foundation's Agentic AI Foundation in
                December 2025, so it's now governed as a vendor-neutral open standard rather than an Anthropic-controlled
                one.
            </Paragraph>
            <Paragraph>
                If you tell me what you're actually building, I can get more concrete about which to reach for first (or how
                to layer them).
            </Paragraph>
        </Message>
        <Message
            at="2026-06-16T17:15:02.413081Z"
        >
            <Origin>019ed16d-e8dc-7d44-9987-4def92afd00a</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>What are the three most important differences between MCP and A2A protocol fo...</Paragraph>
        </Message>
        <Message
            at="2026-06-16T17:15:10.827253Z"
        >
            <Origin>019ed16d-e8dc-7411-958f-0fac459eade4</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Looks like your message got cut off — it ends mid-word at "fo..." and otherwise repeats the question I just
                answered.
            </Paragraph>
            <Paragraph>
                I covered the three big ones above: what they connect (tools vs. other agents), topology (client-server vs.
                peer-to-peer), and interaction model (stateless tool calls vs. stateful task delegation).
            </Paragraph>
            <Paragraph>
                If you meant to narrow it — "...for coding agents," "...for an enterprise deployment," "...for my hedge
                fund's setup," or some other context — send the rest and I'll tailor the answer. Or if you wanted a
                different cut entirely (security, latency, maturity/adoption, implementation effort), tell me which axis
                matters and I'll redo it from that angle.
            </Paragraph>
        </Message>
        <Message
            at="2026-06-16T17:15:33.702702Z"
        >
            <Origin>019ed16e-62fa-76b5-9b8e-ce7476269558</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>What are the three most important differences between MCP and A2A protocol fo...</Paragraph>
        </Message>
        <Message
            at="2026-06-16T17:15:41.376762Z"
        >
            <Origin>019ed16e-62fa-7334-92f3-4df39f0e31e5</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Your message is landing truncated at the same spot ("...protocol fo...") — so something on the sending side
                is cutting it off before the rest comes through. I don't want to just keep flagging it, so here's a more
                useful move:
            </Paragraph>
            <Paragraph>
                The full answer to the un-truncated version is already up in my first reply (the three differences: what
                they connect, topology, and interaction model). If the "fo..." was leading somewhere specific — most likely
                "for &#91;some use case&#93;" — my best guesses are coding agents, enterprise/multi-agent orchestration, or
                security. Say the word (even just "coding" or "enterprise") and I'll re-cut the three differences for that
                angle. If it's a paste or input glitch, try retyping just the tail end of the sentence.
            </Paragraph>
        </Message>
        <Message
            at="2026-06-16T17:16:05.017212Z"
        >
            <Origin>019ed16e-dd4e-78c6-8c01-403b2e6eb21f</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>What are the three most important differences between MCP and A2A protocol fo...</Paragraph>
        </Message>
        <Message
            at="2026-06-16T17:16:09.822106Z"
        >
            <Origin>019ed16e-dd4e-70a0-8c94-013f5d8da519</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Same truncation, third time — at this point it's clearly a sending glitch rather than anything you can fix
                by rephrasing, since it cuts at the identical spot every time.
            </Paragraph>
            <Paragraph>
                I won't keep repeating myself. The complete answer is in my first reply. Whenever the rest of the sentence
                comes through — or if you just paste the part after "for" — I'll pick it right up.
            </Paragraph>
        </Message>
    </Chapter>
);
