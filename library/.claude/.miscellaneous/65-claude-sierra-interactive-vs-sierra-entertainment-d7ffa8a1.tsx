import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--sierra-interactive-vs-sierra-entertainment--d7ffa8a1/.cover.tsx';
import TheSynopsis from '../.conversations/claude--sierra-interactive-vs-sierra-entertainment--d7ffa8a1/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Sierra Interactive vs Sierra Entertainment ]]( claude--Sierra Interactive vs Sierra Entertainment--d7ffa8a1 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 18 February 2026: <Means>$[[ Sierra Interactive vs Sierra Entertainment ]]( claude--Sierra Interactive vs Sierra Entertainment--d7ffa8a1 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
