import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--doug-and-seren-and-reference-frames-and-black-holes--5015116b/.cover.tsx';
import TheSynopsis from './claude--doug-and-seren-and-reference-frames-and-black-holes--5015116b/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>September 2025</Part>
        <Dated>
            <Date>[29 September 2025](2025-09-29)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Doug &amp; Seren &amp; Reference Frames &amp; Black Holes ]]( claude--Doug &amp; Seren &amp; Reference Frames &amp; Black Holes--5015116b )</Title>
        <Paragraph>
            <Caption />
            A conversation, 136 exchanges: <Means>$[[ Doug &amp; Seren &amp; Reference Frames &amp; Black Holes ]]( claude--Doug &amp; Seren &amp; Reference Frames &amp; Black Holes--5015116b )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
