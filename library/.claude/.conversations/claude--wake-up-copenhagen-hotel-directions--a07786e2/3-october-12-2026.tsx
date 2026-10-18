import { Bold, Chapter, Date, Line, List, Paragraph, Reference, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[12 October 2026](2026-10-12)</Date>
        </Dated>
        <Title>[[ 12 October 2026 ]]</Title>
        <Message
            at="2026-10-12T06:28:28.250281Z"
        >
            <Origin>01a12ecc-4e44-75cc-b767-9b5552103342</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>What stop do I get off on m3</Paragraph>
        </Message>
        <Message
            at="2026-10-12T06:28:39.033634Z"
        >
            <Origin>01a12ecc-4e44-7ca4-8e1b-229effff91ec</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Get off at <Word>
                    <Bold />
                    Vibenshus Runddel
                </Word>. From there it's about a 10-minute walk along Nørre Allé to the HC Ørsted Institute at
                Universitetsparken 5. Use the main entrance on Universitetsparken; the registration desk is in the foyer in
                front of the mosaic wall.
            </Paragraph>
            <Paragraph>
                From the hotel, catch the M3 at København H (Central Station). It's a loop line, and Vibenshus Runddel is
                about 8 stops either way, so take whichever train comes first.
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
            </Paragraph>
        </Message>
        <Message
            at="2026-10-12T13:04:56.505282Z"
        >
            <Origin>01a13037-3679-7bb4-977f-efedfce5f9d5</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Is the hotel at the kobenhaven stop?</Paragraph>
        </Message>
        <Message
            at="2026-10-12T13:04:59.744905Z"
        >
            <Origin>01a13037-3679-763f-9679-5d9641858449</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Close to it, but not at the station itself. Get off at <Word>
                    <Bold />
                    København H
                </Word> (Central Station), then walk about 700 m, or roughly 10 minutes, to the hotel at Carsten Niebuhrs
                Gade 11. It's southeast of the station, toward the waterfront at Kalvebod Brygge.
            </Paragraph>
            <Paragraph>
                To get directions from the station, put "Wakeup Copenhagen Carsten Niebuhrs Gade" into Google Maps.
            </Paragraph>
        </Message>
        <Message
            at="2026-10-12T13:05:36.778917Z"
        >
            <Origin>01a13037-d393-729e-9543-bb4ff4827f10</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>I mean that that is the stop… cmon</Paragraph>
        </Message>
        <Message
            at="2026-10-12T13:05:38.493102Z"
        >
            <Origin>01a13037-d393-7b96-b679-04ee217e1d06</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Yes, København H is your stop for the hotel.</Paragraph>
        </Message>
        <Message
            at="2026-10-12T13:05:56.363395Z"
        >
            <Origin>01a13038-209b-7723-a6fa-48251f4db889</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Rarely are hotels AT subways stops</Paragraph>
        </Message>
        <Message
            at="2026-10-12T13:05:58.011807Z"
        >
            <Origin>01a13038-209b-73c0-a2c8-d443c0e4daad</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Fair point, I overcomplicated it. København H is the stop.</Paragraph>
        </Message>
    </Chapter>
);
