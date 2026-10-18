import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The user contacted Claude while stranded at Istanbul International Airport with his soon-to-be wife Ana and
            her two children after their flight to Batumi, Georgia was cancelled, requiring an overnight stay. The user
            has personal circumstances affecting his mobility and uses a wheelchair or crutches. The conversation
            centered around navigating multiple complex challenges: Ana had exceeded her visa days and they needed to
            address potential immigration issues, the children were exhausted and cranky from lack of sleep, and they
            wanted to make the most of an unexpected night in Istanbul - a city where the user and Ana first met.
        </Paragraph>
    </Chapter>
);
