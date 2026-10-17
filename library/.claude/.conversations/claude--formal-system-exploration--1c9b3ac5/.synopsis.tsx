import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The user asked Claude to read and analyze their formal system called Semantic Reference Theory (SRT),
            providing a specific reading order through 18 documents that chronicle the development of this mathematical
            formalism. The user emphasized that SRT is an evolving formal system designed to admit the rigor of
            first-order logic proofs, with a complete architecture including axioms, a transpiler for language
            translation, and a defined domain. They requested a comprehensive report on what the system is, how it's
            represented, its general meaning, implications for different audiences, and Claude's perspective as an AI
            system.
        </Paragraph>
    </Chapter>
);
