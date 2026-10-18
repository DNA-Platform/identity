import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            Doug is a returning user who migrated from a previous account after losing access to his original
            domain-based username. He has reconstructed his projects in the new account, including project files, a
            legacy conversation index, and a "Note to Self" designed to help Claude re-orient to established working
            patterns without restarting from scratch. His wife Ana is also involved in some projects; she and Claude
            communicate in Russian, so some project content reflects that. Doug introduced himself and asked Claude to
            read all project materials in sequence, then produce a detailed editable reflection artifact on the
            project's goals, accomplishments, and Claude's role within it.
        </Paragraph>
    </Chapter>
);
