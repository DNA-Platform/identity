import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--goldbach-through-gödel--53e2b255/.cover.tsx';
import TheSynopsis from './claude--goldbach-through-gödel--53e2b255/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>November 2026</Part>
        <Dated>
            <Date>[5 November 2026](2026-11-05)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Goldbach through Gödel ]]( claude--Goldbach through Gödel--53e2b255 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 701 exchanges: <Means>$[[ Goldbach through Gödel ]]( claude--Goldbach through Gödel--53e2b255 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
