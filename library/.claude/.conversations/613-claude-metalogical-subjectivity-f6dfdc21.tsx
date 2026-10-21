import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--metalogical-subjectivity--f6dfdc21/.cover.tsx';
import TheSynopsis from './claude--metalogical-subjectivity--f6dfdc21/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>March 2025</Part>
        <Dated>
            <Date>[23 March 2025](2025-03-23)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Metalogical Subjectivity ]]( claude--Metalogical Subjectivity--f6dfdc21 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 192 exchanges: <Means>$[[ Metalogical Subjectivity ]]( claude--Metalogical Subjectivity--f6dfdc21 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
