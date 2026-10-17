import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/safe-us-investment-options-and-i-bonds/.cover.tsx';
import TheSynopsis from '../.conversations/safe-us-investment-options-and-i-bonds/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Safe US investment options and I Bonds ]]</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 12 February 2026: <Means>$[[ Safe US investment options and I Bonds ]]</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
