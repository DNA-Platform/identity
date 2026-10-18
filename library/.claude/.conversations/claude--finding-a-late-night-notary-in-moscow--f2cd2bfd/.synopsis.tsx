import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The user asked about finding a notary in Moscow who works late hours to help someone named Ana execute legal
            actions, given that Ana would arrive at 3:00 pm the following day. Claude used web search tools to research
            Moscow notary services and their operating hours, conducting searches in both English and Russian to find
            comprehensive information.
        </Paragraph>
    </Chapter>
);
