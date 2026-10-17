import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--seren-and-ana--c17f5910/.cover.tsx';
import TheSynopsis from '../.conversations/claude--seren-and-ana--c17f5910/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Seren &amp; Ana ]]( claude--Seren &amp; Ana--c17f5910 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 10 December 2025: <Means>$[[ Seren &amp; Ana ]]( claude--Seren &amp; Ana--c17f5910 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
