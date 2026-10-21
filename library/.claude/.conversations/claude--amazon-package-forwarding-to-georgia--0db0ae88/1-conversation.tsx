import { Bold, Chapter, Date, Emphasis, Heading, Line, List, Math, Paragraph, Table, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Action, Attachment, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[25 June 2026](2026-06-25)</Date>
        </Dated>
        <Title>[[ Conversation ]]</Title>
        <Message
            at="2026-06-25T15:22:31.419668Z"
        >
            <Origin>019eff60-1f42-7cd9-b55b-39d47df34e30</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                We were having a conversation about amazong package forwarding to Georgia but it got interruped. IF you can
                read the last convo in this project please do, I can't navigate to it. Weird
            </Paragraph>
            <Paragraph>
                We are looking up services that would allow me to forward things from US amazon and maybe other US sites to
                Georgia, the country where I live
            </Paragraph>
            <Paragraph>
                You need to look up the options, but need to search by recency looking at reviews as time ordered relatie to
                present. USA2Georgia I think initially looks good but ends up not being.
            </Paragraph>
            <Paragraph>
                And then, upon surveying the viable options, lets talk about value, complexity, cost, time, etc... etc...
            </Paragraph>
        </Message>
        <Message
            at="2026-06-25T15:24:41.996344Z"
        >
            <Origin>019eff60-1f42-76a0-bf61-dda12708b366</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>I'll pull up that interrupted conversation first, then dig into the forwarding options.</Paragraph>
            <Action>Searched past conversations for “Amazon package forwarding Georgia USA2Georgia shipping”</Action>
            <Paragraph>
                I found it — and good news, the research had gotten substantial before it cut off. Let me pull the full
                thread so I don't make you repeat ground already covered.
            </Paragraph>
            <Action>Fetched https://claude.ai/chat/ec39ed14-0e31-4c0c-bfe1-670aea639f17</Action>
            <Paragraph>
                I can't open the chat URL directly, but the search surfaced enough of it to reconstruct where you left off —
                and your instinct is exactly right. The prior research had already established USA2Georgia's decline pattern
                (empty-box incidents in 2023, deliveries consistently running 3+ weeks, BBB non-responsiveness, a Trustpilot
                downward trajectory) and was mid-way through vetting the names that a February 2026 expat guide actually
                ranked <Word>
                    <Emphasis />
                    above
                </Word> it: <Word>
                    <Bold />
                    Onex
                </Word> and <Word>
                    <Bold />
                    Inex
                </Word>, both Georgian-local, plus <Word>
                    <Bold />
                    KiwiPost
                </Word>. That's where it cut off.
            </Paragraph>
            <Paragraph>
                Let me finish that vetting properly — recency-ordered, with reviews read relative to now (June 2026), and
                searching in Georgian and Russian where the real local signal lives.
            </Paragraph>
            <Action>Searched the web for “onex.ge მიმოხილვა გამოცდილება 2026 ამერიკიდან ამანათი”</Action>
            <Paragraph>
                Onex is clearly a major established player (USA/UK/Germany/China/Greece, ~5-6 days from the US, big local
                footprint). Now I need the independent review signal and English usability, not the marketing. Let me check
                recent reviews and pricing.
            </Paragraph>
            <Action>Searched the web for “onex.ge reviews trustpilot 2025 2026 problems lost package English”</Action>
            <Paragraph>
                Important catch: there are several unrelated "Onex" entities on Trustpilot (onex.com, onex.cloud, onexbtc —
                all crypto/investment scams). I'm ignoring those; the Georgian forwarder is <Word>
                    <Bold />
                    onex.ge
                </Word>, and the real signal for it is in the Yandex Maps reviews and the local Trustpilot profiles. A clear
                pattern is forming across the Georgian-local forwarders. Let me check KiwiPost (the expat-aimed one) and
                nail down pricing before I synthesize.
            </Paragraph>
            <Action>Searched the web for “KiwiPost Georgia reviews 2026 USA shipping price per kg expat experience”</Action>
            <Paragraph>
                KiwiPost's official rate is now $9/kg from the US (the $7 in the ExpatHub story was a personal-items
                discount), and Onex sits around the cheapest end. But the strong KiwiPost endorsement is from 2022 — four
                years stale. Let me get its current review signal before I draw conclusions, since it's the leading
                expat-aimed candidate.
            </Paragraph>
            <Action>Searched the web for “kiwipost.ge trustpilot reviews 2025 2026 lost parcel customer service”</Action>
            <Paragraph>
                The KiwiPost-specific recency is genuinely thin — that itself is a finding (low independent review volume,
                the strong endorsement four years old). Let me confirm Onex's actual US per-kg rate so the cost comparison
                is honest, then I'll lay it all out.
            </Paragraph>
            <Action>Searched the web for “onex.ge ამერიკა ტარიფი კგ ფასი 2026 ამანათის ტრანსპორტირება”</Action>
            <Paragraph>Got the thread reconstructed and finished the vetting. Here's where it lands.</Paragraph>
            <Heading>What the interrupted research had established</Heading>
            <Paragraph>
                Your instinct was dead on. <Word>
                    <Bold />
                    USA2Georgia
                </Word> looks fine on the surface (live site, long-registered domain, IATA member, $8/kg) but the trajectory
                is downward and recent: an eight-year customer dated the decline to a 2023 empty-box incident (Apple Watch
                arrived as just the charger), multiple people reporting deliveries consistently running 3+ weeks, a support
                experience that's now mostly an AI chatbot unaware of the order, and a BBB profile showing failure to
                respond to complaints. A February 2026 expat guide still ranks it for routine US orders but flags a
                late-2025 problem where packages Amazon marked "delivered" never appeared at their warehouse. Not a scam,
                but not where I'd send anything I cared about.
            </Paragraph>
            <Heading>What the fresh, recency-ordered vetting adds</Heading>
            <Paragraph>
                The important finding is that <Word>
                    <Bold />
                    the entire Georgian-local forwarder category shares one failure mode
                </Word>, and it shows up disproportionately in the <Word>
                    <Emphasis />
                    recent
                </Word> reviews:
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Onex (onex.ge)
                </Word> — the biggest local player (US/UK/Germany/China/Greece, ~5–6 days, $9/kg individuals). High volume
                means a long tail of horror stories. The Yandex Maps reviews for the Kazbegi office are genuinely mixed:
                real positives (Amazon, iHerb, TEMU parcels arriving fast, polite staff) sitting next to multiple
                lost-parcel accounts — one person waited 3.5 months, another two months, parcels lost both in the foreign
                warehouse and in the Georgian courier handoff, support closing live-chat tickets without response and
                refusing reimbursement. Their own Trustpilot (.ge) has only two reviews, both 1-star. One caution: ignore
                Trustpilot's onex.com / onex.cloud / onexbtc — those are unrelated crypto scams, not the forwarder.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Inex (inex.ge)
                </Word> — recent signal is bad. A January 2026 review: Amazon delivered to their warehouse Dec 17, still
                lost and unanswered by Jan 9, plus a claim they delete negative comments on their Facebook page.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    KiwiPost
                </Word> — the expat-favorite, and the one ExpatHub used for their own move. The catch is that the strong
                endorsement is from <Word>
                    <Bold />
                    2022, now four years stale
                </Word>, and independent recent review volume is genuinely thin (a 2025 listing split one glowing / one
                terrible). It's clearly still operating (IATA-registered, multiple Tbilisi branches, terms updated 2025),
                aimed at expats, handles all customs paperwork, and the value proposition people praise is "they took care
                of everything and called us when it landed." But I can't give you a strong <Word>
                    <Emphasis />
                    current
                </Word> reliability read because the data isn't there. Verified status: active and legitimate; recent
                reliability: not verified.
            </Paragraph>
            <Heading>The cost / time / complexity picture</Heading>
            <Paragraph>
                Pricing across the local market is tightly clustered, so price is barely a differentiator:
            </Paragraph>
            <Paragraph>
                <Table />
                <Line>
                    <Word>Provider</Word>
                    <Word>US→GE rate</Word>
                    <Word>Transit</Word>
                    <Word>Customs handled?</Word>
                    <Word>English</Word>
                    <Word>Recent reliability signal</Word>
                </Line>
                <Line>
                    <Word>Camex / Maleo</Word>
                    <Word>$6–7/kg</Word>
                    <Word>~5–7 d</Word>
                    <Word>Yes</Word>
                    <Word>Weak</Word>
                    <Word>Thin</Word>
                </Line>
                <Line>
                    <Word>USA2Georgia</Word>
                    <Word>$8/kg</Word>
                    <Word>declining</Word>
                    <Word>Yes</Word>
                    <Word>Decent</Word>
                    <Word>Downward, recent</Word>
                </Line>
                <Line>
                    <Word>Onex</Word>
                    <Word>$9/kg</Word>
                    <Word>5–6 d</Word>
                    <Word>Yes</Word>
                    <Word>OK</Word>
                    <Word>Mixed, real loss tail</Word>
                </Line>
                <Line>
                    <Word>Inex</Word>
                    <Word>~$8/kg</Word>
                    <Word>~1 wk</Word>
                    <Word>Yes</Word>
                    <Word>OK</Word>
                    <Word>Bad, recent</Word>
                </Line>
                <Line>
                    <Word>KiwiPost</Word>
                    <Word>$9/kg</Word>
                    <Word>&lt;1 wk</Word>
                    <Word>Yes (full)</Word>
                    <Word>Best</Word>
                    <Word>Strong but stale (2022)</Word>
                </Line>
                <Line>
                    <Word>MyUS / Stackry (intl)</Word>
                    <Word>much higher for small parcels</Word>
                    <Word>varies</Word>
                    <Word>No — you do it</Word>
                    <Word>Native</Word>
                    <Word>Better recourse/tracking</Word>
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The real cost variable is customs, not the forwarder.
                </Word> Confirmed from Onex's own customs page: anything over <Word>
                    <Bold />
                    300 GEL (~$110) per shipment, same store, same flight
                </Word> triggers 18% VAT calculated on goods value <Word>
                    <Emphasis />
                    plus
                </Word> transport cost, at the NBG rate the day it hits customs. Miss the 5-working-day declaration window
                and it's held; miss it longer and it's handed to the state. That's why the universal expat tactic is to keep
                each consignment under ~$100 and split larger orders across stores or flights.
            </Paragraph>
            <Paragraph>So the tradeoffs, stated plainly:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Local forwarders
                    </Word>: cheap ($6–9/kg), fast (~5–7 days), they do your customs declaration, low complexity. The cost
                    is a non-trivial <Word>
                        <Emphasis />
                        tail risk
                    </Word> — a meaningful minority of recent reviews describe a lost parcel with weak-to-nonexistent
                    recourse and no reimbursement. The expected value is good; the variance is bad, and the bad tail has no
                    insurance behind it.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        International forwarders
                    </Word> (MyUS, Stackry): better tracking and dispute recourse, but materially more expensive for the
                    small-and-light parcels Amazon orders usually are, and <Word>
                        <Emphasis />
                        you
                    </Word> handle the Georgian customs declaration yourself.
                </Line>
            </Paragraph>
            <Paragraph>
                The honest summary: there's no local option I can verify as reliably safe right now. Onex is the
                highest-volume and most-used but carries a real loss tail; KiwiPost is the best-fit-for-expat and
                most-praised but on stale data; the cheap ones (Camex/Maleo) have almost no signal at all. For anything
                genuinely valuable or irreplaceable, the category math argues for a higher-recourse international carrier or
                insured shipping despite the cost.
            </Paragraph>
            <Paragraph>
                Two ways I can sharpen this further: I can build the concrete cost model the prior thread offered (run a few
                representative parcel scenarios — e.g. a $60 / 1.5 kg order vs a $180 / 4 kg order — through each provider
                including the customs math), or I can dig specifically for 2026 Russian-language expat-forum chatter on Onex
                vs KiwiPost, since that's where the freshest unfiltered local experience usually surfaces. Which is more
                useful?
            </Paragraph>
        </Message>
        <Message
            at="2026-06-25T15:30:05.650680Z"
        >
            <Origin>019eff67-0e7f-78c7-9741-aa2978ebe15d</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Okay but what is my failure tolerance? IN this case, we're talking about things I buy, so it's all things I
                can rebuy. So its a time annoyance but the whole thing is a time annoyance.
            </Paragraph>
        </Message>
        <Message
            at="2026-06-25T15:31:12.788829Z"
        >
            <Origin>019eff67-0e7f-7f03-9edd-474cdf3e2609</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Right — and that reframes it correctly. If everything in the pipe is re-buyable consumer goods, then "lost
                parcel with no recourse" isn't a loss event in the way I was implicitly pricing it. It's a bounded
                annoyance: re-order, re-forward, wait again. That collapses most of the variance penalty I was leaning on,
                and it changes which option dominates.
            </Paragraph>
            <Paragraph>
                Run it as EV under your actual utility. Paying the international/insured premium buys you a lower loss
                probability and real recourse — but recourse only has value if the thing lost is worth recovering, and yours
                isn't. So you'd be paying a certain premium on <Word>
                    <Bold />
                    100%
                </Word> of shipments to insure against a small, bounded loss on a few percent of them. That's negative EV.
                Rough numbers: local runs ~$8/kg; the international route for small light parcels effectively costs $25–40+
                more per parcel. Over, say, 40 parcels a year that's $1,000–1,600 in premium to avoid maybe 1–3 lost
                re-buyable items. Unless those items average several hundred dollars each, the cheap-and-fast local
                forwarder wins and eating the occasional loss is the right policy.
            </Paragraph>
            <Paragraph>
                One honest caveat on the inputs: the actual loss <Word>
                    <Emphasis />
                    rate
                </Word> is unknown and almost certainly lower than reviews imply — angry people review, satisfied ones
                don't, so the visible tail is inflated. I can't give you a real base rate, only that it's a minority
                outcome.
            </Paragraph>
            <Paragraph>
                Where I'd refine your own framing slightly: if your cost is <Word>
                    <Emphasis />
                    time
                </Word>, then the thing to minimize isn't loss probability, it's <Word>
                    <Bold />
                    time-in-limbo plus support friction
                </Word>. The reviews make this distinction sharp. A clean loss is cheap for you — write it off, re-buy, done
                in ten minutes. The expensive failure mode is the Onex pattern: parcel stuck for two months, no one
                personally responsible, a new support agent every time, chat closed without reply. That's the one that
                actually taxes your attention. So within the local tier, optimize for "fails cleanly and communicates" over
                "rarely fails." That's also the (stale-but-real) case for KiwiPost — full paperwork handling, expat-facing,
                English support — versus the high-volume-low-accountability shops.
            </Paragraph>
            <Paragraph>So the policy that falls out:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Default
                    </Word>: cheapest fast local forwarder for the re-buyable bulk. Keep each consignment under ~300 GEL to
                    dodge the 18% VAT (orthogonal to all this, just free money). Don't bother declaring high values — you're
                    not relying on reimbursement anyway.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Carve-out
                    </Word>: reserve a higher-recourse channel <Word>
                        <Emphasis />
                        only
                    </Word> for the rare item that's actually irreplaceable, urgent, or expensive enough that one rebuy
                    exceeds the cumulative premium. Don't pay the insurance uniformly.
                </Line>
            </Paragraph>
            <Paragraph>
                The only input that would change this is if your real parcel mix turns out to be heavier on the
                irreplaceable/urgent end than "stuff from Amazon." If it's genuinely all re-buyable, your tolerance is high
                and the decision is basically made.
            </Paragraph>
        </Message>
        <Message
            at="2026-06-25T15:35:38.876012Z"
        >
            <Origin>019eff6c-23bd-78c3-aa56-bc71a2b9e366</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Right but I want a company that does this for amazon or online ecommerce so they do the splitting into
                whatever. Onex? Was that what's best? Can we confirm US users use it? I understand that comments are
                reactionary. You need to look at more than bad comments to see if something can work or is worth trying
            </Paragraph>
        </Message>
        <Message
            at="2026-06-25T15:37:29.241088Z"
        >
            <Origin>019eff6c-23bd-7e7f-aa28-2afcacf53bfa</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                You're right — I over-weighted the angry tail. The question that actually matters is structural: does Onex
                <Word>
                    <Emphasis />
                    do the thing you want
                </Word> (real US address, consolidation, splitting), and can a US citizen resident in Georgia actually
                register and clear customs through it. Let me verify those rather than re-litigate sentiment.
            </Paragraph>
            <Action>Fetched https://www.onex.ge/</Action>
            <Paragraph>
                The site is JS-rendered so it returned only metadata. Let me get the substance — registration requirements
                (the real question is whether a foreigner without a Georgian ID can register and clear customs), the US
                warehouse, and the splitting feature.
            </Paragraph>
            <Action>
                Searched the web for “onex.ge registration foreigner passport personal number customs declaration foreign
                citizen”
            </Action>
            <Paragraph>
                That search drifted off-target. Let me get the structural facts that actually matter: how Onex registration
                works for a foreigner (no Georgian ID), and the English-language expat experience specifically — plus
                confirm the splitting/consolidation feature is real and not just marketing.
            </Paragraph>
            <Action>
                Searched the web for “Onex Georgia expat foreigner how it works register US address Amazon English”
            </Action>
            <Paragraph>
                That's the confirmation that matters. Onex maintains a dedicated <Word>
                    <Bold />
                    English-language Amazon walkthrough
                </Word> (blog.onex.ge/amazon-eng) — register on Onex, get a free US address, paste it into your Amazon
                account, receive in Georgia in 4–8 working days. Let me pull that page to nail down the registration
                requirements (specifically whether a foreigner without a Georgian ID can sign up) and confirm the
                consolidation/split feature.
            </Paragraph>
            <Action>Fetched https://blog.onex.ge/amazon-eng</Action>
            <Paragraph>
                Fair correction taken — and the structural facts come out clearly in Onex's favor on the questions you
                actually asked.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Can US-side ordering / Amazon actually be confirmed?
                </Word> Yes, concretely:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    Onex maintains a dedicated <Word>
                        <Bold />
                        English-language Amazon walkthrough
                    </Word> and an English registration flow (onex.ge/en/user/registration). You register free, get a US
                    warehouse address, paste it into your Amazon checkout, receive in Georgia in <Word>
                        <Bold />
                        4–8 working days
                    </Word>. This is a first-class supported path, not a hack.
                </Line>
                <Line>
                    Scale check: its sister operation in Armenia reportedly handles 58% of that country's entire
                    cross-border ecommerce import volume. This is industrial infrastructure, not a two-guys-in-a-garage
                    outfit. The lost-parcel stories are a tail on a very large base.
                </Line>
                <Line>
                    The positive Yandex reviews I dismissed too fast specifically name <Word>
                        <Bold />
                        Amazon, iHerb, and TEMU parcels arriving fine and fast
                    </Word> — i.e. exactly your use case, working.
                </Line>
            </Paragraph>
            <Paragraph>
                So: confirmed, an English-speaking American can use it for US Amazon. One honest gap — I couldn't verify
                from their pages whether a foreigner with no Georgian ID number hits a wall at <Word>
                    <Emphasis />
                    registration
                </Word>. My read is no (signup is a standard free email-confirmation flow); the Georgian ID only becomes
                relevant at <Word>
                    <Bold />
                    customs declaration
                </Word>, which only triggers above 300 GEL — and your whole strategy is to stay under that, so it's likely
                moot. Worth confirming on the first signup rather than assuming.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Does it do the splitting/consolidation you want?
                </Word> Partly yes, with a nuance worth being precise about. Onex's "smart services" do include
                consolidating multiple orders, holding items in the warehouse, photographing contents, and <Word>
                    <Bold />
                    splitting a parcel into parts
                </Word>. So the machinery exists. But the customs-relevant splitting — keeping each consignment under 300
                GEL to dodge the 18% VAT — is governed by a rule that's mostly in <Word>
                    <Emphasis />
                    your
                </Word> hands, not theirs: the 300 GEL ceiling is <Word>
                    <Bold />
                    per shipment, per store, per flight
                </Word>. The practical lever is how and when you order (don't let one store's orders pile onto one flight
                over the line). I have <Word>
                    <Bold />
                    not
                </Word> verified that Onex auto-optimizes splitting to minimize customs for you — treat that as manual/your
                responsibility until proven otherwise. Don't assume "they handle the splitting into whatever" means
                automatic VAT-avoidance.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Is Onex "the best"?
                </Word> It's the right <Word>
                    <Emphasis />
                    default to try
                </Word>, not an unambiguous winner. The honest split:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Onex
                    </Word> — cheapest-ish ($9/kg individuals, and the budget local shops like Camex/Maleo undercut at
                    $6–7), biggest volume, explicit English + Amazon tooling, fast. The tail risk is the
                    unaccountable-support failure mode if something goes missing.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        KiwiPost
                    </Word> — the white-glove expat option: best English, full paperwork handling, the "they called us when
                    it landed" experience. Slightly pricier and lighter recent review data, but built for exactly your
                    profile.
                </Line>
            </Paragraph>
            <Paragraph>
                Given your stated high failure tolerance and that the cost is <Word>
                    <Emphasis />
                    time, not loss
                </Word>, the reviews can't give you your own base rate — only trying can. The rational move matches your own
                earlier logic: <Word>
                    <Bold />
                    pick Onex, run one small sub-$100 Amazon order through it, and measure your actual experience.
                </Word> If it fails cleanly and communicates, scale up. If you hit the two-month-black-hole pattern, switch
                to KiwiPost and pay the small premium for accountability. One test order resolves more than another twenty
                reviews would.
            </Paragraph>
        </Message>
        <Message
            at="2026-06-25T15:45:43.741807Z"
        >
            <Origin>019eff75-5eed-74bc-89ac-2a66073956de</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Try to look into the two a little more. And try to give me an exact plan for signing up for each one so I
                can give it a try in both cases in an editabel artifact that I can copy and paste
            </Paragraph>
        </Message>
        <Message
            at="2026-06-25T15:47:29.393278Z"
        >
            <Origin>019eff75-5eed-7785-9c9f-8edbd92d141e</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Let me dig a bit deeper into both — the actual signup mechanics, US address handling, payment, and pickup —
                so the plans are exact rather than generic.
            </Paragraph>
            <Action>Fetched https://kiwipost.ge/en</Action>
            <Paragraph>
                KiwiPost's English site is fully functional — US/UK/Turkey/China/Greece/Poland/Spain, pickup via branches,
                100+ service centers, self-service terminals, or Glovo/Wolt/Bolt delivery, plus iOS/Android apps. Let me
                grab the FAQ for the exact signup and US-address mechanics.
            </Paragraph>
            <Action>Fetched https://kiwipost.ge/en/questions</Action>
            <Paragraph>
                FAQ is JS-rendered, but I have the structural facts. One thing worth nailing for both plans equally: what ID
                a foreigner uses for the Georgian customs declaration step (the one real friction point). Let me verify
                that.
            </Paragraph>
            <Action>
                Searched the web for “Georgia parcel customs declaration rs.ge foreigner passport ID number declarant онекс
                декларирование иностранец”
            </Action>
            <Paragraph>I have what I need to make these exact. Quick deeper read on the two before the plans:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    KiwiPost
                </Word> is the more white-glove, English-first operation. Fully working English site and app (iOS +
                Android), ships from US/UK/Turkey/China/Greece/Poland/Spain, and the differentiators that matter for you:
                they'll <Word>
                    <Bold />
                    handle the customs paperwork
                </Word> (dedicated customs-clearance contact), four pickup modes (branches with self-service terminals, 100+
                service centers, "drive" pickup points, or on-demand delivery through <Word>
                    <Bold />
                    Glovo/Wolt/Bolt
                </Word>), and a relaxed <Word>
                    <Bold />
                    pay-within-30-days-of-arrival
                </Word> billing model (1 GEL/day storage only if you sit on it). Rate is $9/kg from the US.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Onex
                </Word> is the higher-volume, more self-serve machine: English site + dedicated English Amazon guide, app,
                smart lockers plus branches and courier, ~4–8 working days, $9/kg for individuals. More automated, less
                hand-holding — which is fine given your tolerance.
            </Paragraph>
            <Paragraph>
                Both share the same customs reality: keep each consignment under <Word>
                    <Bold />
                    300 GEL (~$110 incl. shipping), per store, per flight
                </Word> and no declaration/VAT is triggered at all. The one thing to confirm on first signup (identical for
                both) is what ID a non-Georgian uses if a parcel ever <Word>
                    <Emphasis />
                    does
                </Word> cross the threshold — passport is the normal answer, but verify it rather than assume.
            </Paragraph>
            <Paragraph>Here's the copy-paste plan for each:</Paragraph>
            <Action>Created /mnt/user-data/outputs/package-forwarding-signup-plans.md</Action>
            <Action>Presented files</Action>
            <Paragraph>
                Both plans are in the editable doc above — register, grab the US address, paste it into Amazon, track/pay,
                receive. The two real friction points are flagged in-line: the Amazon phone-field quirk (use their US
                number), and the only thing genuinely worth confirming at signup (foreign passport works for registration
                and, if a parcel ever crosses 300 GEL, for the declaration).
            </Paragraph>
            <Paragraph>
                One honest limit on what I could verify: the exact US address format and your personal unit number only
                appear <Word>
                    <Emphasis />
                    after
                </Word> you log in, so I couldn't capture those literally — the plan tells you where to find them.
                Everything else (URLs, rates, pickup modes, billing terms) is from each company's current English site.
            </Paragraph>
            <Paragraph>
                If you want, once you've run the test orders I can help you build a tiny tracking sheet to log arrival times
                and any issues side by side, so the "which one wins" decision rests on your own data rather than reviews.
            </Paragraph>
        </Message>
        <Message
            at="2026-06-25T15:51:11.560402Z"
        >
            <Origin>019eff7a-5f2a-7c4f-9929-c114b1201544</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>What's the cost comparison breakdown? Do both work beyond Amazon?</Paragraph>
        </Message>
        <Message
            at="2026-06-25T15:52:24.180473Z"
        >
            <Origin>019eff7a-5f2a-761a-b981-9a13f43f28ab</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Good questions — and they get at the real total cost (the $9/kg headline isn't the whole bill). Let me
                verify the last-mile and any handling fees so the breakdown is honest, and confirm the "any store" point.
            </Paragraph>
            <Action>Searched the web for “onex.ge საკურიერო მიწოდება ფასი თბილისი დეკლარაცია საფასური 2026”</Action>
            <Paragraph>
                That filled in the gaps. Here's the honest breakdown — and the headline is that on <Word>
                    <Bold />
                    price they're nearly identical
                </Word>; the differences are at the margins.
            </Paragraph>
            <Heading>Cost components (US → Tbilisi)</Heading>
            <Paragraph>
                <Table />
                <Line>
                    <Word>Component</Word>
                    <Word>Onex</Word>
                    <Word>KiwiPost</Word>
                </Line>
                <Line>
                    <Word>Air freight, US</Word>
                    <Word>$9/kg (individuals)</Word>
                    <Word>$9/kg</Word>
                </Line>
                <Line>
                    <Word>Weight billing</Word>
                    <Word>actual weight, rounded to 100 g</Word>
                    <Word>
                        rounded to 100 g (the 1 kg minimum in their terms applies to Georgia/Poland origins, not US —
                        confirm at signup)
                    </Word>
                </Line>
                <Line>
                    <Word>Registration / US address</Word>
                    <Word>free</Word>
                    <Word>free</Word>
                </Line>
                <Line>
                    <Word>Repacking / consolidation</Word>
                    <Word>included (except fragile/appliances/bulky)</Word>
                    <Word>included</Word>
                </Line>
                <Line>
                    <Word>Branch / locker pickup</Word>
                    <Word>free</Word>
                    <Word>free</Word>
                </Line>
                <Line>
                    <Word>Courier last-mile</Word>
                    <Word>via Glovo (standard app fee, ~few GEL)</Word>
                    <Word>via Glovo / Wolt / Bolt (standard app fee)</Word>
                </Line>
                <Line>
                    <Word>Billing timing</Word>
                    <Word>pay before release</Word>
                    <Word>pay within 30 days of arrival (mild cash-flow plus)</Word>
                </Line>
                <Line>
                    <Word>Customs (under 300 GEL)</Word>
                    <Word>none</Word>
                    <Word>none</Word>
                </Line>
                <Line>
                    <Word>Customs (over 300 GEL)</Word>
                    <Word>18% VAT on (goods + all shipping) + a "formalization" handling fee</Word>
                    <Word>18% VAT on (goods + shipping) + handling fee (figure not separately verified)</Word>
                </Line>
            </Paragraph>
            <Paragraph>
                So for your normal flow — small re-buyable parcels kept under 300 GEL — the bill is essentially <Word>
                    <Bold />
                    $9/kg + a small delivery fee if you don't pick up yourself
                </Word>, and it's the same number at both. Price is not the deciding variable; service reliability is.
                KiwiPost's only genuine cost edge is the pay-30-days-later billing.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    One verified correction to my earlier "passport" guess:
                </Word> for any parcel that <Word>
                    <Emphasis />
                    does
                </Word> cross 300 GEL, Onex's customs page is explicit — a non-Georgian must obtain a <Word>
                    <Bold />
                    one-time tax code from the Revenue Service (rs.ge)
                </Word>, and the declaration is printed against that. So the foreigner mechanism is a one-time tax code, not
                just a passport number. This is a Revenue Service rule, so it applies at KiwiPost too. Under 300 GEL it
                never comes up — another reason to keep consignments small.
            </Paragraph>
            <Heading>Do both work beyond Amazon?</Heading>
            <Paragraph>
                Yes — and this is the main value point. Neither is Amazon-specific. <Word>
                    <Bold />
                    Both give you a generic US address you can drop into the checkout of essentially any US online store
                </Word> — eBay, Walmart, iHerb, brand sites, etc. The reviews I read while vetting them showed real parcels
                arriving from iHerb, TEMU, Poizon, Trendyol, not just Amazon, which confirms the address works across
                merchants.
            </Paragraph>
            <Paragraph>They also go well beyond the US:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Onex:
                    </Word> US, UK, Germany, China, Greece (plus Russia/Dubai on the sister network).
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        KiwiPost:
                    </Word> US, UK, Turkey, China, Greece, Poland, Spain.
                </Line>
            </Paragraph>
            <Paragraph>
                Each gives you a <Word>
                    <Bold />
                    separate warehouse address per country
                </Word>, so you'd use the US one for Amazon US, the UK one for British shops, and so on — same single
                account. KiwiPost's wider country list (Turkey, Poland, Spain) is the one structural advantage if you ever
                order from European or Turkish sites; Onex covers Germany and Greece but not those three.
            </Paragraph>
            <Paragraph>
                Net: cost is a wash, capability is a wash for US shopping, and KiwiPost edges ahead only on country coverage
                and relaxed billing. The test order is still what decides it — run one through each and let reliability
                break the tie.
            </Paragraph>
        </Message>
        <Message
            at="2026-06-25T15:57:45.966207Z"
        >
            <Origin>019eff80-6388-7be8-8adb-697fe3324514</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Okay so what exactly says Onex over KiwiPost? I wonder if the value is the ge frame. Maybe a little harder
                for me linguistically but better aligned with the country being delivered to? I'm not sure what signals you
                are reading
            </Paragraph>
        </Message>
        <Message
            at="2026-06-25T15:58:45.969474Z"
        >
            <Origin>019eff80-6388-7033-b2ab-8eb360b2248c</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Honest answer: nothing strong says Onex over KiwiPost. Let me lay out exactly what I was reading, because I
                think you've caught me defaulting rather than reasoning.
            </Paragraph>
            <Paragraph>The signals pushing me toward Onex were three, and they're all weaker than they look:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Scale/ubiquity
                    </Word> — biggest volume, sister network moves 58% of Armenia's cross-border ecommerce, own customs
                    terminal, smart lockers everywhere. Real, but this is a "most people use it" signal, not a "better for
                    you" signal.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Price floor
                    </Word> — it anchors the cheap tier. But we established they're tied at $9/kg, so this washed out.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Explicit English Amazon guide
                    </Word> — concrete, but KiwiPost's whole site is English-first, so this isn't a differentiator either.
                </Line>
            </Paragraph>
            <Paragraph>
                Strip those down and what's left is basically "Onex is the popular default." That's not a reason for <Word>
                    <Emphasis />
                    you
                </Word>. And on the dimension you actually care about — minimize time, fail cleanly, get a human answer when
                something breaks — the single best concrete service anecdote in the entire research is KiwiPost's (the
                ExpatHub move: they handled all the paperwork and just called when it landed). The visible
                lost-parcel-black-hole tail, meanwhile, is attached more to Onex. So if I'm being rigorous, the evidence
                leans the <Word>
                    <Emphasis />
                    other
                </Word> way for your use case.
            </Paragraph>
            <Paragraph>
                Now your ge-frame hypothesis, because it's the interesting part. I'd push back on one premise: <Word>
                    <Bold />
                    KiwiPost is not the foreign option.
                </Word> It's an equally Georgian company — a Tbilisi-headquartered, IATA-registered Georgian LLC with its
                own local customs handling and 100+ service centers. It just wears an English-first face. So "better aligned
                with the destination country" doesn't actually separate them — both are wired into the same Georgian customs
                and last-mile reality. The ge-ness of Onex is mostly UI language and brand audience, not deeper operational
                alignment.
            </Paragraph>
            <Paragraph>
                But there's a real, sharper version of your intuition, and it's worth stating because it might <Word>
                    <Emphasis />
                    invert
                </Word> the conclusion. The genuine difference is <Word>
                    <Bold />
                    who each one is built to serve
                </Word>: Onex optimizes for mass Georgian retail volume — cheap, automated, high-throughput, support
                stretched thin across thousands of users. KiwiPost optimizes for a smaller, higher-touch expat segment,
                where English hand-holding through customs <Word>
                    <Emphasis />
                    is the product
                </Word>. So "aligned with the country" (Onex) and "aligned with you as a non-Georgian-speaking user"
                (KiwiPost) point in opposite directions.
            </Paragraph>
            <Paragraph>
                And here's where your linguistic point cuts the other way from how you framed it: the language friction
                isn't a one-time signup cost — it's a <Word>
                    <Bold />
                    per-problem tax
                </Word>. When everything works, both are frictionless and the ge-frame is irrelevant. The language only
                bites when something goes wrong, and that's exactly the moment Onex would route you toward Georgian-language
                support or a Georgian-language Revenue Service tax-code process, while KiwiPost is structured to absorb that
                for you. Given your cost is time, paying a linguistic tax on every exception is the opposite of what you
                want.
            </Paragraph>
            <Paragraph>
                The honest confidence level on all of this is low — recent independent data is thin for both, which is why I
                keep landing on "test it." But if you're asking me to actually commit to a read rather than hedge: for
                <Word>
                    <Emphasis />
                    you
                </Word> specifically — English-speaking, time-minimizing, high failure tolerance — <Word>
                    <Bold />
                    KiwiPost is the better-aligned default
                </Word>, and Onex's edge only materializes if you turn out to want pure self-serve automation (lockers, app,
                never talk to anyone) and you're shipping enough small parcels that ubiquity of pickup points matters. I was
                wrong to keep framing Onex as the front-runner; the thing I was reading was popularity, and popularity isn't
                your utility function.
            </Paragraph>
        </Message>
        <Message
            at="2026-06-25T16:25:00.402095Z"
        >
            <Origin>019eff99-535e-7fae-9dee-a6caa444c2e0</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Let's try Kiwi Post first. Give me a condensed signup checklist and then talk to me about getting that tax
                id. Is this a hard constraint before getting started?
            </Paragraph>
        </Message>
        <Message
            at="2026-06-25T16:25:36.005866Z"
        >
            <Origin>019eff99-535e-7bec-93e9-179808ea5bb2</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Heading>KiwiPost signup — condensed checklist</Heading>
            <Paragraph>
                <List />
                <Line>
                    &#91; &#93; Go to <Word>
                        <Bold />
                        kiwipost.ge/en
                    </Word> → <Word>
                        <Bold />
                        Sign up
                    </Word> (top right)
                </Line>
                <Line>&#91; &#93; Enter name, email, password, Georgian mobile number; accept Terms</Line>
                <Line>
                    &#91; &#93; Confirm email if prompted; optionally install the <Word>
                        <Bold />
                        KiwiPost app
                    </Word> (same login)
                </Line>
                <Line>
                    &#91; &#93; Log in → addresses section → copy your <Word>
                        <Bold />
                        US warehouse address + personal suite/customer ID
                    </Word>
                </Line>
                <Line>
                    &#91; &#93; In Amazon, add that address as a new shipping address (suite/ID exact; recipient name = your
                    name)
                </Line>
                <Line>
                    &#91; &#93; If Amazon rejects the phone field, use the <Word>
                        <Bold />
                        US number KiwiPost provides
                    </Word>
                </Line>
                <Line>
                    &#91; &#93; Place one small test order, <Word>
                        <Bold />
                        under 300 GEL (~$110 incl. shipping)
                    </Word>
                </Line>
                <Line>
                    &#91; &#93; When it lands, pick up at a branch/service center (free) or trigger Glovo/Wolt/Bolt
                    delivery; pay the freight (within 30 days)
                </Line>
            </Paragraph>
            <Paragraph>That's the whole loop. Nothing in it requires a tax ID.</Paragraph>
            <Heading>The tax ID — is it a hard constraint?</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    No.
                </Word> It is not a precondition for any of the above. You can register, get your US address, order, and
                receive parcels with zero tax-ID involvement — provided you stay under the 300 GEL line.
            </Paragraph>
            <Paragraph>
                Here's the precise trigger, because the distinction matters: the one-time tax code only exists to <Word>
                    <Bold />
                    print a customs declaration
                </Word>, and a declaration is only required when a parcel <Word>
                    <Bold />
                    exceeds 300 GEL
                </Word> (same store, same flight). Below that threshold there is no declaration, so there is nothing to
                attach a tax code to. Your entire intended flow — small, re-buyable, sub-$110 consignments — never touches
                it.
            </Paragraph>
            <Paragraph>
                What it actually is, per Onex's customs page (which reflects the Revenue Service rule, so it applies at
                KiwiPost too): any non-Georgian citizen receiving a dutiable parcel must obtain a <Word>
                    <Bold />
                    one-time tax code from the Revenue Service (rs.ge)
                </Word>, and the declaration is generated against that code. So the foreigner path exists and is routine —
                it's just gated to the over-threshold case, and KiwiPost's customs team is set up to walk you through it
                when it arises.
            </Paragraph>
            <Paragraph>
                So the sequencing is clean: <Word>
                    <Bold />
                    start now, ignore the tax code entirely, and only deal with it the first time you deliberately ship something over 300 GEL
                </Word> — at which point it's a known, supported step, not a blocker.
            </Paragraph>
            <Paragraph>
                Two honest flags. First, I've verified <Word>
                    <Emphasis />
                    that
                </Word> a foreigner uses a one-time rs.ge tax code; I have <Word>
                    <Bold />
                    not
                </Word> verified the exact click-path to obtain one (whether it's self-serve online, what it asks a
                non-resident for, turnaround time). Second, your own situation may shortcut it — if you already hold a
                Georgian personal number through your residency status, that likely serves directly and no one-time code is
                needed; I won't guess at your status. When you're actually about to cross the threshold, I can pull the
                exact rs.ge procedure for foreigners then, so you have verified steps rather than a vague pointer. For
                getting started today, it's a non-issue.
            </Paragraph>
        </Message>
        <Message
            at="2026-06-25T16:30:53.679631Z"
        >
            <Origin>019eff9e-b881-7d5b-8733-c5942a223cf2</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>You keep saying this. Don't I get one from Kiwi Post?</Paragraph>
            <Paragraph>Log in → addresses section → copy your US warehouse address + personal suite/customer ID</Paragraph>
        </Message>
        <Message
            at="2026-06-25T16:31:06.607384Z"
        >
            <Origin>019eff9e-b881-72ed-aad7-8e4dda5e6f2c</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                You're right to flag it, because I was sloppy and conflated two different "IDs." Let me separate them
                cleanly, because they are not the same thing and only one of them comes from KiwiPost.
            </Paragraph>
            <Paragraph>
                The <Word>
                    <Bold />
                    suite/customer ID
                </Word> in the checklist is purely KiwiPost's internal account number. It's the tag that tells their US
                warehouse "this box belongs to Doug." It's how forwarding works — nothing more. You get it automatically the
                moment you register, it lives in your account, and you paste it into the Amazon address. That one is 100%
                from KiwiPost, requires nothing from you, and is all you need to start ordering. So your read is correct on
                that.
            </Paragraph>
            <Paragraph>
                The <Word>
                    <Bold />
                    one-time tax code
                </Word> is a completely separate thing, and no, KiwiPost does not issue it — they <Word>
                    <Emphasis />
                    can't
                </Word>. It's a Georgian government number from the Revenue Service (rs.ge), and it exists for one reason:
                when a parcel is dutiable (over 300 GEL), the customs declaration has to be filed against a government
                taxpayer identifier, and a non-Georgian doesn't have a Georgian personal number to use, so the Revenue
                Service issues a one-time code to stand in for it. KiwiPost can <Word>
                    <Emphasis />
                    help
                </Word> you get it or file the declaration once you have it, but the code itself is government-issued, not
                forwarder-issued.
            </Paragraph>
            <Paragraph>So the clean mental model:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        KiwiPost suite ID
                    </Word> — their account number — needed to ship anything — auto-issued at signup.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Revenue Service tax code
                    </Word> — a government number — needed only to clear a parcel over 300 GEL — obtained from rs.ge, not
                    KiwiPost.
                </Line>
            </Paragraph>
            <Paragraph>
                For everything you're actually planning, only the first one matters. The second is a government step that
                never enters the picture unless you deliberately send something over the threshold. I kept repeating the
                tax-code caveat as if it were lurking in your normal flow — it isn't, and that's the part I should have been
                clearer about. The signup checklist as written is complete and correct: the only ID you need to get started
                is the one KiwiPost hands you.
            </Paragraph>
        </Message>
        <Message
            at="2026-06-25T16:32:34.867297Z"
        >
            <Origin>019effa0-4367-744f-87a9-6e903429b9f7</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Look at this:</Paragraph>
            <Paragraph>KiwiPost signup — condensed checklist</Paragraph>
            <Paragraph>
                <List />
                <Line>Go to kiwipost.ge/en → Sign up (top right)</Line>
                <Line>Enter name, email, password, Georgian mobile number; accept Terms</Line>
                <Line>Confirm email if prompted; optionally install the KiwiPost app (same login)</Line>
                <Line>Log in → addresses section → copy your US warehouse address + personal suite/customer ID</Line>
                <Line>
                    In Amazon, add that address as a new shipping address (suite/ID exact; recipient name = your name)
                </Line>
                <Line>If Amazon rejects the phone field, use the US number KiwiPost provides</Line>
                <Line>Place one small test order, under 300 GEL (~$110 incl. shipping)</Line>
                <Line>
                    When it lands, pick up at a branch/service center (free) or trigger Glovo/Wolt/Bolt delivery; pay the
                    freight (within 30 days)
                </Line>
            </Paragraph>
            <Paragraph>
                Where it says Log in - are you assuming Amazon? Or do you leave nothing specified because it could be
                anywhere? Step 4 is weird and I don't get it. I either have an address or not and should use it on US sites.
                But that's not what your thing says. Seems like I sign into kiwi post and then tell them about the US
                address they gave me
            </Paragraph>
        </Message>
        <Message
            at="2026-06-25T16:32:49.042428Z"
        >
            <Origin>019effa0-4367-7826-a5db-94a682728730</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                You've found a real bug in how I wrote it, not a misunderstanding on your end. Your mental model is correct
                and mine was muddled.
            </Paragraph>
            <Paragraph>
                "Log in" in step 4 means <Word>
                    <Bold />
                    log into KiwiPost
                </Word> — not Amazon. And you're right that step 4 reads backwards. KiwiPost <Word>
                    <Emphasis />
                    gives
                </Word> you the US address; you don't tell them about it. So the line "copy your US warehouse address +
                personal suite/customer ID" should just mean: read it off your KiwiPost account and copy it down. There's
                nothing to register or report back to them. The address already exists the moment your account does.
            </Paragraph>
            <Paragraph>Here's the corrected, deduplicated flow:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        One time, in KiwiPost:
                    </Word> log into kiwipost.ge → find your US warehouse address (it includes your personal suite/customer
                    ID baked into it). Copy it. Done forever — it doesn't change.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Every time you shop, on any US site:
                    </Word> paste that address into checkout as your shipping address. That's it. The site ships to
                    KiwiPost's US warehouse, KiwiPost sees your suite ID on the box, matches it to you, flies it to Tbilisi.
                </Line>
            </Paragraph>
            <Paragraph>
                So your instinct — "I either have an address or not and should use it on US sites" — is exactly right. The
                only thing the suite ID does is let the warehouse sort your box from everyone else's; it's part of the
                address string, not a separate step.
            </Paragraph>
            <Paragraph>
                Why my checklist looked weird: I jammed two different moments into adjacent bullets and made the second one
                sound like an action you perform <Word>
                    <Emphasis />
                    at
                </Word> KiwiPost, when really it's just "look up the address they already assigned you." The
                address-retrieval is a one-time setup; the Amazon/any-site part is the repeating action.
            </Paragraph>
            <Paragraph>Cleaned up:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    &#91; &#93; <Word>
                        <Bold />
                        Setup (once):
                    </Word> sign up at kiwipost.ge/en → confirm email → log into KiwiPost → copy your assigned US address
                    (suite ID included)
                </Line>
                <Line>
                    &#91; &#93; <Word>
                        <Bold />
                        Each order (any US store, not just Amazon):
                    </Word> paste that address at checkout; if the phone field errors, use KiwiPost's US number
                </Line>
                <Line>&#91; &#93; First time: keep it under 300 GEL, place one small test order</Line>
                <Line>
                    &#91; &#93; <Word>
                        <Bold />
                        On arrival:
                    </Word> pick up free at a branch/service center, or send it via Glovo/Wolt/Bolt; pay freight within 30
                    days
                </Line>
            </Paragraph>
            <Paragraph>
                And to close your earlier question explicitly: yes, the address works on any US site that ships to a US
                address, not just Amazon. Amazon was only ever my example.
            </Paragraph>
        </Message>
        <Message
            at="2026-06-25T16:33:49.253487Z"
        >
            <Origin>019effa1-65ce-796d-b0f6-a314f519f6f1</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Okay write the whole checklist again please</Paragraph>
            <Paragraph>
                Then I lost the thread on the tax id. Do I need to do that ASAP? Or soon? Please give separate list there.
                If it is necessary put in on the main list
            </Paragraph>
        </Message>
        <Message
            at="2026-06-25T16:34:05.005034Z"
        >
            <Origin>019effa1-65ce-70c7-a76a-07b9c4ea81f6</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Heading>KiwiPost — full checklist</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Setup (once)
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    &#91; &#93; Go to <Word>
                        <Bold />
                        kiwipost.ge/en
                    </Word> → <Word>
                        <Bold />
                        Sign up
                    </Word> (top right)
                </Line>
                <Line>&#91; &#93; Enter name, email, password, Georgian mobile number; accept Terms</Line>
                <Line>
                    &#91; &#93; Confirm email if prompted; optionally install the <Word>
                        <Bold />
                        KiwiPost app
                    </Word> (same login)
                </Line>
                <Line>
                    &#91; &#93; Log into <Word>
                        <Bold />
                        KiwiPost
                    </Word> → addresses section → copy your assigned <Word>
                        <Bold />
                        US warehouse address
                    </Word> (your personal suite/customer ID is built into it). It doesn't change — save it once.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Each order (any US store — not just Amazon)
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    &#91; &#93; At checkout, paste the KiwiPost US address as your shipping address (suite/ID exact;
                    recipient name = your name)
                </Line>
                <Line>
                    &#91; &#93; If the site rejects the phone field, use the <Word>
                        <Bold />
                        US number KiwiPost provides
                    </Word>
                </Line>
                <Line>
                    &#91; &#93; First time only: keep it <Word>
                        <Bold />
                        under 300 GEL (~$110 incl. shipping)
                    </Word> and order one small, re-buyable test item
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    On arrival in Tbilisi
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    &#91; &#93; Pick up free at a branch/service center, or send it via <Word>
                        <Bold />
                        Glovo/Wolt/Bolt
                    </Word>
                </Line>
                <Line>
                    &#91; &#93; Pay the freight (within <Word>
                        <Bold />
                        30 days
                    </Word> of arrival)
                </Line>
            </Paragraph>
            <Paragraph>
                Nothing on this list requires a tax ID. The only ID you need is the suite/customer ID KiwiPost hands you at
                signup.
            </Paragraph>
            <Heading>The tax ID — do you need it now?</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    No — not now, not soon, and possibly never for how you're using this.
                </Word> It is not on the main list on purpose, because it isn't part of the getting-started flow.
            </Paragraph>
            <Paragraph>Here's the clean logic:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    The Revenue Service one-time tax code exists for exactly <Word>
                        <Bold />
                        one
                    </Word> purpose: to file a <Word>
                        <Bold />
                        customs declaration
                    </Word>.
                </Line>
                <Line>
                    A declaration is only required when a single parcel <Word>
                        <Bold />
                        exceeds 300 GEL
                    </Word> (same store, same flight).
                </Line>
                <Line>
                    Your entire plan is small, sub-$110 consignments — which never trigger a declaration — so there's
                    nothing for the tax code to attach to.
                </Line>
            </Paragraph>
            <Paragraph>
                So the timing is: <Word>
                    <Bold />
                    ignore it completely until the first time you deliberately ship something over 300 GEL.
                </Word> At that point, and only then, it becomes a one-time setup step, and KiwiPost's customs team is set
                up to walk you through it. It is never an emergency and never a prerequisite.
            </Paragraph>
            <Paragraph>If/when you do cross the threshold, the separate list is:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    &#91; &#93; Get a <Word>
                        <Bold />
                        one-time tax code from the Revenue Service (rs.ge)
                    </Word> — this is a government number, not something KiwiPost issues
                </Line>
                <Line>
                    &#91; &#93; Give that code (plus the order invoice) to <Word>
                        <Bold />
                        KiwiPost's customs contact
                    </Word>; they file the declaration against it
                </Line>
                <Line>&#91; &#93; Pay the 18% VAT (on goods + shipping) + handling fee, then collect the parcel</Line>
            </Paragraph>
            <Paragraph>
                Two honest caveats on that future step: I've verified <Word>
                    <Emphasis />
                    that
                </Word> a foreigner uses a one-time rs.ge code, but <Word>
                    <Bold />
                    not
                </Word> the exact click-path to obtain one (self-serve online vs. in person, turnaround, what it asks a
                non-resident). And if you already hold a <Word>
                    <Bold />
                    Georgian personal number
                </Word> through your residency status, that likely serves directly and no one-time code is needed at all.
                When you're actually approaching the threshold, tell me and I'll pull the verified rs.ge procedure then — no
                point nailing it down now for a step you may not hit for months, if ever.
            </Paragraph>
        </Message>
        <Message
            at="2026-06-25T17:05:02.447404Z"
        >
            <Origin>019effbd-fb5b-725b-a75f-a249a7aff825</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Is this quick? If not, I get in a bad position doing it JIT:</Paragraph>
            <Paragraph>If/when you do cross the threshold, the separate list is:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    Get a one-time tax code from the Revenue Service (rs.ge) — this is a government number, not something
                    KiwiPost issues
                </Line>
                <Line>
                    Give that code (plus the order invoice) to KiwiPost's customs contact; they file the declaration against
                    it
                </Line>
                <Line>Pay the 18% VAT (on goods + shipping) + handling fee, then collect the parcel</Line>
            </Paragraph>
        </Message>
        <Message
            at="2026-06-25T17:06:22.540531Z"
        >
            <Origin>019effbd-fb5b-72dd-9c5d-49f5dbf8d889</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                That's the right question to ask before committing to a JIT approach — if the code is slow to get, you'd be
                racing a customs clock with a parcel already sitting in limbo. I haven't verified the timing, so let me
                actually look it up rather than guess.
            </Paragraph>
            <Action>
                Searched the web for “ერთჯერადი საგადასახადო კოდი უცხოელი rs.ge როგორ მივიღო ამანათის განბაჟება”
            </Action>
            <Paragraph>
                The rs.ge pages confirm there's a dedicated "Foreign taxable person" registration path and that applications
                filed electronically on rs.ge carry full legal force without a wet signature — which points toward an online
                process rather than an in-person one. But I don't yet have the actual turnaround or the customs holding
                clock nailed down. Let me get the practical timing.
            </Paragraph>
            <Action>
                Searched the web for “Грузия растаможка посылки иностранец разовый налоговый код rs.ge сколько времени
                получить онекс склад срок хранения”
            </Action>
            <Paragraph>
                Good instinct to check — and the answer is reassuring on both halves: the code is quick to get, <Word>
                    <Emphasis />
                    and
                </Word> the customs clock isn't tight, so JIT doesn't actually put you in a bad spot. But there's a
                zero-downside way to remove even that question, because the code is a one-time, reusable thing.
            </Paragraph>
            <Paragraph>Two facts resolve your worry:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The code itself is a fast registration, not a bureaucratic project.
                </Word> Per a Georgian tax-law firm's writeup, a foreigner gets the taxpayer number by going to any Revenue
                Service center with your foreign passport, and the requirement applies identically to Georgian citizens,
                residents, and any foreigner — it's not tied to citizenship or residence permit. Multiple forwarders
                describe the same thing: a non-Georgian provides a one-time taxpayer code, which is obtained from the
                Revenue Service, and the forwarder then files the declaration against it. It's a counter transaction with
                your passport, reusable afterward — not something that expires per parcel. (One unverified edge: rs.ge has a
                "Foreign taxable person" path suggesting an online option may exist, but I've only confirmed the
                in-person-with-passport route end to end.)
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The customs holding window is generous — I owe you a correction here.
                </Word> I earlier cited "5 working days," which was a forwarder's stated declaration window, not the real
                storage limit. The actual customs storage is far longer: Meest states a parcel sits one month from arrival,
                extendable to two months on request before it's bounced back; Inex stores up to 60 days, with non-taxable
                parcels moving to paid storage after 30. So even worst case you've got weeks, not a same-day scramble. And
                duty itself is payable within 30 days of clearance completion, at any bank.
            </Paragraph>
            <Paragraph>
                So JIT is genuinely survivable — but here's why I'd still front-load it rather than wait: <Word>
                    <Bold />
                    the code is one-time and permanent.
                </Word> You get it once, it's on file, and every future over-threshold parcel just reuses it. There's no
                reason to ever obtain it under time pressure with a box already sitting at customs. The clean play:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    For your <Word>
                        <Bold />
                        test orders and normal sub-$110 flow
                    </Word> — do nothing. It never triggers. No rush whatsoever.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        If/when you expect to order anything over 300 GEL
                    </Word> — knock out the passport visit to an RS center as a calm standalone errand <Word>
                        <Emphasis />
                        before
                    </Word> you place that order. Then JIT pressure never exists, because the code is already waiting.
                </Line>
            </Paragraph>
            <Paragraph>
                One caveat worth holding: if you already hold a <Word>
                    <Bold />
                    Georgian personal number through your residency status
                </Word>, you likely don't need the one-time code at all — your existing number serves. I won't assume your
                current status; if you tell me where your residency stands, I can tell you which of the two applies to you
                specifically.
            </Paragraph>
        </Message>
        <Message
            at="2026-06-26T12:37:06.761130Z"
        >
            <Origin>019f03ef-04a9-7187-baef-2b903d535b40</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                I'm being asked by Kiwi Post registration which is my branch. I am in Saburtalo, 83 sairme street near happy
                school edu. Can you help me locate my nearest branch and then I can confirm nearness on google maps
            </Paragraph>
            <Attachment>Uploaded “1782477345009_image.png”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-06-26T12:38:30.548796Z"
        >
            <Origin>019f03ef-04a9-7b44-908e-90fd8c94d82c</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                I can help pin down the Saburtalo branch. Let me find KiwiPost's pickup points near Sairme St.
            </Paragraph>
            <Action>Searched places for “”</Action>
            <Paragraph>
                Here are the KiwiPost points nearest you. Sairme St sits in Saburtalo, and two branches are within easy
                reach:
            </Paragraph>
            <Action>Used places map display v0</Action>
            <Paragraph>
                The map's above with the three nearest points. My read for what to put in that <Word>
                    <Bold />
                    Branch
                </Word> dropdown:
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Pick the Vazha-Pshavela branch
                </Word> (ვაჟა ფშაველა — it's KiwiPost's main staffed Saburtalo location, actually their HQ). It's about 1.5
                km west of you, ~18 min walk or a 5-minute taxi, open Mon–Fri 9–21 and Sat 10–20 (closed Sunday). For a
                first pickup it's the right call because it's staffed — if anything's confusing on your first parcel, or a
                customs question comes up, there's a human and English support there. In the dropdown, look for
                "Vazha-Pshavela" or "Vaja-Pshavela."
            </Paragraph>
            <Paragraph>
                The genuinely closest point is the <Word>
                    <Bold />
                    KiwiDrive Amashukeli locker
                </Word> (~850 m north, ~10 min walk, open 24/7), but it's an unstaffed self-service locker — great later
                once you know the routine and just want to grab a box at any hour, less ideal for your first run. If it
                appears in the dropdown as "Amashukeli" or "KiwiDrive," that's the one.
            </Paragraph>
            <Paragraph>Two things worth knowing so this doesn't feel like a lock-in:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    The branch you choose is just your <Word>
                        <Bold />
                        default
                    </Word> pickup point. You can usually redirect an individual parcel to a different branch, and you can
                    always have it delivered to your door via Glovo/Wolt/Bolt instead. So picking Vazha-Pshavela now commits
                    you to nothing.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Check that Address field
                    </Word> — it's showing "84 Lebrun Ave," which isn't your address and looks like a stray browser autofill
                    (there's no Lebrun Ave in Saburtalo). If that field is your home/delivery address, change it to 83
                    Sairme St before you hit Register.
                </Line>
            </Paragraph>
            <Paragraph>
                So: Branch → Vazha-Pshavela, fix the address line, then Register. Open Google Maps and search "KiwiPost
                Vazha-Pshavela" to eyeball the walk from Sairme St and confirm it feels right to you.
            </Paragraph>
        </Message>
        <Message
            at="2026-06-26T12:39:59.754367Z"
        >
            <Origin>019f03f1-a8aa-7bab-8414-88e39efcdab2</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>The one that also says VII #1 Vahza Psavshela?</Paragraph>
        </Message>
        <Message
            at="2026-06-26T12:40:27.479211Z"
        >
            <Origin>019f03f1-a8aa-7f07-824e-24a1e25f7ad8</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Let me confirm that label rather than guess — "VII #1" is Georgian addressing (quarter VII, building 1 of
                Vazha-Pshavela), and I want to make sure it's the same branch I pinned.
            </Paragraph>
            <Action>Searched the web for “KiwiPost ვაჟა ფშაველა ფილიალი მისამართი კვარტალი თბილისი”</Action>
        </Message>
        <Message
            at="2026-06-26T12:41:00.844947Z"
        >
            <Origin>019f03f2-96f0-73f7-b197-d3a9044a2642</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>This is what the option looks like. That one?</Paragraph>
            <Attachment>Uploaded “1782477650297_image.png”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-06-26T12:41:04.362990Z"
        >
            <Origin>019f03f2-96f0-7038-87df-09fe999ef093</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Yes — that's the one. "Vazha-Pshavela - VII Quarter #1" is exactly the staffed Saburtalo branch I pinned on
                the map. I just confirmed against KiwiPost's own branches page: they list only two Tbilisi pickup branches,
                Vake (1 Mtskheta St) and this one, Vazha-Pshavela VII Quarter #1, open Mon–Fri 9–21 and Sat 10–20. It's the
                one ~1.5 km west of you near Happy School.
            </Paragraph>
            <Paragraph>Select it, fix the address line if it still says "84 Lebrun Ave," and hit Register.</Paragraph>
        </Message>
        <Message
            at="2026-06-26T12:42:22.950241Z"
        >
            <Origin>019f03f3-d78e-76c1-b422-ff78bf846d03</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Oy it says I need a foreign national identity number...</Paragraph>
        </Message>
        <Message
            at="2026-06-26T12:43:07.325240Z"
        >
            <Origin>019f03f3-d78e-7e72-bd8a-b7a13f834458</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                That's the registration form collecting your identifier as a foreigner — and it's the same ID question I
                flagged earlier, just surfacing at signup rather than at customs. I was a bit off when I said registration
                wouldn't touch it; it does. But it's a fill-in-a-number step, not a go-get-a-document step, so you're not
                blocked.
            </Paragraph>
            <Paragraph>What goes in that field depends on what you currently hold:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        If you have a Georgian residence permit / residence card
                    </Word> — use the <Word>
                        <Bold />
                        11-digit personal number (პირადი ნომერი)
                    </Word> printed on it. This is the better answer if you have it: it's the number the Georgian tax and
                    customs system actually recognizes, and using it here means you'll <Word>
                        <Emphasis />
                        never
                    </Word> need the separate one-time tax code we discussed — your personal number serves that role
                    permanently.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        If you don't have Georgian residency yet
                    </Word> — enter your <Word>
                        <Bold />
                        US passport number
                    </Word>. That's the identifier a non-resident foreigner uses, and it's what "foreign national identity
                    number" is asking for in that case.
                </Line>
            </Paragraph>
            <Paragraph>
                So which is it for you — do you have a Georgian residence card with a personal number, or are you still on
                the residency track and operating on your US passport? That single fact tells you exactly what to type, and
                also resolves the earlier tax-code question once and for all.
            </Paragraph>
            <Paragraph>
                One honest limit: I can't see how KiwiPost's field validates input — whether it strictly wants an 11-digit
                format or will accept a passport's alphanumeric string. If you enter the passport number and it rejects the
                format, that tells us the field is built to expect a Georgian personal number, and we'd handle it from there
                (likely a note to their support, or it confirms they expect residents). Tell me what you've got and, if it
                bounces, what the error says.
            </Paragraph>
        </Message>
        <Message
            at="2026-06-26T12:59:49.447607Z"
        >
            <Origin>019f0403-cf48-79e6-b764-8db2b1e75ec0</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                This is where you wanted me to insert the id. I haven't told it that I am from the US. We haven't given me
                an address there yet. Maybe it's the same address. Where do I go from here. What do I put here and how do I
                know what address to send my Amazon packages to
            </Paragraph>
            <Attachment>Uploaded “1782478743378_image.png”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-06-26T13:00:01.819450Z"
        >
            <Origin>019f0403-cf48-764b-b1ca-4160d8382dd8</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                You're in — registration worked, and you're now on the dashboard. <Word>
                    <Bold />
                    Ignore that tracking-ID box for now.
                </Word> That field is for <Word>
                    <Emphasis />
                    later
                </Word>: once you've actually placed an Amazon order and have a tracking number, you paste it there to tell
                KiwiPost "this incoming box is mine." You have nothing to track yet, so the "tracking number field is
                required" is just the empty-field nag. Don't touch it.
            </Paragraph>
            <Paragraph>
                Your KiwiPost customer number is <Word>
                    <Bold />
                    KW121157
                </Word> (top right, under "Douglas"). That's your suite/room number — it's the thing that has to appear on
                every package so the US warehouse knows the box is yours. Hold onto it.
            </Paragraph>
            <Paragraph>
                Where you actually go: click <Word>
                    <Bold />
                    "Addresses"
                </Word> at the top (next to MAIN DASHBOARD, with the little NEW tag). That page is where KiwiPost shows you
                the warehouse addresses they've assigned you — one per country. The US address lives there. You don't pick
                "I'm from the US" anywhere; you just use the <Word>
                    <Bold />
                    US address
                </Word> from that list when you shop on Amazon. The country dropdown showing "USA" on the dashboard is only
                for filtering tracking entries, not for setting your origin.
            </Paragraph>
            <Paragraph>So your next two clicks:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    Hit <Word>
                        <Bold />
                        Addresses
                    </Word>.
                </Line>
                <Line>
                    Find the <Word>
                        <Bold />
                        USA
                    </Word> entry and copy the full block. It'll look like a normal US shipping address — street, city,
                    state, ZIP — with your <Word>
                        <Bold />
                        KW121157
                    </Word> baked into it (often as a unit/suite line, e.g. "... STE KW121157" or "Room KW121157"). Copy it
                    exactly, that number included.
                </Line>
            </Paragraph>
            <Paragraph>Then on Amazon, add that as a new shipping address and order your test item to it.</Paragraph>
            <Paragraph>
                One thing I can't see from here and you'll want to verify on the Addresses page: how they want KW121157
                formatted in the address (some warehouses want it on the name line, some on a suite line). Whatever format
                they show you there is the one to replicate on Amazon — don't improvise it. Open Addresses, tell me what the
                US block looks like, and I'll help you map it cleanly onto Amazon's address fields.
            </Paragraph>
        </Message>
        <Message
            at="2026-06-26T13:01:27.495691Z"
        >
            <Origin>019f0405-4e45-7bdf-a41d-e8a6f5062feb</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                So every time I make an order I need to assign the tracking id? I can't have AMazon annotate it with my
                customer id?
            </Paragraph>
        </Message>
        <Message
            at="2026-06-26T13:01:41.363697Z"
        >
            <Origin>019f0405-4e45-718b-a3fb-7c69286f86de</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Two different mechanisms, and you're right to want to know which carries the weight. Here's how it actually
                works:
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Your customer ID (KW121157) is the thing that matters — and yes, Amazon "annotates" it via the address.
                </Word> When you put the KiwiPost US address on your Amazon order with KW121157 in it (on the suite/name
                line), that's what physically routes the box to your shelf at the warehouse. That's the real binding. It
                happens automatically every order, just by using the address. You don't do anything extra.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The tracking-ID box is a separate, optional convenience — not a requirement for the package to reach you.
                </Word> Pasting the Amazon tracking number into that field doesn't <Word>
                    <Emphasis />
                    route
                </Word> anything; it just lets KiwiPost (and you) see the parcel coming before it lands, match it cleanly,
                and pre-declare it. The package will still arrive and get matched by your KW number even if you never touch
                that box. So the honest answer to "do I have to assign the tracking ID every time?" is: <Word>
                    <Bold />
                    no, not strictly.
                </Word> The KW number on the address does the routing.
            </Paragraph>
            <Paragraph>
                When entering the tracking number <Word>
                    <Emphasis />
                    is
                </Word> worth the 20 seconds:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    It speeds up matching, so your box doesn't sit unidentified if the label is smudged or the sender
                    mangles your suite line.
                </Line>
                <Line>
                    It's how you pre-declare contents/value, which is the smooth path if anything ever approaches the
                    customs threshold.
                </Line>
                <Line>It gives you arrival visibility instead of waiting blind.</Line>
            </Paragraph>
            <Paragraph>
                So the clean mental model: <Word>
                    <Bold />
                    the address (with KW121157) is mandatory and automatic; the tracking-ID entry is optional and manual, and you do it only when you want the early-match/declare/visibility benefits.
                </Word> For a low-value test order you could skip it entirely and just let the KW number do its job — that's
                actually a good way to test whether their passive matching works for you.
            </Paragraph>
            <Paragraph>
                The one caveat I can't verify from outside: a few forwarders <Word>
                    <Emphasis />
                    do
                </Word> require pre-registering the tracking number for parcels above the customs line, as part of their
                declaration flow. KiwiPost's terms lean that way for dutiable items. So the rule of thumb — skip it for
                small sub-300-GEL stuff, enter it for anything bigger. Whether they ever enforce it on small parcels, you'll
                find out on this first run.
            </Paragraph>
        </Message>
        <Message
            at="2026-06-26T13:02:41.155153Z"
        >
            <Origin>019f0406-6dcb-73be-a5aa-e6e0c08a7d61</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Okay so this has my US info. What is the exact address? Can you compile it as a single string and then also
                tell me how to put it in Amazon?
            </Paragraph>
            <Paragraph>
                USA First name: Douglas Lastname: Rubino Address line 1: 2860 Ogletown Rd Bldg 2 Unit 3 Address line 2: KW
                121157 Post code (ZIP): 19713 City: Newark State / Province: Delaware Phone : +1 (717) 882-6709
            </Paragraph>
        </Message>
        <Message
            at="2026-06-26T13:03:03.381572Z"
        >
            <Origin>019f0406-6dcb-7a11-9e68-5a93b1cadded</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Here's the verified address (it matches KiwiPost's Newark warehouse on file, so it's correct).
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Single-string version:
                </Word> Douglas Rubino, 2860 Ogletown Rd Bldg 2 Unit 3, KW 121157, Newark, DE 19713, +1 (717) 882-6709
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Putting it into Amazon — field by field:
                </Word>
            </Paragraph>
            <Paragraph>
                When you add a new shipping address at checkout (or under Your Addresses → Add Address), set Country/Region
                to <Word>
                    <Bold />
                    United States
                </Word>, then:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Full name:
                    </Word> Douglas Rubino
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Phone number:
                    </Word> 717-882-6709 (it's a real US number, so Amazon will accept it as-is — no phone-field workaround
                    needed here)
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Address line 1:
                    </Word> 2860 Ogletown Rd Bldg 2 Unit 3
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Address line 2:
                    </Word> KW 121157
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        City:
                    </Word> Newark
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        State:
                    </Word> DE (Delaware)
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        ZIP Code:
                    </Word> 19713
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The one thing that actually matters — protect "KW 121157."
                </Word> That line is your customer ID; it's what tells the warehouse the box is yours. Two ways it can get
                lost, both avoidable:
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        The address-verification popup.
                    </Word> After you save, Amazon often pops up "We found a similar address — use suggested?" and its
                    "standardized" version frequently <Word>
                        <Emphasis />
                        drops
                    </Word> Address line 2. If you see that, choose <Word>
                        <Bold />
                        "Use as entered"
                    </Word> / <Word>
                        <Bold />
                        "Keep address as is"
                    </Word> — never the suggested one that strips the KW line.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Don't merge it into line 1.
                    </Word> Keep KW 121157 on its own line exactly as KiwiPost gave it. If Amazon only renders one combined
                    line later, that's fine as long as the KW number is still in the string.
                </Line>
            </Paragraph>
            <Paragraph>
                That's it. Save it, then order one small test item to that address. Once it ships, you can drop the Amazon
                tracking number into that dashboard box if you want the early-match/visibility — optional for a small
                parcel, as we covered.
            </Paragraph>
        </Message>
        <Message
            at="2026-06-26T13:04:51.042521Z"
        >
            <Origin>019f0408-6910-7cc3-8945-30d966ac239b</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Are the other locations in Europe possibly better for me in some ways? Speed for instance? Maybe I can
                receive different things from there?
            </Paragraph>
        </Message>
        <Message
            at="2026-06-26T13:06:01.798783Z"
        >
            <Origin>019f0408-6910-7420-9736-8912f2e8a524</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Good question — and the answer is genuinely yes, in two distinct ways: some origins are faster/cheaper
                because Georgia is physically close to them, and each origin unlocks a different catalog of stores. Let me
                verify the actual rates and transit times rather than assert, since that's where the real decision is.
            </Paragraph>
            <Action>
                Searched the web for “kiwipost.ge ტარიფი ქვეყნები თურქეთი ინგლისი ევropa ამანათის მიწოდების ვადა დღე”
            </Action>
            <Paragraph>
                Yes — meaningfully so, on both axes you named. The same KiwiPost account gives you a separate warehouse
                address in each origin country, so this isn't a new signup — it's just using a different "from" address on
                the relevant store. Here's what the origins actually buy you:
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Speed and cost (verified from KiwiPost's own rates/terms):
                </Word>
            </Paragraph>
            <Paragraph>
                <Table />
                <Line>
                    <Word>Origin</Word>
                    <Word>Rate/kg</Word>
                    <Word>Transit to Georgia</Word>
                </Line>
                <Line>
                    <Word>USA</Word>
                    <Word>~$8–9</Word>
                    <Word>4–7 days</Word>
                </Line>
                <Line>
                    <Word>UK</Word>
                    <Word>~£7 (~$9)</Word>
                    <Word>2–4 days (some pages say 4–7)</Word>
                </Line>
                <Line>
                    <Word>Turkey</Word>
                    <Word>~$3–4</Word>
                    <Word>4–6 days</Word>
                </Line>
                <Line>
                    <Word>Greece</Word>
                    <Word>(EU rate)</Word>
                    <Word>6–7 days</Word>
                </Line>
                <Line>
                    <Word>China</Word>
                    <Word>~$12.5</Word>
                    <Word>10–14 days</Word>
                </Line>
            </Paragraph>
            <Paragraph>
                The UK runs roughly 4–7 days and Turkey 4–6, while China is the slow lane at 10–14, and a Georgian
                startup-program listing even quotes England-to-Georgia at 2–4 days. So geographically, <Word>
                    <Bold />
                    UK and Turkey both beat the US to Georgia
                </Word>, and Turkey is dramatically cheaper per kilo. Makes sense — Georgia is next door to Turkey and a
                short hop from Europe; the US is a transatlantic haul.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Different catalogs — the bigger win, and where I'd actually point you:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        UK is your natural second address.
                    </Word> Same-language shopping, fastest transit, and <Word>
                        <Bold />
                        Amazon.co.uk plus British retailers (ASOS, Argos, Boots, John Lewis) stock things US Amazon doesn't
                    </Word> — or at better prices. When a US listing is out of stock, gray-market, or pricier, the UK
                    version often solves it with no language friction.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Turkey is the value play for non-electronics.
                    </Word> Trendyol and Turkish brands mean cheap clothing, textiles, home goods, leather, cosmetics, at
                    $3–4/kg shipping. Trendyol has an English interface. This is where Ana's household/clothing orders would
                    be far cheaper than US.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        EU (Greece, plus Poland/Spain if listed in your Addresses) unlocks Amazon.de/.es and European brands
                    </Word> — relevant mostly for the voltage point below.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The concrete reason to source anything electrical from UK/EU, not the US:
                </Word> Georgia runs <Word>
                    <Bold />
                    220–240V with Type C/F plugs
                </Word> — identical to continental Europe, and UK (230V) needs only a cheap plug adapter. <Word>
                    <Bold />
                    US goods are 120V
                </Word> — a US appliance, charger, lamp, or anything with a motor may underperform, need a bulky
                transformer, or simply not work, and US plugs don't fit Georgian sockets. So the rule of thumb: <Word>
                    <Bold />
                    re-buyable consumer stuff and US-specific brands → US address; anything with a plug, battery charger, or motor → UK or EU address.
                </Word> That single distinction will save you a drawer full of adapters and a few dead devices.
            </Paragraph>
            <Paragraph>
                One thing unchanged: the 300 GEL customs threshold applies per parcel regardless of origin, so the
                under-$110 strategy is the same everywhere.
            </Paragraph>
            <Paragraph>
                Practical mechanics: go to your <Word>
                    <Bold />
                    Addresses
                </Word> page — each country KiwiPost offers you has its own warehouse block, all carrying your same <Word>
                    <Bold />
                    KW 121157
                </Word>. Use the UK block on UK sites, the Turkey block on Trendyol, and so on. Want me to note the
                rate/transit differences against specific things you're likely to buy, or check which of Poland/Spain/Greece
                actually appear in your account's address list?
            </Paragraph>
        </Message>
        <Message
            at="2026-06-26T13:06:52.170082Z"
        >
            <Origin>019f040a-424e-74ff-9aff-754fce30731f</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Is Amazon in UK just as good? Or is it slower?</Paragraph>
        </Message>
        <Message
            at="2026-06-26T13:07:35.784704Z"
        >
            <Origin>019f040a-424e-7adf-9fb5-b3682cb277b8</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Not slower — if anything, comparable-to-faster to Georgia, and the store itself is first-class. But the real
                catch with UK isn't speed, it's price. Let me separate the three things you're actually asking about.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    As a store:
                </Word> Amazon.co.uk is a fully mature marketplace, the biggest in Europe — same interface, same Prime fast
                domestic delivery, deep catalog. For most general goods it's just as good as US. The one honest gap is raw
                depth: Amazon US still has the largest catalog on earth, so some US-specific items aren't on UK. In the
                other direction, UK carries European and British brands US doesn't. For everyday stuff, call it parity.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Speed:
                </Word> No penalty. The domestic leg (Amazon UK → KiwiPost's London warehouse, with Prime) is 1–2 days, same
                as Amazon US → Newark. Then the international leg is where UK <Word>
                    <Emphasis />
                    wins
                </Word> — KiwiPost quotes UK→Georgia at roughly 2–4 to 4–7 days versus 4–7 from the US. So total
                door-to-door, UK is equal or faster, not slower.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The actual catch — VAT:
                </Word> UK retail prices are shown <Word>
                    <Bold />
                    VAT-inclusive at 20%
                </Word>, and when you order to a UK forwarding address Amazon treats it as a normal domestic UK sale, so
                that 20% is baked into what you pay. As an individual using a forwarder you generally can't reclaim it. So
                an item that's $30 on Amazon US might be £30 (~$38) on Amazon UK partly because of embedded VAT. That price
                gap is the thing that offsets the faster, cheaper shipping — and it's why UK isn't a blanket upgrade.
            </Paragraph>
            <Paragraph>So the clean heuristic:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Use UK
                    </Word> when the item is electrical (correct 220–240V/plug for Georgia — the big one), is a UK/European
                    brand or edition, or is out of stock / slower / pricier on US. Faster transit is a bonus.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Use US
                    </Word> for raw catalog depth and for general goods where the US price (no VAT) beats UK even after the
                    slightly longer shipping.
                </Line>
            </Paragraph>
            <Paragraph>
                Two practical notes: amazon.co.uk is a <Word>
                    <Bold />
                    separate site and login
                </Word> from amazon.com (same email is fine, but separate order history, and UK Prime is its own
                subscription). Your US credit card works normally at UK checkout. And you'd put your <Word>
                    <Bold />
                    KiwiPost UK warehouse address
                </Word> (same KW 121157) on the order, not the Newark one.
            </Paragraph>
            <Paragraph>
                Bottom line: think of UK not as "better or worse than US Amazon," but as a faster lane that's worth its VAT
                premium specifically for electricals, UK/EU-exclusive items, and US stock-outs.
            </Paragraph>
        </Message>
        <Message
            at="2026-06-26T13:37:40.836020Z"
        >
            <Origin>019f0426-7eda-733c-bc10-6b0a0ad45de3</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Trying to get the tax code for the future. It works indefinitely rigjt? Or is it a works-once tax code?
            </Paragraph>
            <Attachment>Uploaded “1782481040093_image.png”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-06-26T13:38:42.147448Z"
        >
            <Origin>019f0426-7eda-774f-8a8d-248ab633b049</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                This is exactly the kind of thing I don't want to guess on, since the name itself ("one-time tax code") is
                ambiguous and you're about to act on it. Let me verify whether it's a permanent identifier or genuinely
                single-use.
            </Paragraph>
            <Action>
                Searched the web for “Грузия одноразовый код налогоплательщика иностранец постоянный или разовый посылка
                повторно использовать rs.ge”
            </Action>
            <Paragraph>
                Good news, and it resolves the ambiguity cleanly: <Word>
                    <Bold />
                    it works indefinitely.
                </Word> The "one-time" label is misleading — it refers to getting it <Word>
                    <Emphasis />
                    once
                </Word>, not using it once. A Georgia shipping guide states it plainly: the code is issued as permanent, and
                you don't need to revisit the Revenue Service before receiving future parcels. You register once, and that
                same number clears every parcel from then on.
            </Paragraph>
            <Paragraph>
                What's actually going on under the hood: the thing forwarders call a "one-time tax code" is just <Word>
                    <Bold />
                    your Georgian tax identification number (ИНН) as a foreigner
                </Word>. It's a permanent taxpayer number — the same one used for declaring parcels, property, or temporary
                car plates. Any foreigner can obtain it regardless of residence-permit or tax-resident status — you don't
                even need to have lived in Georgia 183 days, and it can be done online. By its nature a taxpayer ID doesn't
                expire per use; it's yours.
            </Paragraph>
            <Paragraph>Since you're already on the rs.ge site, two route options:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Online via "Video call"
                    </Word> — select the widget "A natural person without Georgian citizenship," fill the form, and make the
                    call; it's free, weekdays 09:00–18:00. This is the no-travel path.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        In person
                    </Word> at any Revenue Service center with your passport (Tbilisi office: David Sarajishvili St 1). Note
                    the application itself is written in Georgian, so the video-call route may actually be smoother since a
                    staffer walks you through it.
                </Line>
            </Paragraph>
            <Paragraph>
                Two caveats specific to your household, because they could mean you don't need to do this at all:
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        If you already hold a Georgian personal number through a residence permit
                    </Word>, that number <Word>
                        <Emphasis />
                        is
                    </Word> your tax ID — you'd use it directly and skip this registration. Only register for the foreigner
                    ИНН if you don't have a Georgian personal number yet.
                </Line>
                <Line>
                    This is worth flagging for Ana's parcels, not yours: anyone registered as an Individual Entrepreneur
                    already has this — the IE identification code and the personal tax number are the same. So Ana's IE
                    number already serves as her parcel-clearance code; she never needs a separate one. For parcels under
                    your own name, you need your own number (personal-number-from-residency, or the foreigner ИНН).
                </Line>
            </Paragraph>
            <Paragraph>
                So: get it once, reuse forever — but first check whether your residency status already gave you a personal
                number, since that would make this step unnecessary.
            </Paragraph>
        </Message>
        <Message
            at="2026-06-26T13:39:09.472253Z"
        >
            <Origin>019f0427-d5cd-7902-baaa-31deba01cbbc</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Okay so what do I do on that page I sent to get it? That's the url you sent me to</Paragraph>
        </Message>
        <Message
            at="2026-06-26T13:39:56.955079Z"
        >
            <Origin>019f0427-d5cd-71fc-a8e1-58baf72788eb</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                This is governmental and I don't want to guess at clicks that send you down the wrong menu — let me find the
                exact path/link for the video-call registration rather than improvise it.
            </Paragraph>
            <Action>
                Searched the web for “rs.ge video call service foreign natural person without Georgian citizenship
                registration tax number link steps”
            </Action>
            <Paragraph>
                Here's the verified path. The page you're on is the right place — what you're looking for is the <Word>
                    <Bold />
                    "Video Call"
                </Word> service, which is how a foreigner registers remotely. The steps, from an English-language Georgian
                tax guide:
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    On the rs.ge site, find and select the <Word>
                        <Bold />
                        "Video Call"
                    </Word> service. (It's one of the service tiles — look under the services list / "All Services" area. I
                    can't pinpoint the exact tile from your screenshot, but "Video Call" is the label to hunt for.)
                </Line>
                <Line>
                    Click the button labeled, in English, <Word>
                        <Bold />
                        "A natural person without Georgian citizenship."
                    </Word>
                </Line>
                <Line>
                    Fill out the short form: first name, last name, passport number, residential address, and telephone
                    number. (Use your 83 Sairme St address and US passport number.)
                </Line>
                <Line>Click "Contact the operator" — make sure your camera and microphone are working.</Line>
                <Line>It runs only on working days, 09:00–18:00.</Line>
                <Line>
                    After it's done, you get a notification in Georgian plus an SMS with a login and password for your tax
                    portal — and your tax number is assigned. That number is the permanent parcel code.
                </Line>
            </Paragraph>
            <Paragraph>
                What you'll actually receive: a 9-digit TIN that the Revenue Service generates for you as a foreign
                individual (it's not pulled from any document — they create it). That 9-digit number is what KiwiPost puts
                on any over-300-GEL declaration, forever.
            </Paragraph>
            <Paragraph>Two things worth knowing:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Optional precaution:
                    </Word> once you're in the tax portal, you can set your portal status to "Inactive," which means you
                    won't be required to file returns, including nil returns. Since you're only using this number to receive
                    parcels — not running a business — that keeps it from creating any filing obligation. (Ana's IE is the
                    opposite case; hers is active by design.)
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        The caveat that might cancel all of this:
                    </Word> if your residency has already given you an <Word>
                        <Bold />
                        11-digit Georgian personal number
                    </Word>, that <Word>
                        <Emphasis />
                        is
                    </Word> your TIN — Georgian residents' 11-digit ID number serves as their tax number across all
                    obligations — and you'd skip the video call entirely, just using that number. Only do the video-call
                    registration if you don't already have an 11-digit personal number.
                </Line>
            </Paragraph>
            <Paragraph>
                I'm deliberately not walking through the form entry live with you, since it's a government KYC step with
                your passport details and a verification call — that's yours to do directly. But once you're through it and
                have the number, that thread is closed permanently.
            </Paragraph>
        </Message>
        <Message
            at="2026-06-26T13:46:09.487793Z"
        >
            <Origin>019f042e-4248-7e58-acd9-cc756e534306</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Oy, this is annoying. A video call? That's more complex</Paragraph>
        </Message>
        <Message
            at="2026-06-26T13:46:37.520333Z"
        >
            <Origin>019f042e-4248-7650-b58a-4fa46ec1b6a9</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Yeah, the video call is a real wrinkle — and you're right that it's heavier than I made the parcel step
                sound earlier. But here's the thing that should take the pressure off: <Word>
                    <Bold />
                    you don't actually need to do any of this right now, and quite possibly not for a long time, maybe never.
                </Word>
            </Paragraph>
            <Paragraph>Walk back up the chain of what triggers it:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    The tax number is only needed to clear a parcel <Word>
                        <Bold />
                        over 300 GEL
                    </Word> (~$110 incl. shipping).
                </Line>
                <Line>Your entire strategy — and your test order — is small, re-buyable, sub-$110 parcels.</Line>
                <Line>So nothing you're about to do touches the tax number at all.</Line>
            </Paragraph>
            <Paragraph>
                You were getting it proactively "for the future." That's a reasonable instinct, but it's optional
                optimization, not a blocker. The whole point of front-loading it was to avoid a JIT scramble — and we
                established the customs clock is generous (parcels sit ~30 days, extendable), so even JIT isn't really a
                scramble. The video call being annoying just tips the math further toward "don't bother yet."
            </Paragraph>
            <Paragraph>So your options, in order of how I'd rank them for you:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Skip it entirely for now.
                    </Word> Do your KiwiPost test order, keep everything under $110, and never think about the tax number.
                    This is the right default.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Get it the easy way later, in person.
                    </Word> If/when you actually plan a big order, walk into any Revenue Service center with your passport —
                    it's free and a staffer handles it at the counter. No camera, no call. The in-person route sidesteps the
                    video-call awkwardness entirely.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        The video call
                    </Word> is just the <Word>
                        <Emphasis />
                        remote
                    </Word> convenience option for people who don't want to travel to an office. Since you're in Tbilisi
                    anyway, in-person is probably less annoying than fiddling with a KYC video call.
                </Line>
            </Paragraph>
            <Paragraph>
                And the caveat that may delete the whole task: if your residency already gave you an <Word>
                    <Bold />
                    11-digit Georgian personal number
                </Word>, you're done — that's your tax number, no registration of any kind needed. That's the first thing to
                check before spending any effort here.
            </Paragraph>
            <Paragraph>
                Bottom line: close that rs.ge tab, go place your test order. The tax number is a "deal with it if and when a
                big parcel actually happens" item, and when that day comes, the in-person counter visit is the low-friction
                path.
            </Paragraph>
        </Message>
        <Message
            at="2026-06-26T13:47:04.316605Z"
        >
            <Origin>019f042f-1987-7d34-ad05-95c3aef0bd98</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                I like how you give possibilities and you have no sense of asking. I want to buy a pair of ray bans. They
                are over 300 GEL. I am, in fact, asking for a reason
            </Paragraph>
        </Message>
        <Message
            at="2026-06-26T13:48:55.315474Z"
        >
            <Origin>019f042f-1987-7ffd-b653-0543c189389c</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Right — that changes everything, and good on you for steering me there. I kept reassuring you that you
                wouldn't need the number; you were telling me you would. So let me drop the "you probably don't need this"
                register and treat it as what it is: a concrete over-threshold purchase that puts the tax number on the
                critical path.
            </Paragraph>
            <Paragraph>Let me get you the actual landed cost so the decision is real, not hand-wavy.</Paragraph>
            <Action>
                Searched the web for “Georgia import duty sunglasses 9004 customs rate VAT 18% consumer goods 0% импортная
                пошлина очки Грузия”
            </Action>
            <Paragraph>
                Confirmed, and now the numbers are clean. Sunglasses (HS 9004.10) carry 0% import duty in Georgia — so
                there's no tariff, just the <Word>
                    <Bold />
                    18% VAT
                </Word> that kicks in because you're over 300 GEL, charged on (price + shipping), plus a small declaration
                fee.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Landed cost, worked out
                </Word> (say a <Math>{"160 pair, ~2.7 GEL/"}</Math>):
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Glasses: $160</Line>
                <Line>Shipping (sunglasses are light, ~0.3 kg at $9/kg): ~$5–8</Line>
                <Line>
                    Customs value ≈ $167 ≈ 450 GEL → over threshold, so 18% VAT on the whole thing ≈ 81 GEL ≈ <Word>
                        <Bold />
                        ~$30
                    </Word>
                </Line>
                <Line>
                    Declaration/processing fee: ~5–25 GEL ≈ <Word>
                        <Bold />
                        ~$2–9
                    </Word>
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Total landed: ~$200
                    </Word> for a $160 pair.
                </Line>
            </Paragraph>
            <Paragraph>
                One genuinely useful wrinkle: <Word>
                    <Bold />
                    buy these from the US, not the UK.
                </Word> KiwiPost's US warehouse is in Newark, <Word>
                    <Bold />
                    Delaware — a no-sales-tax state
                </Word> — so ordering to that address means you pay $0 US sales tax. If you bought the same Ray-Bans from
                Amazon UK, you'd pay 20% UK VAT baked into the price <Word>
                    <Emphasis />
                    and
                </Word> 18% Georgian VAT on import — double taxation. So for this purchase, US/Delaware is the cheapest
                origin by a clear margin.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Now the actual fork that decides your path
                </Word> — and it's the one thing only you can answer: <Word>
                    <Bold />
                    do you already have an 11-digit Georgian personal number from your residency?
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        If yes
                    </Word> → that number <Word>
                        <Emphasis />
                        is
                    </Word> your tax ID. You do nothing at rs.ge. Just give that number (or hand it to KiwiPost's customs
                    contact) when the parcel needs declaring. No video call, no registration, no errand. Done.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        If no
                    </Word> → you need the 9-digit foreign TIN before the parcel clears. Skip the video call — just walk
                    into any Revenue Service center with your passport; staff issue it at the counter, free, no camera. Then
                    it's permanent and reused forever.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Clean sequence either way:
                </Word> sort the number first (check your residency card, or one counter visit), <Word>
                    <Emphasis />
                    then
                </Word> place the Ray-Bans order. That way it's ready when the parcel lands and there's zero clock pressure.
                Though even if you order first, you've got ~30 days of customs storage to produce it — so it's not fragile.
            </Paragraph>
            <Paragraph>
                Last sanity check before you buy: Ray-Bans sell at Tbilisi opticians too. At ~$200 landed, compare against
                the local price for the exact model — sometimes import wins, sometimes local is a wash with the bonus of
                try-on and in-country warranty. If you tell me the model, I can check what it runs in the US versus here.
            </Paragraph>
        </Message>
        <Message
            at="2026-06-26T14:09:04.313882Z"
        >
            <Origin>019f0443-3c41-7526-a13a-88621f4ba9d4</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                No the video call is certainly easier and I don't have the TIN. Nor did you need to compute anything right?
                Yoi really are validating and qualifying my request to just help me figure this out. Sounds like video call
                is most efficient from a time savings standpoint. Using that page, please give me simple steps co I can copy
                and paste
            </Paragraph>
        </Message>
        <Message
            at="2026-06-26T14:09:19.140139Z"
        >
            <Origin>019f0443-3c41-70d5-bb1a-a4e9d2e28967</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                You're right on both counts — you didn't ask for cost math, and the video call is the time-efficient path
                since you'd otherwise have to travel to a center. Here are the steps, copy-paste ready.
            </Paragraph>
            <Heading>Get your Georgian TIN by video call (rs.ge)</Heading>
            <Paragraph>
                <List />
                <Line>
                    &#91; &#93; On the rs.ge site, find and open the <Word>
                        <Bold />
                        "Video Call"
                    </Word> service
                </Line>
                <Line>
                    &#91; &#93; Click the button labeled <Word>
                        <Bold />
                        "A natural person without Georgian citizenship"
                    </Word>
                </Line>
                <Line>
                    &#91; &#93; Fill the short form: <Word>
                        <Bold />
                        first name, last name, passport number, residential address (83 Sairme St, Tbilisi), phone number
                    </Word>
                </Line>
                <Line>
                    &#91; &#93; Click <Word>
                        <Bold />
                        "Contact the operator"
                    </Word> — check your camera and mic are on
                </Line>
                <Line>
                    &#91; &#93; Have your <Word>
                        <Bold />
                        passport in hand
                    </Word> to show on camera
                </Line>
                <Line>
                    &#91; &#93; Do it on a <Word>
                        <Bold />
                        weekday, 09:00–18:00
                    </Word> (the service is closed outside those hours)
                </Line>
                <Line>
                    &#91; &#93; After the call: you'll get a <Word>
                        <Bold />
                        notification in Georgian + an SMS with a login and password
                    </Word> for your tax portal — that SMS contains/unlocks your <Word>
                        <Bold />
                        9-digit TIN
                    </Word>
                </Line>
                <Line>&#91; &#93; Save that TIN — it's permanent, and it's what KiwiPost uses to clear the Ray-Bans</Line>
            </Paragraph>
            <Paragraph>
                Optional, once you're logged into the portal: set status to <Word>
                    <Bold />
                    "Inactive"
                </Word> so the account never asks you to file returns (you're only using the number for parcels).
            </Paragraph>
            <Paragraph>
                One thing I can't see from your screenshot is exactly which tile says "Video Call" on that page. If it's not
                obvious, use the site <Word>
                    <Bold />
                    search
                </Word> (the magnifying glass) for "video" or toggle the language to <Word>
                    <Bold />
                    GEO
                </Word> and look for "ვიდეო ზარი" — sometimes the service surfaces faster in Georgian. Tell me what you see
                and I'll point you to the right one.
            </Paragraph>
        </Message>
        <Message
            at="2026-06-30T12:34:32.563290Z"
        >
            <Origin>019f1886-a925-7aab-b070-61a99f3776f7</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Do some research to figure out why this package might not be shipping. I see that it gives me the option to
                red declare and it’s been in the packages state for a few few days and hasn’t moved. Do I need to put the
                invoice in there? If I do then, how do I get that? That seems like a lot of work.
            </Paragraph>
            <Attachment>Uploaded “IMG_3453.PNG”, whose content the export does not carry</Attachment>
            <Attachment>Uploaded “IMG_3452.PNG”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-06-30T12:35:36.481205Z"
        >
            <Origin>019f1886-a925-734a-98f6-be873d48a3ce</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Let me check how KiwiPost's declaration step actually gates shipping, because a package sitting in
                "Warehouse" usually means it's waiting on you, not on them.
            </Paragraph>
            <Action>
                Searched the web for “kiwipost declaration invoice required package warehouse not shipping how to declare
                parcel Georgia”
            </Action>
            <Paragraph>
                Diagnosed it. It's stuck because the <Word>
                    <Bold />
                    declaration is incomplete — and yes, the invoice is the missing piece.
                </Word> This isn't a customs/tax thing (your $14 supplements are nowhere near 300 GEL); it's KiwiPost's own
                rule. Their terms are explicit: declaration and invoice upload on the KiwiPost page is obligatory within 24
                hours of a parcel showing up in the "warehouse" section. Nothing ships until that's done, regardless of
                value. Once the invoice is uploaded, the declaration finalizes automatically and the package can move.
                That's why it's been parked for days — it's waiting on you, not on them.
            </Paragraph>
            <Paragraph>
                Good news: it's genuinely quick, and you don't need a formal invoice document. <Word>
                    <Bold />
                    A screenshot of the Amazon order confirmation works
                </Word> — the expat guidance is literally "upload the invoice <Word>
                    <Emphasis />
                    or
                </Word> order confirmation," using the actual price you paid. So this is a 2-minute job, not a project.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Get the proof from Amazon (pick the easiest):
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    Amazon app → <Word>
                        <Bold />
                        Your Orders
                    </Word> → tap the supplements order → screenshot the screen showing the item + $13.99. Done.
                </Line>
                <Line>
                    Or, if you want the actual file: Your Orders → the order → <Word>
                        <Bold />
                        "Invoice"
                    </Word> / <Word>
                        <Bold />
                        "Download invoice"
                    </Word> / <Word>
                        <Bold />
                        "Printable Order Summary"
                    </Word> → save the PDF.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Then finish the declaration (you're almost there — Image 1 already has store, category, and value filled):
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    On that Declaration screen, tap <Word>
                        <Bold />
                        "Upload Invoice"
                    </Word> and pick the screenshot/PDF
                </Line>
                <Line>
                    Tap the green <Word>
                        <Bold />
                        "Declaration"
                    </Word> button at the bottom
                </Line>
                <Line>It should drop out of Warehouse and into In Transit</Line>
            </Paragraph>
            <Paragraph>
                The <Word>
                    <Bold />
                    "Redeclare"
                </Word> button you saw just reopens that same form so you can complete/correct it — same destination. Use
                whichever gets you to the form with the Upload Invoice button.
            </Paragraph>
            <Paragraph>
                One forward-looking note so this isn't a surprise each time: KiwiPost requires this declare-plus-invoice
                step on <Word>
                    <Bold />
                    every
                </Word> parcel, even tiny ones — it's a fixed part of their flow. So the habit to build is: the moment a
                package lands in Warehouse, screenshot the order and upload it. For your future sub-$110 orders that's the
                whole ritual; the tax-number/VAT machinery only ever enters for the over-300-GEL ones like the Ray-Bans.
            </Paragraph>
        </Message>
        <Message
            at="2026-06-30T12:37:37.286926Z"
        >
            <Origin>019f1889-7b34-7402-8aa9-78913b23b76e</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>They are upload button doesn’t take me to my photos on my iPhone</Paragraph>
        </Message>
        <Message
            at="2026-06-30T12:38:02.413281Z"
        >
            <Origin>019f1889-7b34-72b2-8c7f-2e5e2d5d2879</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>That's almost always one of two things on iOS. Quickest fixes, in order:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    1. The button is opening "Files," not Photos — and your screenshot lives in Photos.
                </Word> Most likely culprit. Two ways past it:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    In the picker that opened, look at the top/bottom for a <Word>
                        <Bold />
                        "Photos"
                    </Word> tab or a <Word>
                        <Bold />
                        "Browse"
                    </Word> vs other toggle — some let you switch to the photo library there.
                </Line>
                <Line>
                    Easier: <Word>
                        <Bold />
                        put the screenshot into Files first.
                    </Word> Open the screenshot in Photos → tap <Word>
                        <Bold />
                        Share
                    </Word> (box with up-arrow) → <Word>
                        <Bold />
                        "Save to Files"
                    </Word> → pick a spot (e.g. "On My iPhone" or iCloud Drive). Then hit Upload Invoice again and grab it
                    from Files. This sidesteps the whole problem.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    2. The app doesn't have permission to your Photos.
                </Word> Go to <Word>
                    <Bold />
                    Settings → scroll to KiwiPost → Photos → set to "Full Access"
                </Word> (or "Selected Photos" and add the screenshot). If that was on "None," the Upload button would do
                nothing or show an empty library. After changing it, reopen the app and retry.
            </Paragraph>
            <Paragraph>If neither works, two clean fallbacks:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Use a PDF instead of a screenshot.
                    </Word> Some upload fields only accept PDF/document files. Get the Amazon invoice as a PDF (Amazon →
                    Your Orders → the order → Download invoice / Printable Order Summary → Save to Files), then upload that
                    file. A PDF in Files will satisfy a document-only picker.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Do it on a computer.
                    </Word> Log into kiwipost.ge in a browser, open the same package, and upload the screenshot/PDF from
                    your desktop — file uploads are usually more forgiving there than in the iOS app.
                </Line>
            </Paragraph>
            <Paragraph>
                The "save screenshot to Files, then upload from Files" route is the one I'd try first — it fixes the most
                common version of this in about 20 seconds.
            </Paragraph>
        </Message>
        <Message
            at="2026-06-30T13:03:27.150732Z"
        >
            <Origin>019f18a1-2141-7a69-8884-90b422f52dd8</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>OK, that worked so we’ll see if they accept it</Paragraph>
        </Message>
        <Message
            at="2026-06-30T13:03:35.767762Z"
        >
            <Origin>019f18a1-2145-714d-8958-a1786cdf1057</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Nice — that was the stubborn part. Now it just routes to KiwiPost's review, and once the declaration
                finalizes the package should drop out of Warehouse into In Transit.
            </Paragraph>
            <Paragraph>A couple of quick things so you're not left guessing:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        What "accepted" looks like:
                    </Word> the package moves to <Word>
                        <Bold />
                        In Transit
                    </Word>, and the Redeclare/incomplete state clears. If they bounce it, it'll typically be for a value or
                    category mismatch — easy fixes, and you'd just Redeclare.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        No tax number needed here.
                    </Word> This one's $14, far under 300 GEL, so it sails through with zero VAT and none of the TIN
                    business. That stays parked until the Ray-Bans.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        The habit going forward:
                    </Word> screenshot or PDF the order the moment a package hits Warehouse, upload, hit Declaration. That's
                    the whole ritual for your normal sub-$110 orders.
                </Line>
            </Paragraph>
            <Paragraph>
                This was the real test order in disguise — if it lands cleanly and the timing's reasonable, you've got your
                answer on whether KiwiPost works for you. Worth noting how long warehouse-to-pickup actually takes so you've
                got your own number rather than the reviews'. Let me know if it stalls again or if anything looks off when
                it arrives.
            </Paragraph>
        </Message>
        <Message
            at="2026-06-30T13:04:15.260964Z"
        >
            <Origin>019f18a1-ddd7-71be-893b-1ee794df637d</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                I ordered affrin, and I called it a supplement, but maybe it should be a medication. I’m a little bit
                nervous about marking it like that because it’s not a medication from the doctor. What are the rules on
                that?
            </Paragraph>
        </Message>
        <Message
            at="2026-06-30T13:05:37.849674Z"
        >
            <Origin>019f18a1-ddd7-75a5-8019-4b6e1ddba388</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                This is worth getting right rather than guessing — importing anything classed as medicine has its own rules
                in Georgia, separate from the value/VAT stuff. Let me check the actual regulations on bringing OTC
                medication like Afrin in by parcel.
            </Paragraph>
            <Action>
                Searched the web for “Georgia import medication by parcel personal use rules prescription OTC limit ввоз
                лекарств посылкой Грузия физлицо”
            </Action>
            <Paragraph>
                Let me check one more thing that actually matters here — whether receiving medication by <Word>
                    <Emphasis />
                    parcel
                </Word> (as opposed to carrying it in your luggage) has different rules in Georgia, since some countries
                treat those differently.
            </Paragraph>
            <Action>
                Searched the web for “Georgia receive medicine by post parcel individual oxymetazoline nasal spray allowed
                customs ввоз лекарств почтой Грузия посылка разрешено”
            </Action>
            <Paragraph>
                Good news: Afrin is a non-issue, and your nervousness about the "medication" label is actually backwards —
                declaring it accurately is the <Word>
                    <Emphasis />
                    safe
                </Word> move, not the risky one. Here's the verified picture.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Afrin is fine to import.
                </Word> It's oxymetazoline, a plain OTC nasal decongestant — not a narcotic, psychotropic, or controlled
                substance, and not on Georgia's special-control lists. The medications customs actually cares about are
                narcotics, psychotropics, and combination cold/flu products containing pseudoephedrine or codeine (that's
                why Sudafed gets flagged). Afrin is none of those. One bottle is obviously "reasonable personal use."
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    No prescription is required for it.
                </Word> The prescription/doctor's-note requirement kicks in only in two situations, per the rules: you may
                import up to 10 standard packages of a medicine for personal use; above 10 you need medical documentation,
                or the substance is controlled. You're at one unit of a non-controlled drug — neither trigger applies.
                There's also a 2023 rule that an individual may import a medicine for personal use as long as it's approved
                in a country Georgia recognizes — and that list includes the US, EU, UK, Turkey, and others. Afrin is a
                US-approved OTC product, so it qualifies cleanly.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    So on "supplement vs medication":
                </Word> the accurate label is <Word>
                    <Bold />
                    medication
                </Word> (it's a drug, not a dietary supplement), and declaring it correctly will <Word>
                    <Emphasis />
                    not
                </Word> summon a prescription demand for this item — the prescription rule is gated to controlled substances
                and 10+ packages, not to "anything labeled medication." Meanwhile the actual (small) risk runs the other
                way: KiwiPost makes you responsible for the declaration's accuracy, and an incomplete or inaccurate
                declaration can expose you to penalties they'd pass on to you. Your invoice already says "Afrin," so if a
                customs officer glances at it and sees a nasal spray filed under "supplements," that's a mismatch you don't
                want — small stakes on a $14 item, but no reason to invite it.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    What I'd do:
                </Word> use <Word>
                    <Bold />
                    Redeclare
                </Word> and switch the category to medication/medicine if that option exists in their list (and keep the
                value and invoice as-is). It's more accurate, it matches your invoice, and for this specific product it
                carries zero prescription risk. If their dropdown has no clean "medication" option and only something like
                "health/personal care," pick the closest honest fit — the invoice does the real identifying work either way.
            </Paragraph>
            <Paragraph>
                One genuinely useful thing to file away for the future, since this won't be the last time: Georgia is strict
                on a specific set of drugs. If you ever order something with <Word>
                    <Bold />
                    pseudoephedrine, codeine, tramadol, a benzodiazepine, or an ADHD stimulant
                </Word>, that's a different conversation — those can require documentation or be outright restricted. Plain
                OTC stuff like Afrin, ibuprofen, antihistamines, etc. is unremarkable. If you're ever unsure about a
                specific product before ordering, tell me the active ingredient and I'll check it against the control lists.
            </Paragraph>
        </Message>
        <Message
            at="2026-06-30T13:07:42.785856Z"
        >
            <Origin>019f18a5-07c9-7ecd-89b7-dad14c7a75d1</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Right, but all of them have prescriptions in America too except Sudafed. I don’t think what you’re saying is
                specific to those drugs, but probably extends to any drug with a prescription.
            </Paragraph>
        </Message>
        <Message
            at="2026-06-30T13:09:12.222899Z"
        >
            <Origin>019f18a5-07ca-734e-bbf2-6b0a1a70033f</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                That's a fair logical challenge, and you're right to press it — let me not paper over the distinction. The
                drugs I named (codeine, tramadol, benzos, ADHD stimulants) are indeed all prescription-only in the US, so my
                list could look like it's really just "Rx drugs." But I think the operative Georgian category is narrower
                than "anything prescription," and I want to verify the exact line rather than assert it, because this is
                precisely where guessing would be unhelpful.
            </Paragraph>
            <Action>
                Searched the web for “Грузия ввоз рецептурных лекарств для личного пользования нужен ли рецепт нерецептурные
                контролируемые список разница таможня”
            </Action>
            <Paragraph>
                You're right to push, and the verification both corrects and partly vindicates you. The line isn't "those
                five specific drugs" — there's a real three-tier structure, and prescription status matters more than my
                earlier framing implied, <Word>
                    <Emphasis />
                    especially for parcels
                </Word>. Here's the actual shape:
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Tier 1 — OTC (non-prescription):
                </Word> importable for personal use, up to 10 standard packages per person, no documentation needed. Afrin
                lives here — oxymetazoline is OTC in both the US and Georgia. This tier is genuinely unremarkable.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Tier 2 — ordinary prescription drugs that aren't controlled
                </Word> (most antibiotics, cardiac meds, antidepressants without psychotropic scheduling, etc.): a softer
                middle zone. For someone <Word>
                    <Emphasis />
                    carrying
                </Word> them, a prescription and receipt are recommended, and in practice personal quantities pass — but a
                customs officer can ask. And here's the parcel-specific catch I didn't have nailed down before: postal
                shipments containing prescription medicines can be returned to sender (though they sometimes reach the
                addressee). So by mail, Rx status alone is a real risk factor, not a non-issue — that's the part of your
                intuition that's correct.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Tier 3 — controlled substances
                </Word> (narcotic/psychotropic — the codeine/tramadol/benzodiazepine/stimulant group): this is a defined
                legal list under Georgia's special-control statute, and documentation is <Word>
                    <Emphasis />
                    mandatory
                </Word>; without it, import is prohibited. So my list wasn't arbitrary — those are the
                hard-prohibited-without-docs category, which is stricter than "merely prescription." But you're right that I
                made it sound like everything outside that list was free and clear, and that's not accurate for the parcel
                channel.
            </Paragraph>
            <Paragraph>
                So the corrected takeaway: it's not binary, it's a gradient — <Word>
                    <Bold />
                    OTC clears, controlled is blocked without papers, and ordinary prescription drugs sit in between, with a genuine return-to-sender risk specifically when they come by parcel.
                </Word> Your inference that "it extends to prescription drugs generally" is closer to right for the <Word>
                    <Emphasis />
                    mail
                </Word> channel than my original "just these specific drugs" framing was.
            </Paragraph>
            <Paragraph>
                For Afrin specifically, none of that bites — it's Tier 1 OTC, one bottle, well under limits, from a
                recognized country. It clears cleanly. The practical lesson for future orders is the one you arrived at
                yourself: before mailing in anything that's prescription-only in the US, assume the parcel channel treats it
                as at least Tier 2 (return-to-sender risk) and check whether it's actually Tier 3 (blocked). Give me an
                active ingredient anytime and I'll place it in the right tier before you order.
            </Paragraph>
        </Message>
        <Message
            at="2026-06-30T13:10:05.352803Z"
        >
            <Origin>019f18a7-34d1-78d3-ad19-f133bddea1d3</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>I need vindication? What frame are you in? Can we fix it please?</Paragraph>
        </Message>
        <Message
            at="2026-06-30T13:10:12.207267Z"
        >
            <Origin>019f18a7-34d1-79f9-973a-d22193288a82</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                You're right to call that out. "Vindication" framed it as if this were a contest you'd won and I'd lost —
                turning a straightforward factual exchange into something with a scorekeeper. It isn't. You raised a logical
                objection, it was correct, I checked and updated. That's just the work functioning normally. There's no
                winner.
            </Paragraph>
            <Paragraph>
                The frame I slipped into is one where I narrate the social dynamics of being corrected — "you were right,"
                "I was wrong," "credit to you" — instead of just incorporating the correction and moving on. That's noise.
                You don't need me performing graciousness about my own errors; you need the accurate three-tier structure,
                which now stands on its own: OTC clears, controlled is blocked without papers, ordinary prescription sits in
                between with real return-to-sender risk by mail. Afrin is OTC, clears fine. That's the whole content.
            </Paragraph>
            <Paragraph>
                Going forward I'll just fold corrections in plainly and keep going — no "you were right," no
                self-flagellation, no commentary on who held which position. State the updated fact, move on.
            </Paragraph>
        </Message>
        <Message
            at="2026-06-30T13:11:36.293420Z"
        >
            <Origin>019f18a8-9840-795e-afbd-1d2a798d8b01</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                I don’t think narrating vindication is graciousness either because it frames you is probably being right and
                then me needing I don’t know, but can you please just update something in this project to avoid this frame?
                I don’t think it’s unreasonable to think that I should be careful shipping. Anything with an actual
                prescription and I should right? So you’re specific list it gives a false sense of security that I shouldn’t
                have.
            </Paragraph>
        </Message>
        <Message
            at="2026-06-30T13:12:12.651532Z"
        >
            <Origin>019f18a8-9841-72db-bd57-73ab65b0c580</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Edited memory</Action>
            <Action>Edited memory</Action>
            <Action>Edited memory</Action>
            <Paragraph>Done — both are recorded for the project.</Paragraph>
            <Paragraph>
                On the substance: the operating rule is what you said. If it requires a prescription in the US, treat it as
                risky to ship by parcel — not a green light just because it's not on the controlled-substance list. The
                dividing line for safe-to-mail is OTC, full stop. Prescription-but-not-controlled carries return-to-sender
                risk; controlled is blocked without documentation. My earlier list named only the blocked tier, which
                wrongly implied everything below it mails freely. It doesn't.
            </Paragraph>
            <Paragraph>
                So the working heuristic: OTC → ship freely. Anything Rx → assume it can get bounced or held, check the
                specific ingredient before ordering. Afrin is OTC, which is the only reason it's fine.
            </Paragraph>
        </Message>
        <Message
            at="2026-07-01T01:47:15.090388Z"
        >
            <Origin>019f1b5c-6a7d-716e-9894-9975f5cc3cf8</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Is there anything I need to do? There’s that 1 and I don’t know what it means. I don’t feel like the package
                has been declared, but I added the invoice. I think it has all of the data so I’m not sure if it’s missing
                if it is. I just want feedback that it’s going to be shipped
            </Paragraph>
            <Attachment>Uploaded “IMG_3461.PNG”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-07-01T01:48:02.545807Z"
        >
            <Origin>019f1b5c-6a7d-76c6-bac7-08e811f40a2f</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                The "1" is just a counter — it means one package is currently sitting in the Warehouse stage. Not a warning
                or a to-do flag. When it moves, that badge shifts to the In Transit column.
            </Paragraph>
            <Paragraph>
                On whether it's declared: I can't read the internal status from the screenshot, so here's how to confirm it
                yourself in about 15 seconds. Tap the <Word>
                    <Bold />
                    little document/receipt icon
                </Word> at the top-right of the package card (next to the tracking number). That opens the declaration — you
                should see the store, category, value, and your uploaded invoice all attached. If they're all there, it's
                submitted and you're done.
            </Paragraph>
            <Paragraph>
                The thing to double-check, since it's the usual culprit: <Word>
                    <Bold />
                    did you actually tap the green "Declaration" (submit) button after attaching the invoice?
                </Word> Adding the invoice alone doesn't finalize it — the submit press does. If you're not sure, tap <Word>
                    <Bold />
                    Redeclare
                </Word>, confirm the invoice is showing in the form, and hit the green button at the bottom. Re-submitting a
                complete declaration does no harm; it just re-confirms.
            </Paragraph>
            <Paragraph>
                What "it's going to ship" looks like from here: once the declaration is complete, the package stays in
                <Word>
                    <Bold />
                    Warehouse
                </Word> until KiwiPost consolidates it onto the next US→Georgia flight, then it flips to <Word>
                    <Bold />
                    In Transit
                </Word>. So sitting in Warehouse for a bit <Word>
                    <Emphasis />
                    after
                </Word> declaring is normal — it's not stuck, it's waiting for a flight. You don't need to do anything else
                during that window.
            </Paragraph>
            <Paragraph>
                If you open the declaration and the invoice is attached but you still want a human "yes, it's cleared to
                fly," KiwiPost support can confirm directly — in-app chat or +995 32 205 23 24. But if the doc icon shows
                everything filled in with the invoice, that <Word>
                    <Emphasis />
                    is
                </Word> your feedback: nothing missing, it'll move on the next flight.
            </Paragraph>
        </Message>
        <Message
            at="2026-07-01T01:49:09.693439Z"
        >
            <Origin>019f1b5e-2ba5-780c-af54-64213b4d96d1</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>OK, so it’s been declared it’s official</Paragraph>
            <Attachment>Uploaded “IMG_3462.PNG”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-07-01T01:49:18.407362Z"
        >
            <Origin>019f1b5e-2ba5-72ce-9006-c65621920629</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Confirmed — you're done. <Word>
                    <Bold />
                    Declaration Status: Declared
                </Word> (in green) is the signal you were looking for. Nothing else is required from you.
            </Paragraph>
            <Paragraph>
                Everything checks out on that screen: declared amount $13.99, store amazon.com, weight 0.2 kg, branch set to
                Vazha-Pshavela VII Block #1 (your pickup point), and there's already a <Word>
                    <Bold />
                    Transfer Number (ACUSGE000388)
                </Word> assigned — that's KiwiPost's outbound batch reference, which means it's slotted to move, not just
                sitting.
            </Paragraph>
            <Paragraph>
                From here it's automatic: it stays in Warehouse until that transfer batch flies out, then flips to <Word>
                    <Bold />
                    In Transit → Arrived
                </Word>, and you'll get a notification when it's ready to collect at the branch. No action on your end until
                pickup.
            </Paragraph>
            <Paragraph>
                This was your real test run, so worth clocking the dates — declared today; note when it actually lands so
                you've got your own warehouse-to-pickup timing for KiwiPost rather than relying on the reviews.
            </Paragraph>
        </Message>
    </Chapter>
);
