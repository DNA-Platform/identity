import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--pediatric-pain-reliever-safety-by-age-and-dose--ee759f22/.cover.tsx';
import TheSynopsis from './claude--pediatric-pain-reliever-safety-by-age-and-dose--ee759f22/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>February 2026</Part>
        <Dated>
            <Date>[27 February 2026](2026-02-27)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Pediatric pain reliever safety by age and dose ]]( claude--Pediatric pain reliever safety by age and dose--ee759f22 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 6 exchanges: <Means>$[[ Pediatric pain reliever safety by age and dose ]]( claude--Pediatric pain reliever safety by age and dose--ee759f22 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
