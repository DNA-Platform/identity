import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--understanding-symbols-and-literals-in-srt--0db56260/.cover.tsx';
import TheSynopsis from './claude--understanding-symbols-and-literals-in-srt--0db56260/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>November 2025</Part>
        <Dated>
            <Date>[3 November 2025](2025-11-03)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Understanding symbols and literals in SRT ]]( claude--Understanding symbols and literals in SRT--0db56260 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 48 exchanges: <Means>$[[ Understanding symbols and literals in SRT ]]( claude--Understanding symbols and literals in SRT--0db56260 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
