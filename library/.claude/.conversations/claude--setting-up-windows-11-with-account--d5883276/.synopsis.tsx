import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            Hey I am setting up a new windows 11 computer. It starts with a root user without a password and I need to
            hook up a windows account. We have done this in another chat so can you find it and remind me how to do such
            things?
        </Paragraph>
    </Chapter>
);
