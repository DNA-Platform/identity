import { Append, Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './semantics-of-types-and-more/.cover.tsx';
import TheSynopsis from './semantics-of-types-and-more/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>September 2026</Part>
        <Dated>
            <Date>[10 September 2026](2026-09-10)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Semantics of Types &amp; More ]]</Title>
        <Paragraph>
            <Caption />
            A conversation, 84 exchanges: <Means>$[[ Semantics of Types &amp; More ]]</Means>.
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
