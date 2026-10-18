import { Bold, Chapter, Date, Emphasis, Heading, Line, List, Paragraph, Reference, Table, Title, Word } from '@dna-platform/public';
import { Dated, Message, Quoted, Speaker } from '../../../.manual/.book';
import { Action, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[30 April 2026](2026-04-30)</Date>
        </Dated>
        <Title>[[ 30 April 2026 ]]</Title>
        <Message
            at="2026-04-30T17:59:34.202654Z"
        >
            <Origin>019ddf8b-bfec-7e15-afd1-49433313c09b</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                I have moved to Georgia. But I am right now on Long Island, New York, with a bunch of belongings. They are
                spread out in 13 large boxes and bins. What are my options?
            </Paragraph>
            <Paragraph>
                I already know that I can take some on the airline with me. This is a possibility, but it is also a lot to
                manage at the airport and that will require repacking. I was hoping to find perhaps a freight service or
                other options that can help me at least get it coast to coast. I can wait weeks or even months to get it
            </Paragraph>
            <Paragraph>
                Now, we have had a problem where you recommend services like turkish cargo and they end up being B2B when I
                call. WHatever we find, they need to work with an individual who is moving. I am not a business. And of
                course, it has to be affordable. A few thousand dollars max
            </Paragraph>
        </Message>
        <Message
            at="2026-04-30T18:02:18.829916Z"
        >
            <Origin>019ddf8b-bfec-7262-bc6a-7ffae762c3ff</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>
                Searched the web for “ship personal belongings individual New York to Tbilisi Georgia sea freight”
            </Action>
            <Action>Fetched https://expathub.ge/shipping-personal-items-to-tbilisi-georgia-our-story/</Action>
            <Action>Fetched https://www.usa2georgia.com/</Action>
            <Action>Searched the web for “USA2Georgia pricing per kg shipping rates large packages”</Action>
            <Action>Searched the web for “Seven Seas Worldwide ship boxes USA to Georgia individual move”</Action>
            <Action>Searched the web for “"Seven Seas Worldwide" Georgia Tbilisi shipping”</Action>
            <Action>
                Searched the web for “LCL freight forwarder USA to Georgia individual personal belongings move not business”
            </Action>
            <Paragraph>Let me verify a couple more options and pricing structures before responding.</Paragraph>
            <Action>
                Searched the web for “"shipping to Georgia" Tbilisi household goods personal effects price quote LCL
                door-to-door”
            </Action>
            <Paragraph>
                For your situation — individual moving personal effects, generous timeline, a few thousand dollar ceiling —
                there are three categories of provider that actually work for individuals (not B2B). I'll flag what I've
                verified and what you need to confirm by phone before committing.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Realistic estimate of your shipment.
                </Word> 13 large boxes/bins is probably 1.2–1.8 cubic meters and 180–280 kg, depending on contents. Books
                and dishes drive weight up fast; clothes and bedding stay light. Where you land in that range determines
                which option is cheapest, so it's worth weighing a few representative bins now.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Option 1: USA2Georgia — purpose-built for this exact use case.
                </Word>
            </Paragraph>
            <Paragraph>
                This is the one ExpatHub.GE specifically recommends for shipping personal items from the US to Tbilisi, and
                it's run <Word>
                    <Emphasis />
                    out of
                </Word> Georgia, not as a B2B logistics arm. ExpatHub's founder shipped 7 boxes for roughly $300 in shipping
                plus $175 in customs duties. Rate is around $8 per kg gross weight, with packages 20kg+ charged on the
                greater of dimensional vs. actual weight.
            </Paragraph>
            <Paragraph>
                For your load: roughly <Word>
                    <Bold />
                    $1,500–$2,500
                </Word> all-in shipping (assuming dim weight doesn't dominate), plus 18% Georgian VAT on declared value.
                They handle the Georgian customs paperwork, which is the real reason to use them rather than UPS — same
                reason ExpatHub flagged it. You drop boxes at their US warehouse address.
            </Paragraph>
            <Paragraph>
                What to verify by phone (sales@usa2georgia.com): (a) whether they accept a 13-box one-time personal move
                from a US drop-off address vs. their normal "buy on Amazon, forward to Georgia" model, (b) actual NJ/NY
                drop-off address and whether they pick up on Long Island, (c) realistic dim-weight cost on bins
                specifically. App Store reviews are mixed on speed, so confirm timeline expectations in writing.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Option 2: LCL ocean freight via a US freight forwarder (cheapest for your volume).
                </Word>
            </Paragraph>
            <Paragraph>
                LCL = Less-than-Container Load, where you share a 40-foot container with other shippers and pay only for
                your cubic meters. You don't need to be a business to ship overseas household goods with a US freight
                forwarder; AMID Logistics explicitly serves "ordinary shippers looking to send relatively large items from
                the USA" alongside commercial customers.
            </Paragraph>
            <Paragraph>How it works for your shipment:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    Get an instant online quote at oceanfreightusa.com (also internationalshippingusa.com — same company,
                    AMID Logistics, FMC-licensed).
                </Line>
                <Line>
                    They pick up your boxes on Long Island OR you drop them at the nearest CFS (Container Freight Station)
                    at the Port of NY/NJ.
                </Line>
                <Line>Goes by sea to Poti or Batumi (Georgia's Black Sea ports), then by truck to Tbilisi.</Line>
                <Line>Transit time: typically 5–8 weeks port-to-port plus inland.</Line>
            </Paragraph>
            <Paragraph>
                Likely cost structure for 1.5 CBM: ocean freight ~$300–600, US origin charges ~$200–400, Georgian
                destination/handling charges ~$300–600, plus 18% VAT on declared CIF value. Total freight side: roughly
                <Word>
                    <Bold />
                    $800–$1,600
                </Word>. Cheaper than USA2Georgia, but you're more on your own.
            </Paragraph>
            <Paragraph>
                The catch: with LCL there's no door delivery included — your cargo is shipped to a warehouse in the
                destination city, and the ocean carrier's overseas agent guides you through customs release and pickup.
                You'd need to arrange Tbilisi-side pickup yourself or pay the destination agent extra. Given you're already
                in Tbilisi with local resources, this is workable. You'll also need a Georgian Tax ID to clear customs —
                fast to get at any RS Service Centre.
            </Paragraph>
            <Paragraph>
                What to verify: get an actual quote with the destination charges spelled out (this is where freight
                forwarders sometimes hide cost). Local destination charges for personal-effects LCL typically run $250–$600
                or higher, but you want yours in writing.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Option 3: Seven Seas Worldwide — sometimes used for moves like yours, but verify Georgia coverage.
                </Word>
            </Paragraph>
            <Paragraph>
                They have a New York depot, deliver empty boxes to your home, collect filled, and they're explicitly
                individual-focused (expats, students, returning travelers). Their US depots are in Los Angeles, New York and
                San Francisco, and they help around 40,000 people a year transport personal effects door-to-door.
            </Paragraph>
            <Paragraph>
                Two reasons I'm putting them third, not first: (1) I haven't been able to confirm they actually serve
                Georgia — Tbilisi/Georgia doesn't appear on their main destination lists, which feature Australia, UK,
                Europe, etc. (2) Their Yelp aggregate is poor and complaints often center on destination-side delivery
                problems, exactly your weak link being far from the US.
            </Paragraph>
            <Paragraph>
                Worth getting an instant quote from their site to compare, but assume Georgia may not be in their network.
                If it isn't, skip them.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    What I'd actually do in your position.
                </Word>
            </Paragraph>
            <Paragraph>
                Get quotes from both USA2Georgia and AMID Logistics in parallel this week. Decision criteria:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    If the price difference is small (~$300 or less), pay the premium for USA2Georgia because they manage
                    the Georgian customs side, which is the part that goes wrong.
                </Line>
                <Line>
                    If LCL comes in materially cheaper <Word>
                        <Emphasis />
                        and
                    </Word> the destination agent in Georgia is a real entity you can call before booking, take LCL — you
                    have the Tbilisi infrastructure to handle pickup.
                </Line>
                <Line>
                    Either way: don't combine with airline check-in. Pick one channel for the bulk and only carry what you
                    actually need on hand at arrival.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Three things to handle before any provider can quote accurately:
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Detailed valued inventory list.
                    </Word> Georgian customs requires the value of every item — for new items, what you paid; for used items
                    with resale value (electronics), eBay prices; for items without resale value (used socks, documents), a
                    symbolic $1. If your valuations seem about right, customs typically doesn't open most boxes; if you try
                    to lowball, they may revalue everything against you.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Weigh and measure 2–3 representative bins.
                    </Word> This lets every quote come back accurate instead of "from $X."
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Ask each provider, in writing
                    </Word>, the exact question that bit you with Turkish Cargo: <Word>
                        <Emphasis />
                        "I am an individual moving personal household effects, not a business. The shipper and consignee are both me, the same name, no company involvement. Can you accept this booking, and if so, please confirm in your reply."
                    </Word> If they hedge, move on.
                </Line>
            </Paragraph>
            <Paragraph>
                One last note worth flagging: household goods and personal effects are treated as commercial cargo for
                Georgian customs purposes and subject to import duties, fees, and VAT — there's no automatic "moving
                household" exemption like the US has for returning citizens. The 18% VAT is real and standard. Budget for it
                on top of shipping.
            </Paragraph>
        </Message>
        <Message
            at="2026-04-30T18:06:51.727489Z"
        >
            <Origin>019ddf92-6e49-7674-8e45-ecfbb849c541</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Well lets focus on this first and we can come back to others:</Paragraph>
            <Paragraph>
                Option 1: USA2Georgia — purpose-built for this exact use case. This is the one <Word>
                    <Reference>http://ExpatHub.GE</Reference>
                    ExpatHub.GE
                </Word> specifically recommends for shipping personal items from the US to Tbilisi, and it's run out of
                Georgia, not as a B2B logistics arm. ExpatHub's founder shipped 7 boxes for roughly $300 in shipping plus
                $175 in customs duties. Rate is around $8 per kg gross weight, with packages 20kg+ charged on the greater of
                dimensional vs. actual weight. <Word>
                    <Reference>https://expathub.ge/shipping-personal-items-to-tbilisi-georgia-our-story/</Reference>
                    Expat Hub
                </Word><Word>
                    <Reference>https://support.usa2georgia.com/index.php?%2FKnowledgebase%2FArticle%2FView%2F61=</Reference>
                    Usa2georgia
                </Word> For your load: roughly $1,500–$2,500 all-in shipping (assuming dim weight doesn't dominate), plus
                18% Georgian VAT on declared value. They handle the Georgian customs paperwork, which is the real reason to
                use them rather than UPS — same reason ExpatHub flagged it. You drop boxes at their US warehouse address.
                What to verify by phone (&#91;sales@usa2georgia.com&#93;(mailto:sales@usa2georgia.com)): (a) whether they
                accept a 13-box one-time personal move from a US drop-off address vs. their normal "buy on Amazon, forward
                to Georgia" model, (b) actual NJ/NY drop-off address and whether they pick up on Long Island, (c) realistic
                dim-weight cost on bins specifically. App Store reviews are mixed on speed, so confirm timeline expectations
                in writing.
            </Paragraph>
            <Paragraph>
                Sounds too good to be true. Do some rigorous research, find people talking about the service, what the
                company says, best modes of contact - andything that could help. I want specialists if we can find them
            </Paragraph>
        </Message>
        <Message
            at="2026-04-30T18:10:14.150102Z"
        >
            <Origin>019ddf92-6e49-7f55-95a3-c35751be6e94</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched the web for “USA2Georgia reviews complaints personal move large shipment”</Action>
            <Action>Fetched https://www.trustpilot.com/review/usa2georgia.com</Action>
            <Action>Searched the web for “"USA2Georgia" trustpilot rating stars overall”</Action>
            <Action>Searched the web for “reddit shipping personal items Tbilisi Georgia move expat experience”</Action>
            <Action>Searched the web for “reddit Georgia Tbilisi shipping boxes belongings expat 2024 2025”</Action>
            <Action>Searched the web for “site:reddit.com Tbilisi Georgia shipping personal belongings move”</Action>
            <Action>Searched the web for “reddit.com r/Sakartvelo shipping move belongings Tbilisi USA”</Action>
            <Action>Searched the web for “"r/sakartvelo" OR "r/Tbilisi" shipping move belongings boxes”</Action>
            <Action>Searched the web for “sakartvelo subreddit shipping move personal effects USA”</Action>
            <Action>Searched the web for “Tbilisi expat moving boxes shipping USA customs experience 2024”</Action>
            <Action>
                Fetched
                https://www.bbb.org/us/de/newark/profile/mailing-services/usa2georgia-llc-0251-92000999/customer-reviews
            </Action>
            <Action>Searched the web for “USA2Georgia BBB rating Newark Delaware accreditation”</Action>
            <Action>
                Searched the web for “international movers USA Georgia Tbilisi household goods personal effects shippers
                Globalink”
            </Action>
            <Action>Searched the web for “ExpatHub Tbilisi shipping relocation service personal effects”</Action>
            <Action>Searched the web for “доставка вещей переезд США Грузия Тбилиси контейнер”</Action>
            <Action>Searched the web for “Onex.ge USA Georgia Tbilisi delivery review experience”</Action>
            <Action>
                Searched the web for “"Schumacher Cargo" OR "SDC International" Georgia Tbilisi shipping reviews”
            </Action>
            <Action>Searched the web for “"Globalink" Tbilisi Georgia movers personal effects review experience”</Action>
            <Paragraph>Your instinct was right. Let me lay out what changed when I dug deeper.</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The Bayesian update on USA2Georgia is sharply negative.
                </Word>
            </Paragraph>
            <Paragraph>
                The ExpatHub testimonial is from 2019. The picture in 2024-2026 looks materially different.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Aggregate ratings:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Trustpilot: 2.3 / 5, rated "Poor"</Line>
                <Line>BBB: F rating, not accredited, with failure to respond to 3 complaints</Line>
                <Line>Scamadviser pulled-from-multiple-sources: 2.8 average across 10 reviews</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Pattern of complaints — and these matter for your use case specifically:
                </Word>
            </Paragraph>
            <Paragraph>
                A long-time customer's review is the most telling: they used the service since 2016, had positive experience
                until 2023, then in 2023 received an empty box (an Apple Watch where only the charger was delivered — the
                package had been "cut down"). A separate Google review puts the same break point: "after 12 years of
                excellent service their service dropped to level of hell.. so from 5 stars they dropped to 1". So the
                timeline matters — the 2019 ExpatHub story was written under a meaningfully different operating regime.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The dimensional-weight problem is the showstopper for bins.
                </Word> A documented BBB complaint: a customer ordered a canvas tote bag, a card holder, and a belt —
                USA2Georgia calculated the volumetric weight at 18 kg, charged 428 GEL (~$200), and shipped it from the US
                before the customer could intervene to return it. Their pricing structure charges packages 50kg+ on the
                greater of volumetric vs. actual weight, with the same rule from 30kg+ for some shipments. Your 13 large
                bins are exactly the geometry that gets penalized — bedding, clothes, household goods are mostly air. My
                earlier $1,500–2,500 estimate assumed actual weight; if dim weight dominates, you could easily land at 2–3x
                that, with no recourse since they can ship before you contest.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    They're structurally a mail-forwarder, not a mover.
                </Word> The business is built for thousands of small Amazon/eBay parcels arriving at their Newark, DE
                warehouse for Georgian buyers. Their HQ is 8 McCullough Dr Ste U, Newark, Delaware, with a second location
                at 501 Silverside Rd Ste 105, Wilmington, DE — both operating as receiving warehouses for e-commerce, not as
                personal-effects packing facilities. A personal household move is not their core product, and the reviews
                suggest the workflow does not adapt well.
            </Paragraph>
            <Paragraph>
                There's also a tail risk I'll just flag: multiple BBB reviews accuse the company of being used by an eBay
                scam ring with their address as a drop point. Read that as you wish — could be other accounts using the
                address — but it's a sustained complaint pattern.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Translation:
                </Word> the prior was based on one anecdote in one favorable era. Updated against current evidence and your
                specific volumetric profile, USA2Georgia is not the right channel for a 13-bin household move. I should not
                have led with it as confidently as I did.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The actual specialists for personal-effects to Tbilisi.
                </Word>
            </Paragraph>
            <Paragraph>
                Real personal-effects movers operate as origin-side US movers + Georgia-side customs/delivery agent, end to
                end. Three names that have a verifiable Tbilisi presence (rather than just claiming worldwide service):
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    1. ExpatHub.GE — relocation service.
                </Word> They're already in your stack of trusted Tbilisi contacts, and the same firm whose 2019 article is
                what got us into this. They explicitly offer relocation as a paid service: "If you are using ExpatHub's
                relocation service, we can help coordinate your shipment and the relevant tax payment". The advantage here
                is real: they understand Georgian customs first-hand and can manage the destination-side complications that
                wreck most shipments. Contact via free 30-minute consultation: https://expathub.ge/free-consultation/ — or
                email info@expathub.ge. Office at 39b Ilia Chavchavadze Avenue, 3rd floor, Tbilisi (which puts them five
                minutes from your Saburtalo location).
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    2. Globalink Logistics — Tbilisi-headquartered freight forwarder.
                </Word> Verifiable physical office at 60 Nutsubidze Street, Tbilisi 0186, +995 32 200-02-38,
                tbilisi@globalinklogistics.com. They explicitly list removals &amp; relocations and customs brokerage as
                services. They have a US-side network for origin pickup and consolidation. Globalink is the agent multiple
                Western movers use as their Tbilisi partner — meaning if you go through Schumacher, Three Movers, etc., your
                shipment may end up in Globalink's hands at the Tbilisi end anyway. Going direct cuts out the broker margin.
                Ask for Gvantsa Berozashvili (her email appears in their public contact lists) or the corporate sales line
                sales@globalinklogistics.com.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    3. Gosselin Moving — Caucasus-based international mover.
                </Word> 25+ years moving diplomats, expats, military, and private persons to Georgia, with Tbilisi/Batumi
                coverage. They're the FIDI/IPATA-certified player in the Caucasus, which is the rough industry equivalent of
                "this firm has accreditation that requires real customer-protection standards." Quote at
                gosselin-moving.com/en/moving-to-georgia. Higher-end pricing but lower variance.
            </Paragraph>
            <Paragraph>
                A fourth name worth a mention but not first call: <Word>
                    <Bold />
                    International Sea &amp; Air Shipping
                </Word> (internationalmoving.com) is NY/NJ-based and has a publicly visible customer review for shipping ~26
                boxes from the New York area to Baku, Azerbaijan via their local agency Globallink Logistics — that's the
                same Globalink, and Baku is the next-door geography. Their NY presence and Caucasus track record makes them
                a credible third quote.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    What I'd actually do.
                </Word>
            </Paragraph>
            <Paragraph>
                Stop calling the mail-forwarders. Get three quotes from real personal-effects specialists, framed
                identically:
            </Paragraph>
            <Paragraph>
                <Quoted />
                <Word>
                    <Emphasis />
                    "I am moving from Long Island, NY to Tbilisi, Georgia. I have 13 large boxes/bins of personal household effects, totaling approximately &#91;X&#93; cubic feet and &#91;Y&#93; kg. This is a one-time personal move; I am the shipper and the consignee, no business involved. Please quote door-to-door including: US-side pickup, ocean freight LCL or air freight (please offer both), Georgian customs clearance with VAT calculation, and Tbilisi delivery. I have flexibility on timeline up to 2-3 months. Please confirm in writing that you accept individuals (not businesses) for personal-effects moves."
                </Word>
            </Paragraph>
            <Paragraph>Send that exact text to:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        ExpatHub.GE
                    </Word> — info@expathub.ge or book the free 30-min consult
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Globalink Tbilisi
                    </Word> — sales@globalinklogistics.com, copy tbilisi@globalinklogistics.com
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        International Sea &amp; Air Shipping
                    </Word> — quote form at internationalmoving.com, mention you want their Globalink/Caucasus partner
                    network
                </Line>
            </Paragraph>
            <Paragraph>
                Before sending, take 30 minutes to weigh and measure 2–3 representative bins. The quote accuracy depends
                entirely on this. Without it you'll get range quotes that the destination-side will then "true up" against
                you — exactly the trap the bad-review cluster falls into.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Realistic budget reset.
                </Word> For a real specialist on a roughly 1.5–2 CBM / 200–280 kg shipment to Tbilisi, expect $2,500–4,500
                all-in (freight + origin/destination charges + Georgian VAT on declared CIF value). That's higher than my
                USA2Georgia estimate, but the variance is much lower and the customs side is actually managed. If you
                genuinely need to stay under "a few thousand max," the lever to pull is volume — get to ~10 boxes that are
                denser-packed, drop the bins you're least sure about, and let the airline absorb 2–3 high-value/high-density
                bags as accompanied baggage.
            </Paragraph>
            <Paragraph>
                One last note: I owe you a correction on the math from the earlier turn. The ExpatHub author's $300 + $175
                figure was for <Word>
                    <Bold />
                    7 boxes from the UK in 2019
                </Word> — not directly comparable to 13 boxes from the US in 2026, and the UK is shorter geography and a
                shipping market with different competitive dynamics. I shouldn't have implicitly extrapolated.
            </Paragraph>
        </Message>
        <Message
            at="2026-04-30T18:13:55.329010Z"
        >
            <Origin>019ddf98-e4b5-7871-894b-06bf68f8d976</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                "both operating as receiving warehouses for e-commerce, not as personal-effects packing facilities" - so it
                sounds like even this is business to business. It sounds terrible but I can't tell if you are biased in the
                other direction. Give me links to check and start exploring other options. Make no assumptions. I am not
                sure there is a shipping service for me. Or I think there is but you won't find it if business shipping
                services distract you
            </Paragraph>
        </Message>
        <Message
            at="2026-04-30T18:16:12.671150Z"
        >
            <Origin>019ddf98-e4b5-754d-beed-451796b32f59</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                You're right to push back, and you're right that I overcorrected. Let me clarify and then genuinely broaden
                the search.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Quick clarification on what I meant.
                </Word> USA2Georgia is not B2B — they're explicitly business-to-consumer; their entire customer base is
                individual Georgians ordering from US e-commerce. What I was trying to flag, and said clumsily, is that
                their <Word>
                    <Emphasis />
                    workflow
                </Word> is built for thousands of small parcels (Amazon orders) rather than for one-time bulk moves. That's
                a fitness-for-purpose concern, not a B2B problem. You may be right that I'm now biased the other way; the
                reviews show clear post-2023 problems, but a working customer call from you might surface a workable
                arrangement I can't see from outside.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Verifiable links so you can read the source material yourself:
                </Word>
            </Paragraph>
            <Paragraph>USA2Georgia direct sources:</Paragraph>
            <Paragraph>
                <List />
                <Line>Their Trustpilot page: https://www.trustpilot.com/review/usa2georgia.com</Line>
                <Line>
                    Their BBB profile (Newark, DE):
                    https://www.bbb.org/us/de/newark/profile/mailing-services/usa2georgia-llc-0251-92000999
                </Line>
                <Line>Apple App Store reviews: https://apps.apple.com/us/app/usa2georgia/id1461461537</Line>
                <Line>Google Play reviews: https://play.google.com/store/apps/details?id=com.usa2georgia.usa2georgia</Line>
                <Line>
                    Their own pricing FAQ: https://support.usa2georgia.com/index.php?%2FKnowledgebase%2FArticle%2FView%2F61=
                </Line>
            </Paragraph>
            <Paragraph>
                The originally cited ExpatHub piece (note the date: 2019):
                https://expathub.ge/shipping-personal-items-to-tbilisi-georgia-our-story/
            </Paragraph>
            <Paragraph>
                Read these and form your own view. The bad reviews are real, but you may also find positive ones I didn't
                surface.
            </Paragraph>
            <Paragraph>Let me now genuinely look for the categories I've been skipping.</Paragraph>
            <Action>Searched the web for “USPS international shipping Georgia Tbilisi rates priority mail boxes”</Action>
            <Action>Searched the web for “Eurosender ship boxes USA Georgia Tbilisi parcel”</Action>
            <Action>
                Searched the web for “uShip international personal effects shipping marketplace bid Tbilisi household”
            </Action>
            <Action>
                Searched the web for “crowd shipping personal courier Tbilisi Georgia "bring your luggage" community”
            </Action>
            <Action>Searched the web for “"попутчик" груз США Грузия передача Тбилиси с собой”</Action>
        </Message>
        <Message
            at="2026-04-30T18:16:25.663052Z"
        >
            <Origin>019ddf9b-2f83-7cf0-b900-907fb4a4f523</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Sounds terrible. But also, is that Deleware? I am on Long Island</Paragraph>
        </Message>
        <Message
            at="2026-04-30T18:17:03.052535Z"
        >
            <Origin>019ddf9b-2f84-708c-91f5-29d66e2d5418</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Yes — Delaware. 8 McCullough Dr, Newark, DE for the main one, second location in Wilmington, DE. From Long
                Island that's roughly 200 miles each way, ~4 hours of driving, plus tolls, plus you'd need a van/truck for
                13 bins. Or you'd ship them via UPS Ground at maybe $20–30/box ($260–390 just to get them to the front of
                the actual shipping leg). I glossed over that — you're right to flag it.
            </Paragraph>
            <Paragraph>
                That changes the whole frame. The right question isn't "who's the best shipper to Tbilisi" — it's <Word>
                    <Bold />
                    "who picks up on Long Island."
                </Word> That's a much smaller universe. Examples that are actually local-pickup-friendly from your area:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Your local USPS post office.
                    </Word> Priority Mail International accepts up to 70 lbs/box direct to Tbilisi. No middleman, no
                    Delaware. https://www.usps.com/international/priority-mail-international.htm
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Meest
                    </Word> — they take drop-offs at any UPS/USPS/FedEx location <Word>
                        <Emphasis />
                        or
                    </Word> their own Meest locations (several in NY/NJ).
                    https://us.meest.com/services/service/delivery-to-georgia
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Schumacher Cargo
                    </Word> — actually has a warehouse in Elizabeth, NJ (much closer than DE) and offers home pickup.
                    https://www.schumachercargo.com/
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        International Sea &amp; Air Shipping
                    </Word> — NY/NJ-based, home pickup. https://internationalmoving.com/
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        uShip
                    </Word> marketplace — list the job, carriers in your area bid; many do home pickup.
                    https://www.uship.com/
                </Line>
            </Paragraph>
            <Paragraph>
                Want me to drill into any of these specifically for Long Island pickup terms and pricing? Or were you
                hinting at a different category I'm still missing?
            </Paragraph>
        </Message>
        <Message
            at="2026-04-30T18:18:45.934688Z"
        >
            <Origin>019ddf9d-5236-75a8-8789-560be65b06da</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Drill into them one by one, write an editable artifact for each. Confirm it works for me. Confirm location
                works. Confirm cost. Confirm logistics. Confirm what you are uncertain of. And then do a comparative
                analysis. Do them one per prompt
            </Paragraph>
        </Message>
        <Message
            at="2026-04-30T18:21:09.265920Z"
        >
            <Origin>019ddf9d-5236-79fe-ad63-9c8f37d84567</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Starting with USPS — simplest case. Let me research it properly first, then write the artifact.
            </Paragraph>
            <Action>
                Searched the web for “USPS Priority Mail International Georgia country price group rate calculator”
            </Action>
            <Action>Fetched https://postcalc.usps.com/CountryPriceGroup</Action>
            <Action>Searched the web for “"Georgia, Republic of" USPS price group Priority Mail International rate”</Action>
            <Action>Fetched https://pe.usps.com/text/Imm/fh_010.htm</Action>
            <Action>
                Searched the web for “USPS "Notice 123" 2026 Priority Mail International "Price Group 3" rate table”
            </Action>
            <Action>
                Searched the web for “USPS Priority Mail International "Price Group 3" 2026 retail rate per pound 10 lbs 20
                lbs 30 lbs 40 lbs”
            </Action>
            <Paragraph>Got the data I need. Creating the file now.</Paragraph>
            <Action>Created /mnt/user-data/outputs/01_USPS_Priority_Mail_International.md</Action>
            <Action>Presented files</Action>
            <Paragraph>
                <Word>
                    <Bold />
                    Headline finding that surprised me, flagging upfront:
                </Word> I went into this assuming USPS was the simple "just walk into the post office" answer. The
                44-lb-per-box weight ceiling for Georgia is real and lower than the generic 70-lb USPS marketing number.
                More importantly, the 79-inch length+girth combined size limit probably disqualifies standard tall storage
                bins (a 31″×17″×17″ tub is 99″ combined). So this option might fit a <Word>
                    <Bold />
                    subset
                </Word> of your boxes — the smaller, denser ones — but probably can't carry tall bins.
            </Paragraph>
            <Paragraph>
                The exact rate depends on your actual bin weights and dimensions, so the artifact gives you the live
                calculator link rather than my guess.
            </Paragraph>
            <Paragraph>
                Want me to do <Word>
                    <Bold />
                    Meest
                </Word> next? They're the Ukrainian-American shipper (NJ-based, drop at any UPS/USPS/FedEx/Meest location) —
                different model, different cost structure, may or may not have similar weight ceilings.
            </Paragraph>
        </Message>
        <Message
            at="2026-04-30T18:24:15.935019Z"
        >
            <Origin>019ddfa2-5bf4-775c-a932-44f8348afe46</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                The subset of my boxes that this fits can probably come with me on the plane. Okay do the next one
            </Paragraph>
        </Message>
        <Message
            at="2026-04-30T18:27:08.158288Z"
        >
            <Origin>019ddfa2-5bf4-7b28-8e07-33b425cee03f</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>On it. Researching Meest properly.</Paragraph>
            <Action>Searched the web for “Meest USA shipping Georgia Tbilisi rates pickup New York Long Island”</Action>
            <Action>Fetched https://us.meest.com/services/service/delivery-to-georgia</Action>
            <Action>Searched the web for “Meest USA maximum weight box dimensions limits parcel size”</Action>
            <Action>Fetched https://us.meest.com/offices</Action>
            <Action>Searched the web for “Meest USA reviews trustpilot Georgia delivery experience complaints”</Action>
            <Paragraph>Got the data. Writing the artifact.</Paragraph>
            <Action>Created /mnt/user-data/outputs/02_Meest_USA.md</Action>
        </Message>
        <Message
            at="2026-04-30T18:29:45.774072Z"
        >
            <Origin>015d094d-b3c0-4faa-a901-82bcf01e117f</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Pattern is clear now. You have 13 <Word>
                    <Emphasis />
                    bins
                </Word>, not 13 <Word>
                    <Emphasis />
                    boxes
                </Word>, and consumer parcel services don't accept that geometry/weight. Moving on to Schumacher — they're a
                household goods mover, not a parcel service. Different model entirely.
            </Paragraph>
            <Action>
                Searched the web for “Schumacher Cargo international moving Tbilisi Georgia LCL household goods rates”
            </Action>
            <Action>Searched the web for “"Schumacher Cargo" Georgia Tbilisi shipping review”</Action>
            <Action>Searched the web for “"Schumacher Cargo" Caucasus Black Sea Poti Caucasus Tbilisi destination”</Action>
        </Message>
        <Message
            at="2026-04-30T18:30:20.218776Z"
        >
            <Origin>019ddfa7-f3da-787c-a288-176d49dec383</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                I can, if necessary, repackage bins as boxes right? Don't skip it. That is on the list of things I could
                conceivably do...
            </Paragraph>
        </Message>
        <Message
            at="2026-04-30T18:33:02.315616Z"
        >
            <Origin>019ddfa7-f3da-7fae-b7d2-719c93d9407f</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Right, fair correction. I framed repacking as a near-blocker when it's just labor. Updating the Meest
                artifact to fix that, then moving on to Schumacher.
            </Paragraph>
            <Action>Edited /mnt/user-data/outputs/02_Meest_USA.md</Action>
            <Action>Edited /mnt/user-data/outputs/02_Meest_USA.md</Action>
            <Action>Edited /mnt/user-data/outputs/02_Meest_USA.md</Action>
            <Paragraph>Meest stays in serious contention — fixed. Now Schumacher.</Paragraph>
            <Action>Fetched https://www.schumachercargo.com/shipping-locations.php</Action>
            <Paragraph>
                Major finding from the Schumacher destination list: Georgia (Republic of) isn't on their menu at all.
                Writing the artifact now.
            </Paragraph>
            <Action>Created /mnt/user-data/outputs/03_Schumacher_Cargo.md</Action>
            <Action>Presented files</Action>
            <Paragraph>
                <Word>
                    <Bold />
                    Headline finding:
                </Word> Schumacher doesn't list Georgia (Republic of) on their destination dropdown at all. They cover
                Russia, Turkey, Ukraine, Uzbekistan, Moldova — but not Georgia. Combined with Trustpilot 2.3/5 across 368
                reviews and a documented "additional fees after the quote" pattern, I'd skip them. The full data is in the
                artifact for you to disagree with.
            </Paragraph>
            <Paragraph>
                Also re-shared the updated Meest artifact — the bins-to-cardboard repacking is now framed as labor (which it
                is), not a near-blocker. Meest stays in serious contention.
            </Paragraph>
            <Paragraph>
                The next one to dig into is Dnipro LLC — the Russian-speaking diaspora shipper based in Roselle, NJ that I
                flagged in earlier research. They published rates ($2.79/lb + $5/box vs Meest's $3.29/lb + $15/box) and
                explicitly do Long Island home pickup. Different model from anything we've looked at — they're
                Caucasus-specialists, not generalists. Want me to do them next?
            </Paragraph>
        </Message>
        <Message
            at="2026-04-30T18:43:26.954722Z"
        >
            <Origin>019ddfb3-f223-7ccd-977a-186ea0adfd3c</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Okay so meest is looking pretty good so far! Finish the others and then we will review</Paragraph>
        </Message>
        <Message
            at="2026-04-30T18:51:53.176019Z"
        >
            <Origin>019ddfb3-f223-705f-9d33-5a211e312a83</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Going to crunch through the remainder. Starting with Dnipro LLC since it's the most likely competitor to
                Meest.
            </Paragraph>
            <Action>Fetched https://dniprollc.com/en/georgia/packages-delivery-from-the-usa-to-georgia/</Action>
            <Action>Searched the web for “"Dnipro LLC" reviews trustpilot Roselle NJ shipping Georgia experience”</Action>
            <Paragraph>
                Important: most of Dnipro's bad reviews online are from eBay sellers who shipped to Dnipro's address
                (because <Word>
                    <Emphasis />
                    buyers
                </Word> used it as a freight forwarder). They're not Dnipro customer complaints. Actual customers —
                positive. Writing it up.
            </Paragraph>
            <Action>Created /mnt/user-data/outputs/04_Dnipro_LLC.md</Action>
            <Action>
                Searched the web for “"International Sea &amp; Air Shipping" Tbilisi Georgia rates boxes household”
            </Action>
            <Action>Fetched https://internationalmoving.com/moving-to-georgia-from-usa/</Action>
            <Action>
                Searched the web for “"International Sea Air Shipping" Elmont NY reviews trustpilot moving experience”
            </Action>
            <Action>Created /mnt/user-data/outputs/05_International_Sea_Air_Shipping.md</Action>
            <Action>Searched the web for “"Onex Group" Tbilisi shipping packages USA Georgia delivery rates”</Action>
            <Action>Searched the web for “"ExpatHub.GE" relocation moving service household goods USA Tbilisi”</Action>
            <Action>Created /mnt/user-data/outputs/06_Other_Options_Scoped.md</Action>
            <Paragraph>Now the comparative analysis — the synthesis you've been waiting for.</Paragraph>
            <Action>Created /mnt/user-data/outputs/07_Comparative_Analysis.md</Action>
            <Action>Presented files</Action>
            <Paragraph>Done. Seven artifacts in /mnt/user-data/outputs.</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Summary of the headline findings:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Dnipro LLC
                    </Word> is probably your best fit — $2.79/lb + $5/box, FMC NVOCC license, Russian-speaking, has its own
                    Tbilisi office (in Saburtalo, your neighborhood), home pickup from Long Island. Estimated $1,000–1,600
                    for 13 boxes. The "scammy" online reviews are about eBay buyers using their address, not about their
                    actual customer service.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Meest
                    </Word> is a strong backup — slightly more expensive ($3.29/lb + $15/box, ~$1,200–1,900 total), bigger
                    brand, drop-off point in Copiague (Long Island).
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        ISAS
                    </Word> (Elmont, NY — closest to you geographically) is a credible premium full-service option but at
                    $3,500–6,000+ probably overkill for storage bins. Worth it only if cargo fragility justifies the cost.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Schumacher
                    </Word> is out — Georgia not on their destination list, broker-pattern reviews on Trustpilot/Yelp,
                    recurring "additional fees after the quote" complaints.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        ExpatHub.GE
                    </Word> isn't a shipper but is the highest-leverage Tbilisi-side hire regardless of which US carrier you
                    pick. They handle the customs/VAT failure mode that wrecks DIY shipments.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        USPS subset comes on the plane with you
                    </Word> — confirmed your earlier instinct.
                </Line>
            </Paragraph>
            <Paragraph>
                The recommended hybrid plan in artifact 07 lands you at roughly $2,000–3,300 all-in including VAT, vs.
                $5,000+ for ISAS-everything. Concrete next steps are listed at the bottom of that artifact — book ExpatHub
                free consultation today, parallel quotes from Dnipro and Meest this week, decide and ship.
            </Paragraph>
        </Message>
        <Message
            at="2026-04-30T19:01:31.344025Z"
        >
            <Origin>019ddfc4-7ac3-76ab-ba37-9960fd96e0fa</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Okay so Dnipro and Meest. Let's drill in and do side by side. Perhaps I can reach out to both. Give me the
                thin slice of each in your next response. The how, the where, the how long to organize, how to contact. Do
                that write up as a next step and make it a side by side comparison. We will be pursuing both
            </Paragraph>
        </Message>
        <Message
            at="2026-04-30T19:03:05.057877Z"
        >
            <Origin>019ddfc4-7ac3-7a10-a2d4-a01492193796</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Created /mnt/user-data/outputs/08_Dnipro_vs_Meest_Action_Plan.md</Action>
            <Action>Presented files</Action>
            <Paragraph>The thin slice. Key things to internalize before the calls:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The single most useful prep work:
                </Word> measure, weigh, and categorize 3 representative bins before you dial. You'll be able to get
                same-call quotes instead of "we'll get back to you after we have your numbers."
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Order of calls:
                </Word> Dnipro first. Smaller team, faster real answer, lower price floor. Then Meest with the same
                parameters so the quotes are comparable.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The 14 questions
                </Word> in the artifact are designed to be apples-to-apples — same questions to both carriers in the same
                order. That gives you a clean side-by-side once both written quotes come back in 24–72 hours.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Tiebreaker rule:
                </Word> if quotes are within 10% of each other, default to Dnipro for the Tbilisi-side presence. Their own
                office in Tbilisi vs. Meest's unnamed partner is a meaningful structural difference once something needs
                unsticking on the receive end.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Optional parallel move:
                </Word> book the free ExpatHub.GE consultation today regardless. It's independent of the carrier decision
                and addresses the customs failure mode that wrecks otherwise-fine shipments.
            </Paragraph>
            <Paragraph>Total elapsed time end-to-end: 3–7 weeks. Decision in 4 days.</Paragraph>
        </Message>
        <Message
            at="2026-04-30T19:07:46.850694Z"
        >
            <Origin>019ddfca-3a4d-7c46-8914-d8a086c6bc01</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Okay great. Dnipro has no WhatsApp? That's a shame. Do they have online discussion?</Paragraph>
            <Paragraph>
                I have these paintings. I might have to take with me on the return flight. They are very large. The biggest
                is 3 feet by 4 feet. So either have oversize packages like this?
            </Paragraph>
        </Message>
        <Message
            at="2026-04-30T19:09:51.215062Z"
        >
            <Origin>019ddfca-3a4e-70bb-ac19-428883c91f52</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Fetched https://dniprollc.com/en/contacts/</Action>
            <Action>Searched the web for “"Dnipro LLC" Roselle WhatsApp Telegram chat contact email”</Action>
            <Action>Searched the web for “Meest USA oversize package painting artwork shipping dimensions limit”</Action>
            <Paragraph>Two answers, both with practical implications for the action plan.</Paragraph>
            <Heading>On Dnipro communication</Heading>
            <Paragraph>No WhatsApp or Telegram I can find publicly. What they do have:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Email:
                    </Word> info@dniprollc.com — this is your async channel. Quote requests can go here.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Customer portal:
                    </Word> https://my.dniprollc.com (account login/registration)
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Facebook:
                    </Word> facebook.com/DniproLLC (low-traffic but they post)
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Phone:
                    </Word> (908) 241-2190 / (888) 336-4776 (sometimes the only path with smaller diaspora shippers — a real
                    human picks up rather than a queue)
                </Line>
            </Paragraph>
            <Paragraph>
                The mismatch with Meest (which has WhatsApp/Telegram) is real. Practical workaround: send your initial quote
                request as a structured email to info@dniprollc.com with all the parameters from the action plan. You'll get
                a written quote you can review on your schedule. Then phone only if you need to negotiate or clarify.
            </Paragraph>
            <Heading>On oversize paintings (3'×4' = 36"×48")</Heading>
            <Paragraph>
                Important update on Dnipro that didn't make it into earlier artifacts: their company profile explicitly says
                <Word>
                    <Emphasis />
                    "We can handle your cargo needs on shipments as small as 10 pounds to oversize/overweight equipment that requires special handling. We operate in a 100,000 sq ft warehouse facility..."
                </Word> They were the largest US-to-Ukraine IATA air freight shipper 2007–2009.
            </Paragraph>
            <Paragraph>
                So the <Word>
                    <Bold />
                    35″×18″×18″ ceiling is for their consolidated personal-package service
                </Word> — not their special handling/air freight service, which is a separate quote.
            </Paragraph>
            <Paragraph>
                Here's how the realistic options stack up for a 36″×48″ painting (which becomes ~40″×52″×6″ once properly
                crated):
            </Paragraph>
            <Paragraph>
                <Table />
                <Line>
                    <Word>Option</Word>
                    <Word>Feasible?</Word>
                    <Word>Real cost</Word>
                    <Word>Notes</Word>
                </Line>
                <Line>
                    <Word>Dnipro standard parcel</Word>
                    <Word>No</Word>
                    <Word>n/a</Word>
                    <Word>Exceeds 35″ longest side</Word>
                </Line>
                <Line>
                    <Word>Dnipro oversize/special handling</Word>
                    <Word>Yes</Word>
                    <Word>Ask for quote</Word>
                    <Word>
                        They do this; just not on the published rate card. Their air freight capacity is real. Worth asking.
                    </Word>
                </Line>
                <Line>
                    <Word>Meest standard</Word>
                    <Word>At the edge</Word>
                    <Word>~$200–400+ surcharges</Word>
                    <Word>
                        48″ is right at FedEx hand-off limit; once you add packaging depth it likely tips over and gets
                        reclassified
                    </Word>
                </Line>
                <Line>
                    <Word>Specialty art shippers (Convelio, FedEx Custom Critical, UPS Store custom pack)</Word>
                    <Word>Yes</Word>
                    <Word>$300–800 international</Word>
                    <Word>
                        Best for valuable artwork — climate-controlled, custom crating, real insurance, shippers who
                        actually understand fragile fine art
                    </Word>
                </Line>
                <Line>
                    <Word>Plane (oversized checked baggage)</Word>
                    <Word>Yes</Word>
                    <Word>$150–200/painting on most carriers</Word>
                    <Word>
                        90 linear inches is at the edge of oversize-allowed (most airlines cap at 80″ standard, $150–200 fee
                        for items up to ~110–115″ depending on airline). You control handling.
                    </Word>
                </Line>
                <Line>
                    <Word>Hand-carry on plane</Word>
                    <Word>Maybe</Word>
                    <Word>Free if it fits airline rules</Word>
                    <Word>
                        Some airlines allow flat artwork as carry-on if dimensions fit overhead-bin or under-seat envelope.
                        Probably won't for 48″.
                    </Word>
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The honest read:
                </Word> for valuable paintings, the plane is probably the best option — both because you control the
                handling and because the cost-per-painting is similar or cheaper than specialty shipping. Pack each painting
                in a "telescoping" art box (~$50 each), bubble wrap, corner protectors, fragile labeling. Check at the
                counter as oversized special-handling baggage. Declare value for excess-valuation coverage.
            </Paragraph>
            <Paragraph>
                If you'd rather not deal with them at the airport, ask Dnipro for a separate oversize quote when you
                call/email — their air freight chops mean they're the most credible non-specialty option among your
                candidates. Worth one specific question on the call:
            </Paragraph>
            <Paragraph>
                <Quoted />
                <Word>
                    <Emphasis />
                    "Separate from the 13-box household consolidation, I have 3 paintings, the largest 36″×48″ canvas in a 2-inch frame. Can you handle these via your oversize/special handling service, and what's the rough cost per painting?"
                </Word>
            </Paragraph>
            <Paragraph>
                Want me to update the action plan artifact (08) to include the painting-specific question, or keep this in
                chat?
            </Paragraph>
        </Message>
        <Message
            at="2026-04-30T19:15:49.058134Z"
        >
            <Origin>019ddfd1-95ec-7208-8026-c259cd4053c6</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Okay write me one shortened editable artifact where I contact Dnipro and Meest and talk about my situation.
                Let's include the paintings. I can ask them how they have to be packed, and niote that they are oversized.
                Same for meest. What am I saying to each company?
            </Paragraph>
        </Message>
        <Message
            at="2026-04-30T19:16:42.486174Z"
        >
            <Origin>019ddfd1-95ec-7fdd-9034-1142eeef64e2</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Created /mnt/user-data/outputs/09_Outreach_Message.md</Action>
        </Message>
        <Message
            at="2026-04-30T19:19:07.292174Z"
        >
            <Origin>b2f6295d-3fac-4bd1-8be7-60d84dd93e85</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                I had created it but didn't surface it. Let me tighten it down to just what you asked for — the message
                itself plus how to send to each — and present it now.
            </Paragraph>
            <Action>Created /mnt/user-data/outputs/09_Outreach_Message.md</Action>
            <Action>Ran rm /mnt/user-data/outputs/09_Outreach_Message.md</Action>
            <Action>Created /mnt/user-data/outputs/09_Outreach_Message.md</Action>
            <Action>Presented files</Action>
            <Paragraph>
                One block of text you can paste, with placeholders for the weights and dimensions you'll measure, and the
                painting question built in as a separate item with explicit "how do you want these packed" framing. Both
                companies get the same core message — the per-channel notes at the bottom add one tailored line each
                (mentioning their oversize service for Dnipro, and the FedEx 48" limit for Meest) so they route your inquiry
                to the right person internally.
            </Paragraph>
            <Paragraph>Send both today if you can. Aim for written replies within 72 hours.</Paragraph>
        </Message>
        <Message
            at="2026-04-30T21:32:57.523126Z"
        >
            <Origin>019de04f-2e04-78ad-9ce8-836fbeadff46</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Let’s keep this much simpler. Can you please write me an outreach letter one for WhatsApp of one company and
                give me the number and a link that shows me where it is and one for the email for the other one and then
                just broadly say that I have these number of boxes and bins, and oversized items like paintings, and I want
                to find out if I can ship some more all of them with their service. I would like to arrange for this as soon
                as possible. Give me something that I can get done easily other than all this measuring I can let them tell
                me what they need.
            </Paragraph>
        </Message>
        <Message
            at="2026-04-30T21:33:15.005068Z"
        >
            <Origin>019de04f-2e04-7b6c-9857-b1ed008e7790</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Here you go — two short messages, paste and send.</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    WhatsApp to Meest USA
                </Word>
            </Paragraph>
            <Paragraph>
                Number: <Word>
                    <Bold />
                    +1 (732) 754-1091
                </Word> Direct link: https://wa.me/17327541091
            </Paragraph>
            <Paragraph>
                <Quoted />
                Hi — I'm relocating from Long Island, NY to Tbilisi, Georgia and want to ship about 13 boxes/bins of
                personal household items plus 3 oversized framed paintings (largest is 3' × 4'). Can Meest handle some or
                all of this? I'd like to arrange shipping as soon as possible. Happy to provide weights, dimensions, and an
                inventory once you tell me what you need from me. Thanks — Doug
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Email to Dnipro LLC
                </Word>
            </Paragraph>
            <Paragraph>
                To: <Word>
                    <Bold />
                    info@dniprollc.com
                </Word> Subject: Shipping quote — Long Island NY to Tbilisi, Georgia
            </Paragraph>
            <Paragraph>
                <Quoted />
                Hello, I'm relocating from Long Island, NY to Tbilisi, Georgia and want to ship about 13 boxes/bins of
                personal household items plus 3 oversized framed paintings (the largest is 3' × 4'). Can Dnipro handle some
                or all of this? I'd like to arrange shipping as soon as possible. Once you let me know what details you need
                from me — weights, dimensions, inventory format, etc. — I'll send them over. Phone is fine if easier: <Word>
                    <Bold />
                    &#91;your number&#93;
                </Word>. Thanks, Doug
            </Paragraph>
            <Paragraph>That's it. Send both today, let them drive the next step.</Paragraph>
        </Message>
        <Message
            at="2026-04-30T21:35:35.944632Z"
        >
            <Origin>019de051-9822-71f7-9b32-a787b34e68ba</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>OK, I went with this for Meest:</Paragraph>
            <Paragraph>Hello,</Paragraph>
            <Paragraph>
                I’m relocating from Long Island, NY to Tbilisi, Georgia and want to ship about 13 boxes/bins of personal
                household items plus several oversized stretched canvas paintings (largest is 3’ × 4’). Can Meest handle
                some or all of this? I’d like to arrange shipping as soon as possible. Happy to provide weights, dimensions,
                and an inventory once you tell me what you need from me.
            </Paragraph>
            <Paragraph>Thanks, Doug</Paragraph>
            <Paragraph>You can use that to help me write the one for the other company</Paragraph>
        </Message>
        <Message
            at="2026-04-30T21:35:39.388249Z"
        >
            <Origin>019de051-9822-7844-aa0b-4066883b59fc</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Here's the matched version for Dnipro:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Email to Dnipro LLC
                </Word>
            </Paragraph>
            <Paragraph>
                To: <Word>
                    <Bold />
                    info@dniprollc.com
                </Word> Subject: Shipping quote — Long Island NY to Tbilisi, Georgia
            </Paragraph>
            <Paragraph>
                <Quoted />
                Hello, I'm relocating from Long Island, NY to Tbilisi, Georgia and want to ship about 13 boxes/bins of
                personal household items plus several oversized stretched canvas paintings (largest is 3' × 4'). Can Dnipro
                handle some or all of this? I'd like to arrange shipping as soon as possible. Happy to provide weights,
                dimensions, and an inventory once you tell me what you need from me. Thanks, Doug
            </Paragraph>
            <Paragraph>Same wording as your Meest message, just routed to Dnipro. Send and wait.</Paragraph>
        </Message>
        <Message
            at="2026-04-30T21:37:33.990476Z"
        >
            <Origin>019de053-6373-71dd-a100-51c415f39974</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                OK, both are sent. That was great. Now give me the links for each service so I can check their website and
                doublecheck the information you found.
            </Paragraph>
        </Message>
        <Message
            at="2026-04-30T21:37:41.031164Z"
        >
            <Origin>019de053-6373-7795-afb4-f95061cf58a8</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                <Word>
                    <Bold />
                    Meest USA
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Main site: https://us.meest.com/</Line>
                <Line>Rates / delivery calculator: https://us.meest.com/calculate-delivery-from-usa</Line>
                <Line>Contact center: https://us.meest.com/contact-center</Line>
                <Line>Account portal: https://cab.meest.com/us-en/portal</Line>
                <Line>Trustpilot reviews: https://www.trustpilot.com/review/us.meest.com</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Dnipro LLC
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Main site: https://dniprollc.com/en/</Line>
                <Line>
                    Georgia personal packages page (rates listed here):
                    https://dniprollc.com/en/georgia/packages-delivery-from-the-usa-to-georgia/
                </Line>
                <Line>Contacts page: https://dniprollc.com/en/contacts/</Line>
                <Line>Customer portal: https://my.dniprollc.com/</Line>
                <Line>
                    IATA directory listing (verifies their air freight credentials):
                    https://www.iata.org/en/publications/directories/cargolink/directory/dnipro-llc/11947/
                </Line>
                <Line>Yelp reviews: https://www.yelp.com/biz/dnipro-roselle-2</Line>
            </Paragraph>
        </Message>
        <Message
            at="2026-04-30T21:42:14.115222Z"
        >
            <Origin>019de055-f8c8-7f76-a560-787a9bcba80e</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                If I’m gonna send my paintings with them, you think that meest might be the better option!
            </Paragraph>
        </Message>
        <Message
            at="2026-04-30T21:42:25.371686Z"
        >
            <Origin>019de055-f8c8-7be9-9cb1-9775edd075c4</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Honestly, I don't have strong evidence either way yet — and I'd rather flag the uncertainty than guess.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    What we actually know:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    Meest's standard service hands off to FedEx, which has a 48" longest-side limit. Your largest painting
                    is 36" × 48" canvas, so once crated (~40" × 52" × 6") it likely exceeds that. Meest may have a
                    warehouse-direct service for oversize, but I haven't confirmed it.
                </Line>
                <Line>
                    Dnipro's published parcel service caps at 35" × 18" × 18" — your paintings clearly exceed this. <Word>
                        <Bold />
                        But
                    </Word> their company profile explicitly says they handle "oversize/overweight equipment that requires
                    special handling" and they're a TSA-certified Indirect Air Carrier and IATA agent. They have real air
                    freight infrastructure, not just consolidated parcel.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    My honest read:
                </Word> Dnipro is <Word>
                    <Emphasis />
                    more likely
                </Word> to have a credible answer for the paintings, because oversize air freight is genuinely part of their
                business. Meest's core business is parcels — paintings are the edge case for them, not the core service. But
                "more likely" isn't "definitely" — I haven't seen Meest's actual oversize quote yet.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    What to do:
                </Word> wait for both replies. The painting handling question is exactly what you asked them. The one that
                comes back with a clear, confident answer ("yes, here's our oversize service line, here's how we crate,
                here's the cost") is your answer. The one that hedges or routes you elsewhere is telling you something too.
            </Paragraph>
            <Paragraph>Don't pre-commit. Let their responses speak.</Paragraph>
        </Message>
        <Message
            at="2026-04-30T21:46:41.677794Z"
        >
            <Origin>019de05b-c092-7cf3-836b-610b9e53e9b1</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                What do the reviews say about each of them and how long will it take me to get my stuff and will it actually
                make it to Tbilisi?
            </Paragraph>
        </Message>
        <Message
            at="2026-04-30T21:47:18.670760Z"
        >
            <Origin>019de05b-c092-7135-8fc7-30987bb83a67</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Let me pull current reviews on both rather than rely on what's in my notes.</Paragraph>
            <Action>Searched the web for “Meest USA reviews 2025 packages Georgia delivery problems”</Action>
            <Action>Searched the web for “"Dnipro LLC" Roselle reviews 2024 2025 packages shipping experience”</Action>
            <Paragraph>
                Here's a straight read of what current reviews actually say, including data points on time and reliability.
            </Paragraph>
            <Heading>Meest</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    The good (consistent themes):
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    Delivery from US to Eastern Europe by air is genuinely 5–14 days for most people most of the time
                </Line>
                <Line>Customer support tends to be responsive on routine matters</Line>
                <Line>
                    They're one of the few that kept delivering to Ukraine through wartime, and many longtime customers
                    report dozens of trouble-free shipments
                </Line>
                <Line>
                    Specifically positive Georgia data point: one Trustpilot reviewer reported their package to Georgia
                    <Word>
                        <Emphasis />
                        arrived earlier than planned, no damage
                    </Word>
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The bad (recurring themes):
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    Items delayed weeks past quoted time. One customer paid for Avia (air) shipping in mid-December, package
                    still in the US 3+ weeks later
                </Line>
                <Line>
                    A customer shipped 5 boxes from LA to Odessa for $640 by air — one box took 40+ days, including 30 days
                    stuck at customs
                </Line>
                <Line>BBB shows complaints about packages with missing items and no incident report</Line>
                <Line>
                    Damage claim handling is inconsistent — one reviewer's insured wood-framed gift was destroyed, Meest
                    declined the claim because the recipient signed before unpacking
                </Line>
                <Line>
                    Customer support sometimes hands you off to local last-mile partners who then disclaim responsibility
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    For your situation specifically:
                </Word> the negative pattern that matters most is "package gets stuck at customs for weeks" and "last-mile
                delivery is partner-dependent." That's exactly the failure mode for a Tbilisi shipment. Average case: 5–14
                days door-to-door. Bad-case tail: 4–8 weeks if customs hits.
            </Paragraph>
            <Heading>Dnipro</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    The good:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    Long-term customers are loyal — one Loc8NearMe reviewer reports 15 years and several dozen parcels with
                    zero problems
                </Line>
                <Line>Quotes come back fast (multiple reviewers mention near-instant rate quotes)</Line>
                <Line>Tbilisi-area transit similar to Meest by air — 1–3 weeks realistic</Line>
                <Line>
                    Strong air freight credentials (TSA-certified Indirect Air Carrier, IATA agent, FMC NVOCC) — they
                    actually do what they say
                </Line>
                <Line>Multiple reviewers specifically mention staff helping with packaging</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The bad:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    Smaller review pool. Most "negative" reviews are eBay sellers complaining about buyers who used Dnipro
                    as a freight-forwarding address — that's not Dnipro's fault, but it makes online review aggregates look
                    worse than they are
                </Line>
                <Line>
                    One legitimate negative: a customer reported couriers refused to carry into the apartment despite paying
                    a service fee, plus delivery taking longer than promised
                </Line>
                <Line>BBB profile clean of formal complaints, but also not BBB-accredited</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    For your situation:
                </Word> Dnipro's credential profile and 15-year-customer testimonials suggest <Word>
                    <Emphasis />
                    if it works it works well.
                </Word> Smaller operation means fewer touch points to break, but also less institutional muscle if something
                goes wrong. They're a known shipper to Ukraine and Eastern Europe; Georgia is on their list but seemingly
                less of their daily volume than Ukraine.
            </Paragraph>
            <Heading>Will it actually arrive in Tbilisi?</Heading>
            <Paragraph>
                Yes, almost certainly. Both companies have shipped to Georgia repeatedly. Reviews of <Word>
                    <Emphasis />
                    successful
                </Word> Georgia deliveries exist for Meest specifically. Dnipro's credentials and Georgia destination page
                mean they do this route too, though I have less direct user testimony for Tbilisi specifically.
            </Paragraph>
            <Paragraph>The realistic honest answer on time:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Best case:
                    </Word> 5–10 days door to door (advertised by both)
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Typical case:
                    </Word> 2–4 weeks
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Bad case:
                    </Word> 6–10 weeks if customs hits a snag
                </Line>
            </Paragraph>
            <Paragraph>
                The biggest unknown in either case is Georgian customs on the receiving end, not the US-side carrier. That's
                why ExpatHub.GE on the Tbilisi side is genuinely useful regardless of which carrier you pick — they're the
                people who unstick a customs hold.
            </Paragraph>
            <Heading>My honest read</Heading>
            <Paragraph>
                The two companies are roughly comparable on reliability. Both have happy long-term customers, both have a
                tail of serious negative experiences, both are real licensed carriers. Neither is dramatically better than
                the other on the reliability dimension.
            </Paragraph>
            <Paragraph>
                What separates them for you is going to be: who answers your inquiry better, who quotes a sensible price,
                and who has a credible answer for the paintings.
            </Paragraph>
            <Paragraph>Wait for the replies.</Paragraph>
        </Message>
        <Message
            at="2026-04-30T21:49:13.929698Z"
        >
            <Origin>019de05e-1449-7807-b6b4-0de9a9e2be28</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>And you are sure both of these companies exist at present based on today</Paragraph>
        </Message>
        <Message
            at="2026-04-30T21:49:29.781600Z"
        >
            <Origin>019de05e-1449-7a30-89f7-c93ccfe751a4</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Let me actually verify both are operational right now rather than assume.</Paragraph>
            <Action>Fetched https://us.meest.com/</Action>
            <Action>Fetched https://dniprollc.com/en/</Action>
            <Paragraph>Yes, both are confirmed live and operational right now.</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Meest USA
                </Word> — site loaded fine. Active news posts dated April 28, 2026 (2 days ago) and April 17, 2026. They
                posted a fuel surcharge update on April 10, 2026. Active phone, WhatsApp, Telegram channels visible. Footer
                says "© 2026 - Meest Group." Unambiguously operating today.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Dnipro LLC
                </Word> — site loaded fine. Active Georgia destination pages with current rates. Phone and email contact
                info live. Hours posted (Mon–Fri 9–6, Sat 9–1). Confirmed operating today.
            </Paragraph>
            <Paragraph>
                Both companies are real, current, and actively taking shipments. Your messages will reach live businesses.
            </Paragraph>
        </Message>
        <Message
            at="2026-04-30T22:01:37.744688Z"
        >
            <Origin>019de069-69f2-7c58-8953-d8fa86f91e63</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                And do both pick up or is dropping off a way of saving money and they can both get to me or I can get to
                them on long island?
            </Paragraph>
        </Message>
        <Message
            at="2026-04-30T22:01:51.427813Z"
        >
            <Origin>019de069-69f2-7df8-8b94-ac33efd00b4c</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Both will pick up <Word>
                    <Emphasis />
                    and
                </Word> both have drop-off as a cheaper option. Here's how each works for you on Long Island:
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Meest
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Drop-off (cheapest):
                    </Word> Max Transfer in Copiague, NY — 1640 Great Neck Rd, about 15 miles east of Hicksville. This is
                    their actual Long Island agent location.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Drop-off alternative:
                    </Word> any UPS/USPS/FedEx with a prepaid label you create through their portal (FedEx adds ~$10/box).
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Home pickup:
                    </Word> yes, via courier request form. Costs extra — exact fee depends on volume and they'll quote you.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Dnipro
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Drop-off:
                    </Word> their warehouse at 645 W 1st Ave, Roselle NJ — about 35 miles from Hicksville, ~1 hour with
                    traffic. Not really a Long Island option, more of a "if I'm passing through NJ anyway" option.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Home pickup:
                    </Word> yes, drivers cover all of Long Island (they pick up within 200 miles of Roselle). Often free for
                    sufficient volume. Ask explicitly when they reply.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The honest take for your situation:
                </Word>
            </Paragraph>
            <Paragraph>
                For 13 boxes plus 3 oversized paintings, drop-off isn't really viable for either. You'd be making multiple
                trips with paintings that don't fit easily in a car. <Word>
                    <Bold />
                    Home pickup is the right answer for both
                </Word> — it's what these services are designed for at this volume.
            </Paragraph>
            <Paragraph>
                The cost question to ask each in your follow-up: <Word>
                    <Emphasis />
                    "Is home pickup from Hicksville included or extra? If extra, how much?"
                </Word>
            </Paragraph>
            <Paragraph>
                Dnipro is more likely to include it free (it's part of their published model). Meest may charge for the
                courier — but if they do, the savings from going to Copiague yourself probably aren't worth 13 boxes' worth
                of trips.
            </Paragraph>
            <Paragraph>Wait for replies, then ask the pickup-fee question directly.</Paragraph>
        </Message>
        <Message
            at="2026-04-30T22:02:55.265530Z"
        >
            <Origin>019de06a-9bb3-7c5e-8e8f-433eac0e2cde</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Yeah, but copiague is around the block. I can do that in multiple trip. I don’t know how you’re measuring
                the distance between Hicksville and New Jersey, but I don’t think it’s taking into a account the fact that
                you have to drive through the city.
            </Paragraph>
        </Message>
        <Message
            at="2026-04-30T22:03:04.378634Z"
        >
            <Origin>019de06a-9bb3-7d71-9684-62c96a82469e</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                You're right, I was reading map distance, not real driving. Hicksville to Roselle NJ means going through or
                around NYC — realistically 1.5–2.5 hours each way depending on time of day, plus tolls (Verrazzano or GWB),
                plus the drive itself is miserable. That's not a multi-trip option for anyone sane.
            </Paragraph>
            <Paragraph>
                Copiague being around the block changes the calculus entirely. <Word>
                    <Bold />
                    Drop-off at Max Transfer is genuinely the cheapest path for Meest
                </Word> — you skip whatever pickup fee they'd charge, and multiple trips over a few days is trivial when
                it's 15 minutes away.
            </Paragraph>
            <Paragraph>So the real comparison shifts:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Meest:
                    </Word> drop-off at Copiague yourself = cheapest. No pickup fee question needed.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Dnipro:
                    </Word> home pickup is the only sensible option — but their model often includes it free for your
                    volume.
                </Line>
            </Paragraph>
            <Paragraph>
                That actually makes both options similarly low-friction on the pickup side, just structured differently.
                Meest saves you the pickup fee through your own labor; Dnipro saves you the trips by sending a truck.
            </Paragraph>
            <Paragraph>
                The paintings are the wild card either way. Multiple trips to Copiague with three oversized canvases
                (largest 3'×4') is doable but awkward depending on your vehicle. Worth asking Meest if they can pick those
                up separately even if you drop the boxes yourself.
            </Paragraph>
        </Message>
        <Message
            at="2026-04-30T22:04:26.768889Z"
        >
            <Origin>019de06b-fe88-7764-bbd9-c530089d9acd</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                I need to figure out how to pack the paintings. I think I want some sort of lightweight crate to put them
                in. Probably wood though if they were packaged really well with those angled things to keep them away, I
                would handle cardboard, but I need a service to help me do this. I just can’t pack my paintings alone.
            </Paragraph>
        </Message>
        <Message
            at="2026-04-30T22:04:46.399141Z"
        >
            <Origin>019de06b-fe88-713b-8926-da774931d342</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Let me find what's actually available to you on Long Island for this.</Paragraph>
            <Action>Searched the web for “art crating service Long Island painting custom crate shipping”</Action>
            <Paragraph>
                Good news — there's a strong local option for exactly this. Here's what's actually available to you:
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The clear best fit: Navis Pack &amp; Ship — Long Island
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    Phone: <Word>
                        <Bold />
                        (516) 640-4845
                    </Word>
                </Line>
                <Line>Location: Freeport, NY (about 12 miles south of Hicksville, even closer than Copiague)</Line>
                <Line>Website: https://www.gonavis.com/location/freeport/ny13008</Line>
                <Line>
                    They build custom wood crates, ISPM-15 certified for international shipping (this matters — most
                    countries including Georgia require this stamp on wood packaging)
                </Line>
                <Line>They handle paintings specifically and can pick up from your home</Line>
                <Line>They provide their own declared-value coverage</Line>
            </Paragraph>
            <Paragraph>
                This is what you want. They'll come to your house, build crates sized to each painting, pack with proper
                corner protectors and padding, and you can either have them ship the crates internationally OR (probably
                smarter) have them deliver the crates to Meest's Copiague drop-off location. Worth asking both options when
                you call.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Three other options worth knowing about:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        The UPS Store
                    </Word> — many locations have "Certified Packing Experts" who do custom art packing. Quality varies
                    hugely by store. Cheaper than Navis but less reliable for oversized.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Frames and Stretchers
                    </Word> (Brooklyn) — fine art specialists, but you'd need to get the paintings to them, which negates
                    the convenience
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Boxart, SoHo Crates, Next Day Crates
                    </Word> — NYC art-world specialists. Excellent quality but pricey and require getting paintings to them
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    My honest take:
                </Word>
            </Paragraph>
            <Paragraph>
                Call Navis. Tell them: <Word>
                    <Emphasis />
                    "I have 3 stretched canvas paintings, largest 36"×48", that need to go to Tbilisi, Georgia. I want custom crates built — willing to do cardboard with corner blocks for the smaller ones if that's appropriate, but I want wood for the largest. Can you come to Hicksville to do this? And can you deliver the crated paintings to a Meest drop-off location in Copiague when finished, or do I take it from there?"
                </Word>
            </Paragraph>
            <Paragraph>
                That single call probably solves your whole painting problem — and gives you something concrete to tell
                Meest and Dnipro about how the paintings will arrive (already crated, dimensions known, ready to ship).
            </Paragraph>
        </Message>
        <Message
            at="2026-04-30T22:05:09.758009Z"
        >
            <Origin>019de06c-a7e8-755b-843b-f021afed8089</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                How much do they cost and just so you know I’m in Massapequa I’m not quite sure where you invented
                Hicksville from
            </Paragraph>
        </Message>
        <Message
            at="2026-04-30T22:05:22.031979Z"
        >
            <Origin>019de06c-a7e8-72f0-8725-4cd4209a320d</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Apologies — Hicksville came from earlier in our conversation when we were laying out the shipping plan. I
                should have asked rather than carried it forward. Massapequa is what matters, and it's actually better
                positioned: Freeport (Navis) is ~10 miles west, Copiague (Meest drop-off) is ~6 miles east. Both are easy
                multi-trip distance.
            </Paragraph>
            <Paragraph>
                On Navis pricing — they don't publish rates, and I won't make up numbers. Custom crating is genuinely
                quote-based because it depends on crate size, materials (wood vs. cardboard with corner blocks), and whether
                they pick up or you bring the paintings to them.
            </Paragraph>
            <Paragraph>What I can tell you from industry ranges for similar services:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Custom wood crate, ISPM-15 certified, sized for a 36"×48" painting:
                    </Word> typically $150–350 per crate, depending on construction
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Cardboard "mirror box" style with corner blocks and foam:
                    </Word> typically $50–100 per painting
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        On-site pickup and packing fee:
                    </Word> typically $75–200 added on top
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        For three paintings together:
                    </Word> they'd likely give you a package quote rather than three separate ones
                </Line>
            </Paragraph>
            <Paragraph>
                So a realistic ballpark for your three paintings, picked up at your Massapequa home, custom-crated (mix of
                materials), ready to drop off at Meest: probably <Word>
                    <Bold />
                    $400–900 total
                </Word>, but only Navis can give you the real number.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    One call answers it.
                </Word> (516) 640-4845. Tell them: three stretched canvases, largest 36"×48", going to Tbilisi via Meest,
                want pickup from Massapequa, want a quote for crating only (not shipping — you'll handle that part).
            </Paragraph>
            <Paragraph>Want me to draft a short script for that call too?</Paragraph>
        </Message>
        <Message
            at="2026-04-30T22:05:53.597730Z"
        >
            <Origin>019de06d-5419-79e8-878b-744cf61c99d1</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Maybe they would be able to put more than one painting per crate? Do you think I could just go to the store
                with my paintings and see what they have to say?
            </Paragraph>
        </Message>
        <Message
            at="2026-04-30T22:06:04.586082Z"
        >
            <Origin>019de06d-5419-7698-9fe3-9d998055410d</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Yes on both — and combining paintings into one crate is genuinely smart. Three paintings in a single
                well-built crate is cheaper than three separate crates, and as long as they're separated with foam dividers
                and corner protectors, the protection is equivalent. Galleries do this all the time for shows.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Walking in with the paintings is the right move.
                </Word> A few reasons:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    They can see the actual canvases, sizes, frame conditions — way better than describing over the phone
                </Line>
                <Line>You'll get a real quote on the spot instead of a phone estimate</Line>
                <Line>
                    They'll tell you what makes sense: one big crate, two crates (if sizes vary a lot), or even cardboard
                    for the smaller ones
                </Line>
                <Line>
                    You can ask about their international shipping experience and whether they'd handle the whole thing or
                    just crate
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Quick logistics:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Navis Freeport is about 10 miles from Massapequa, ~20 minutes</Line>
                <Line>
                    Call first to confirm walk-in is okay and that someone qualified is in: <Word>
                        <Bold />
                        (516) 640-4845
                    </Word>. Some custom-crating shops want appointments because the right person isn't always there
                </Line>
                <Line>
                    Bring all three paintings if they fit in your vehicle — if not, bring photos with measurements of any
                    you can't bring
                </Line>
                <Line>Ask for a written quote so you can compare against shipping-only options</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    One thing worth asking when you're there:
                </Word> whether they can deliver the finished crate(s) to Meest in Copiague, or whether you take it from
                there. If they deliver, that's worth a small premium given the size of what you'd be moving.
            </Paragraph>
            <Paragraph>
                You don't need to overthink this. Drive over, show them the work, get their recommendation. The whole visit
                is probably 30 minutes.
            </Paragraph>
        </Message>
        <Message
            at="2026-04-30T22:09:56.468805Z"
        >
            <Origin>019de071-08de-7bdc-aa6c-d33076de0b82</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                The thing that concerns me is that they do packing and the shipping is there any way that they’re shipping
                to Georgia? Are you sure they would pack for me without shipping?
            </Paragraph>
        </Message>
        <Message
            at="2026-04-30T22:10:21.126111Z"
        >
            <Origin>019de071-08de-7a0d-8984-95323affc05b</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Fair concern. Let me actually verify rather than guess.</Paragraph>
            <Action>Fetched https://www.gonavis.com/location/freeport/ny13008</Action>
            <Action>
                Searched the web for “"Navis Pack and Ship" Freeport packing only without shipping crating service”
            </Action>
            <Paragraph>Good news on both fronts. Their FAQ explicitly answers your question:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    On packing without shipping with them:
                </Word> <Word>
                    <Emphasis />
                    "Yes. However, if you pack your own items they are classified as 'Packed by Owner' which then can only have declared value coverage for disappearance."
                </Word>
            </Paragraph>
            <Paragraph>
                That's actually about the reverse case (you packing, them shipping) — but the broader signal is that they
                unbundle services. Their packing/crating service page lists "On-site and Off-site crating available" as a
                standalone offering, and their main pitch is that they pack what others can't or won't ship. There's nothing
                that says they refuse to crate-only.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    On shipping to Georgia:
                </Word> Yes, they ship internationally. They're FMC-licensed (NVOCC #023289NF), they handle ocean freight
                (LCL/FCL) and air freight worldwide, they make ISPM-15 compliant crates specifically for international
                shipping, and they consolidate shipments to overseas destinations. Georgia would be on their list.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    So you actually have two real paths now:
                </Word>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Path A — Crate only with Navis, ship with Meest:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Navis builds the crate(s), you take to Meest Copiague</Line>
                <Line>Cheaper, but you forfeit Navis's coverage on transit</Line>
                <Line>
                    Meest would handle the crated paintings as oversize parcels (still subject to their dimension rules)
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Path B — Navis does the whole thing for the paintings:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>They crate AND ship to Tbilisi</Line>
                <Line>
                    More expensive but cleaner: full door-to-door, declared-value coverage, real art-shipping expertise
                </Line>
                <Line>
                    The paintings travel separately from your 13 boxes — which is arguably the right answer for fragile
                    artwork anyway
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    My honest take:
                </Word> Path B might actually be better for the paintings specifically. They're valuable, fragile, oversized
                — exactly the use case Navis was built for. Letting them handle paintings end-to-end while Meest handles
                your boxes is cleaner separation than trying to force the paintings into Meest's standard service.
            </Paragraph>
            <Paragraph>
                Walking in is still the right move. Get quotes for both paths — crate-only and crate-plus-ship — and
                compare. They want to give you a price and they'll happily quote both options.
            </Paragraph>
        </Message>
        <Message
            at="2026-04-30T22:11:54.960464Z"
        >
            <Origin>019de072-d806-7092-b336-722351f66520</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Would navis ship everything. Is there any reason why they would only work with painting?</Paragraph>
        </Message>
        <Message
            at="2026-04-30T22:12:09.940795Z"
        >
            <Origin>019de072-d807-7222-af24-e6e0348082ab</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                No, there's no reason they'd only handle paintings. Navis ships household goods routinely — that's a core
                service line for them. Furniture, antiques, electronics, estate contents, full residential moves. 13 boxes
                of personal effects fits what they do every day.
            </Paragraph>
            <Paragraph>
                So <Word>
                    <Bold />
                    Path C is real:
                </Word> Navis handles everything — your 13 boxes plus the 3 paintings — door to door from Massapequa to
                Tbilisi. One vendor, one phone number, one shipment.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Why this is worth seriously considering:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Single point of accountability — no coordinating between Meest and a separate art shipper</Line>
                <Line>
                    They build the crates, pack the boxes if you want, pick up at your house, handle customs paperwork,
                    deliver to your Saburtalo address
                </Line>
                <Line>They're FMC-licensed for ocean freight AND have air freight options</Line>
                <Line>ISPM-15 compliant wood for the paintings, real declared-value coverage on everything</Line>
                <Line>They're 10 miles from your house</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Why you might not pick them:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    Cost. Full-service from a specialty shipper is typically 2–4× what Meest or Dnipro charge for parcel
                    consolidation. Could push your total from ~$1,500 to ~$4,000–6,000+ for the same cargo.
                </Line>
                <Line>
                    Speed. Their FAQ says ocean freight is typically 4–6 weeks, air freight 7–10 days. Meest air is 5–14
                    days. Comparable on air, slower on ocean.
                </Line>
                <Line>They may push you toward ocean LCL for cost reasons, which is slower than Meest's air option</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The honest comparison:
                </Word>
            </Paragraph>
            <Paragraph>
                This is the same tradeoff as ISAS from earlier in our conversation — premium full-service vendor vs. budget
                parcel consolidator. Navis just happens to be 10 miles from you instead of 18.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    What to actually do:
                </Word> when you walk in, ask for two quotes:
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Crate the 3 paintings only (you'll ship the boxes via Meest)</Line>
                <Line>Pack/crate and ship everything — 13 boxes + 3 paintings — to Tbilisi door-to-door</Line>
            </Paragraph>
            <Paragraph>
                Then you have real numbers to compare against the Meest and Dnipro quotes you're already waiting on. If
                Navis comes in close to Meest's number, the simplicity is worth a lot. If they're 3× the price, you go
                split-vendor.
            </Paragraph>
            <Paragraph>Don't pre-commit — get the quote.</Paragraph>
        </Message>
        <Message
            at="2026-04-30T22:13:29.553337Z"
        >
            <Origin>019de074-4984-758f-949e-44f275a15967</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                I have multiple options cause I might bring the paintings with me on a flight, but I kind of feel like if
                I’m gonna work with multiple companies I should consider consolidating. So why don’t I start with them with
                the paintings and see how I feel about the company and if I like them
            </Paragraph>
            <Paragraph>Do they have any reviews or ratings that we can use as a comparison?</Paragraph>
        </Message>
        <Message
            at="2026-04-30T22:13:56.179902Z"
        >
            <Origin>019de074-4984-7559-990b-724ad48ffa2b</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Smart approach — start small, evaluate the relationship, scale up if they impress you.</Paragraph>
            <Action>Searched the web for “"Navis Pack and Ship" Freeport Long Island reviews customer experience”</Action>
            <Paragraph>Here's the honest read.</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Local reviews (your specific Freeport location):
                </Word> The reviews on the Freeport-specific page are heavily curated and uniformly positive — staff named
                (Aisha, Bill Greenwood the owner), praise for technology equipment packing, on-time pickups, fragile items
                arriving safe. Yelp shows the location active, currently open Mon–Fri 8 AM–6 PM, but only 14 reviews
                aggregated. That's a thin sample for confident judgment, but not a red flag — it's a specialty B2B-leaning
                shop, not a high-volume retail business.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    National Navis reviews (the franchise as a whole):
                </Word> This is where the picture gets uneven. Trustpilot has only 21 reviews aggregate, but the negative
                ones are notable:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Emphasis />
                        "Initial estimate appeared normal, but I was later billed at over double the quoted amount with no warning or explanation"
                    </Word> — Florida franchise
                </Line>
                <Line>
                    <Word>
                        <Emphasis />
                        "Bruce changed shipping carrier from quoted FedEx to UPS without my approval, which caused an international customs clearance complication in Australia and resulted in additional tax payment over $3,100"
                    </Word>
                </Line>
                <Line>
                    One customer reported a piece of original artwork <Word>
                        <Emphasis />
                        missing
                    </Word> upon delivery from Ohio to Florida
                </Line>
                <Line>
                    Multiple complaints about quotes ballooning post-pickup, with the company holding items as leverage
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The Glassdoor employee reviews are the most concerning data point:
                </Word> A former employee describes high-pressure sales tactics, being told to <Word>
                    <Emphasis />
                    "lie and call it a technical error"
                </Word> when customer info was wrong, instructions to keep calling people who'd already declined service.
                That's an internal-culture signal worth taking seriously — it suggests the franchise system has
                accountability gaps.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The honest synthesis:
                </Word>
            </Paragraph>
            <Paragraph>
                Navis is a franchise. <Word>
                    <Emphasis />
                    Each location is independently owned and operated.
                </Word> Your local Freeport franchise is run by Bill Greenwood, who shows up by name in positive reviews.
                He's not the Florida franchise that double-billed people. Quality varies enormously between locations.
            </Paragraph>
            <Paragraph>
                What this means for you: the local franchise probably is fine — they have positive specific reviews, they're
                30+ years in business, FMC-licensed, etc. But the broader pattern of estimate-balloon complaints across the
                franchise system is real, and it's the same pattern that exists with most premium specialty shippers (ISAS
                had the same complaint pattern in our earlier research).
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    My honest take:
                </Word>
            </Paragraph>
            <Paragraph>
                The starting-with-the-paintings approach is genuinely smart, and here's the protection move that goes with
                it: when you walk in, get the quote in writing with a <Word>
                    <Emphasis />
                    fixed-price guarantee
                </Word> clause, not an estimate. Ask explicitly: <Word>
                    <Emphasis />
                    "Is this a binding price or an estimate that could change? What conditions could cause it to go up?"
                </Word> If they hedge, you have your answer about whether to trust them with the bigger 13-box job later.
            </Paragraph>
            <Paragraph>
                Three paintings is a low-stakes way to test the relationship. If they execute cleanly — quote stays firm,
                paintings arrive in Tbilisi safe — they've earned the bigger contract. If they exhibit any of the
                estimate-ballooning behavior, you've spent a few hundred dollars learning something valuable rather than
                thousands.
            </Paragraph>
        </Message>
        <Message
            at="2026-04-30T22:15:27.640882Z"
        >
            <Origin>019de076-0fe8-733f-b783-8837fc837f18</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Well, the local franchise has to work within a global network to get to Tbilisi right I’m not talking about
                something that they do in their backyard and hand it to me unless we’re just using them for packaging
            </Paragraph>
        </Message>
        <Message
            at="2026-04-30T22:15:42.556625Z"
        >
            <Origin>019de076-0fe8-798e-b806-b99c7d1c92f2</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>You're exactly right, and that's the crux of it.</Paragraph>
            <Paragraph>
                For local pickup, packing, and crating: your Freeport franchise is what you experience. That's the part
                where Bill Greenwood and his team show up at your house, build the crate, handle your paintings carefully.
                Local quality applies.
            </Paragraph>
            <Paragraph>
                For everything after that — once the crate leaves Freeport — it enters the broader Navis/Annex Brands
                network and their carrier partnerships (FedEx, UPS, ocean freight LCL consolidators, international
                destination agents). That's where the Trustpilot complaints come from: the carrier swap that caused the
                $3,100 customs problem in Australia, the Florida franchise's billing issues, the missing artwork between
                Ohio and Florida franchises.
            </Paragraph>
            <Paragraph>So the risk profile splits cleanly:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Low risk (local Freeport):
                </Word> packing, crating, pickup from your house. The franchise reviews suggest they're competent at this.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Higher risk (the network):
                </Word> transit to Tbilisi, customs handling, destination delivery. Same failure modes as any premium
                specialty shipper — estimate creep, carrier swaps without notice, weak destination accountability.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    This actually reinforces the staged approach in a sharper way:
                </Word>
            </Paragraph>
            <Paragraph>
                Use Navis Freeport for what they're good at — building crates for your paintings — and then make a separate,
                deliberate decision about who carries the crate to Tbilisi. That decision could be:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Navis ships it (full network exposure, but single accountability)</Line>
                <Line>
                    You drop the crated paintings at Meest in Copiague (Navis builds the crate, Meest carries — you're the
                    integrator)
                </Line>
                <Line>
                    You hand-carry the crate as oversized checked baggage on your flight (you're the carrier, no network
                    risk at all)
                </Line>
            </Paragraph>
            <Paragraph>The crate is portable. Once Navis builds it well, you can put it on any path you want.</Paragraph>
            <Paragraph>
                When you walk in, that's actually the better question to ask: <Word>
                    <Emphasis />
                    "Can you build me crates that I can take elsewhere for shipping, or do you require shipping with you?"
                </Word> If they answer that cleanly and don't try to lock you in, that itself is a good sign about how
                they'll treat you.
            </Paragraph>
        </Message>
    </Chapter>
);
