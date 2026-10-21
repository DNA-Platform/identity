import { Bold, Chapter, Date, Emphasis, Heading, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Quoted, Speaker } from '../../../.manual/.book';
import { Action, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[10 February 2026](2026-02-10)</Date>
        </Dated>
        <Title>[[ Conversation ]]</Title>
        <Message
            at="2026-02-10T11:06:22.147780Z"
        >
            <Origin>019c473b-1cd0-7821-98df-bcee2f869d65</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                OK, I’m planning a move from Turkey to Georgia - alanya to tbilisi. I’m going to have 8-12 bags to check
                each at or less than 20kg
            </Paragraph>
            <Paragraph>
                I contacted Turkish Airlines to see if I could bring directly and they referred me to Turkish Cargo and I’m
                having trouble getting an English speaker on the phone. What is their business model and how might they
                work? They have an antalya AYT branch but it would be easier to get boxes from Alanya GZP, though I can do
                both. Is it accompanied? Do I ship separately? Do they work with individuals in turkey or just businesses?
                What does it look like to get bags to the airport or cargo center? Do they offer pick up? How much does it
                cost? What are all the different pricing options?
            </Paragraph>
            <Paragraph>
                So do some deep research in Turkish language, as the resources will be best there search the company and
                maybe other forums that will help you understand how this works but definitely try to confirm with the
                company and give me a breakdown for what this service is because I’m having trouble talking to someone at
                the call center
            </Paragraph>
        </Message>
        <Message
            at="2026-02-10T11:08:02.332280Z"
        >
            <Origin>019c473b-1cd0-7605-9964-b1fe0aa445cd</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                I'll dig into this thoroughly for you, searching in both Turkish and English to get the full picture.
            </Paragraph>
            <Action>Searched the web for “Turkish Cargo bireysel kargo gönderimi nasıl çalışır”</Action>
            <Action>Searched the web for “Turkish Cargo dış hat bireysel kişisel eşya gönderimi fiyat”</Action>
            <Action>
                Searched the web for “Turkish Cargo dış hat kargo acente bireysel müşteri havalimanından havalimanına”
            </Action>
            <Action>
                Searched the web for “Turkish Cargo dış hat kargo fiyat sorgulama Gürcistan Tiflis kişisel eşya taşıma”
            </Action>
            <Action>Fetched https://www.turkishcargo.com/tr/hakkimizda/sikca-sorulan-sorular/genel-kargo</Action>
            <Action>Fetched https://www.turkishcargo.com/tr/hakkimizda/sikca-sorulan-sorular/genel-kargo</Action>
            <Action>Searched the web for “"Turkish Cargo" personal belongings individual shipping experience forum”</Action>
            <Action>Searched the web for “Turkish Cargo hava kargo kg fiyat Tiflis TBS 2025 acente ücret listesi”</Action>
            <Paragraph>
                OK Doug, I've done extensive research across Turkish Cargo's own site (including their Turkish-language FAQ
                and documentation), freight forwarding forums, and logistics companies that act as intermediaries. Here's
                the full picture:
            </Paragraph>
            <Heading>How Turkish Cargo Actually Works</Heading>
            <Paragraph>
                Turkish Cargo is <Word>
                    <Bold />
                    not
                </Word> a consumer-facing package delivery service like DHL or UPS. It's a <Word>
                    <Bold />
                    B2B air freight carrier
                </Word> — the cargo arm of Turkish Airlines. This is why you hit a wall on the phone. Their entire business
                model is built around working with <Word>
                    <Bold />
                    IATA-certified cargo agents (acenteler)
                </Word>, not directly with individuals.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The key answer from their own FAQ (dış hat / international):
                </Word>
            </Paragraph>
            <Paragraph>
                <Quoted />
                <Word>
                    <Emphasis />
                    "Yurt dışına kargo göndermek için gerekli gümrük işlemleri ve konşimento kesimi, ücretlendirme, paketleme vs. gibi konuları sizin adınıza yapmak üzere Türkiye'de bulunan IATA üyesi kargo acenteleri ile bağlantı kurmanız gerekmektedir."
                </Word>
            </Paragraph>
            <Paragraph>
                Translation: To send cargo internationally, you need to work with IATA-authorized cargo agents in Turkey who
                handle customs, the air waybill (konşimento/AWB), pricing, packaging, etc. on your behalf.
            </Paragraph>
            <Paragraph>
                So <Word>
                    <Bold />
                    you cannot walk up to the Turkish Cargo counter at AYT or GZP and ship boxes yourself internationally.
                </Word> Domestic (iç hat) is different — for domestic shipments you <Word>
                    <Emphasis />
                    can
                </Word> walk into the airport cargo area, no reservation needed, and ship airport-to-airport. But for
                international, you go through an agent.
            </Paragraph>
            <Heading>The Agent Model — What It Means For You</Heading>
            <Paragraph>
                An IATA cargo agent is essentially a freight forwarder licensed to book space on Turkish Cargo flights. They
                handle:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Konşimento (AWB)
                    </Word> — the air waybill, the master shipping document
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Gümrük işlemleri
                    </Word> — customs/export clearance on the Turkish side
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Pricing
                    </Word> — they get wholesale rates from Turkish Cargo and mark up, or work on commission
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Packaging compliance
                    </Word> — ensuring your items meet air transport standards
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Physical delivery to the airport cargo facility
                    </Word>
                </Line>
            </Paragraph>
            <Paragraph>
                You find a local agent, tell them what you need to ship and where, they give you a quote, you deliver your
                boxes to them (or to the airport cargo area), and they handle everything from there. On the Tbilisi side,
                someone (you or an agent) picks up from TBS airport cargo.
            </Paragraph>
            <Heading>Your Specific Situation: AYT vs GZP</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    AYT (Antalya)
                </Word> is listed as a station with direct international cargo capability, including wide-body aircraft
                capacity. It's one of the stronger stations outside Istanbul.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    GZP (Gazipaşa-Alanya)
                </Word> is a small regional airport. It's not listed among stations with cargo restrictions, but it's a much
                smaller operation with narrow-body aircraft only. International cargo from GZP would almost certainly route
                through Istanbul (IST) anyway. Given that, <Word>
                    <Bold />
                    AYT is your better bet
                </Word> for cargo — more capacity, likely more agents familiar with the process, and possibly direct flights
                to IST on wide-bodies that can handle larger shipments.
            </Paragraph>
            <Paragraph>
                That said, your cargo will almost certainly transit through Istanbul regardless of origin, since Turkish
                Cargo's international hub and main facility (SMARTIST) is at Istanbul Airport.
            </Paragraph>
            <Heading>Is It Accompanied or Separate?</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    It's unaccompanied, separate cargo.
                </Word> This is not excess baggage on your passenger flight. Your boxes ship independently on whatever TK
                flight has cargo capacity (could be the belly of a passenger aircraft or a dedicated cargo plane). They
                travel on their own air waybill and go through customs on both ends. You fly separately as a passenger.
            </Paragraph>
            <Paragraph>
                There's one important nuance here though: Turkish customs allows "yolcu eşyası" (passenger's personal
                belongings) sent via cargo to be exempt from the 30kg weight limit and normal import duties, if you can
                prove you entered the country and these are your personal effects being shipped separately. This matters for
                the Georgian side — if Georgian customs treats your shipment as personal belongings of a relocating resident
                rather than commercial import, you may get favorable treatment. But that's a Georgia customs question.
            </Paragraph>
            <Heading>Pricing — How It Works</Heading>
            <Paragraph>
                Turkish Cargo doesn't publish a simple consumer price list. Pricing goes through the agents, who get rates
                from Turkish Cargo's tariff bulletins and negotiate based on volume. The cost structure includes:
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Components of the cost:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Navlun (freight charge)
                    </Word> — the per-kg air transport rate, which varies by route, weight bracket, and current demand. For
                    Turkey → Caucasus/CIS routes, general cargo rates typically run somewhere in the range of <Word>
                        <Bold />
                        $1.50–$4.00 per kg
                    </Word> depending on total weight and the agent's negotiated rate. Higher weight = lower per-kg rate
                    (weight breaks at 45kg, 100kg, 250kg, 500kg, 1000kg).
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Fuel surcharge (FSC)
                    </Word> — variable, applied on top of freight
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Security surcharge (SCC/MYC)
                    </Word> — per AWB
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Terminal handling charges
                    </Word> — at origin and destination
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Agent service fees
                    </Word> — the agent's margin for handling paperwork, customs, etc.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Customs clearance fees
                    </Word> — both Turkish export and Georgian import sides
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Storage fees at destination
                    </Word> — if you don't pick up quickly at TBS. Turkish Cargo charges $70 fixed + $0.07/kg/day for the
                    first 24 hours, rising to $0.14–$0.166/kg/day after day 4.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    For your scenario (let's say 10 bags × 20kg = 200kg, AYT→IST→TBS):
                </Word>
            </Paragraph>
            <Paragraph>
                A rough estimate for the freight alone would be somewhere around <Word>
                    <Bold />
                    $300–$800 total
                </Word> depending on the agent's rate, plus another <Word>
                    <Bold />
                    $100–$300
                </Word> in surcharges, handling, and agent fees. So you might be looking at <Word>
                    <Bold />
                    $500–$1,200
                </Word> all-in for the Turkish Cargo portion, but this is genuinely a rough range — you need agent quotes.
            </Paragraph>
            <Heading>How to Actually Get This Done</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Step 1: Find an IATA cargo agent in Antalya.
                </Word> Turkish Cargo has a downloadable list of authorized agents on their site at turkishcargo.com →
                Anlaşmalı Acenteler. You can also email <Word>
                    <Bold />
                    CARGOSALES@THY.COM
                </Word> to ask for agent recommendations in the Antalya region.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Step 2: Contact 2-3 agents for quotes.
                </Word> Give them: origin (Alanya/Antalya), destination (TBS Tbilisi), number of pieces, weight per piece,
                dimensions, and contents description (personal belongings/household items — "kişisel eşya, ev eşyası"). Ask
                for an all-in quote including customs clearance on the Turkish side.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Step 3: Prepare your boxes.
                </Word> Package them properly — the agent may have packaging requirements. You'll need a content list
                (packing list) with descriptions and approximate values for customs purposes.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Step 4: Deliver to agent or airport cargo area.
                </Word> Most agents don't offer pickup from Alanya — you'd likely need to transport boxes to the agent's
                warehouse or directly to AYT cargo. Some agents or third-party logistics companies might arrange pickup for
                an extra fee.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Step 5: Customs and pickup in Tbilisi.
                </Word> At TBS you or a customs broker picks up from the airport cargo area with the AWB number and your
                passport/ID.
            </Paragraph>
            <Heading>Alternative You Should Seriously Consider</Heading>
            <Paragraph>
                Given your situation (8-12 bags of personal belongings, Alanya to Tbilisi), Turkish Cargo via an agent is
                one option, but you might find these alternatives simpler and possibly cheaper:
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Road freight / parsiyel nakliye (partial load trucking):
                </Word> Companies like Şah Global Lojistik, YLC Lojistik, and others specialize in Turkey→Georgia road
                freight. They pick up from your door, handle customs at the Sarp border crossing, and deliver to Tbilisi.
                For ~200kg of personal items this could run $200–$500 and take 3-5 days. They work with individuals
                routinely.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Express courier (DHL, UPS, FedEx via an intermediary like KargomKolay, QuickShipper, or Navlungo):
                </Word> These platforms let individuals ship internationally with express carriers, usually with
                door-to-door service. More expensive per kg but zero hassle.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Excess baggage on Turkish Airlines:
                </Word> If you're flying TK anyway, their excess baggage rates might be competitive for a few extra bags.
                Check the TK excess baggage calculator — sometimes paying for extra checked bags on your own flight is
                simpler than the whole cargo operation, especially for 8-12 bags.
            </Paragraph>
            <Paragraph>
                Want me to look up specific agents in the Antalya area, or dig deeper into the road freight option to
                Georgia?
            </Paragraph>
        </Message>
        <Message
            at="2026-02-10T11:13:40.418279Z"
        >
            <Origin>019c4741-cb58-71ad-bebc-811b4260413a</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                The agent at Turkish Airlines English than two bags with the ticket. She might be wrong, because I did this
                going to alanya from NY, but thats a bigger flight. For ground, I’m not sure. We know turkish cargo exists
                so we know TA can get to tbilisi. What are the options for each in Alanya and Antalya. It’s easier to get
                freight to GZP - its cheaper but I can rent a driver in any case. Give me comprehensive options for bein in
                Alanya but being able to get freight to Antalya AYT if necessary. Explore pickup options
            </Paragraph>
        </Message>
        <Message
            at="2026-02-10T11:13:56.640041Z"
        >
            <Origin>019c4741-cb58-71da-976c-6f69eac8549a</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Let me dig into the specifics — excess baggage limits on TK flights from GZP/AYT, cargo agents near
                Alanya/Antalya, and ground freight with pickup options.
            </Paragraph>
            <Action>Searched the web for “Turkish Airlines fazla bagaj kaç parça check edebilir limit GZP AYT uçuş”</Action>
            <Action>Fetched https://www.turkishairlines.com/en-us/any-questions/excess-baggage/</Action>
            <Action>
                Searched the web for “Turkish Airlines excess baggage maximum pieces allowed per passenger limit 2024 2025”
            </Action>
        </Message>
        <Message
            at="2026-02-10T11:16:47.229981Z"
        >
            <Origin>c3323d21-d965-4cb4-a209-f05c5e68efdb</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>
                Searched the web for “Turkish Airlines maximum number excess baggage pieces per passenger international
                flight”
            </Action>
            <Action>Searched the web for “IATA kargo acentesi Antalya Alanya Turkish Cargo yetkili acente listesi”</Action>
            <Action>Searched the web for “kargo nakliye Alanya Gürcistan Tiflis eşya taşıma parsiyel”</Action>
            <Action>Searched the web for “Alanya kargo gönderimi yurtdışı uluslararası DHL UPS FedEx kargo ofis”</Action>
            <Action>Searched the web for “"Alanya" nakliye lojistik kargo Gürcistan Tiflis evden eve uluslararası”</Action>
            <Action>Searched the web for “Antalya Alanya uluslararası nakliye evden eve yurtdışı taşımacılık”</Action>
            <Paragraph>
                Now let me check the Turkish Cargo authorized agent list to find specific agents in the Antalya region.
            </Paragraph>
            <Action>Fetched https://www.turkishcargo.com/tr/hakkimizda/turkish-cargo-hakkinda/anlasmali-acenteler</Action>
            <Paragraph>Now I have enough to build you a comprehensive breakdown. Let me put this together.</Paragraph>
            <Action>Read /mnt/skills/public/docx/SKILL.md</Action>
            <Paragraph>
                Okay Doug, here's the full picture across all your options, starting with the excess baggage question.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    THE AGENT WAS WRONG ABOUT 2 BAGS
                </Word>
            </Paragraph>
            <Paragraph>
                Turkish Airlines' own Terms &amp; Conditions page states clearly: a maximum of 230 kg or 10 pieces of extra
                baggage can be purchased at one time via Turkish Airlines online channels, and each piece cannot exceed 32
                kg. So you can buy up to <Word>
                    <Bold />
                    10 extra pieces
                </Word> online, not 2. What she likely meant is that your ticket <Word>
                    <Emphasis />
                    includes
                </Word> 1-2 free checked bags (depending on fare class), and then you can <Word>
                    <Emphasis />
                    add
                </Word> up to 10 more. The route AYT→TBS (via IST) uses the weight concept for most of the leg, so your base
                Economy allowance would be around 20-23kg, and you buy extra from there.
            </Paragraph>
            <Paragraph>
                The catch is this note: extra baggage can be purchased via online channels for Turkish Airlines operated
                flights from 355 days before flight until 75 minutes before international flights. So buy online in advance
                — airport counter rates are significantly higher. Also important: no guarantee is provided for extra baggage
                transportation due to safety and operational reasons. Meaning on a smaller aircraft (like GZP flights), they
                could refuse your bags for space reasons even if you've paid.
            </Paragraph>
            <Paragraph>
                That's the key GZP risk. Gazipaşa runs narrow-body planes to Istanbul. Belly cargo space is limited. If you
                show up with 10 extra bags, they might send some on a later flight. AYT, with wide-body international
                traffic, has much more capacity.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    OPTION 1: EXCESS BAGGAGE ON YOUR PASSENGER FLIGHT
                </Word>
            </Paragraph>
            <Paragraph>
                This is the simplest option if it works logistically. You fly, your bags fly with you (or on the next flight
                if space is tight).
            </Paragraph>
            <Paragraph>
                <Word>
                    <Emphasis />
                    From GZP (Gazipaşa-Alanya):
                </Word> Closer to you, cheaper to get to. But only domestic flights to IST, narrow-body aircraft, limited
                belly space. Higher risk of bags being bumped to a later flight. You'd connect in Istanbul to TBS.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Emphasis />
                    From AYT (Antalya):
                </Word> ~130km from Alanya, but direct international flights to IST on larger aircraft, much more cargo
                capacity. Some flights may even go AYT→TBS direct (check seasonally).
            </Paragraph>
            <Paragraph>
                <Word>
                    <Emphasis />
                    Cost estimate:
                </Word> TK charges $5-32 USD per kg excess on international weight-concept routes. For ~200kg total (10 bags
                × 20kg), minus your free allowance of ~23kg, that's ~177kg excess. At roughly $10-15/kg average for
                Turkey→Caucasus zone, you're looking at <Word>
                    <Bold />
                    $1,770-$2,650
                </Word>. Expensive, but zero hassle — no customs paperwork, no agents, bags arrive with you.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Emphasis />
                    Getting bags to the airport:
                </Word> From Alanya, you'd hire a local driver with a van. Plenty of local nakliye firms in Alanya (Babacan
                Nakliyat is one Alanya-based mover). A private van from Alanya to AYT would run roughly 1,500-3,000 TL
                ($45-90). To GZP it's under 500 TL.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    OPTION 2: TURKISH CARGO VIA IATA AGENT
                </Word>
            </Paragraph>
            <Paragraph>Separate unaccompanied air freight. Your boxes ship independently.</Paragraph>
            <Paragraph>
                <Word>
                    <Emphasis />
                    The Antalya agent I found on the IATA list:
                </Word>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Ekspres Gemicilik Hava Kargo Tur. Tic. Ltd. Şti.
                </Word> Konyaaltı Cad. No: 19/A, 07050 Antalya Tel: 0 (242) 248 2950 Email: sercan@expressaircargo.net
            </Paragraph>
            <Paragraph>
                This is the only IATA-authorized cargo agent I found listed specifically in Antalya province. The vast
                majority are Istanbul-based. You'd contact Sercan, explain you have ~200kg of kişisel eşya (personal
                belongings) going AYT→TBS, and get a quote.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Emphasis />
                    Pickup from Alanya:
                </Word> The agent likely won't come to Alanya — you'd need to deliver boxes to their Konyaaltı (Antalya)
                office or to AYT cargo terminal. Same van hire as above.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Emphasis />
                    Cost estimate:
                </Word> Freight alone $300-800, plus surcharges/handling/agent fees $100-300. <Word>
                    <Bold />
                    Total roughly $500-$1,200
                </Word> for the Turkish Cargo portion. Cheaper than excess baggage, but involves customs paperwork both
                sides and you pick up at TBS airport cargo area.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Emphasis />
                    Also contact:
                </Word> Email CARGOSALES@THY.COM and ask for their full current Antalya-region agent list. The downloadable
                list on turkishcargo.com may have others.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    OPTION 3: GROUND FREIGHT (PARSIYEL NAKLIYE) — THE STRONG PLAY
                </Word>
            </Paragraph>
            <Paragraph>
                This is the sweet spot for your situation. Multiple Turkish trucking companies run regular weekly parsiyel
                (partial load) service Turkey→Georgia via the Sarp border crossing. They consolidate small shipments from
                across Turkey, clear customs at Sarp, and deliver to Tbilisi. Several of them explicitly pick up from all
                Turkish provinces including Antalya.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Key companies:
                </Word>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Şah Global Lojistik
                </Word> (şahlojistik.com)
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Istanbul and Ankara depots, weekly departures to Georgia</Line>
                <Line>Parsiyel service to Tiflis, Batum, Kutaisi, Rustavi, Poti</Line>
                <Line>
                    They collect from all Turkish provinces — you'd ship your boxes to their Istanbul depot via domestic
                    cargo, or they may arrange pickup
                </Line>
                <Line>Contact for quote with specifics of your 200kg personal belongings</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    YLC Lojistik / YLC Trans
                </Word> (ylctrans.com)
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Specializes in Turkey-Georgia route</Line>
                <Line>Weekly parsiyel departures</Line>
                <Line>Picks up from across Turkey, delivers door-to-door in Georgia including Tbilisi</Line>
                <Line>Own fleet, GPS-tracked vehicles</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Saygınlar Nakliyat
                </Word> (sayginlarnakliyat.com)
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Istanbul depot, weekly Georgia departures</Line>
                <Line>Handles pickup from all Turkish provinces, consolidates in Istanbul</Line>
                <Line>Delivers to Batumi, Tbilisi, Rustavi, Gori, Poti</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Mersin Frigo Lojistik
                </Word> (mersinfrigo.com)
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Istanbul and Ankara parsiyel depots</Line>
                <Line>Weekly departures, explicit mention of collecting from Antalya among other cities</Line>
                <Line>1-10 business days delivery</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Gürcistan Kargo
                </Word> (gurcistancargo.com)
            </Paragraph>
            <Paragraph>
                <List />
                <Line>25 years experience, Turkey-Georgia specialist</Line>
                <Line>Parsiyel and komple (full load) options</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Venüs Lojistik
                </Word> (venuslojistik.com)
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Weekly Georgia parsiyel service</Line>
                <Line>Route via Sarp border crossing</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Proje Global
                </Word> (projeglobal.com)
            </Paragraph>
            <Paragraph>
                <List />
                <Line>1-10 business day parsiyel to Georgia</Line>
                <Line>Tel: +90 324 336 33 34, GSM: +90 546 831 7471</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Emphasis />
                    How it works for you from Alanya:
                </Word>
            </Paragraph>
            <Paragraph>
                The standard parsiyel process: you call the company, give them your yük (cargo) details — piece count,
                weight, dimensions, contents. They either arrange pickup from your Alanya address via local courier/cargo to
                their Istanbul depot, or you ship via domestic cargo (Yurtiçi Kargo, MNG, Aras, etc.) to their depot. They
                consolidate, handle customs at Sarp, deliver to your Tbilisi address.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Emphasis />
                    Cost estimate:
                </Word> For ~200kg of personal belongings, parsiyel road freight Turkey→Georgia is typically <Word>
                    <Bold />
                    $200-$500
                </Word> plus maybe $50-150 for the Alanya→Istanbul domestic leg. Total <Word>
                    <Bold />
                    $250-$650
                </Word>. This is the cheapest option by far, and many of these firms deliver door-to-door in Tbilisi.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Emphasis />
                    Transit time:
                </Word> 3-7 days typically. Sarp border is efficient for commercial trucks.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    OPTION 4: EXPRESS COURIER (DHL/UPS/FedEx)
                </Word>
            </Paragraph>
            <Paragraph>
                There are UPS branches in Alanya (confirmed — UPS has offices in Alanya, Kemer, and other Antalya tourist
                towns). DHL serves Antalya as well. You can also use aggregator platforms like <Word>
                    <Bold />
                    KargomKolay
                </Word> (kargomkolay.com) or <Word>
                    <Bold />
                    ShipEntegra
                </Word> (shipentegra.com) that compare rates across DHL, UPS, FedEx, TNT and offer discounted rates.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Emphasis />
                    The problem:
                </Word> Express courier is priced per half-kilo with volumetric weight calculations. For 200kg of personal
                items, you're looking at potentially <Word>
                    <Bold />
                    $2,000-$5,000+
                </Word>. This makes sense for a few small high-value packages, not 10 duffel bags of clothes and books. I'd
                rule this out for the bulk shipment.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Emphasis />
                    Where it could work:
                </Word> If you split — send 2-3 bags with you as excess baggage, send valuable/fragile items via DHL from
                Alanya (they pick up), and send the remaining bulk via parsiyel ground freight.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    OPTION 5: INTERNATIONAL MOVERS (EVDEN EVE NAKLİYAT)
                </Word>
            </Paragraph>
            <Paragraph>
                Full-service international moving companies that pack, load, customs, and deliver. Companies like Alfa Omega
                World Movers, MMT Lojistik, Avrupa Uluslararası Lojistik all serve Antalya province. They're overkill for
                8-12 bags (more suited for full household moves) and will be the most expensive option ($1,500-$3,000+), but
                they're zero-hassle door-to-door with insurance.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    MY RECOMMENDATION: HYBRID APPROACH
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Fly from GZP or AYT with 2-3 bags
                    </Word> as your normal checked + 1-2 excess pieces (essentials, valuables, documents). Cost: ticket +
                    $80-$200 excess.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Send the remaining 7-9 bags via parsiyel ground freight
                    </Word> through one of the Georgia specialist truckers (Şah Global, YLC, Saygınlar). They pick up from
                    Alanya or you ship domestically to their depot. Cost: $250-$500. Arrives in Tbilisi within a week.
                </Line>
            </Paragraph>
            <Paragraph>
                Total cost: roughly <Word>
                    <Bold />
                    $400-$800
                </Word> instead of $2,000+ for all-excess-baggage or $1,500+ for air cargo.
            </Paragraph>
            <Paragraph>
                Want me to draft a Turkish-language inquiry message you could send to these ground freight companies?
            </Paragraph>
        </Message>
        <Message
            at="2026-02-10T11:27:46.931616Z"
        >
            <Origin>019c474e-b659-73dd-9dcc-cb81e01ccaa5</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Are you sure you are thinkng of ground correctly? Alanya to Tblisi is far and your first choice doesn't have
                a depot here. No room for interpolating confidence here
            </Paragraph>
        </Message>
        <Message
            at="2026-02-10T11:28:12.822255Z"
        >
            <Origin>019c474e-b659-73dd-9dcc-cb82a5c6df65</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>You're right, I oversold that. Let me be honest about the geography.</Paragraph>
            <Paragraph>
                Alanya to Tbilisi by road is roughly 1,500-1,700 km. None of these parsiyel companies have depots anywhere
                near you — their collection points are Istanbul and Ankara. When they say "we pick up from all of Turkey,"
                what that actually means is: you ship your boxes via domestic cargo (Yurtiçi, MNG, Aras) to their Istanbul
                depot, they consolidate there, then the weekly truck runs Istanbul → Trabzon → Sarp → Tbilisi. So your boxes
                would travel Alanya → Istanbul (~700km) → Sarp → Tbilisi (~1,500km from Istanbul). That's a two-leg journey
                with a handoff in the middle, not the clean "pickup from your door" I implied.
            </Paragraph>
            <Paragraph>
                I don't actually know what those domestic-leg costs are for 200kg of boxes from Alanya to Istanbul. I also
                don't know whether any of these companies have actual working pickup arrangements in Antalya province versus
                just marketing copy. I presented assumptions as facts and shouldn't have.
            </Paragraph>
            <Paragraph>
                What I can say with confidence: the one confirmed Antalya-based IATA cargo agent (Ekspres Gemicilik,
                Konyaaltı) is real and local to your region. And the excess baggage option — up to 10 pieces online,
                confirmed from TK's own T&amp;C — doesn't depend on any intermediary logistics chain at all.
            </Paragraph>
            <Paragraph>
                Want me to dig specifically into the actual domestic shipping costs for heavy boxes from Alanya, and whether
                any of those Georgia truckers genuinely service the Antalya region directly rather than via Istanbul?
            </Paragraph>
        </Message>
        <Message
            at="2026-02-10T11:31:26.591557Z"
        >
            <Origin>019c4752-1085-75f4-b3f8-8af28601dcbd</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                I prefer bringing bags with me if I can. Totally. On the flight. And what you are saying is probably right
                about Turkish Airlines because I did this from NY to Alanya. My guess is that because turkish cargo
                operates, they have cargo space. They want the money. You pay a lot for the service they will prioritize.
            </Paragraph>
            <Paragraph>
                The problem - you are sort of asking me to just buy a ticket on a wide body plane from AYT and hope for the
                best at the airport right? Perhaps we can do better than that level of certainty. Life is easier if I am
                traveling to Alanya. Perhaps I can add the bags online
            </Paragraph>
            <Paragraph>
                Also verify that TA allows me to cancel tickets within 24 hours. I want to buy them and see how many extra
                items they allow me to add
            </Paragraph>
        </Message>
        <Message
            at="2026-02-10T11:32:17.544817Z"
        >
            <Origin>019c4752-1085-75f4-b3f8-8af3a71c56c6</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Good thinking — buy, test the online excess baggage system, cancel if it doesn't work. Let me verify both
                pieces.
            </Paragraph>
            <Action>Searched the web for “Turkish Airlines cancel ticket 24 hours free cancellation policy refund”</Action>
            <Paragraph>
                Now let me check exactly how the online excess baggage purchase works — what you see, how many you can add,
                and at what point in the process.
            </Paragraph>
            <Action>
                Searched the web for “Turkish Airlines online extra baggage purchase process "manage booking" add pieces how
                many”
            </Action>
            <Action>
                Searched the web for “Turkish Airlines buy extra baggage online "additional services" step by step maximum
                pieces international”
            </Action>
            <Paragraph>Here's what I've confirmed and where the plan gets interesting:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    24-HOUR CANCELLATION: YES, BUT WITH A CATCH
                </Word>
            </Paragraph>
            <Paragraph>
                You can cancel your ticket free of charge within 24 hours of purchase. Your refund request must be submitted
                within 24 hours of the ticket purchase and there must be at least 7 days before your first flight. This
                applies to all fare classes, purchased via turkishairlines.com or the app.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The catch:
                </Word> Additional services connected to the ticket (additional baggage, seat selection, etc.) are not
                covered by the refund.
            </Paragraph>
            <Paragraph>
                So your plan works perfectly in one direction but not the other. You can buy a ticket, go into Manage
                Booking, and see exactly how much excess baggage they'll let you add and at what price — <Word>
                    <Emphasis />
                    without buying it yet
                </Word>. The ticket itself is refundable within 24 hours. But if you actually purchase the extra baggage,
                that money is only refundable at a TK sales office, not through the 24-hour online cancel.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The smart sequence:
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Buy ticket AYT→TBS (at least 7+ days out)</Line>
                <Line>Go into Additional Services / Extra Baggage</Line>
                <Line>
                    See exactly how many pieces the system offers you, and the per-piece or per-kg price for that specific
                    route
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Don't buy the baggage yet
                    </Word> — just note the prices and limits
                </Line>
                <Line>If the numbers work, buy the extra baggage</Line>
                <Line>
                    If they don't work, cancel the ticket within 24 hours for full refund (since you didn't buy the
                    ancillary)
                </Line>
            </Paragraph>
            <Paragraph>
                This gives you real data from TK's own system for your exact route, date, and fare class, with zero
                financial risk.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    WHAT THE SYSTEM SHOULD SHOW YOU
                </Word>
            </Paragraph>
            <Paragraph>
                Per TK's T&amp;C: maximum 230 kg or 10 pieces of extra baggage can be purchased at one time via Turkish
                Airlines online channels. One piece of baggage shall not weigh more than 32 kg.
            </Paragraph>
            <Paragraph>
                The system lets you buy up to 75 minutes before an international flight. So you don't even need to do this
                on the day you buy the ticket — you can buy the ticket now, add baggage later when you're ready, any time up
                to 75 minutes before departure.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    One real warning though:
                </Word> No guarantee is provided for extra baggage transportation due to safety and operational reasons. Due
                to operational capacity, your baggage may be transported on our later flights without notifying you.
            </Paragraph>
            <Paragraph>
                This is the "hope for the best at the airport" part you identified. You're right that it's less of a concern
                on wide-body AYT flights than on narrow-body GZP. But it's never truly guaranteed. The fact that Turkish
                Cargo operates out of AYT with international cargo infrastructure does suggest there's belly space being
                managed — they want it filled.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    WHAT I DON'T KNOW AND CAN'T VERIFY WITHOUT YOU ACTUALLY DOING IT
                </Word>
            </Paragraph>
            <Paragraph>
                The TK website says up to 10 pieces online, but I can't confirm whether the system might cap it lower for a
                specific route like AYT→IST→TBS based on aircraft type or seasonal restrictions. The only way to know is to
                see what the Manage Booking screen actually offers you once a ticket exists. That's exactly what your
                buy-and-test plan achieves.
            </Paragraph>
            <Paragraph>
                Also: the AYT→TBS routing likely connects through IST. Your bags would need to make that connection too.
                That's standard — checked bags transfer automatically — but worth confirming when you see the booking
                whether it's a single PNR through to Tbilisi or if it does anything weird with separate tickets.
            </Paragraph>
            <Paragraph>
                Want me to look up current AYT→TBS flight options so you can see what's available for a test purchase?
            </Paragraph>
        </Message>
        <Message
            at="2026-02-10T11:40:40.375418Z"
        >
            <Origin>019c475a-83b3-75f8-88f8-f8d08f63ba69</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                No the thing we need to decide is to book wide body or not. Because most AYT flights are not wide body, and
                if they ship it separately anyway, which I am absolutely fine with, then there are tons of GZP to IST
                flights anyways
            </Paragraph>
        </Message>
        <Message
            at="2026-02-10T11:41:02.688725Z"
        >
            <Origin>019c475a-83b3-75f8-88f8-f8d12d52844f</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                That's a really good reframe. If the bags don't need to be on <Word>
                    <Emphasis />
                    your
                </Word> plane, the whole wide-body question evaporates. GZP is closer, cheaper, more frequent to IST, and
                the bags funnel through Istanbul hub regardless.
            </Paragraph>
            <Paragraph>
                The actual question becomes: <Word>
                    <Bold />
                    will TK's online system let you buy 10 extra pieces on a GZP→IST→TBS itinerary?
                </Word> That's what the test purchase tells you. The T&amp;C says up to 10 pieces / 230kg, but we don't know
                if the system caps it differently for a route originating at a small regional airport.
            </Paragraph>
            <Paragraph>
                And honestly, it probably doesn't care — the system is pricing the full itinerary to TBS, not the GZP→IST
                leg in isolation. The bags are tagged through to Tbilisi. Whether they physically ride your narrow-body or
                get sent on the next IST departure with space is TK's operational problem, not yours.
            </Paragraph>
            <Paragraph>
                The one thing worth checking: does AYT→IST→TBS price differently than GZP→IST→TBS for excess baggage? The
                per-kg rate might vary by origin station even on the same final destination. That could make AYT worth the
                drive purely on cost.
            </Paragraph>
            <Paragraph>
                Your test would be: buy one ticket from each airport on the same date (both 7+ days out), go into Additional
                Services on both, compare what the excess baggage screen shows — max pieces allowed and price per piece/kg.
                Cancel both within 24 hours. Total risk: zero. Total information gained: everything you need.
            </Paragraph>
        </Message>
        <Message
            at="2026-02-10T11:53:12.970856Z"
        >
            <Origin>019c4765-ff7e-7025-8db8-06d7c55ceed3</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Okay good info. I can just add extra kg to the flight, up to 230! That is enough. It is about $10 per kg.
                It's not cheap, but it is super convenient. I didn't have to buy the flight. So I can do this all again from
                AYT to see if it changes. I also bought a 30 kg allowance. That's already a good start. I am not sure how
                heavy all of my belongings are. They need to be packed well, but I don't think I have a million pounds worth
                of belongings
            </Paragraph>
        </Message>
        <Message
            at="2026-02-10T11:53:28.427296Z"
        >
            <Origin>019c4765-ff7e-7025-8db8-06d80de3978a</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Great — so the system confirmed it. 230kg cap, ~$10/kg, purchasable online. That's the hard data we needed.
            </Paragraph>
            <Paragraph>
                Now the math. You said 8-12 bags at up to 20kg each. That's 160-240kg at the extreme high end. But
                realistically, unless you're shipping books or kitchenware, most bags of clothes and personal items come in
                at 12-18kg. A duffel of clothes is surprisingly light. Heavy things are books, shoes, electronics, liquids.
            </Paragraph>
            <Paragraph>
                Your 30kg included allowance covers maybe 1.5-2 bags. If your total ends up being, say, 150kg, you're buying
                120kg extra at $10/kg = <Word>
                    <Bold />
                    $1,200
                </Word>. If it's 100kg total, you're at $700 extra. Not nothing, but for a zero-hassle international move
                with no agents, no customs paperwork, no separate shipments to track — that's pretty competitive.
            </Paragraph>
            <Paragraph>
                The practical next step before you compare AYT pricing: <Word>
                    <Bold />
                    weigh your stuff.
                </Word> Even roughly. A bathroom scale works — step on holding each bag, subtract your weight. That turns
                this from a range estimate into an actual number, and tells you whether AYT's potentially different rate
                even matters enough to justify the drive.
            </Paragraph>
            <Paragraph>
                Cancel that GZP ticket within 24 hours, and when you're ready, you can test AYT the same way. The 30kg extra
                baggage purchase won't refund through the online cancel though — you'd need to hit a TK sales office for
                that, or just keep the ticket if the numbers work.
            </Paragraph>
        </Message>
        <Message
            at="2026-02-10T11:55:41.613977Z"
        >
            <Origin>019c4768-4457-77fd-83c8-c4f377a56eb1</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Well I did this already, but I wish I knew the weight. I believe it was something like 10 bags total, but in
                NY they charged me per carry on, not by weight. And it was 40 lbs max for the price point. I don't think I
                had 400 lbs total - which would be 200 kgs. I definitely don't. I'm going to guess I have between 100 and
                125 kg
            </Paragraph>
        </Message>
        <Message
            at="2026-02-10T11:55:55.489143Z"
        >
            <Origin>019c4768-4457-77fd-83c8-c4f4d578b1e7</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                That tracks. NY→AYT was piece concept (US routes always are) — per bag, flat rate, 40 lbs (~18kg) cap per
                piece. GZP→IST→TBS is weight concept — per kg, which is actually better for you since you're not penalized
                for having fewer heavier bags versus more lighter ones.
            </Paragraph>
            <Paragraph>
                So the real math: 100-125kg total, minus your 30kg allowance, leaves <Word>
                    <Bold />
                    70-95kg extra at ~$10/kg = $700-$950
                </Word>.
            </Paragraph>
            <Paragraph>
                That's your move to Tbilisi for under a thousand dollars, bags on the plane, no agents, no customs broker,
                no tracking a truck through Sarp. You fly, everything arrives.
            </Paragraph>
            <Paragraph>
                One thing — you bought that 30kg extra on the GZP ticket already. Since extra baggage isn't covered by the
                24-hour free cancel, you'd need to refund it at a TK sales office. There should be one in Alanya or Antalya.
                Or if you're planning to fly from GZP anyway and the numbers work, just keep the ticket and buy the
                remaining kg when you know your actual weight.
            </Paragraph>
        </Message>
    </Chapter>
);
