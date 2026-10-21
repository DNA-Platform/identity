import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
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
