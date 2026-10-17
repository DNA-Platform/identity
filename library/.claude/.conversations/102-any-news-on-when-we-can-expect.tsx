import { Append, Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './any-news-on-when-we-can-expect/.cover.tsx';
import TheSynopsis from './any-news-on-when-we-can-expect/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>May 2026</Part>
        <Dated>
            <Date>[14 May 2026](2026-05-14)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Any news on when we can expect… ]]</Title>
        <Paragraph>
            <Caption />
            A conversation, 4 exchanges: <Means>$[[ Any news on when we can expect… ]]</Means>.
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
