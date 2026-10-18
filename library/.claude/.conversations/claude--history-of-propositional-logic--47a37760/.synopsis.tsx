import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The user requested a comprehensive 5-part curriculum on the history of propositional logic, with each
            section presented in both English and Russian to show correspondence between technical terms. They
            specifically wanted to trace the development from Aristotle through to modern operators and truth tables.
            The conversation focused on three main areas: the philosophical motivation behind creating formal logic, the
            syntax of propositional logic, and the foundational axioms and rules of inference.
        </Paragraph>
    </Chapter>
);
