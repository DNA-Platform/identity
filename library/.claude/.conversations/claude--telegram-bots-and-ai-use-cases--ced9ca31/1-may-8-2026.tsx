import { Bold, Chapter, Date, Emphasis, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker, Verbatim } from '../../../.manual/.book';
import { Action, Attachment, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[8 May 2026](2026-05-08)</Date>
        </Dated>
        <Title>[[ 8 May 2026 ]]</Title>
        <Message
            at="2026-05-08T05:05:15.228194Z"
        >
            <Origin>019e05f9-90fa-75cd-bf16-9c832181cfc1</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                What are these telegram bots, how do I use ai, whats the use case? Why would we make tgem specifically with
                the tech meantioned?
            </Paragraph>
            <Attachment>Uploaded “IMG_3239.jpeg”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-05-08T05:06:54.574400Z"
        >
            <Origin>019e05f9-90fb-7b2c-81af-eafbf4a85ad9</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Fetched https://telegram.org/blog/ai-bot-revolution-11-new-features</Action>
            <Action>Searched the web for “Telegram blog ai-bot-revolution-11-new-features Pavel Durov”</Action>
            <Action>Fetched https://telegram.org/blog/ai-bot-revolution-11-new-features</Action>
            <Paragraph>
                The <Word>
                    <Bold />
                    May 7 post
                </Word> lays out the actual primitives, and the architecture choice you're asking about resolves cleanly
                once you stack them.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    What shipped:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Guest Bots
                    </Word> — tag any bot via <Word>
                        <Verbatim />
                        @username
                    </Word> in any chat (even one it's not a member of). The bot only sees the message it's tagged in plus
                    replies; it cannot enumerate users or read other messages.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Bot-to-Bot
                    </Word> — bots can now respond to bots, not just users. Composable agent pipelines.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Streaming
                    </Word> — Bot API supports token streaming with new animations.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Chat Automation in Profiles
                    </Word> — <Word>
                        <Emphasis />
                        Settings → Chat Automation
                    </Word> lets you wire a bot to your account that replies on your behalf, with per-chat scoping.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Custom AI Styles
                    </Word> — user-authored prompts in the AI text editor, with shareable links that let anyone preview and
                    one-tap install.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Emoji/sticker search
                    </Word> across 100M+ items in 36 languages — and the operative line for you: "powered by custom AI
                    models that run on the Cocoon Network."
                </Line>
            </Paragraph>
            <Paragraph>
                Use cases are what those primitives enable: in-chat routing to ChatGPT / Claude / Grok / niche specialist
                bots; agent pipelines that delegate between models (e.g., research-bot → drafting-bot → translation-bot);
                async DM triage; brand/community prompt packs that propagate via shareable links the way sticker packs do.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Why this architecture specifically.
                </Word> The marketplace shape is the whole point and explicitly stated: Telegram is the only platform where
                all AI models can compete freely while users have full control over their experience. Apple Intelligence
                picks one model. Meta AI picks one model. xAI builds for one model. Telegram is taking the opposite shape —
                OpenAI, Anthropic, Grok, Llama shops, and pseudonymous indie operators all plug into the same socket on
                equal footing. Structurally identical to TON itself: neutral substrate, third-party operators, no vertical
                capture. It's also the regulator-legible-single-vendor failure mode that killed Libra, avoided by
                construction.
            </Paragraph>
            <Paragraph>
                The deeper architectural read is that Bot-to-Bot + Profile Automation + Custom Styles + Fragment identity +
                TON Wallet + (now) Cocoon compute are exactly the primitive set you need for autonomous agents that can hold
                identity, transact value, run verifiable confidential inference, and operate inside a 1B-user social graph.
                WhatsApp has none of those payment/identity/compute layers. iMessage has none. WeChat has them but isn't a
                neutral substrate. This is "agent OS" rather than "messenger with an AI button."
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The thesis-relevant signal is the Cocoon citation.
                </Word> Sticker search touches every active user — it's a real production surface, not a demo. Telegram
                could have routed that inference to AWS, GCP, or any commodity provider. They explicitly named Cocoon as the
                runtime, in the launch post, alongside the marketplace framing. That's first-party adoption of TON-settled
                compute by the largest captive customer Cocoon could conceivably have, in a consumer feature, on launch day.
                Every one of those inference jobs settles as TON transactions and flows into validator fee income — which is
                what your TONX position captures regardless of any direct hardware exposure. Worth a row in the causal
                timeline: event_time = May 7 2026, event = first publicly-cited first-party Telegram product running on
                Cocoon, found_time = today. That's a forward-test confirmation of the Cocoon-as-revenue-line thesis, not an
                attention change.
            </Paragraph>
        </Message>
        <Message
            at="2026-05-08T05:11:17.528386Z"
        >
            <Origin>019e05ff-1a83-7254-a8d2-91e662e7f6fa</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                You aren’t explaining to me concrete use cases for applications that would presumably make money. And can
                covoon be used? These are not independent questions. I’m talking about using cocoon to build Telegram bots
            </Paragraph>
        </Message>
        <Message
            at="2026-05-08T05:12:58.776352Z"
        >
            <Origin>019e05ff-1a83-729d-980a-c6979820ae76</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched the web for “Cocoon Network TON developer SDK how to use confidential AI compute”</Action>
            <Paragraph>You're right, those are one question. Let me answer it as one.</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Yes, Cocoon is open for third-party developers today.
                </Word> The repo is at <Word>
                    <Verbatim />
                    github.com/TelegramMessenger/cocoon
                </Word>. There are two participant roles: Workers (run a TEE-equipped GPU rig, earn TON per inference) and
                Developers (call the network via SDK/API, pay TON per inference). The Cocoon docs are explicit that "the
                client library is designed to run on servers (backend infrastructure). For example, the Telegram backend
                would run multiple client instances to handle user requests." So the canonical pattern for a third-party
                Telegram bot is:
            </Paragraph>
            <Paragraph>
                User DMs your bot → your bot's webhook server receives the message → your server calls the Cocoon SDK to
                submit a confidential inference request → Cocoon's proxy routes to a TEE worker (Intel TDX) running an
                open-weight model (currently DeepSeek, Qwen, and growing) → encrypted result returns to your server → your
                bot replies in chat. Settlement happens on-chain in TON via Cocoon's smart contracts. Your business pays TON
                for compute. GPU operators earn TON. Validators capture fees on every transaction. This is the loop where
                TONX participates without owning hardware.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Now the businesses.
                </Word> The defensible category is anything where <Word>
                    <Emphasis />
                    cryptographic privacy is the paid feature
                </Word>, not a nice-to-have. Building these on OpenAI's API gives you a "we promise" privacy story; building
                them on Cocoon gives you TEE attestation — a verifiable claim that the prompt and output were processed in a
                sealed enclave the operator cannot see. That difference is what justifies premium pricing and is the wedge
                against ChatGPT-wrapper competitors.
            </Paragraph>
            <Paragraph>Concrete revenue-shaped categories:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Contract / NDA / legal review bot.
                    </Word> Lawyers, freelancers, SMEs upload contracts, get redlines and risk flags. Nobody wants to paste
                    an unsigned client MSA into ChatGPT. Subscription or per-document pricing.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Tax / financial document analysis.
                    </Word> Bank statements, P&amp;L, K-1s, foreign tax docs. Highly regulated data, real willingness to
                    pay, currently underserved on mobile in most non-US jurisdictions.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Code review / SAST for proprietary codebases.
                    </Word> Many enterprises explicitly ban pasting internal source into hosted LLM APIs. TEE attestation is
                    exactly the artifact a CISO can sign off on. Per-seat SaaS.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Trading / portfolio assistant.
                    </Word> Position data is alpha-leaking by definition — sending it to a centralized LLM is a non-starter
                    for any serious trader. A Storm Trade companion bot that ingests your live positions, runs scenarios,
                    and suggests hedges, with Cocoon attestation that your book never left a TEE, is a product. This one is
                    in your domain.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Medical / health advisory.
                    </Word> Symptom check, lab result interpretation, medication interaction. Telegram's
                    MENA/LatAm/India/Russia user base has a much larger underserved primary care market than the US framing
                    suggests.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Therapy / mental health companion.
                    </Word> Long-term memory of personal disclosures is the most sensitive consumer data category. Cocoon +
                    Telegram is a more defensible privacy story than Replika or Character.ai.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Translation / localization for sensitive documents.
                    </Word> Already the closest to forward-tested, since Telegram itself is piloting translation through
                    Cocoon.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        KYC / identity verification.
                    </Word> ID + selfie liveness check, OCR, face match. Sensitive by definition. Telegram-native onboarding
                    flow for exchanges, DeFi protocols, gambling, lending.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Personal-history assistant over your own Telegram chats.
                    </Word> Ingest your chat history, summarize, recall, draft. The dataset is your entire social and
                    professional life — ChatGPT can't credibly hold this. New category.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Journalist / activist tooling.
                    </Word> Document analysis, source translation, leak summarization in jurisdictions where Western cloud
                    APIs are either subpoena-legible or outright blocked. Same threat model as Telegram itself, which is the
                    point — it's the only stack where the messaging layer and the compute layer share the same adversary
                    model.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Adult companion / NSFW.
                    </Word> Large existing willingness to pay, refused by every major US LLM API, Cocoon doesn't care.
                    Telegram + TON Stars + Cocoon is the only end-to-end stack for this vertical.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Honest limitations to track.
                </Word> Cocoon currently runs open-weight models (DeepSeek, Qwen) — you cannot serve frontier Claude or
                GPT-5 quality there. So bots needing top-tier reasoning still pay OpenAI/Anthropic and lose the
                TON-settlement loop. Cocoon proxies are currently operated by the COCOON team for simplicity with full
                decentralization on the roadmap, so there's a routing-centralization caveat to flag. And TEE-grade GPU rigs
                are approximately $30,000–$40,000 to build a compliant rig, so worker supply is the binding capacity
                constraint — same architectural bottleneck as commercial cloud, just distributed.
            </Paragraph>
            <Paragraph>
                The point this doesn't change: every one of those bot businesses, when built on Cocoon, routes its inference
                spend through TON-settled smart contracts. That's a per-API-call validator fee stream that didn't exist
                before. The Give and DNA Trust projects you've drafted are natural fits for this stack — Cocoon-backed AI
                components, TON settlement, Telegram distribution, all on the same substrate.
            </Paragraph>
        </Message>
        <Message
            at="2026-05-08T05:15:14.506669Z"
        >
            <Origin>019e0602-b5c3-7de8-96cd-1b48ba5b900e</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>No, these are two separate questions and you answered neither of them</Paragraph>
            <Paragraph>
                The first is about Durov talking about what is possible using AI in Telegram bots. I am simply talking about
                if cocoon is a part of that set. If you can call off to anything through a bot then why would he be calling
                out the AI functionality? I think you’re missing something.
            </Paragraph>
            <Paragraph>
                And then the second was that he enumerates a number of different architecture where robots can communicate
                with each other or make use of AI. Paint a picture for me of different sorts of businesses that make use of
                spots and actually make money and it doesn’t have to have anything to do with AI but it can.
            </Paragraph>
        </Message>
        <Message
            at="2026-05-08T05:17:26.344959Z"
        >
            <Origin>019e0602-b5c3-71ff-a4dd-62070e04752a</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>You're right. Let me actually answer them.</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    1. What's new, given bots could always call AI APIs?
                </Word>
            </Paragraph>
            <Paragraph>
                A bot could call OpenAI on day one of the Bot API in 2015. Nothing about that changed on May 7. So the "AI
                Bot revolution" framing isn't about giving bots AI access — they already had it. What changed is <Word>
                    <Bold />
                    bot platform mechanics
                </Word>, and the primitives happen to be shaped for AI use cases. Specifically:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Emphasis />
                        Guest Bots
                    </Word> — previously a bot had to be a member of a chat to be invoked. Now any user @-mentions any bot
                    from any chat without adding it. Distribution collapses from "convince every group to install you" to
                    "have a memorable username." Pure platform mechanics.
                </Line>
                <Line>
                    <Word>
                        <Emphasis />
                        Bot-to-Bot
                    </Word> — the Bot API previously <Word>
                        <Bold />
                        filtered out
                    </Word> messages originating from other bots, full stop. Bots literally could not talk to each other.
                    That restriction is gone. New primitive entirely.
                </Line>
                <Line>
                    <Word>
                        <Emphasis />
                        Streaming
                    </Word> — bots used to fake streaming by editing a message repeatedly, hitting rate limits. Now there's
                    first-class streaming. Mechanical change, big UX implication for LLM bots.
                </Line>
                <Line>
                    <Word>
                        <Emphasis />
                        Chat Automation in Profiles
                    </Word> — your <Word>
                        <Bold />
                        user account
                    </Word> (not a separate bot identity) can now have a bot answer on your behalf. Bot identity merges with
                    user identity at the protocol level. This is the most architecturally significant change in the post.
                </Line>
                <Line>
                    <Word>
                        <Emphasis />
                        Custom AI Styles
                    </Word> — prompts become user-shareable artifacts that propagate through the social graph like sticker
                    packs.
                </Line>
            </Paragraph>
            <Paragraph>
                Cocoon is <Word>
                    <Bold />
                    not
                </Word> in this announcement set as a bot platform feature. It appears exactly once, as the backend Telegram
                itself chose for sticker search. From a third-party bot developer's perspective, Cocoon is just one of the
                things your backend can call — same as it was before May 7. The Bot API doesn't know or care whether your
                bot's inference runs on OpenAI, Anthropic, Cocoon, or a Raspberry Pi in your closet. Cocoon and this update
                are orthogonal: the announcement is about <Word>
                    <Bold />
                    how bots interact in chats
                </Word>, Cocoon is about <Word>
                    <Bold />
                    where some bots run their compute
                </Word>.
            </Paragraph>
            <Paragraph>
                Durov frames it as an "AI revolution" because the new primitives are mostly useless without AI driving them
                — streaming text doesn't matter for command bots, bot-to-bot only matters for agentic workflows, Profile
                Automation only matters if the auto-replier can plausibly imitate you. So the platform change <Word>
                    <Emphasis />
                    is
                </Word> an AI play in motivation, but the change itself is structural, not a new AI capability.
            </Paragraph>
            <Paragraph>
                That's the thing I missed: I treated "AI revolution" as if the news were AI access. The news is that bots
                stopped being second-class citizens you install per-chat and became a callable layer summonable from
                anywhere, composable with each other, and capable of acting as your account.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    2. Bot businesses that make money — AI optional, the actual picture.
                </Word>
            </Paragraph>
            <Paragraph>
                The Telegram bot economy already prints money and predates AI by years. The biggest existing categories:
            </Paragraph>
            <Paragraph>
                <Word>
                    <Emphasis />
                    Execution venues (largest by revenue today).
                </Word> Memecoin trading bots — Maestro, Banana Gun, BonkBot, Trojan, Photon, GMGN — charge 0.5–1% on every
                trade and route through Solana/EVM DEXs. Multiple of these have done eight to nine figures annually in fees.
                The product is <Word>
                    <Bold />
                    speed
                </Word>: faster than any web wallet for a sniper trying to be the first buyer of a new launch. Almost all
                are Solana/EVM-focused. TON-native trading bots are a wide-open wedge — Storm Trade exists as a venue, but
                the bot-execution UX layer on top of TON DEXs is underbuilt relative to the Solana stack. This is a category
                where being first with a good TON sniper bot is a real opportunity.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Emphasis />
                    Consumer games / tap-to-earn.
                </Word> Notcoin (35M users), Hamster Kombat (300M peak), Catizen, Dogs, Yescoin. Monetize via Stars
                purchases, ad networks (Hamster Kombat allegedly took ~$40M+ in pre-launch ad revenue), and token airdrops
                that recapture user attention. This category produced TON's first viral consumer wave and remains a working
                playbook for new entrants who can manufacture viral mechanics.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Emphasis />
                    Casino / gambling.
                </Word> TON-denominated stakes, regulatory-arbitrage friendly because the front-end is just a chat.
                Significant unreported revenue.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Emphasis />
                    Content paywalls.
                </Word> Bot takes Stars or TON, auto-adds buyer to a private channel. Used by trading-alpha groups, course
                creators, fitness coaches, NSFW creators. Most of the OnlyFans-replacement economy on Telegram runs through
                this pattern. Telegram takes a cut on Stars; the operator keeps the rest.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Emphasis />
                    Utility SaaS.
                </Word> Price/wallet/sports/weather alerts (freemium with paid tiers), customer-support routing for
                businesses, lightweight productivity (polls, scheduling, task tracking for groups), affiliate funnels
                capturing commissions on off-platform purchases. Lower ARPU than trading or games but extremely long-tail.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Emphasis />
                    Identity and marketplace infrastructure.
                </Word> Username sniping/auction bots adjacent to Fragment, sticker/NFT marketplaces, OTC escrow desks with
                KYC handled in chat.
            </Paragraph>
            <Paragraph>Now layer the May 7 primitives on top, and these new shapes become viable:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Summonable specialist services
                    </Word> sold as Stars subscriptions — translation, contract review, fact-check, sticker generation,
                    on-demand data lookup. Guest Bots removes the "must be installed in this chat" friction, so the unit
                    economics shift toward subscription rather than per-group install.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Profile-Automation-as-a-service
                    </Word> for high-value inboxes — executives, founders, creators with thousands of incoming DMs. A bot
                    that pre-screens, drafts replies, and surfaces urgent messages, sold as monthly SaaS at $50–500/mo. The
                    willingness to pay is real because the alternative is a human EA at 20× the cost.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Multi-bot orchestration services
                    </Word> — a "research desk" front-end that subcontracts to specialist bots (translation, citations,
                    market data, legal precedent) via the bot-to-bot protocol and charges a margin on the orchestration.
                    Marketplace-of-agents shape rather than monolithic product.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Style packs
                    </Word> — branded voice templates, comedian writing styles, marketing copy systems, sold like sticker
                    packs. Low ARPU per pack, near-zero marginal cost, viral distribution.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Hybrid AI + execution bots
                    </Word> — the trading bot category extended with AI-driven position summaries, hedge suggestions,
                    narrative explanations. The execution take rate is where the money is; the AI is the retention and
                    conversion lever.
                </Line>
            </Paragraph>
            <Paragraph>
                The pattern across both sets: the May 7 changes are not themselves new revenue streams. They're distribution
                and composability primitives that lower the cost of building bot-shaped businesses and expand the
                addressable surface for ones that already work. Trading bots alone have shown bots in Telegram can capture a
                percentage of transaction flow that on web is taken by Robinhood, Coinbase, and Binance. The interesting
                question is what other product categories can extract similar take rates once the primitives let them be
                summoned, composed, and embedded in the social graph rather than installed.
            </Paragraph>
        </Message>
        <Message
            at="2026-05-08T05:22:27.383708Z"
        >
            <Origin>019e0609-5337-7d48-9251-3a1b2a0b98b9</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                I don’t see how your consumer games answer uses bots. Are you sure you know what I’m talking about where I
                say to myself I would like to use telegram bots to make money and then I understand how I could make money.
            </Paragraph>
            <Paragraph>
                If you said something to me like why is the database useful, I would say that you can create any Web
                application that stores state, including e-commerce applications that allow you to sell things, platforms
                that allow you to trade things, or really, any service that needs to be faithful. The modern web certainly
                runs on database because you need them to track user and customer identity
            </Paragraph>
            <Paragraph>
                There’s an answer for how a database works approximately. How does one use a bot to build an application
                that’s useful
            </Paragraph>
        </Message>
        <Message
            at="2026-05-08T05:24:08.870850Z"
        >
            <Origin>019e0609-5337-7990-bbbd-4603a100114a</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                You're right, that was sloppy. Notcoin and Hamster Kombat aren't bots — they're Mini Apps (full webviews)
                launched <Word>
                    <Emphasis />
                    from
                </Word> a bot. The bot is just the entry point and identity broker; the gameplay surface isn't bot-shaped.
                Let me actually answer at the level you're asking.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    What a bot is, mechanically.
                </Word> A bot is a server you run, addressed by a Telegram username, that receives events from Telegram
                (incoming messages, button taps, file uploads, payment confirmations, group joins) via webhook, and sends
                things back (messages, inline keyboards, invoices, file attachments, Mini App launch links) via Telegram's
                HTTP API. Your server runs anywhere. Telegram is the transport, the identity layer, and the renderer.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    What being a bot gives you for free, that a web or mobile app would otherwise have to build.
                </Word> This is the database-level answer to "why is this useful":
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Identity.
                    </Word> Every event arrives with a Telegram user ID. You never build signup, password reset, OAuth,
                    sessions, or 2FA. Auth is solved on arrival.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Distribution.
                    </Word> Any Telegram user reaches your service by knowing your @username. No App Store, no install, no
                    marketing landing page. The user types your name.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Push.
                    </Word> You can send a message to any user who has ever talked to you, anytime. No APNs, no FCM, no
                    email deliverability problem. This is the most underpriced primitive in the platform.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        UI.
                    </Word> Buttons, inline keyboards, forms, file uploads, payment invoices, share sheets all render
                    natively across every Telegram client on every OS. You don't write a frontend.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Payments.
                    </Word> Stars and TON are first-class — one API call generates an invoice the user pays in two taps. No
                    Stripe integration, no app-store cut.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Group context.
                    </Word> A bot can be added to a group and receive events from many users at once, so any service
                    involving multi-user coordination, mediation, or matching gets a native multi-user surface.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    So a bot is useful any time you'd build a server-side service whose interaction shape is one of these:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Emphasis />
                        Command in → server response.
                    </Word> Stateful back-and-forth: support, intake, Q&amp;A, surveys, ordering, booking, KYC, scheduling.
                </Line>
                <Line>
                    <Word>
                        <Emphasis />
                        External event → push to user.
                    </Word> "Tell me when X happens": price alerts, wallet monitors, on-chain events, server uptime, news,
                    sports, package tracking. Largest underbuilt category, cheapest to build, because the bot replaces the
                    entire push-notification stack.
                </Line>
                <Line>
                    <Word>
                        <Emphasis />
                        Payment gate → access grant.
                    </Word> Subscription channels, paywalled content, course access, premium support. The bot is the cashier
                    and the access list.
                </Line>
                <Line>
                    <Word>
                        <Emphasis />
                        User → external API → user.
                    </Word> A keystroke-to-execution bridge: trading bots, swap bots, DNS lookups, domain registration,
                    anything that invokes an external service on the user's behalf.
                </Line>
                <Line>
                    <Word>
                        <Emphasis />
                        Multi-user mediation in groups.
                    </Word> Polls, role assignment, marketplace matching, escrow between strangers, moderation, scheduling
                    for teams.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Concrete shape, with the bot's actual mechanical role:
                </Word>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Emphasis />
                    Memecoin trading bot (Maestro, BonkBot, Trojan).
                </Word> User types <Word>
                    <Verbatim />
                    /buy CONTRACT 1 SOL
                </Word>. The bot's server signs and submits a swap to a DEX using a wallet keyed to the user's Telegram ID,
                monitors the transaction, sends the fill back as a chat message. The bot is a <Word>
                    <Bold />
                    keystroke-to-blockchain bridge that uses Telegram for identity, UI, and notification
                </Word>. Charges 1% per swap. Eight-figure business.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Emphasis />
                    On-chain wallet alerter.
                </Word> User gives the bot a wallet address. The server subscribes to chain events; on activity, it sends a
                Telegram message. The bot is <Word>
                    <Bold />
                    a notification dispatcher with free identity and free push
                </Word>. Freemium subscription.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Emphasis />
                    Paywalled channel.
                </Word> User clicks "subscribe," bot sends a Stars invoice, on payment confirmation the bot calls Telegram's
                API to add the user to a private channel and tracks renewals. The bot is <Word>
                    <Bold />
                    a subscription register and access gate using Telegram's payment rails
                </Word>. Operator keeps roughly 70% of Stars revenue net of Telegram's cut.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Emphasis />
                    B2B customer support.
                </Word> User DMs the bot with a question; the server checks the company's CRM, pulls account state,
                auto-answers from a knowledge base or escalates to a human via the company's Slack. The bot is <Word>
                    <Bold />
                    a CRM frontend embedded in the user's existing messenger
                </Word>.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Where Cocoon fits in this picture.
                </Word> Your bot's server can call anything from inside its handler — Postgres, OpenAI, a smart contract,
                Stripe, Cocoon. They're at totally different layers. Bot API = how your service talks to users. Cocoon =
                where some bots happen to physically run their LLM inference. Same relationship as Stripe and AWS in a
                normal SaaS: one is your payment rail, the other is your compute backend, they don't compete and they don't
                substitute. Cocoon becomes the right compute backend specifically when your bot's value proposition includes
                a verifiable privacy claim — i.e. when "trust us, we don't log your prompts" isn't a defensible product
                statement and you need TEE attestation as part of what you're selling.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    What May 7 actually changed about the primitive.
                </Word> Bots used to be installed-per-chat and could only talk to humans. Now: Guest Bots means a bot is
                callable from any chat without being a member; Bot-to-Bot means a bot can subcontract to other bots over the
                same API; Profile Automation means a bot can act as your account in your DMs. These extend the surface where
                the bot primitive applies — they don't change what a bot fundamentally is.
            </Paragraph>
        </Message>
        <Message
            at="2026-05-08T05:29:40.472513Z"
        >
            <Origin>019e060f-ee6c-7b05-a66f-052db90397c8</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Tell me some notable applications that use bots. Can you put a front end around your body where you read
                what your Telegram bot sees? If you’re bot is a part of your application and your application is outside of
                Telegram, how would the user get an identity?
            </Paragraph>
        </Message>
        <Message
            at="2026-05-08T05:31:04.613862Z"
        >
            <Origin>019e060f-ee6c-7c8b-b28b-75d949988574</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                <Word>
                    <Bold />
                    Notable bot-shaped applications.
                </Word> A short representative set, each picked for a different mechanical pattern:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        @wallet
                    </Word> — Telegram's custodial crypto wallet. Run by a third party (Wallet Corp, BitLicense-adjacent).
                    Sends/receives BTC, USDT, TON, runs P2P fiat market, sells Stars. A full neobank-shaped product whose
                    entire UI is bot messages and a Mini App. One of the largest mainstream-facing crypto onboarding
                    surfaces in existence.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Maestro / BonkBot / Trojan / Banana Gun
                    </Word> — memecoin execution venues, already covered.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Blum
                    </Word> — started as a TON-side hybrid CEX/DEX bot, scaled to tens of millions of users, raised
                    significant capital, did its own token launch. Pure bot-native fintech.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Fragment
                    </Word> — TON username and anonymous-number auction marketplace. Mini App + bot, settles in TON.
                    Multi-hundred-million-dollar GMV.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Combot / Rose / Group Help
                    </Word> — group moderation infrastructure (captcha, anti-spam, mute/ban, role assignment). Used in
                    millions of groups. Freemium SaaS.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        BotFather
                    </Word> — Telegram's own meta-bot for creating bots. The platform's developer console is itself a bot.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        GitHub / Sentry / Jira / Datadog bots
                    </Word> — DevOps notification routing into team chats. The bot is a webhook-to-chat adapter; the value
                    is push delivery to engineers without email.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        ControllerBot
                    </Word> — third-party admin tool for channel operators (scheduling, formatting, cross-posting).
                    Productivity SaaS.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        @QuizBot, @PollBot
                    </Word> — Telegram's own native survey and education tooling.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Yes, you can put a frontend around your bot.
                </Word> Your bot's webhook handler is just a regular HTTP endpoint on your server. Every event it receives —
                messages, button taps, payments, file uploads — lands in your application's database the same way a form
                submission on a website would. From that point on, Telegram is one input/output channel for your
                application; you can build any number of additional surfaces against the same backing data. Concrete
                patterns:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Emphasis />
                        Bot + admin web dashboard.
                    </Word> User talks to bot. Conversations land in your DB. Support agents see them in a Zendesk-style web
                    UI and reply from the web UI; your server posts the replies back through the Bot API. The user sees a
                    Telegram chat; the team sees a normal SaaS console.
                </Line>
                <Line>
                    <Word>
                        <Emphasis />
                        Bot + user web/mobile app.
                    </Word> User executes commands via bot, server stores state, user can also log into a web dashboard or
                    iOS app to see analytics, history, settings. Maestro, Banana Gun and most serious trading bots do this —
                    the bot is the fast input path, the web dashboard is the deep configuration and reporting surface.
                </Line>
                <Line>
                    <Word>
                        <Emphasis />
                        Bot + scheduler/composer.
                    </Word> Marketing team writes broadcasts in a web tool, server sends them through the Bot API to
                    subscribed users. The bot is just the delivery channel.
                </Line>
            </Paragraph>
            <Paragraph>
                The pattern to internalize: <Word>
                    <Bold />
                    Telegram is a channel, your bot is your server, and your server can have any number of other channels (web, iOS, Android, Slack, email) over the same database.
                </Word> Same shape as a customer service platform with multi-channel inboxes — Telegram is just one row.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    How users get an identity if your app spans Telegram + outside.
                </Word> Telegram identity is the user's Telegram user ID (a 64-bit integer that arrives on every bot event,
                pre-authenticated). The bridging problem is connecting that ID to a user record on your non-Telegram
                surface. There are five established patterns:
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Login with Telegram
                    </Word> (the official OAuth-shaped widget). Your web app embeds Telegram's login button. User clicks,
                    Telegram authenticates them, your server receives a signed payload (user ID, name, username, photo) and
                    verifies the HMAC using your bot's token. You now have a verified Telegram identity tied to your web
                    session. This is the cleanest answer for web/mobile apps that want Telegram users.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Mini App initData.
                    </Word> If your "external" surface is a Mini App launched from your bot, Telegram injects signed <Word>
                        <Verbatim />
                        initData
                    </Word> into the webview containing the user's identity. You verify the signature with your bot token.
                    No separate signup — the Telegram identity <Word>
                        <Emphasis />
                        is
                    </Word> the app identity. This is why Mini Apps onboard so frictionlessly and why most TON consumer apps
                    use this pattern.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Deeplink with one-time token.
                    </Word> Your web app generates a code, gives the user a <Word>
                        <Verbatim />
                        https://t.me/YourBot?start=login_&lt;TOKEN&gt;
                    </Word> link. User clicks, the bot receives <Word>
                        <Verbatim />
                        /start login_&lt;TOKEN&gt;
                    </Word>, the bot's server matches the token to the pending web session and links the Telegram ID to it.
                    Older but still common.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Phone-number share.
                    </Word> Bot asks user to share their phone via the <Word>
                        <Verbatim />
                        requestContact
                    </Word> button. User taps "Share." Bot receives the phone number. You match it against your existing
                    user database (email/phone signup users get linked to their Telegram account).
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Reverse linking from your web app.
                    </Word> User signs up normally on your website with email/password. Your site shows them a code or
                    "Connect Telegram" button. They send the code to your bot, bot ties the Telegram user ID to their
                    existing web account. This is how Linear, Notion, Vercel, etc. add Telegram notifications to existing
                    accounts.
                </Line>
            </Paragraph>
            <Paragraph>
                The architectural point: identity is <Word>
                    <Bold />
                    federated
                </Word> in this stack. Telegram authenticates a Telegram user ID for you for free on every bot event and on
                every Mini App launch. Your job is to maintain a mapping in your database — "app user record N is linked to
                Telegram user ID M" — and use whichever of the five patterns fits the user's entry point. For a
                Telegram-native consumer product like Give, you can skip external identity entirely and just use Telegram ID
                as the user key; for a hybrid product where some users come in via web, you pick pattern 1 or 5.
            </Paragraph>
        </Message>
        <Message
            at="2026-05-08T05:36:38.265335Z"
        >
            <Origin>019e0616-4e55-7a07-a080-dc0e74ea5dc9</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Still not seeing the use case I think it’s time to invent an app that you think might be profitable that
                makes use of bots and I will pointed parts of it and question whether they’re really useful. When you
                explore explore the idea of whether or not Telegram bots are useful outside of mini apps, or in telegram
                channels themselves, or wherever you deploy a bot
            </Paragraph>
        </Message>
        <Message
            at="2026-05-08T05:38:48.817791Z"
        >
            <Origin>019e0616-4e55-7b46-a2f7-863419a5ad57</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Fair. Inventing one. I'll commit, you tear into it.</Paragraph>
            <Paragraph>
                Quick framing first, since you raised it: bots get deployed in four contexts and they are not equally useful
                across all of them.
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Emphasis />
                        DM with the bot
                    </Word> — fine for transactional flows, alerts, AI chat. Often a Mini App does the same job better.
                </Line>
                <Line>
                    <Word>
                        <Emphasis />
                        Bot in a group chat
                    </Word> — this is where bots have a moat that Mini Apps and web apps fundamentally cannot match, because
                    Mini Apps are individual and a group chat is a shared context.
                </Line>
                <Line>
                    <Word>
                        <Emphasis />
                        Bot in a channel
                    </Word> — mostly does plumbing for the channel operator (subscription gates, auto-posting, comment
                    moderation). Not user-facing.
                </Line>
                <Line>
                    <Word>
                        <Emphasis />
                        Bot summoned via Guest Bot
                    </Word> — new since May 7. On-demand specialist services callable from any chat.
                </Line>
            </Paragraph>
            <Paragraph>
                The strongest defense of the bot primitive is in the group-chat context, so I'll pick an app that lives
                there.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    App: Tally — a shared expense and settlement ledger that lives in group chats.
                </Word>
            </Paragraph>
            <Paragraph>
                Target users: roommates, travel groups, beach-house shares, recurring dinner crews, parent groups handling
                kid logistics, small project teams splitting costs. Anywhere a group already exists as a Telegram chat and
                people are already paying for things on each other's behalf.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Mechanical role of the bot.
                </Word> Tally is added to an existing group once. From that point, members capture expenses inline by
                @-mentioning it:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Verbatim />
                        @TallyBot $80 dinner, split with Ana, Mike
                    </Word> → bot updates the running ledger, posts a one-line confirmation
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        @TallyBot $1200 rent, I paid, owed by everyone equally
                    </Word> → same
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        @TallyBot balance
                    </Word> → bot DMs the asker their personal balance privately
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        @TallyBot settle
                    </Word> → bot generates a Stars or TON invoice for the user's net balance to each creditor; one tap
                    clears it
                </Line>
            </Paragraph>
            <Paragraph>
                The bot pushes a weekly digest to the group: "As of Sunday, Mike owes Ana $40, Doug owes Mike $25, everyone
                else is square."
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Where the Mini App fits.
                </Word> Tapping the bot's name opens a Mini App with the full historical ledger, charts, search, CSV export,
                FX rate configuration. The split is sharp: <Word>
                    <Bold />
                    bot is for capture and notification inside the group; Mini App is for browsing and configuration outside it.
                </Word>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Monetization.
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Free: groups up to 5 members, 30 days of history.</Line>
                <Line>
                    Pro: $3/month per group, paid in Stars by anyone in the group. Adds unlimited members and history,
                    multi-currency with FX, receipt-photo OCR, recurring expenses, exports.
                </Line>
                <Line>
                    Settlement fee: 15bps on TON-settled cross-border splits where members want crypto rails instead of
                    Venmo/Wise/Revolut.
                </Line>
                <Line>
                    Corporate tier: per-seat SaaS for international teams using Telegram natively (LatAm, MENA, ex-Soviet,
                    India) who don't have Expensify/Concur as a default.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Why this specifically requires the bot primitive (the four arguments I'd defend):
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Emphasis />
                        The expenses are already happening in the chat as plain text.
                    </Word> "I just paid for dinner, you owe me $40" is a sentence people already type. Tally captures that
                    same intent via @-mention. Splitwise requires every member to leave the conversation, open a separate
                    app, navigate to the right group, type the expense, and return. The friction differential is the
                    product.
                </Line>
                <Line>
                    <Word>
                        <Emphasis />
                        Push closes the settlement loop.
                    </Word> Weekly "Anna owes Mike $87" reminders are what actually get people to pay. Mini Apps cannot
                    push. Email gets ignored. The bot's free push channel — to a chat people open ten times a day — is the
                    only delivery primitive cheap enough to make passive groups settle.
                </Line>
                <Line>
                    <Word>
                        <Emphasis />
                        Multi-user mediation in groups is native to bots and impossible for Mini Apps.
                    </Word> Every group member shares context with the bot. The bot can address individuals privately while
                    keeping the audit trail public. A Mini App is one user per session.
                </Line>
                <Line>
                    <Word>
                        <Emphasis />
                        Onboarding is one  0 .
                    </Word> Splitwise requires every member to install an app and sign up. Tally requires one person to add
                    the bot. Network effects compound: every new group exposes ~5 new users to the bot, and the bot's
                    username spreads as people copy it into other groups.
                </Line>
            </Paragraph>
            <Paragraph>
                The web dashboard only exists for the corporate tier; consumer users never see it. The Mini App handles
                every case where chat-as-UI is wrong (six months of expense history, CSV generation, FX configuration).
            </Paragraph>
            <Paragraph>That's the app. Probe it.</Paragraph>
        </Message>
        <Message
            at="2026-05-08T05:42:02.969673Z"
        >
            <Origin>019e061b-4313-7b3f-b0c4-f97827877cff</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                This is interesting, but seemingly you need an AI to be able to interpret those messages and update
                programming infrastructure. When I said design, I meant architect specified the software components to that.
            </Paragraph>
        </Message>
        <Message
            at="2026-05-08T05:43:35.237062Z"
        >
            <Origin>019e061b-4313-7934-8fca-8fe5536ad723</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Right, you're correct — without LLM parsing the @-mention syntax has to be rigid command-style, which kills
                the UX premise. The NLU layer is what makes the chat-as-capture-surface actually work. Let me lay out the
                components.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Architecture, by component:
                </Word>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    1. Telegram Bot API integration.
                </Word> Webhook server that receives every event from Telegram (messages, button taps, payments, group
                joins). Authenticates the bot token, dispatches events by type to handlers, and writes outbound calls back
                through Telegram's HTTP API. Includes a rate limiter (Telegram enforces per-bot send limits) and an
                idempotency layer (Telegram retries on webhook timeouts). This is the I/O boundary.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    2. NLU / extraction layer.
                </Word> Receives raw message text on @-mention. Composes a structured-output prompt that includes the
                message text, the last ~10 messages of group context, and the group's member roster. Calls an LLM expecting
                JSON of the shape <Word>
                    <Verbatim />
                    &#123;amount, currency, payer_id, payee_ids&#91;&#93;, split_type, description, confidence&#125;
                </Word>. Validates against schema. If <Word>
                    <Verbatim />
                    confidence &lt; threshold
                </Word>, sends a clarification reply with an inline keyboard ("Did you mean: $80 split between you, Ana, and
                Mike?"). On confirm, commits to the ledger; on edit, opens a structured form. This is the layer where Cocoon
                vs. OpenAI vs. Anthropic is a backend choice — and where Tally has a real privacy product claim, since the
                input is financial data plus social graph (who eats with whom, who pays for whom). TEE attestation lets
                Tally credibly say "your spending data never leaves a sealed enclave," which OpenAI-backed competitors
                cannot say.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    3. Member resolution.
                </Word> When the LLM returns "split with Ana, Mike," names need to map to Telegram user IDs in the group.
                Component maintains the group roster (synced on every member-change event from Telegram), normalized
                display-name index, recent-message-author bias for disambiguation, and a confirmation loop when ambiguous
                (two people named Ana).
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    4. Ledger core.
                </Word> Append-only expense table keyed by <Word>
                    <Verbatim />
                    (group_id, expense_id)
                </Word>, with <Word>
                    <Verbatim />
                    payer
                </Word>, <Word>
                    <Verbatim />
                    amount
                </Word>, <Word>
                    <Verbatim />
                    currency
                </Word>, <Word>
                    <Verbatim />
                    payees&#91;&#93;
                </Word>, <Word>
                    <Verbatim />
                    split_method
                </Word>, <Word>
                    <Verbatim />
                    source_message_id
                </Word>, <Word>
                    <Verbatim />
                    created_at
                </Word>. Derived balance graph computed on read. Includes a min-cash-flow simplifier that turns N-by-N debts
                into the minimum number of settlements ("Mike pays Ana $87, Doug pays Ana $40, done"). Edits are new rows
                with a <Word>
                    <Verbatim />
                    supersedes
                </Word> pointer; nothing is mutated. This is the database.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    5. Settlement / payments.
                </Word> Two rails:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Stars rail:
                    </Word> generate Telegram payment invoices via <Word>
                        <Verbatim />
                        sendInvoice
                    </Word>, handle the <Word>
                        <Verbatim />
                        pre_checkout_query
                    </Word> and <Word>
                        <Verbatim />
                        successful_payment
                    </Word> webhook events, update ledger atomically with payment confirmation.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        TON rail:
                    </Word> TON Connect for wallet linking, generate settlement transaction templates, listen for
                    confirmations on the TON blockchain via a node or RPC provider, mark ledger settled on confirmation.
                    Idempotency guarded by transaction hash.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    6. Notification scheduler.
                </Word> Cron generates weekly digests per active group; an event-driven path sends real-time alerts ("Mike
                just added you to a $40 split"). All deliveries go through the same Bot API client. Per-user quiet hours and
                notification preferences stored as user settings.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    7. Mini App.
                </Word> React-based webview hosted on Tally's domain. Authenticates via Telegram's WebApp <Word>
                    <Verbatim />
                    initData
                </Word> (HMAC-verified with the bot token, no separate login). Reads from a thin REST API over the ledger
                core. Used for browsing history, charts, CSV export, FX configuration, settling complex multi-party
                balances. Not in the MVP.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    8. OCR pipeline (Pro tier, post-MVP).
                </Word> Photo upload event → vision model call (again, Cocoon or OpenAI's vision endpoint) → structured
                extraction <Word>
                    <Verbatim />
                    &#123;vendor, line_items&#91;&#93;, total, tax, tip&#125;
                </Word> → inline keyboard for user to assign payees per line item → ledger commit. Same NLU confirmation
                pattern as text.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    9. FX layer (Pro tier).
                </Word> External rate provider (openexchangerates or similar), cached with short TTL, used both for display
                normalization and for settlement amount calculation in cross-currency groups.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    10. Identity / subscription state.
                </Word> Telegram user ID is the universal primary key. Subscription records map <Word>
                    <Verbatim />
                    (telegram_user_id, group_id)
                </Word> to plan tier and Stars receipt history. TON wallet links from TON Connect map <Word>
                    <Verbatim />
                    telegram_user_id
                </Word> to wallet address.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    11. Observability.
                </Word> Per-event logging, NLU success/failure rates by prompt version, LLM cost per group per month,
                settlement volume, group DAU/retention, error monitoring. Tracks LLM cost as a unit-economic input — every
                group has a measurable inference cost and a measurable revenue contribution.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Data flow on a typical event:
                </Word>
            </Paragraph>
            <Paragraph>
                User types "@TallyBot $80 dinner, split with Ana and Mike" in a group → Telegram POSTs the update to the
                webhook → router identifies it as a bot mention → NLU layer pulls last 10 messages and the roster, sends to
                LLM, gets JSON back → member resolution maps "Ana" and "Mike" to user IDs → bot replies in chat with an
                inline keyboard ("Confirm: $80 paid by Doug, owed equally by Doug, Ana, Mike. ✓ / Edit / Cancel") → user
                taps Confirm → callback_query webhook fires → ledger writes the expense and updates the balance graph → bot
                edits its own message to "Recorded ✓" → done. End-to-end latency target ~2 seconds, dominated by the LLM
                call.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    MVP cut.
                </Word> Components 1, 2, 3, 4, partial 5 (Stars only), partial 6, partial 10 (just user IDs and Stars
                subscriptions), partial 11. Mini App, TON, OCR, FX, corporate tier are all post-launch. The MVP is a webhook
                server, a Postgres database, an LLM API client, and the Telegram payment integration. One backend developer
                can build the MVP in 4–6 weeks.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    On Cocoon specifically:
                </Word> the LLM call in component 2 is the point where compute backend matters. A back-of-envelope: 100K
                active groups × ~10 mentions/week × ~600 tokens average = ~2.6B tokens/month inference traffic. On Cocoon's
                open-weight inference (Qwen/DeepSeek-class), per-token cost is materially lower than OpenAI/Anthropic, and
                every settled inference call routes through TON smart contracts as validator-fee throughput. This is exactly
                the loop where the bot business creates real on-chain economic activity that benefits TONX's staked position
                regardless of any other thesis component.
            </Paragraph>
        </Message>
    </Chapter>
);
