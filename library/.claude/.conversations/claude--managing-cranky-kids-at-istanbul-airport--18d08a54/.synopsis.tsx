import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            Doug contacted Claude while stranded at Istanbul Airport with his partner Ana and her two children due to a
            cancelled Turkish Airlines flight. The situation was complicated by Ana's visa overstay of approximately 12
            days, which resulted in airport officials telling her she couldn't return to Turkey for three months. Doug,
            who uses a wheelchair, was trying to navigate multiple challenges: managing tired, cranky children who speak
            Russian, determining whether Ana faced an actual entry ban versus a standard waiting period under Turkey's
            90/180-day tourist rule, and deciding whether to stay airside in the airport terminal or risk going through
            passport control to access better accommodations.
        </Paragraph>
    </Chapter>
);
