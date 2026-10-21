import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--describing-flare-ups-of-medical-condition--13e2ecc7/.cover.tsx';
import TheSynopsis from './claude--describing-flare-ups-of-medical-condition--13e2ecc7/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>November 2024</Part>
        <Dated>
            <Date>[8 November 2024](2024-11-08)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Describing Flare-ups of Medical Condition ]]( claude--Describing Flare-ups of Medical Condition--13e2ecc7 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 4 exchanges: <Means>$[[ Describing Flare-ups of Medical Condition ]]( claude--Describing Flare-ups of Medical Condition--13e2ecc7 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
