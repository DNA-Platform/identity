import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--metformin-with-quetiapine-and-lamotrigine--b3f63780/.cover.tsx';
import TheSynopsis from '../.conversations/claude--metformin-with-quetiapine-and-lamotrigine--b3f63780/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>August 2026</Part>
        <Dated>
            <Date>[13 August 2026](2026-08-13)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Metformin with quetiapine and lamotrigine ]]( claude--Metformin with quetiapine and lamotrigine--b3f63780 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 13 August 2026: <Means>$[[ Metformin with quetiapine and lamotrigine ]]( claude--Metformin with quetiapine and lamotrigine--b3f63780 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
