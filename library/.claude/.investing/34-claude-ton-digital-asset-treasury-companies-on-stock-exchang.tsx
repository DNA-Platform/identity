import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--ton-digital-asset-treasury-companies-on-stock-exchanges--12e2f498/.cover.tsx';
import TheSynopsis from '../.conversations/claude--ton-digital-asset-treasury-companies-on-stock-exchanges--12e2f498/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ TON digital asset treasury companies on stock exchanges ]]( claude--TON digital asset treasury companies on stock exchanges--12e2f498 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 5 February 2026: <Means>$[[ TON digital asset treasury companies on stock exchanges ]]( claude--TON digital asset treasury companies on stock exchanges--12e2f498 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
