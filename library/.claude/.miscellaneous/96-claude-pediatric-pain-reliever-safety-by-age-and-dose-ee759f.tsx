import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--pediatric-pain-reliever-safety-by-age-and-dose--ee759f22/.cover.tsx';
import TheSynopsis from '../.conversations/claude--pediatric-pain-reliever-safety-by-age-and-dose--ee759f22/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Pediatric pain reliever safety by age and dose ]]( claude--Pediatric pain reliever safety by age and dose--ee759f22 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 27 February 2026: <Means>$[[ Pediatric pain reliever safety by age and dose ]]( claude--Pediatric pain reliever safety by age and dose--ee759f22 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
