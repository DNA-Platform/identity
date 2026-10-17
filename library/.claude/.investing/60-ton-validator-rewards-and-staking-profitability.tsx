import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/ton-validator-rewards-and-staking-profitability/.cover.tsx';
import TheSynopsis from '../.conversations/ton-validator-rewards-and-staking-profitability/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ TON validator rewards and staking profitability ]]</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 6 April 2026: <Means>$[[ TON validator rewards and staking profitability ]]</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
