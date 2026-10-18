import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--computational-epistemology-and-consciousness--a2e092c0/.cover.tsx';
import TheSynopsis from '../.conversations/claude--computational-epistemology-and-consciousness--a2e092c0/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Computational epistemology and consciousness ]]( claude--Computational epistemology and consciousness--a2e092c0 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 12 October 2026: <Means>$[[ Computational epistemology and consciousness ]]( claude--Computational epistemology and consciousness--a2e092c0 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
