import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--srt-formalism-research-analysis--f65b4b49/.cover.tsx';
import TheSynopsis from '../.conversations/claude--srt-formalism-research-analysis--f65b4b49/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>October 2025</Part>
        <Dated>
            <Date>[1 October 2025](2025-10-01)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ SRT formalism research analysis ]]( claude--SRT formalism research analysis--f65b4b49 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 1 October 2025: <Means>$[[ SRT formalism research analysis ]]( claude--SRT formalism research analysis--f65b4b49 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
