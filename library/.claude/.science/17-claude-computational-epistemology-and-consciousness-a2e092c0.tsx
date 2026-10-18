import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--computational-epistemology-and-consciousness--a2e092c0/.cover.tsx';
import TheSynopsis from '../.conversations/claude--computational-epistemology-and-consciousness--a2e092c0/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>October 2026</Part>
        <Dated>
            <Date>[12 October 2026](2026-10-12)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Computational epistemology and consciousness ]]( claude--Computational epistemology and consciousness--a2e092c0 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 12 October 2026: <Means>$[[ Computational epistemology and consciousness ]]( claude--Computational epistemology and consciousness--a2e092c0 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
