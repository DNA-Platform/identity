import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--animated-rotating-and-scaling-rose-svg--a9d87661/.cover.tsx';
import TheSynopsis from './claude--animated-rotating-and-scaling-rose-svg--a9d87661/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>March 2025</Part>
        <Dated>
            <Date>[9 March 2025](2025-03-09)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Animated Rotating and Scaling Rose SVG ]]( claude--Animated Rotating and Scaling Rose SVG--a9d87661 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 28 exchanges: <Means>$[[ Animated Rotating and Scaling Rose SVG ]]( claude--Animated Rotating and Scaling Rose SVG--a9d87661 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
