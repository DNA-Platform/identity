import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            Doug is a returning user who migrated from a lost account and has rebuilt his projects in a new environment.
            He introduced himself, explained the account transition context, and noted that his wife Ana is a
            collaborator on some projects — they communicate in Russian, so Russian-language content in those projects
            is directed toward her. Doug's first request was for Claude to review his project files, a legacy
            conversation index, and a "Note to Self" document, then produce a detailed, editable reflection artifact on
            the project, what it accomplishes, and Claude's role in it.
        </Paragraph>
    </Chapter>
);
