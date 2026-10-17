import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--telegram-ton-foundation-and-ftx-connections--13e79925/.cover.tsx';
import TheSynopsis from './claude--telegram-ton-foundation-and-ftx-connections--13e79925/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>January 2026</Part>
        <Dated>
            <Date>[22 January 2026](2026-01-22)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Telegram, TON Foundation, and FTX connections ]]( claude--Telegram, TON Foundation, and FTX connections--13e79925 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 30 exchanges: <Means>$[[ Telegram, TON Foundation, and FTX connections ]]( claude--Telegram, TON Foundation, and FTX connections--13e79925 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
