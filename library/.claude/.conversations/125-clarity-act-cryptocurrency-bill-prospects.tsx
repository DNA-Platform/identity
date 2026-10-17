import { Append, Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './clarity-act-cryptocurrency-bill-prospects/.cover.tsx';
import TheSynopsis from './clarity-act-cryptocurrency-bill-prospects/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>September 2026</Part>
        <Dated>
            <Date>[15 September 2026](2026-09-15)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Clarity act cryptocurrency bill prospects ]]</Title>
        <Paragraph>
            <Caption />
            A conversation, 2 exchanges: <Means>$[[ Clarity act cryptocurrency bill prospects ]]</Means>.
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
