import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--tonx-after-hours-price-spike-analysis--6f29d20e/.cover.tsx';
import TheSynopsis from '../.conversations/claude--tonx-after-hours-price-spike-analysis--6f29d20e/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>May 2026</Part>
        <Dated>
            <Date>[4 May 2026](2026-05-04)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ TONX after-hours price spike analysis ]]( claude--TONX after-hours price spike analysis--6f29d20e )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 4 May 2026: <Means>$[[ TONX after-hours price spike analysis ]]( claude--TONX after-hours price spike analysis--6f29d20e )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
