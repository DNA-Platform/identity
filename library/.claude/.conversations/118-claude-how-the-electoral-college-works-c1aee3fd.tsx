import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--how-the-electoral-college-works--c1aee3fd/.cover.tsx';
import TheSynopsis from './claude--how-the-electoral-college-works--c1aee3fd/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>April 2026</Part>
        <Dated>
            <Date>[8 April 2026](2026-04-08)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ How the electoral college works ]]( claude--How the electoral college works--c1aee3fd )</Title>
        <Paragraph>
            <Caption />
            A conversation, 4 exchanges: <Means>$[[ How the electoral college works ]]( claude--How the electoral college works--c1aee3fd )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
