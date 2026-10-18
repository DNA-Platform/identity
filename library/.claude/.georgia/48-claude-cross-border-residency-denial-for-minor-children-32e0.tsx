import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--cross-border-residency-denial-for-minor-children--32e0a92c/.cover.tsx';
import TheSynopsis from '../.conversations/claude--cross-border-residency-denial-for-minor-children--32e0a92c/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Cross-border residency denial for minor children ]]( claude--Cross-border residency denial for minor children--32e0a92c )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 25 April 2026: <Means>$[[ Cross-border residency denial for minor children ]]( claude--Cross-border residency denial for minor children--32e0a92c )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
