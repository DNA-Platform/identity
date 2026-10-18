import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--russias-telegram-blocking-and-packet-sniffing-capabilities--ab538435/.cover.tsx';
import TheSynopsis from '../.conversations/claude--russias-telegram-blocking-and-packet-sniffing-capabilities--ab538435/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>March 2026</Part>
        <Dated>
            <Date>[16 March 2026](2026-03-16)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Russia's Telegram blocking and packet sniffing capabilities ]]( claude--Russia's Telegram blocking and packet sniffing capabilities--ab538435 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 16 March 2026: <Means>$[[ Russia's Telegram blocking and packet sniffing capabilities ]]( claude--Russia's Telegram blocking and packet sniffing capabilities--ab538435 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
