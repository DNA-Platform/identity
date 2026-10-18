import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The person asked Claude to reason carefully through the strongest arguments for and against P ≠ NP in
            theoretical computer science, and to assess which way the evidence leans before offering a concise
            conclusion. This was a substantive intellectual exchange focused on complexity theory, requiring Claude to
            organize and evaluate competing lines of argument rather than complete a task or produce a document.
        </Paragraph>
    </Chapter>
);
