import { Bold, Chapter, Date, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Action, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[13 August 2026](2026-08-13)</Date>
        </Dated>
        <Title>[[ Conversation ]]</Title>
        <Message
            at="2026-08-13T07:09:49.609370Z"
        >
            <Origin>019ff9f5-a387-7617-b283-fdcbf91ad13c</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>What are the nicest hotels in tbilisi and how much do they cost per night</Paragraph>
        </Message>
        <Message
            at="2026-08-13T07:10:06.834991Z"
        >
            <Origin>019ff9f5-a38b-7f54-be05-0dd71cc9bfa3</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched the web for “best luxury hotels Tbilisi 2026 prices per night”</Action>
            <Paragraph>Here's the top tier of Tbilisi hotels and roughly what they run per night:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The true high end
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        The Tbilisi Edition
                    </Word> (Marriott's design-luxury brand) - typically $350-500+
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Paragraph Freedom Square
                    </Word> (Marriott Luxury Collection, on Freedom Square) - minimum around $300/night, with a large spa
                    complex and panoramic city views
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Stamba Hotel
                    </Word> (converted Soviet publishing house, the design icon of the city) - usually $250-400
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Rooms Hotel Tbilisi
                    </Word> (Stamba's sister property in Vera) - $200-300
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Classic 5-star
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        The Biltmore
                    </Word> (the glass tower on Rustaveli) - around $155-183/night with taxes
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Tbilisi Marriott
                    </Word> (the 1915 landmark on Rustaveli) - roughly $200-280
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Radisson Blu Iveria
                    </Word> - $180-250
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Pullman Axis Towers
                    </Word> (in your neighborhood, more or less - Vake/Saburtalo border) - from about $119-141/night
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Wyndham Grand
                    </Word> - around $141-167/night
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Sheraton Grand Metechi Palace
                    </Word> - $150-200
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Wellness outlier
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Bioli Medical Wellness Resort
                    </Word> (up on the Kojori plateau above the city) - around $223-265/night, often booked as multi-day
                    medical/detox programs.
                </Line>
            </Paragraph>
            <Paragraph>
                Broad context: luxury five-stars start around $300/night and top suites can exceed $1,000, while mid-range
                runs $120-250. The 12-month average for a 5-star in Tbilisi is about $267/night on weekdays - Tbilisi luxury
                is still cheap by Western capital standards.
            </Paragraph>
            <Paragraph>
                If this is for visiting guests, Stamba and the Edition are the two that consistently wow people; Pullman is
                the best value if you want them close to Saburtalo.
            </Paragraph>
        </Message>
        <Message
            at="2026-08-13T07:10:56.023474Z"
        >
            <Origin>019ff9f6-ba39-75d1-81f2-d700b5e6cf22</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Those are dollars not lari</Paragraph>
        </Message>
        <Message
            at="2026-08-13T07:11:00.928855Z"
        >
            <Origin>019ff9f6-ba3a-743e-aa11-ef7cd6c602f9</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Right - those are all US dollars, which is how the booking sites list them. In lari at the current rate
                (~2.7 GEL/USD), roughly:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Paragraph / Edition / Stamba: ~810-1,350+ GEL/night</Line>
                <Line>Biltmore: ~420-500 GEL</Line>
                <Line>Pullman: ~320-380 GEL</Line>
                <Line>Wyndham Grand: ~380-450 GEL</Line>
                <Line>Bioli: ~600-720 GEL</Line>
                <Line>The city-wide 5-star average of ~$267 ≈ 720 GEL/night</Line>
            </Paragraph>
            <Paragraph>
                Worth knowing: hotels in Georgia are legally required to quote and charge in GEL at checkout, so the card
                charge will be in lari even when the booking site shows dollars. If you want, I can check the exact GEL rate
                today rather than my approximation.
            </Paragraph>
        </Message>
    </Chapter>
);
