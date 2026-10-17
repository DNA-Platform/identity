import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--russias-telegram-throttling-via-tspu-infrastructure--f9847388/.cover.tsx';
import TheSynopsis from '../.conversations/claude--russias-telegram-throttling-via-tspu-infrastructure--f9847388/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Russia's Telegram throttling via TSPU infrastructure ]]( claude--Russia's Telegram throttling via TSPU infrastructure--f9847388 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 10 February 2026: <Means>$[[ Russia's Telegram throttling via TSPU infrastructure ]]( claude--Russia's Telegram throttling via TSPU infrastructure--f9847388 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
