import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/coinbase-btc-withdrawal-hold-period/.cover.tsx';
import TheSynopsis from '../.conversations/coinbase-btc-withdrawal-hold-period/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Coinbase BTC withdrawal hold period ]]</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 15 April 2026: <Means>$[[ Coinbase BTC withdrawal hold period ]]</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
