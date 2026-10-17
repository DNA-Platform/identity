import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--coinbase-btc-withdrawal-hold-period--db3a873c/.cover.tsx';
import TheSynopsis from '../.conversations/claude--coinbase-btc-withdrawal-hold-period--db3a873c/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Coinbase BTC withdrawal hold period ]]( claude--Coinbase BTC withdrawal hold period--db3a873c )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 15 April 2026: <Means>$[[ Coinbase BTC withdrawal hold period ]]( claude--Coinbase BTC withdrawal hold period--db3a873c )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
