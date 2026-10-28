import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--wire-transfers-to-georgia-with-wise--3b0f2ae8/.cover.tsx';
import TheSynopsis from './claude--wire-transfers-to-georgia-with-wise--3b0f2ae8/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>February 2026</Part>
        <Dated>
            <Date>[6 February 2026](2026-02-06)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Wire transfers to Georgia with Wise ]]( claude--Wire transfers to Georgia with Wise--3b0f2ae8 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 2 exchanges: <Means>$[[ Wire transfers to Georgia with Wise ]]( claude--Wire transfers to Georgia with Wise--3b0f2ae8 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
