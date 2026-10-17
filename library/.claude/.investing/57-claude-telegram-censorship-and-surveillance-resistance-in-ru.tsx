import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--telegram-censorship-and-surveillance-resistance-in-russia--61079543/.cover.tsx';
import TheSynopsis from '../.conversations/claude--telegram-censorship-and-surveillance-resistance-in-russia--61079543/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Telegram censorship and surveillance resistance in Russia ]]( claude--Telegram censorship and surveillance resistance in Russia--61079543 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 23 March 2026: <Means>$[[ Telegram censorship and surveillance resistance in Russia ]]( claude--Telegram censorship and surveillance resistance in Russia--61079543 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
