import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
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
