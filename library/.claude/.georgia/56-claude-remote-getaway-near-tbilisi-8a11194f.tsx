import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--remote-getaway-near-tbilisi--8a11194f/.cover.tsx';
import TheSynopsis from '../.conversations/claude--remote-getaway-near-tbilisi--8a11194f/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Remote getaway near Tbilisi ]]( claude--Remote getaway near Tbilisi--8a11194f )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 26 May 2026: <Means>$[[ Remote getaway near Tbilisi ]]( claude--Remote getaway near Tbilisi--8a11194f )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
