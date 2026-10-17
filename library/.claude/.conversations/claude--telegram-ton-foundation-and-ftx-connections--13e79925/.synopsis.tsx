import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The user presented a sophisticated investment thesis connecting Telegram, TON Foundation, and FTX, revealing
            deep expertise in quantitative finance and cryptocurrency. They explored potential connections between these
            entities, discovering that while FTX had proposed a partnership with Telegram that never materialized,
            Telegram actually positioned itself as a solution to centralized exchange failures after FTX's collapse by
            accelerating development of decentralized infrastructure including the TON Space self-custodial wallet.
        </Paragraph>
    </Chapter>
);
