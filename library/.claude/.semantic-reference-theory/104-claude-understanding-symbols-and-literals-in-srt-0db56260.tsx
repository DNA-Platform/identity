import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--understanding-symbols-and-literals-in-srt--0db56260/.cover.tsx';
import TheSynopsis from '../.conversations/claude--understanding-symbols-and-literals-in-srt--0db56260/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>November 2025</Part>
        <Dated>
            <Date>[3 November 2025](2025-11-03)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Understanding symbols and literals in SRT ]]( claude--Understanding symbols and literals in SRT--0db56260 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 3 November 2025: <Means>$[[ Understanding symbols and literals in SRT ]]( claude--Understanding symbols and literals in SRT--0db56260 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
