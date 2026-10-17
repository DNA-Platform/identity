import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--monad-labs-tokenomics-and-valuation-problems--769751fe/.cover.tsx';
import TheSynopsis from '../.conversations/claude--monad-labs-tokenomics-and-valuation-problems--769751fe/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Monad Labs tokenomics and valuation problems ]]( claude--Monad Labs tokenomics and valuation problems--769751fe )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 30 June 2026: <Means>$[[ Monad Labs tokenomics and valuation problems ]]( claude--Monad Labs tokenomics and valuation problems--769751fe )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
