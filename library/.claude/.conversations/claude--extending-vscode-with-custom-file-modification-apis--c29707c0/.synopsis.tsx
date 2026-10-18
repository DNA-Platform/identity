import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            I am making a vscode extension. I want to be able to select a file and pased on the file type, create an
            object that represents the current document, but has an AST that can be used to create an API that modifies
            files. vscode has lots of extensions - tools for python, typescript etc that provide static analysis tools.
            for isnatnce F2 rename works across a broad set of languages. Is there a correct or easy way to hook into
            this process to that I can exponse functionality in various ways to modify the AST of files or syntax treees
            or whatever, to extend this sort of functionmality
        </Paragraph>
    </Chapter>
);
