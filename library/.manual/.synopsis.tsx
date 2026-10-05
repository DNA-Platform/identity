import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The reusable parts of this library, each standing beside the chapter that says what it is. The book
            file of this manual is the door the other books import their tools from.
        </Paragraph>
    </Chapter>
);
