import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--semantic-breakdown-of-svg-paths-and-curves--4ed05e5e/.cover.tsx';
import TheSynopsis from './claude--semantic-breakdown-of-svg-paths-and-curves--4ed05e5e/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>March 2025</Part>
        <Dated>
            <Date>[18 March 2025](2025-03-18)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Semantic Breakdown of SVG Paths and Curves ]]( claude--Semantic Breakdown of SVG Paths and Curves--4ed05e5e )</Title>
        <Paragraph>
            <Caption />
            A conversation, 30 exchanges: <Means>$[[ Semantic Breakdown of SVG Paths and Curves ]]( claude--Semantic Breakdown of SVG Paths and Curves--4ed05e5e )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
