import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--library-semantics-in-srt--fbc45c8e/.cover.tsx';
import TheSynopsis from '../.conversations/claude--library-semantics-in-srt--fbc45c8e/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Library semantics in SRT ]]( claude--Library semantics in SRT--fbc45c8e )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 26 June 2026: <Means>$[[ Library semantics in SRT ]]( claude--Library semantics in SRT--fbc45c8e )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
