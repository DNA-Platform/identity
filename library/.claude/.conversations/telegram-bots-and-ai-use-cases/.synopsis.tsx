import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            What are these telegram bots, how do I use ai, whats the use case? Why would we make tgem specifically with
            the tech meantioned?
        </Paragraph>
    </Chapter>
);
