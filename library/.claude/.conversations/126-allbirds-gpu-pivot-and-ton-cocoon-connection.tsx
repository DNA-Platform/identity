import { Append, Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './allbirds-gpu-pivot-and-ton-cocoon-connection/.cover.tsx';
import TheSynopsis from './allbirds-gpu-pivot-and-ton-cocoon-connection/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>April 2026</Part>
        <Dated>
            <Date>[16 April 2026](2026-04-16)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Allbirds GPU pivot and TON∕Cocoon connection ]]</Title>
        <Paragraph>
            <Caption />
            A conversation, 28 exchanges: <Means>$[[ Allbirds GPU pivot and TON∕Cocoon connection ]]</Means>.
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
