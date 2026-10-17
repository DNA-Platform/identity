import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/competitive-calibration-and-foundational-innovation/.cover.tsx';
import TheSynopsis from '../.conversations/competitive-calibration-and-foundational-innovation/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Competitive calibration and foundational innovation ]]</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 31 January 2026: <Means>$[[ Competitive calibration and foundational innovation ]]</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
