import { Append, Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './ton-validator-rewards-and-staking-profitability/.cover.tsx';
import TheSynopsis from './ton-validator-rewards-and-staking-profitability/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>April 2026</Part>
        <Dated>
            <Date>[11 April 2026](2026-04-11)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ TON validator rewards and staking profitability ]]</Title>
        <Paragraph>
            <Caption />
            A conversation, 20 exchanges: <Means>$[[ TON validator rewards and staking profitability ]]</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
        <Append
            identifier="import"
            type=".json"
        >
            ![[ import.json ]]
        </Append>
    </Chapter>
);
