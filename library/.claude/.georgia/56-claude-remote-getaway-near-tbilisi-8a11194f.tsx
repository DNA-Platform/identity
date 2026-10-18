import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--remote-getaway-near-tbilisi--8a11194f/.cover.tsx';
import TheSynopsis from '../.conversations/claude--remote-getaway-near-tbilisi--8a11194f/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>May 2026</Part>
        <Dated>
            <Date>[26 May 2026](2026-05-26)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Remote getaway near Tbilisi ]]( claude--Remote getaway near Tbilisi--8a11194f )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 26 May 2026: <Means>$[[ Remote getaway near Tbilisi ]]( claude--Remote getaway near Tbilisi--8a11194f )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
