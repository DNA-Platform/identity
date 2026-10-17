import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/mons-role-in-telegrams-cryptocurrency-ecosystem/.cover.tsx';
import TheSynopsis from '../.conversations/mons-role-in-telegrams-cryptocurrency-ecosystem/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ MON's role in Telegram's cryptocurrency ecosystem ]]</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 8 April 2026: <Means>$[[ MON's role in Telegram's cryptocurrency ecosystem ]]</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
