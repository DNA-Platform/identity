import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--hedging-geopolitical-oil-disruption-with-us-supply-alternati--957941dd/.cover.tsx';
import TheSynopsis from './claude--hedging-geopolitical-oil-disruption-with-us-supply-alternati--957941dd/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>April 2026</Part>
        <Dated>
            <Date>[7 April 2026](2026-04-07)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Hedging geopolitical oil disruption with US supply alternatives ]]( claude--Hedging geopolitical oil disruption with US supply alternatives--957941dd )</Title>
        <Paragraph>
            <Caption />
            A conversation, 72 exchanges: <Means>$[[ Hedging geopolitical oil disruption with US supply alternatives ]]( claude--Hedging geopolitical oil disruption with US supply alternatives--957941dd )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
