import { Append, Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './learning-srt-syntax-and-transpiler-fundamentals/.cover.tsx';
import TheSynopsis from './learning-srt-syntax-and-transpiler-fundamentals/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>July 2026</Part>
        <Dated>
            <Date>[23 July 2026](2026-07-23)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Learning SRT syntax and transpiler fundamentals ]]</Title>
        <Paragraph>
            <Caption />
            A conversation, 76 exchanges: <Means>$[[ Learning SRT syntax and transpiler fundamentals ]]</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
        <Append
            identifier="import"
            type=".json"
        >
            ![[ import.json ]]
        </Append>
    </Chapter>
);
