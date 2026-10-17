import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/hedging-geopolitical-oil-disruption-with-us-supply-alternati/.cover.tsx';
import TheSynopsis from '../.conversations/hedging-geopolitical-oil-disruption-with-us-supply-alternati/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Hedging geopolitical oil disruption with US supply alternatives ]]</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 26 March 2026: <Means>$[[ Hedging geopolitical oil disruption with US supply alternatives ]]</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
