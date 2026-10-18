import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            This is a TypeScript class that compiles to extendScript. I pass a value of true in for closed through the
            close method and I get undefined. Why?
        </Paragraph>
    </Chapter>
);
