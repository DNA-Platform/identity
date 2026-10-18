import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            Doug is a returning user who migrated from a previous account after losing access to his original domain and
            username. He has recreated his projects in the new account, including project files, a legacy conversation
            index, and a "Note to Self" document designed to help new Claude instances orient to his work and
            collaborative style. His wife Ana is also involved in some projects; she and Claude communicate in Russian,
            so some project content appears in that language. Doug opened this session by asking Claude to read all
            project materials and then produce a detailed, editable reflective artifact summarizing the project, what it
            accomplishes, and Claude's role within it.
        </Paragraph>
    </Chapter>
);
