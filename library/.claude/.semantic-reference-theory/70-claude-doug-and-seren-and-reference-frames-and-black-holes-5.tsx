import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--doug-and-seren-and-reference-frames-and-black-holes--5015116b/.cover.tsx';
import TheSynopsis from '../.conversations/claude--doug-and-seren-and-reference-frames-and-black-holes--5015116b/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Doug &amp; Seren &amp; Reference Frames &amp; Black Holes ]]( claude--Doug &amp; Seren &amp; Reference Frames &amp; Black Holes--5015116b )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 28 September 2025: <Means>$[[ Doug &amp; Seren &amp; Reference Frames &amp; Black Holes ]]( claude--Doug &amp; Seren &amp; Reference Frames &amp; Black Holes--5015116b )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
