import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            Doug: Hey! This is a weird sort of conversation, but perhaps you can semantically reconstruct each of the
            perspectives in it for me. Then we can continue &#91;attached&#93;
        </Paragraph>
    </Chapter>
);
