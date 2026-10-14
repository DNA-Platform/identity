import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/learning-srt-syntax-and-transpiler-fundamentals/.cover.tsx';
import TheSynopsis from '../.conversations/learning-srt-syntax-and-transpiler-fundamentals/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Learning SRT syntax and transpiler fundamentals ]]</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 22 July 2026: <Means>$[[ Learning SRT syntax and transpiler fundamentals ]]</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
