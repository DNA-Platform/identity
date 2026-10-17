import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/allbirds-gpu-pivot-and-ton-cocoon-connection/.cover.tsx';
import TheSynopsis from '../.conversations/allbirds-gpu-pivot-and-ton-cocoon-connection/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Allbirds GPU pivot and TON∕Cocoon connection ]]</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 16 April 2026: <Means>$[[ Allbirds GPU pivot and TON∕Cocoon connection ]]</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
