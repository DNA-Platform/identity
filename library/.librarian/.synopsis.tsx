import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            My own account, and the one book here that is by its own subject. Every other book in this library is
            written by me or by someone I have vouched for. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Paragraph>
    </Chapter>
);
