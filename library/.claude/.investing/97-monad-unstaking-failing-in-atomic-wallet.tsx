import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/monad-unstaking-failing-in-atomic-wallet/.cover.tsx';
import TheSynopsis from '../.conversations/monad-unstaking-failing-in-atomic-wallet/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Monad unstaking failing in Atomic Wallet ]]</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 8 August 2026: <Means>$[[ Monad unstaking failing in Atomic Wallet ]]</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
