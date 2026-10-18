import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The person asked Claude to list three prime numbers greater than 100, requesting a simple, direct response
            with no explanation. Claude provided 101, 103, and 107. The interaction was brief and purely informational,
            with the person demonstrating a preference for concise, list-style answers without additional context or
            elaboration.
        </Paragraph>
    </Chapter>
);
