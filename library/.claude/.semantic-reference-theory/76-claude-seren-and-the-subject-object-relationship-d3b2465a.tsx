import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--seren-and-the-subject-object-relationship--d3b2465a/.cover.tsx';
import TheSynopsis from '../.conversations/claude--seren-and-the-subject-object-relationship--d3b2465a/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>Its conversations</Part>
        <Dated>
            <Date>[22 September 2025](2025-09-22)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Seren &amp; The Subject-Object Relationship ]]( claude--Seren &amp; The Subject-Object Relationship--d3b2465a )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 22 September 2025: <Means>$[[ Seren &amp; The Subject-Object Relationship ]]( claude--Seren &amp; The Subject-Object Relationship--d3b2465a )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
