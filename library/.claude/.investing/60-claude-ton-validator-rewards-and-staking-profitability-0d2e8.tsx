import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--ton-validator-rewards-and-staking-profitability--0d2e8949/.cover.tsx';
import TheSynopsis from '../.conversations/claude--ton-validator-rewards-and-staking-profitability--0d2e8949/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>April 2026</Part>
        <Dated>
            <Date>[6 April 2026](2026-04-06)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ TON validator rewards and staking profitability ]]( claude--TON validator rewards and staking profitability--0d2e8949 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 6 April 2026: <Means>$[[ TON validator rewards and staking profitability ]]( claude--TON validator rewards and staking profitability--0d2e8949 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
