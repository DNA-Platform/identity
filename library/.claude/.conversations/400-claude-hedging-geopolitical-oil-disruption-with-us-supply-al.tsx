import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
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
