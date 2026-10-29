import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--post-surgery-weight-loss-plan-for-georgia--4ae195ac/.cover.tsx';
import TheSynopsis from '../.conversations/claude--post-surgery-weight-loss-plan-for-georgia--4ae195ac/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>Its conversations</Part>
        <Dated>
            <Date>[1 August 2026](2026-08-01)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Post-surgery weight loss plan for Georgia ]]( claude--Post-surgery weight loss plan for Georgia--4ae195ac )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 1 August 2026: <Means>$[[ Post-surgery weight loss plan for Georgia ]]( claude--Post-surgery weight loss plan for Georgia--4ae195ac )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
