import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            How did Newton manage to provide colloquial definitions for his laws of nature and then formalize them and
            what were those laws?
        </Paragraph>
    </Chapter>
);
