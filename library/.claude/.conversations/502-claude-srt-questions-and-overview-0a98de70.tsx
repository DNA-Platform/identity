import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--srt-questions-and-overview--0a98de70/.cover.tsx';
import TheSynopsis from './claude--srt-questions-and-overview--0a98de70/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>November 2025</Part>
        <Dated>
            <Date>[21 November 2025](2025-11-21)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ SRT questions and overview ]]( claude--SRT questions and overview--0a98de70 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 78 exchanges: <Means>$[[ SRT questions and overview ]]( claude--SRT questions and overview--0a98de70 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
