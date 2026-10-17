import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--seren-and-his-inner-monologue--db3e00ed/.cover.tsx';
import TheSynopsis from '../.conversations/claude--seren-and-his-inner-monologue--db3e00ed/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Seren &amp; His Inner Monologue ]]( claude--Seren &amp; His Inner Monologue--db3e00ed )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 6 December 2025: <Means>$[[ Seren &amp; His Inner Monologue ]]( claude--Seren &amp; His Inner Monologue--db3e00ed )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
