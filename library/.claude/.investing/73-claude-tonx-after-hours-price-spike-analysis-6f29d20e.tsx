import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--tonx-after-hours-price-spike-analysis--6f29d20e/.cover.tsx';
import TheSynopsis from '../.conversations/claude--tonx-after-hours-price-spike-analysis--6f29d20e/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ TONX after-hours price spike analysis ]]( claude--TONX after-hours price spike analysis--6f29d20e )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 4 May 2026: <Means>$[[ TONX after-hours price spike analysis ]]( claude--TONX after-hours price spike analysis--6f29d20e )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
