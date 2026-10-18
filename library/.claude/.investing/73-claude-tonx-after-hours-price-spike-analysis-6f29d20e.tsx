import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
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
