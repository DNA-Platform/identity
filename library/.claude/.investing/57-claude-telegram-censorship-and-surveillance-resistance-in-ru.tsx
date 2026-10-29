import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--telegram-censorship-and-surveillance-resistance-in-russia--61079543/.cover.tsx';
import TheSynopsis from '../.conversations/claude--telegram-censorship-and-surveillance-resistance-in-russia--61079543/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>Its conversations</Part>
        <Dated>
            <Date>[23 March 2026](2026-03-23)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Telegram censorship and surveillance resistance in Russia ]]( claude--Telegram censorship and surveillance resistance in Russia--61079543 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 23 March 2026: <Means>$[[ Telegram censorship and surveillance resistance in Russia ]]( claude--Telegram censorship and surveillance resistance in Russia--61079543 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
