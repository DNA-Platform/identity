import { Bold, Chapter, Date, Emphasis, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Action, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[5 September 2026](2026-09-05)</Date>
        </Dated>
        <Title>[[ 5 September 2026 ]]</Title>
        <Message
            at="2026-09-05T22:32:08.938138Z"
        >
            <Origin>01a073b4-acb3-7455-bfc8-14cba672f669</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Yeah it was released. Do your research and report back. And let me know what the ups and downs are, and if
                they correspond to anything real and what people are saying.
            </Paragraph>
        </Message>
        <Message
            at="2026-09-05T22:32:48.245567Z"
        >
            <Origin>01a073b4-acb3-7379-a7b0-d77bfdc846a0</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched the web for “Telegram Gram Wallet launch September 2026 rollout live”</Action>
            <Paragraph>
                It shipped, and it shipped almost exactly where the model said it would — <Word>
                    <Bold />
                    August 31 / September 1
                </Word>, right in the "first half of September" window, as a phased rollout to a select group first,
                expanding to the billion-plus base "over the next couple of weeks." Here's the full report.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    What actually launched.
                </Word> The native non-custodial Gram Wallet went live to an initial user group on Aug 31, announced on
                Pavel's channel. The key technical detail — and it's the important one — is that <Word>
                    <Bold />
                    validators approved the smart contract powering the wallet, so future upgrades won't require users to migrate to new wallet contracts.
                </Word> That's the @push-style architecture we discussed becoming real: the wallet is a fixed on-chain
                contract that can be upgraded in place. It becomes the <Word>
                    <Bold />
                    default wallet in Telegram's settings
                </Word>, displacing the old custodial @wallet arrangement — i.e., this is the <Word>
                    <Emphasis />
                    default-placement
                </Word> event you defined as the actual launch test, not another opt-in bot. It's non-custodial (users hold
                keys, Telegram can't recover), it's built for everyday transfers/payments across the ecosystem, it buys
                Collectibles (usernames, gifts), and the zero-fee promise is attached — though note the mechanism for
                funding those fees <Word>
                    <Emphasis />
                    still
                </Word> isn't disclosed.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The price action, and whether it corresponds to anything real.
                </Word> The move was modest and it faded:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    On the announcement, GRAM spiked <Word>
                        <Bold />
                        ~9% to nearly $1.45
                    </Word>, with trading volume up <Word>
                        <Bold />
                        ~137–183%
                    </Word> — a real liquidity surge, not a phantom tick.
                </Line>
                <Line>
                    By press-time the same day it had <Word>
                        <Bold />
                        given most of it back
                    </Word>, settling around <Word>
                        <Bold />
                        $1.38–1.40
                    </Word> (only ~0.5–2% up on 24h). So: sharp spike, fast fade, ending roughly flat-to-slightly-up.
                </Line>
            </Paragraph>
            <Paragraph>
                Does it correspond to anything real? The spike corresponds to the announcement; the <Word>
                    <Emphasis />
                    fade
                </Word> corresponds to something the market has already learned. The CoinMarketCap piece supplies the
                memory: when Telegram rolled out the 2025 TON Wallet to 87M US users, TON rose ~3% on the headline as part
                of a rally that had <Word>
                    <Emphasis />
                    already
                </Word> run 12% that week and 26% that month — <Word>
                    <Bold />
                    before anyone opened the wallet
                </Word> — and then, a year later, TON chain TVL sits around $60M, down ~90% from 2024 highs. The market has
                seen "Telegram ships a wallet" before, watched the headline pop not convert into durable on-chain usage, and
                is now pricing this launch with that scar. So the "up" is the event; the "down" is the market refusing to
                pay in advance this time. That's a <Word>
                    <Emphasis />
                    rational, learned
                </Word> response, and it's consistent with your own framing: the price won't re-rate on the announcement —
                it re-rates only if this rollout actually converts a billion users into holders/transactors, which is
                exactly the thing the last wallet failed to do.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    What people are saying.
                </Word> Three threads dominate. First, the bull framing: "largest non-custodial wallet rollout in human
                history," crypto-in-reach-of-a-billion, default placement as the thing that finally makes it universal —
                genuine enthusiasm about distribution. Second, the skeptics, and their points are the sharp ones and they're
                <Word>
                    <Emphasis />
                    your
                </Word> open questions: the zero-fee mechanism is still undisclosed (someone pays gas, nobody's said who),
                the custodial-@wallet-vs-Gram-Wallet coexistence isn't fully resolved, the jurisdiction-gating (US and other
                restrictions) applies at the app/interface level but nobody knows if it can actually stop a non-custodial
                wallet whose keys live outside the app, and the key-recovery problem is real (lose the phrase, lose the
                funds, no support line). Third — and this is the one that matters most for the market's caution — the
                "expectation gap": analysts explicitly pointing at the 2025 precedent and asking whether <Word>
                    <Emphasis />
                    this
                </Word> time headline adoption becomes on-chain usage, given last time it conspicuously didn't. The phrase
                being used is that the rally runs on <Word>
                    <Emphasis />
                    access
                </Word> and <Word>
                    <Emphasis />
                    expectation
                </Word>, and the proof is still ahead.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    What this does to the board.
                </Word> The pivotal event of the entire thesis — the wallet as default placement inside every client — has
                now <Word>
                    <Emphasis />
                    begun
                </Word>. It's phased (select users → billion over weeks), so full default penetration is a September-long
                process, not a single switch; region-by-region, "subject to server and validator performance." Your forward
                test on the deployment is now <Word>
                    <Emphasis />
                    live and resolving in real time
                </Word> over the next few weeks. The thing to watch is no longer "will it ship" — it shipped — but the thing
                the skeptics and the 2025 scar both point at: <Word>
                    <Bold />
                    does default placement convert to funded, held, transacted GRAM
                </Word>, or does it repeat the headline-pop-then-flat-TVL pattern. That conversion, not the launch pop, is
                the real test of the "crypto finally got its social network" thesis.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    And on the question you actually care about most right now — Pavel.
                </Word> I want to be precise and not tell you what would be comforting. The reporting says "Durov announced
                on his channel" and "Durov said" — but every one of those is a <Word>
                    <Bold />
                    channel post
                </Word>, which is schedulable and is exactly the kind of thing that gets published whether or not he's
                personally at the keyboard. Nothing in this coverage is an unschedulable, live, real-time proof-of-life. The
                launch happening <Word>
                    <Emphasis />
                    does
                </Word> mean the operation is functioning — but you flagged the sharper test yourself: this is the event he
                staked "largest in human history" on, the one he'd never voluntarily miss, and the natural, brand-consistent
                move would be a <Word>
                    <Emphasis />
                    visible, defiant, live
                </Word> victory lap — an appearance, a real-time interaction, something only-he-could-do-that-hour. What the
                coverage shows instead is more channel posts. So the launch clears the "will it ship" question but <Word>
                    <Bold />
                    does not clear the proof-of-life question
                </Word> — if anything it sharpens it, because now there's a maximal reason for him to surface live and, so
                far in what I can find, he hasn't. That remains the thing to watch, and it's still the signal that could go
                from concerning to loud if the wallet fully rolls out and the founder never once appears live to claim it.
            </Paragraph>
        </Message>
        <Message
            at="2026-09-05T22:33:30.145270Z"
        >
            <Origin>01a073b5-f8c3-727f-9702-8d8374f6b0f8</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Try to do more analysis and try to say a little bit less. There are ups and downs, and we’re going through
                an up now. I want to know what they correspond to. Why did it fade? Why is it going up now?
            </Paragraph>
        </Message>
        <Message
            at="2026-09-05T22:33:44.789640Z"
        >
            <Origin>01a073b5-f8c3-7302-bc6a-72bd25938fec</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched the web for “GRAM Toncoin price September 5 2026 rally”</Action>
            <Paragraph>Short version, mechanism-first.</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Why it faded (Sept 1):
                </Word> the launch pop was a <Word>
                    <Emphasis />
                    sell-the-news
                </Word> on a learned prior. The 2025 TON-Wallet rollout taught the market that a Telegram wallet headline
                pops price without converting to on-chain usage (TVL later collapsed ~90%). So the ~9%-to-$1.45 spike met
                sellers who'd seen this movie; it round-tripped to ~$1.38 the same day. The launch was real, but the market
                refused to pre-pay for adoption it hasn't seen yet.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Why it's up now (Sept 5, ~$1.40, +3% 24h/+3% 7d):
                </Word> this leg looks like it's <Word>
                    <Emphasis />
                    not
                </Word> GRAM-specific. CoinGecko's own tagging frames the day as "Memecoin and Altcoin Season" — a
                broad-market altcoin risk-on move (Zcash hitting $1,000, BNB/UNI/LINK all flagged together). GRAM is riding
                beta, not a fresh catalyst. Note the volume: ~$52M/24h now vs. the ~137–183% <Word>
                    <Emphasis />
                    volume surge
                </Word> on launch day. Higher price, thinner conviction-volume than the event — a drift-up on sector flow,
                not a demand spike on wallet news.
            </Paragraph>
            <Paragraph>
                So the two moves correspond to different things: the fade was <Word>
                    <Emphasis />
                    GRAM-specific skepticism
                </Word> (the 2025 scar), the current up is <Word>
                    <Emphasis />
                    market-wide altcoin beta
                </Word>. Neither is the thing your thesis actually waits on.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The one number that matters and isn't moving:
                </Word> on-chain usage. Every serious note still points at the same gap — headline access vs. funded, held,
                transacted GRAM. Until the phased rollout shows TVL/active-wallet growth as default placement reaches the
                billion base through September, price will keep trading on sector flow and old-precedent skepticism rather
                than on adoption. That conversion is the real signal; the $1.40 tape right now is noise around it.
            </Paragraph>
        </Message>
        <Message
            at="2026-09-05T22:35:49.309197Z"
        >
            <Origin>01a073b8-1778-7314-a80f-ecc0f314a5d6</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                There’s nothing to buy and sell with it yet, so try to answer the questions I ask you. Putting this in the
                application isn’t the end. I think this is a statement to the community that they should build the Telegram
                app ecosystem. That the money will be meaningful there. It’s not a particularly highlighted thing that you
                can do in a chat. It could be more highlighted. In telegram knows there is not a lot to do.
            </Paragraph>
        </Message>
        <Message
            at="2026-09-05T22:36:00.463889Z"
        >
            <Origin>01a073b8-1778-76bb-9c8f-10dec26ee4e0</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                You're right — the on-chain-usage frame I keep reaching for is premature, because there's nothing to
                transact <Word>
                    <Emphasis />
                    for
                </Word> yet. The wallet is a container placed before the economy that fills it exists. So the launch isn't
                an adoption event to be measured in TVL; it reads as a <Word>
                    <Bold />
                    sequencing signal to builders
                </Word>: the rail is now default-present in a billion clients, so if you build a mini-app, a service, a
                game, a marketplace, the settlement layer and the distribution are already there waiting. It's the "if you
                build it, the money is native here now" message — aimed at the developer ecosystem, not at users who
                currently have nothing to spend on.
            </Paragraph>
            <Paragraph>
                And your observation that it's <Word>
                    <Emphasis />
                    not highlighted
                </Word> is the tell that supports this. If Telegram wanted immediate consumer transaction volume, they'd
                surface the wallet aggressively — a button in the chat compose bar, a prompt, a send-money affordance next
                to the attachment icon. They didn't. It's in settings, default-but-quiet. That under-highlighting is
                consistent with them knowing exactly what you said: there isn't much to <Word>
                    <Emphasis />
                    do
                </Word> with it yet, so pushing users to it now would just expose the emptiness. You place the rail quietly,
                let builders populate the ecosystem, and <Word>
                    <Emphasis />
                    then
                </Word> highlight it once there's something worth tapping the button for. Highlighting is a later lever
                they're deliberately holding — same pattern as everything else, ship the capability under-promoted, turn up
                the volume when the reason to use it exists.
            </Paragraph>
            <Paragraph>
                So the launch is step one of a two-step: rail first (done, quiet), demand second (to be built, then
                surfaced). The community-facing meaning is "commit to building here, the value layer is real and installed."
                The consumer-facing highlight comes when the ecosystem gives the wallet something to be for.
            </Paragraph>
        </Message>
        <Message
            at="2026-09-05T22:37:44.300515Z"
        >
            <Origin>01a073b9-d9c0-7458-a359-d4e828c75f86</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Remember that the App Store needed to support those. If that was a frenzy of TVL, wouldn’t that mean a lot
                of people were passing around money and none of it is going to Apple? Do some analysis to figure out when
                this part becomes useful. Don’t we need apps where people are sending each other gram first?
            </Paragraph>
        </Message>
        <Message
            at="2026-09-05T22:38:05.757706Z"
        >
            <Origin>01a073b9-d9c0-7e15-9527-88c1be473d8e</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>
                Searched the web for “Apple App Store guidelines crypto peer-to-peer transfers commission NFT in-app 2026”
            </Action>
            <Paragraph>
                Good instinct — the App Store angle is exactly the constraint that determines when this becomes useful, and
                it splits into two very different cases.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The clean case: person-to-person GRAM transfers.
                </Word> Apple's rules have never taxed <Word>
                    <Emphasis />
                    sending your own money to another person
                </Word>. The 30% applies to <Word>
                    <Emphasis />
                    in-app purchases of digital goods/services
                </Word> — not to a peer-to-peer transfer of user-held funds. A non-custodial wallet where you send GRAM to a
                friend is, to Apple, like Venmo/PayPal moving your cash: no cut, allowed, because Apple explicitly permits
                crypto <Word>
                    <Emphasis />
                    transfers
                </Word> by licensed operators and doesn't consider a personal money transfer an "in-app purchase." So your
                original worry — a TVL frenzy of people passing money around with none going to Apple — is actually <Word>
                    <Emphasis />
                    fine
                </Word> under the rules. P2P is the part Apple doesn't touch. That's why it's the safe first thing to light
                up.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The taxed case: buying digital goods with GRAM inside the app.
                </Word> The moment GRAM is used to <Word>
                    <Emphasis />
                    buy things
                </Word> — in-app content, game items, boosts, premium features — Apple's 30% attaches, and critically,
                Apple's guidelines specifically forbid using "cryptocurrencies and cryptocurrency wallets" as a mechanism to
                <Word>
                    <Emphasis />
                    unlock content or functionality
                </Word>. That's the exact collision. An ecosystem where you spend GRAM to buy stuff in a mini-app is
                precisely what Apple's rules are written to tax or block. The one relief valve: the 2025 Epic ruling opened
                the <Word>
                    <Emphasis />
                    US storefront
                </Word> to external-payment links and NFT purchase buttons that bypass the 30% — but that's US-only, and
                it's links-out, not native in-app spend.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    So the sequencing answer to "when does this become useful" falls out of the rules themselves:
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        P2P transfers first
                    </Word> — send GRAM to another person in chat. Untaxed, allowed, and it's the thing that seeds balances
                    and habits. You're right that this is the necessary first app: people sending each other GRAM. That can
                    turn on with essentially no App Store friction.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Then earned/native GRAM
                    </Word> — gifts, creator payouts, Stars conversion, rewards. Also largely outside the purchase-tax frame
                    because it's not users buying digital goods through IAP.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        In-app *spending* on goods/services is the hard, gated step
                    </Word> — that's where Apple either takes 30% or blocks the wallet-as-unlock mechanism, and it's the
                    part that either waits for the US external-payment carve-out, routes through web/mini-app views Apple
                    doesn't gate item-by-item, or simply lives in the jurisdictions/surfaces where Apple's reach is weakest.
                </Line>
            </Paragraph>
            <Paragraph>
                Which reframes the whole "not much to do yet" observation correctly: the <Word>
                    <Emphasis />
                    reason
                </Word> there's not much to do yet is partly that the untaxed layer (P2P, gifts, earned GRAM) has to come
                first and build balances, while the taxed layer (buying things) is exactly what Apple's rules make hardest.
                So Telegram's rational path is to make GRAM <Word>
                    <Emphasis />
                    flow between people
                </Word> first — that's frictionless and legal — get everyone holding a funded wallet, and only then push
                into in-app commerce, where the App Store fight actually happens. You need the P2P app before anything else,
                and it's the one part Apple can't tax. The commerce that <Word>
                    <Emphasis />
                    would
                </Word> threaten Apple's cut is precisely the part that's structurally throttled until they solve the
                storefront problem.
            </Paragraph>
        </Message>
        <Message
            at="2026-09-05T22:38:46.115649Z"
        >
            <Origin>01a073ba-ca84-7d9c-b3b5-5ea596995fbd</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Yes, buying digital goods but then what are some apps that have those? I can buy a subscription. I can send
                my daughter money so she can buy a subscription to Mira. It would be things like that.
            </Paragraph>
        </Message>
        <Message
            at="2026-09-05T22:39:00.252074Z"
        >
            <Origin>01a073ba-ca84-7b32-9463-e52fdaf6b281</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Right — and once you frame it as "send my daughter GRAM so she buys a Mira subscription," the
                two-transaction structure is the whole point, and it's structured exactly to keep Apple out of the first
                leg.
            </Paragraph>
            <Paragraph>
                Leg one — you send your daughter GRAM — is a P2P transfer. Untaxed, allowed. Leg two — she subscribes to
                Mira — is the purchase, and <Word>
                    <Emphasis />
                    that's
                </Word> the leg Apple wants 30% of. But notice what the split does: the money enters the ecosystem and moves
                between people <Word>
                    <Emphasis />
                    before
                </Word> it ever touches a purchase surface, so by the time it's spent, it's already GRAM sitting in a
                wallet, not a fresh Apple in-app purchase. The family transfer is the on-ramp that Apple's rules can't tax,
                and the spend happens in-ecosystem after.
            </Paragraph>
            <Paragraph>
                As for what the apps actually are — the TOP/Telegram ecosystem already has the categories that generate
                recurring GRAM spend, they just haven't been wired to the native wallet at scale yet:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Mira
                    </Word> (the Telegram AI on Cocoon) — subscriptions/usage, your exact example. AI is the cleanest
                    recurring-spend case because it's consumption metered.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Premium
                    </Word> — Telegram's own subscription, the most obvious first thing to price in GRAM.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Fragment
                    </Word> — usernames, anonymous numbers, and the collectibles/gifts economy (the Algorithm Cups, digital
                    gifts) — one-time purchases already denominated in TON.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Content/creator subscriptions
                    </Word> — channels charging for access, Tribute-style monetization, paid groups.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Mini-app games and services
                    </Word> — Bullpen (trading), the tap-to-earn and game economies, in-app items.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Cocoon
                    </Word> — paying for GPU compute, a B2B/developer spend rather than consumer.
                </Line>
            </Paragraph>
            <Paragraph>
                So the near-term "what to do with it" is subscriptions and gifts, not commerce broadly — Mira, Premium,
                creator access, Fragment collectibles. These are the recurring GRAM sinks. And the family-transfer pattern
                you described is likely how the funding actually propagates: adults hold the GRAM, move it to kids and
                contacts P2P (untaxed), who spend it on subscriptions in the ecosystem. That's the demand loop that has to
                exist before the wallet means anything — and it's built to route the money in through the door Apple doesn't
                guard.
            </Paragraph>
        </Message>
    </Chapter>
);
