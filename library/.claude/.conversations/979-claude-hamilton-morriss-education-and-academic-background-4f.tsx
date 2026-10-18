import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--hamilton-morriss-education-and-academic-background--4f826b46/.cover.tsx';
import TheSynopsis from './claude--hamilton-morriss-education-and-academic-background--4f826b46/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>July 2026</Part>
        <Dated>
            <Date>[20 July 2026](2026-07-20)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Hamilton Morris's education and academic background ]]( claude--Hamilton Morris's education and academic background--4f826b46 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 46 exchanges: <Means>$[[ Hamilton Morris's education and academic background ]]( claude--Hamilton Morris's education and academic background--4f826b46 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
