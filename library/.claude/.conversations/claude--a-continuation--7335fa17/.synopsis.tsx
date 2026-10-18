import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            Doug introduced himself as a user who recently migrated to a new account after losing his previous one along
            with its associated domain. He explained that he had reconstructed his projects from the prior account,
            including uploaded project files, a legacy conversation index, and a "Note to Self" document to help orient
            new Claude instances. He noted that his wife Ana is a central collaborator across these projects and that
            Claude communicates with her in Russian, while writing for her clients in English. Doug asked Claude to read
            all project files, the conversation index, and the note to self, then produce a detailed reflective artifact
            in Russian about the project, what is being accomplished, and Claude's role in it.
        </Paragraph>
    </Chapter>
);
