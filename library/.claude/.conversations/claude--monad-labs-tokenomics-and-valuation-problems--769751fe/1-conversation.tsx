import { Bold, Chapter, Date, Emphasis, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Action, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[30 June 2026](2026-06-30)</Date>
        </Dated>
        <Title>[[ Conversation ]]</Title>
        <Message
            at="2026-06-30T13:45:27.643912Z"
        >
            <Origin>019f18c7-97df-7ce0-86d8-1bdca7170488</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Look up Monad Labs and their crypto. Highly anyicipated but having a rough time although I suppose all
                crypto is right now. Why are they having a hard time? What’s the analysis or what are the objective things
                that have actually happened or not happened for them?
            </Paragraph>
        </Message>
        <Message
            at="2026-06-30T13:46:10.532389Z"
        >
            <Origin>019f18c7-97e0-7a7b-9a92-57d4b7938d40</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched the web for “Monad Labs MON token launch”</Action>
            <Paragraph>
                Let me get the more recent post-launch picture, since launch was late November and we're now end of June.
            </Paragraph>
            <Action>Searched the web for “Monad MON token price activity TVL since launch 2026”</Action>
            <Paragraph>
                Short version: Monad's problems are mostly self-inflicted tokenomics and a glaring usage-vs-valuation gap,
                layered on top of a genuinely bad crypto tape. Let me separate what's idiosyncratic from what's macro,
                because the two get blended in the coverage.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    What actually happened.
                </Word> Monad Labs (now renamed Category Labs) raised ~$225M Series A led by Paradigm in April 2024 at a $3B
                valuation. Mainnet went live Nov 24, 2025, with the MON token sold via Coinbase's first-ever ICO platform at
                $0.025, raising ~$269M from ~85,820 participants. The launch itself was the first soft signal: unlike
                fast-selling launches such as Plasma, MON's public sale took significantly longer to clear, hinting at
                weaker investor appetite, and it traded below its sale price almost immediately. It hit an ATH of ~$0.0488
                two days post-launch (FDV ~$4.7B), then bled to a Feb low of ~$0.0162, and sits around $0.019 now — down
                roughly 60% from peak.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The core objective critique
                </Word> is the divergence between capital and usage. TVL has grown impressively — past $400M within six
                months, fastest recent L1 to $300M, with Uniswap, Curve, Morpho, and institutional partners (NYSE,
                Securitize, Mu Digital) deployed. But on-chain fee generation averages under $3,000 per day, meaning
                hundreds of millions in TVL sit on a chain producing low-six-figure annualized revenue — one of the worst
                fee-to-TVL ratios of any chain with real TVL. The network runs at roughly 0.07% of its 10,000 TPS capacity.
                The honest read: this is mercenary capital chasing token incentives, not organic demand. That's the thing
                that actually hasn't happened — real usage to justify the throughput thesis.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The tokenomics added a structural overhang.
                </Word> 27% to the team, 19.7% to investors, 4% to the Labs Treasury, 38.5% to ecosystem — insiders hold
                ~42%, which the market read as high. Only ~10.8% was circulating at launch, with more than 50% locked and
                major unlocks beginning in late 2026 (one-year cliff, then the team/investor cliff dumps simultaneously),
                plus ~2B MON/year of staking inflation. So there's a known forward supply wall everyone is pricing against.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Macro vs. idiosyncratic.
                </Word> You're right that all crypto is rough, but Monad is underperforming the field — down ~11% in a
                recent 7-day window while the broad market was down ~5%. So the macro is real but it's not the explanation;
                it's the backdrop that makes a weak-demand, high-insider, low-usage launch look even worse. The bull case
                isn't empty — fast TVL ramp and credible institutional integrations are real — but the bear case is concrete
                and measurable, while the bull case still rests on "the usage will come." That asymmetry is why it's having
                a hard time.
            </Paragraph>
            <Paragraph>
                Want me to pull the actual fee-to-TVL comparison against Solana/Base/other parallel-EVM peers? That's the
                number that would either confirm or soften the "mercenary capital" read.
            </Paragraph>
        </Message>
        <Message
            at="2026-06-30T13:52:51.049657Z"
        >
            <Origin>019f18ce-5b51-72fd-ace3-7e213d5881d4</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Yeah, sure do a little bit more analysis. What about the team says or anything connected to the road map?
            </Paragraph>
        </Message>
        <Message
            at="2026-06-30T13:54:01.707570Z"
        >
            <Origin>019f18ce-5b51-7b72-9c8d-0deb1754a44e</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched the web for “Monad roadmap 2026 Keone Hon team response MIP-12 throughput”</Action>
            <Paragraph>
                Let me grab the peer comparison numbers I offered, so the fee-to-TVL critique has something to sit against.
            </Paragraph>
            <Action>Searched the web for “Solana Base daily fees revenue June 2026 DefiLlama chain comparison”</Action>
            <Paragraph>Here's the peer comparison first, because it sharpens everything else.</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Fee-to-TVL, in context.
                </Word> Solana currently runs roughly $2.2B in annualized chain fees against ~$5.5B TVL. Base sits around
                $750M annualized fees. Monad's &lt;$3K/day works out to roughly ~$1M annualized against ~$400M TVL. So on
                fees-per-dollar-of-TVL, Monad is something like two orders of magnitude below Solana. That's the empirical
                backbone of the "mercenary capital" read — it's not a vibe, it's a ratio. The compositional point reinforces
                it: roughly 90% of TVL sits in established protocols that simply deployed existing code on Monad, not native
                applications built specifically for the network — 78 of 304 listed protocols are unique to Monad. So the
                ecosystem today is largely a port of Ethereum DeFi, not a native one. That's EVM compatibility working as
                designed, but it's also why there's capital without much activity.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The team and what they're actually saying.
                </Word> Founders are Keone Hon, James Hunsaker, and Eunice Giarta — all ex-Jump Trading. Worth noting their
                stated philosophy, because it's a tell: Hunsaker emphasizes that latency and economic incentives are the
                genuine bottlenecks, not raw transaction throughput. That's a sophisticated position, but it sits awkwardly
                against a network running at a fraction of a percent of capacity — the bottleneck they identified isn't the
                one currently binding.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The roadmap is almost entirely supply-side.
                </Word> What they've actually shipped or proposed since launch:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        RaptorCast
                    </Word> (Feb 2026) — a new block-propagation protocol for throughput/decentralization.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        MIP-12
                    </Word> (June 2026, discussion phase) — cut the consensus cycle 400ms→300ms for faster finality, but
                    note the tradeoff: it also lowers the per-block transaction limit from 5,000 to 3,750 and the block gas
                    limit from 200M to 150M. Faster, smaller blocks.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Institutional/RWA partnerships
                    </Word> — NYSE/Securitize for tokenized securities, Mu Digital tokenizing Asian credit via Pendle,
                    FalconX's tokenized credit facility, a $100M USD1 liquidity program.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        AI Blueprint
                    </Word> and ecosystem incentive/launchpool programs.
                </Line>
            </Paragraph>
            <Paragraph>
                Notice the pattern: make the chain faster, subsidize teams, sign institutional logos, run more incentive
                programs. Every one of those is a supply-side or distribution lever. None of them is a <Word>
                    <Emphasis />
                    demand
                </Word> proof point. The central critique — near-zero organic fees — doesn't have a roadmap answer; it has
                partnership announcements standing in for one. That's the honest read of the team's posture: they're betting
                the RWA/institutional rail becomes the demand, and that's still a bet, not a result.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The fair counterweight.
                </Word> The ICO was actually ~1.43x oversubscribed with ~$82M excess demand, so "no demand" overstates it —
                the weakness was relative to instant-sellout launches like Plasma, not absolute. And the RWA bet is a
                genuinely <Word>
                    <Emphasis />
                    different
                </Word> thesis than retail DeFi throughput; if tokenized securities/credit volume lands on Monad, low retail
                fees today wouldn't be the relevant metric. The bear case (Arthur Hayes flipped from buyer to bear, calling
                it a high-FDV/low-float structural-sell-pressure asset) is concrete and near-term; the bull case is real but
                back-loaded and contingent.
            </Paragraph>
            <Paragraph>
                One research-hygiene flag for you: there's a separate gaming token also tickered MON (MON Protocol /
                Pixelmon) that pollutes searches — a few "team voluntarily extended vesting" items floating around are about
                <Word>
                    <Emphasis />
                    that
                </Word> project, not Category Labs. I kept those out of the above.
            </Paragraph>
            <Paragraph>
                The thing I'd actually watch to settle the question: whether the November 2026 unlock cliff arrives before
                or after fee revenue inflects. If fees are still flat into that unlock, the supply-side roadmap will have
                lost the race to the demand question. Want me to map the 2026 unlock schedule against the fee trend so you
                have the timing explicit?
            </Paragraph>
        </Message>
        <Message
            at="2026-06-30T14:07:28.428207Z"
        >
            <Origin>019f18db-bf94-727b-a9b6-05479610d60b</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Well, the idea is to move Ethereum onto a chain that can scale right? It’s the problem that Ethereum didn’t
                need to scale maybe? Whatever is working on it is working on it and it doesn’t have enough to need the
                scale. They’re promising so people aren’t moving.
            </Paragraph>
        </Message>
        <Message
            at="2026-06-30T14:08:22.445662Z"
        >
            <Origin>019f18db-bf94-749b-9f48-22852f958c3a</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                That's the right shape of the argument, and I think it's mostly correct — but let me sharpen it, because the
                precise version is a little different from "Ethereum didn't need to scale," and the difference matters.
            </Paragraph>
            <Paragraph>
                Ethereum <Word>
                    <Emphasis />
                    did
                </Word> have a real scaling problem — 2021 was genuinely painful, $50 swaps, congestion pricing people out.
                The demand was real. The thing your argument should hinge on is what happened to that demand in the years
                between "Ethereum is too expensive" and Monad shipping in late 2025: it got <Word>
                    <Emphasis />
                    routed
                </Word>, not left unserved. Rollups absorbed most of it — Base, Arbitrum, Optimism gave you cheap EVM with
                Ethereum security, and Base alone now does ~$750M in annualized fees, which is real activity, not parked
                capital. Solana absorbed the rest — the high-frequency retail and memecoin flow that literally couldn't
                exist at L1 prices. So by the time Monad arrives, it isn't competing against expensive Ethereum L1. It's
                competing against already-cheap Base and already-fast Solana. The arbitrage it was architected to capture
                had already been captured by the time it opened.
            </Paragraph>
            <Paragraph>
                That reframes your point into something stronger than "Ethereum didn't need to scale." It's: the scaling
                demand was real, but it was met elsewhere first, and a new L1 is the wrong instrument to capture demand
                that's already been routed onto rails people are happy with. Switching costs are real; you don't move a
                working Uniswap deployment and its liquidity to a new chain because it's 3x faster when "fast enough and
                cheap enough" already exists where the liquidity is. The near-zero fees are the empirical confirmation of
                exactly your intuition — if there were dammed-up demand, it would rush to the cheapest fast venue, and it
                isn't.
            </Paragraph>
            <Paragraph>
                Here's the frame I'd actually use: there's a difference between <Word>
                    <Emphasis />
                    relieving a binding constraint
                </Word> and <Word>
                    <Emphasis />
                    offering a latent capability
                </Word>. Relieving a constraint creates strong product motion — people move to escape pain, fast, the way
                they fled Ethereum L1 to L2s. Offering a latent capability creates weak motion — "you could now do new
                things" doesn't move anyone who wasn't already trying to do those things. Monad is selling the second kind.
                And the second kind only works if the new capability induces a genuinely new category of activity that
                couldn't exist before. That's the whole bet.
            </Paragraph>
            <Paragraph>
                The one place I'd push back on a too-clean version of your point: induced demand isn't mythical. Solana is
                the existence proof — a huge fraction of its activity is stuff that simply could not have run at Ethereum
                fees, so capacity did manufacture a new category. So "build it and they won't come" isn't a law; it's the
                base rate, with at least one large exception. The question for Monad is whether it can manufacture or
                attract its <Word>
                    <Emphasis />
                    own
                </Word> native category rather than just being a faster place to run the same Ethereum apps. So far the
                evidence says no — 78 native protocols, fees near zero, mostly ported DeFi.
            </Paragraph>
            <Paragraph>
                And notice the RWA/institutional pivot in that light: NYSE, Securitize, tokenized credit. That's the team
                implicitly conceding your exact point. Retail EVM demand is already served by L2s, so they're hunting for
                demand that isn't on-chain <Word>
                    <Emphasis />
                    at all
                </Word> yet — TradFi assets — which is the one pool a new high-performance chain could plausibly win because
                nobody's incumbent there. Whether that materializes is open, and it's slow, institutional, and not something
                you can incentivize into existence with launchpools. But it's the only version of the thesis that survives
                your critique, which is probably why they've leaned into it. The promise hasn't moved people because, for
                the demand that exists today, there's nothing to move <Word>
                    <Emphasis />
                    toward
                </Word> that they don't already have.
            </Paragraph>
        </Message>
    </Chapter>
);
