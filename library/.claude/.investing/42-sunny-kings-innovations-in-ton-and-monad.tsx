import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/sunny-kings-innovations-in-ton-and-monad/.cover.tsx';
import TheSynopsis from '../.conversations/sunny-kings-innovations-in-ton-and-monad/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Sunny King's innovations in TON and Monad ]]</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 1 February 2026: <Means>$[[ Sunny King's innovations in TON and Monad ]]</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
