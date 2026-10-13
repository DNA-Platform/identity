import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            Every conversation I have had with Claude, each a book of its own filed here, listed newest first; the
            projects catalogue them again by what they were about.
        </Paragraph>
    </Chapter>
);
