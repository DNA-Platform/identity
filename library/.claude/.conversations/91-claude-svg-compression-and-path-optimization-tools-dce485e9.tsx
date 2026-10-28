import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--svg-compression-and-path-optimization-tools--dce485e9/.cover.tsx';
import TheSynopsis from './claude--svg-compression-and-path-optimization-tools--dce485e9/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>March 2026</Part>
        <Dated>
            <Date>[4 March 2026](2026-03-04)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ SVG compression and path optimization tools ]]( claude--SVG compression and path optimization tools--dce485e9 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 66 exchanges: <Means>$[[ SVG compression and path optimization tools ]]( claude--SVG compression and path optimization tools--dce485e9 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
