import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--telegram-censorship-and-surveillance-resistance-in-russia--61079543/.cover.tsx';
import TheSynopsis from './claude--telegram-censorship-and-surveillance-resistance-in-russia--61079543/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>March 2026</Part>
        <Dated>
            <Date>[23 March 2026](2026-03-23)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Telegram censorship and surveillance resistance in Russia ]]( claude--Telegram censorship and surveillance resistance in Russia--61079543 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 6 exchanges: <Means>$[[ Telegram censorship and surveillance resistance in Russia ]]( claude--Telegram censorship and surveillance resistance in Russia--61079543 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
