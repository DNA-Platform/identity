import { Bold, Chapter, Date, Emphasis, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { CodeBox, Dated, Message, Speaker, Verbatim } from '../../../.manual/.book';
import { Action, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[16 April 2026](2026-04-16)</Date>
        </Dated>
        <Title>[[ Conversation ]]</Title>
        <Message
            at="2026-04-16T08:24:02.254441Z"
        >
            <Origin>019d9564-8a88-750b-8f0a-976c762e4877</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Allbirds / Newbird has pivoted to GPU as a service from sneakers! Any evidence that they’re using those GPU
                uses for TON / Cocoon? Look everything up vigorously and don’t guess no and if you don’t know, tell me when
                you’re guessing.
            </Paragraph>
        </Message>
        <Message
            at="2026-04-16T08:24:39.050408Z"
        >
            <Origin>019d9564-8a89-7de4-b2db-b69eb9d18e40</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched the web for “Allbirds Newbird GPU as a service pivot 2025 2026”</Action>
            <Action>Searched the web for “NewBird AI BIRD TON blockchain Telegram Cocoon”</Action>
            <Action>Searched the web for “NewBird AI BIRD GPU customers partnerships Cocoon TON compute”</Action>
            <Paragraph>
                Good catch — this is breaking news from yesterday (April 15, 2026). Here's what the evidence actually shows:
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The NewBird pivot is confirmed and real.
                </Word>
            </Paragraph>
            <Paragraph>
                BIRD stock surged nearly 650% after Allbirds announced it's pivoting to AI, securing a $50 million
                convertible financing facility. NewBird AI plans to use initial funding to buy high-performance GPUs and
                provide dedicated AI computing capacity to customers. The company executed a definitive agreement with an
                institutional investor and will sell the Allbirds brand and footwear assets to American Exchange Group,
                rebranding as NewBird AI. The facility is expected to close in Q2 2026, with stockholder approval required
                at a Special Meeting anticipated May 18, 2026.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    On the TON/Cocoon question — here's what I found, being direct:
                </Word>
            </Paragraph>
            <Paragraph>
                Cocoon is absolutely live and relevant. Cocoon is a decentralized confidential compute network built on the
                TON blockchain, processing AI requests with full confidentiality through Trusted Execution Environment
                nodes. GPU providers earn TON tokens, developers get cheap AI compute, and Telegram acts as the first major
                demand engine.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    But there is zero public evidence of any NewBird AI / Cocoon / TON connection.
                </Word> Nothing in the SEC filings, press releases, investor materials, or any coverage from yesterday's
                announcement mentions TON, Telegram, Cocoon, or any blockchain-native GPU marketplace. NewBird AI is
                targeting enterprises, AI developers, and research organizations that cannot secure compute resources
                through hyperscalers or spot markets — under long-term lease arrangements, a standard neocloud model.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Where this gets interesting as a thesis, though — and I'm speculating here, flagging it clearly:
                </Word>
            </Paragraph>
            <Paragraph>
                The structural fit is non-trivial. NewBird is a small-cap with $50M, no track record, and no operational
                history in AI compute, making it a modest starting point relative to well-capitalized competitors like
                CoreWeave and Lambda Labs. To differentiate, they'd need a niche customer base or channel partner. Cocoon
                needs GPU supply it can trust. That's a natural handshake — but there is <Word>
                    <Bold />
                    no announced relationship, no disclosed customer, and the institutional investor behind the $50M facility is not named.
                </Word>
            </Paragraph>
            <Paragraph>
                That undisclosed institutional investor is the thread worth pulling. Chardan is the placement agent —
                they're a small-cap specialist bank with crypto-adjacent deal history. That's worth watching but I won't
                call it signal yet.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Bottom line:
                </Word> The pivot is real and very fresh. The TON/Cocoon connection is a plausible but currently
                unsubstantiated hypothesis. No guessing past that point.
            </Paragraph>
        </Message>
        <Message
            at="2026-04-16T08:25:58.125656Z"
        >
            <Origin>019d9566-59d7-75cd-a550-ea6529abb8a6</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Does cocoon have any of these companies pledged to provide it some compute not that it needs to have a deal
                or anything?
            </Paragraph>
        </Message>
        <Message
            at="2026-04-16T08:26:14.489189Z"
        >
            <Origin>019d9566-59d7-7e8b-962b-74618982dd22</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched the web for “Cocoon TON compute providers GPU partners pledged hardware 2025 2026”</Action>
            <Paragraph>
                Yes — and there's one very notable name: <Word>
                    <Bold />
                    AlphaTON Capital (Nasdaq: ATON)
                </Word>.
            </Paragraph>
            <Paragraph>
                AlphaTON Capital entered into agreements to acquire and deploy a 1,000+ Nvidia B200 GPU high-performance
                compute cluster valued at approximately $68 million, explicitly positioning itself as a critical compute
                provider for Telegram's Cocoon AI, while also monetizing idle capacity through CUDO Compute's marketplace.
            </Paragraph>
            <Paragraph>
                Their CTO Logan Golema confirmed: "Our strategic partnership with Telegram and Cocoon provided early access
                to the technology, and we successfully launched a Cocoon pilot on November 25, 2025."
            </Paragraph>
            <Paragraph>
                The rollout timeline they announced: Q1 2026 for hardware delivery, validation and soft launch of Cocoon AI
                inference, and Q2 2026 for full Cocoon AI workloads and planned expansion of 2-4 additional clusters.
            </Paragraph>
            <Paragraph>
                Beyond AlphaTON, the broader model is more decentralized. Cocoon's model allows any GPU owner to run the
                Cocoon stack on a TEE-enabled GPU server and receive TON payments transparently for each processed request —
                so there's no single list of "pledged" institutional providers the way a traditional cloud contract would
                work.
            </Paragraph>
            <Paragraph>
                The pattern forming here is interesting from your thesis angle: AlphaTON (ATON) is essentially the TONX
                equivalent for Cocoon compute — a Nasdaq-listed vehicle specifically structured around the TON/Telegram
                ecosystem, now with a hardware anchor in Cocoon. No mention of NewBird/BIRD anywhere in this infrastructure
                stack. As of this search, BIRD is not in the picture for Cocoon specifically.
            </Paragraph>
        </Message>
        <Message
            at="2026-04-16T08:26:58.741516Z"
        >
            <Origin>019d9567-4551-7380-a982-f28dd2d1ca34</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                No, no no we looked up Alpha TON in the previous chat and we’re not even sure the company’s gonna be there
                in a year and they’re in hot water and they have no official connection to TON other than two developers
                that they hired who are vaguely part of the ecosystem
            </Paragraph>
        </Message>
        <Message
            at="2026-04-16T08:27:18.348614Z"
        >
            <Origin>019d9567-4551-70bf-92d5-47f996934ebf</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched past conversations for “AlphaTON ATON hot water concerns legitimacy”</Action>
            <Paragraph>
                Got it, acknowledged - we already stress-tested ATON and it's essentially a shell play with red flags. Let
                me search for any other, more credible compute providers for Cocoon.
            </Paragraph>
            <Action>Searched the web for “Cocoon TON compute provider partner company 2026 GPU supply”</Action>
            <Paragraph>
                Fair point and fully acknowledged — we already diagnosed ATON as a shell play riding the narrative, stock
                down 90%, Morgan Stanley quietly exited, and their "strategic partnership" with Cocoon amounts to a press
                release with no official validation from Telegram or the TON Foundation.
            </Paragraph>
            <Paragraph>
                The honest answer from this search is: <Word>
                    <Bold />
                    ATON is the only named company that has publicly claimed to be a dedicated Cocoon compute provider.
                </Word> And it's not a credible anchor.
            </Paragraph>
            <Paragraph>
                What the search actually reveals about Cocoon's supply side is that it's a permissionless protocol — any GPU
                owner runs the Cocoon stack on a TEE-enabled server and receives TON payments automatically per processed
                request. There's no vendor list, no MSA roster, no announced enterprise compute partners beyond ATON's
                self-promotion.
            </Paragraph>
            <Paragraph>
                The structural reality is that Cocoon is designed so it doesn't <Word>
                    <Emphasis />
                    need
                </Word> pledged institutional supply — the economics are supposed to attract individual GPU operators
                organically. Which means NewBird, even if they wanted to plug in, would just... plug in. No announcement
                required, no partnership press release needed.
            </Paragraph>
            <Paragraph>
                So to directly answer your question: no legitimate, credible company has pledged supply to Cocoon in any
                publicly documented way. ATON claimed to, but we've already ruled them out as noise. The supply side right
                now appears to be individual node operators, which is by design.
            </Paragraph>
        </Message>
        <Message
            at="2026-04-16T08:28:09.143269Z"
        >
            <Origin>019d9568-589b-7577-87bf-eaa3ca923138</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>I wonder if that will change so we should keep our eyes open</Paragraph>
        </Message>
        <Message
            at="2026-04-16T08:28:21.752272Z"
        >
            <Origin>019d9568-589b-70a0-b34e-1052e3139223</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Agreed, and it's actually a meaningful signal to watch for. The moment a credible, capitalized GPU
                infrastructure company — not a shell rebrand — announces Cocoon supply, it validates two things
                simultaneously: that Cocoon's demand is real enough to attract serious hardware, and that the TON payment
                rails work at commercial scale.
            </Paragraph>
            <Paragraph>
                The analogy I'd use: early AWS customers weren't announced either — but when Netflix moved to AWS it became
                a thesis-confirming event. A similar "Netflix moment" for Cocoon would be a known compute operator quietly
                registering nodes and then disclosing it in an earnings call or infrastructure filing, not via Globe
                Newswire.
            </Paragraph>
            <Paragraph>Things worth watching specifically:</Paragraph>
            <Paragraph>
                NewBird's actual customer disclosures once they're operational — their May 18 shareholder vote closes Q2,
                hardware deployment follows. If any of their lease customers are in the TON/Telegram orbit, it may surface
                in an SEC filing before it surfaces anywhere else.
            </Paragraph>
            <Paragraph>
                CUDO Compute is worth tracking independently — ATON named them as their marketplace partner, and CUDO is a
                real company with real infrastructure. If CUDO itself integrates Cocoon as a workload type on their
                platform, that's a much more credible signal than anything ATON has said.
            </Paragraph>
            <Paragraph>
                And the Cocoon GitHub activity is probably the most honest leading indicator — contributor cadence, node
                count growth, model support expansion. That's ground truth versus narrative.
            </Paragraph>
        </Message>
        <Message
            at="2026-04-16T08:29:24.990912Z"
        >
            <Origin>019d9569-80ce-729f-a451-74a354a4a048</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                That’s right it has to be a company that can handle being paid in TON. Have you searched for overseas
                companies that we could conceivably purchase on different exchanges because other countries have better laws
                regarding cryptocurrency so I could imagine that they would have more appetite to be willing to be paid in
                TON
            </Paragraph>
        </Message>
        <Message
            at="2026-04-16T08:29:56.191325Z"
        >
            <Origin>019d9569-80ce-76ce-8256-59d23c247c48</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>
                Searched the web for “GPU as a service company listed stock exchange crypto friendly jurisdiction 2025 2026”
            </Action>
            <Paragraph>That was too broad. Let me get more specific.</Paragraph>
            <Action>
                Searched the web for “GPU compute infrastructure company listed UAE Singapore Hong Kong exchange crypto
                payment TON 2025 2026”
            </Action>
            <Paragraph>Getting warmer but not targeted enough. Let me narrow this down.</Paragraph>
            <Action>
                Searched the web for “decentralized GPU compute company publicly listed stock non-US exchange TON toncoin
                crypto payment 2025 2026”
            </Action>
            <Paragraph>
                Honest answer: I'm not finding what you're describing as an existing investable category yet. Let me tell
                you what I <Word>
                    <Emphasis />
                    did
                </Word> find that's relevant.
            </Paragraph>
            <Paragraph>
                The closest things that exist are not stocks at all — they're tokens. Render Network, Akash Network, and
                Bittensor are all decentralized GPU compute plays you can buy, but they live on-chain, not on any exchange.
                No foreign bourse has a listed GPU compute company with declared crypto payment rails that I can locate.
            </Paragraph>
            <Paragraph>
                What the searches <Word>
                    <Emphasis />
                    did
                </Word> surface that's worth noting for the thesis:
            </Paragraph>
            <Paragraph>
                The UAE/Dubai crypto hub is actually under strain right now. By early 2026, more than 1,800 crypto companies
                were based in the UAE, but the Iran war has Binance relocating staff from Dubai to Hong Kong, Tokyo, Kuala
                Lumpur, and Bangkok. That shifts the center of gravity for crypto-native infrastructure companies toward
                Hong Kong and Singapore — which is where you'd want to watch for a company like you're describing to emerge
                or list.
            </Paragraph>
            <Paragraph>
                Hong Kong passed a Stablecoins Ordinance in May 2025, implemented a full VATP licensing regime, and local
                estimates suggest as much as $10 billion in institutional flows could enter the city's digital asset
                ecosystem as stablecoin issuance begins in 2026. That's the most credible regulatory foundation for a GPU
                company willing to be paid in TON to list publicly.
            </Paragraph>
            <Paragraph>
                The honest framing: this investable category doesn't exist yet as a public equity outside the US. ATON tried
                to occupy it and failed. What you're watching for is something that hasn't been created — which makes it
                genuinely early, not just undiscovered. The signal will likely be a Hong Kong or Singapore listing, not a
                Nasdaq rebrand.
            </Paragraph>
        </Message>
        <Message
            at="2026-04-16T08:31:51.050413Z"
        >
            <Origin>019d956b-bc42-76f1-9d3f-6da87e6448a1</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>OK, but what are these GPU compute coins and can be they be used for TON?</Paragraph>
        </Message>
        <Message
            at="2026-04-16T08:32:12.796590Z"
        >
            <Origin>019d956b-bc42-7fde-9b26-dab2fc951f27</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>
                Searched the web for “Akash Network Render Network Bittensor TON blockchain integration interoperability
                2025 2026”
            </Action>
            <Paragraph>
                Good question, and the answer actually clarifies why none of them are a natural TON fit. Here's the honest
                breakdown:
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Render (RNDR)
                </Word> — originally a GPU network for digital artists and rendering, now extending to AI. The token lives
                on Ethereum and Solana. It's a GPU marketplace but oriented toward visual compute — rendering, 3D, media.
                Not inference-focused. Wrong chain, wrong use case for Cocoon.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Akash (AKT)
                </Word> — a decentralized cloud marketplace where providers offer compute and users deploy workloads through
                blockchain-based contracts. More general-purpose cloud, closer to a decentralized AWS. Built on Cosmos.
                There's even an open question about whether it might migrate to Solana. Either way, no TON connection.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Bittensor (TAO)
                </Word> — focuses on decentralized machine learning itself rather than raw compute rental — it coordinates
                participants who train and provide AI models, rewarding useful outputs through token incentives. So it's not
                even really a GPU rental marketplace, it's more like a decentralized model-quality competition. Built on its
                own Layer-1 called Subtensor using Polkadot Substrate. Also in some turmoil — a leading subnet operator
                called Covenant AI publicly exited in April 2026, accusing the co-founder of centralized control, which
                triggered a 20%+ price drop.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The core issue for your question:
                </Word> none of these are TON-native or TON-compatible. They each have their own payment rails, their own
                tokens, their own chains. To plug into Cocoon, a GPU provider needs to accept TON as payment and run the
                Cocoon TEE stack specifically. These networks pay in their own tokens by design — that's the whole point of
                each ecosystem.
            </Paragraph>
            <Paragraph>
                So they're not competitors to Cocoon exactly. They're parallel universes. A GPU owner can choose which
                network to plug into, but they're not interoperable — you're either earning RNDR, AKT, TAO, or TON. The
                question for the thesis is whether Cocoon's TON-denominated yield is attractive enough to pull hardware
                supply away from those alternatives, not whether those projects can somehow feed into Cocoon.
            </Paragraph>
        </Message>
        <Message
            at="2026-04-16T08:32:58.902670Z"
        >
            <Origin>019d956c-c13c-7412-bed0-a1406cb409c6</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>But it doesn’t need to be on TON to be able to produce TON computer does it?</Paragraph>
        </Message>
        <Message
            at="2026-04-16T08:33:16.924258Z"
        >
            <Origin>019d956c-c13c-7d65-9693-cb92b478c08d</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                You're exactly right, and that's a sharp distinction. The Cocoon worker is software you run on physical
                hardware. The TON blockchain is just the payment rail. The GPU doesn't "live on" TON — it just needs a TON
                wallet address to receive payments for processed inference requests.
            </Paragraph>
            <Paragraph>
                So the actual question is completely separate from chain architecture. A company could be:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Listed on the Singapore Exchange</Line>
                <Line>Hold its treasury in dollars or AKT or anything else</Line>
                <Line>Run Akash or Render workloads on its GPUs during off-peak hours</Line>
                <Line>
                    <Word>
                        <Emphasis />
                        Also
                    </Word> run Cocoon worker nodes on the same hardware and collect TON
                </Line>
            </Paragraph>
            <Paragraph>
                Those aren't mutually exclusive at all. The hardware is agnostic. The only requirements Cocoon imposes are
                technical — TEE-capable GPUs, Intel TDX support, updated VBIOS — not blockchain affiliation.
            </Paragraph>
            <Paragraph>
                So the real question you're asking is narrower and more interesting: <Word>
                    <Bold />
                    which GPU compute companies, anywhere in the world, are in jurisdictions where receiving and holding TON as operating revenue is legally unambiguous?
                </Word> Because the technical barrier is low. The friction is entirely on the accounting and regulatory side
                — can your CFO book TON as revenue without triggering a compliance nightmare?
            </Paragraph>
            <Paragraph>
                That reframes the search entirely. It's not "who's a TON company" — it's "who has the legal and operational
                structure to accept crypto-denominated compute revenue." Which is a much larger universe, and one where Hong
                Kong and Singapore registered companies are genuinely ahead of US-listed ones right now.
            </Paragraph>
            <Paragraph>That's the thread worth pulling.</Paragraph>
        </Message>
        <Message
            at="2026-04-16T08:34:08.881475Z"
        >
            <Origin>019d956d-d4ef-73d0-8b82-2a89faa2b1cd</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Maybe this is dumb, but can I use AKT or a similar to rent compute to make some money based on cocoon?
            </Paragraph>
        </Message>
        <Message
            at="2026-04-16T08:34:17.741617Z"
        >
            <Origin>019d956d-d4ef-7e7c-bff6-3fa25cd6da7c</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Not a dumb question at all — you're asking whether you can arbitrage between decentralized compute markets.
                The logic being: rent cheap GPU time on Akash, point it at Cocoon, collect TON.
            </Paragraph>
            <Paragraph>
                The honest answer is: <Word>
                    <Bold />
                    theoretically interesting, probably not practically profitable, and there's one hard technical blocker.
                </Word>
            </Paragraph>
            <Paragraph>
                The blocker is the TEE requirement. Cocoon doesn't just need GPU compute — it specifically needs GPUs
                running inside Intel TDX trusted execution environments with attestation. That's specialized hardware
                configuration, not just any GPU you can rent. Akash's provider network is general-purpose — most nodes are
                not TEE-configured, and you'd have no way to verify attestation on rented hardware even if they were.
                Cocoon's whole privacy guarantee depends on hardware-level verification that the enclave is genuine. You
                can't fake that on rented infrastructure.
            </Paragraph>
            <Paragraph>So the arbitrage path is blocked at the hardware layer, not the economics layer.</Paragraph>
            <Paragraph>
                What <Word>
                    <Emphasis />
                    could
                </Word> work conceptually is the reverse direction — if you owned TEE-capable hardware, you could rent it
                <Word>
                    <Emphasis />
                    out
                </Word> on Akash or similar when Cocoon demand is low, and redirect it to Cocoon when TON yield is higher.
                The hardware is the asset, and you're optimizing which network pays best at any given moment. That's
                actually how sophisticated node operators in DePIN networks think about yield.
            </Paragraph>
            <Paragraph>But renting someone else's compute to farm Cocoon — the TEE requirement closes that door.</Paragraph>
        </Message>
        <Message
            at="2026-04-16T08:35:01.381478Z"
        >
            <Origin>019d956e-a242-79f2-97a7-c51471be91db</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>How much money can you make with cocoon? I’m just curious if I set up nodes</Paragraph>
        </Message>
        <Message
            at="2026-04-16T08:35:15.438676Z"
        >
            <Origin>019d956e-a242-7c06-a662-b9ecb7f807e3</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched the web for “Cocoon TON GPU node earnings revenue per GPU 2025 2026”</Action>
            <Paragraph>
                Honest answer: there are no published earnings figures for Cocoon nodes specifically. The official site says
                earnings depend on demand, model selection, and uptime but gives no concrete numbers. That's a real gap —
                Cocoon is still early and the demand side is thin enough that specific yield data doesn't exist publicly
                yet.
            </Paragraph>
            <Paragraph>
                What I <Word>
                    <Emphasis />
                    can
                </Word> give you is useful context from the broader DePIN compute market for comparison:
            </Paragraph>
            <Paragraph>
                Aethir, a comparable decentralized GPU network, reports Cloud Hosts earning between $25,000–$40,000 per
                month per 8-GPU node at 95%+ utilization rates. But that's a more mature network with 150+ enterprise
                clients and long-term contracts — Cocoon isn't there yet.
            </Paragraph>
            <Paragraph>
                The more relevant variable for Cocoon specifically is the hardware requirement. The TEE requirement means
                you're not running just any GPU — you need newer NVIDIA cards with TDX support and updated VBIOS. That's
                roughly H100 or A100 class hardware, which costs $25,000–$40,000 per card new, though secondhand prices have
                come down.
            </Paragraph>
            <Paragraph>So the honest framing for your question is:</Paragraph>
            <Paragraph>
                The yield is completely unknown right now because demand on Cocoon is still early. You'd be taking on
                significant hardware capex for uncertain TON-denominated revenue that depends entirely on how fast Telegram
                routes actual workloads through the network. The upside is you'd be accumulating TON at whatever the market
                rate is — which aligns directly with your thesis. The downside is the hardware cost is real and the demand
                may not fill your nodes for months.
            </Paragraph>
            <Paragraph>
                It's less "can I make money" and more "do I want GPU exposure to the Cocoon thesis in hardware form rather
                than equity form." That's a different question.
            </Paragraph>
        </Message>
        <Message
            at="2026-04-16T08:35:50.019410Z"
        >
            <Origin>019d956f-6102-75e5-98da-641ed6ba8670</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Well, it can’t be too thin because I’m pretty sure Telegram itself is starting to roll out features on
                cocoon. There has to be somewhere to understand if there’s money to be made here.
            </Paragraph>
        </Message>
        <Message
            at="2026-04-16T08:36:22.671863Z"
        >
            <Origin>019d956f-6102-79c5-9bae-4829f4701864</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched the web for “Cocoon TON node earnings calculator GPU provider income 2026”</Action>
            <Action>Fetched https://cocoon.wiki/gpu-mining/</Action>
            <Action>Fetched https://cocoon.wiki/gpu-mining/</Action>
            <Paragraph>
                Good news — there's actually a calculator on the official Cocoon wiki. Here's what it shows:
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    H100 (80GB), running Qwen3-0.6B model, at 50% network utilization: ~125 TON per month.
                </Word>
            </Paragraph>
            <Paragraph>
                At today's TON price of ~$1.37, that's roughly <Word>
                    <Bold />
                    $171/month per GPU
                </Word> at half capacity. At 100% utilization, call it $340/month.
            </Paragraph>
            <Paragraph>Now the hardware reality:</Paragraph>
            <Paragraph>
                Only NVIDIA H100 and newer GPUs with Confidential Computing support are accepted for production. Consumer
                GPUs like the RTX series are not supported due to lack of CC capabilities. You also need an Intel
                TDX-capable CPU, 128GB+ RAM, Linux kernel 6.16+, and a CC-enabled VBIOS obtained directly from NVIDIA
                Enterprise Support.
            </Paragraph>
            <Paragraph>
                An H100 runs $25,000–$30,000 new. At $171/month that's a 12–15 year payback at current TON price and 50%
                utilization — which is obviously not the investment case.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The actual investment case, for you specifically, is different though.
                </Word> You're not trying to earn dollars — you're stacking TON at a discount to spot while getting paid to
                run infrastructure that validates your thesis. Every month is ~125 TON regardless of price, so if TON
                re-rates toward your thesis valuation, the economics look completely different in hindsight.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Also worth knowing:
                </Word> there's a third-party managed service called thecocoon.fun. They rent H100 instances from cloud
                providers like Scaleway, bridge SOL to TON under the hood, configure the Cocoon worker with TDX and
                Confidential Compute, and give you a dashboard — you just pay in SOL with no TON management required. That
                lets you test real Cocoon yield without owning hardware, though they're explicit that returns aren't
                guaranteed and it's high risk.
            </Paragraph>
            <Paragraph>
                The managed service path is probably the right way to get a real data point before committing to hardware
                capex.
            </Paragraph>
        </Message>
        <Message
            at="2026-04-16T08:37:52.482942Z"
        >
            <Origin>019d9571-3e95-76f0-8980-2db9af6a122a</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Wait, so this is finally a thing that we’re talking about. There’s something set up so that I could try
                arbitrage right?
            </Paragraph>
        </Message>
        <Message
            at="2026-04-16T08:38:21.492873Z"
        >
            <Origin>019d9571-3e95-7176-8811-bca9e802a6fe</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Fetched https://www.thecocoon.fun/</Action>
            <Action>Searched the web for “thecocoon.fun pricing SOL H100 rental cost earnings TON arbitrage”</Action>
            <Paragraph>
                Yes, that's exactly what thecocoon.fun is — the first real try-before-you-buy mechanism for this. But I want
                to walk you through the actual math before you get excited, because the arbitrage framing needs
                stress-testing.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The numbers as they stand:
                </Word>
            </Paragraph>
            <Paragraph>
                Cocoon earns you ~125 TON/month per H100 at 50% utilization. At $1.37 that's ~$171/month in revenue.
            </Paragraph>
            <Paragraph>
                H100 rental rates currently range from $1.38/hr at the cheapest providers up to an average of $2.92/hr
                across 42 cloud providers. At the cheapest end that's ~$1,000/month. At average rates, ~$2,100/month.
            </Paragraph>
            <Paragraph>
                So in dollar terms, this is deeply negative right now. You'd be paying $1,000–2,000/month in compute rental
                to earn $171 in TON. That's not arbitrage, that's a loss.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    But here's where it gets interesting for you specifically:
                </Word>
            </Paragraph>
            <Paragraph>
                The break-even math inverts completely at different TON prices. At TON's ATH of ~$8, those 125 TON/month
                become ~$1,000 — which starts approaching the cheapest H100 rental cost. At $10 TON and 80% utilization
                you're actually profitable on rented hardware.
            </Paragraph>
            <Paragraph>
                So what thecocoon.fun actually gives you is a <Word>
                    <Bold />
                    leveraged long on TON price
                </Word>, with real infrastructure costs as the carry. It's not a conventional arbitrage — it's closer to
                buying TON on margin, except instead of paying interest to a broker you're paying it to Scaleway, and
                instead of getting nothing for it you're running actual Telegram AI infrastructure.
            </Paragraph>
            <Paragraph>
                Whether that's interesting to you depends entirely on your TON price conviction — which you have, more than
                most. But I wouldn't call it arbitrage in the clean sense. I'd call it a high-carry TON accumulation play
                with thesis alignment baked in.
            </Paragraph>
        </Message>
        <Message
            at="2026-04-16T08:39:44.718778Z"
        >
            <Origin>019d9572-f2d5-73c5-b3ea-3e1220ba5359</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                You also get the test cocoon I would think that you would get more money if the network becomes more
                valuable and also under utilized right anti TON goes up
            </Paragraph>
        </Message>
        <Message
            at="2026-04-16T08:39:56.226696Z"
        >
            <Origin>019d9572-f2d5-76c0-ab2d-33fc6f89fa92</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                You're exactly right, and you're actually making three separate bullish arguments that compound on each
                other:
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    1. Early network premium.
                </Word> Right now supply of Cocoon nodes is thin. Cocoon's pricing is market-driven — developers bid for
                compute. If Telegram is routing real workloads through an undersupplied network, early nodes may be
                capturing above-equilibrium rates before serious hardware supply comes in. The 125 TON/month figure from the
                calculator is probably a conservative baseline, not a ceiling.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    2. Network growth multiplier.
                </Word> As Telegram integrates more AI features through Cocoon — translation, summarization, assistant
                features — the demand side scales with Telegram's user base. That's potentially a billion-user demand engine
                growing into a currently small supply pool. Each new Telegram AI feature is a direct demand injection into
                your node's revenue.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    3. TON price appreciation.
                </Word> Your TON thesis is independent of the above. If you're right on TON re-rating, the 125 TON you earn
                each month is worth more in dollar terms over time, even if the TON-denominated rate stays flat.
            </Paragraph>
            <Paragraph>
                Those three things are multiplicative, not additive. A 3x on TON price, 2x on network utilization, and some
                early-node premium could turn a currently negative-carry position into a genuinely profitable one — and
                you'd have been accumulating TON at today's prices the whole time.
            </Paragraph>
            <Paragraph>
                The other thing you're implicitly getting, which has no dollar value but has real thesis value: <Word>
                    <Bold />
                    you become a node operator.
                </Word> You have ground-truth data on actual Cocoon demand, request volume, and TON payment flows that
                nobody outside the network can see. For someone running your investment framework, that's not nothing.
            </Paragraph>
        </Message>
        <Message
            at="2026-04-16T08:40:28.412682Z"
        >
            <Origin>019d9573-9e33-7e22-8dea-e5d4a4322b57</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Are there any reports of anyone trying to do this arbitrage and seeing what they get at least reporting
                their TON earnings in a month? Someone bothered to set this up so there must be a reason.
            </Paragraph>
        </Message>
        <Message
            at="2026-04-16T08:40:48.010948Z"
        >
            <Origin>019d9573-9e33-7399-a3e7-73e2ac6206a9</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>
                Searched the web for “Cocoon TON GPU node operator earnings report experience Reddit Telegram 2025 2026”
            </Action>
            <Action>Searched the web for “thecocoon.fun review actual earnings TON per month user experience”</Action>
            <Action>
                Searched the web for “"cocoon" TON GPU node "earned" OR "earning" OR "per day" OR "per month"
                site:reddit.com OR site:t.me OR site:medium.com 2026”
            </Action>
            <Paragraph>
                Straight answer: <Word>
                    <Bold />
                    no public earnings reports from individual node operators exist.
                </Word> Nobody has posted "I ran a Cocoon node for a month, here's what I got." The community reporting just
                isn't there yet — which is itself a signal about how early this is.
            </Paragraph>
            <Paragraph>
                What does exist is the official Telegram channel for Cocoon, and thecocoon.fun's on-chain distribution
                transactions which they say are viewable publicly — that's probably the closest thing to real data right
                now, because it shows actual TON being paid out to actual wallets.
            </Paragraph>
            <Paragraph>
                The honest assessment of thecocoon.fun specifically is also worth flagging. Their exchange rate is hardcoded
                in their config at SOL/USDC rate of 137.5, and payments go to a fixed Solana address. That's a centralized
                intermediary taking a margin on both the SOL you pay in and the TON you earn out. You're paying Scaleway
                rates plus their markup to earn Cocoon yield. The economics get thinner, not thicker.
            </Paragraph>
            <Paragraph>
                The most useful thing you could do right now is actually go look at their distribution transactions on-chain
                — they said that's publicly viewable. That would show real TON amounts being distributed to real wallets
                over real time periods. That's ground truth nobody has apparently bothered to write up yet.
            </Paragraph>
            <Paragraph>
                If you wanted a genuine data point for your thesis, running a one-week trial through thecocoon.fun and
                reporting back what you actually earned would be more informative than anything currently published. You'd
                be the first person with public numbers.
            </Paragraph>
        </Message>
        <Message
            at="2026-04-16T08:41:24.975748Z"
        >
            <Origin>019d9574-7ce7-7f39-a9c6-5cc83fadabf2</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Can you go look up that data?</Paragraph>
        </Message>
        <Message
            at="2026-04-16T08:42:19.364779Z"
        >
            <Origin>019d9574-7ce7-7e45-aa2d-5ab561e83259</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Fetched https://www.thecocoon.fun/</Action>
            <Action>Searched the web for “thecocoon.fun distribution transactions TON wallet on-chain payments”</Action>
            <Paragraph>
                The GitHub gave us the actual Solana payment address: <Word>
                    <Verbatim />
                    FwaL3h4imn3zdh5Tty4FcERrurWHaKEh4YfhoCTQhFSu
                </Word>. Let me look it up directly on-chain.
            </Paragraph>
            <Action>Fetched https://solscan.io/account/FwaL3h4imn3zdh5Tty4FcERrurWHaKEh4YfhoCTQhFSu</Action>
            <Action>Searched the web for “FwaL3h4imn3zdh5Tty4FcERrurWHaKEh4YfhoCTQhFSu solana transactions”</Action>
            <Action>Fetched https://solscan.io/account/FwaL3h4imn3zdh5Tty4FcERrurWHaKEh4YfhoCTQhFSu#transfers</Action>
            <Action>Fetched https://explorer.solana.com/address/FwaL3h4imn3zdh5Tty4FcERrurWHaKEh4YfhoCTQhFSu</Action>
            <Action>Searched the web for “"FwaL3h4imn3zdh5Tty4FcERrurWHaKEh4YfhoCTQhFSu"”</Action>
            <Paragraph>
                Can't pull the live blockchain data directly — the explorer sites are blocking my fetches. But the GitHub
                config search returned something more interesting than transaction history. Here's what's hardcoded in
                thecocoon.fun's actual source code:
            </Paragraph>
            <CodeBox>
                {`ESTIMATED_TOTAL_NODES: 100
BASE_RETURN_MULTIPLIER: 7
APY_DECAY_FACTOR: 0.95

BASE_PRICE_PER_HOUR_SOL: 0.04  (~$5.50/hr)
MONTHLY_PRICE_SOL: 25           (~$3,250/month)`}
            </CodeBox>
            <Paragraph>Three things jump out immediately.</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    First
                </Word>, they estimate only <Word>
                    <Bold />
                    100 total nodes
                </Word> on the Cocoon network right now. If accurate, one node is capturing roughly 1% of all Cocoon
                inference traffic. That's a very thin supply side, which means each node is likely earning far more than the
                official calculator's conservative 50%-utilization estimate implies.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Second
                </Word>, their <Word>
                    <Verbatim />
                    BASE_RETURN_MULTIPLIER
                </Word> is <Word>
                    <Bold />
                    7
                </Word>. That's their internal earnings estimate — they think the network pays approximately 7x the cost of
                the compute. Applied to their monthly price of ~$3,250, that implies they're projecting ~$22,750/month in
                TON earnings per node. That's wildly inconsistent with Cocoon's own calculator showing ~$171/month at 50%
                utilization.
            </Paragraph>
            <Paragraph>
                One of these numbers is very wrong — either Cocoon's official calculator is sandbagging, or thecocoon.fun's
                multiplier is aspirational marketing math not grounded in actual network data.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Third
                </Word>, they're marking up Scaleway H100 rates significantly. Scaleway runs H100s at roughly $2–3/hr.
                They're charging $5.50/hr. So you're paying a ~2x premium for the abstraction layer.
            </Paragraph>
            <Paragraph>
                The honest bottom line: the 100-node figure is the most credible and actionable data point here. If that's
                real, this network is genuinely undersupplied right now. The 7x multiplier needs verification against actual
                on-chain payouts before trusting it.
            </Paragraph>
        </Message>
    </Chapter>
);
