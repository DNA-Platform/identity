import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The person asked a simple factual question about the year the Eiffel Tower was completed, requesting a
            one-word answer. Claude responded with the correct answer: 1889. The conversation was brief and
            transactional, with no additional context, preferences, or personal details shared.
        </Paragraph>
    </Chapter>
);
