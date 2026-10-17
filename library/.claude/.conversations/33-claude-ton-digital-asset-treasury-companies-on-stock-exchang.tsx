import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--ton-digital-asset-treasury-companies-on-stock-exchanges--12e2f498/.cover.tsx';
import TheSynopsis from './claude--ton-digital-asset-treasury-companies-on-stock-exchanges--12e2f498/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>February 2026</Part>
        <Dated>
            <Date>[5 February 2026](2026-02-05)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ TON digital asset treasury companies on stock exchanges ]]( claude--TON digital asset treasury companies on stock exchanges--12e2f498 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 55 exchanges: <Means>$[[ TON digital asset treasury companies on stock exchanges ]]( claude--TON digital asset treasury companies on stock exchanges--12e2f498 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
