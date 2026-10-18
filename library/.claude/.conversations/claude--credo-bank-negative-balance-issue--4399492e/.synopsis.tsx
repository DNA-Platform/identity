import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            This conversation covered several distinct topics across banking, creative business operations, and mobile
            phone services in Georgia. The person is based in Tbilisi, Georgia, and uses Credo Bank (a Georgian
            microfinance institution) for a family member named Ana, who holds a Credo Bank Mastercard World Elite debit
            card with an overdraft facility. The conversation clarified that Ana's negative GEL balance in the MyCredo
            app reflects overdraft usage rather than a credit card balance, and that SMS notifications show remaining
            overdraft headroom rather than account balance. The person also learned that Credo Bank offers the MyCredo
            app for transfers and that the cheapest method to fund Ana's card from the US is via SWIFT wire to Credo's
            USD account, using Interactive Brokers' free monthly withdrawal. Credo Bank's USD correspondent bank is Bank
            of Georgia (SWIFT: BAGAGE22), and this detail is required when initiating international wires through
            platforms like Interactive Brokers.
        </Paragraph>
    </Chapter>
);
