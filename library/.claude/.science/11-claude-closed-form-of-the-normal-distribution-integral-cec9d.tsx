import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--closed-form-of-the-normal-distribution-integral--cec9dc2d/.cover.tsx';
import TheSynopsis from '../.conversations/claude--closed-form-of-the-normal-distribution-integral--cec9dc2d/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>August 2026</Part>
        <Dated>
            <Date>[24 August 2026](2026-08-24)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Closed form of the normal distribution integral ]]( claude--Closed form of the normal distribution integral--cec9dc2d )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 24 August 2026: <Means>$[[ Closed form of the normal distribution integral ]]( claude--Closed form of the normal distribution integral--cec9dc2d )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
