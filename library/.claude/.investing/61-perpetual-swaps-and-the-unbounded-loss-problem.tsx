import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/perpetual-swaps-and-the-unbounded-loss-problem/.cover.tsx';
import TheSynopsis from '../.conversations/perpetual-swaps-and-the-unbounded-loss-problem/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Perpetual swaps and the unbounded loss problem ]]</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 6 April 2026: <Means>$[[ Perpetual swaps and the unbounded loss problem ]]</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
