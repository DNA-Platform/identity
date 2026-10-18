import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The user inquired about Wise's capabilities for wire transfers, specifically asking whether the service
            supports Georgian Lari (GEL). Claude provided detailed information about Wise's GEL support, explaining that
            while Wise fully supports sending money to GEL (allowing transfers to Georgian bank accounts using recipient
            names and IBANs, with transfers up to 2.6 million GEL arriving in 0-1 working days), it does not support
            sending money from GEL balances. Claude also noted that users can hold GEL funds in Wise accounts and spend
            using the Wise multi-currency card. The response included practical guidance that Wise works well for USD to
            GEL conversions and funding local accounts in Tbilisi, but outbound GEL transfers would need to be handled
            through Georgian banks like Bank of Georgia or TBC via SWIFT transfers. The conversation demonstrated the
            user's interest in international money transfer options involving Georgian currency.
        </Paragraph>
    </Chapter>
);
