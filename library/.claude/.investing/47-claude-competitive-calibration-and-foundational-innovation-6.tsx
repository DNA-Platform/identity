import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--competitive-calibration-and-foundational-innovation--6aff23d6/.cover.tsx';
import TheSynopsis from '../.conversations/claude--competitive-calibration-and-foundational-innovation--6aff23d6/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Competitive calibration and foundational innovation ]]( claude--Competitive calibration and foundational innovation--6aff23d6 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 31 January 2026: <Means>$[[ Competitive calibration and foundational innovation ]]( claude--Competitive calibration and foundational innovation--6aff23d6 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
