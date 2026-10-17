import { Bold, Chapter, Date, Emphasis, Line, List, Paragraph, Reference, Table, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Action, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[12 October 2026](2026-10-12)</Date>
        </Dated>
        <Title>[[ 12 October 2026 ]]</Title>
        <Message
            at="2026-10-12T00:09:34.480126Z"
        >
            <Origin>01a12d71-6d57-782c-b199-2aef956a843f</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                So what do Telegram’s financials look like? You don’t think it, as a company, and its satallire companies
                like TOP, are committed to growing GRAM with it
            </Paragraph>
        </Message>
        <Message
            at="2026-10-12T00:11:41.728949Z"
        >
            <Origin>01a12d71-6d57-7da4-bcac-e4e822a0947d</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Used WebSearch</Action>
            <Action>Used WebSearch</Action>
            <Action>Used WebFetch</Action>
            <Action>Used WebFetch</Action>
            <Action>Used WebFetch</Action>
            <Action>Used WebFetch</Action>
            <Paragraph>
                Yes — I do think they're committed, and I haven't been arguing otherwise. What I've been pointing at is
                narrower: commitment is well established, the conversion mechanism from their spending to token price isn't.
                But the financials actually make your case stronger than commitment, so let me put the numbers down first.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The latest public actuals are H1 2025.
                </Word> Telegram reports semi-annually to bondholders; H1 2025 surfaced via the FT in January 2026, so H1
                2026 wouldn't be expected in public until roughly January 2027. There is no FY2025 actual published anywhere
                — only the $2.0B guidance.
            </Paragraph>
            <Paragraph>
                <Table />
                <Line>
                    <Word></Word>
                    <Word>H1 2024</Word>
                    <Word>FY 2024</Word>
                    <Word>H1 2025</Word>
                    <Word>FY 2025</Word>
                </Line>
                <Line>
                    <Word>Revenue</Word>
                    <Word>$525M</Word>
                    <Word>$1.4B</Word>
                    <Word>$870M (+65%)</Word>
                    <Word>$2.0B target, no actual</Word>
                </Line>
                <Line>
                    <Word>Operating profit</Word>
                    <Word>—</Word>
                    <Word>—</Word>
                    <Word>~$400M</Word>
                    <Word>—</Word>
                </Line>
                <Line>
                    <Word>Net result</Word>
                    <Word>+$334M</Word>
                    <Word>+$540M (first annual profit)</Word>
                    <Word>−$220M+</Word>
                    <Word>—</Word>
                </Line>
                <Line>
                    <Word>Of which TON exclusivity</Word>
                    <Word>—</Word>
                    <Word>—</Word>
                    <Word>~$300M (≈⅓)</Word>
                    <Word>—</Word>
                </Line>
            </Paragraph>
            <Paragraph>
                Balance sheet, such as it's visible: ~$500M cash excluding crypto (2025 pitch). 2021 bonds ~$2.35B at 7%,
                matured March 2026 and mostly bought back — $500M of them frozen in Russia's depository under sanctions. May
                2025 convertible ~$1.7B at 9%, five-year conversion, Russian investors excluded. Over <Word>
                    <Bold />
                    $450M of TON sold
                </Word> in the year to the January 2026 report, ~10% of TON's market cap then. Valuation $30B+, which is
                investor-implied from the March 2024 Mubadala-led convertible rather than a priced round — about 15x
                EV/revenue on the $2B target, or 19x+ if you strip token sales out.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Here's what that does to your question.
                </Word> A third of Telegram's revenue is a payment tied to TON exclusivity, and its largest single source of
                cash in the period was selling TON. So the token is the biggest contributor to both the revenue line and the
                cash flow. Telegram isn't committed to GRAM as a matter of goodwill or strategic preference — it is <Word>
                    <Bold />
                    financially dependent
                </Word> on it. A company whose top revenue segment and top cash source are both its own token cannot let
                that token fail. That's a much stronger foundation for your claim than any roadmap announcement, because
                dependence doesn't require anyone's continued enthusiasm.
            </Paragraph>
            <Paragraph>
                The satellites fit that reading. TOP at a $1B valuation on $70M total funding, $28.5M extended Series A led
                by Ribbit with Pantera, July 2025, explicitly built on using Telegram as the distribution channel. The
                Foundation's $400M+ token-based round from Sequoia, Ribbit, Paradigm, Benchmark and Kingsway. TONX as
                treasury vehicle. ATON on Nasdaq supplying the compute. Worth noting <Word>
                    <Bold />
                    Ribbit appears in both the TOP Series A and the Foundation round
                </Word> — that's repeat capital across two layers of the structure, which reads more like a coordinated cap
                table than independent bets on the same theme.
            </Paragraph>
            <Paragraph>
                The cost of that same dependence, which I'd rather name than leave implicit: a company that funds itself
                partly by selling its own token is a structural seller by construction. The $450M wasn't a loss of faith —
                it was treasury management by an entity that needs cash and holds the token. Commitment and supply come from
                the same place here. That's why the unlock overhang and the exclusivity revenue are the same fact viewed
                from two ends, and it's why "are they committed" and "will the price go up" can both be answered yes and
                unknown respectively without contradiction.
            </Paragraph>
            <Paragraph>
                One thing I'd mark as my inference rather than reporting: the FT language is "exclusivity agreements" tied
                to Toncoin earnings, and the counterparty isn't named in what I could read. The Foundation is the natural
                payer, and the Foundation is funded by token sales and VC — which would make that revenue line a loop rather
                than external demand. I'd want the counterparty confirmed before leaning on it.
            </Paragraph>
            <Paragraph>Sources:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Reference>https://www.tradingview.com/news/cointelegraph:01e9ad089094b:0-telegram-revenue-jumps-to-870m-in-h1-2025-2b-full-year-target-ft/</Reference>
                        Telegram revenue jumps to $870M in H1 2025; $2B full-year target (FT)
                    </Word>
                </Line>
                <Line>
                    <Word>
                        <Reference>https://quantlogix.ai/briefing/quantlogix-ipo-brief-telegram-2026-08-15</Reference>
                        Telegram IPO brief — H1 2025 actuals, debt stack, multiples
                    </Word>
                </Line>
                <Line>
                    <Word>
                        <Reference>https://panews.io/articles/744e5c3b-6b7b-457e-b88e-f78c6557ad20</Reference>
                        Telegram's "crypto accounting" — the TON revaluation and $450M
                    </Word>
                </Line>
                <Line>
                    <Word>
                        <Reference>https://www.theblock.co/post/360931/ton-developer-the-open-platform-raises-28-5-million-series-a-at-1-billion-valuation</Reference>
                        TOP raises $28.5M Series A at $1B valuation
                    </Word>
                </Line>
                <Line>
                    <Word>
                        <Reference>https://www.itiger.com/news/2520468138</Reference>
                        TON Foundation's $400m round
                    </Word>
                </Line>
                <Line>
                    <Word>
                        <Reference>https://en.oninvest.com/article/durov-announced-the-redemption-of-telegram-s-bonds-their-part-could-have-been-frozen-by-sanctions</Reference>
                        Durov on the 2021 bond redemption
                    </Word>
                </Line>
            </Paragraph>
        </Message>
        <Message
            at="2026-10-12T00:16:20.279199Z"
        >
            <Origin>01a12d77-9ea6-7b68-8f97-6a8f7c3cf059</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                What hurdles does telegram have to clear to succeed? Clearly, some big players are betting on them.
            </Paragraph>
        </Message>
        <Message
            at="2026-10-12T00:18:09.037352Z"
        >
            <Origin>01a12d77-9ea6-7a6d-8b34-8460e72b9739</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Used WebSearch</Action>
            <Action>Used WebSearch</Action>
            <Action>Used WebFetch</Action>
            <Action>Used WebFetch</Action>
            <Paragraph>Ordered by how binding they are rather than how often they're discussed.</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The French case, which is still live two years in.
                </Word> Durov was placed under <Word>
                    <Emphasis />
                    mise en examen
                </Word> on August 28, 2024 and remains under formal investigation as of late 2026. The personal restrictions
                are gone — UAE stays allowed from July 2025, travel ban lifted entirely in November 2025 — but the case
                itself has three possible endings: trial before the <Word>
                    <Emphasis />
                    tribunal correctionnel
                </Word>, a <Word>
                    <Emphasis />
                    non-lieu
                </Word> dismissal, or something partial. No next step is scheduled. The theory is complicity under Article
                121-7, which requires that he <Word>
                    <Emphasis />
                    knowingly
                </Word> facilitated ("sciemment, par aide ou assistance"); the defence runs on hosting-provider immunity,
                and the prosecution's route is to establish an "active role" that breaks the shield. Statutory maxima on the
                cited counts run to five years for CSAM dissemination and seven for online apology for terrorism. His
                lawyers have a constitutional challenge and a CJEU referral request pending with no outcome. This is the
                gate Telegram itself named — it told bondholders it needs clarity here before the IPO.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Apple, which nobody at Telegram controls.
                </Word> On August 4, 2026 Apple removed Telegram from the global App Store over CSAM. It was back in about
                ninety minutes, after Telegram pulled the content and banned the user. Same thing happened in 2018. The
                ninety minutes cuts both ways: it shows Telegram can respond at speed, and it shows Apple can switch off the
                only route onto an iPhone unilaterally and instantly. Every part of the TON thesis — mini apps, wallet
                integration, token launches — runs through that one app. Apple is simultaneously the chokepoint, the 30% tax
                on Stars, and the rule that forbids crypto wallets as a mechanism to unlock content. Your hesitancy about
                the removal is well-placed, but the risk isn't the incident; it's that a company whose distribution can be
                revoked in minutes has a permanent brake on shipping exactly the features the thesis requires.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The moderation paradox, which is structural rather than a to-do item.
                </Word> The activity generating the prosecution risk and the Apple risk overlaps with the activity
                generating the usage — the $35B+ of Telegram-based guarantee-marketplace settlement, the bot markets, the
                gray flows. Cleaning that up to satisfy a French court and Apple's reviewers reduces the thing that makes a
                censorship-resistant payment rail worth having. Not cleaning it up risks distribution and the founder's
                liberty. No position satisfies both, which is why this is a hurdle and not a task.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Value capture, which is the easiest to clear and nobody has committed to.
                </Word> 0.08% of group revenue reaches the token; fees deliberately cut sixfold; burn trivial against
                emissions. All three identified fixes — a revenue-sharing arrangement, Stars settlement moving on-chain, fee
                restoration with volume — are policy decisions by a sole owner. Mechanically trivial. Unannounced.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Supply absorption.
                </Word> ~$90M/month unlocking against $30–50M/month absorbed, the 1,081M GRAM release in February 2027,
                ~445M/yr to the Believers Fund through 2028, the $400M token PIPE, and Telegram itself selling for cash.
                Demand has to roughly triple just to clear existing supply before any appreciation.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Debt service.
                </Word> The $1.7B convertible at 9% runs ~$153M/year against roughly $800M of annualized operating profit.
                Coverable, but note the coupon is the market's price on all of the above: 7% in 2021, ~17% after the arrest,
                9% now. They're paying 200bp more than before the trouble started.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Governance, which is unfixable without breaking the structure.
                </Word> Sole owner, sole director, sole CEO, no board — flagged by the investors themselves. That's
                disqualifying for a listing as it stands, and it can't be fixed without diluting the thing that makes the
                whole arrangement coherent.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    And the settlement habit.
                </Word> USDT-TRC20 is still offered as a payout rail <Word>
                    <Emphasis />
                    inside
                </Word> the Telegram ecosystem, by AdsGram among others. Payment habits are sticky. If Telegram's own users
                keep settling on Tron inside Telegram, the chain never captures the flow no matter what gets built.
            </Paragraph>
            <Paragraph>On the big players — worth looking at which instrument each one actually bought:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Mubadala
                    </Word>: convertible <Word>
                        <Bold />
                        debt
                    </Word>, March 2024, which is where the $30B+ figure comes from
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Sequoia, Ribbit, Paradigm, Benchmark, Kingsway
                    </Word>: a <Word>
                        <Bold />
                        token-based
                    </Word> PIPE into the Foundation, $400M+
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Ribbit, Pantera
                    </Word>: <Word>
                        <Bold />
                        equity in TOP
                    </Word> at $1B
                </Line>
            </Paragraph>
            <Paragraph>
                Nobody bought Telegram equity, because it isn't for sale. So the tier-1 money distributed itself across
                three different instruments at three different points in the capital structure rather than concentrating
                anywhere. And the largest of those rounds was taken in the token, via PIPE — which is bought at a discount
                on a schedule. The same names validating the thesis are the ones positioned to sell into your bid on a
                timetable. They can be right about TON and still be your supply. That's not a contradiction, but "big
                players are betting on them" and "big players are the overhang" are describing one fact here.
            </Paragraph>
            <Paragraph>Sources:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Reference>https://kohenavocats.com/en/durov-telegram-france-two-years-prosecution-complicity-host-shield/</Reference>
                        Durov at two years: how France prosecutes a platform CEO (Kohen, Paris criminal counsel)
                    </Word> · <Word>
                        <Reference>https://www.france24.com/en/live-news/20251113-france-lifts-travel-ban-on-telegram-founder-durov</Reference>
                        France fully lifts travel ban, Nov 2025
                    </Word>
                </Line>
                <Line>
                    <Word>
                        <Reference>https://cryptobriefing.com/apple-removes-telegram-app-store-ton-risk/</Reference>
                        Apple removes Telegram from App Store over child safety, TON risk
                    </Word> · <Word>
                        <Reference>https://www.macrumors.com/2026/08/04/telegram-briefly-removed-from-app-store/</Reference>
                        Telegram briefly removed (MacRumors)
                    </Word>
                </Line>
                <Line>
                    <Word>
                        <Reference>https://coinshares.com/insights/research-data/the-open-network-ton-an-institutional-research-note/</Reference>
                        CoinShares institutional note — capture ratio, emissions, unlock schedule
                    </Word>
                </Line>
                <Line>
                    <Word>
                        <Reference>https://quantlogix.ai/briefing/quantlogix-ipo-brief-telegram-2026-08-15</Reference>
                        Telegram IPO brief — debt stack, governance flags, multiples
                    </Word> · <Word>
                        <Reference>https://www.calcalistech.com/ctechnews/article/rjjao0ggeg</Reference>
                        Inside Telegram's pitch: 9% interest, IPO on ice
                    </Word>
                </Line>
                <Line>
                    <Word>
                        <Reference>https://www.itiger.com/news/2520468138</Reference>
                        TON Foundation $400m round
                    </Word> · <Word>
                        <Reference>https://www.theblock.co/post/360931/ton-developer-the-open-platform-raises-28-5-million-series-a-at-1-billion-valuation</Reference>
                        TOP $28.5M Series A at $1B
                    </Word>
                </Line>
            </Paragraph>
        </Message>
        <Message
            at="2026-10-12T00:38:12.548041Z"
        >
            <Origin>01a12d8b-a488-7d19-852d-6298f66d7b07</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Eh everything you said about apple applies to amazon… you’re talking about the generic risks of being
                reliant on a mobile app and I honestly think that Telegram’s long-term vision is to have a phone. It
                literally already sells phone numbers on the TON Blockchain ha ha ha. Solana is exploring this
            </Paragraph>
            <Paragraph>
                How much weight does the French case carry for the company? Surely they don’t shut down because one country
                thinks they should.
            </Paragraph>
            <Paragraph>Shouldnt those markets move to TON miniapps?</Paragraph>
        </Message>
        <Message
            at="2026-10-12T00:39:50.317349Z"
        >
            <Origin>01a12d8b-a488-7aa8-b61a-55277642e6d5</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Fair on Apple — I conflated a generic distribution risk with the crypto-specific part. Let me check the
                device angle and the thing I should have led with on the legal side.
            </Paragraph>
            <Action>Used WebSearch</Action>
            <Action>Used WebSearch</Action>
            <Action>Used WebFetch</Action>
            <Paragraph>
                <Word>
                    <Bold />
                    On Apple — you're right, I conflated two things.
                </Word> The removal risk is generic; every app company lives with it and Amazon has the same shape of
                dependency. What isn't generic is the crypto-specific rule set: 30% on digital goods and the prohibition on
                wallets as a mechanism to unlock content. That's not a dependency risk, it's a constraint on product shape,
                and it binds this thesis specifically in a way it doesn't bind a retailer. Concede the first, keep the
                second.
            </Paragraph>
            <Paragraph>
                And the phone point is further along than a vision. Fragment's anonymous numbers are blockchain-issued
                telecom identity that permits SIM-free registration — Telegram is already selling the identity layer of a
                carrier, on-chain, which is the hard part. Solana executed the hardware: Saga first, then <Word>
                    <Bold />
                    Seeker shipping from August 2025 to 50+ countries
                </Word>. So the precedent exists, and it's another instance of your laboratory pattern — Solana going first,
                same as with Simplex.
            </Paragraph>
            <Paragraph>
                The one thing I'd put against it: a device changes who imposes the constraint, not whether there is one.
                Seeker exists and hasn't moved Solana's payment economics. Hardware is a distribution hedge, not a demand
                engine — it solves the Apple problem and leaves the payout problem untouched.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    On the French case — I led with the wrong instrument.
                </Word> The <Word>
                    <Emphasis />
                    mise en examen
                </Word> is against Durov personally, as a natural person. Telegram isn't the defendant in the complicity
                theory. So no, the company doesn't shut down because one country objects; France could at most block
                domestically. What the case actually gates is narrow: the IPO, because Telegram told bondholders it needs
                clarity there, and his personal exposure. Both only matter if you care about the equity path, which you've
                argued is redundant anyway.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The corporate-level EU risk is the DSA, and I should have put it first.
                </Word> The VLOP threshold is 45M EU users. Telegram declared 41M in 2024, then revised to "significantly
                fewer than 45 million average monthly active recipients," on the argument that its "online platform" count
                excludes private messaging. EU officials believe the understatement was deliberate, consider the
                non-disclosure itself a breach, and expect the real figure to exceed 45M; the Commission's Joint Research
                Centre ran a technical investigation to establish it. Exposure is up to <Word>
                    <Bold />
                    6% of annual global revenue
                </Word> — on a $2B year that's ~$120M, recurring — plus mandatory data sharing with the Commission and
                third-party auditing.
            </Paragraph>
            <Paragraph>
                That's the one with teeth against the company rather than the man. It's recurring, it attaches to the
                entity, and third-party auditing is incompatible with how Telegram actually operates. Caveat: the reporting
                I could find on that investigation is from 2024 and I didn't establish its current status, so treat it as
                live and unresolved rather than as a current finding.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    On migration to mini apps — this is the one where the answer inverts.
                </Word> On UX grounds they should. Structurally the format repels them, and Telegram's takeover made it
                worse rather than better.
            </Paragraph>
            <Paragraph>
                A mini app is listed, discoverable, carries a domain, passes some review and attaches to a developer
                identity. A bot is a chat endpoint with none of that. For an illicit operator, discoverability is a
                liability, not a feature — the bot format isn't legacy, it's the point.
            </Paragraph>
            <Paragraph>
                And since May 2026 Telegram is the largest validator and primary steward of the chain. Settling illicit flow
                on infrastructure controlled by the company whose owner is under indictment <Word>
                    <Emphasis />
                    for facilitating that exact flow
                </Word> is bad tradecraft. He has maximum incentive to demonstrate cooperation, and he controls the
                validator set.
            </Paragraph>
            <Paragraph>
                The observed direction of travel confirms it rather than contradicting it: Tether froze $39.27M on September
                8 and ~$4.9B lifetime, and Elliptic reported these marketplaces discussing <Word>
                    <Bold />
                    unfreezable
                </Word> alternatives like USDD. They're moving away from freezable, identifiable rails — not toward a new
                one run by a prosecuted counterparty.
            </Paragraph>
            <Paragraph>
                Which reframes the last several weeks of searching. My coming up empty on GRAM in gray markets wasn't an
                earliness result. The structure actively repels that usage, and it will keep repelling it as long as
                Telegram controls the chain. So gray-market settlement was never going to be this thesis's on-ramp. The
                payout layer has to be legitimate work — which is exactly the thing that doesn't exist yet, and the reason
                the Stars-can't-pay-out finding is the load-bearing one.
            </Paragraph>
            <Paragraph>Sources:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Reference>https://coinspaidmedia.com/news/telegram-added-blockchain-powered-anonymous-numbers/</Reference>
                        Telegram anonymous numbers: blockchain-powered SIM-free registration
                    </Word>
                </Line>
                <Line>
                    <Word>
                        <Reference>https://www.theblock.co/news/business/2025-08-05-solana-mobile-seeker-crypto-smartphone-365600</Reference>
                        Solana Mobile begins shipping Seeker to 50+ countries
                    </Word> · <Word>
                        <Reference>https://cointelegraph.com/news/solana-mobile-device-seeker-ships-50-countries</Reference>
                        Cointelegraph
                    </Word>
                </Line>
                <Line>
                    <Word>
                        <Reference>https://www.engadget.com/big-tech/eu-officials-believe-telegram-lied-about-user-numbers-to-skirt-regulation-165538148.html</Reference>
                        EU officials believe Telegram understated user numbers to skirt the DSA
                    </Word> · <Word>
                        <Reference>https://telegram.org/tos/eu-dsa</Reference>
                        Telegram's own EU DSA guidance
                    </Word>
                </Line>
                <Line>
                    <Word>
                        <Reference>https://kohenavocats.com/en/durov-telegram-france-two-years-prosecution-complicity-host-shield/</Reference>
                        Durov at two years: the French prosecution and the host shield
                    </Word>
                </Line>
            </Paragraph>
        </Message>
    </Chapter>
);
