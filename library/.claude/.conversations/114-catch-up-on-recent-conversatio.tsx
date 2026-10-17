import { Append, Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './catch-up-on-recent-conversatio/.cover.tsx';
import TheSynopsis from './catch-up-on-recent-conversatio/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>August 2026</Part>
        <Dated>
            <Date>[18 August 2026](2026-08-18)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Catch up on recent conversatio… ]]</Title>
        <Paragraph>
            <Caption />
            A conversation, 18 exchanges: <Means>$[[ Catch up on recent conversatio… ]]</Means>.
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
