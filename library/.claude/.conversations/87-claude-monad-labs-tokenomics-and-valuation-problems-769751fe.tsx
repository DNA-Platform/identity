import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--monad-labs-tokenomics-and-valuation-problems--769751fe/.cover.tsx';
import TheSynopsis from './claude--monad-labs-tokenomics-and-valuation-problems--769751fe/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>June 2026</Part>
        <Dated>
            <Date>[30 June 2026](2026-06-30)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Monad Labs tokenomics and valuation problems ]]( claude--Monad Labs tokenomics and valuation problems--769751fe )</Title>
        <Paragraph>
            <Caption />
            A conversation, 6 exchanges: <Means>$[[ Monad Labs tokenomics and valuation problems ]]( claude--Monad Labs tokenomics and valuation problems--769751fe )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
