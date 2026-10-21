import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--tonx-after-hours-price-spike-analysis--6f29d20e/.cover.tsx';
import TheSynopsis from './claude--tonx-after-hours-price-spike-analysis--6f29d20e/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>May 2026</Part>
        <Dated>
            <Date>[4 May 2026](2026-05-04)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ TONX after-hours price spike analysis ]]( claude--TONX after-hours price spike analysis--6f29d20e )</Title>
        <Paragraph>
            <Caption />
            A conversation, 12 exchanges: <Means>$[[ TONX after-hours price spike analysis ]]( claude--TONX after-hours price spike analysis--6f29d20e )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
