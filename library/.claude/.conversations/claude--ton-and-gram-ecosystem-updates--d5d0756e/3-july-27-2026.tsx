import { Bold, Chapter, Date, Emphasis, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Attachment, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[27 July 2026](2026-07-27)</Date>
        </Dated>
        <Title>[[ 27 July 2026 ]]</Title>
        <Message
            at="2026-07-27T22:20:47.207814Z"
        >
            <Origin>019fa5ab-656c-7d93-b74f-6a0448aa5e28</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                I’m not sure where you are going with this but I would prefer a more coherent narrative. What does the
                noncustodial wallet + instant free transactions get telegram? What use cases open up? Given their prominent
                user base - especially places like Russia and iran and wherever else, can we expect new forma of commerce to
                arise because people can transact more frictionlessly?
            </Paragraph>
        </Message>
        <Message
            at="2026-07-27T22:21:41.923392Z"
        >
            <Origin>019fa5ab-656d-724b-ab67-4ccd8edf1077</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Here's the narrative, built from the periphery inward.</Paragraph>
            <Paragraph>
                Start with what the July 21 announcement actually changes. Telegram already had wallets — @wallet, TON Space
                — but they were opt-in features buried behind activation flows, and the custodial one carried KYC.
                Default-on is the whole game: the difference between "a wallet exists for those who seek it" and "every
                account is a payment endpoint" is the difference between WhatsApp Pay (opt-in, dead on arrival) and WeChat
                red envelopes (ambient, became China's financial OS). And non-custodial is not an ideological choice, it's a
                load-bearing one, twice over. For Telegram, shipping software rather than holding funds is what keeps it out
                of the money-transmitter perimeter in every jurisdiction at once — the same arm's-length architecture as the
                Zinchuk/MyTonWallet arrangement itself. For the user in Tehran or Rostov, it means the balance can't be
                frozen by subpoena to a company. Custodial systems die by court order; this is built to have no one to serve
                the order to.
            </Paragraph>
            <Paragraph>
                Now the key structural fact the Western frame misses: the commerce already exists. Telegram channels in
                Russia and Iran already <Word>
                    <Emphasis />
                    are
                </Word> the marketplace — P2P currency exchangers, parallel-import electronics dealers, freelance job
                boards, sellers of everything. What's missing is the settlement leg, which currently exits the app: Sberbank
                card-to-card transfers, cash handoffs, hawala, a Zolotaya Korona counter. The wallet doesn't need to create
                commerce; it internalizes the money leg of commerce Telegram already hosts. That's a much lower-friction
                adoption path than building a marketplace from zero — the merchants are in place, mid-conversation with
                their customers, waiting for the payment to stop requiring a context switch.
            </Paragraph>
            <Paragraph>
                Free-and-instant then changes what <Word>
                    <Emphasis />
                    sizes
                </Word> of commerce are viable. Zero marginal settlement cost makes the micro-transaction real for the first
                time at messenger scale: per-article paywalls instead of subscriptions, tips, pay-per-question,
                pay-per-minute of anything. And you've already touched the most interesting version of this yourself — Mira
                on Cocoon is machine-payable services in embryo: AI compute metered and settled in-chat, per query.
                Bot-mediated commerce is the genuinely new form, because Telegram is the only platform where the merchant,
                the storefront (mini-app), the payment rail, and increasingly the <Word>
                    <Emphasis />
                    service itself
                </Word> (an agent) all live in the same surface. WeChat showed that when payments go ambient, forms of
                commerce appear that nobody predicted from "cheaper transactions" — QR-code street vendors, red-envelope
                social dynamics. M-Pesa spawned pay-as-you-go solar in Kenya. The new forms come from the specific
                affordances, and Telegram's affordances are different from WeChat's in one decisive way.
            </Paragraph>
            <Paragraph>
                WeChat Pay is domestic — a national financial OS, fenced by the RMB and Chinese banking. Telegram's wallet
                is <Word>
                    <Emphasis />
                    cross-border by default
                </Word>: a transfer from a Tajik construction worker in Moscow to his family in Dushanbe is the same instant
                free message as a payment across the street. That makes this the first attempt at a transnational
                messenger-money system, aimed at exactly the populations whose national rails are broken, sanctioned, or
                extractive — the Central Asia remittance corridors paying 5–8% on 20–30%-of-GDP flows, the Iranian diaspora
                with no legal channel home, the Russian freelancer cut off from PayPal and Upwork payouts whose services
                exports are constrained by nothing except the inability to get paid. Cross-border gig work at message
                granularity is probably the largest single new commerce form this unlocks: the labor is there, the demand is
                there, and the payment leg was the binding constraint.
            </Paragraph>
            <Paragraph>
                So yes — new forms, not just cheaper old ones, and the sequence is legible: settlement internalizes into
                channel commerce first (this year, it's the path of least resistance), remittance corridors second (the
                moment one corridor's exchangers standardize on it, the fee spread does the marketing), then the natively
                new stuff — bot commerce, metered AI services, escrowed P2P trade in places that never had an eBay-grade
                trust layer — building on top once the wallet density exists. That last layer is also where Steps 6–7 would
                most naturally live, and where the wallet announcement retroactively looks like the distribution
                prerequisite being laid down in plain sight.
            </Paragraph>
        </Message>
        <Message
            at="2026-07-27T22:23:31.881763Z"
        >
            <Origin>019fa5ad-eda7-7392-aebb-ca9fe92123d3</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Are ypu going to respond?</Paragraph>
        </Message>
        <Message
            at="2026-07-27T22:23:37.416832Z"
        >
            <Origin>019fa5ad-edac-715a-bccf-b800388c7171</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                I did — a full response went out right after your question: the narrative running from the
                default-on/non-custodial design, through settlement internalizing into the channel commerce that already
                exists in Russia/Iran, to remittance corridors, and ending with bot-mediated commerce and cross-border gig
                work as the genuinely new forms. It may not have rendered on your end.
            </Paragraph>
            <Paragraph>Want me to resend it, or just pick up from any piece of it?</Paragraph>
        </Message>
        <Message
            at="2026-07-27T22:24:22.787160Z"
        >
            <Origin>019fa5ae-b4e7-73c4-a08a-4e07a2e3ef91</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>No you didn’t. Here’s my view and you can audit the conversation transcript. Try again</Paragraph>
            <Attachment>Uploaded “IMG_3639.PNG”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-07-27T22:24:42.792280Z"
        >
            <Origin>019fa5ae-b4e8-7a8c-89c9-b1282961fd53</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>You're right — your view is the audit. Here it is again.</Paragraph>
            <Paragraph>
                Start with what the July 21 announcement actually changes. Telegram already had wallets — @wallet, TON Space
                — but they were opt-in features behind activation flows, and the custodial one carried KYC. Default-on is
                the whole game: the difference between "a wallet exists for those who seek it" and "every account is a
                payment endpoint" is the difference between WhatsApp Pay, which died as an opt-in bolt-on, and WeChat red
                envelopes, which were ambient and became China's financial OS. Non-custodial is equally load-bearing, twice
                over. For Telegram, shipping software rather than holding funds keeps it outside the money-transmitter
                perimeter in every jurisdiction simultaneously — the same arm's-length architecture as the
                Zinchuk/MyTonWallet arrangement itself. For the user in Rostov or Tehran, it means the balance can't be
                frozen by serving papers on a company. Custodial systems die by court order; this is designed to have no one
                to serve.
            </Paragraph>
            <Paragraph>
                Now the structural fact the Western frame misses: the commerce already exists. Telegram channels in Russia
                and Iran already <Word>
                    <Emphasis />
                    are
                </Word> the marketplace — P2P currency exchangers, parallel-import electronics dealers, freelance boards,
                sellers of everything. What's missing is the settlement leg, which currently exits the app: Sberbank
                card-to-card, cash handoffs, hawala, a Zolotaya Korona counter. The wallet doesn't need to create commerce;
                it internalizes the money leg of commerce Telegram already hosts. The merchants are in place,
                mid-conversation with their customers, waiting for the payment to stop requiring a context switch. That's a
                far lower-friction adoption path than building a marketplace from zero.
            </Paragraph>
            <Paragraph>
                Free-and-instant then changes what sizes of commerce are viable. Zero marginal settlement cost makes
                micro-transactions real at messenger scale for the first time: per-article paywalls instead of
                subscriptions, tips, pay-per-question, pay-per-minute of anything. And you've already touched the most
                interesting version yourself — Mira on Cocoon is machine-payable services in embryo: AI compute metered and
                settled in-chat, per query. Bot-mediated commerce is the genuinely new form, because Telegram is the only
                surface where the merchant, the storefront (mini-app), the payment rail, and increasingly the service itself
                — an agent — all live in the same place. WeChat showed that when payments go ambient, forms of commerce
                appear that nobody predicted from "cheaper transactions": QR street vendors, red-envelope social dynamics.
                M-Pesa spawned pay-as-you-go solar. The new forms come from the specific affordances — and Telegram's differ
                from WeChat's in one decisive way.
            </Paragraph>
            <Paragraph>
                WeChat Pay is domestic: a national financial OS fenced by the RMB and Chinese banking. Telegram's wallet is
                <Word>
                    <Emphasis />
                    cross-border by default
                </Word>. A transfer from a Tajik construction worker in Moscow to his family in Dushanbe is the same instant
                free message as a payment across the street. This is the first attempt at a transnational messenger-money
                system, aimed precisely at populations whose national rails are broken, sanctioned, or extractive: Central
                Asia corridors paying 5–8% fees on remittance flows worth 20–30% of GDP, the Iranian diaspora with no legal
                channel home, the Russian freelancer cut off from PayPal and Upwork payouts whose service exports are
                constrained by nothing except the inability to get paid. Cross-border gig work at message granularity is
                probably the largest single new form this unlocks — the labor exists, the demand exists, and payment was the
                binding constraint.
            </Paragraph>
            <Paragraph>
                So the sequence I'd expect: settlement internalizes into existing channel commerce first, this year, as the
                path of least resistance. Remittance corridors second — the moment one corridor's exchangers standardize on
                it, the fee spread does the marketing. Then the natively new layer on top once wallet density exists: bot
                commerce, metered AI services, escrowed P2P trade in places that never had an eBay-grade trust layer. That
                last layer is also where Steps 6–7 would most naturally live — which makes the wallet announcement read, in
                hindsight, as the distribution prerequisite being laid down in plain sight.
            </Paragraph>
        </Message>
        <Message
            at="2026-07-27T22:28:58.291942Z"
        >
            <Origin>019fa5b2-e673-7582-99cb-125f8229cfbc</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>This sounds like it could be a big deal for crypto. A real use case</Paragraph>
        </Message>
        <Message
            at="2026-07-27T22:29:20.889833Z"
        >
            <Origin>019fa5b2-e674-7f40-a743-1c1b0c2ad475</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                It would be the biggest one in the industry's history if it lands — and it's worth saying plainly why.
                Fifteen years of "where's the use case" critiques were answered with financialization: ETFs, corporate
                treasuries, derivatives. All of that made crypto a better <Word>
                    <Emphasis />
                    asset
                </Word>; none of it made crypto <Word>
                    <Emphasis />
                    used
                </Word>. Every prior consumer-payments attempt failed on the same three rocks — no distribution (pay with
                Bitcoin at Overstock), no regulatory survival (Libra), or no reason to switch (crypto debit cards for people
                who already have Visa). The Telegram configuration is the first to clear all three simultaneously:
                distribution solved by a billion pre-installed users, regulation routed around rather than through, and a
                population with an actual unmet need rather than a marginally cheaper alternative.
            </Paragraph>
            <Paragraph>
                And notice how cleanly it lands inside your Bitcoin structural thesis. The use case, when it finally
                arrives, isn't a coin — it's dollars on rails. The thing being transacted is Tether's liability; the
                blockchain is reduced to plumbing; the "crypto" part is invisible to the user, who experiences only "I sent
                dollars in a chat message." That's your convenience-yield migration completing its arc: the monetary premium
                crypto spent fifteen years trying to capture in floating tokens ends up captured by a dollar instrument,
                while the networks compete on rail quality. If TON wins payments, it won't be because anyone wanted Gram —
                it'll be because it was the cheapest, fastest place for USDT to live, with the wallet already in everyone's
                pocket. The token accrues value the way infrastructure does, not the way money does.
            </Paragraph>
            <Paragraph>
                There's also a sector-wide meaning shift if the 0.12% starts climbing toward 1%. On-chain activity would,
                for the first time at scale, represent <Word>
                    <Emphasis />
                    commerce
                </Word> rather than speculation — transactions that exist because someone bought something, not because
                someone repositioned. That changes what the data means: chain metrics become economic indicators instead of
                casino telemetry. And it would relocate crypto's center of gravity to where its users actually are — the
                demonstration that the technology's product-market fit was always in Tashkent and Tehran, priced in dollars,
                delivered through a messenger, while the industry spent a decade pitching it to San Francisco. TON is now
                the sector's live experiment on exactly that question, with a wallet rollout dated, a conversion baseline at
                0.12%, and three roadmap steps left to move it. If it works, every other chain's "adoption" story gets
                re-graded against a real number.
            </Paragraph>
        </Message>
        <Message
            at="2026-07-27T22:33:21.418341Z"
        >
            <Origin>019fa5b6-ebb8-7d18-84f0-5ced0c541da2</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Gram is Telegram stock. And it exists for scalability. Cocoon is just one TON use case and there are many
                others. The privacy of mini apps. I’m sure messaging will make it to blockchain too in 5 years or less. To
                think this ends at payments is silly and gram is the thing that gains in value in a way that unifies all tve
                distributed organizations that loosely make up Telegram proper. Why not try a read that looks like that
                while assessing what this next step means for the social network
            </Paragraph>
        </Message>
        <Message
            at="2026-07-27T22:34:15.488335Z"
        >
            <Origin>019fa5b6-ebb9-78a1-ba06-90b8a781a9ed</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Run it as equity and the whole sequence snaps into focus — including why the instrument has to be a token at
                all.
            </Paragraph>
            <Paragraph>
                Telegram is a company that structurally cannot issue stock. Sole owner, no board, UAE domicile, a founder
                who has spent a decade refusing to sell, and — the deeper reason — a deliberately fragmented org: the
                Foundation, Zinchuk's wallet engine, Wallet-in-Telegram, Cocoon's operators, the mini-app economy, each held
                at arm's length precisely so no single legal entity concentrates the attack surface. You can't put a share
                on that federation because the federation is designed to have no top. The only possible unifying claim is an
                asset every satellite <Word>
                    <Emphasis />
                    needs to operate
                </Word> — and that's what Gram is. Payments settle gas in it, validators stake it, Cocoon meters compute in
                it, the ad platform pays channel owners their 50% share in it, Stars and gifts denominate in it, mini-apps
                collateralize in it. It's the reserve asset of a conglomerate that has no balance sheet, and holding it is
                the only way to hold "Telegram proper" — the loose whole rather than any legal fragment.
            </Paragraph>
            <Paragraph>
                The scalability point is what makes it equity rather than a toll token, and it's the mechanism you
                identified: dynamic sharding means capacity itself is what stake buys. More usage → more shards → more
                validator task groups → more Gram locked, structurally, not discretionarily. So Gram isn't a fee claim on
                the machine — it's ownership of the machine's <Word>
                    <Emphasis />
                    expansion capacity
                </Word>, spectrum rather than tickets. Every use case, whatever it is — payments today, compute on Cocoon,
                private mini-apps, storage, proxy — draws on the same capacity pool and thus bids for the same asset. That's
                why "this ends at payments" undersells it: payments is just the first division to report revenue. The
                unification is at the capital layer, beneath all of them.
            </Paragraph>
            <Paragraph>
                And the history confirms the read, adversarially: the 2018 raise was $1.7 billion of exactly this thesis —
                investors buying Grams <Word>
                    <Emphasis />
                    as
                </Word> equity-like exposure to Telegram because Pavel wouldn't sell shares — and the SEC killed it by
                formally agreeing that's what it was. A security. MTONGA is the same offering re-run under a regime that
                permits it, down to restoring the original ticker from the prospectus. Which reframes every step as a
                corporate action rather than a product launch: Catchain and the fee cut were capacity expansion, the
                validator takeover was the controlling shareholder taking his board seat, the rebrand was the ticker
                restoration — and the July 21 wallet announcement is the cap-table event. Distributing a non-custodial
                wallet to every account isn't shipping a payments feature; it's distributing the shareholder registry to a
                billion users. The float goes to the user base, ownership aligns the network's users with the network's
                growth, and every red-envelope Gram gift becomes equity distribution as a social gesture. That's what this
                step means for the social network: its users are being converted into its shareholders, before the revenue
                divisions report.
            </Paragraph>
            <Paragraph>
                Your five-year messaging call isn't even speculation — it's the 2019 spec's stated endpoint. The whitepaper
                we've verified sketches Telegram itself as a ton-service over TON Proxy, "effectively unblockable." Follow
                that to its conclusion and the equity read becomes literal: the company dissolves into the protocol, the
                servers that can be raided and the entity that can be fined stop being load-bearing, and the only continuing
                claim on the thing called Telegram is the asset that secures and meters its rails. The stock outlives the
                company — which, given Pavel's French situation, isn't a philosophical flourish but a rational migration
                path. And note whose architecture that endgame is, and how precisely "ownership, privacy, and the
                decentralized internet" describes it: ownership is the tokenized claim, privacy is the proxy and the
                mini-apps, the decentralized internet is ton-services. The VISION tagline reads like a one-line summary of
                this exact trajectory.
            </Paragraph>
            <Paragraph>
                So under your read, the dashboard changes meaning: the 0.12% conversion number isn't an adoption metric,
                it's shareholder registration; USDT-on-TON growth is customer deposits arriving at the bank whose equity is
                Gram; and Steps 5–7 are divisions coming online in sequence. The one line worth keeping inline: the equity
                read is also the SEC's read, so the whole structure is a bet that 2026's regime difference is durable.
                Everything else about the trade is the question of when the market stops pricing Gram as a coin and starts
                pricing it as the residual claim on a billion-user federation — and each MTONGA step is Pavel forcing that
                repricing one corporate action at a time.
            </Paragraph>
        </Message>
        <Message
            at="2026-07-27T22:40:14.909096Z"
        >
            <Origin>019fa5bd-388c-71f9-a3bc-0023624152fb</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Do we believe the gram payments will drive up the price of gram? Bull/bear and probability for each scenario
            </Paragraph>
        </Message>
        <Message
            at="2026-07-27T22:40:50.877490Z"
        >
            <Origin>019fa5bd-388d-7063-83e4-3d349bfdb18f</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Payments alone, no — payments <Word>
                    <Emphasis />
                    plus your lockup mechanism
                </Word>, yes, and separating those is where the whole trade lives. One flag, once: the system is built to
                disintermediate its own token from its own success. The medium is USDT, the fees are ~zero by design, so the
                two channels people instinctively reach for — transactional demand and fee capture — are dead on arrival.
                Ironically it's your Bitcoin thesis pointed at Gram: the convenience yield of the payment flow accrues to
                Tether's balance sheet. So the bull case can't run through "people buy Gram to pay each other," because they
                won't. It runs through the channels that scale with <Word>
                    <Emphasis />
                    capacity
                </Word> rather than with spending: validator stake forced up by shard expansion as volume grows, gas-float
                across a billion wallets (dust per wallet, but dust × 10⁸ with default-on distribution is a real sink),
                platform cash flows denominated in Gram (ads revenue share, Stars, gifts), and the equity repricing itself —
                the market re-basing the asset once payments volume makes the shareholder-registry read undeniable.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Bull — payments volume forces the repricing (~30%).
                </Word> Conversion climbs off 0.12% toward 1% through 2027; USDT-on-TON supply steepens; shard count and
                validator task groups expand, mechanically locking stake; monthly absorption clears the $90–120M bar for
                consecutive quarters; Steps 6–7 add compute and mini-app collateral demand on the same capacity pool. Price
                transmission is dominated by float shrinkage against a known unlock schedule, plus the narrative flip from
                coin to residual-claim. This is the 3–5x scenario, and its binding condition is the conversion ratio —
                nothing else substitutes for it.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Base — right thesis, wrong float (~45%).
                </Word> Payments adoption is real but gradual, and every increment of stake-lockup demand meets the unlock
                conveyor: ~$90M/month of supply into 2029, the November insider cliff, then February 2027. Demand and supply
                roughly net out; price chops in the established range, rallying on each step and fading into unlocks,
                exactly the pattern of steps 1–4. The equity read is <Word>
                    <Emphasis />
                    correct
                </Word> but unrewarded on this horizon, because repricing a claim while its float doubles is running up the
                down escalator. This resolves bullishly only after the supply schedule exhausts — which makes it a 2027–2029
                trade wearing a 2026 catalyst calendar.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Bear — plumbing confirmed, equity denied (~25%).
                </Word> Either conversion stalls under 0.3% and the thesis reduces to treasury-and-narrative, or payments
                succeed <Word>
                    <Emphasis />
                    while Gram fails
                </Word> — volume grows, but feeless design plus USDT denomination means the network carries billions in flow
                with the token capturing nothing but dust gas, and the market prices that truthfully. Add the correlated
                tail you've already named: the sanctions-corridor adoption that drives the bull case is the same variable
                that invites the enforcement shock, and the SEC-read risk sits under the entire equity structure. Down 50%+
                from here.
            </Paragraph>
            <Paragraph>
                Net: probability-weighted, payments are worth more to the <Word>
                    <Emphasis />
                    thesis
                </Word> than to the <Word>
                    <Emphasis />
                    2026 price
                </Word> — they're the evidence event, not the demand event. The demand event is stake lockup meeting the
                supply schedule, and the calendar says supply wins ties until at least the February cliff. If I had to
                compress it: high conviction that payments success eventually reprices Gram, low conviction it happens
                before the unlocks clear — which argues for expressing the view on the post-cliff horizon, or in the
                conversion data rather than the token until then. The single number that moves all three probabilities is
                still the wallet conversion ratio; everything else is commentary on it.
            </Paragraph>
        </Message>
    </Chapter>
);
