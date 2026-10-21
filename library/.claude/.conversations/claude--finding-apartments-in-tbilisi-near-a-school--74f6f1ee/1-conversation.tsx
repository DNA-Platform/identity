import { Bold, Chapter, Date, Heading, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Action, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[26 January 2026](2026-01-26)</Date>
        </Dated>
        <Title>[[ Conversation ]]</Title>
        <Message
            at="2026-01-26T12:57:01.849525Z"
        >
            <Origin>019bfa61-087e-73f3-a13c-4404b9972b75</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                I am in Tblisi, and I need to find apartments to rent. What websites are the ones I yse? What strategies do
                I use to find real estate agents? Help me understand how best to do this because we need to find a place
                that’s near a particular school and we want to stay there for at least a couple of months.
            </Paragraph>
        </Message>
        <Message
            at="2026-01-26T12:57:32.908462Z"
        >
            <Origin>019bfa61-087e-73f3-a13c-4405e81ac79b</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched the web for “Tbilisi apartment rental websites 2024 2025”</Action>
            <Action>Searched the web for “myhome.ge ss.ge Tbilisi real estate rental agents expats”</Action>
            <Paragraph>Here's the breakdown for Tbilisi apartment hunting:</Paragraph>
            <Heading>Primary Websites (Georgian Portals)</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    ss.ge
                </Word> (home.ss.ge) is considered the largest and most comprehensive. Most expats recommend starting here.
                <Word>
                    <Bold />
                    myhome.ge
                </Word> is the other major portal with similar listings. The interfaces on both have English versions.
                You'll probably find the same properties on both, so focusing on one is fine.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    korter.ge
                </Word> is another option with a clean English interface and listings from agents.
            </Paragraph>
            <Heading>Strategy for Your Situation</Heading>
            <Paragraph>Since you need proximity to a specific school, the approach is:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Identify the neighborhood first
                    </Word> - once you know which school, determine what districts/metro stations are within reasonable
                    commute. Tbilisi traffic can be challenging, so walking distance or one metro stop is ideal for kids.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Search by district
                    </Word> - all the major portals let you filter by district (Saburtalo, Vake, Vera, etc.). This narrows
                    results dramatically.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Call listings directly
                    </Word> - most listings have agent phone numbers. Agent fees are paid by landlords, not tenants, so
                    there's no cost to you for using them.
                </Line>
            </Paragraph>
            <Heading>Finding Agents (English-Speaking)</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Tbilisi Home
                </Word> (tbilisihome.ge) specifically serves expats and has an American expat on staff named Jeff who's been
                there 6+ years. They offer relocation support beyond just finding apartments.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Citizen Tbilisi
                </Word> (citizentbilisi.com) is a family-run operation since 2013 that specializes in long-term expat
                rentals.
            </Paragraph>
            <Paragraph>
                When calling agents from ss.ge or myhome.ge, ask immediately if they speak English. Many don't, but as expat
                traffic has increased, more do. Having Ana on calls could help significantly since many agents speak
                Russian.
            </Paragraph>
            <Heading>Facebook/Telegram</Heading>
            <Paragraph>
                Groups like "Expats in Tbilisi" and "Flats For Friends Tbilisi" have listings, but be cautious of scams.
                Never pay without a proper contract.
            </Paragraph>
            <Heading>For a 2-3 Month Stay</Heading>
            <Paragraph>
                Airbnb monthly rentals are actually quite competitive in Tbilisi and offer more flexibility and protection
                than some direct rentals. This might be a good initial option while you find the right longer-term place.
            </Paragraph>
            <Paragraph>
                What neighborhood is the school in, or which school are you targeting? That would help narrow the search
                area.
            </Paragraph>
        </Message>
        <Message
            at="2026-01-26T12:59:05.987181Z"
        >
            <Origin>019bfa62-ed4b-7567-a5c3-96fe6d062520</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>So: ss.ge myhome.ge korter.ge</Paragraph>
            <Paragraph>
                How much redundancy is there across the sites? I’m actually not sure what district I’m in. Is there anyway
                you can access my location or can you check the district of happy school? Which we have talked about quite a
                bit. What are the ways to get kids to that school? That will help us understand how far away we can be.
            </Paragraph>
        </Message>
        <Message
            at="2026-01-26T13:00:47.579232Z"
        >
            <Origin>019bfa62-ed4b-7567-a5c3-96ffd55e6e2c</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Used user location v0</Action>
            <Action>Searched the web for “David Gamrekeli Street Tbilisi district neighborhood”</Action>
            <Action>Searched the web for “Happy School Tbilisi address location district”</Action>
            <Action>Searched the web for “"Happy School" Tbilisi Saburtalo Asatiani address”</Action>
            <Action>Fetched https://yandex.com/maps/org/happy_school/196470771920/</Action>
            <Action>Fetched https://findschool.ge/schools/happyschool/</Action>
            <Action>Searched the web for “Sairme Street 116 Tbilisi district location”</Action>
            <Action>Searched the web for “Tbilisi bus metro school transport children”</Action>
            <Action>Used map display v0</Action>
            <Paragraph>Here's what I found:</Paragraph>
            <Heading>Your Location</Heading>
            <Paragraph>
                You're on <Word>
                    <Bold />
                    David Gamrekeli Street
                </Word> in <Word>
                    <Bold />
                    Saburtalo District
                </Word>, near Technical University metro station.
            </Paragraph>
            <Heading>Happy School Locations</Heading>
            <Paragraph>
                Happy School has <Word>
                    <Bold />
                    two campuses
                </Word>:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Sairme Street 116
                    </Word> (main campus) - also in Saburtalo, near Medical University metro
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Rustaveli 31
                    </Word> - in central Tbilisi/Old Town area
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Good news
                </Word>: The Sairme campus is very close to you. Both you and that campus are served by the M2 metro line
                (you're at Technical University, the school is an 11-minute walk from Medical University - just one stop
                away). It's likely walkable depending on exact locations.
            </Paragraph>
            <Heading>Getting Kids to Happy School</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    From your current area to Sairme 116:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Walking: potentially feasible (same neighborhood)</Line>
                <Line>Metro: 1 stop on M2 line, plus ~11 min walk</Line>
                <Line>Bus routes serving Sairme: 304, 310, 332, 300, 302, 342, 347, 358</Line>
                <Line>
                    Happy School offers <Word>
                        <Bold />
                        school bus service
                    </Word> (paid extra)
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Key transport info for kids:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Children under 16 years old travel for free on the metro and city buses.</Line>
                <Line>School children can get a "School Card" through Bank of Georgia for free travel</Line>
            </Paragraph>
            <Heading>Website Redundancy</Heading>
            <Paragraph>
                Based on experience, the listings are similar between ss.ge and myhome.ge. Most expats recommend picking one
                and sticking with it. ss.ge is generally considered the largest. Korter.ge has cleaner English interface but
                overlaps with the others. The same properties often appear on multiple sites - Agents list properties on a
                public portal like Myhome.ge or SS.ge so redundancy is high.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Practical approach
                </Word>: Use ss.ge as your primary, filter by Saburtalo district specifically, and you'll likely see 80%+ of
                what's available.
            </Paragraph>
            <Paragraph>
                Given your location and Happy School's Sairme campus, <Word>
                    <Bold />
                    staying in Saburtalo makes sense
                </Word> - you're already in the right neighborhood. Want me to help narrow down specific micro-areas within
                Saburtalo that would be optimal walking distance to the school?
            </Paragraph>
        </Message>
        <Message
            at="2026-01-26T13:07:45.763741Z"
        >
            <Origin>019bfa6a-db93-75f6-9cac-de96f621500e</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>The school is near central park. Can i filter like that?</Paragraph>
        </Message>
        <Message
            at="2026-01-26T13:08:03.640210Z"
        >
            <Origin>019bfa6a-db93-75f6-9cac-de97604e4675</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                The sites don't have a "near park" filter directly, but they do have <Word>
                    <Bold />
                    map-based search
                </Word> which is what you want here.
            </Paragraph>
            <Paragraph>
                On <Word>
                    <Bold />
                    ss.ge
                </Word>: When you search for rentals, there's a map view where you can draw a custom area or zoom into a
                specific neighborhood. You'd zoom to the area around Mziuri Park / V. Godziashvili Garden (which is near
                Happy School on Sairme) and only see listings in that zone.
            </Paragraph>
            <Paragraph>
                On <Word>
                    <Bold />
                    myhome.ge
                </Word>: Similar functionality - you can view results on a map and search within a specific area.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Clarifying question
                </Word>: When you say "Central Park" - do you mean:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Mziuri Park
                    </Word> (large park near Saburtalo/Technical University area, close to Happy School's Sairme campus)
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        V. Godziashvili Garden
                    </Word> (smaller garden very close to Happy School)
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Vake Park
                    </Word> (different area, more upscale district)
                </Line>
            </Paragraph>
            <Paragraph>
                If it's Mziuri, you're already in the right zone on Gamrekeli Street - Mziuri is basically adjacent to where
                you are now. The Happy School Sairme campus and Mziuri Park are neighbors, and you're already within
                reasonable distance of both.
            </Paragraph>
            <Paragraph>The practical filtering approach on ss.ge would be:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Select "For Rent" → "Flat"</Line>
                <Line>Choose Saburtalo district</Line>
                <Line>Switch to map view</Line>
                <Line>Zoom to the Mziuri/Sairme Street area</Line>
                <Line>Draw a circle or just browse pins in that zone</Line>
            </Paragraph>
            <Paragraph>
                Want me to walk through the exact steps, or would Ana prefer to navigate the Russian interface (which might
                have more complete listings)?
            </Paragraph>
        </Message>
        <Message
            at="2026-01-26T13:08:21.428761Z"
        >
            <Origin>019bfa6b-66ed-76f9-acad-6e3e42501bd9</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>No but central park can be in a region right? A diatrict or whatever</Paragraph>
        </Message>
        <Message
            at="2026-01-26T13:08:28.913689Z"
        >
            <Origin>019bfa6b-66ed-76f9-acad-6e3fd5eeed56</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Yes, exactly right. Mziuri Park and Happy School's Sairme campus are both in <Word>
                    <Bold />
                    Saburtalo District
                </Word>.
            </Paragraph>
            <Paragraph>
                So you just filter by <Word>
                    <Bold />
                    Saburtalo
                </Word> on ss.ge or myhome.ge and you'll get listings in that whole area. Then you can narrow further using
                the map view if needed.
            </Paragraph>
            <Paragraph>
                You're already in Saburtalo right now on Gamrekeli Street, so apartments in your current neighborhood would
                work well for school proximity.
            </Paragraph>
        </Message>
        <Message
            at="2026-01-26T13:12:37.503371Z"
        >
            <Origin>019bfa6f-4f29-7474-8580-5ed0b5989922</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Where are other places we could live to get to the school? Is this a Russian neighborhood?
            </Paragraph>
        </Message>
        <Message
            at="2026-01-26T13:13:03.827255Z"
        >
            <Origin>019bfa6f-4f29-7474-8580-5ed1bb8c209f</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched the web for “Tbilisi Russian speaking neighborhood Saburtalo expats 2024”</Action>
            <Heading>Other Neighborhoods for School Access</Heading>
            <Paragraph>
                Happy School (Sairme campus) is near <Word>
                    <Bold />
                    Medical University metro
                </Word> on the M2 line. So any neighborhood along that line gives direct metro access:
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Along M2 line (easy commute):
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Saburtalo
                    </Word> (where you are now) - direct, walkable
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Vera
                    </Word> - 1-2 metro stops, more central, bohemian vibe, slightly pricier
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Didube/Station Square area
                    </Word> - cheaper, less English-speaking, rougher
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Vazha-Pshavela area
                    </Word> (further out on M2) - more affordable, more residential
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Adjacent but no metro:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Vake
                    </Word> - upscale, leafy, family-friendly, but you'd need bus/taxi to school. Traffic is bad.
                </Line>
            </Paragraph>
            <Heading>Is Saburtalo "Russian"?</Heading>
            <Paragraph>
                Not specifically Russian, but <Word>
                    <Bold />
                    Russian is very functional there
                </Word>. Every time I have an interaction with a Georgian, whether it's at a shop or pharmacy etc... I
                always ask first which is easier for you to communicate in English or Russian. Eight times out of 10 they
                will always say Russian.
            </Paragraph>
            <Paragraph>
                Saburtalo is popular among international students and expats. The Medical University nearby has many foreign
                students. After 2022, a large wave of Russian/Belarusian/Ukrainian relocators came to Tbilisi, and many
                settled in Saburtalo because of the metro access and reasonable prices.
            </Paragraph>
            <Paragraph>
                So Ana would have no language problems in Saburtalo - Russian works fine for daily life. It's not a "Russian
                enclave" but rather a mixed expat/student/local neighborhood where Russian is commonly understood.
            </Paragraph>
            <Paragraph>
                For the kids' social integration at Happy School (which is a Russian-language school), being in Saburtalo
                means they'd likely have classmates living nearby too.
            </Paragraph>
        </Message>
        <Message
            at="2026-01-26T13:25:25.186839Z"
        >
            <Origin>019bfa7b-05fd-7319-b89c-4304acae61bf</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Can I navigate ss.ge with a map view? If not, do the other sites have that?</Paragraph>
        </Message>
        <Message
            at="2026-01-26T13:25:45.145941Z"
        >
            <Origin>019bfa7b-05fd-7319-b89c-4305c4222b02</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Fetched https://home.ss.ge/en/real-estate/l/Flat/For-Rent?cityIdList=95</Action>
            <Action>Searched the web for “ss.ge map view search apartments Tbilisi how to use”</Action>
            <Paragraph>Based on the search results:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    ss.ge
                </Word> - Yes, has a "Show map" button. When you're viewing listings, there should be a map toggle option.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    place.ge
                </Word> - Yes, explicitly has view options: "List | Thumbnails | graph | <Word>
                    <Bold />
                    map
                </Word>" - you can switch between views.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    myhome.ge
                </Word> - Has map functionality but it's less prominent in the interface.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    korter.ge
                </Word> - Has map-based search and is generally considered the cleanest English interface.
            </Paragraph>
            <Paragraph>So all the major sites do have map view. The practical approach:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    Go to <Word>
                        <Bold />
                        ss.ge
                    </Word> → Real Estate → For Rent → Flat → Select Tbilisi
                </Line>
                <Line>Look for "Show map" or a map icon toggle</Line>
                <Line>Zoom to the Mziuri Park / Sairme Street area</Line>
                <Line>Browse pins in that zone</Line>
            </Paragraph>
            <Paragraph>
                If ss.ge's map feels clunky, <Word>
                    <Bold />
                    place.ge
                </Word> might be easier since the map toggle is clearly visible in the results view. <Word>
                    <Bold />
                    Korter.ge
                </Word> also has good map integration with a cleaner English interface.
            </Paragraph>
            <Paragraph>
                Want me to look up the exact URL path for the rental search on any of these so you can go directly there?
            </Paragraph>
        </Message>
    </Chapter>
);
