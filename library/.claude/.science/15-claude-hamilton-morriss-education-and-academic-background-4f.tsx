import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--hamilton-morriss-education-and-academic-background--4f826b46/.cover.tsx';
import TheSynopsis from '../.conversations/claude--hamilton-morriss-education-and-academic-background--4f826b46/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Hamilton Morris's education and academic background ]]( claude--Hamilton Morris's education and academic background--4f826b46 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 20 July 2026: <Means>$[[ Hamilton Morris's education and academic background ]]( claude--Hamilton Morris's education and academic background--4f826b46 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
