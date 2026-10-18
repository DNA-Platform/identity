import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--quetiapine-induced-hallucinations-and-medication-interaction--5c933de0/.cover.tsx';
import TheSynopsis from './claude--quetiapine-induced-hallucinations-and-medication-interaction--5c933de0/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>July 2026</Part>
        <Dated>
            <Date>[20 July 2026](2026-07-20)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Quetiapine-induced hallucinations and medication interactions ]]( claude--Quetiapine-induced hallucinations and medication interactions--5c933de0 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 28 exchanges: <Means>$[[ Quetiapine-induced hallucinations and medication interactions ]]( claude--Quetiapine-induced hallucinations and medication interactions--5c933de0 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
