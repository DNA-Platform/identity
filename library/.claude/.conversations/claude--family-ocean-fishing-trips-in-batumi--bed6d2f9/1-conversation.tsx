import { Bold, Chapter, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { Message, Speaker } from '../../../.manual/.book';
import { Action, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Title>[[ Conversation ]]</Title>
        <Message
            at="2026-08-15T21:02:48.282030Z"
        >
            <Origin>01a0073d-1326-7955-be96-55884f849aa2</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>I want to take a family ocean fishing in batumi this week. What trips are available?</Paragraph>
        </Message>
        <Message
            at="2026-08-15T21:03:50.922791Z"
        >
            <Origin>01a0073d-1326-761a-b204-a39197357059</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched the web for “თევზაობა ბათუმი გემით ტური”</Action>
            <Action>Searched the web for “морская рыбалка Батуми катер аренда цена”</Action>
            <Action>Searched places for “”</Action>
            <Action>Used places map display v0</Action>
            <Paragraph>A few notes on booking this week:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Format:
                    </Word> these are private charters, not scheduled departures - you call/WhatsApp, tell them party size
                    and date, they organize. Booking a day ahead is the norm; morning slots are best for actual fishing (and
                    August heat).
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Sea Life Batumi
                    </Word> (yacht-club-batumi.com, +995 557 90 90 88) explicitly markets family sea-fishing trips, gear
                    included, and offers taking your catch to the fish market afterward to have it cooked - probably the
                    best fit with Katya and Dima.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Mirage
                    </Word> is smaller but the reviews specifically praise Captain Ruslan's fishing trips.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Weather caveat:
                    </Word> August storms cancel trips on short notice, so hold a backup day.
                </Line>
                <Line>
                    I couldn't verify current prices - the Russian-language sources gate them behind WhatsApp contact. Rough
                    marina benchmark from reviews: short pleasure rides run ~20 GEL/person on shared boats, but a private
                    fishing charter will be substantially more; get the total price confirmed before boarding.
                </Line>
            </Paragraph>
            <Paragraph>
                If you want, I can also draft a short Russian message Ana can send via WhatsApp to get quotes from two or
                three of them at once.
            </Paragraph>
        </Message>
    </Chapter>
);
