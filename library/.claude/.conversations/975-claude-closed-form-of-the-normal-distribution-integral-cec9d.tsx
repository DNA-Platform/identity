import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--closed-form-of-the-normal-distribution-integral--cec9dc2d/.cover.tsx';
import TheSynopsis from './claude--closed-form-of-the-normal-distribution-integral--cec9dc2d/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>August 2026</Part>
        <Dated>
            <Date>[24 August 2026](2026-08-24)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Closed form of the normal distribution integral ]]( claude--Closed form of the normal distribution integral--cec9dc2d )</Title>
        <Paragraph>
            <Caption />
            A conversation, 4 exchanges: <Means>$[[ Closed form of the normal distribution integral ]]( claude--Closed form of the normal distribution integral--cec9dc2d )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
