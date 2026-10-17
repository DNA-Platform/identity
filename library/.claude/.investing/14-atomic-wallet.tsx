import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/atomic-wallet/.cover.tsx';
import TheSynopsis from '../.conversations/atomic-wallet/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Atomic Wallet ]]</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 13 January 2026: <Means>$[[ Atomic Wallet ]]</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
