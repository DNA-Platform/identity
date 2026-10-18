import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            Hey, I am working on an illustrator scripting project. I have set up a way to compile TypeScript to
            JavaScript to ExtendScript. I target ES5 but I can only use some functionality. I'd like to catch you up on
            existing code, have you do an analysis of it so you understand. Then we will write new tests
        </Paragraph>
    </Chapter>
);
