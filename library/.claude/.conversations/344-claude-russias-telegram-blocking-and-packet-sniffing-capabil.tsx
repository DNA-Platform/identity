import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--russias-telegram-blocking-and-packet-sniffing-capabilities--ab538435/.cover.tsx';
import TheSynopsis from './claude--russias-telegram-blocking-and-packet-sniffing-capabilities--ab538435/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>March 2026</Part>
        <Dated>
            <Date>[18 March 2026](2026-03-18)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Russia's Telegram blocking and packet sniffing capabilities ]]( claude--Russia's Telegram blocking and packet sniffing capabilities--ab538435 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 20 exchanges: <Means>$[[ Russia's Telegram blocking and packet sniffing capabilities ]]( claude--Russia's Telegram blocking and packet sniffing capabilities--ab538435 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
