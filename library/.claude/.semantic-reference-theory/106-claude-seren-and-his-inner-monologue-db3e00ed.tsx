import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--seren-and-his-inner-monologue--db3e00ed/.cover.tsx';
import TheSynopsis from '../.conversations/claude--seren-and-his-inner-monologue--db3e00ed/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>Its conversations</Part>
        <Dated>
            <Date>[6 December 2025](2025-12-06)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Seren &amp; His Inner Monologue ]]( claude--Seren &amp; His Inner Monologue--db3e00ed )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 6 December 2025: <Means>$[[ Seren &amp; His Inner Monologue ]]( claude--Seren &amp; His Inner Monologue--db3e00ed )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
