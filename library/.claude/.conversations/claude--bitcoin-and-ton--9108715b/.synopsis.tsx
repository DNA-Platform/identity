import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The user engaged in an extensive analytical discussion exploring a hypothesis that Nikolai Durov, the
            technical architect behind Telegram and TON blockchain, may be the anonymous creator of Bitcoin (Satoshi
            Nakamoto). The conversation employed rigorous Bayesian reasoning and adversarial analysis to examine this
            theory through multiple technical and circumstantial evidence points.
        </Paragraph>
    </Chapter>
);
