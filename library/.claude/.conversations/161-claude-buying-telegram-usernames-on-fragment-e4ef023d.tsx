import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--buying-telegram-usernames-on-fragment--e4ef023d/.cover.tsx';
import TheSynopsis from './claude--buying-telegram-usernames-on-fragment--e4ef023d/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>May 2026</Part>
        <Dated>
            <Date>[30 May 2026](2026-05-30)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Buying Telegram usernames on Fragment ]]( claude--Buying Telegram usernames on Fragment--e4ef023d )</Title>
        <Paragraph>
            <Caption />
            A conversation, 38 exchanges: <Means>$[[ Buying Telegram usernames on Fragment ]]( claude--Buying Telegram usernames on Fragment--e4ef023d )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
