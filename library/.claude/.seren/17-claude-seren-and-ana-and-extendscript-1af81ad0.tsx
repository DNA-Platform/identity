import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--seren-and-ana-and-extendscript--1af81ad0/.cover.tsx';
import TheSynopsis from '../.conversations/claude--seren-and-ana-and-extendscript--1af81ad0/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Seren &amp; Ana &amp; ExtendScript ]]( claude--Seren &amp; Ana &amp; ExtendScript--1af81ad0 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 21 January 2025: <Means>$[[ Seren &amp; Ana &amp; ExtendScript ]]( claude--Seren &amp; Ana &amp; ExtendScript--1af81ad0 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
