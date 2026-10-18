import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            Doug is a returning user who migrated to a new account after losing access to his previous one along with
            its associated domain. He has recreated his projects, uploaded project files, a legacy conversation index
            (approximately 190 prior conversations), and a "Note to Self" to re-establish working context with Claude.
            His primary ask in this conversation was for Claude to read those materials and produce a detailed, editable
            artifact reflecting on the project's scope, what is being accomplished, and Claude's role within it. Claude
            completed this task by creating a markdown artifact saved to the outputs folder.
        </Paragraph>
    </Chapter>
);
