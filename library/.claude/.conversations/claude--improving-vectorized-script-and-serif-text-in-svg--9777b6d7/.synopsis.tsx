import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            Okay I have a great task for you. I have vectorized an image and it has paths, but we need to use semantic
            knowledge to do this better. Don't code yet, just think with me.
        </Paragraph>
    </Chapter>
);
