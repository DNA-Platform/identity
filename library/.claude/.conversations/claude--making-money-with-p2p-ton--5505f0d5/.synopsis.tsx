import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The user explored using TON blockchain's peer-to-peer marketplace as a method to accumulate TON
            cryptocurrency at favorable rates. They are US-based but currently located in Georgia (the country) and have
            access to multiple US banking platforms including Citibank, Chase, Interactive Brokers, PayPal, and Mercury,
            with the ability to set up additional services like Wise and Payoneer. The conversation focused on
            understanding TON's P2P infrastructure and whether they could leverage their unique position to offer USD
            transfers to US bank accounts via Zelle in exchange for TON.
        </Paragraph>
    </Chapter>
);
