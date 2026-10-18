import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--claude-code-api-rate-limit-issues-on-pro-plan--b75b1cc6/.cover.tsx';
import TheSynopsis from '../.conversations/claude--claude-code-api-rate-limit-issues-on-pro-plan--b75b1cc6/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>March 2026</Part>
        <Dated>
            <Date>[8 March 2026](2026-03-08)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Claude Code API rate limit issues on Pro plan ]]( claude--Claude Code API rate limit issues on Pro plan--b75b1cc6 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 8 March 2026: <Means>$[[ Claude Code API rate limit issues on Pro plan ]]( claude--Claude Code API rate limit issues on Pro plan--b75b1cc6 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
