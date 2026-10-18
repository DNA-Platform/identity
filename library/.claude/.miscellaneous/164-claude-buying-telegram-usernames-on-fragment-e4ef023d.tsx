import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--buying-telegram-usernames-on-fragment--e4ef023d/.cover.tsx';
import TheSynopsis from '../.conversations/claude--buying-telegram-usernames-on-fragment--e4ef023d/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>May 2026</Part>
        <Dated>
            <Date>[30 May 2026](2026-05-30)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Buying Telegram usernames on Fragment ]]( claude--Buying Telegram usernames on Fragment--e4ef023d )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 30 May 2026: <Means>$[[ Buying Telegram usernames on Fragment ]]( claude--Buying Telegram usernames on Fragment--e4ef023d )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
