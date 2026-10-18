import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            Will most apartment complexes let me leave someone a package? Will they put it in their mailbox?
        </Paragraph>
    </Chapter>
);
