import { Append, Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './ton-digital-asset-treasury-companies-on-stock-exchanges/.cover.tsx';
import TheSynopsis from './ton-digital-asset-treasury-companies-on-stock-exchanges/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>February 2026</Part>
        <Dated>
            <Date>[5 February 2026](2026-02-05)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ TON digital asset treasury companies on stock exchanges ]]</Title>
        <Paragraph>
            <Caption />
            A conversation, 55 exchanges: <Means>$[[ TON digital asset treasury companies on stock exchanges ]]</Means>.
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
