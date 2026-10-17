import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The person engaged in a deep analytical discussion about two crypto projects — Orchid (OXT) and Gitcoin
            (GTC) — and their relationship to TON (Telegram Open Network). Claude provided background on both projects:
            Orchid as a decentralized VPN bandwidth marketplace founded by Steven Waterhouse, Brian Fox, Jay Freeman,
            and Gustav Simonsson, using probabilistic nanopayments on Ethereum; and Gitcoin as a public goods funding
            platform founded by Kevin Owocki, notable for implementing quadratic funding mechanisms theorized by Vitalik
            Buterin, Zoë Hitzig, and Glen Weyl.
        </Paragraph>
    </Chapter>
);
