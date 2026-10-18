import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            Doug is a developer setting up and learning to use a Claude Code project framework created by a friend
            (GitHub: abeven/claude-project-framework). The conversation covered two main threads: getting Claude Code
            installed and working on Windows, then doing a deep technical analysis of the framework itself.
        </Paragraph>
    </Chapter>
);
