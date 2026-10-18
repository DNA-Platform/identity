import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--claude-code-weekly-limit-and-credit-usage--9ee0d598/.cover.tsx';
import TheSynopsis from '../.conversations/claude--claude-code-weekly-limit-and-credit-usage--9ee0d598/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Claude Code weekly limit and credit usage ]]( claude--Claude Code weekly limit and credit usage--9ee0d598 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 18 June 2026: <Means>$[[ Claude Code weekly limit and credit usage ]]( claude--Claude Code weekly limit and credit usage--9ee0d598 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
