import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            This conversation involved two participants: Doug, who initiated the conversation on behalf of Ana, and Ana
            herself, who joined later to ask follow-up questions directly in Russian. Ana recently registered as an
            Individual Entrepreneur (IE) in Georgia through ExpatHub approximately one week prior to the conversation,
            and holds a business bank account with Credo Bank. The core topics were Georgian tax obligations for small
            business status holders, VAT registration, and residency permit requirements and timing.
        </Paragraph>
    </Chapter>
);
