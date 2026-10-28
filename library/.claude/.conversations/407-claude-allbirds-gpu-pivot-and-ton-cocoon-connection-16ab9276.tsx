import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--allbirds-gpu-pivot-and-ton-cocoon-connection--16ab9276/.cover.tsx';
import TheSynopsis from './claude--allbirds-gpu-pivot-and-ton-cocoon-connection--16ab9276/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>April 2026</Part>
        <Dated>
            <Date>[16 April 2026](2026-04-16)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Allbirds GPU pivot and TON∕Cocoon connection ]]( claude--Allbirds GPU pivot and TON∕Cocoon connection--16ab9276 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 28 exchanges: <Means>$[[ Allbirds GPU pivot and TON∕Cocoon connection ]]( claude--Allbirds GPU pivot and TON∕Cocoon connection--16ab9276 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
