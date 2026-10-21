import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--improving-vectorized-script-and-serif-text-in-svg--9777b6d7/.cover.tsx';
import TheSynopsis from './claude--improving-vectorized-script-and-serif-text-in-svg--9777b6d7/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>March 2025</Part>
        <Dated>
            <Date>[18 March 2025](2025-03-18)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Improving Vectorized Script and Serif Text in SVG ]]( claude--Improving Vectorized Script and Serif Text in SVG--9777b6d7 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 14 exchanges: <Means>$[[ Improving Vectorized Script and Serif Text in SVG ]]( claude--Improving Vectorized Script and Serif Text in SVG--9777b6d7 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
