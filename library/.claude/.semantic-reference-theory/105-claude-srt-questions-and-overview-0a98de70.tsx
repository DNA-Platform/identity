import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--srt-questions-and-overview--0a98de70/.cover.tsx';
import TheSynopsis from '../.conversations/claude--srt-questions-and-overview--0a98de70/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>November 2025</Part>
        <Dated>
            <Date>[4 November 2025](2025-11-04)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ SRT questions and overview ]]( claude--SRT questions and overview--0a98de70 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 4 November 2025: <Means>$[[ SRT questions and overview ]]( claude--SRT questions and overview--0a98de70 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
