import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--telegram-wallet--11fa8197/.cover.tsx';
import TheSynopsis from './claude--telegram-wallet--11fa8197/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>January 2026</Part>
        <Dated>
            <Date>[7 January 2026](2026-01-07)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Telegram Wallet ]]( claude--Telegram Wallet--11fa8197 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 30 exchanges: <Means>$[[ Telegram Wallet ]]( claude--Telegram Wallet--11fa8197 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
