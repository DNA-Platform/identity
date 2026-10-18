import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The user is currently located in Alanya, Turkey and needed to purchase packing supplies (bubble wrap,
            packing tape, and packing peanuts) with delivery to their apartment, preferably without leaving home. They
            indicated they could operate in English over the phone but could translate online if needed. Claude
            conducted web searches and location-based searches to identify both online and local delivery options for
            packing materials in Turkey.
        </Paragraph>
    </Chapter>
);
