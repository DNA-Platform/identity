import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The person asked a technical question about how graph databases model recursive hierarchies where nodes
            define rules for their own organization. This was a single-turn exchange with no personal context, role, or
            project information shared. The question demonstrated familiarity with graph database concepts and an
            interest in formal, rigorous treatment of the topic.
        </Paragraph>
    </Chapter>
);
