import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            Interesting task. Let's invent a react library that grows from representing simple writing to evolving into
            representing whole books...
        </Paragraph>
    </Chapter>
);
