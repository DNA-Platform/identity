import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--coinbase-btc-withdrawal-hold-period--db3a873c/.cover.tsx';
import TheSynopsis from './claude--coinbase-btc-withdrawal-hold-period--db3a873c/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>April 2026</Part>
        <Dated>
            <Date>[15 April 2026](2026-04-15)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Coinbase BTC withdrawal hold period ]]( claude--Coinbase BTC withdrawal hold period--db3a873c )</Title>
        <Paragraph>
            <Caption />
            A conversation, 22 exchanges: <Means>$[[ Coinbase BTC withdrawal hold period ]]( claude--Coinbase BTC withdrawal hold period--db3a873c )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
