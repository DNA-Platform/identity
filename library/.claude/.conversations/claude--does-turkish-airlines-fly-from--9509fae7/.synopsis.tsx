import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            Doug is planning a move from Antalya, Turkey to Tbilisi, Georgia and needs to transport 8-12 checked bags
            (each around 20kg, totaling ~240kg) on a single flight while traveling alone. He sought Claude's help
            researching airline options and baggage policies for this unusually large amount of luggage. Claude provided
            comprehensive research on Turkish Airlines and Pegasus Airlines routes between these cities, clarifying that
            Turkish Airlines only offers connecting flights through Istanbul while Pegasus operates direct flights.
            Claude investigated the corporate relationship between the airlines, confirming they are independent
            competitors with no ownership connection.
        </Paragraph>
    </Chapter>
);
