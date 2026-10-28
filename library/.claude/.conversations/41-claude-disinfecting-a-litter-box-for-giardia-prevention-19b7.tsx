import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--disinfecting-a-litter-box-for-giardia-prevention--19b76aeb/.cover.tsx';
import TheSynopsis from './claude--disinfecting-a-litter-box-for-giardia-prevention--19b76aeb/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>January 2026</Part>
        <Dated>
            <Date>[16 January 2026](2026-01-16)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Disinfecting a litter box for giardia prevention ]]( claude--Disinfecting a litter box for giardia prevention--19b76aeb )</Title>
        <Paragraph>
            <Caption />
            A conversation, 4 exchanges: <Means>$[[ Disinfecting a litter box for giardia prevention ]]( claude--Disinfecting a litter box for giardia prevention--19b76aeb )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
