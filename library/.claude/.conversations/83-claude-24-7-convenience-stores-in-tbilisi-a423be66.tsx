import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--24-7-convenience-stores-in-tbilisi--a423be66/.cover.tsx';
import TheSynopsis from './claude--24-7-convenience-stores-in-tbilisi--a423be66/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>February 2026</Part>
        <Dated>
            <Date>[1 February 2026](2026-02-01)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ 24∕7 convenience stores in Tbilisi ]]( claude--24∕7 convenience stores in Tbilisi--a423be66 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 2 exchanges: <Means>$[[ 24∕7 convenience stores in Tbilisi ]]( claude--24∕7 convenience stores in Tbilisi--a423be66 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
