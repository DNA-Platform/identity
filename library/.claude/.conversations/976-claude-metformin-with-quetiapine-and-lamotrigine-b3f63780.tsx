import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--metformin-with-quetiapine-and-lamotrigine--b3f63780/.cover.tsx';
import TheSynopsis from './claude--metformin-with-quetiapine-and-lamotrigine--b3f63780/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>August 2026</Part>
        <Dated>
            <Date>[13 August 2026](2026-08-13)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Metformin with quetiapine and lamotrigine ]]( claude--Metformin with quetiapine and lamotrigine--b3f63780 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 68 exchanges: <Means>$[[ Metformin with quetiapine and lamotrigine ]]( claude--Metformin with quetiapine and lamotrigine--b3f63780 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
