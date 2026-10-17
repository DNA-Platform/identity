import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--understanding-symbols-and-literals-in-srt--0db56260/.cover.tsx';
import TheSynopsis from '../.conversations/claude--understanding-symbols-and-literals-in-srt--0db56260/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Understanding symbols and literals in SRT ]]( claude--Understanding symbols and literals in SRT--0db56260 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 3 November 2025: <Means>$[[ Understanding symbols and literals in SRT ]]( claude--Understanding symbols and literals in SRT--0db56260 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
