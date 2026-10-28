import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--trumps-greenland-distraction-strategy--a350ddfa/.cover.tsx';
import TheSynopsis from './claude--trumps-greenland-distraction-strategy--a350ddfa/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>January 2026</Part>
        <Dated>
            <Date>[19 January 2026](2026-01-19)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Trump's Greenland distraction strategy ]]( claude--Trump's Greenland distraction strategy--a350ddfa )</Title>
        <Paragraph>
            <Caption />
            A conversation, 33 exchanges: <Means>$[[ Trump's Greenland distraction strategy ]]( claude--Trump's Greenland distraction strategy--a350ddfa )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
