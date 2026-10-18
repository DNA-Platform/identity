import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--post-surgery-weight-loss-plan-for-georgia--4ae195ac/.cover.tsx';
import TheSynopsis from './claude--post-surgery-weight-loss-plan-for-georgia--4ae195ac/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>August 2026</Part>
        <Dated>
            <Date>[1 August 2026](2026-08-01)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Post-surgery weight loss plan for Georgia ]]( claude--Post-surgery weight loss plan for Georgia--4ae195ac )</Title>
        <Paragraph>
            <Caption />
            A conversation, 10 exchanges: <Means>$[[ Post-surgery weight loss plan for Georgia ]]( claude--Post-surgery weight loss plan for Georgia--4ae195ac )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
