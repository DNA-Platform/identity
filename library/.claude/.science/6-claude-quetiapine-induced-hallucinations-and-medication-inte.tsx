import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--quetiapine-induced-hallucinations-and-medication-interaction--5c933de0/.cover.tsx';
import TheSynopsis from '../.conversations/claude--quetiapine-induced-hallucinations-and-medication-interaction--5c933de0/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>Its conversations</Part>
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
