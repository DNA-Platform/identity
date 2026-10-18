import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The user, who identifies as a computer programmer, requested research on canonical English grammar texts and
            a structured curriculum for learning grammar through conversations with Claude. They specifically wanted the
            curriculum designed with their programming background in mind, emphasizing formal systems, specifications,
            and grammatical precision. The user requested an editable artifact that could be stored in their project for
            ongoing reference, allowing them to track progress and enabling Claude to pick up context from previous
            sessions.
        </Paragraph>
    </Chapter>
);
