import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--hedging-geopolitical-oil-disruption-with-us-supply-alternati--957941dd/.cover.tsx';
import TheSynopsis from '../.conversations/claude--hedging-geopolitical-oil-disruption-with-us-supply-alternati--957941dd/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Hedging geopolitical oil disruption with US supply alternatives ]]( claude--Hedging geopolitical oil disruption with US supply alternatives--957941dd )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 26 March 2026: <Means>$[[ Hedging geopolitical oil disruption with US supply alternatives ]]( claude--Hedging geopolitical oil disruption with US supply alternatives--957941dd )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
