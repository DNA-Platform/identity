import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--post-surgery-weight-loss-plan-for-georgia--4ae195ac/.cover.tsx';
import TheSynopsis from '../.conversations/claude--post-surgery-weight-loss-plan-for-georgia--4ae195ac/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Post-surgery weight loss plan for Georgia ]]( claude--Post-surgery weight loss plan for Georgia--4ae195ac )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 1 August 2026: <Means>$[[ Post-surgery weight loss plan for Georgia ]]( claude--Post-surgery weight loss plan for Georgia--4ae195ac )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
