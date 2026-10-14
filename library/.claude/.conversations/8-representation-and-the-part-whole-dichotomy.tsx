import { Append, Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './representation-and-the-part-whole-dichotomy/.cover.tsx';
import TheSynopsis from './representation-and-the-part-whole-dichotomy/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>June 2026</Part>
        <Dated>
            <Date>[14 June 2026](2026-06-14)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Representation &amp; the Part - Whole Dichotomy ]]</Title>
        <Paragraph>
            <Caption />
            A conversation, 66 exchanges: <Means>$[[ Representation &amp; the Part - Whole Dichotomy ]]</Means>.
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
