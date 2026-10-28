import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--ton-validator-rewards-and-staking-profitability--0d2e8949/.cover.tsx';
import TheSynopsis from './claude--ton-validator-rewards-and-staking-profitability--0d2e8949/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>April 2026</Part>
        <Dated>
            <Date>[11 April 2026](2026-04-11)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ TON validator rewards and staking profitability ]]( claude--TON validator rewards and staking profitability--0d2e8949 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 20 exchanges: <Means>$[[ TON validator rewards and staking profitability ]]( claude--TON validator rewards and staking profitability--0d2e8949 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
