import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The user presented a sophisticated investment thesis centered on cryptocurrency infrastructure, specifically
            focusing on TONX (a fund holding TON blockchain assets) and the technical origins of major blockchain
            projects. They developed what they termed the "minimization of anonymous cryptography genius theory" -
            applying Occam's razor to suggest that fewer individuals than commonly assumed may be behind major anonymous
            cryptographic innovations like Bitcoin, I2P, CryptoNote, and potentially Ethereum.
        </Paragraph>
    </Chapter>
);
