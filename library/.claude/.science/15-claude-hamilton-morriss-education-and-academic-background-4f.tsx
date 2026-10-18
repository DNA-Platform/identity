import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--hamilton-morriss-education-and-academic-background--4f826b46/.cover.tsx';
import TheSynopsis from '../.conversations/claude--hamilton-morriss-education-and-academic-background--4f826b46/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>July 2026</Part>
        <Dated>
            <Date>[20 July 2026](2026-07-20)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Hamilton Morris's education and academic background ]]( claude--Hamilton Morris's education and academic background--4f826b46 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 20 July 2026: <Means>$[[ Hamilton Morris's education and academic background ]]( claude--Hamilton Morris's education and academic background--4f826b46 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
