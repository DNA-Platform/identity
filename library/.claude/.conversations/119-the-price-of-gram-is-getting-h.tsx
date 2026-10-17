import { Append, Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './the-price-of-gram-is-getting-h/.cover.tsx';
import TheSynopsis from './the-price-of-gram-is-getting-h/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>October 2026</Part>
        <Dated>
            <Date>[15 October 2026](2026-10-15)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ the price of gram is getting h… ]]</Title>
        <Paragraph>
            <Caption />
            A conversation, 438 exchanges: <Means>$[[ the price of gram is getting h… ]]</Means>.
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
