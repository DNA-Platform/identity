import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            Oh Mr. Claude, I am trying hard to get this meta extension working. It uninstalls and reinstalls. I have
            node modules commended out in my vscode ignore but they don't make it isnto the packaged vsix. Can you think
            of what to do
        </Paragraph>
    </Chapter>
);
