import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--metformin-xr-dosing-and-maximum-dose--3c33fd09/.cover.tsx';
import TheSynopsis from '../.conversations/claude--metformin-xr-dosing-and-maximum-dose--3c33fd09/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>August 2026</Part>
        <Dated>
            <Date>[20 August 2026](2026-08-20)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Metformin XR dosing and maximum dose ]]( claude--Metformin XR dosing and maximum dose--3c33fd09 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 20 August 2026: <Means>$[[ Metformin XR dosing and maximum dose ]]( claude--Metformin XR dosing and maximum dose--3c33fd09 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
