import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/monad-labs-tokenomics-and-valuation-problems/.cover.tsx';
import TheSynopsis from '../.conversations/monad-labs-tokenomics-and-valuation-problems/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Monad Labs tokenomics and valuation problems ]]</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 30 June 2026: <Means>$[[ Monad Labs tokenomics and valuation problems ]]</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
