import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--quetiapine-induced-hallucinations-and-medication-interaction--5c933de0/.cover.tsx';
import TheSynopsis from '../.conversations/claude--quetiapine-induced-hallucinations-and-medication-interaction--5c933de0/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>July 2026</Part>
        <Dated>
            <Date>[20 July 2026](2026-07-20)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Quetiapine-induced hallucinations and medication interactions ]]( claude--Quetiapine-induced hallucinations and medication interactions--5c933de0 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 20 July 2026: <Means>$[[ Quetiapine-induced hallucinations and medication interactions ]]( claude--Quetiapine-induced hallucinations and medication interactions--5c933de0 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
