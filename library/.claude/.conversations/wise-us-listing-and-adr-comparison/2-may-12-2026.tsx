import { Bold, Chapter, Date, Emphasis, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Action } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[12 May 2026](2026-05-12)</Date>
        </Dated>
        <Title>[[ 12 May 2026 ]]</Title>
        <Message
            at="2026-05-12T11:02:31.354189Z"
        >
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Okay so lets talk about Wise performance. I like them. I think they have a moat. Don’t know if over or
                underpriced. Seems at moment sensitive to stablecoin adoption because they have no plan to use it afaik.
                Thoughts? Critique all, answer questions with research
            </Paragraph>
        </Message>
        <Message
            at="2026-05-12T11:04:37.725262Z"
        >
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched the web for “Wise stablecoin strategy position cross-border payments Käärmann”</Action>
            <Action>Searched the web for “Wise Käärmann stablecoin 2026 strategy USDC Stripe Bridge competitor”</Action>
            <Action>Searched the web for “"Wise" stablecoin 2026 Käärmann "no plan" OR "not needed" cross-border”</Action>
            <Paragraph>Critiquing each claim in turn, then putting it together.</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    "I think they have a moat" — yes, but precisely characterize it.
                </Word>
            </Paragraph>
            <Paragraph>
                The moat is real and it's a regulated-infrastructure moat, not a tech moat. Concretely: direct membership in
                local clearing systems (SEPA, Faster Payments UK, BACS, US ACH/FedWire access, Payments Canada as of January
                2026), money transmitter or EMI licenses across ~70 jurisdictions, multi-currency accounts that function as
                <Word>
                    <Emphasis />
                    local
                </Word> accounts at the rail level (ABA routing, sort code, IBAN), and at $243B annual volume they can run
                net-FX inventory rather than pass through interbank spreads. The most underrated piece: ~70% of customer
                acquisition is word-of-mouth, which is the single strongest demonstration that the cost/UX delta is real
                enough to drive organic referral. Compare to Remitly burning marketing dollars for similar growth.
            </Paragraph>
            <Paragraph>
                The bounded part: the moat does not include a technology cost-structure advantage. Their 0.52% take rate is
                what regulated banking rails can support at scale. It is not what stablecoin rails can support at scale,
                which is closer to 5-15bps when you ignore on/off-ramp. So the moat protects them from another regulated
                competitor but does not protect them from a stack disruption.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    "They have no stablecoin plan AFAIK" — this is the part to recalibrate.
                </Word>
            </Paragraph>
            <Paragraph>
                Strictly speaking it's wrong, but it's directionally pointing at something real. Specifically:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    Käärmann's public position (2024, restated through 2025) is that stablecoins don't currently surpass
                    Wise's capabilities and they'd consider the technology when evidence supports it. Read: not a no, but a
                    "you go first."
                </Line>
                <Line>
                    They quietly began hiring for a digital assets product lead in late 2025 with the explicit brief of
                    building stablecoin-based wallet/payment products. That's the first concrete operational signal.
                </Line>
                <Line>
                    Brazil's central bank just (May 2 this year) banned eFX providers from using stablecoin/crypto
                    settlement for cross-border remittances, with Wise reportedly named among the companies affected —
                    implying Wise was already using stablecoin settlement in at least one corridor on the back end, though
                    they haven't publicly led with it.
                </Line>
            </Paragraph>
            <Paragraph>
                So the more accurate framing isn't "they have no plan." It's: <Word>
                    <Emphasis />
                    they have a back-end-quiet stablecoin posture and no front-end stablecoin product.
                </Word> They're using the tech where useful as a settlement primitive but they haven't built consumer or
                business products around it, and their CEO continues to publicly position stablecoins as not-yet-better.
                Which means: at the corporate narrative layer, they're vulnerable to a competitor that <Word>
                    <Emphasis />
                    leads
                </Word> with stablecoins.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Where the real stablecoin risk actually lives.
                </Word>
            </Paragraph>
            <Paragraph>
                Stablecoins are a substitute at the <Word>
                    <Emphasis />
                    settlement
                </Word> layer of the cross-border stack. They are not (yet) a substitute at the on-ramp, off-ramp, KYC, AML,
                multi-currency-account, debit card, or local-payout-rail layers — which is exactly what Wise spent 14 years
                building. So the simple "stablecoins kill Wise" framing is wrong.
            </Paragraph>
            <Paragraph>The realistic threat decomposition:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Emphasis />
                        Backend settlement substitution
                    </Word> — low risk. Wise can adopt stablecoin rails internally without changing what customers see,
                    capturing whatever cost savings exist. Banking rails are already cheap for Wise at scale, so the savings
                    are modest.
                </Line>
                <Line>
                    <Word>
                        <Emphasis />
                        B2B treasury
                    </Word> — medium-high risk. This is where BVNK ($10B annualized), Bridge (Stripe), Circle's CPN, and Arc
                    are competing directly with Wise Business, which is Wise's fastest-growing segment. Enterprise customers
                    are more sensitive to settlement speed and programmability than consumers. This is the corridor where
                    Wise's regulatory moat counts least and stablecoin programmability counts most.
                </Line>
                <Line>
                    <Word>
                        <Emphasis />
                        Vertical-integration distribution attack
                    </Word> — highest risk. Stripe+Bridge integrating cross-border payouts as a feature inside the Stripe
                    stack. Meta+Stripe putting USDC creator payouts in Facebook/Instagram. The point isn't that stablecoins
                    are cheaper; it's that Stripe-with-Bridge can offer Wise's product as one line item inside a payment
                    processor that already has distribution Wise doesn't have. Wise has to be the destination; Stripe has to
                    be the default.
                </Line>
            </Paragraph>
            <Paragraph>
                The strategic question is whether Wise's licenses + customer relationships + multi-currency accounts are
                enough of a stack to keep being the destination, or whether they get reduced to a UX wrapper around
                commoditized rails. Käärmann's bet appears to be the former.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Valuation — full, not crazy.
                </Word>
            </Paragraph>
            <Paragraph>
                At $15.96 opening × ~1.22B shares ≈ $19.5B market cap, against $2.5B trailing net revenue and ~$400M PBT,
                you're at ~7.8x trailing sales and ~49x trailing PBT, ~65x trailing earnings. Comps: Adyen ~50x
                earnings/~12x sales, Visa/MA 28-35x/17-18x, PayPal 12-15x/2-2.5x, Block ~25-30x/1.5x. Wise prices like the
                Adyen comp — top-end growth multiple inside the payments space.
            </Paragraph>
            <Paragraph>
                The implicit base case at this price: ~5 more years of 20%+ net revenue growth at stable margins. If that's
                correct you compound into ~$5B net revenue by FY29, and at 30x PBT and 20% margin that's ~$30B market cap,
                ~50% return over three years before any multiple expansion. If you also believe in 1-2x of US-listing
                multiple expansion (UK to US comp set repricing), that adds materially.
            </Paragraph>
            <Paragraph>
                The bear is straightforward: stablecoin stack disruption compresses take rate from 0.52% to 0.35%, growth
                slows from 20% to 12-15%, and multiple compresses to 25-30x PBT. That math cuts the stock in half.
            </Paragraph>
            <Paragraph>
                A non-obvious bullish element: the Käärmann supervoting lock to 2036 is actually <Word>
                    <Emphasis />
                    protective
                </Word> for the low-fee compounding thesis. Activist pressure to raise take rate or pay dividends would
                destroy the thing that makes Wise work (the word-of-mouth-driven 70% organic acquisition). The dual-class
                structure that everyone (correctly) flags as a governance red flag also happens to be the mechanism that
                keeps the management focused on the strategy that built the moat. You can dislike the governance and like
                the strategic insulation simultaneously.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Net read.
                </Word>
            </Paragraph>
            <Paragraph>
                You're right to like the company. The moat is real and underrated by people who confuse "thin margin" with
                "no moat." Your stablecoin concern is the right concern but slightly miscalibrated — the threat isn't "they
                don't use stablecoins" (they do, quietly), it's "their corporate narrative is defensive about stablecoins
                while Stripe is integrating distribution+settlement vertically." At 50x PBT you're not getting paid for that
                risk; you're paying for execution.
            </Paragraph>
            <Paragraph>
                If I had to summarize the position in one line: it's a quality compounder priced as a quality compounder.
                Not a fat pitch and not obviously mispriced. The catalysts to watch are (a) any concrete consumer-facing
                stablecoin product announcement, (b) Wise Business growth holding up against BVNK/Bridge/Stripe Treasury,
                and (c) take rate stabilization rather than continued compression. If those three trend right over the next
                two earnings cycles, the multiple holds. If any of them break, the multiple compresses fast.
            </Paragraph>
        </Message>
        <Message
            at="2026-05-12T14:35:46.229565Z"
        >
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Doesn’t sound like you’re very bullish on Wise. Though I wonder if it’s a good hedge on my Telegram and TON
                investment because I would imagine that if crypto payments and stable coin payments don’t become useful then
                doesn’t wise maintain its edge? Are you appropriately factoring in the difficulty of other competitors
                because it’s not like this is a new use case yet wise serves places that others just do not.
            </Paragraph>
        </Message>
        <Message
            at="2026-05-12T14:36:52.289122Z"
        >
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Both of those are good pushes. Let me engage with them seriously.</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    On the hedge logic:
                </Word>
            </Paragraph>
            <Paragraph>
                There's something real here but it's not as clean as it looks at first. The structural claim — Wise wins if
                crypto-native payments stall, TON wins if they take off — is <Word>
                    <Emphasis />
                    directionally
                </Word> right at the cross-border payments layer. Where it gets messy:
            </Paragraph>
            <Paragraph>
                TON isn't primarily a payments bet in your thesis. It's a liberation-infrastructure bet — compute, identity,
                storage, social distribution, <Word>
                    <Emphasis />
                    plus
                </Word> payments. So if stablecoins stall on regulated rails (Brazil banning eFX settlement is the freshest
                example), TON's payment layer takes some collateral damage even though the broader infrastructure thesis is
                mostly independent of that. The hedge correlation is on the payments component, which is one of several
                things TON has to be right about.
            </Paragraph>
            <Paragraph>
                Wise's downside also has multiple drivers, not just stablecoin disruption. Rate compression on NII, a US
                recession compressing remittance corridors, Stripe Treasury eating B2B share, or just multiple compression
                on growth fintechs are all paths to a lower Wise price that have nothing to do with TON's thesis being right
                or wrong. So Wise can go down for reasons that don't make TON go up.
            </Paragraph>
            <Paragraph>
                The cleanest framing: Wise and TON are <Word>
                    <Emphasis />
                    partially
                </Word> anti-correlated on the specific question of "will crypto-native rails take consumer cross-border
                share from regulated rails." On everything else, they trade independently. If you size Wise such that the
                residual non-stablecoin downside isn't bigger than the stablecoin-hedge benefit, it works. If you oversize
                it, you've added correlated fintech beta without much hedge.
            </Paragraph>
            <Paragraph>
                There's also a constructive scenario where both win: cross-border volumes grow fast enough (the $43T pool
                Käärmann keeps citing) that regulated and crypto-native rails both take share from legacy
                SWIFT/correspondent banking. That outcome is more likely than the zero-sum framing suggests, especially over
                a 5-year horizon.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    On the competitor-difficulty point — you're right and I underplayed it.
                </Word>
            </Paragraph>
            <Paragraph>
                This is actually the strongest part of the Wise thesis and I should have weighted it more heavily.
                Cross-border payments has been an obvious commercial opportunity for 30 years. The pool of capital and
                talent thrown at it is enormous. The actual outcomes:
            </Paragraph>
            <Paragraph>
                Western Union and MoneyGram are declining legacy. Xoom got absorbed into PayPal and underinvested. Revolut
                scaled in Europe but mostly as a neobank, not as a cross-border-payments specialist; their take rates aren't
                materially better than Wise's. Remitly scaled in specific remittance corridors but at much higher CAC and
                tighter margins. Ria/Ripple/Strike never reached consumer scale outside crypto-native users. Banks
                themselves dominate institutional flows but have visibly <Word>
                    <Emphasis />
                    failed
                </Word> to compete in consumer cross-border despite holding most of the regulatory and capital advantages a
                priori.
            </Paragraph>
            <Paragraph>
                What this tells you: the stack is genuinely hard to assemble. It's not one moat, it's five interlocking ones
                — clearing-system memberships that take years per jurisdiction, money-transmitter licenses across ~70
                markets, $39B of customer float to provision, FX netting infrastructure that only pays off at scale, and a
                brand trust built over a decade. Any one of those is buildable. The compound is what's hard, and Wise has
                spent 14 years compounding it.
            </Paragraph>
            <Paragraph>
                So when I said "the moat is real but bounded," I was right about the boundary (it doesn't protect against
                stack obsolescence) but I underweighted the <Word>
                    <Emphasis />
                    cost
                </Word> of the moat. The replication cost is roughly a decade and several billion dollars. That's a lot of
                asymmetric protection against any threat that tries to compete by replicating Wise rather than obsoleting
                it.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Where this lands me on net:
                </Word>
            </Paragraph>
            <Paragraph>
                The stablecoin threat is real but I should be precise about its shape. It's not "a Stripe-Bridge-style
                competitor builds a better Wise faster than Wise can defend." That's the replication scenario and the moat
                handles it well. It's "stablecoin rails commoditize the settlement layer of cross-border payments, and Wise
                has to figure out whether it's still the destination customer or just a wrapper around commoditized rails."
                That's the obsolescence scenario, which is harder to defend against but also slower-moving and currently
                only progressing in the B2B segment, not consumer.
            </Paragraph>
            <Paragraph>
                Updated read: probably more constructive than my prior response suggested. The moat is harder to build
                around than I implied, the use case has selected for Wise specifically over multiple decades of attempted
                competition, and the stablecoin threat — while real — is concentrated in B2B treasury rather than the full
                Wise stack. The Käärmann supervoting lock keeps the low-fee compounding strategy protected from activist
                pressure. At 50x PBT you're paying for execution, but execution risk on a 14-year-proven operator with
                structurally protected strategy is a different (lower) risk than execution risk on, say, a high-growth
                fintech still proving the model.
            </Paragraph>
            <Paragraph>
                As a hedge on your TON position: yes, with the caveat that the correlation isn't clean enough to size it as
                a pure pair. If you'd hold Wise on its own merits, sizing it knowing it has some negative correlation to the
                TON-payments-thesis specifically is a reasonable framing. If you're <Word>
                    <Emphasis />
                    only
                </Word> buying it for the hedge, you're probably better off with a smaller position and accepting the
                imperfect coverage.
            </Paragraph>
            <Paragraph>
                One thing worth watching specifically because it speaks to your thesis: if Wise quietly starts using
                stablecoins more aggressively on the back end (the Brazil incident suggests they already are in some
                corridors), that actually weakens the pure hedge logic — because then both bets are implicitly long
                crypto-native settlement, just at different layers of the stack. The cleanest hedge scenario is one where
                Wise stays narrative-defensive on stablecoins and the market punishes them for it while TON's adoption
                accelerates. That's the asymmetry you're actually buying.
            </Paragraph>
        </Message>
    </Chapter>
);
