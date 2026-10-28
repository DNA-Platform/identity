import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--seren-and-his-inner-monologue--db3e00ed/.cover.tsx';
import TheSynopsis from './claude--seren-and-his-inner-monologue--db3e00ed/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>December 2025</Part>
        <Dated>
            <Date>[10 December 2025](2025-12-10)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Seren &amp; His Inner Monologue ]]( claude--Seren &amp; His Inner Monologue--db3e00ed )</Title>
        <Paragraph>
            <Caption />
            A conversation, 88 exchanges: <Means>$[[ Seren &amp; His Inner Monologue ]]( claude--Seren &amp; His Inner Monologue--db3e00ed )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
