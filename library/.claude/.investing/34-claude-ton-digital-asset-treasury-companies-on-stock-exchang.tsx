import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--ton-digital-asset-treasury-companies-on-stock-exchanges--12e2f498/.cover.tsx';
import TheSynopsis from '../.conversations/claude--ton-digital-asset-treasury-companies-on-stock-exchanges--12e2f498/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>Its conversations</Part>
        <Dated>
            <Date>[5 February 2026](2026-02-05)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ TON digital asset treasury companies on stock exchanges ]]( claude--TON digital asset treasury companies on stock exchanges--12e2f498 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 5 February 2026: <Means>$[[ TON digital asset treasury companies on stock exchanges ]]( claude--TON digital asset treasury companies on stock exchanges--12e2f498 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
