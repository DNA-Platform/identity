import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--safe-us-investment-options-and-i-bonds--8035e2e6/.cover.tsx';
import TheSynopsis from '../.conversations/claude--safe-us-investment-options-and-i-bonds--8035e2e6/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Safe US investment options and I Bonds ]]( claude--Safe US investment options and I Bonds--8035e2e6 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 12 February 2026: <Means>$[[ Safe US investment options and I Bonds ]]( claude--Safe US investment options and I Bonds--8035e2e6 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
