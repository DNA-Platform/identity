import { Bold, Chapter, Emphasis, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { Message, Speaker } from '../../../.manual/.book';
import { Action, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Title>[[ Conversation ]]</Title>
        <Message
            at="2026-08-27T02:58:03.521336Z"
        >
            <Origin>01a04128-7051-76a5-9b51-ed5080d87ce3</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Travel arbitrage? Fun financial theory: opportunities for travel arbitrage should exist to offset cost of
                travel, but profitable barely or only if traveling anyways
            </Paragraph>
            <Paragraph>
                Suppose i am flying from Tblisi, layover in some european city like london to NY. And in 10 days the
                reverse. Look for evidence of the potential for travel arbitrage. It could be as simple as abaked good that
                I can deliver warm or duty free exports that I can buy or cuban cigars I can buy and bring to the country
                for up to a certain amount. But all of those are questionable unless there is a site that provides a clear
                buyer. Look for the best most bullet proof forms of travel arbitrage. We expect they would only help offset
                travel rather than be profitable
            </Paragraph>
        </Message>
        <Message
            at="2026-08-27T02:59:25.378720Z"
        >
            <Origin>01a04128-7052-75a5-99e6-8c191d8c06a8</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched the web for “Grabr traveler reward how much earn shopping requests”</Action>
            <Action>Searched the web for “Georgia customs duty free allowance air travel 500 GEL 30 kg”</Action>
            <Action>Searched the web for “Cuban cigars US import ban personal use 2026”</Action>
            <Action>Searched the web for “onboard courier freelance hand carry pay per trip time:matters”</Action>
            <Paragraph>
                The theory holds, and the evidence sorts neatly by who the buyer is. Ranked by bulletproofness:
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Tier 1 — no buyer needed (you're paid by the airline or the state)
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Emphasis />
                        UK261 delay/denied-boarding compensation.
                    </Word> Any flight departing the UK, any carrier: £520 per person if you arrive 3+ hours late on a
                    &gt;3,500 km leg. Both LHR→JFK and LHR→TBS qualify. Not controllable, but expected value is nonzero and
                    the payout is statutory — the closest thing to a free option you'll hold on this itinerary. Choose a
                    UK/EU carrier for the inbound legs too, so the arriving-into-London legs are also covered.
                </Line>
                <Line>
                    <Word>
                        <Emphasis />
                        Voluntary bump auctions
                    </Word> on the NY departure. US carriers routinely pay $500–$1,500+ in vouchers/cash for volunteers on
                    oversold flights; Delta agents have discretionary authority into the thousands. Only worth it if your
                    return date is soft.
                </Line>
                <Line>
                    <Word>
                        <Emphasis />
                        Your own consumption gap.
                    </Word> Anything you'd buy anyway — electronics at US retail (or zero-sales-tax if routed through
                    NH/Delaware/Oregon) vs Tbilisi retail. Georgia's duty-free personal allowance by air is 30 kg and GEL
                    3,000 once every 30 days, so a laptop and phone come in clean. This is arbitrage with yourself as
                    counterparty, which is why it's bulletproof.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Tier 2 — pre-committed buyer with escrow (this is what you asked for)
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Emphasis />
                        Grabr.
                    </Word> Shoppers post a link (Amazon/eBay), travelers bid; rewards typically run 15–20% of the item's
                    price, and payment is held in escrow and released when the item is in the shopper's hands. Their own
                    figure is ~$300 per trip from a handful of items. Buyer, price, and settlement are fixed before you buy
                    — the Cuban-cigar problem solved by design. Two caveats: the NY→Tbilisi lane is thin (the platform's
                    mass is LatAm/CIS), and there are App Store complaints about delayed payouts, so it's escrow with
                    counterparty risk on Grabr itself. Capital tie-up is yours, which means credit-card points on top.
                </Line>
                <Line>
                    <Word>
                        <Emphasis />
                        Onboard courier (OBC).
                    </Word> time:matters/airmates, Air Charter Service — freelance hand-carry of urgent B2B parts and
                    documents; they pay the flight plus a fee. US routes are among the most-served, and requirements are
                    just frequent-flyer experience, a clean record, and a valid passport. The catch is inversion: OBC pays
                    <Word>
                        <Emphasis />
                        your
                    </Word> whole flight but on <Word>
                        <Emphasis />
                        their
                    </Word> schedule and route, so it fits the "traveling anyway" clause only if you register in advance and
                    a LHR→JFK mission happens to match your window. Registering is free and the option is real.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Tier 3 — liquid marketplace, no pre-commitment
                </Word> StockX/eBay for region-gated items (US-only drops, LEGO retirements) going east; mymarket.ge for
                iPhones/MacBooks going east. Real spread, real venue, but you carry inventory risk and Georgian resale is
                small-market.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Dead on arrival
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    Cuban cigars into the US: since September 24, 2020, travelers cannot bring Cuban tobacco or alcohol into
                    the US even for personal use, from any third country. Into Georgia the allowance is 50 cigars, but
                    Habanos pricing is set by distributor and Tbilisi isn't cheaper than Heathrow duty-free, so no spread.
                </Line>
                <Line>
                    Warm baked goods / Georgian food to the Brighton Beach diaspora: legal in the US (no meat; hard cheese
                    OK) and there's a real buyer population, but no venue with escrow — Facebook-group counterparties, which
                    is exactly the "questionable" bucket.
                </Line>
            </Paragraph>
            <Paragraph>
                Net: the round trip's expected offset from Tier 1 + Grabr is plausibly a few hundred dollars against
                ~$1,500–2,500 in airfare, which matches your prior — offset, not profit. The one thing that breaks the "only
                if traveling anyway" constraint is OBC, and it does so by taking control of the itinerary.
            </Paragraph>
        </Message>
        <Message
            at="2026-08-27T02:59:55.295900Z"
        >
            <Origin>01a0412a-26f1-7100-99c4-4d69ce924e91</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Why don’t you specifically look for solutions to this problem in your research rather than invent them.
            </Paragraph>
        </Message>
        <Message
            at="2026-08-27T03:00:35.185447Z"
        >
            <Origin>01a0412a-26f1-7ffc-ba54-59dbdc74befd</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Fair point — I built the taxonomy from priors and then searched to verify pieces of it. Let me search for
                the problem as others have already framed and solved it.
            </Paragraph>
            <Action>Searched the web for “travel arbitrage make money traveling luggage space marketplace”</Action>
            <Action>
                Searched the web for “reddit how to make money on a trip delivering items Grabr PiggyBee Bring4You
                experiences”
            </Action>
            <Action>Searched the web for “передать посылку с оказией Тбилиси Нью-Йорк попутчик”</Action>
            <Action>Searched the web for “Grabr Tbilisi Georgia deliveries”</Action>
            <Paragraph>Here's what searching for the problem as others frame it turns up.</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The term "travel arbitrage" mostly means something else.
                </Word> In the travel-hacking world it refers to fare arbitrage — hidden-city ticketing, routing via
                Istanbul or Cairo to cut a $3–4k transatlantic fare to ~$2k, exploiting carriers whose pricing reflects
                currency devaluation — i.e. reducing the cost side, not generating income. Nobody prominent uses the term
                for what you're describing.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The income side has a small, well-defined ecosystem, and its history is the evidence.
                </Word> The luggage-space marketplaces that launched 2015–2017 mostly died:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    Airmule paid ~$150 per bag, focused on US–China, raised $1.25M, and ceased operations in February 2022.
                </Line>
                <Line>Ouibring, PiggyBee (tip-based, no escrow) — dormant or defunct.</Line>
                <Line>
                    Pabbler survives but requires you to drop the items at DHL on arrival and enter the tracking number — so
                    no in-person buyer; you're a cross-border leg for a shipper.
                </Line>
                <Line>
                    Grabr is the one survivor with escrow, and its own data says the lane matters: the model works where
                    import markups exceed 100%, e.g. Argentina, and the most profitable routes are Buenos Aires, São Paulo,
                    and Rio. A search for Grabr activity in Tbilisi returns nothing — no lane evidence at all.
                </Line>
                <Line>
                    OBC networks (airmates/time:matters, ACS) are the only mature, professional form, and they push you to
                    their routes and windows: a US mission means 4–7 days abroad on their schedule.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    What that record says about your theory.
                </Word> The survivorship pattern is the finding: the spread exists mainly where a country has tariff/VAT
                walls of 50–100%+ (Argentina, Brazil, historically Russia), and the platforms that tried to monetize generic
                luggage space on rich-to-rich lanes (NY–London) didn't clear the trust and coordination cost. Georgia has
                neither the walls (GEL 3,000/30 kg comes in duty-free by air) nor the population to support a lane, and the
                US inbound leg is the wrong direction — the demand is for US goods going <Word>
                    <Emphasis />
                    out
                </Word>. So the empirical answer to "is there a bulletproof buyer for Tbilisi↔NY" is: the market has looked
                and not built one. The remaining offsets — UK261, bump vouchers, self-consumption on electronics — are real
                but they're not arbitrage in the sense you posed; they're option value on the ticket itself.
            </Paragraph>
            <Paragraph>
                The Russian-language "с оказией" informal channel (Telegram/Facebook groups) is the actual mechanism for
                this region, but it's exactly the no-escrow bucket you excluded. If you want, I can search those groups
                specifically for the Tbilisi–NY pair to see if anyone is posting paid requests.
            </Paragraph>
        </Message>
        <Message
            at="2026-08-27T03:02:21.934259Z"
        >
            <Origin>01a0412c-644b-752c-8217-61a8242b8467</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Not controllable == not interesting though if I can sign up for something that earns me money that can be
                listed in another list
            </Paragraph>
            <Paragraph>
                Aggregate from all responses and do research to find more now that you understand. Battle tested solutions
                best
            </Paragraph>
        </Message>
        <Message
            at="2026-08-27T03:03:08.730195Z"
        >
            <Origin>01a0412c-644b-7022-9dce-a83e93197fdf</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched the web for “Grabr alternatives 2026 apps pay travelers to carry items”</Action>
            <Action>Searched the web for “Shappi Airposted Backpack traveler courier app still active 2026 review”</Action>
            <Action>Searched the web for “get paid to fly airline mystery shopper cabin audit sign up”</Action>
            <Paragraph>
                Aggregated, filtered to things you can register for in advance and that have a track record. Ordered by how
                well they fit a fixed TBS–LHR–NYC round trip.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    1. Onboard-courier networks — sign up now, accept a mission if one matches.
                </Word> The only professional, decades-old version of this. Three platforms recruit freelancers: airmates
                (time:matters/Lufthansa), Air Charter Service, and Ascent's PEAK marketplace. (cite
                index="29-1"&gt;Requirements are just regular flying experience, 18+, a passport with 6+ months validity,
                and a smartphone with roaming.&lt;/cite&gt; Since (cite index="31-1"&gt;US routes are among the most
                frequently served,&lt;/cite&gt; a LHR→JFK mission in your window is plausible; you list availability and
                decline anything that doesn't fit. Battle-tested but lumpy — a FlyerTalk London-based courier complains
                (cite index="34-1"&gt;they keep getting offered departures from regional airports rather than
                LHR.&lt;/cite&gt; Best case: they pay the whole leg.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    2. Airline/airport mystery-shopping panels — register, then watch for your route.
                </Word> Real programs, real payouts. One documented case: (cite index="89-1"&gt;EvaluateIt by SQM reimbursed
                50% of the airfare after a questionnaire covering boarding, cabin service, duty-free, crew, meals, and
                delays was submitted with the boarding pass.&lt;/cite&gt; The agencies with airline clients: BARE
                International, Ipsos, HS Brands, Albatross CX, GapBuster, Market-i, Reality Based Group. A frequent traveler
                describes (cite index="87-1"&gt;stacking a hotel assignment with a flight assignment so airfare gets
                reimbursed twice, plus airport or lounge assignments.&lt;/cite&gt; Caveat: (cite index="88-1"&gt;assignments
                are date-specific and you find the flights yourself,&lt;/cite&gt; so this is register-and-filter, not
                guaranteed.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    3. Grabr — register and list both legs; expect London to be the live one.
                </Word> The one surviving escrow marketplace. Post your NY→London and NY→Tbilisi trips and see what appears;
                the London side has volume, Tbilisi almost certainly doesn't. Delivery must be in person, so a London
                layover only works if you have hours landside.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    4. Volunteer-bump list — opt in at check-in.
                </Word> Controllable in the sense you asked: you put your name on the list; the airline decides whether it
                needs you. Only on the NYC departure if the return date is soft.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    5. Self-consumption electronics.
                </Word> Buy the laptop/phone you'd buy anyway at US retail; Georgia's air allowance covers it duty-free.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    What doesn't fit, with reasons:
                </Word> Shappi ((cite index="79-1"&gt;Ecuador and Colombia only&lt;/cite&gt;), Backpackbang (Bangladesh),
                Airfrov (SE Asia), Pabbler (you hand off to DHL, so no personal-delivery premium), Airmule/Ouibring (dead).
                Cuban cigars into the US: banned. Georgian food to Brighton Beach: no escrow venue.
            </Paragraph>
            <Paragraph>
                Realistic stack for your itinerary: register for 1, 2, and 3 this week; 1 and 2 are the only ones that have
                ever fully paid a transatlantic leg, and both are lottery-shaped but free to enter.
            </Paragraph>
        </Message>
        <Message
            at="2026-08-27T03:08:24.058948Z"
        >
            <Origin>01a04131-e8f1-7af5-9153-f8bd47aad24e</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                “Buy the laptop/phone you’d buy anyway at US retail; Georgia’s air allowance covers it duty-free.” - is this
                is true why can’t I make a profit selling in GE
            </Paragraph>
        </Message>
        <Message
            at="2026-08-27T03:08:51.357973Z"
        >
            <Origin>01a04131-e8f1-733d-9998-7b170abd9869</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched the web for “iPhone 17 Pro price Georgia Tbilisi GEL iSpace”</Action>
            <Paragraph>You can — I understated it. The spread is real; what's missing is scale and a clean exit.</Paragraph>
            <Paragraph>
                Numbers: iSpace lists (cite index="95-1"&gt;iPhone 17 Pro 256 GB at 4,269 GEL&lt;/cite&gt; — roughly $1,580
                at current rates. US retail is $1,099 (+8.9% in NYC, or zero in Delaware/NH/Oregon). That's a $380–480 gross
                spread, ~30%, before you sell.
            </Paragraph>
            <Paragraph>Where it gets eaten:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Realization discount.
                    </Word> You're not selling at iSpace's price; you're selling a sealed US unit on mymarket.ge against
                    other grey imports. US iPhones are eSIM-only and carry no local warranty, and Georgian buyers price that
                    in. Realistic clearing price is maybe 3,600–3,900 GEL, which cuts the net to roughly $150–300 per unit.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Scale cap.
                    </Word> The duty-free allowance is (cite index="15-1"&gt;30 kg and GEL 3,000 once every 30
                    days&lt;/cite&gt; — one Pro phone. A second unit exceeds the threshold, and multiple identical sealed
                    units is the textbook commercial-import signal; Georgian customs charges 18% VAT on the excess, which
                    erases the spread on the second unit and beyond.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Time cost.
                    </Word> Listing, haggling, meeting a buyer in Tbilisi — a couple of hours per unit for a couple hundred
                    dollars.
                </Line>
            </Paragraph>
            <Paragraph>
                So the honest statement is: one unit per trip, ~$150–300 net, with you as the market maker. That's the same
                15–20% Grabr pays, except Grabr gives you the buyer and escrow up front and the electronics play doesn't.
                The reason I filed it under "self-consumption" is that if the phone is for you, the whole $400–500 is
                captured with zero execution risk; if it's for resale, half of it goes to the grey-market discount and you
                inherit a buyer search. Both are legitimate; the first is just cleaner.
            </Paragraph>
            <Paragraph>
                Where this scales is MacBooks — higher ticket, same allowance bound, but the GEL 3,000 cap bites harder (a
                MacBook Pro exceeds it alone). If you want, I can price the grey-market clearing level on mymarket.ge for a
                specific model so the net isn't an estimate.
            </Paragraph>
        </Message>
        <Message
            at="2026-08-27T03:18:20.591957Z"
        >
            <Origin>01a0413b-0094-78e0-8ee0-d00f7f1160e4</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Think hard about this and come up with 20 terms that might be used to describe it and write a little blurb
                about why each of those might be good and then use that to do your web research
            </Paragraph>
        </Message>
        <Message
            at="2026-08-27T03:20:09.144007Z"
        >
            <Origin>01a0413b-0094-78a1-838d-d779f644c363</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Here's the vocabulary map first, then what each handle actually turned up.</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    20 terms, and why each one is a good search handle
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Crowdshipping
                    </Word> — the academic/logistics-research term for travelers carrying parcels. Unlocks peer-reviewed
                    papers with measured economics instead of startup marketing.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Daigou (代购)
                    </Word> — Chinese "buy on behalf." The most professionalized, highest-volume version of exactly this:
                    travelers buying abroad for domestic buyers. A multi-billion-dollar industry with its own playbook.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Shuttle trade / suitcase trade
                    </Word> — the post-Soviet 1990s term (челноки), tracked by the IMF in balance-of-payments data.
                    Georgia–Turkey is a canonical corridor, so this is the local ancestor.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Bavul ticareti
                    </Word> — the Turkish name for the same thing; Turkish-language sources cover the Georgian side of the
                    corridor.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Courier flights / air courier travel
                    </Word> — the 1980s–2000s system where you gave up your baggage allowance for a discounted ticket
                    (IAATC, Air Courier Association). Battle-tested for decades; question is whether anything survives.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Onboard courier (OBC) / hand-carry
                    </Word> — the professional freight term; already covered.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Parallel import / grey import
                    </Word> — the legal-economic name for the iPhone play. Surfaces how grey-market channels into Georgia
                    actually work and what they clear at.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Personal shopper abroad / shopping agent
                    </Word> — the English-language daigou analogue; catches Airfrov, Backpackbang, and Instagram-based
                    operators.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Social delivery / collaborative logistics
                    </Word> — European startup phrasing (PiggyBee's self-description); catches EU-based platforms that
                    "peer-to-peer delivery" misses.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Luggage-space marketplace / monetize your luggage
                    </Word> — consumer-app phrasing; catches new entrants and app-store listings.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        С оказией / передать с попутчиком
                    </Word> — the Russian informal courier idiom; the Tbilisi lane runs in Russian-language Telegram, not
                    English apps.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Voluntary denied boarding (VDB) / oversale compensation
                    </Word> — FlyerTalk terminology; gets you documented payout ranges rather than anecdotes.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Duty-free allowance arbitrage / VAT-refund arbitrage
                    </Word> — tax-mechanism framing: claim VAT back on exit (Global Blue) and bring in under the entry
                    allowance. Catches the legal edge.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Geographic price arbitrage / regional pricing arbitrage
                    </Word> — the generic economics phrase; catches consumer-electronics price-comparison datasets by
                    country.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Border effect / law of one price deviations
                    </Word> — academic trade economics; quantifies how big cross-border retail spreads actually are and why
                    they persist.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Trip subsidization
                    </Word> — Grabr's own marketing phrase; catches competitors using the same pitch.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Airline mystery shopping / in-flight audit
                    </Word> — already covered; the term "audit" catches B2B agency pages.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Diaspora hand-carry / "Georgians in New York" groups
                    </Word> — community-network framing; the actual demand source for TBS↔NYC.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Excess baggage arbitrage / baggage allowance monetization
                    </Word> — freight-cost framing: your free 23 kg vs. $8–15/kg air cargo rates.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Get paid to travel / paid to fly
                    </Word> — the mass-blog phrase. Highest noise, but sometimes surfaces obscure programs the others miss.
                </Line>
            </Paragraph>
            <Paragraph>Now the research on the ones that were new.</Paragraph>
            <Action>Searched the web for “crowdshipping travelers parcels economics study compensation”</Action>
            <Action>Searched the web for “daigou how it works travelers buy abroad resell margin industry size”</Action>
            <Action>Searched the web for “courier flights discounted airfare give up baggage allowance still exist”</Action>
            <Action>Searched the web for “Telegram попутчики Тбилиси Нью-Йорк передача посылок канал”</Action>
            <Action>
                Searched the web for “voluntary denied boarding compensation amounts 2026 Delta United $ volunteers”
            </Action>
            <Action>Searched the web for “iPhone 17 Pro 256 mymarket.ge ახალი დალუქული ფასი”</Action>
            <Paragraph>
                Findings, by handle. The terms that paid off were crowdshipping, daigou, VDB, and parallel import; the ones
                that didn't are noted at the end.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Crowdshipping (academic).
                </Word> The literature formalizes your prior exactly: (cite index="105-1"&gt;the efficient case is a
                traveler who already has a planned trip agreeing to carry a package en route, and carriers trade off
                pickup/delivery effort against the fee.&lt;/cite&gt; The sobering result is scale: in a last-mile study,
                (cite index="108-1"&gt;only about 1% of parcels qualified as outliers worth outsourcing to the crowd, and of
                those only 3–43% were cost-efficient depending on scenario.&lt;/cite&gt; Translation: even in the
                best-designed systems, the crowd carries the residual the professional network can't serve cheaply. That's
                the ceiling.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Daigou (the one place it scaled).
                </Word> (cite index="116-1"&gt;An $81 billion informal industry in China, running from students reselling on
                the side to firms running large operations,&lt;/cite&gt; with (cite index="122-1"&gt;resellers buying 20–30%
                below Chinese official prices and adding fees for authenticity guarantees.&lt;/cite&gt; Why it works there
                and not TBS↔NYC: (cite index="120-1"&gt;high taxes on luxury goods at home plus deep distrust of the
                domestic supply after the 2008 melamine scandal, so foreign-bought goods carry a safety
                premium.&lt;/cite&gt; Two walls — tax and trust. Georgia has neither against US goods. The structural lesson
                is that the arbitrage lives where a wall exists, and the wall adjacent to you is Russia, not America;
                Georgia's role in that corridor is conduit, which is a different business and not on your itinerary.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Courier flights (the old battle-tested model).
                </Word> Dead. (cite index="123-1"&gt;The author of the definitive book on it concedes that post-9/11 changes
                to air freight and security made courier travel effectively a thing of the past, with remaining "courier"
                fares rarely competitive with consolidators.&lt;/cite&gt;
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    VDB — this is the one you can sign up for.
                </Word> Delta lets you pre-register at online check-in: (cite index="141-1"&gt;the check-in flow asks
                whether you want to join the volunteer list for a gift card, with choices of $200, $300, $400, $500, or a
                custom amount.&lt;/cite&gt; Ranges: (cite index="140-1"&gt;typical compensation is airline credit from $200
                to $1,000 depending on delay length, competing volunteers, and how oversold the flight is,&lt;/cite&gt; and
                after the 2017 United incident (cite index="144-1"&gt;Delta authorized agents up to $2,000, with supervisors
                able to approve nearly $10,000.&lt;/cite&gt; Delta also runs the most auctions by far — (cite
                index="142-1"&gt;29,893 voluntary denied boardings in Q1 2023, the most of any carrier.&lt;/cite&gt;
                Practical rule: (cite index="141-1"&gt;confirm you get the same amount as the final offer needed to fill the
                volunteer quota, even if you signed up lower.&lt;/cite&gt; So: fly Delta out of JFK, pre-list at check-in
                with a high custom number, hold a soft return date.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Parallel import (the iPhone reality).
                </Word> Georgian chains already retail US-spec units: Zoommer and Myline list (cite index="146-1"&gt;iPhone
                17 Pro Max "e-SIM Only" at from 112 GEL/month&lt;/cite&gt; versus iSpace's 120 GEL/month for the official
                unit — roughly a 7% grey discount at retail. So the grey channel is institutionalized by bulk importers;
                you'd be competing with them on mymarket.ge, one unit per 30 days. Net per unit stays in the $150–300 range
                I gave.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The Russian-language channel.
                </Word> The network exists and is structured: the ЭМИГРАНТЫ 360 group runs (cite index="134-1"&gt;a
                "Russia–Europe parcels–travelers" chat (@popytchiki_360) among 500+ chats across 110 countries,&lt;/cite&gt;
                and the RU↔GE channel posts hashtag-formatted carrier listings that (cite index="133-1"&gt;explicitly
                advertise picking up Wildberries/Ozon parcels.&lt;/cite&gt; The US-lane equivalent almost certainly exists
                in the same network. Still no escrow, so it stays in your excluded bucket, but it's where the Tbilisi demand
                actually lives.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Handles that returned nothing useful:
                </Word> VAT-refund arbitrage (UK abolished tourist VAT refunds in 2021, and Georgia's refund threshold is
                trivial), border-effect economics (measures spreads but doesn't locate buyers), "get paid to travel"
                (noise), luggage-space marketplaces (only the already-covered survivors), bavul ticareti (historical,
                land-border, Turkey-specific).
            </Paragraph>
            <Paragraph>
                Net update to the ranked list: VDB moves to the top because it's the only item that's both pre-registrable
                and has a documented $200–2,000 payout distribution; OBC and mystery shopping stay as free lottery entries;
                the goods-arbitrage leg is bounded at one phone.
            </Paragraph>
        </Message>
    </Chapter>
);
