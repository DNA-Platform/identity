import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/russias-telegram-blocking-and-packet-sniffing-capabilities/.cover.tsx';
import TheSynopsis from '../.conversations/russias-telegram-blocking-and-packet-sniffing-capabilities/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Russia's Telegram blocking and packet sniffing capabilities ]]</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 16 March 2026: <Means>$[[ Russia's Telegram blocking and packet sniffing capabilities ]]</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
