import { Append, Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './scions-macro-short-positions-and-options-exposure/.cover.tsx';
import TheSynopsis from './scions-macro-short-positions-and-options-exposure/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>January 2026</Part>
        <Dated>
            <Date>[23 January 2026](2026-01-23)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Scion's macro short positions and options exposure ]]</Title>
        <Paragraph>
            <Caption />
            A conversation, 42 exchanges: <Means>$[[ Scion's macro short positions and options exposure ]]</Means>.
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
