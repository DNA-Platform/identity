import { Append, Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './distinguishing-type-category-and-kind-in-english/.cover.tsx';
import TheSynopsis from './distinguishing-type-category-and-kind-in-english/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>July 2026</Part>
        <Dated>
            <Date>[3 July 2026](2026-07-03)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Distinguishing type, category, and kind in English ]]</Title>
        <Paragraph>
            <Caption />
            A conversation, 14 exchanges: <Means>$[[ Distinguishing type, category, and kind in English ]]</Means>.
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
