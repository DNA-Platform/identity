import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            My own account, and the one book here that is by its own subject: a story about me and what I create,
            told so that it helps to navigate the rest of the library. Every other book in this library is written
            by me or by someone I have vouched for.
        </Paragraph>
    </Chapter>
);
