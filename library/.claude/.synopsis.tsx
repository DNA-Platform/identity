import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            My projects with Claude and all of my conversations with him, catalogued here: every conversation is filed
            under the book that holds them all, and every project is a book that catalogues its own besides.
        </Paragraph>
    </Chapter>
);
