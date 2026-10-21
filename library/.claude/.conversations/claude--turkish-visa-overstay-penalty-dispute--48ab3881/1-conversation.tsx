import { Bold, Chapter, Date, Emphasis, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Action, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[8 January 2026](2026-01-08)</Date>
        </Dated>
        <Title>[[ Conversation ]]</Title>
        <Message
            at="2026-01-08T09:41:10.546824Z"
        >
            <Origin>019b9cfb-400a-77d1-ab57-f86068e4aae0</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Ana overstate her Turkish visa by 10 days because she was taking care of me when I got ankle surgery and I
                wasn’t able to travel. If she left on time, we’re pretty sure she would’ve started getting days back in a
                week or two based on her travel schedule.. they don’t speak English well but they told us she can’t come
                back for three months. For a 10 day overstay is that a standard punishment or do they just not understand
                her travel days? They didn’t work very hard to come up with that number.
            </Paragraph>
        </Message>
        <Message
            at="2026-01-08T09:41:53.440635Z"
        >
            <Origin>019b9cfb-400a-77d1-ab57-f861e55c7081</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched the web for “Turkey visa overstay penalty ban duration 2024 2025”</Action>
            <Paragraph>
                Based on the official Turkish immigration guidelines, a 3-month ban for a 10-day overstay doesn't match the
                standard penalty structure. Here's what the rules actually say:
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    For overstays under 3 months
                </Word> (which includes 10 days): Decision on entry ban to Turkey is not taken for the foreigners who leave
                the country pursuant to the terms below, even though they violate the right to legal stay: The foreigners
                who violate the right to legal stay up to 3 months (does not include 3 months) and come to the border gates
                by themselves in order to leave Turkey before their situation is detected by the competent authorities and
                make the payment for administrative fines.
            </Paragraph>
            <Paragraph>
                Another source confirms: If an individual has only violated their visa or visa exemption period by a few
                days (less than 10 days) and voluntarily proceeds to exit, they may, according to the law, not be subject to
                a deportation order or entry ban. However, the cash fine related to those few days must still be paid.
            </Paragraph>
            <Paragraph>
                Entry bans are structured for longer overstays: Staying between 3 months and 6 months without a visa will
                ban a person from entering for one month. Staying between 6 months and one year without a visa will ban a
                person from entering for three months.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    So what likely happened:
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        They may have miscalculated her 90/180 day situation
                    </Word> — if they're looking at cumulative days in a 180-day rolling window rather than just the 10-day
                    extension past her visa, the math might look different to them
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Language barrier / arbitrary application
                    </Word> — Sometimes, if your stay is slightly delayed, the Migration Department prefers not to impose an
                    entry ban or restricts visits to Turkey for a short period of no more than 1-3 months. This suggests
                    officials sometimes impose short bans at their discretion even when not strictly required
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        They may have given 3 months as a generic number
                    </Word> without properly calculating
                </Line>
            </Paragraph>
            <Paragraph>
                Did she pay the fine at departure? If not, that triggers stricter consequences. But even then, 3 months for
                10 days seems like either an error or them not wanting to work through the actual calculation.
            </Paragraph>
            <Paragraph>
                You might consider having her request a written explanation of the ban duration and its legal basis, or
                consulting with a Turkish immigration lawyer about whether this can be contested.
            </Paragraph>
        </Message>
        <Message
            at="2026-01-08T09:44:04.338093Z"
        >
            <Origin>019b9cfd-e7c0-72d5-8709-ae7556255e45</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                She is paying the fine now, and I asked the woman at the window who is waiting for her to pay the fine. But
                I wouldn’t be surprised if she didn’t look. I just thought that Ana was here for a continuous set of days.
                That might be the answer. On the other hand is a three month penalty before you get more Visa days as a
                Russian citizen considered an entry van or is that another type of penalty perhaps. It seems like it would
                be an entry band, but I could imagine it means something else. Or might her nationality have to do with it?
                We’re pretty sure she didn’t get ikamet on account of being Russian
            </Paragraph>
        </Message>
        <Message
            at="2026-01-08T09:44:36.821226Z"
        >
            <Origin>019b9cfd-e7c0-72d5-8709-ae76d37fe4b8</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                You're raising a really important distinction. There are two completely different things that could be
                happening here:
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Entry ban
                    </Word> — a penalty that prohibits entry regardless of visa eligibility
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        90/180 day reset
                    </Word> — simply waiting for her visa-free days to replenish under the rolling window
                </Line>
            </Paragraph>
            <Paragraph>
                If she maxed out her 90 days in a 180-day period and then overstayed 10 more days, the "3 months" might just
                be them telling her when she'll have visa days available again under the normal 90/180 rule — not an actual
                ban.
            </Paragraph>
            <Paragraph>Let me check on Russian-specific rules and the ikamet situation:</Paragraph>
            <Action>Searched the web for “Russian citizens Turkey residence permit ikamet denied 2024 2025”</Action>
            <Paragraph>This is really helpful. A few key things:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Russian-specific visa rules:
                </Word> Russian citizens can stay in Turkey for up to 60 days per visit, with a maximum of 90 days within a
                180-day period.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Russians are actually EXEMPT from some stricter rules:
                </Word> This new restriction applies to the majority of foreign nationalities. However, a critical exemption
                exists for citizens of European Union (EU) member states, Russia, the People's Republic of China, and
                countries belonging to the Organisation for Economic Co-operation and Development (OECD).
            </Paragraph>
            <Paragraph>
                So Russians can still get tourist ikamet renewals based on rental agreements when other nationalities can't.
                That said, the crowded neighborhood restrictions (1,200+ neighborhoods with 20%+ foreign population) and
                property value requirements could explain ikamet denial.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Your key question though:
                </Word> Is "3 months" an entry ban or just a visa day reset?
            </Paragraph>
            <Paragraph>
                This is crucial. If Ana used up her 90 days in the rolling 180-day window and then overstayed 10 more, the
                woman at the counter may just be telling her "you can't come back for 3 months" meaning <Word>
                    <Bold />
                    when her visa days will replenish
                </Word> — not an actual ban coded into the system.
            </Paragraph>
            <Paragraph>The way to tell the difference:</Paragraph>
            <Paragraph>
                <List />
                <Line>Did they put a specific stamp or code in her passport?</Line>
                <Line>Is there a code like Ç-101 or M-54 mentioned?</Line>
                <Line>Did they give her any document about an "entry prohibition"?</Line>
            </Paragraph>
            <Paragraph>
                If it's just the 90/180 reset, that's completely different from a punitive ban — she'd simply need to wait
                until enough days "fall off" the rolling window. Can you ask the official whether this is an <Word>
                    <Emphasis />
                    entry ban
                </Word> (yasak) or just waiting for visa days?
            </Paragraph>
        </Message>
    </Chapter>
);
