import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--mons-role-in-telegrams-cryptocurrency-ecosystem--97853a83/.cover.tsx';
import TheSynopsis from './claude--mons-role-in-telegrams-cryptocurrency-ecosystem--97853a83/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>April 2026</Part>
        <Dated>
            <Date>[8 April 2026](2026-04-08)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ MON's role in Telegram's cryptocurrency ecosystem ]]( claude--MON's role in Telegram's cryptocurrency ecosystem--97853a83 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 34 exchanges: <Means>$[[ MON's role in Telegram's cryptocurrency ecosystem ]]( claude--MON's role in Telegram's cryptocurrency ecosystem--97853a83 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
