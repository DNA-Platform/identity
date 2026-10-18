import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--sierra-interactive-vs-sierra-entertainment--d7ffa8a1/.cover.tsx';
import TheSynopsis from './claude--sierra-interactive-vs-sierra-entertainment--d7ffa8a1/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>February 2026</Part>
        <Dated>
            <Date>[18 February 2026](2026-02-18)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Sierra Interactive vs Sierra Entertainment ]]( claude--Sierra Interactive vs Sierra Entertainment--d7ffa8a1 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 4 exchanges: <Means>$[[ Sierra Interactive vs Sierra Entertainment ]]( claude--Sierra Interactive vs Sierra Entertainment--d7ffa8a1 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
