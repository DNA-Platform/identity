import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--how-claude-works--3e26816f/.cover.tsx';
import TheSynopsis from './claude--how-claude-works--3e26816f/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>August 2026</Part>
        <Dated>
            <Date>[6 August 2026](2026-08-06)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ How Claude works ]]( claude--How Claude works--3e26816f )</Title>
        <Paragraph>
            <Caption />
            A conversation, 40 exchanges: <Means>$[[ How Claude works ]]( claude--How Claude works--3e26816f )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
