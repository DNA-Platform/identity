import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--borderline-personality-disorder-symptoms--58aa30f6/.cover.tsx';
import TheSynopsis from '../.conversations/claude--borderline-personality-disorder-symptoms--58aa30f6/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Borderline personality disorder symptoms ]]( claude--Borderline personality disorder symptoms--58aa30f6 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 27 January 2026: <Means>$[[ Borderline personality disorder symptoms ]]( claude--Borderline personality disorder symptoms--58aa30f6 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
