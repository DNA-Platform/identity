import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--static-analysis-for-state-change-detection--710061c6/.cover.tsx';
import TheSynopsis from '../.conversations/claude--static-analysis-for-state-change-detection--710061c6/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Static analysis for state change detection ]]( claude--Static analysis for state change detection--710061c6 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 20 April 2026: <Means>$[[ Static analysis for state change detection ]]( claude--Static analysis for state change detection--710061c6 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
