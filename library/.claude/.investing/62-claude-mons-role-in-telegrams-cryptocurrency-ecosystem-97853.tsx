import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--mons-role-in-telegrams-cryptocurrency-ecosystem--97853a83/.cover.tsx';
import TheSynopsis from '../.conversations/claude--mons-role-in-telegrams-cryptocurrency-ecosystem--97853a83/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ MON's role in Telegram's cryptocurrency ecosystem ]]( claude--MON's role in Telegram's cryptocurrency ecosystem--97853a83 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 8 April 2026: <Means>$[[ MON's role in Telegram's cryptocurrency ecosystem ]]( claude--MON's role in Telegram's cryptocurrency ecosystem--97853a83 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
