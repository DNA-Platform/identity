import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--metformin-xr-dosing-and-maximum-dose--3c33fd09/.cover.tsx';
import TheSynopsis from './claude--metformin-xr-dosing-and-maximum-dose--3c33fd09/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>August 2026</Part>
        <Dated>
            <Date>[20 August 2026](2026-08-20)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Metformin XR dosing and maximum dose ]]( claude--Metformin XR dosing and maximum dose--3c33fd09 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 8 exchanges: <Means>$[[ Metformin XR dosing and maximum dose ]]( claude--Metformin XR dosing and maximum dose--3c33fd09 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
