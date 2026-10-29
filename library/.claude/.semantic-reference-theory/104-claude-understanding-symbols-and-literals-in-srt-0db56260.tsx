import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--understanding-symbols-and-literals-in-srt--0db56260/.cover.tsx';
import TheSynopsis from '../.conversations/claude--understanding-symbols-and-literals-in-srt--0db56260/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>Its conversations</Part>
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
