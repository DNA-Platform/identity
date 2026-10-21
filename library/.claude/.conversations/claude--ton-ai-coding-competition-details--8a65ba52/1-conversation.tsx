import { Bold, Chapter, Date, Emphasis, Heading, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker, Verbatim } from '../../../.manual/.book';
import { Action, Attachment, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[20 March 2026](2026-03-20)</Date>
        </Dated>
        <Title>[[ Conversation ]]</Title>
        <Message
            at="2026-03-20T20:16:44.673855Z"
        >
            <Origin>019d0ce5-00dd-73fc-a473-366f375786cc</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                There was a TON AI coding competition this week. Can you try to find information on it and what it would
                look like to submit something? Are you familiar with these tech technologies?
            </Paragraph>
        </Message>
        <Message
            at="2026-03-20T20:17:10.402266Z"
        >
            <Origin>019d0ce5-00dd-7bed-b854-30a25f258bd2</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched the web for “TON AI coding competition 2026”</Action>
            <Action>Searched the web for “TON blockchain AI hackathon competition March 2026”</Action>
            <Action>
                Searched the web for “TON AI competition hackathon March 2026 site:ton.org OR site:society.ton.org”
            </Action>
            <Action>Searched the web for “"TON" AI coding competition "2026" week”</Action>
            <Paragraph>
                I've searched a few times and can't pin down a specific "TON AI coding competition" from this week with
                confidence. I want to make sure I give you accurate info rather than guess. A few possibilities come to mind
                — can you help me narrow it down?
            </Paragraph>
            <Action>Used ask user input v0</Action>
            <Paragraph>
                I did find quite a bit on <Word>
                    <Bold />
                    TON (The Open Network)
                </Word> hackathons generally — their Hackers League series is a big recurring ecosystem competition with
                multi-million dollar prize pools built around Telegram Mini Apps and blockchain dApps. But I couldn't
                confirm a specific event launching <Word>
                    <Emphasis />
                    this
                </Word> week in March 2026.
            </Paragraph>
            <Paragraph>
                Any additional context you have — a link, where you heard about it, or what technologies were mentioned —
                would help me find the exact competition and give you solid submission guidance!
            </Paragraph>
        </Message>
        <Message
            at="2026-03-20T20:18:58.051942Z"
        >
            <Origin>019d0ce7-03dc-77c4-b7ac-0e8df896b7a6</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>That’s the post from the TON channel in telegram</Paragraph>
            <Attachment>Uploaded “IMG_3048.png”, whose content the export does not carry</Attachment>
            <Attachment>Uploaded “IMG_3049.png”, whose content the export does not carry</Attachment>
            <Attachment>Uploaded “IMG_3050.png”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-03-20T20:19:49.235844Z"
        >
            <Origin>019d0ce7-03dc-70ea-923f-21c3a428feee</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Perfect, now I can see it clearly! Let me look up the submission details and MCP docs they referenced.
            </Paragraph>
            <Action>Searched the web for “TON AI Agent Hackathon March 11-25 2026 submission registration”</Action>
            <Action>Searched the web for “TON AI Agent Hackathon dorahacks submission 2026”</Action>
            <Action>Searched the web for “TON AI Agent Hackathon March 2026 MCP registration link”</Action>
            <Action>Fetched https://society.ton.org/ton-ai-agent-hackathon</Action>
            <Action>
                Searched the web for “"ton ai agent hackathon" site:society.ton.org OR site:ton.org OR site:dorahacks.io”
            </Action>
            <Action>Fetched https://society.ton.org/ton-ai-hackathon</Action>
            <Action>Searched the web for “TON AI Agent Hackathon March 11 25 2026 how to submit”</Action>
            <Paragraph>
                Now I have a clear picture from your screenshots! Let me give you a full breakdown of everything I can see,
                and what I know about the tech stack.
            </Paragraph>
            <Heading>TON AI Agent Hackathon — What You Need to Know</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Dates:
                </Word> March 11–25, 2026 (two weeks, so you're in the middle of it right now!) <Word>
                    <Bold />
                    Prize Pool:
                </Word> $20,000 total
            </Paragraph>
            <Heading>The Two Tracks</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Track 1: Agent Infrastructure ($10K)
                </Word> Build tooling and primitives that power the next generation of AI apps on TON — wallet integrations,
                agent coordination, payment flows, developer tools, and core infrastructure.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Track 2: User-Facing Agents ($10K)
                </Word> Build AI agents users interact with directly inside Telegram — commerce agents, payment bots,
                assistants, trading tools, automation products. These can be standalone or part of agent-to-agent
                interactions involving payments, coordination, and trust.
            </Paragraph>
            <Heading>The Vision They're Pitching</Heading>
            <Paragraph>The post lays out a "new stack" thesis:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Telegram
                    </Word> = interaction and distribution layer
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        AI
                    </Word> = execution engine
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        TON
                    </Word> = payments, agent-to-agent, and trust layer
                </Line>
            </Paragraph>
            <Paragraph>
                They cited BotFather MAU growing from 3.5M to 7.4M as AI agents took off on Telegram as validation.
            </Paragraph>
            <Heading>Submission &amp; Registration</Heading>
            <Paragraph>
                The post linked to "MCP Docs" and a registration page. Based on TON's previous hackathons (Hackers League,
                Open League), submissions almost certainly go through <Word>
                    <Bold />
                    DoraHacks
                </Word> (their preferred platform), and you'd also want to check <Word>
                    <Bold />
                    society.ton.org
                </Word> directly for the registration link. The pinned message in the image also references a Telegram group
                (the TON Builders/Gateway/Community links).
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Your best next steps:
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    Go to <Word>
                        <Bold />
                        society.ton.org
                    </Word> and look for the TON AI Agent Hackathon page
                </Line>
                <Line>
                    Check <Word>
                        <Bold />
                        dorahacks.io
                    </Word> and filter by TON tag
                </Line>
                <Line>
                    Join the <Word>
                        <Bold />
                        TON Builders
                    </Word> Telegram channel linked in that post for real-time submission updates
                </Line>
            </Paragraph>
            <Heading>Am I Familiar with the Tech?</Heading>
            <Paragraph>Very much so — this is a sweet spot. The stack involves:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        TON blockchain
                    </Word> — I know it well. Smart contracts are written in <Word>
                        <Bold />
                        FunC
                    </Word> (low-level) or <Word>
                        <Bold />
                        Tact
                    </Word> (higher-level, TypeScript-like). TON has a very unique sharded architecture and async messaging
                    model that trips people up compared to EVM chains.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Telegram Mini Apps (TMA)
                    </Word> — web apps (HTML/JS/React) embedded inside Telegram. They use the Telegram WebApp JS API to
                    access user identity, payments, etc.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        TON Connect
                    </Word> — the wallet connection standard (like WalletConnect for TON)
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        MCP (Model Context Protocol)
                    </Word> — Anthropic's protocol for connecting AI agents to external tools and data sources. This is
                    actually the same protocol I run on. It's becoming the standard for agent-to-agent and agent-to-tool
                    communication.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        AI Agents
                    </Word> — autonomous systems that take actions, often using LLMs as their reasoning core
                </Line>
            </Paragraph>
            <Paragraph>
                Given your TypeScript background and comfort with crypto/blockchain concepts, you'd be well positioned for
                either track. Track 1 (infra) is more technical/lower-level; Track 2 (user-facing) is more
                product/UX-oriented and would get to market faster.
            </Paragraph>
            <Paragraph>
                Want me to help you brainstorm a specific project idea for either track, or dive deeper into any part of the
                tech stack?
            </Paragraph>
        </Message>
        <Message
            at="2026-03-20T20:21:43.583273Z"
        >
            <Origin>019d0ce9-9109-7371-8e12-076a761e7faa</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Well, give me an example project of each one that you think is accomplishable in a few days and two pair in
                mind that like we’d have to deploy this thing so I wouldn’t be too confident about the text back because I
                would think that developing on a network like this, even a test network is tricky
            </Paragraph>
        </Message>
        <Message
            at="2026-03-20T20:22:14.549568Z"
        >
            <Origin>019d0ce9-9109-799c-8000-8bd2a890b8b9</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Good instinct to be skeptical there — TON's architecture is genuinely unusual compared to EVM chains. It's
                async, everything is message-passing between contracts, and even the testnet has gotchas that can eat days.
                So the smartest strategy is to <Word>
                    <Bold />
                    minimize or eliminate custom smart contract deployment
                </Word> entirely and lean on existing TON infrastructure via APIs.
            </Paragraph>
            <Paragraph>Here's one realistic idea per track:</Paragraph>
            <Heading>Track 2: User-Facing Agent</Heading>
            <Heading>"TON Wallet Copilot" — a Telegram bot that is your personal on-chain analyst</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    What it does:
                </Word> A user messages the bot their TON wallet address (or connects via TON Connect). The AI agent then
                answers natural language questions about their wallet — "what did I spend last week?", "which tokens am I
                holding that are losing value?", "summarize my last 10 transactions" — pulling live data and reasoning over
                it with an LLM.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Why it's deployable in days:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    Zero smart contract deployment. You're just reading the chain via <Word>
                        <Bold />
                        TONapi
                    </Word> or <Word>
                        <Bold />
                        toncenter.com
                    </Word> REST APIs — they're excellent and well-documented
                </Line>
                <Line>
                    The bot itself is a standard <Word>
                        <Bold />
                        Telegram Bot
                    </Word> (Node.js + <Word>
                        <Verbatim />
                        grammy
                    </Word> or <Word>
                        <Verbatim />
                        telegraf
                    </Word>)
                </Line>
                <Line>The AI reasoning layer is just Claude or GPT via API</Line>
                <Line>Deploy the bot server to Railway or Fly.io — straightforward</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The "agent" angle
                </Word> is that it's not just a lookup tool — it can autonomously fetch multiple data sources, reason across
                them, and give you synthesized insights, which fits the track criteria.
            </Paragraph>
            <Heading>Track 1: Agent Infrastructure</Heading>
            <Heading>TON MCP Server — a bridge letting any AI agent interact with TON</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    What it does:
                </Word> An MCP server that exposes TON blockchain capabilities as tools — <Word>
                    <Verbatim />
                    get_wallet_balance
                </Word>, <Word>
                    <Verbatim />
                    get_transaction_history
                </Word>, <Word>
                    <Verbatim />
                    estimate_gas
                </Word>, <Word>
                    <Verbatim />
                    get_jetton_price
                </Word>, <Word>
                    <Verbatim />
                    send_transaction_payload
                </Word> (building the unsigned tx, not signing). Any AI agent (Claude, GPT, anything MCP-compatible) can
                then natively "speak TON" without knowing anything about the chain.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Why it's deployable in days:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    Again, no custom smart contracts — you're wrapping existing APIs (TONapi, TON Center) into MCP tool
                    definitions
                </Line>
                <Line>An MCP server is just a Node.js/TypeScript process that speaks a well-defined JSON protocol</Line>
                <Line>
                    The post specifically linked <Word>
                        <Bold />
                        MCP Docs
                    </Word>, which signals the judges are actively looking for this
                </Line>
                <Line>Deploy as a simple HTTPS endpoint — Vercel serverless functions even work</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Why this is strategically interesting:
                </Word> It's genuinely useful infrastructure. Right now there's no good TON MCP server publicly available,
                so you'd be filling a real gap, which judges reward.
            </Paragraph>
            <Paragraph>
                The honest hierarchy of difficulty: Track 2 bot &lt; Track 1 MCP server &lt; anything involving deploying
                your own smart contracts. Both of these ideas deliberately stay in the first two tiers.
            </Paragraph>
            <Paragraph>
                Which direction feels more interesting to you — the product/UX angle or the infra/tooling angle? That'd
                shape how we'd think about building it.
            </Paragraph>
        </Message>
    </Chapter>
);
