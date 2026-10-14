import { Append, Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './relationships-and-inheriance/.cover.tsx';
import TheSynopsis from './relationships-and-inheriance/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>July 2026</Part>
        <Dated>
            <Date>[13 July 2026](2026-07-13)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Relationships &amp; Inheriance ]]</Title>
        <Paragraph>
            <Caption />
            A conversation, 169 exchanges: <Means>$[[ Relationships &amp; Inheriance ]]</Means>.
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
