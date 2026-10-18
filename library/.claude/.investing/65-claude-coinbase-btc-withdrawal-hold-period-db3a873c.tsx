import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--coinbase-btc-withdrawal-hold-period--db3a873c/.cover.tsx';
import TheSynopsis from '../.conversations/claude--coinbase-btc-withdrawal-hold-period--db3a873c/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>April 2026</Part>
        <Dated>
            <Date>[15 April 2026](2026-04-15)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Coinbase BTC withdrawal hold period ]]( claude--Coinbase BTC withdrawal hold period--db3a873c )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 15 April 2026: <Means>$[[ Coinbase BTC withdrawal hold period ]]( claude--Coinbase BTC withdrawal hold period--db3a873c )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
