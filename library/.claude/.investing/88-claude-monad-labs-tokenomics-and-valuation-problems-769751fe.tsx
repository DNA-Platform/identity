import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--monad-labs-tokenomics-and-valuation-problems--769751fe/.cover.tsx';
import TheSynopsis from '../.conversations/claude--monad-labs-tokenomics-and-valuation-problems--769751fe/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>June 2026</Part>
        <Dated>
            <Date>[30 June 2026](2026-06-30)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Monad Labs tokenomics and valuation problems ]]( claude--Monad Labs tokenomics and valuation problems--769751fe )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 30 June 2026: <Means>$[[ Monad Labs tokenomics and valuation problems ]]( claude--Monad Labs tokenomics and valuation problems--769751fe )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
