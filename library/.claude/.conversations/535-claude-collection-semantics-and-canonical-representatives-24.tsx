import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--collection-semantics-and-canonical-representatives--242c2548/.cover.tsx';
import TheSynopsis from './claude--collection-semantics-and-canonical-representatives--242c2548/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>August 2026</Part>
        <Dated>
            <Date>[24 August 2026](2026-08-24)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Collection semantics and canonical representatives ]]( claude--Collection semantics and canonical representatives--242c2548 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 46 exchanges: <Means>$[[ Collection semantics and canonical representatives ]]( claude--Collection semantics and canonical representatives--242c2548 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
