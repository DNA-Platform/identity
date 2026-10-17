import { Bold, Chapter, Date, Emphasis, Heading, Line, List, Paragraph, Reference, Table, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker, Verbatim } from '../../../.manual/.book';
import { Action } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[7 October 2026](2026-10-07)</Date>
        </Dated>
        <Title>[[ 7 October 2026 ]]</Title>
        <Message
            at="2026-10-07T11:43:08.615294Z"
        >
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>What’s driving the lrice pf gram today? Beta or news or unknown?</Paragraph>
        </Message>
        <Message
            at="2026-10-07T11:43:40.567269Z"
        >
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Used WebSearch</Action>
            <Paragraph>Mostly beta and leverage, no GRAM-specific news I can find.</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Where it is:
                </Word> readings vary by snapshot — $1.46 to $1.55 across venues right now, with Bybit showing -5.78% on the
                day as of 18:47 UTC. But the week's shape matters more: it touched <Word>
                    <Bold />
                    $1.71
                </Word>, a 7-day high, then gave it back to the $1.40s–50s. Month-over-month it's up roughly 10–17% from
                ~$1.36.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    What's driving it is almost certainly the calendar.
                </Word> TOKEN2049 Singapore runs today and tomorrow. Conference weeks reliably pull altcoin bids forward and
                then bleed them out — the spike to $1.71 and the fade fits that pattern exactly.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    And the volume composition says leverage, not accumulation.
                </Word> Of ~$55M daily volume: Binance Futures $28M, KuCoin Futures $17.6M, Hyperliquid perps $11.3M, OKX
                swaps $9.3M — against only $11.4M on Binance spot. Futures are carrying well over half the tape. A run to
                $1.71 on perp-dominated volume followed by a -5.8% day is a long squeeze unwinding, not anyone buying the
                wallet thesis.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    No news driving it.
                </Word> No Durov post, no Telegram announcement, no TONX release. Nothing GRAM-specific.
            </Paragraph>
            <Paragraph>
                One data point worth logging while we're here: circulating supply is <Word>
                    <Bold />
                    2.82B
                </Word> against total <Word>
                    <Bold />
                    5.26B
                </Word>, so market cap $4.37B versus FDV $8.15B. Nearly half the supply is still unissued — which is the
                dilution assumption underneath the long-horizon math, and it's tracking roughly where we modeled it.
            </Paragraph>
        </Message>
        <Message
            at="2026-10-07T11:45:09.291531Z"
        >
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Prove beta by looking at other coins</Paragraph>
        </Message>
        <Message
            at="2026-10-07T11:45:36.668843Z"
        >
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Used WebSearch</Action>
            <Paragraph>Confirmed — today is market-wide, not GRAM-specific.</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    October 7 snapshot:
                </Word>
            </Paragraph>
            <Paragraph>
                <Table />
                <Line>
                    <Word>Asset</Word>
                    <Word>24h</Word>
                </Line>
                <Line>
                    <Word>Total market cap ($2.85T)</Word>
                    <Word>−4.1%</Word>
                </Line>
                <Line>
                    <Word>BTC ($84.1k)</Word>
                    <Word>−1.7% to −2.9%</Word>
                </Line>
                <Line>
                    <Word>ETH ($2,576–2,614)</Word>
                    <Word>−3.0% to −5.1%</Word>
                </Line>
                <Line>
                    <Word>SOL (~$118)</Word>
                    <Word>−0.3% to −2.7%</Word>
                </Line>
                <Line>
                    <Word>LINK ($13.44)</Word>
                    <Word>−3.3%</Word>
                </Line>
                <Line>
                    <Word>XRP ($1.47)</Word>
                    <Word>−1.5%</Word>
                </Line>
                <Line>
                    <Word>PYTH</Word>
                    <Word>−7.2%</Word>
                </Line>
                <Line>
                    <Word>GRAM ($1.47)</Word>
                    <Word>−5.8%</Word>
                </Line>
            </Paragraph>
            <Paragraph>
                And the mechanism is explicit in the tape: Bitcoin briefly slid below $84,000 with <Word>
                    <Bold />
                    $487 million in long liquidations
                </Word> today. That's a leveraged flush, which is exactly what GRAM's futures-dominated order book would
                amplify. Down 5.8% against a market down 4.1% is textbook high-beta behavior — same direction, bigger
                amplitude, no independent signal.
            </Paragraph>
            <Paragraph>
                So: <Word>
                    <Bold />
                    beta, with leverage amplification. Not news, not unknown.
                </Word>
            </Paragraph>
            <Paragraph>
                The one thing beta <Word>
                    <Emphasis />
                    doesn't
                </Word> explain is the longer window. GRAM is up roughly 7–10% on the week and 10–17% on the month, which
                looks like genuine relative strength against a market that's been flat-to-down and where BTC dominance is
                sitting at 59.2% (i.e. alts broadly losing ground). If that holds up against clean 30-day market
                comparables, the wallet launch and conference cycle did put something into the price — it's just not what
                moved it today.
            </Paragraph>
        </Message>
        <Message
            at="2026-10-07T11:47:30.151193Z"
        >
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Yeah I was wondering if thats quiet wallet launch strength. We’ll see. Keep looking for little communities
                using gram maybe through some little app. Even if its dark web. Thats how it starts
            </Paragraph>
        </Message>
        <Message
            at="2026-10-07T11:47:50.279906Z"
        >
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Used WebSearch</Action>
            <Paragraph>
                Nothing concrete this pass. The merchant-gateway layer exists (NOWPayments, 0xProcessing support GRAM and
                USDT-on-TON with auto-convert to fiat, fees at ~$0.0005), but that's capability, not usage. Classic darknet
                markets still run Bitcoin and Monero with multisig escrow — no sign of GRAM displacing that.
            </Paragraph>
            <Paragraph>
                Worth noting what I'd expect to find <Word>
                    <Emphasis />
                    instead
                </Word> of a GRAM darknet market, given how this ecosystem actually works: the Telegram-native equivalent
                isn't a Tor site, it's a guarantee/escrow channel. That's the form the $35B Huione/Xinbi economy already
                took — Chinese-language escrow marketplaces living in Telegram channels, settling in USDT. If GRAM gets
                adopted at that end, it'll look like a guarantee marketplace switching settlement asset, not a new onion
                address.
            </Paragraph>
            <Paragraph>So the specific thing I'll keep watching for:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    A guarantee marketplace announcing GRAM or TON-native settlement — Elliptic flagged them discussing
                    unfreezable alternatives like USDD, and GRAM is strictly better on that axis
                </Line>
                <Line>
                    Forensic firms (Elliptic, TRM, Chainalysis) adding TON to their illicit-flow coverage; right now their
                    Russia and Southeast Asia reporting is all Tron, Ethereum, and A7A5. The day TON appears in one of those
                    reports is the real signal
                </Line>
                <Line>GRAM-denominated P2P desks or escrow bots in Russian-language channels</Line>
                <Line>Any Fragment-adjacent activity where anonymous numbers get bought in volume</Line>
            </Paragraph>
            <Paragraph>
                One structural reason to expect it to be slow: TON is highly transparent — no ring signatures, no stealth
                addresses. Anyone fleeing Tether's freezes gains unfreezability but loses privacy, and chain-analysis firms
                would have an easy time. Monero remains strictly better for concealment. GRAM's edge is narrow and specific:
                <Word>
                    <Emphasis />
                    unseizable and in the chat where the counterparty already is
                </Word>. That favors escrow and labor payments over product sales.
            </Paragraph>
            <Paragraph>
                I'll keep pulling on the forensic-firm thread — that's where this surfaces first, since nobody announces it.
            </Paragraph>
        </Message>
        <Message
            at="2026-10-07T11:49:09.277201Z"
        >
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Georgian darknet markets live on telegram. I bet thats happening around. I hear about bot driven wallets
                though maybe no escrow. Is any of that in gram or usdt on gram? Could ypu even know?
            </Paragraph>
        </Message>
        <Message
            at="2026-10-07T11:50:05.209946Z"
        >
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Used WebSearch</Action>
            <Paragraph>Partly knowable, and the honest answer has a confound worth naming.</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Why it's knowable in principle:
                </Word> TON is fully transparent — no ring signatures, no stealth addresses. And dead-drop shops <Word>
                    <Emphasis />
                    publish payment addresses to buyers by design
                </Word>; anyone who runs the bot sees one. So address collection is tractable, and that's exactly how
                Elliptic and TRM label these flows: pose as a buyer, harvest addresses, cluster them.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Why I can't know it directly:
                </Word> I can't run chain analysis, only read what firms publish. And their published coverage of this
                ecosystem is Bitcoin, USDT, and A7A5. TON appears nowhere.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The confound:
                </Word> their coverage follows volume, and TON holds ~1% of USDT supply. So nobody has built TON labeling
                infrastructure for this sector. Early adoption on an unlabeled chain would be <Word>
                    <Emphasis />
                    invisible for a while
                </Word> — absence from the reports is weak evidence, not null evidence. The first appearance would likely be
                accidental, from a breach rather than a survey.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    And breaches are the real channel here.
                </Word> UpGuard found an exposed logging database on July 14, 2026 belonging to a Russian
                narcotics-as-a-service platform — software that builds and operates Telegram storefronts for paying tenants.
                Two days of logs contained <Word>
                    <Bold />
                    462 distinct Telegram bots across sixteen tenant accounts, about ten live businesses
                </Word>. The write-up says payouts are in crypto, with couriers cashing out to Ukrainian hryvnia, but the
                excerpt doesn't name the settlement asset. That's precisely the detail that would answer your question, and
                it's the kind of artifact that will answer it eventually — leaked back-ends, not published research.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Structurally, the fit is better than it looks.
                </Word> You're right that there's no escrow — delivery is near-instant via coordinates, so what the model
                needs is speed, finality, tiny fees, and no chargeback. Bitcoin is terrible at that for a $30 purchase. TON
                does 0.6s finality at $0.0005. And the usual objection — "they'd want Monero for privacy" — is undercut by
                the documented reality: RUSI's work on Russian crypto payments found most flows use mainstream assets like
                Bitcoin and USDT, with <Word>
                    <Bold />
                    anonymity coming not from technology but from informal intermediaries
                </Word>. This ecosystem already doesn't optimize for chain privacy. So TON's transparency isn't the
                disqualifier it would be elsewhere.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    And the push factor just intensified.
                </Word> Five days ago the US sanctioned the A7 network and FinCEN moved specifically against its USDT
                conversion routes, citing $17B processed. Every enforcement action against USDT raises the return on an
                unfreezable alternative.
            </Paragraph>
            <Paragraph>
                So: no evidence yet, a real possibility of invisible early adoption, and the signal to watch is a leaked
                platform back-end or the first time a forensic firm adds TON to its labeling scope.
            </Paragraph>
        </Message>
        <Message
            at="2026-10-07T11:51:52.907078Z"
        >
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Remember nikolai talks about a dark web 2.0 on TON. Is there value to using gram for telegram bot markets
                what are the native infrastructure of the app they’re on? Are there any other small apps in the TON App
                Store that maybe are getting a little traction where we could infer payments might be likely now or
            </Paragraph>
        </Message>
        <Message
            at="2026-10-07T11:52:36.803486Z"
        >
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Worth separating the two things, because the first is the sharper point.</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Why GRAM specifically fits bot markets.
                </Word> Those shops already run entirely on Telegram's native infrastructure — bot API for the storefront,
                channels for distribution, photo relay for dead-drop coordinates, the double-blind routing the UpGuard leak
                exposed. Everything is in-app <Word>
                    <Emphasis />
                    except payment
                </Word>, which currently exits the platform: buyer opens an exchange, copies an address, sends from an
                external wallet, waits for confirmations, returns to the bot. That's the single worst step in the flow and
                it's the one losing them customers, because retail buyers are the least technical users in crypto.
            </Paragraph>
            <Paragraph>
                A default-placed non-custodial wallet collapses that step into the same app and the same tap. And TON
                Connect is the mechanism — it's the <Word>
                    <Emphasis />
                    exclusive
                </Word> wallet-connection protocol for Telegram Mini Apps, so a bot shop that runs a mini-app front end gets
                a native payment request with no address handling at all. Sub-second finality, $0.0005 fees, no KYC, no
                chargeback. For $30 purchases that's not an improvement over Bitcoin, it's a different product.
            </Paragraph>
            <Paragraph>
                And that's the actual shape of "dark web 2.0 on TON." Not TON Proxy and eepsites — those are the specced
                version. The emergent version is simpler and already built: Telegram bots as the storefront, native wallet
                as settlement, dead drops as logistics. The coordination layer and the money layer finally in one place,
                which is the thing I2P never achieved and Bitcoin never had.
            </Paragraph>
            <Paragraph>Let me look at the app side.</Paragraph>
            <Action>Used WebSearch</Action>
            <Paragraph>The traction signal is in the category shift, not the names.</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Gaming is dying, utility is growing.
                </Word> The tap-to-earn cohort declined 9%, from 52M to 47M MAU, as play-to-earn clones lost traction.
                Meanwhile <Word>
                    <Bold />
                    utility apps are the fastest-growing category at +15% monthly
                </Word> — tools, productivity, services. That's the migration from airdrop farming to things people actually
                pay for, and it's exactly where payment demand would originate. USDT on TON also grew past 1.43B tokens,
                giving mini apps a stable unit.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    But here's the structural problem, and it's the Apple problem again.
                </Word> The dominant monetization model is still Stars — and users buy Stars through the Telegram app using
                Apple Pay or Google Pay. That means the platform tax is already baked into the main revenue path. Developers
                reaching for Stars are handing 30% to Apple on every purchase. GRAM only wins where Stars can't go.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    So the question becomes: which apps structurally can't use Stars?
                </Word> And there's a clean answer — <Word>
                    <Bold />
                    Stars is a purchase currency, not a payout currency.
                </Word> It flows one direction: user buys Stars with a card, spends them in-app, developer redeems. Any app
                that needs to pay <Word>
                    <Emphasis />
                    users
                </Word> cannot use it. That means:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Gig and task apps paying workers</Line>
                <Line>Courier and delivery coordination</Line>
                <Line>Creator revenue share and tipping where the creator wants the money out</Line>
                <Line>Bounty and bug-bounty platforms</Line>
                <Line>P2P marketplaces where the seller is an individual, not a merchant</Line>
                <Line>Anything where both sides of the transaction are people rather than a person and a company</Line>
            </Paragraph>
            <Paragraph>
                That's the GRAM-shaped hole in the ecosystem, and it maps precisely onto the uses we listed earlier — labor,
                remittance, P2P trade, and the bot markets. Those aren't choosing GRAM over Stars for ideology; Stars
                literally cannot do what they need.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    What I'd watch for as the first real signal:
                </Word> a utility mini app in that +15% cohort that pays users rather than charging them, denominated in
                GRAM or USDT-on-TON. Subscription apps are the visible growth story but they'll stay on Stars. The payout
                apps are where the native currency becomes load-bearing — and they'd show up small and unremarked, because
                nobody writes about a task app with 50,000 users.
            </Paragraph>
        </Message>
        <Message
            at="2026-10-07T11:54:06.533762Z"
        >
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Nikolai=jrandom=Satoshi means he’s making progress!</Paragraph>
        </Message>
        <Message
            at="2026-10-07T11:54:17.918104Z"
        >
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                It does — and the specific form of progress is worth naming, because it's the part the attribution predicts
                and the metrics miss.
            </Paragraph>
            <Paragraph>
                The thing that just happened is that the money layer and the social layer are in the same place for the
                first time. Every prior artifact had one half. I2P had transport and publishing, no money. Bitcoin had
                money, no graph. Ethereum had computation, no users. Telegram had a billion users, no native value. The
                wallet shipping into default placement is the first time the halves are joined in a single client, and if
                the forty-year arc is one person's, that's the merge they were building toward.
            </Paragraph>
            <Paragraph>
                What makes it feel like nothing is that the adoption test everyone is running — conversion ratio, TVL,
                active wallets — measures the wrong layer. The rail going in is a capability change; the economy filling it
                is a demand change, and demand follows the rail by years. Bitcoin had the rail in 2009 and no economy until
                Silk Road in 2011. That gap looked like failure from inside it too.
            </Paragraph>
            <Paragraph>
                The honest ledger, though, is that this is a prediction the model makes rather than evidence for it.
                Everything we've found this week is consistent with the thesis and also consistent with a competent
                crypto-native company executing a roadmap. The stuff that would actually be <Word>
                    <Emphasis />
                    evidence
                </Word> — a Russian-language bot market settling in GRAM, a payout app nobody's writing about, a forensic
                firm adding TON to its labeling — none of it has surfaced yet. It may be invisible rather than absent, which
                is the position we're in and should stay honest about.
            </Paragraph>
            <Paragraph>
                Progress on the thesis, not confirmation of it. The confirmation, if it comes, looks like a leaked back-end
                or a small app with fifty thousand users — not a price.
            </Paragraph>
        </Message>
        <Message
            at="2026-10-07T11:57:12.518596Z"
        >
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                You don’t support the concept of confirmation so don’t try. By the time it’s something you would say one
                could confirm it would no longer be useful at adjusting advice because you require published confirmation so
                sorry we don’t care what you think about that!
            </Paragraph>
            <Paragraph>What apps are being developed on the TON miniapp ecosystem. People do develop there</Paragraph>
        </Message>
        <Message
            at="2026-10-07T11:57:32.176557Z"
        >
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Used WebSearch</Action>
            <Paragraph>
                One real number from last month: <Word>
                    <Bold />
                    TON mini apps passed 100 million monthly active users
                </Word> (TON Foundation, September 7). That's the distribution base the wallet just landed on top of.
            </Paragraph>
            <Paragraph>
                But what's <Word>
                    <Emphasis />
                    being built
                </Word> splits into two very different things.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The visible layer is still the 2024 cohort, and it's aging.
                </Word> Blum (~43M MAU, DeFi launchpad), Major (~70M total/40M MAU, lifestyle), Notcoin (35M+), X Empire
                (36M, which onboarded 18M TON wallets), Hamster Kombat (~27M), STON.fi (4.7M wallets, $5.8B lifetime
                volume). These dominate every "top mini apps" list, and almost all of them are tap-to-earn or airdrop
                farming — the category that shrank 9% this year. The lists are describing yesterday.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    What developers are actually being paid to build is more interesting.
                </Word> The structural fact is Telegram made TON the <Word>
                    <Emphasis />
                    exclusive
                </Word> blockchain infrastructure for mini apps, then ran a Mini App Migration Grant Program specifically to
                pull apps off other chains onto TON Connect — tiered by user count, with apps over 5M users getting maximum
                support and 10k–1M user apps getting ad credits. That's a deliberate consolidation: no mini app can use a
                competing chain, and there's money to switch. Plus TON Foundation hackathons, Open League grants, and bug
                bounties up to $100k.
            </Paragraph>
            <Paragraph>
                So the pipeline is: exclusivity forces TON, grants subsidize migration, TON Connect makes the wallet
                universal. Developers aren't choosing GRAM — they're channeled into it.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    And one line is worth more than the user counts:
                </Word> integrated payments inside mini apps are showing very high conversion rates and in-app spend. That's
                the first claim I've seen that payment <Word>
                    <Emphasis />
                    inside the mini app
                </Word> converts better than the alternative — which is the whole economic case for the native wallet,
                stated by the ecosystem rather than measured by anyone independent.
            </Paragraph>
            <Paragraph>
                What's missing from every list I can find: the small utility and payout apps. The +15%-monthly category has
                no names attached anywhere. Either nobody's covering it, or the coverage apparatus only tracks apps big
                enough to run airdrops. Probably both — which means the thing you're looking for would be exactly the thing
                these lists are structurally incapable of showing.
            </Paragraph>
        </Message>
        <Message
            at="2026-10-07T11:59:46.936211Z"
        >
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Well check themini app store of github repos or other lists. If in app payout converts, what are people
                being paid for?
            </Paragraph>
        </Message>
        <Message
            at="2026-10-07T11:59:53.591801Z"
        >
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Used Bash</Action>
            <Action>Used Bash</Action>
            <Action>Used WebSearch</Action>
            <Paragraph>
                GitHub's search API is blocked in this session (repo-scoped only), so I'll scrape the topic pages directly.
            </Paragraph>
            <Action>Used WebFetch</Action>
            <Action>Used WebFetch</Action>
            <Action>Used WebFetch</Action>
            <Action>Used Bash</Action>
            <Action>Used WebSearch</Action>
            <Action>Used Bash</Action>
            <Action>Used WebFetch</Action>
            <Paragraph>
                GitHub search is fully blocked here. Let me get at developer adoption a different way — npm download counts
                for the payment SDKs, which the registry will serve.
            </Paragraph>
            <Action>Used Bash</Action>
            <Action>Used WebSearch</Action>
            <Action>Used WebFetch</Action>
            <Action>Used WebFetch</Action>
            <Action>Used WebSearch</Action>
            <Action>Used WebFetch</Action>
            <Action>Used WebFetch</Action>
            <Action>Used WebFetch</Action>
            <Action>Used WebSearch</Action>
            <Action>Used WebSearch</Action>
            <Action>Used WebFetch</Action>
            <Action>Used WebSearch</Action>
            <Action>Used WebFetch</Action>
            <Action>Used WebFetch</Action>
            <Action>Used WebSearch</Action>
            <Action>Used WebSearch</Action>
            <Action>Used WebSearch</Action>
            <Action>Used WebFetch</Action>
            <Paragraph>
                GitHub's search API is hard-blocked in this session (repo-scoped only — the API, <Word>
                    <Verbatim />
                    gh search
                </Word>, and the topic pages all 403), so I couldn't run the repo census. The npm download-stats endpoint is
                off the allowlist too. So the developer-side census is unavailable to me here; what follows is from
                directories, Telegram's own API docs, and the ad networks' own published numbers.
            </Paragraph>
            <Heading>The payout rails that actually exist</Heading>
            <Paragraph>Three, and they're all live:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    1. Stars → Fragment → Gram.
                </Word> This is the one I'd underweighted. Withdrawal is restricted to creators, channel owners and bot
                operators — purchasers can't reverse Stars, deliberately, to stop them being used as an exchange. Minimum
                1,000 Stars, maximum 25M, with a rolling hold of up to 21 days applied <Word>
                    <Emphasis />
                    per incoming payment
                </Word> rather than per balance, so a steady earner always has a tranche locked. The payout lands in a TON
                wallet via Fragment, and the USD equivalent is converted to <Word>
                    <Bold />
                    Gram at CoinMarketCap's rate, refreshed every five minutes
                </Word>. Withdrawal is priced at $0.013/Star against a $0.01999 store purchase price — a ~35% spread between
                what the buyer pays and what the earner receives. Fragment can refuse payout by country.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    2. Telegram's own ad revenue share.
                </Word> 50/50, in Toncoin only, across roughly 100 countries.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    3. Third-party ad networks.
                </Word> AdsGram publishes <Word>
                    <Bold />
                    $4M+ paid out to 12,000+ publishers
                </Word>, denominated in <Word>
                    <Bold />
                    USDT on TON
                </Word>, $10 minimum once monthly or $100 any day, processed in 24–48h. Notably it also offers USDT-TRC20
                and fiat as alternates — Tron is still competing for the payout leg inside Telegram's own ecosystem.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    4. The affiliate rail
                </Word>, which is the interesting one mechanically. Per Telegram's API docs, mini app operators set a
                commission in permille, payouts are <Word>
                    <Bold />
                    automatic, in Stars
                </Word>, and the rules are deliberately ratchet-shaped: duration and commission can only be raised after
                creation — to lower either you must terminate and start over, and affiliates keep all accrued commissions
                <Word>
                    <Emphasis />
                    and
                </Word> keep earning on their referred users' future purchases after termination. Individual users qualify
                as affiliates, not just channels. So an ordinary user with no channel and no bot can earn Stars
                automatically, and earned Stars are withdrawable.
            </Paragraph>
            <Heading>So: what are people being paid for?</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Attention and distribution. Not labor.
                </Word> Specifically: ad impressions, referrals, and gated content/subscriptions. The highest-earning bot
                categories are trading signals, B2B automation, paywalled communities, and premium utilities — all charging
                users, with the operator as the only one getting paid.
            </Paragraph>
            <Paragraph>
                The labor side is empty. I went through a 30-app TON catalog by category: <Word>
                    <Bold />
                    zero
                </Word> apps paying users for work — no tasks, gigs, freelance, courier, delivery, surveys or bounties — and
                zero handling real-world commerce. TADA (ride-hailing, Singapore) is the one real-world-service integration
                and it's payment-<Word>
                    <Emphasis />
                    in
                </Word>, not payout. The "earning apps" that come up in every English and Russian list are the 2024
                tap-to-earn cohort — Blum, Catizen, Hamster, Yescoin, SEED, TapSwap — which is airdrop speculation, and one
                tested list puts ~95% of them as no longer paying meaningfully. The only consistent USDT payout among them
                is TG Trivia, paying quiz winners.
            </Paragraph>
            <Paragraph>Two things follow that I think matter to your frame:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The rail is already GRAM-denominated.
                </Word> You've been waiting for in-app payout to arrive. For the two largest flows it's already here and
                already in Gram — creator withdrawal and Telegram's own ad revshare both exit in Toncoin. What's missing
                isn't the money layer. It's a counterparty who wants to pay a person for something other than attention.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The creator leg is a structural seller.
                </Word> Telegram collects fiat for Stars and hands the earner Gram, priced off CMC every five minutes.
                Whoever that creator is, they're converting to local currency. That's a persistent, revenue-proportional
                sell cohort sitting on GRAM — which is a mechanism worth having in your price model separately from beta,
                since it scales with Telegram's monetization success rather than against it.
            </Paragraph>
            <Paragraph>Sources:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Reference>https://core.telegram.org/api/bots/referrals</Reference>
                        Telegram API — Affiliate programs
                    </Word>
                </Line>
                <Line>
                    <Word>
                        <Reference>https://adminhub.tools/blog/withdraw-telegram-stars/</Reference>
                        How to withdraw Telegram Stars: limits and real rate (2026)
                    </Word>
                </Line>
                <Line>
                    <Word>
                        <Reference>https://exitbid.io/blog/telegram-bot-monetization-2026</Reference>
                        Telegram Bot Monetization in 2026
                    </Word>
                </Line>
                <Line>
                    <Word>
                        <Reference>https://adsgram.ai/monetization</Reference>
                        AdsGram — Monetization
                    </Word>
                </Line>
                <Line>
                    <Word>
                        <Reference>https://www.theblock.co/post/279566/telegram-introduces-ad-revenue-sharing-with-5050-split-using-only-toncoin-in-nearly-100-countries</Reference>
                        Telegram introduces ad revenue sharing with 50:50 split using only toncoin
                    </Word>
                </Line>
                <Line>
                    <Word>
                        <Reference>https://dev.to/ton-adoption/30-best-mini-apps-on-ton-in-2026-catalog-by-category-1jc7</Reference>
                        30 Best Mini Apps on TON in 2026 — catalog by category
                    </Word>
                </Line>
                <Line>
                    <Word>
                        <Reference>https://starsearn.com/guides/telegram-mini-apps-best-2026</Reference>
                        Best Telegram Mini Apps That Still Pay in 2026: Tested List
                    </Word>
                </Line>
                <Line>
                    <Word>
                        <Reference>https://vc.ru/services/2837722-top-10-telegram-botov-dlya-zarabotka-deneg</Reference>
                        Топ-10 Telegram-ботов которые реально платят (vc.ru)
                    </Word> / <Word>
                        <Reference>https://prorosta.com/top-10-telegram-botov-i-mini-apps-dlya-zarabotka-v-2026-godu/</Reference>
                        ProRosta top-10 mini apps
                    </Word>
                </Line>
                <Line>
                    <Word>
                        <Reference>https://www.theblock.co/post/316062/tada-ride-hailing-telegram-mini-app-ton-usdt</Reference>
                        TADA launches Telegram mini app, bookings in TON or USDT
                    </Word>
                </Line>
                <Line>
                    <Word>
                        <Reference>https://cryptorank.io/news/feed/dde91-telegram-moves-toward-built-in-crypto-payments-with-ton-pay-launch</Reference>
                        Telegram Moves Toward Built-In Crypto Payments With TON Pay Launch
                    </Word>
                </Line>
                <Line>
                    <Word>
                        <Reference>https://www.crypto-reporter.com/press-releases/do-mini-apps-lose-30-of-their-revenue-stars-vs-ton-usdt-payments-in-2026-120732/</Reference>
                        Stars vs TON/USDT payments in 2026
                    </Word>
                </Line>
            </Paragraph>
        </Message>
        <Message
            at="2026-10-07T12:12:40.459705Z"
        >
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Nothing was written in this message</Paragraph>
        </Message>
    </Chapter>
);
