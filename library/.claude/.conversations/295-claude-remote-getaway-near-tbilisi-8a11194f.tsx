import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--remote-getaway-near-tbilisi--8a11194f/.cover.tsx';
import TheSynopsis from './claude--remote-getaway-near-tbilisi--8a11194f/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>May 2026</Part>
        <Dated>
            <Date>[26 May 2026](2026-05-26)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Remote getaway near Tbilisi ]]( claude--Remote getaway near Tbilisi--8a11194f )</Title>
        <Paragraph>
            <Caption />
            A conversation, 10 exchanges: <Means>$[[ Remote getaway near Tbilisi ]]( claude--Remote getaway near Tbilisi--8a11194f )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
