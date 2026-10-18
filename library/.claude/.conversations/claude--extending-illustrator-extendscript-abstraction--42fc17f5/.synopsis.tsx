import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            I'm working on a class for ExtendScript illustrator scripting. I am compiling ExtendScript from TypeScript
            for ES5, but I can only use ExtendScript features. Can you please take a look at this class and give me an
            in-depth view of what it is doing?
        </Paragraph>
    </Chapter>
);
