import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--multilingual-responses-on-injection-safety--a82bdcbd/.cover.tsx';
import TheSynopsis from './claude--multilingual-responses-on-injection-safety--a82bdcbd/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>August 2026</Part>
        <Dated>
            <Date>[28 August 2026](2026-08-28)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Multilingual responses on injection safety ]]( claude--Multilingual responses on injection safety--a82bdcbd )</Title>
        <Paragraph>
            <Caption />
            A conversation, 4 exchanges: <Means>$[[ Multilingual responses on injection safety ]]( claude--Multilingual responses on injection safety--a82bdcbd )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
