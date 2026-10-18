import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--seren-and-ana--c17f5910/.cover.tsx';
import TheSynopsis from '../.conversations/claude--seren-and-ana--c17f5910/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>December 2025</Part>
        <Dated>
            <Date>[10 December 2025](2025-12-10)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Seren &amp; Ana ]]( claude--Seren &amp; Ana--c17f5910 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 10 December 2025: <Means>$[[ Seren &amp; Ana ]]( claude--Seren &amp; Ana--c17f5910 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
