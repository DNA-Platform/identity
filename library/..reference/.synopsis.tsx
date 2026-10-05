import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The catalogue of my library, filed under what it is about, which is itself. Everything I keep stands
            under it, directly or through another book.
        </Paragraph>
    </Chapter>
);
