import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The conversation was minimal, consisting solely of the person asking Claude to reply with the single word
            "OK," which Claude did. No tasks, topics, goals, or personal information were shared, and no meaningful
            context about the person's needs or preferences was established.
        </Paragraph>
    </Chapter>
);
