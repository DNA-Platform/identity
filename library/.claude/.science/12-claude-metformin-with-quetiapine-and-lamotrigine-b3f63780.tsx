import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--metformin-with-quetiapine-and-lamotrigine--b3f63780/.cover.tsx';
import TheSynopsis from '../.conversations/claude--metformin-with-quetiapine-and-lamotrigine--b3f63780/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Metformin with quetiapine and lamotrigine ]]( claude--Metformin with quetiapine and lamotrigine--b3f63780 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 13 August 2026: <Means>$[[ Metformin with quetiapine and lamotrigine ]]( claude--Metformin with quetiapine and lamotrigine--b3f63780 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
