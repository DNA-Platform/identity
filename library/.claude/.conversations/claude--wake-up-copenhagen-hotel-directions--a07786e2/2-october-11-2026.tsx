import { Bold, Chapter, Date, Line, List, Paragraph, Reference, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Action, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[11 October 2026](2026-10-11)</Date>
        </Dated>
        <Title>[[ 11 October 2026 ]]</Title>
        <Message
            at="2026-10-11T04:07:03.385995Z"
        >
            <Origin>01a12924-8776-7eb8-beec-db20428b5171</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                How can I find food near the wake up hotel? Did they have any in the lobby or are there places nearby? What
                about really early in the morning?
            </Paragraph>
        </Message>
        <Message
            at="2026-10-11T04:07:16.239484Z"
        >
            <Origin>01a12924-8776-70dc-a697-9834bc22cda4</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Used WebSearch</Action>
            <Action>Used mcp  widgets  places search</Action>
            <Paragraph>
                Yes, there's food in the hotel itself. The lobby café/bar is open 24 hours and sells drinks, snacks and
                sandwiches, so you can get something right now. The breakfast buffet runs 06:30–10:00 on weekdays and costs
                about €12–13. I couldn't confirm the weekend hours, so ask reception whether it's open this morning. Some
                listings say breakfast has to be ordered at check-in, but reception may still sell it to you.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Open early nearby
                </Word> (all by Central Station, roughly a 7–10 minute walk):
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Lagkagehuset
                    </Word>, Bernstorffsgade 16: a Danish bakery chain with pastries, bread and coffee. It opens at 5:00
                    every day, so it's open now.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        7-Eleven
                    </Word>, Istedgade 2: open 24 hours, just outside the station. It sells coffee, hot dogs, pizza slices
                    and pastries.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        7-Eleven
                    </Word> inside the station, Banegårdspladsen: opens at 5:00 on Sundays.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Rug Bakery
                    </Word>, Tietgensgade 39, inside the Villa Copenhagen hotel by the station: opens at 7:00. It's nicer
                    and pricier, and reviewers like the cardamom buns.
                </Line>
            </Paragraph>
            <Paragraph>
                For something quick right now, go to the lobby café. Lagkagehuset is the best bakery option open this early.
            </Paragraph>
            <Paragraph>Sources:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Reference>https://www.wakeupcopenhagen.com/the-hotels/copenhagen/carsten-niebuhrs-gade/lobby</Reference>
                        Wakeup Copenhagen – Lobby &amp; café
                    </Word>
                </Line>
                <Line>
                    <Word>
                        <Reference>https://m.booking.com/hotel/dk/wakeup-copenhagen.html</Reference>
                        Booking.com – Wakeup Carsten Niebuhrs Gade
                    </Word>
                </Line>
                <Line>
                    <Word>
                        <Reference>https://nz.trip.com/hotels/copenhagen-hotel-detail-2195712/wakeup-copenhagen-carsten-niebuhrs-gade</Reference>
                        Trip.com – breakfast hours
                    </Word>
                </Line>
            </Paragraph>
        </Message>
        <Message
            at="2026-10-11T20:44:39.971873Z"
        >
            <Origin>01a12cb5-d666-7fe0-a78b-e92d31789df7</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Does my reservation necessarily come with breakfast? What do they serve for breakfast</Paragraph>
        </Message>
        <Message
            at="2026-10-11T20:44:51.031439Z"
        >
            <Origin>01a12cb5-d666-7586-8f6f-704859a65715</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Used WebFetch</Action>
            <Paragraph>
                Probably not. Wakeup is a budget chain where breakfast is usually a paid extra, not part of the room rate.
                Room prices depend on economy vs. flexible booking, view and room size, and breakfast isn't one of those
                options. Ana's note about the booking didn't mention breakfast either.
            </Paragraph>
            <Paragraph>
                To check for sure, ask reception tonight. They're open 24 hours and can look up booking 8663034833-1. If it
                isn't included, you can add it at the desk. Some booking sites say breakfast has to be ordered at check-in,
                so ask now rather than in the morning. One review site puts the price at about €12–13.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    What they serve:
                </Word> it's a simple Scandinavian buffet. Based on the hotel's photos, it has oats, cornflakes and granola,
                bread rolls with butter and cheese, eggs, sliced vegetables, fresh fruit, coffee and orange juice. I
                couldn't find a full official menu.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Hours:
                </Word> tomorrow is Monday, so breakfast runs 06:30–10:00. On weekends it's 07:00–10:30.
            </Paragraph>
            <Paragraph>If you'd rather skip it, the lobby café sells skyr, smoothies, sandwiches and croissants.</Paragraph>
            <Paragraph>Sources:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Reference>https://www.wakeupcopenhagen.com/the-hotels/copenhagen/carsten-niebuhrs-gade</Reference>
                        Wakeup Copenhagen – Carsten Niebuhrs Gade
                    </Word>
                </Line>
                <Line>
                    <Word>
                        <Reference>https://m.booking.com/hotel/dk/wakeup-copenhagen.html</Reference>
                        Booking.com – Wakeup Carsten Niebuhrs Gade
                    </Word>
                </Line>
            </Paragraph>
        </Message>
        <Message
            at="2026-10-11T20:45:47.277439Z"
        >
            <Origin>01a12cb6-dd72-753a-ae40-99b9897f1e03</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Can i buy at the time if I want it?</Paragraph>
        </Message>
        <Message
            at="2026-10-11T20:45:49.906757Z"
        >
            <Origin>01a12cb6-dd72-7b31-b610-73bf14e81b38</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Possibly, but I can't confirm it. Some booking sites say breakfast can only be ordered at check-in. The
                hotel's own website doesn't say either way, and it doesn't list a walk-in option.
            </Paragraph>
            <Paragraph>
                To be safe, ask at reception tonight. You can either buy it now or ask whether you can just pay at the door
                in the morning. The hotel's AeroGuest app also lets you pay for extras, so breakfast may be available there.
            </Paragraph>
            <Paragraph>
                If it turns out you can't get it in the morning, Lagkagehuset by the station is open from 5:00, and the
                lobby café has croissants and sandwiches.
            </Paragraph>
        </Message>
        <Message
            at="2026-10-11T20:46:28.123428Z"
        >
            <Origin>01a12cb7-7cfb-72da-9f17-09cf924c3e9a</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>What about food at the conference? What does the site say</Paragraph>
        </Message>
        <Message
            at="2026-10-11T20:46:32.917258Z"
        >
            <Origin>01a12cb7-7cfb-7230-9278-3b01c235d420</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Used mcp  claude ai  conversation search</Action>
            <Action>Used mcp  claude ai  conversation search</Action>
            <Paragraph>
                I don't know which conference you're attending. It hasn't come up in this chat or in the other chats I can
                search in this project.
            </Paragraph>
            <Paragraph>
                Tell me the conference name or send the website link, and I'll check what it says about meals: breakfast,
                lunch, coffee breaks and any receptions.
            </Paragraph>
        </Message>
        <Message
            at="2026-10-11T20:46:48.240033Z"
        >
            <Origin>01a12cb7-cb79-7818-921d-9e5f1bb44ea6</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Models of consciousness 7</Paragraph>
        </Message>
        <Message
            at="2026-10-11T20:47:05.743349Z"
        >
            <Origin>01a12cb7-cb79-773c-a500-93e87ace16cc</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Used WebSearch</Action>
            <Action>Used WebFetch</Action>
            <Action>Used WebFetch</Action>
            <Action>Used WebFetch</Action>
            <Action>Used WebFetch</Action>
            <Paragraph>
                The conference booklet says lunch is <Word>
                    <Bold />
                    not
                </Word> included and you pay for it yourself. It doesn't mention breakfast at all.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    What's provided:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Lunch:
                    </Word> the HCØ canteen is right in front of Auditorium 1. On Monday, Tuesday and Thursday, Food and Co
                    Denmark serves hot dishes and sandwiches at what the booklet calls accessible prices. Friday's lunch is
                    at the Niels Bohr Building. Lunch runs 12:20–13:30.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Wednesday:
                    </Word> sandwiches are provided on the bus to the Louisiana Museum, which leaves at 12:50. Coffee at the
                    museum is self-paid.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Coffee breaks:
                    </Word> they're on the schedule every day, but the booklet doesn't say whether the coffee is free.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Monday welcome reception, 16:00–18:30:
                    </Word> included in your registration. It's at the Niels Bohr Building, across from HCØ. The booklet
                    doesn't say whether there's food or only drinks.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Conference dinner, Thursday at 19:00:
                    </Word> at Food Club Nørrebro. It's a buffet-style communal dinner with vegetarian, vegan and
                    gluten-free options. It's only included if you paid the €75 when you registered.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Friday farewell:
                    </Word> bubbles at the Maersk Tower, 16:00–18:00.
                </Line>
            </Paragraph>
            <Paragraph>
                So plan on eating breakfast before you leave the hotel. Registration opens before 9:00 in the HCØ foyer, and
                the first keynote starts at 9:00.
            </Paragraph>
            <Paragraph>Sources:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Reference>https://amcs-community.org/wp-content/uploads/2026/10/moc7-booklet-web-full.pdf</Reference>
                        MoC7 conference booklet
                    </Word>
                </Line>
                <Line>
                    <Word>
                        <Reference>https://amcs-community.org/events/moc7-2026/</Reference>
                        MoC7 main page
                    </Word>
                </Line>
            </Paragraph>
        </Message>
    </Chapter>
);
