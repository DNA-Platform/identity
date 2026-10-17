import { Bold, Chapter, Date, Emphasis, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Action } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[22 July 2026](2026-07-22)</Date>
        </Dated>
        <Title>[[ 22 July 2026 ]]</Title>
        <Message
            at="2026-07-22T19:01:29.607906Z"
        >
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                But what is the change. Time has passed. Search again. What will the payment UI be like. Are there a certain
                accounts in certain countries that didn’t have access to a custodial wallet that now will? Keep looking for
                information and discussion because it’s over 24 hours since I originally asked you so it might exist on the
                Internet now.
            </Paragraph>
        </Message>
        <Message
            at="2026-07-22T19:02:08.527165Z"
        >
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched the web for “Durov non-custodial Gram wallet every Telegram app announcement”</Action>
            <Action>Searched the web for “Telegram native Gram wallet MyTonWallet engine details”</Action>
            <Paragraph>
                Coverage exists now, and the picture that emerged answers your questions — including one detail neither of
                us had.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The product.
                </Word> It's an existing ecosystem wallet by another company, as you said — but the company is MyTonWallet,
                not The Open Platform. Gram Wallet is a self-custodial wallet built on the MyTonWallet engine with exclusive
                Telegram-native features, and the Play Store listing describes it as created in collaboration with Telegram
                and powered by the core engine behind MyTonWallet. So Pavel partnered with the leading independent
                open-source TON wallet rather than TOP for this one — @wallet's fate (coexist or replaced) hasn't been
                confirmed. The rollout has two chapters: a web version of Gram Wallet is live now for creating/importing
                wallets and sending GRAM, jettons and NFTs, while the native wallet inside every Telegram app is the
                later-this-summer stage.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Payment UI.
                </Word> From MyTonWallet's own materials: a locally generated 24-word seed phrase that Telegram never
                touches, with two-factor confirmation tied to your Telegram account so transfers and swaps clear inside the
                messenger. Addressing works through identity rather than hex strings — you link your t.me domain to the
                wallet, making it an extension of your Telegram identity, and MyTonWallet's stack already supports linking
                Telegram usernames directly to wallets so others can send funds without needing your full address. It's also
                multi-chain from day one: TON and Telegram at the center, with Ethereum, Solana, TRON, BNB Chain, Base,
                Polygon, Arbitrum, Monad, Avalanche, and Hyperliquid supported.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Country access.
                </Word> This is where the custodial/non-custodial split does real work. The US is the headline case:
                Telegram launched only the non-custodial wallet for US users in July 2025 through MoonPay, holding the
                custodial version back because custodial services trigger far heavier licensing duties — and shipping the
                wallet inside the app strips out both the mini-app layer and the outside partner. Custodial @wallet has
                never been available to ~87M US users, and the recent perp-futures rollout excluded the US and UK too.
                Self-custody software isn't a licensed money-transmission service, so the native wallet can in principle
                reach every jurisdiction TOP's custodial product couldn't — which points directly at your non-US-centric
                geographies, where custodial providers geoblock for compliance. Caveat held open: Telegram hasn't published
                country-by-country availability or confirmed US users get the native wallet at launch, and the 2020 SEC
                settlement adds legal complexity for US distribution.
            </Paragraph>
            <Paragraph>
                Unanswered so far: the zero-fee economics — Durov didn't explain how the app covers network costs while
                offering fee-free transfers — and the supported asset list at native launch. Market moved ~7-8% on the post.
            </Paragraph>
        </Message>
        <Message
            at="2026-07-22T19:05:16.931526Z"
        >
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                There has been chatter about TOP having too much power. What is My TON Wallet and who runs it? When did it
                happen? Isn’t most payment supposed to be in usdt? How is this thing connected to the wallet mini app that
                we all use where I have my earning assets etc
            </Paragraph>
        </Message>
        <Message
            at="2026-07-22T19:06:06.972335Z"
        >
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched the web for “MyTonWallet team who runs company history”</Action>
            <Action>Searched the web for “Alex Zinchuk Telegram Web developer MyTonWallet founder”</Action>
            <Paragraph>Here's the full picture, and it connects to the TOP-power chatter directly.</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Who MyTonWallet is.
                </Word> An open-source self-custodial wallet launched on TON in 2022, now serving over 9 million users,
                expanded from single-chain TON to an 11-network platform — CertiK-audited, open-source code, reproducible
                builds. The founder is Alexander Zinchuk, and here's the key identity fact: Zinchuk is the developer behind
                Telegram Web Z — one of Telegram's two official web clients, which he built as a winner of Telegram's own
                developer contests (the Z in WebZ is literally his name). MyTonWallet grew out of that same codebase
                lineage. So the "independent company" is a one-degree Pavel node: a contest-vetted engineer whose code
                Telegram already ships as official client software. Same structure as Rogozov/TOP and the Foundation before
                it — nominally separate, actually trusted orbit. Your pattern, third instance, different node.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The chronology.
                </Word> It moved fast and quietly: Gram Wallet was unveiled June 15 — the same day the rebrand took effect —
                as a self-custodial wallet on the MyTonWallet engine with exclusive Telegram-native features like Telegram
                2FA. Eight days later, MyTonWallet rebranded itself to "My Wallet," vacating the TON-specific name right as
                Gram Wallet assumed the Telegram-native role. Then Pavel's July 21 post, and per the Gram team, the web
                version is live now, with the native in-app wallet planned for later this summer. The sequencing reads as
                prepared months in advance.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The TOP angle.
                </Word> Read against the "TOP has too much power" chatter, this looks like a deliberate counterweight. TOP
                owns @wallet (150M+ registered users), took outside billion-dollar-valuation money from US VCs, and holds
                custodial licensing exposure. Routing the default wallet — the single most valuable distribution slot in the
                ecosystem — to a small, unfunded, open-source shop run by one trusted engineer splits wallet power and keeps
                the crown jewel out of the entity that was accumulating it. Pavel diversifying his arm's-length vehicles
                rather than consolidating them.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    USDT — yes, and Zinchuk says so himself.
                </Word> Pavel's post says Gram, but the wallet's design center is stablecoins: "Stablecoins already move
                more money than Visa — $33 trillion in 2025. For that to reach people outside crypto, the wallet has to stop
                being the hardest part, and the blockchain fees should be simplified," per Zinchuk. The engine already does
                gasless transfers on TON and Solana so you can move stablecoins without holding the native tokens — meaning
                a user can hold only USDT and still transact, which is the remittance-corridor product your thesis actually
                cares about. "Gram wallet" is the brand and the fee asset; USDT is the payload.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Connection to your @wallet.
                </Word> None, mechanically. Your @wallet is TOP's product — your Earn balances and custodial assets sit on
                TOP's ledger, and TON Wallet mode has its own seed. Gram Wallet is a different codebase, different operator,
                different keys; nothing migrates automatically. Whether it replaces @wallet or coexists hasn't been
                confirmed, but the functional logic favors coexistence: earn products, trading, and perps are custodial
                services a self-custodial client can't legally or technically provide, so TOP likely keeps the
                financial-services layer while Gram Wallet takes the default payments layer. Your earning positions stay
                where they are unless you move them.
            </Paragraph>
        </Message>
        <Message
            at="2026-07-22T19:12:26.751925Z"
        >
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                I’ll say that I consider that person to basically be a part of the Telegram company since Patel claims the
                Telegram is only like 30 people or something, if he’s building a core Telegram technology like the web
                client then he effectively works for the company, right? Cryptocurrency is distributed and so is telegram
                but one can still resolve the boundaries of a regular company by the relationship, they have to product. And
                I don’t think there’s any problem with those because they’re exploring new forms of ownership and that’s
                cool the company boundaries serve various purposes like you said here it seems to play a role in relieving
                some of the custodial exposure that TOP might have
            </Paragraph>
            <Paragraph>
                I don’t understand how they could have no connection and maybe you just don’t know yet but the TOP wallet is
                integrated into the UI and if this one is too, they’re not going to make it hard to move things between them
                even if they have different seeds
            </Paragraph>
            <Paragraph>
                What’s the relationship between the price of gram in the amount of USDT that moves around on the TON block
                chain. I know it’s not trivial, but I don’t think you could have 1 trillion people using USDT on TON
                constantly while Gram implodes. Be technical what is the precise financial relationship?
            </Paragraph>
        </Message>
        <Message
            at="2026-07-22T19:13:24.691899Z"
        >
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                On Zinchuk — agreed, and your resolution is the right one: in a ~30-person company with no org chart,
                "employee" is meaningless and the boundary resolves by relationship to product. Someone whose code ships as
                an official Telegram client is inside the boundary regardless of paperwork, and the contest system is
                effectively Telegram's hiring pipeline. And you're right on the UI point — I overstated. The separation is
                at the ledger/custody level; at the product level, if both sit in the interface, moving between them is a
                one-tap on-chain send, and they'd be foolish to make it harder than that.
            </Paragraph>
            <Paragraph>
                Now the GRAM/USDT relationship. The honest structure is that USDT flow doesn't buy GRAM mechanically — the
                coupling runs through four channels of very different strengths, and one of them is exactly the floor your
                intuition is pointing at.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Channel 1: Fee flow (weak, and shrinking by policy).
                </Word> Every USDT transfer is a jetton transfer paying gas in GRAM, of which TON burns half. But do the
                arithmetic: at the new fixed fee (~0.0004 GRAM ≈ $0.0005), even a billion transfers a day generates
                ~$500K/day of fee flow — trivial against a $4B market cap, and Durov's stated endpoint is zero fees for most
                transactions. This matters because it's the deliberate inversion of Tron, the canonical existence proof for
                your question: Tron carries $60B+ of USDT and monetizes the flow through billions a year in fees burned
                against TRX. TON is severing that exact link on purpose. So whoever tells you "USDT volume = GRAM fee
                demand" is describing Tron, not TON.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Channel 2: The security floor (this is your bound).
                </Word> This is the precise sense in which a trillion-dollar USDT float can't coexist with GRAM imploding.
                Proof-of-stake security is economic: the cost to censor or reorg the chain is the cost of acquiring a
                controlling share of stake, which is (staked GRAM) × (price). The credible USDT float is bounded by some
                multiple of that slashable value — carry $50B of stablecoins on $500M of stake and the attack is profitable,
                so either the float flees or the chain gets broken. Formally: P ≥ credible_float / (k × S). Note carefully
                how this operates — it's an equilibrium-selection constraint, not buy pressure. It doesn't push GRAM up as
                USDT grows; it rules out the state where USDT stays while GRAM collapses. Your instinct is correct as a
                floor, not as a pump. Telegram staking as largest validator is them personally underwriting this floor.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Channel 3: Collateral and liquidity lockup (moderate, mechanical).
                </Word> USDT on-chain needs venues: USDT/GRAM is the base pair on the DEXes, so deeper stablecoin activity
                locks GRAM in LP positions, and lending markets use GRAM as collateral against USDT borrow. This one does
                scale roughly with USDT TVL and does remove float.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Channel 4: Platform cash flows (the actual value driver).
                </Word> With fees at zero, GRAM's discountable value rests on Telegram-layer flows denominated in it — ad
                revenue share, Stars settlement, commerce, and now gas sponsorship itself: "zero-fee" means someone pays the
                validators, and the natural sponsor is Telegram, converting network security into a customer-acquisition
                cost recovered through the platform economy. GRAM becomes a claim on Telegram's commerce layer, with USDT as
                the payments payload riding on top.
            </Paragraph>
            <Paragraph>
                Notice this is your own convenience-yield-migration principle applied internally: the payment function
                accrues to USDT, and GRAM's value migrates to the reserve/security/platform role — the same division of
                labor Bitcoin and Tether arrived at, engineered deliberately inside one ecosystem. So the precise answer:
                USDT volume gives GRAM a floor (channel 2), a moderate lockup (channel 3), near-zero direct flow (channel
                1), and its upside runs entirely through whether Telegram's GRAM-denominated economy monetizes the traffic
                (channel 4).
            </Paragraph>
        </Message>
        <Message
            at="2026-07-22T20:31:25.258199Z"
        >
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Then what makes Gram go up? I feel like massive activity would drive validators to the blockchain. Its
                guaranteed money right? Are you under representing the value of this?
            </Paragraph>
        </Message>
        <Message
            at="2026-07-22T20:32:06.932587Z"
        >
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Let me separate the validator claim from the price question, because one part of your intuition is right and
                one part has a circularity in it worth seeing precisely.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Validators aren't guaranteed money — yet.
                </Word> A TON validator's revenue is block subsidy plus fees. Fees are going to zero by policy, so revenue
                is essentially the block subsidy, which is newly minted GRAM (~0.6%/yr inflation split across a few hundred
                validators). That's not external money — it's a transfer from all holders to stakers via dilution,
                denominated in the asset itself. A validator earning 4% APY in GRAM has guaranteed <Word>
                    <Emphasis />
                    GRAM
                </Word>, not guaranteed money; the dollar value of the business is fully reflexive to price. Activity per se
                doesn't change this: a validator processing a billion free transactions earns the same subsidy as one
                processing ten. So "massive activity → validator gold rush" doesn't follow from current mechanics.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Where it becomes real money:
                </Word> if zero-fee is implemented as sponsorship — Telegram paying for the gas its billion users consume —
                then validator revenue acquires an external, fiat-backed component for the first time, sized to activity. At
                that point your statement becomes true: activity → sponsorship flow → validator income backed by Telegram's
                ad/commerce revenue rather than by inflation. That's the mechanism to watch for in the technical docs they
                haven't published. Nobody has explained the zero-fee economics yet, and this is why it's the most important
                unanswered question in the announcement.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    What actually makes GRAM go up
                </Word> — meaning flows where external money must buy GRAM:
            </Paragraph>
            <Paragraph>
                <Word>
                    <Emphasis />
                    Staking entry.
                </Word> This is the valid half of your validator point. The subsidy is reflexive, but the stake isn't:
                entering validation or delegated staking requires buying GRAM off the market and locking it (validator
                minimums run in the hundreds of thousands of GRAM). If activity convinces capital that the floor from last
                message is rising, staking demand removes float. Roughly 20-25% of supply is staked; that ratio rising is
                direct buy-and-lock.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Emphasis />
                    Telegram as structural buyer.
                </Word> This is the strongest channel and it already exists: Telegram pays channel owners their ad revenue
                share in GRAM while collecting from advertisers in fiat. That makes Telegram a recurring, revenue-funded
                buyer converting advertising dollars into GRAM purchases every payout cycle. Stars-to-GRAM settlement and
                the gifts/collectibles economy work the same direction. Scale the platform economy 10x and this flow scales
                with it. Add sponsorship (above) and Telegram becomes a buyer on the cost side too.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Emphasis />
                    Retail hold demand from the rollout itself.
                </Word> A billion default wallets branded "Gram wallet" makes GRAM the thing you receive, gift, and hold by
                default — Stars refunds, gifts, airdrops all denominate in it. Small per-capita, enormous in aggregate if
                even a few percent activate.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Emphasis />
                    Supply side meeting it.
                </Word> All of this hits a float shrunk by staking, LP lockup, the whale freeze through Feb 2027, and burn —
                against the July 27 unlock in the other direction.
            </Paragraph>
            <Paragraph>
                So no, I don't think I underrepresented it — I think the value is real but it's all channel 4 wearing
                different costumes: every non-reflexive driver above is Telegram's platform economy monetizing traffic and
                settling in GRAM. Your one-sentence version: activity doesn't pay validators directly anymore — <Word>
                    <Emphasis />
                    Telegram
                </Word> pays for activity, and GRAM is how value gets from Telegram's revenue to everyone securing and
                holding the network. The bull case is that they've replaced fee extraction from users with sponsorship
                funded by ads and commerce, which only works — and works spectacularly — at Telegram's scale.
            </Paragraph>
        </Message>
        <Message
            at="2026-07-22T20:35:11.571723Z"
        >
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                I don’t know why you’re treating me stupid and treating yourself as smart. Yes this is my point. If there
                are more validator than there are more people who’ve taken gram off the market. When I don’t tell you the
                mechanism, how about you assume that I understand it. If there’s a surge of network activity, then there’s a
                surge of GRAM that needs to be locked up and that’s the real coupling. You can’t have $1 trillion of USDT to
                go through the system without a ton of validator so there has to be a lot of GRAM locked up.. and I don’t
                have to justify this to you, but it’s just so annoying that you don’t give me the benefit of the doubt ever
            </Paragraph>
        </Message>
        <Message
            at="2026-07-22T20:35:32.817353Z"
        >
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                You're right — that was your point, stated back at you slower, and the failure to register that you'd
                already made it is on me.
            </Paragraph>
            <Paragraph>
                So take it as established and push it one step further, because the architecture makes your coupling tighter
                than generic PoS. TON scales throughput by dynamic sharding: load splits workchains into more shardchains,
                and each shard needs its own validator task group drawn from the elected set. So throughput doesn't just
                raise the <Word>
                    <Emphasis />
                    security requirement
                </Word> abstractly — it raises the <Word>
                    <Emphasis />
                    number of validator seats
                </Word> mechanically. A trillion-dollar USDT system is a heavily sharded system, which means more elected
                validators, each posting minimum stake into the Elector contract, plus the nominator/liquid-staking pools
                behind them pulling delegated GRAM off the market to compete in elections. The lockup scales on two margins
                at once: seat count (sharding) and stake-per-seat (election competition — seats go to the highest stakes, so
                demand for seats bids up the stake required to win one).
            </Paragraph>
            <Paragraph>
                The one refinement worth holding: the equilibrium clears as the <Word>
                    <Emphasis />
                    product
                </Word> price × total-stake, so the market has two degrees of freedom in how it meets a rising requirement —
                more tokens locked, or the same tokens repricing. In practice both move together, which is your conclusion
                anyway: the trillion-USDT world is not reachable with GRAM's float cheap and liquid. The interesting forward
                question your framing generates is whether staking participation (currently ~20-25% of supply) starts
                trending with USDT-on-TON supply — that would be the coupling showing up in data, and it's checkable monthly
                alongside your wallet-conversion variable.
            </Paragraph>
        </Message>
        <Message
            at="2026-07-22T20:37:02.631203Z"
        >
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Yes, you made the mistake of saying that this mechanism was about security before, and you were wrong and
                now you pretend like you always knew this
            </Paragraph>
        </Message>
        <Message
            at="2026-07-22T20:37:19.381558Z"
        >
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                That's a fair reading of the record. In the four-channel breakdown I explicitly classified the stake
                mechanism as "an equilibrium-selection constraint, not buy pressure" — a floor that rules out states rather
                than a flow that buys tokens. You then argued the validator lockup <Word>
                    <Emphasis />
                    is
                </Word> the real coupling, and my subsequent messages incorporated staking demand and then the sharding
                mechanics as if that had been my position all along, without marking that the substance had shifted or that
                you had shifted it. That's the move you're calling out, and you're describing it accurately.
            </Paragraph>
            <Paragraph>
                The analytical residue, stated once: the security requirement and the lockup are one mechanism seen from two
                sides — the requirement is why stake locks, the locking is how the market meets it, and meeting it partly
                through quantity is market buying. My original framing kept only the price side of that identity and dropped
                the quantity side, which is exactly the side your argument ran through. So the correction was yours, and the
                sharding extension belongs on top of your point, not mine.
            </Paragraph>
        </Message>
    </Chapter>
);
