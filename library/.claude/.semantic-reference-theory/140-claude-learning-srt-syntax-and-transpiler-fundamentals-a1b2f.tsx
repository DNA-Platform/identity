import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--learning-srt-syntax-and-transpiler-fundamentals--a1b2fd15/.cover.tsx';
import TheSynopsis from '../.conversations/claude--learning-srt-syntax-and-transpiler-fundamentals--a1b2fd15/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Learning SRT syntax and transpiler fundamentals ]]( claude--Learning SRT syntax and transpiler fundamentals--a1b2fd15 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 22 July 2026: <Means>$[[ Learning SRT syntax and transpiler fundamentals ]]( claude--Learning SRT syntax and transpiler fundamentals--a1b2fd15 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
