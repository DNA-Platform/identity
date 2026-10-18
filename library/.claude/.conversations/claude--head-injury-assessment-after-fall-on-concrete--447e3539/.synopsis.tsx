import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The person sought help understanding the range of possible medical outcomes after a family member named Dima
            hurt his head. The request was specifically framed to support Ana, a close family member who experiences
            significant anxiety around medical situations involving children, so that she could read an objective,
            fact-based breakdown and orient herself to what the emergency room visit might involve.
        </Paragraph>
    </Chapter>
);
