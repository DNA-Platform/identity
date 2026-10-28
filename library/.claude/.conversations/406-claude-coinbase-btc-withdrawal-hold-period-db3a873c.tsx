import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
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
