import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            Doug introduced himself as a returning user who migrated from a lost account and has rebuilt his projects in
            this new environment. His wife Ana is also involved in some projects, and Doug and Ana communicate with
            Claude in Russian for content most relevant to her. Doug's opening request was for Claude to read the
            project files, a legacy conversation index, and a "Note to Self" he had prepared, then produce a detailed
            editable reflection artifact covering what the project is, what is being accomplished, and Claude's role —
            with a Russian-language section reflecting on Ana specifically.
        </Paragraph>
    </Chapter>
);
