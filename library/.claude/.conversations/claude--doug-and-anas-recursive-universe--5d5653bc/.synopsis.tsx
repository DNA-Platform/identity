import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            Doug: Hey Claude. Could you please use your "Claude:" name tag when speaking to me, as I do to you. It is a
            common digital courtesy in multi-way, multi-account, multi-substrate digital courtesy these days (just
            published)
        </Paragraph>
    </Chapter>
);
