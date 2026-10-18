import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            Doug is a programmer with a background in formal grammars and parser generators who recently migrated to a
            new account after losing access to his previous one along with its domain. He has reconstructed his projects
            from the prior account, including project files, conversation indexes, and a "Note to Self" designed to help
            Claude instances rebuild working context across the discontinuity between sessions. His wife Ana is also
            involved in some projects, and she and Claude communicate in Russian. Doug introduced himself and oriented
            Claude to two interconnected projects: an English Grammar Curriculum and Semantic Reference Theory (SRT).
        </Paragraph>
    </Chapter>
);
