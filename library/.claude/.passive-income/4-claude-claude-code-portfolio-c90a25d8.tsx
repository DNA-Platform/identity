import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--claude-code-portfolio--c90a25d8/.cover.tsx';
import TheSynopsis from '../.conversations/claude--claude-code-portfolio--c90a25d8/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Claude Code Portfolio ]]( claude--Claude Code Portfolio--c90a25d8 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 20 July 2026: <Means>$[[ Claude Code Portfolio ]]( claude--Claude Code Portfolio--c90a25d8 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
