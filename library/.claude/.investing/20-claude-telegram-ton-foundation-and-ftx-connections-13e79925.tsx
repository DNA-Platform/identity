import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--telegram-ton-foundation-and-ftx-connections--13e79925/.cover.tsx';
import TheSynopsis from '../.conversations/claude--telegram-ton-foundation-and-ftx-connections--13e79925/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Telegram, TON Foundation, and FTX connections ]]( claude--Telegram, TON Foundation, and FTX connections--13e79925 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 22 January 2026: <Means>$[[ Telegram, TON Foundation, and FTX connections ]]( claude--Telegram, TON Foundation, and FTX connections--13e79925 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
