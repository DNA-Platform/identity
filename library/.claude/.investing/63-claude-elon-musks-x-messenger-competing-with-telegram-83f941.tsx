import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--elon-musks-x-messenger-competing-with-telegram--83f9413b/.cover.tsx';
import TheSynopsis from '../.conversations/claude--elon-musks-x-messenger-competing-with-telegram--83f9413b/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>April 2026</Part>
        <Dated>
            <Date>[13 April 2026](2026-04-13)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Elon Musk's X messenger competing with Telegram ]]( claude--Elon Musk's X messenger competing with Telegram--83f9413b )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 13 April 2026: <Means>$[[ Elon Musk's X messenger competing with Telegram ]]( claude--Elon Musk's X messenger competing with Telegram--83f9413b )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
