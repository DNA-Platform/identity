import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--how-claude-works--3e26816f/.cover.tsx';
import TheSynopsis from '../.conversations/claude--how-claude-works--3e26816f/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>August 2026</Part>
        <Dated>
            <Date>[6 August 2026](2026-08-06)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ How Claude works ]]( claude--How Claude works--3e26816f )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 6 August 2026: <Means>$[[ How Claude works ]]( claude--How Claude works--3e26816f )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
