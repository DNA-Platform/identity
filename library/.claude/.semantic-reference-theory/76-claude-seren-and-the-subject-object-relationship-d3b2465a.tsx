import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--seren-and-the-subject-object-relationship--d3b2465a/.cover.tsx';
import TheSynopsis from '../.conversations/claude--seren-and-the-subject-object-relationship--d3b2465a/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Seren &amp; The Subject-Object Relationship ]]( claude--Seren &amp; The Subject-Object Relationship--d3b2465a )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 22 September 2025: <Means>$[[ Seren &amp; The Subject-Object Relationship ]]( claude--Seren &amp; The Subject-Object Relationship--d3b2465a )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
