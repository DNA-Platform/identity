import { Bold, Chapter, Date, Emphasis, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Action, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[11 May 2026](2026-05-11)</Date>
        </Dated>
        <Title>[[ Conversation ]]</Title>
        <Message
            at="2026-05-11T16:50:08.336276Z"
        >
            <Origin>019e17f2-0a2d-7d1f-9016-4022d9f49d71</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Wise launched in Anerica today. It’s not new because it had an ADR but it just launched an America so why
                don’t you look at the company and it’s fundamentals and the ADR and wherever that was listed and see what
                people are saying about the US issue and give me a perspective on whether or not we should expect anything
                different because it’s listed in the US
            </Paragraph>
        </Message>
        <Message
            at="2026-05-11T16:50:35.573001Z"
        >
            <Origin>019e17f2-0a2d-736a-abaf-579cb0f37336</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched the web for “Wise US listing launch May 2026”</Action>
            <Action>Searched the web for “Wise dual class share structure vote controversy Käärmann”</Action>
            <Action>Searched the web for “Wise WSE Nasdaq trading first day price premium discount LSE WISE”</Action>
            <Paragraph>
                Let me clarify one thing before I write this up — to make sure I'm answering the right question.
            </Paragraph>
            <Action>Used ask user input v0</Action>
        </Message>
        <Message
            at="2026-05-11T16:52:37.183996Z"
        >
            <Origin>019e17f4-503b-771c-9c96-de37e74292b7</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Q: Quick framing check — what are you actually trying to evaluate? A: Just give me everything, I'll
                triangulate
            </Paragraph>
        </Message>
        <Message
            at="2026-05-11T16:54:10.708493Z"
        >
            <Origin>019e17f4-503c-7e5e-b8b9-3eb2301e43ef</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                One framing correction up front since it matters for everything else: Wise didn't have a US ADR before
                today. What they had was a direct LSE listing (ticker WISE) of the underlying UK plc shares since their 2021
                IPO. Today's Nasdaq listing (WSE) is a direct dual listing of those same shares — not a depository receipt
                overlay. The shares are fully fungible across both venues, and as of last summer's EGM they actually moved
                their <Word>
                    <Emphasis />
                    primary
                </Word> listing to Nasdaq, with London now the secondary.
            </Paragraph>
            <Paragraph>That distinction shapes what can and cannot be different about the US listing.</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    What actually changes
                </Word>
            </Paragraph>
            <Paragraph>
                The shares are the same instrument, so any persistent gap between WSE and WISE gets arbitraged out by
                market-makers moving shares between depositories. Intraday spreads will be basis points within a week. There
                is no separate WSE valuation — both lines reprice together. This is closer to Shopify (TSX/NYSE) than to a
                China A/H situation.
            </Paragraph>
            <Paragraph>What does change:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Emphasis />
                        Marginal buyer.
                    </Word> US institutional flow, US sell-side coverage, US retail brokerage access. The thesis is that the
                    US comp set — Visa, Mastercard, Adyen, Block, PayPal — anchors payments-infrastructure multiples higher
                    than London ever did.
                </Line>
                <Line>
                    <Word>
                        <Emphasis />
                        Reporting.
                    </Word> Switched to USD / US GAAP for FY26. Net interest income and SBC will look subtly different.
                </Line>
                <Line>
                    <Word>
                        <Emphasis />
                        Index eligibility.
                    </Word> Russell 1000/3000 inclusion is plausible since Russell takes foreign private issuers if float
                    and size qualify. S&amp;P 500 is essentially off the table — UK domicile disqualifies them.
                </Line>
                <Line>
                    <Word>
                        <Emphasis />
                        Options depth.
                    </Word> US listed options will build out materially. Real hedging and structured-flow channels open up.
                </Line>
                <Line>
                    <Word>
                        <Emphasis />
                        OwnWise.
                    </Word> The customer-shareholder loyalty program announced today is a flywheel that converts users into
                    holders. Small in dollar terms but structurally interesting as a retention/CAC mechanism.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    What doesn't change
                </Word>
            </Paragraph>
            <Paragraph>
                The business itself. Same regulatory footprint, same FX exposures, same take rate dynamics, same competitive
                set. This is a capital-markets event, not an operational one.
            </Paragraph>
            <Paragraph>
                And critically — the supervoting structure didn't just survive the move, it got <Word>
                    <Emphasis />
                    entrenched
                </Word> by it. The July 2025 EGM bundled the relisting authorization with a 10-year extension of the Class B
                9:1 supervoting to 2036. Glass Lewis and PIRC opposed; co-founder Hinrikus publicly called for separate
                votes and was ignored; Andreessen Horowitz backed it; it passed at 75%+. Käärmann holds ~18% economically
                but his vote is contractually capped at one share below 50% of total exercisable votes.
            </Paragraph>
            <Paragraph>
                The substantive consequence: hostile acquisition is structurally impossible until 2036 absent Käärmann's
                cooperation. Activist pressure on take rate ("raise fees, expand margin") or capital return ("pay a
                dividend") has no governance lever. That's a bull case if you believe in the founder's playbook (compounding
                low-fee infrastructure for a decade) and a bear case if you wanted takeover optionality.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Fundamentals (FY26 ended March 31, 2026)
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Cross-border volume $243B, +31% YoY (accelerating)</Line>
                <Line>Cross-border revenue $1.3B at ~0.52% average take rate</Line>
                <Line>Card &amp; other revenue $0.6B on $44B card spend (~1.4% take, mostly interchange)</Line>
                <Line>Transaction revenue $1.9B (+22%)</Line>
                <Line>
                    Net interest on customer balances: $0.6B ($0.8B income − $0.2B expense) on $39B customer holdings
                </Line>
                <Line>Net revenue $2.5B (+19%)</Line>
                <Line>PBT margin at top of 13–16% guidance, so ~$400M</Line>
            </Paragraph>
            <Paragraph>
                Structural read: ~76% of net revenue is transactional (volume × take), ~24% is rate-sensitive spread on the
                $39B float. The float economics are real — they hold customer money for free, deploy it in safe assets at
                policy rates — but it's a rate beta you don't control. In a sustained cutting cycle the NII line compresses
                100–200bps of yield, and that flows straight to PBT because there's no offsetting cost.
            </Paragraph>
            <Paragraph>
                At today's $15.96 open and ~1.22B total shares outstanding (1.02B Class A + 204M Class B), market cap is
                roughly $19.5B → ~7.8x trailing net revenue, ~50x trailing PBT. The comp-set shift is already substantially
                priced in.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    What I'd actually expect different
                </Word>
            </Paragraph>
            <Paragraph>
                A higher steady-state multiple, but globally — both lines reprice together. Better liquidity and narrower
                spreads. Russell passive flows over the next quarter or two. Different framing from US analysts (tech
                infrastructure rather than UK payments). No change to governance, no change to fundamentals, no change to
                fee dynamics.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Where I'd push back on the headline framing
                </Word>
            </Paragraph>
            <Paragraph>
                The press is calling this a referendum on London as a venue ("London gets the listing, New York gets the
                logic" — European Business Magazine). That's overstated. The supervoting bundle makes it obvious that Wise
                specifically wanted to escape <Word>
                    <Emphasis />
                    LSE governance standards
                </Word>, not LSE valuations. The UK has been tightening listing rules on dual-class shares; the US,
                post-Meta/Alphabet/Snap, has normalized them. Käärmann moved to the venue where his governance structure is
                legally and culturally compatible. The "deeper capital pool" framing is the press-release version of that.
            </Paragraph>
            <Paragraph>
                The real question isn't "does the US listing change anything." It doesn't, fundamentally. It's whether Wise
                compounds at 20%+ net revenue growth for another 5–10 years with the founder controlling fee and capital
                policy, and whether ~50x PBT compensates you for rate-beta on a quarter of net revenue plus concentration in
                a single founder-controlled fintech. The US listing only changes who's setting that price each morning.
            </Paragraph>
        </Message>
        <Message
            at="2026-05-11T17:08:50.608159Z"
        >
            <Origin>019e1803-2a48-75f9-bd07-f6183b2ffc87</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                OK, let’s drill into that for a second because my friend John believes that he owned an ADR and is wondering
                if it’s going to be listed. He might be confused about what an ADR is. He uses Interactive Brokers so he
                might actually just be able to buy something on the London stock exchange just for completeness there really
                has been nothing listed on the US stock exchange that you could use to buy the Wise on the London stock
                exchange? And how do you have a dual listing? Is that just a thing that exists now? If it does, why do ADR’s
                need to still exist or do they exist when the company that provides the proxy isn’t the company that issues
                the stock?
            </Paragraph>
        </Message>
        <Message
            at="2026-05-11T17:10:47.612299Z"
        >
            <Origin>019e1803-2a48-7233-8214-3db9828f7a2f</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched the web for “Wise plc unsponsored ADR OTC ticker before Nasdaq listing”</Action>
            <Action>Searched the web for “Wise WIZEY ADR termination Nasdaq listing conversion”</Action>
            <Action>Searched the web for “"WIZEY" Wise ADR delisted converted Nasdaq 2026”</Action>
            <Action>Searched the web for “Wise Class A ordinary shares Nasdaq direct listing DTC eligible no ADR”</Action>
            <Action>Searched the web for “Wise Nasdaq listing ADR upgrade Level 2 F-6 depositary”</Action>
            <Paragraph>
                John isn't confused about whether he owned something — he probably did, but he might be confused about what
                to call it.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Yes, there was a Wise ADR on US markets before today.
                </Word> Wise established a sponsored Level 1 ADR program in September 2021, two months after the LSE IPO. It
                traded OTC under ticker <Word>
                    <Bold />
                    WIZEY
                </Word>, ratio 1:1 with the underlying Class A ordinary share. So if John bought "Wise" through a US broker
                before today, that's almost certainly what he held — a real, sponsored, US-dollar-denominated instrument
                representing one Wise share, just trading on pink sheets rather than a major exchange.
            </Paragraph>
            <Paragraph>
                What happens to WIZEY now is the interesting mechanical question. When a Level 1 sponsored ADR gets upgraded
                to a Level 2 (exchange-listed, no new capital raise) or Level 3 (with public offering) — which is
                essentially what today represents — the depositary bank typically handles the conversion seamlessly. WIZEY
                holders' positions get re-tickered to WSE on Nasdaq, same 1:1 ratio. John should see this in his account
                either already or within the next few settlement cycles. He may not even need to do anything; the broker
                handles it on the back end. Worth him just checking his Nasdaq positions and seeing if WSE has appeared.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    On IBKR specifically — yes, John can just buy WISE.L directly.
                </Word> IBKR is one of the most direct-LSE-access-friendly retail brokers in the US. He can hold GBP cash,
                place orders on the LSE order book, settle in CREST, all from his US-based account. There's no need to use
                the US listing if he prefers the London one — they're economically the same exposure with a slight FX cost
                on entry and exit. The only operational reason to prefer WSE over WISE.L through IBKR is if he wants USD
                denomination and US tax reporting simplicity (no PFIC concern since Wise isn't a passive foreign investment,
                but 1099 vs. foreign reporting differs slightly).
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Now the structural question — what a "dual listing" actually is.
                </Word>
            </Paragraph>
            <Paragraph>
                Dual listings are a longstanding category, not a new thing. But there are <Word>
                    <Emphasis />
                    several distinct mechanisms
                </Word> that all get lumped under that term, and they work differently:
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Emphasis />
                        True fungible cross-listing
                    </Word> — same security registered in two clearing systems (Shopify on NYSE+TSX is the cleanest
                    example). Shares move between depositories via standardized cross-border transfers.
                </Line>
                <Line>
                    <Word>
                        <Emphasis />
                        Dual-Listed Companies (DLCs)
                    </Word> — two separately listed legal entities tied together by contractual equalization agreements so
                    shareholders of each get the same economics from one combined business. Rio Tinto, BHP historically,
                    Unilever and Shell pre-unification. Complex, mostly being unwound by the companies that had them.
                </Line>
                <Line>
                    <Word>
                        <Emphasis />
                        ADR-overlay listing
                    </Word> — the home country trades ordinary shares, the US exchange trades ADRs that are fungible to the
                    underlying through the depositary's deposit/withdrawal mechanism. This is how virtually every
                    non-Canadian foreign company on a US exchange works: Toyota, Sony, ARM, Alibaba, Diageo, Shell
                    post-unification, etc.
                </Line>
                <Line>
                    <Word>
                        <Emphasis />
                        Direct foreign share listing on US exchange
                    </Word> — genuinely rare. NYSE's Global Share program. Historically used by Canadian issuers (no ADR
                    needed), Deutsche Bank, UBS, and a few others. Almost never used by UK plcs.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Wise is almost certainly mechanism #3 — an ADR-overlay.
                </Word> WSE on Nasdaq is technically an upgraded sponsored ADR (Level 2 or 3), and WISE on LSE is the
                underlying Class A ordinary share. They're economically equivalent and arbitraged within basis points by
                market-makers who can deposit/withdraw at the depositary bank to capture any spread. Worth caveating that I
                haven't pulled the F-6 filing to confirm whether they went direct-listing-of-ordinaries or ADR — UK plc
                direct-listing of ordinaries on Nasdaq would be unusual but not impossible. The economic answer is the same
                either way; the legal-wrapper answer would only matter for tax/voting nuance.
            </Paragraph>
            <Paragraph>
                So when I said earlier "the shares are fungible," that's economically true. The operational reality is that
                there's an ADR wrapper sitting between the WSE ticker and the underlying ordinary share — but
                creation/redemption keeps prices tied tightly.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Why ADRs still exist if dual listings exist
                </Word> — because they're not separate categories. Most "dual listings" of foreign companies on US exchanges
                <Word>
                    <Emphasis />
                    are
                </Word> ADRs. The ADR is the dual-listing mechanism for non-Canadian foreign issuers. The terminology people
                use is sloppy:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>"Dual listing" describes the market structure (security tradable in two venues).</Line>
                <Line>
                    "ADR" describes the legal/mechanical wrapper that enables that structure for foreign-domiciled issuers.
                </Line>
            </Paragraph>
            <Paragraph>
                The reason ADRs persist as a wrapper rather than direct foreign-share listings is cross-border clearing
                friction. US clearing runs through DTC; UK runs through CREST. Linking them directly for fungible ordinary
                shares requires a Global Share program-style arrangement that most foreign jurisdictions' market
                infrastructure isn't set up for. The ADR is the bridge — it lets the underlying shares stay in the home
                clearing system while a US bank issues a parallel certificate that trades in US clearing.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Your last question — do ADRs exist when the proxy provider isn't the issuer?
                </Word>
            </Paragraph>
            <Paragraph>
                Yes, exactly that case. Those are <Word>
                    <Bold />
                    unsponsored ADRs
                </Word>. Any US depositary bank (BNY Mellon, Citi, JPMorgan, Deutsche Bank are the four big ones) can
                establish an ADR facility for a foreign company without the company's permission or involvement, provided
                the underlying shares are freely tradable in the home market. The bank profits from custody fees and
                conversion spreads. The issuer has no agreement, no obligations, sometimes no awareness. These trade OTC,
                are usually thinly liquid, and from the issuer's perspective are slightly annoying — if the issuer later
                wants to do a sponsored program, SEC staff position is that the unsponsored facilities must be terminated
                first, which costs the issuer cancellation fees to the depositary banks.
            </Paragraph>
            <Paragraph>
                Wise's WIZEY was already sponsored (Level 1) from 2021 onward, so there was no unsponsored mess to clean up
                before today's upgrade.
            </Paragraph>
            <Paragraph>
                The clean way to think about it: ADR = "wrapper that lets a US bank issue a USD-denominated certificate
                representing foreign shares held in custody abroad." Sponsored vs unsponsored is whether the foreign company
                is in on the arrangement. Level 1/2/3 is where it trades (OTC / listed / listed-with-capital-raise). Wise
                has been on this ladder since 2021 and today climbed from Level 1 to Level 2 (or Level 3, depending on
                filing structure I haven't verified).
            </Paragraph>
            <Paragraph>
                So John didn't own nothing. He owned WIZEY, and as of this week or shortly after, he owns WSE. If he wants
                the cleaner version, he can just buy WISE.L through IBKR and skip the wrapper entirely.
            </Paragraph>
        </Message>
        <Message
            at="2026-05-11T17:15:54.588953Z"
        >
            <Origin>019e1809-a1ba-7167-9d55-3ed880545a45</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                So you were kinda wrong. There was an ADR. Perhaps you were more confused than him that sounds like it got
                upgraded to something else and that would happen. Today is a continuation of that?
            </Paragraph>
        </Message>
        <Message
            at="2026-05-11T17:16:22.310175Z"
        >
            <Origin>019e1809-a1ba-7806-b8bd-79db92d8d872</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                You're right, and I had it more wrong than John did. He knew he held an ADR. I told him there wasn't one.
                That was a flat error on my part — Wise has had a sponsored Level 1 ADR (WIZEY) trading OTC since September
                2021, and today is the upgrade of that program to a Level 2 (or 3) Nasdaq-listed ADR. Not a new instrument.
                A continuation.
            </Paragraph>
            <Paragraph>The cleaner timeline:</Paragraph>
            <Paragraph>
                <List />
                <Line>July 2021: LSE IPO of WISE Class A ordinary shares</Line>
                <Line>
                    Sept 2021: Sponsored Level 1 ADR program established with a depositary bank, WIZEY trading OTC, 1:1
                    ratio
                </Line>
                <Line>July 2025: EGM approves shift of primary listing to the US plus 10-year supervoting extension</Line>
                <Line>
                    May 11, 2026: ADR program upgrades to Level 2/3, now WSE on Nasdaq; primary listing flips to Nasdaq, LSE
                    becomes secondary; reporting switches to USD/US GAAP
                </Line>
            </Paragraph>
            <Paragraph>
                So this isn't a launch, it's the maturation step of a five-year path. Wise has been accessible to US
                investors continuously since 2021 — what changed today is the venue, the liquidity profile, and the
                regulatory/disclosure regime around it, not the existence of a USD-denominated instrument.
            </Paragraph>
            <Paragraph>
                That actually weakens part of my earlier framing. I leaned on a "marginal buyer" story — US institutional
                capital can now access the name, US sell-side covers it, etc. That's directionally right but I overstated
                the access change. US investors <Word>
                    <Emphasis />
                    could
                </Word> already buy WIZEY. The real upgrades are:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Emphasis />
                        OTC → Nasdaq
                    </Word>: institutional mandates that exclude OTC-traded names can now hold it
                </Line>
                <Line>
                    <Word>
                        <Emphasis />
                        Thin OTC liquidity → exchange-quality liquidity
                    </Word>: spreads compress materially
                </Line>
                <Line>
                    <Word>
                        <Emphasis />
                        No options → listed options
                    </Word>: hedging and structured flow becomes possible
                </Line>
                <Line>
                    <Word>
                        <Emphasis />
                        No analyst coverage → US sell-side initiation
                    </Word>: changes the multiple-anchoring conversation
                </Line>
                <Line>
                    <Word>
                        <Emphasis />
                        No index eligibility → Russell-eligible
                    </Word>: passive flow channel opens
                </Line>
                <Line>
                    <Word>
                        <Emphasis />
                        Form 20-F-style minimal disclosure → full US GAAP reporting
                    </Word>: data quality for US allocators improves
                </Line>
            </Paragraph>
            <Paragraph>
                So the marginal-buyer thesis is real but it's about <Word>
                    <Emphasis />
                    which
                </Word> US buyers can hold it and at <Word>
                    <Emphasis />
                    what size
                </Word>, not about US access existing at all. The continuation framing you're proposing is the right
                structural framing. Today is the step that converts a gated, illiquid, retail-curiosity instrument into one
                that can sit in an institutional portfolio.
            </Paragraph>
            <Paragraph>
                Apologies for the confusion in the earlier response — that was me overconfidently asserting a structural
                claim ("direct listing of underlying shares") without checking it. Should have caveated and verified. Noted.
            </Paragraph>
        </Message>
        <Message
            at="2026-05-12T11:02:31.354189Z"
        >
            <Origin>019e1bda-2932-7e9c-ad13-9ce4bdf3b5cd</Origin>
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
            <Origin>019e1bda-2932-7cb7-a340-be8123471381</Origin>
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
            <Origin>019e1c9d-6448-786d-a6e0-6ec93216c78f</Origin>
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
            <Origin>019e1c9d-6448-76ca-855f-98a61002e5f3</Origin>
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
