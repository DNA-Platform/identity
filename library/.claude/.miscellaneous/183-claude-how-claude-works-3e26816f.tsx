import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--how-claude-works--3e26816f/.cover.tsx';
import TheSynopsis from '../.conversations/claude--how-claude-works--3e26816f/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>Its conversations</Part>
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
