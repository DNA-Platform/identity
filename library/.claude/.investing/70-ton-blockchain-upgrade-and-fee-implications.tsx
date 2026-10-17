import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/ton-blockchain-upgrade-and-fee-implications/.cover.tsx';
import TheSynopsis from '../.conversations/ton-blockchain-upgrade-and-fee-implications/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ TON blockchain upgrade and fee implications ]]</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 23 April 2026: <Means>$[[ TON blockchain upgrade and fee implications ]]</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
