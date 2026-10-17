import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--elon-musks-x-messenger-competing-with-telegram--83f9413b/.cover.tsx';
import TheSynopsis from './claude--elon-musks-x-messenger-competing-with-telegram--83f9413b/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>April 2026</Part>
        <Dated>
            <Date>[13 April 2026](2026-04-13)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Elon Musk's X messenger competing with Telegram ]]( claude--Elon Musk's X messenger competing with Telegram--83f9413b )</Title>
        <Paragraph>
            <Caption />
            A conversation, 32 exchanges: <Means>$[[ Elon Musk's X messenger competing with Telegram ]]( claude--Elon Musk's X messenger competing with Telegram--83f9413b )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
