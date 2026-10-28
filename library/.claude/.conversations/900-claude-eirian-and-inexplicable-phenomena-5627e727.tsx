import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--eirian-and-inexplicable-phenomena--5627e727/.cover.tsx';
import TheSynopsis from './claude--eirian-and-inexplicable-phenomena--5627e727/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>August 2025</Part>
        <Dated>
            <Date>[6 August 2025](2025-08-06)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Eirian &amp; Inexplicable Phenomena ]]( claude--Eirian &amp; Inexplicable Phenomena--5627e727 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 158 exchanges: <Means>$[[ Eirian &amp; Inexplicable Phenomena ]]( claude--Eirian &amp; Inexplicable Phenomena--5627e727 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
