import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--telegram-wallet--11fa8197/.cover.tsx';
import TheSynopsis from '../.conversations/claude--telegram-wallet--11fa8197/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>January 2026</Part>
        <Dated>
            <Date>[7 January 2026](2026-01-07)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Telegram Wallet ]]( claude--Telegram Wallet--11fa8197 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 7 January 2026: <Means>$[[ Telegram Wallet ]]( claude--Telegram Wallet--11fa8197 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
