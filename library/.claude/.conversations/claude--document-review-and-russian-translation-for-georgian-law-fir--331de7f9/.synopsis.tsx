import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The conversation involved a legal consultation focused on international family law, specifically regarding
            the enforceability of foreign court orders and international protection options in Georgia (the country).
            The person is working with or on behalf of a legal team advising a client named Ana, who has relocated to
            Georgia with her children and is seeking protection from a former partner named Maxim, a Russian national.
            The conversation began with a translation request (English to Russian) for a legal document, then expanded
            into detailed legal strategy discussion.
        </Paragraph>
    </Chapter>
);
