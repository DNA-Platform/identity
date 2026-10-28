import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
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
