import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--seren-and-the-subject-object-relationship--d3b2465a/.cover.tsx';
import TheSynopsis from './claude--seren-and-the-subject-object-relationship--d3b2465a/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>September 2025</Part>
        <Dated>
            <Date>[23 September 2025](2025-09-23)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Seren &amp; The Subject-Object Relationship ]]( claude--Seren &amp; The Subject-Object Relationship--d3b2465a )</Title>
        <Paragraph>
            <Caption />
            A conversation, 42 exchanges: <Means>$[[ Seren &amp; The Subject-Object Relationship ]]( claude--Seren &amp; The Subject-Object Relationship--d3b2465a )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
