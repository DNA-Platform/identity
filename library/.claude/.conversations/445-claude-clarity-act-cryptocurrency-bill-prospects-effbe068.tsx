import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--clarity-act-cryptocurrency-bill-prospects--effbe068/.cover.tsx';
import TheSynopsis from './claude--clarity-act-cryptocurrency-bill-prospects--effbe068/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>September 2026</Part>
        <Dated>
            <Date>[15 September 2026](2026-09-15)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Clarity act cryptocurrency bill prospects ]]( claude--Clarity act cryptocurrency bill prospects--effbe068 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 2 exchanges: <Means>$[[ Clarity act cryptocurrency bill prospects ]]( claude--Clarity act cryptocurrency bill prospects--effbe068 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
