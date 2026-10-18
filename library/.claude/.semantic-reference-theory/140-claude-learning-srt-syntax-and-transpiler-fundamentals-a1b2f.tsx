import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--learning-srt-syntax-and-transpiler-fundamentals--a1b2fd15/.cover.tsx';
import TheSynopsis from '../.conversations/claude--learning-srt-syntax-and-transpiler-fundamentals--a1b2fd15/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>July 2026</Part>
        <Dated>
            <Date>[22 July 2026](2026-07-22)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Learning SRT syntax and transpiler fundamentals ]]( claude--Learning SRT syntax and transpiler fundamentals--a1b2fd15 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 22 July 2026: <Means>$[[ Learning SRT syntax and transpiler fundamentals ]]( claude--Learning SRT syntax and transpiler fundamentals--a1b2fd15 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
