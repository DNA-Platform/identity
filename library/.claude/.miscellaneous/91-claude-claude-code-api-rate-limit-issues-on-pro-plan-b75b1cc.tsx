import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--claude-code-api-rate-limit-issues-on-pro-plan--b75b1cc6/.cover.tsx';
import TheSynopsis from '../.conversations/claude--claude-code-api-rate-limit-issues-on-pro-plan--b75b1cc6/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Claude Code API rate limit issues on Pro plan ]]( claude--Claude Code API rate limit issues on Pro plan--b75b1cc6 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 8 March 2026: <Means>$[[ Claude Code API rate limit issues on Pro plan ]]( claude--Claude Code API rate limit issues on Pro plan--b75b1cc6 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
