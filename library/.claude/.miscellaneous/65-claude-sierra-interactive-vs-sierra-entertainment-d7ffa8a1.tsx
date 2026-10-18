import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--sierra-interactive-vs-sierra-entertainment--d7ffa8a1/.cover.tsx';
import TheSynopsis from '../.conversations/claude--sierra-interactive-vs-sierra-entertainment--d7ffa8a1/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>February 2026</Part>
        <Dated>
            <Date>[18 February 2026](2026-02-18)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Sierra Interactive vs Sierra Entertainment ]]( claude--Sierra Interactive vs Sierra Entertainment--d7ffa8a1 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 18 February 2026: <Means>$[[ Sierra Interactive vs Sierra Entertainment ]]( claude--Sierra Interactive vs Sierra Entertainment--d7ffa8a1 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
