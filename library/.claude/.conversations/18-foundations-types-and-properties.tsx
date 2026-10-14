import { Append, Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './foundations-types-and-properties/.cover.tsx';
import TheSynopsis from './foundations-types-and-properties/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>September 2026</Part>
        <Dated>
            <Date>[8 September 2026](2026-09-08)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Foundations: Types &amp; Properties ]]</Title>
        <Paragraph>
            <Caption />
            A conversation, 232 exchanges: <Means>$[[ Foundations: Types &amp; Properties ]]</Means>.
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
