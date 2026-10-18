import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            I am building a vscode extension that is supposed to parse an svg file and provide me with the ability to
            interact with it in a JavaScript terminal. Do you see what's wrong? I'm trying to use TypeScript to interact
            with it, and that is complex, but I don't even see the terminal open. I can't interact with the debug
            terminal. What's wrong?
        </Paragraph>
    </Chapter>
);
