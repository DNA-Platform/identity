import { Bold, Chapter, Emphasis, Line, List, Paragraph, Table, Title, Word } from '@dna-platform/public';
import { Message, Speaker } from '../../../.manual/.book';
import { Action, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Title>[[ Conversation ]]</Title>
        <Message
            at="2026-01-11T05:33:06.807099Z"
        >
            <Origin>019bab8b-394c-7556-98a6-6e6698fbb093</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                What are the closest other airports to Batumi georgia? Do you have any of them have nonstop flights to
                Moscow?
            </Paragraph>
        </Message>
        <Message
            at="2026-01-11T05:33:33.057731Z"
        >
            <Origin>019bab8b-394c-7556-98a6-6e674a5da208</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched the web for “airports near Batumi Georgia nonstop flights Moscow”</Action>
            <Action>Searched the web for “airports near Batumi Georgia Trabzon Kutaisi Tbilisi distance”</Action>
            <Action>Searched the web for “Kutaisi airport Moscow nonstop flights 2025”</Action>
            <Action>Searched the web for “Trabzon airport nonstop flights Moscow Russia”</Action>
            <Paragraph>Here's the rundown on airports near Batumi and their Moscow connectivity:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Closest Airports to Batumi:
                </Word>
            </Paragraph>
            <Paragraph>
                <Table />
                <Line>
                    <Word>Airport</Word>
                    <Word>Distance</Word>
                    <Word>Drive Time</Word>
                </Line>
                <Line>
                    <Word>Rize-Artvin (RZV) - Turkey</Word>
                    <Word>~80 km</Word>
                    <Word>~1.5 hrs</Word>
                </Line>
                <Line>
                    <Word>Kutaisi (KUT) - Georgia</Word>
                    <Word>~127 km</Word>
                    <Word>~2 hrs</Word>
                </Line>
                <Line>
                    <Word>Trabzon (TZX) - Turkey</Word>
                    <Word>~200 km</Word>
                    <Word>~3 hrs</Word>
                </Line>
                <Line>
                    <Word>Tbilisi (TBS) - Georgia</Word>
                    <Word>~390 km</Word>
                    <Word>~4.5-5 hrs</Word>
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Nonstop Flights to Moscow:
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Batumi (BUS)
                    </Word> - Yes! Red Wings operates 2 nonstop flights per week (Fridays and Sundays) to Moscow Domodedovo
                    (DME), flight time ~3.5 hours.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Tbilisi (TBS)
                    </Word> - Yes. Georgian Airways and Azimuth operate direct flights to Moscow Vnukovo (VKO), flight time
                    ~3 hours 10 minutes.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Kutaisi (KUT)
                    </Word> - Very limited. Red Wings offers about 1 nonstop flight per week from Moscow to Kutaisi, but the
                    reverse direction shows no current direct service. Mostly connecting flights via Minsk or Istanbul.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Trabzon (TZX)
                    </Word> - No nonstop flights. Only connecting options, typically via Istanbul or Baku.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Rize-Artvin (RZV)
                    </Word> - Small regional airport, no Moscow service.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Bottom line for Ana's Moscow trips:
                </Word> Batumi itself actually has the most convenient option with those twice-weekly Red Wings flights.
                Tbilisi has more frequent direct service if the timing doesn't work out, though it's a longer drive. Given
                your current mobility situation, the Batumi direct flights on Fridays/Sundays would be the path of least
                resistance when timing aligns with court dates.
            </Paragraph>
        </Message>
        <Message
            at="2026-01-11T05:35:25.161088Z"
        >
            <Origin>019bab8d-55af-70ef-9323-4692e43a5bbe</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                If you are not allowed in a country for Visa reasons, can you travel through there? Ana overstayed her
                Turkish visa, but can she do a layover through Istanbul?
            </Paragraph>
        </Message>
        <Message
            at="2026-01-11T05:35:38.357777Z"
        >
            <Origin>019bab8d-55af-70ef-9323-469367ab9335</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                This is a really important question for Ana's travel planning. The short answer is: <Word>
                    <Bold />
                    it depends on whether she needs to pass through immigration
                </Word>.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Airside Transit (No Immigration):
                </Word> If Ana stays in the international transit zone and doesn't leave the secure area of the airport, she
                typically wouldn't pass through Turkish immigration. Many airports allow this for connecting flights on the
                same ticket. Istanbul airports (both IST and SAW) have international transit areas.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    However, there are complicating factors:
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Turkey's transit visa policy
                    </Word> - Turkey generally allows visa-free transit for passengers staying in the international zone,
                    but airlines check passenger eligibility before boarding. If Ana is flagged in the system for an
                    overstay, the airline might refuse to board her even for a transit.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        The overstay itself
                    </Word> - Turkish immigration records overstays. When she left Turkey, she likely received an entry ban
                    (typically 1-5 years depending on the length of overstay). This ban usually applies to <Word>
                        <Emphasis />
                        entry
                    </Word>, but airlines often check this at departure and may be cautious.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Airline liability
                    </Word> - Airlines face fines if they transport passengers who get denied entry, so they tend to be
                    conservative. Even for transit, they might refuse boarding if there's any flag on her record.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Practical recommendations:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Safest option:
                    </Word> Book flights that don't transit through Turkey at all. The Batumi-Moscow Red Wings direct flight
                    avoids this entirely.
                </Line>
                <Line>
                    If a Turkish transit is necessary, she should contact the specific airline directly and explain the
                    situation before booking.
                </Line>
                <Line>Consider Minsk (Belavia) or Baku as alternative connection points.</Line>
            </Paragraph>
            <Paragraph>Do you know how long the overstay was? That would help estimate the likely ban duration.</Paragraph>
        </Message>
        <Message
            at="2026-01-11T05:37:21.951625Z"
        >
            <Origin>019bab8f-1dc8-7530-8d59-937c769c566d</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                She needs to get the Moscow today or tonight or even early tomorrow morning from Batumi. Her flight was
                delayed and now she won’t make her connecting flight in kresnadar (sp?) no we don’t know how to get her
                there because she needs to be there tomorrow morning so she can use a notary.
            </Paragraph>
        </Message>
        <Message
            at="2026-01-11T05:37:46.001864Z"
        >
            <Origin>019bab8f-1dc8-7530-8d59-937d5014e7f9</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Let me search for immediate options.</Paragraph>
            <Action>Searched the web for “Batumi Moscow flights today January 2026”</Action>
            <Action>Used user time v0</Action>
            <Action>Searched the web for “Tbilisi Moscow flights January 11 12 2026”</Action>
            <Paragraph>
                Okay, it's currently <Word>
                    <Bold />
                    Sunday January 11, around 9:37 AM
                </Word> in Batumi (Georgia time, +4). Here's what I'm seeing for options:
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    IMMEDIATE OPTIONS:
                </Word>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    From Batumi (BUS):
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    Red Wings direct flight departs 14:10, arrives Moscow DME 16:40 — but this runs on <Word>
                        <Bold />
                        Tuesday, Friday, Sunday
                    </Word>. Today is Sunday, so <Word>
                        <Bold />
                        this might be available TODAY
                    </Word>. Check immediately!
                </Line>
                <Line>Belavia via Minsk departs 05:30 — already missed this morning</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    From Tbilisi (TBS):
                </Word> — 4.5-5 hour drive from Batumi
            </Paragraph>
            <Paragraph>
                <List />
                <Line>3 direct flights every day to Moscow Vnukovo</Line>
                <Line>Earliest flight departs at 09:00, latest departs at 23:30</Line>
                <Line>Georgian Airways and Azimuth operate these</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    URGENT ACTION ITEMS:
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Check Red Wings WZ552 from Batumi TODAY
                    </Word> — if she can get a seat on the 14:10 departure, she'd be in Moscow by 16:40 (local time). That's
                    the fastest option.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        If Batumi flight is sold out/unavailable:
                    </Word> Drive to Tbilisi immediately. It's ~5 hours but there are multiple daily flights. The 23:30
                    departure would get her there by 01:30 Moscow time — tight for a morning notary but possible.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Backup via Minsk:
                    </Word> Belavia connects through Minsk and avoids Turkey entirely, but check availability.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Where to book:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Red Wings: redwings.ru or aviasales.ge</Line>
                <Line>Georgian Airways: georgian-airways.com</Line>
                <Line>Azimuth: azimuth.aero</Line>
            </Paragraph>
            <Paragraph>
                Does she have her passport with her? Is the original Krasnodar (KRR) connection completely dead, or is there
                any rebooking option through the original airline?
            </Paragraph>
        </Message>
        <Message
            at="2026-01-11T05:57:05.686293Z"
        >
            <Origin>019baba1-2dc9-75d1-9fd6-6a230c724c8c</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Ana will be in Kresnodar when she was supposed to be in Moscow, but her flight was canceled. She needs to
                execute three or four notary actions. When removing legal representation. One giving it. And two giving
                broad power of attorney to two family members.
            </Paragraph>
            <Paragraph>Can she accomplish all of these things from any Russian city</Paragraph>
        </Message>
        <Message
            at="2026-01-11T05:57:29.072834Z"
        >
            <Origin>019baba1-2dc9-75d1-9fd6-6a2446ea2d9f</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                That's a crucial question. Let me search for how Russian notary services work geographically.
            </Paragraph>
            <Action>
                Searched the web for “Russia notary services any city power of attorney доверенность нотариус любой город”
            </Action>
            <Action>
                Searched the web for “Россия нотариус доверенность можно оформить в любом городе не по месту регистрации”
            </Action>
            <Paragraph>
                <Word>
                    <Bold />
                    Good news — yes, Ana CAN do all of this in Krasnodar (or any Russian city).
                </Word>
            </Paragraph>
            <Paragraph>Here's what I found:</Paragraph>
            <Paragraph>
                Допускается оформление доверенности в другом городе, а не только там, где постоянно проживает доверитель.
                Обратиться можно в любую нотариальную контору — meaning you can execute a power of attorney in any city, not
                just where you're registered. Нотариальную доверенность можно оформить в любом регионе РФ через нотариальную
                контору.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Key points:
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Registration (прописка) doesn't matter
                    </Word> — Главные условия ее удостоверения нотариусом: установление личности заявителя и его
                    дееспособности, место жительства не имеет значения. The notary only needs to verify her identity and
                    legal capacity — place of residence is irrelevant.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        All four actions can be done at ANY notary in Russia:
                    </Word>
                </Line>
                <Paragraph>
                    <List />
                    <Line>Revoking existing representation ✓</Line>
                    <Line>Granting new representation ✓</Line>
                    <Line>Two broad powers of attorney to family members ✓</Line>
                </Paragraph>
                <Line>
                    <Word>
                        <Bold />
                        What Ana needs:
                    </Word>
                </Line>
                <Paragraph>
                    <List />
                    <Line>Her Russian internal passport (внутренний паспорт)</Line>
                    <Line>
                        Passport data for the people she's granting powers to (full name, passport numbers, registration
                        addresses)
                    </Line>
                    <Line>Details of the existing representation she's revoking</Line>
                </Paragraph>
                <Line>
                    <Word>
                        <Bold />
                        The notary system is unified
                    </Word> — При оформлении доверенности и при ее отмене нотариус вносит соответствующую информацию в
                    единую информационную систему нотариата. All notarial actions get entered into a unified electronic
                    system, so revocations and new powers are immediately valid nationwide.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Bottom line:
                </Word> She should find a notary office in Krasnodar that's open tomorrow (Monday), bring her passport and
                the recipient details, and she can complete everything there. No need to rush to Moscow.
            </Paragraph>
            <Paragraph>Does she have the passport details for the family members receiving the POAs?</Paragraph>
        </Message>
        <Message
            at="2026-01-11T06:07:03.446803Z"
        >
            <Origin>019babaa-4cc1-7392-99ea-224d481b8477</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Its surprisingly hard to get from batumi to moscow. Have flight slowed down in recent years
            </Paragraph>
        </Message>
        <Message
            at="2026-01-11T06:07:26.533497Z"
        >
            <Origin>019babaa-4cc1-7392-99ea-224e42011b19</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched the web for “Russia Georgia flights ban restrictions 2024 2025”</Action>
            <Paragraph>Yes, exactly. Here's what happened:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    2019-2023: Complete ban
                </Word> Russia unilaterally imposed a ban on direct flights by Russian airlines to Georgia in 2019 after a
                wave of anti-Kremlin protests in Georgia. The protests were sparked when a Russian MP took the Georgian
                Parliament Speaker's seat during an international conference — a huge symbolic insult given Russia's
                occupation of Georgian territory.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    May 2023: Ban lifted
                </Word> Russian President Vladimir Putin lifted a ban on flights to Georgia and eased visa requirements for
                its citizens — so direct flights have only been back for about 20 months. The route is still rebuilding.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Why it's still limited:
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Only certain airlines can fly it
                    </Word> — Since 2022, countries in Europe and North America have closed their airspace to Russian
                    aircraft and vice versa. So the Georgia-Russia route is basically limited to Russian carriers (Red
                    Wings, Azimuth), Georgian Airways, and airlines from non-sanctioning countries.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Political sensitivity
                    </Word> — The plane's arrival was met by protesters carrying Georgian and Ukrainian flags, as well as
                    signs condemning "occupant" and "terrorist" Russia. Georgian public opinion is divided on resuming ties
                    with Russia, which still occupies ~20% of Georgian territory.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Infrastructure hasn't caught up
                    </Word> — After 4 years of no direct service, the routes are still sparse. Batumi especially — it's a
                    smaller airport that gets seasonal tourist traffic but isn't a major hub.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The practical result:
                </Word> You're stuck with Red Wings twice a week from Batumi, or driving to Tbilisi for daily options. It's
                a geopolitical bottleneck, not just bad scheduling.
            </Paragraph>
        </Message>
        <Message
            at="2026-01-11T08:57:48.505683Z"
        >
            <Origin>019bac46-a01b-746a-a91f-d917169ec882</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Do they have Internet at Batumi airport?</Paragraph>
        </Message>
        <Message
            at="2026-01-11T08:58:00.074732Z"
        >
            <Origin>019bac46-a01b-746a-a91f-d918835504da</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched the web for “Batumi airport wifi internet free”</Action>
            <Paragraph>Yes — There's free Wi-Fi available throughout the terminal at Batumi Airport.</Paragraph>
            <Paragraph>
                The airport facilities include Free Wi-Fi along with info desk, medical point, lounges, etc.
            </Paragraph>
            <Paragraph>
                So Ana can get online there to book flights, look up notary offices in Krasnodar, or whatever she needs. The
                airport is small and modern — shouldn't have trouble connecting.
            </Paragraph>
            <Paragraph>Is she at the airport now or heading there?</Paragraph>
        </Message>
        <Message
            at="2026-01-11T09:14:41.049232Z"
        >
            <Origin>019bac56-136f-7479-88d9-ab167c9e9bc0</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Ana is at Batumi airport and she’s having trouble getting mobile Internet. I think that when she’s in
                Russia, she will have Russian Internet. But while she’s in Georgia, what’s the easiest way for her to get
                Internet access? She’ll be at the airport with their Wi-Fi. But she needs mobile Internet.
            </Paragraph>
        </Message>
        <Message
            at="2026-01-11T09:14:56.180877Z"
        >
            <Origin>019bac56-136f-7479-88d9-ab172e56fa24</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>The fastest options for Ana right now:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    1. eSIM (Fastest if her phone supports it)
                </Word> She can buy and activate an eSIM while on the airport WiFi in about 5 minutes. No physical SIM
                needed.
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Airalo
                    </Word> (airalo.com) - Georgia eSIMs from ~$5-10 for a few GB
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Holafly
                    </Word> or <Word>
                        <Bold />
                        Nomad eSIM
                    </Word> are other options
                </Line>
            </Paragraph>
            <Paragraph>
                She just needs to check her phone supports eSIM (most phones from 2019+ do, including iPhone XR and newer,
                Samsung S20+, Google Pixel 3+).
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    2. Physical SIM at Batumi Airport
                </Word> Batumi airport is smaller than Tbilisi, but there should be a mobile shop or kiosk. The three
                Georgian carriers are:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Magti
                    </Word>
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Geocell/Silknet
                    </Word>
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Cellfie
                    </Word> (former Beeline)
                </Line>
            </Paragraph>
            <Paragraph>A tourist SIM with data is cheap — around 15-25 GEL ($6-10) for several GB.</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    3. If she can't find a SIM at the airport
                </Word> There are phone shops very close to the airport, and definitely along the main roads in Batumi. Any
                small convenience store or mobile shop will have SIM cards.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Quickest path right now:
                </Word> If her phone supports eSIM → buy Airalo on airport WiFi → activate → done in 5-10 minutes.
            </Paragraph>
            <Paragraph>Does she have an iPhone or Android? And does she know if it's eSIM compatible?</Paragraph>
        </Message>
    </Chapter>
);
