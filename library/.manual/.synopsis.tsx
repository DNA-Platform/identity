import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The reusable parts of this library, each beside the chapter that says what it is. The other books
            import their tools from this manual's book file.
        </Paragraph>
    </Chapter>
);
