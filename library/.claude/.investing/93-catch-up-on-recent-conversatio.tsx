import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/catch-up-on-recent-conversatio/.cover.tsx';
import TheSynopsis from '../.conversations/catch-up-on-recent-conversatio/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Catch up on recent conversatio… ]]</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 18 August 2026: <Means>$[[ Catch up on recent conversatio… ]]</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
