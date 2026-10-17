import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/travel-arbitrage-opportunities-between-tbilisi-london-and-ne/.cover.tsx';
import TheSynopsis from '../.conversations/travel-arbitrage-opportunities-between-tbilisi-london-and-ne/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Travel arbitrage opportunities between Tbilisi, London, and New York ]]</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 27 August 2026: <Means>$[[ Travel arbitrage opportunities between Tbilisi, London, and New York ]]</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
