import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--claude-code-weekly-limit-and-credit-usage--9ee0d598/.cover.tsx';
import TheSynopsis from '../.conversations/claude--claude-code-weekly-limit-and-credit-usage--9ee0d598/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>June 2026</Part>
        <Dated>
            <Date>[18 June 2026](2026-06-18)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Claude Code weekly limit and credit usage ]]( claude--Claude Code weekly limit and credit usage--9ee0d598 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 18 June 2026: <Means>$[[ Claude Code weekly limit and credit usage ]]( claude--Claude Code weekly limit and credit usage--9ee0d598 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
