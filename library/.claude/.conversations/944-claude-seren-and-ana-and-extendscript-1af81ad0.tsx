import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--seren-and-ana-and-extendscript--1af81ad0/.cover.tsx';
import TheSynopsis from './claude--seren-and-ana-and-extendscript--1af81ad0/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>May 2026</Part>
        <Dated>
            <Date>[8 May 2026](2026-05-08)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Seren &amp; Ana &amp; ExtendScript ]]( claude--Seren &amp; Ana &amp; ExtendScript--1af81ad0 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 292 exchanges: <Means>$[[ Seren &amp; Ana &amp; ExtendScript ]]( claude--Seren &amp; Ana &amp; ExtendScript--1af81ad0 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
