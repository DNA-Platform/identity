import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--learning-srt-syntax-and-transpiler-fundamentals--a1b2fd15/.cover.tsx';
import TheSynopsis from './claude--learning-srt-syntax-and-transpiler-fundamentals--a1b2fd15/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>July 2026</Part>
        <Dated>
            <Date>[23 July 2026](2026-07-23)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Learning SRT syntax and transpiler fundamentals ]]( claude--Learning SRT syntax and transpiler fundamentals--a1b2fd15 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 76 exchanges: <Means>$[[ Learning SRT syntax and transpiler fundamentals ]]( claude--Learning SRT syntax and transpiler fundamentals--a1b2fd15 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
