import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--srt-formalism-research-analysis--f65b4b49/.cover.tsx';
import TheSynopsis from '../.conversations/claude--srt-formalism-research-analysis--f65b4b49/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ SRT formalism research analysis ]]( claude--SRT formalism research analysis--f65b4b49 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 1 October 2025: <Means>$[[ SRT formalism research analysis ]]( claude--SRT formalism research analysis--f65b4b49 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
