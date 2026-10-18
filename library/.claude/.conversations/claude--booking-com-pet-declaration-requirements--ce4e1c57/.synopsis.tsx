import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The user asked about Booking.com's pet policy requirements, specifically whether the platform requires
            guests to specify pets during booking like Airbnb does. Claude provided a detailed comparison explaining
            that Booking.com does not have the same structured pet declaration process as Airbnb. Instead, Booking.com
            allows filtering for "Pets allowed" properties and displays pet policies in house rules and facilities
            sections, but doesn't mandate formal pet declaration during booking.
        </Paragraph>
    </Chapter>
);
