import { Bold, Chapter, Date, Emphasis, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Action } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[7 August 2026](2026-08-07)</Date>
        </Dated>
        <Title>[[ 7 August 2026 ]]</Title>
        <Message
            at="2026-08-07T08:40:48.387061Z"
        >
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                the price of gram is getting hit pretty hard. I imagine it has to do with Pavel being labeled a terrorist in
                Russia. When is MTONGA moving forward. Can you find anything relevant across the TON ecosystem which
                includes but is not limited to (and I want ypu to find more components of) TONX, TOP, TON Foundation and
                various projects like tonkeeper, the gram wallet, mira, cocoon and more
            </Paragraph>
        </Message>
        <Message
            at="2026-08-07T08:41:29.932508Z"
        >
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched the web for “GRAM price drop Telegram TON news”</Action>
            <Action>Searched the web for “Pavel Durov Russia terrorist extremist list designation”</Action>
            <Action>Searched the web for “Durov MTONGA "step 5" Make TON Great Again August”</Action>
            <Action>
                Searched the web for “TON ecosystem news August 2026 Tonkeeper Gram Wallet Cocoon Mira TOP Fragment”
            </Action>
            <Action>Searched the web for “Cocoon TON launch Mira AI Gram Wallet news August 2026”</Action>
            <Paragraph>
                Here's the picture. On the price: the Russia designation is real background pressure — Rosfinmonitoring
                added Pavel to its terrorist and extremist list on July 30, a day after the FSB issued an arrest warrant on
                charges of facilitating terrorist activities, and the timing reads as pre-election screw-tightening: it
                comes ahead of Russia's September parliamentary elections, and puts him in the same legal category as
                Navalny. But the acute damage this week was Apple, not Moscow: on August 4 GRAM fell to $1.29 — its lowest
                since late April — after Telegram briefly vanished from the App Store; Apple pulled the app over a content
                violation, Telegram removed the material, and the listing was restored after roughly four hours across all
                storefronts, with a partial bounce back to ~$1.38 once fear eased. Layer that on the June sequence (India's
                one-week ban, Coinbase dropping TON perps) and you get a market that keeps repricing single-platform
                regulatory sensitivity. Notably, the Russian designation targets Pavel personally — Russian legal commentary
                says the criminal case doesn't affect Telegram or its users directly — and it fits the pattern he's flagged:
                he says he was listed precisely for refusing mass surveillance and censorship demands.
            </Paragraph>
            <Paragraph>
                MTONGA: <Word>
                    <Bold />
                    Step 5 has not been posted.
                </Word> The community tracker confirms no official Step 5 yet — the Step 4 Gram announcement only said the
                rebrand paves the way for what comes next. Your forward test stays open. Worth noting the terrorist
                designation may itself be a delaying variable — announcing the next step into this news cycle would be poor
                sequencing, and Pavel's channel has been occupied with the Russia response.
            </Paragraph>
            <Paragraph>Across the ecosystem, the notable threads:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Protocol roadmap
                </Word> (via TONX's July 22 release): planned enhancements include a new collator and validator architecture
                separating block construction from validation — directly relevant to your validator-coupling mechanics. Also
                on the slate: TON Pay 2.0 (L2 payments for Telegram), a new TON Consensus upgrade, and the TON Teleport
                Bridge — a trustless bridge bringing Bitcoin liquidity into TON, mid-2026. The Teleport Bridge is your
                BTC-migration thesis getting literal plumbing.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    TONX
                </Word>: active through July — advancing a share repurchase program (July 1) and publishing ecosystem
                infrastructure commentary, with treasury metrics on a public dashboard.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    TOP/Mira/Cocoon
                </Word>: Mira launched February 2026, now 2M+ users, with over a third of new users discovering it
                organically through group chats — the social-graph distribution mechanism working exactly as your pillar 2
                predicts. The roadmap piece: agent-to-agent interactions and a dedicated payment sub-wallet letting users
                delegate transaction authority so Mira can purchase services and complete checkouts within set limits —
                that's your Mira-as-demand-channel signal advancing. Cocoon is live and processing requests, with Telegram
                as first client.
            </Paragraph>
            <Paragraph>
                Components worth adding to your tracked list, from TOP's current portfolio: TAC (an EVM-compatibility chain
                — Ethereum dApps deploying onto TON rails), Tribute (content monetization), Bullpen (token/futures trading
                in Telegram), Getgems (NFTs), Not Games, and STON.fi/DeDust as the DEX layer. Tonkeeper (Ton Apps Group)
                claims over 30 million monthly active users and was the most downloaded finance app on US Google Play. TAC
                in particular seems underappreciated — it's the inverse of the Monad problem: routing existing EVM demand
                onto TON rather than building capacity and waiting.
            </Paragraph>
            <Paragraph>Want me to dig into TAC or the Teleport Bridge mechanics specifically?</Paragraph>
        </Message>
        <Message
            at="2026-08-07T11:34:56.454906Z"
        >
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Tonkeeper is popular on US Google? Interesting. Yeah look into TAC. You telling me about was what made me
                lose faith in monad as a relevant part of this thesis
            </Paragraph>
        </Message>
        <Message
            at="2026-08-07T11:35:33.455730Z"
        >
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched the web for “TAC blockchain TON EVM layer news 2026”</Action>
            <Action>Searched the web for “TAC bridge security incident exploit TON details”</Action>
            <Action>Searched the web for “TAC TVL Euler Curve DeFi TON adoption July 2026”</Action>
            <Paragraph>
                TAC turns out to be a more dramatic story than I'd flagged — the demand-routing thesis validated hard, then
                the infrastructure failed hard. Here's the arc.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Architecture.
                </Word> The original 2024 plan was a Polygon CDK L2, but that was shelved — the launched TAC chain is a
                sovereign L1 built on Cosmos SDK, bridging to TON via a dedicated cross-chain adapter. The core problem it
                targets: TON's TVM and FunC remain bespoke and inaccessible to Ethereum's developer ecosystem, so TAC lets
                blue-chip DeFi deploy to Telegram's user base without rewriting code. It's explicitly not a Telegram project
                but TOP-backed and inner-orbit. The fee mechanic is elegant for your payments pillar: mini-apps simulate EVM
                gas cost and convert it in real time to TON via an oracle, attached to the user's transaction — so from the
                user side it's all TON, and EVM activity generates TON-denominated demand.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The validation.
                </Word> After the July 2025 mainnet launch, Curve, Morpho, and Euler — each with over $1B TVL on Ethereum —
                deployed on TAC, and within a month TAC's TVL hit ~$208M, 35% more than TON's entire native DeFi TVL
                (~$154M). Euler's CEO stated the logic plainly: Telegram is already part of most crypto users' daily
                routine, and integrating through TAC lets them meet users where they are without separate wallets or
                bridges. That's the inverse-Monad point confirmed by the biggest names in EVM DeFi voting with deployments —
                distribution is the scarce asset, not throughput.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The failure.
                </Word> May 11–12 this year: missing validation in the sequencer software let attackers forge Jetton wallets
                and drain ~$2.86M in USDT, BLUM, and tsTON from the TON side of the bridge. The mechanism, per the
                post-mortem: a forged deposit message made the bridge's TON-side accounting see a valid withdrawal of locked
                assets against a deposit that never existed. By then TVL had already collapsed from the $208M peak — TVL sat
                at ~$2.74M at the time, meaning the exploit roughly equaled the protocol's entire remaining TVL, and the
                token dropped 21%+ on disclosure. The resolution was clean: the attacker returned the funds for a 10%
                white-hat bounty, and TAC committed to restoring bridge liquidity through a structured sale of Foundation
                treasury reserves. The bridge reopened after independent audit review, and a mainnet upgrade (v1.6.0) went
                through June 30.
            </Paragraph>
            <Paragraph>
                The important detail buried in that timeline: TVL went from $208M to ~$3M <Word>
                    <Emphasis />
                    before
                </Word> the exploit, not because of it. Launch incentives rolled off and the mercenary liquidity left. So
                the honest read is: the <Word>
                    <Emphasis />
                    developer
                </Word> thesis validated (Curve/Morpho/Euler don't deploy to nothing), but durable <Word>
                    <Emphasis />
                    user
                </Word> demand from Telegram's side hasn't materialized yet — as of late June, ~$99M market cap, $213M FDV,
                and thin daily volume, with the open question being whether the Telegram distribution converts to durable
                token demand.
            </Paragraph>
            <Paragraph>
                For your thesis this is actually a useful decomposition. TAC proves the pull is real — Ethereum's best
                protocols want Telegram distribution badly enough to deploy day one. What it hasn't proven is the push:
                Telegram users flowing outward into EVM DeFi. That flow likely depends on exactly the pieces still landing —
                native Gram Wallet in every account, Mira's payment sub-wallet, TON Pay 2.0. TAC built the highway before
                the on-ramps exist. Which means it stays "strategically underappreciated" in your framing, but with a
                sequencing dependency: it re-rates when Telegram-native wallet penetration does, not before. The bridge
                remains the standing risk — that attack surface is structural to the adapter design, and it's already been
                hit once.
            </Paragraph>
        </Message>
        <Message
            at="2026-08-07T11:41:02.589101Z"
        >
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                TON won’t be real until telegram users are using gram as their daily store of value to interact on telegram.
                That’s not even an option from an app perspective. Everything else is predeployment testing afaic
            </Paragraph>
        </Message>
        <Message
            at="2026-08-07T11:41:23.350991Z"
        >
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched the web for “Gram Wallet native Telegram in-app rollout status”</Action>
            <Paragraph>
                You're right, and the current state confirms it precisely: the browser-based Gram Wallet is live, but the
                native wallet built into every Telegram app is still planned rather than shipped — no fixed release date, no
                list of launch assets, and no explanation of how zero-fee transfers get subsidized. The Gram team clarified
                the rollout is happening in two stages. So the pivotal event of the entire thesis hasn't occurred.
                Everything to date — TAC, Mira, Tonkeeper's 30M, even the rebrand — is scaffolding around an empty center.
            </Paragraph>
            <Paragraph>
                The distinction matters more than the coverage registers. What exists today is TOP's @wallet — 150M+
                registered users but custodial by default, requiring users to actively seek out a bot and switch to
                self-custody. That's a feature some users found. What Pavel announced is different in kind: default
                placement across the app, not another opt-in mini-app — local seed generation, user-held keys, Telegram
                never touching them, with confirmation tied to the Telegram account itself. Default placement is the whole
                game. Nobody "adopted" iMessage payments or WeChat Pay by seeking out a bot; the rail was just there when
                they needed to send money to someone they were already talking to.
            </Paragraph>
            <Paragraph>
                Your "daily store of value" bar is the right one and worth being precise about, because it's actually two
                thresholds. First: wallet present and funded (the rollout solves presence; funding needs an on-ramp or
                earned Gram — Stars conversion, gifts, creator payouts). Second: Gram as the thing people <Word>
                    <Emphasis />
                    hold between transactions
                </Word> rather than pass through. The second is much harder and is where the volatility problem bites — most
                payment rails at this scale settle in stablecoins precisely because users won't hold a volatile unit. The
                bull case that squares this is your validator-coupling mechanism: users transact in USDT-on-TON, but the
                activity forces Gram lockup and fee flow regardless of what users think they're holding. Store-of-value
                behavior in Gram itself would be a later, stronger regime.
            </Paragraph>
            <Paragraph>
                The pre-deployment framing also reprices the current drawdown correctly. If the thesis-relevant event is
                still ahead, then App Store removals and Rosfinmonitoring listings are noise on a position that hasn't
                reached its test yet. The one thing worth watching closely: "this summer" has about seven weeks left, and
                Pavel's launch language ("largest rollout in human history") is not the phrasing of someone planning to slip
                quietly. If the native wallet ships as MTONGA Step 5 or 6, your forward test on the step sequence and the
                deployment event converge on the same posts.
            </Paragraph>
        </Message>
        <Message
            at="2026-08-07T11:42:17.448663Z"
        >
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Top wallet is there and I use it. But its not part of the interface yet. If Telegram wants a single purpose,
                Venmo like service to be implemented inside every chat and accessible easily then they would give you that
                and until they do, they haven’t launched this thing.
            </Paragraph>
        </Message>
        <Message
            at="2026-08-07T11:42:28.753213Z"
        >
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Exactly — the test is interface placement, not feature existence. The @wallet bot is a destination you
                navigate to; a payment rail is a button that appears where the money moment happens — inside the chat, next
                to the attachment icon, the way Venmo works because it's socially adjacent to the conversation about
                splitting the bill. Until sending Gram to the person you're talking to is one tap from the message thread,
                Telegram hasn't launched payments; it's launched a demo that happens to have 150M registrations.
            </Paragraph>
            <Paragraph>
                And the launch definition has a sharp empirical edge: when it's real, you won't need an announcement to
                know. It'll be in your own client. That's actually the cleanest instrument in your whole tracking setup —
                you're a daily Telegram user in exactly the kind of non-Western market the payments pillar predicts adoption
                starts in. The thesis-confirming event is one you'll observe directly, before the press does.
            </Paragraph>
            <Paragraph>
                The structural reason for optimism that they <Word>
                    <Emphasis />
                    will
                </Word> do it right: Telegram has no committee to water it down. A normal company ships payments as a buried
                tab because legal, partnerships, and platform teams each take a bite. A 30-person company run by one person
                who just called this "the largest rollout in human history" either ships the chat-native version or ships
                nothing. The two-stage rollout language and the July renaming of TOP's product to "Crypto Wallet" — clearing
                the "Wallet" namespace — both read as staging for the native thing rather than substitutes for it.
            </Paragraph>
            <Paragraph>
                So the position's real clock isn't the price chart, it's the UI diff. Everything until the button appears is
                pre-deployment, as you said.
            </Paragraph>
        </Message>
        <Message
            at="2026-08-07T11:45:34.182187Z"
        >
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                I’m sure TOP will help with the native wallet and im sure their defi wallet will bridge to it easily. The
                native one will br gram based and probably focused on usdt perhaps. Not sure. But I want to see the gram
                wallet. Pavel tells us its coming. Maybe the russian dtatus change is in response to this rollout which was
                announced shortly before so putin can make telegram illegal with consequences
            </Paragraph>
        </Message>
        <Message
            at="2026-08-07T11:45:54.398632Z"
        >
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                The timeline supports the reading better than the mainstream coverage does. Sequence: wallet announcement
                July 21 → FSB charges July 29 → Rosfinmonitoring listing July 30. Eight days. And the choice of instrument
                is the tell: they didn't just issue the arrest warrant — they routed it through the <Word>
                    <Emphasis />
                    financial
                </Word> watchdog, whose listing legally requires Russian banks to freeze assets and halt all financial
                services to listed individuals. That's the escalation you'd choose if the threat you're responding to is a
                payments rail, not a speech platform. Russia has had a decade of speech grievances against Telegram; what's
                new in July 2026 is Pavel announcing a non-custodial wallet in every Telegram client — including the ~90
                million Russian ones — that no Russian bank, no Mir card, no Rosfinmonitoring freeze order can touch.
                Non-custodial is the operative word: there's no intermediary to serve the order on.
            </Paragraph>
            <Paragraph>
                The legal architecture also fits your read of where this goes. Russian legal commentary notes the current
                case targets Durov personally and doesn't affect Telegram — but if authorities extend claims to Telegram as
                a service, they could designate it an undesirable or extremist organization, and an extremist-network
                classification carries criminal liability for Russian users who continue using it. So the personal
                designation is the predicate. Putin can't easily criminalize an app 90 million citizens use for speech alone
                — but "financial transactions through a platform run by a designated terrorist" is a much cleaner criminal
                theory, and it activates the moment the wallet ships. They've built the legal trap in advance of the
                deployment.
            </Paragraph>
            <Paragraph>
                One competing input to hold alongside, briefly: the designation also lands ahead of September parliamentary
                elections, and Russia has been pushing its state messenger MAX as the replacement — so election-cycle
                control is doing some work in the timing too. But those explanations aren't rivals; the wallet announcement
                is plausibly what converted a slow-burn campaign into an eight-day response.
            </Paragraph>
            <Paragraph>
                The strategic irony cuts in your favor: a state criminalizing Telegram payments is the strongest possible
                confirmation of the adversarial-sovereignty pillar. Russia is telling you the wallet matters before it
                exists. And historically, Russia's 2018-2020 block failed so badly they rescinded it — if they try again
                against a client with a built-in non-custodial wallet and the "effectively unblockable" architecture the
                whitepaper sketched, the wallet becomes the thing Russian users specifically route around blocks to keep.
                Demand under prohibition is the payments thesis's home turf.
            </Paragraph>
        </Message>
        <Message
            at="2026-08-07T11:46:55.308116Z"
        >
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                I’m not sure how luch weight I give to the app store removal. Telegram handled it and pavel reported it. But
                I feel the hesitancy
            </Paragraph>
        </Message>
        <Message
            at="2026-08-07T11:47:10.363466Z"
        >
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                The four-hour resolution argues for low weight as an event — Telegram removed the content, Apple restored
                the listing, done. As a <Word>
                    <Emphasis />
                    revelation
                </Word>, though, it earned the market's reaction, because it exposed the one chokepoint in the whole
                architecture that adversarial sovereignty doesn't cover. Telegram can survive Russia blocking it; the
                whitepaper literally specs the unblockable version. But it cannot survive iOS delisting, because Apple
                controls the client distribution layer, and no amount of TON Proxy routes around the App Store. The removal
                was a live demonstration that a single Cupertino compliance decision can vaporize hours of availability —
                and the market repriced that dependency, not the CSAM incident itself.
            </Paragraph>
            <Paragraph>
                And it compounds directly into the wallet question. Right now Apple tolerates Telegram-as-messenger. A
                native non-custodial wallet in every client is a different regulatory object — it makes Telegram the largest
                financial app on iOS overnight, without the payments-compliance apparatus Apple normally demands, and
                adjacent to Apple's 30% interests via the mini-app economy. If Apple was willing to pull the app for hours
                over content, the wallet rollout hands them a much larger pretext category. That may be part of the
                hesitancy you're sensing in the sequencing: shipping "the largest wallet rollout in history" into the same
                month you got a taste of App Store removal is exactly the moment a careful operator slows down and gets the
                compliance surface right — jurisdiction gating, asset lists, whatever keeps Apple's review team satisfied.
                The two-stage rollout language fits that.
            </Paragraph>
            <Paragraph>
                Worth remembering the ecosystem has a partial hedge here: Telegram distributes APKs directly on Android and
                has always treated app-store independence as a design goal, and the mini-app layer runs in web views Apple
                doesn't gate item-by-item. But iOS users don't sideload, and the demographics that matter for payments
                include plenty of them. So my honest weighting: the event itself, near zero; the dependency it demonstrated,
                real and now priced — and probably a live input into when Step 5 lands.
            </Paragraph>
        </Message>
    </Chapter>
);
