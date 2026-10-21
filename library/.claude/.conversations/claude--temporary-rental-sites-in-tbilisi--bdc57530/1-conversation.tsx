import { Bold, Chapter, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { Message, Speaker } from '../../../.manual/.book';
import { Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Title>[[ Conversation ]]</Title>
        <Message
            at="2026-01-27T15:12:58.908552Z"
        >
            <Origin>019c0003-db66-70bd-b26b-34c98a697a84</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Beaides airbnb are there other temporary rental sites in Tblisi?</Paragraph>
        </Message>
        <Message
            at="2026-01-27T15:13:12.107178Z"
        >
            <Origin>019c0003-db66-70bd-b26b-34cac6e1a11a</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Yes, several options beyond Airbnb for temporary rentals in Tbilisi:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Short-term rental platforms:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Booking.com
                    </Word> – Has apartments and apart-hotels, not just traditional hotels. Good for stays of a few days to
                    a few weeks.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Korter.ge
                    </Word> – You've used this for long-term searches, but it also lists short-term furnished rentals
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        ss.ge
                    </Word> – Filter for "daily rent" (დღიურად) in the rental section
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        myhome.ge
                    </Word> – Same approach, filter for short-term/daily rentals
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Facebook Groups
                </Word> (very active for Tbilisi rentals):
            </Paragraph>
            <Paragraph>
                <List />
                <Line>"Tbilisi Apartments for Rent"</Line>
                <Line>"Expats in Tbilisi" – people often post short-term sublets</Line>
                <Line>Russian-language expat groups often have sublet postings from people traveling</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Apart-hotels and serviced apartments:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    These are common in Tbilisi and often cheaper than Airbnb for stays of 2+ weeks. Many will negotiate
                    monthly rates directly. Search Booking.com for "apartments" or look for chains like Orbi residences.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Local agencies:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    Some rental agencies specialize in furnished short-term lets for relocating families. They're harder to
                    find online but expat Facebook groups can point you to them.
                </Line>
            </Paragraph>
            <Paragraph>
                For Saburtalo specifically, you'll find more options on the Georgian platforms than Airbnb since it's a
                residential neighborhood popular with locals rather than a tourist area. Would you like help with specific
                search terms in Georgian or Russian?
            </Paragraph>
        </Message>
    </Chapter>
);
