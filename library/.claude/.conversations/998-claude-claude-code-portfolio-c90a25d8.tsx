import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--claude-code-portfolio--c90a25d8/.cover.tsx';
import TheSynopsis from './claude--claude-code-portfolio--c90a25d8/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>July 2026</Part>
        <Dated>
            <Date>[20 July 2026](2026-07-20)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Claude Code Portfolio ]]( claude--Claude Code Portfolio--c90a25d8 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 32 exchanges: <Means>$[[ Claude Code Portfolio ]]( claude--Claude Code Portfolio--c90a25d8 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
