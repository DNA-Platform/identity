import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--allbirds-gpu-pivot-and-ton-cocoon-connection--16ab9276/.cover.tsx';
import TheSynopsis from '../.conversations/claude--allbirds-gpu-pivot-and-ton-cocoon-connection--16ab9276/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>April 2026</Part>
        <Dated>
            <Date>[16 April 2026](2026-04-16)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Allbirds GPU pivot and TON∕Cocoon connection ]]( claude--Allbirds GPU pivot and TON∕Cocoon connection--16ab9276 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 16 April 2026: <Means>$[[ Allbirds GPU pivot and TON∕Cocoon connection ]]( claude--Allbirds GPU pivot and TON∕Cocoon connection--16ab9276 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
