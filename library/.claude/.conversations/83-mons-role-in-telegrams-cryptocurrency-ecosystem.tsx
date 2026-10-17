import { Append, Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './mons-role-in-telegrams-cryptocurrency-ecosystem/.cover.tsx';
import TheSynopsis from './mons-role-in-telegrams-cryptocurrency-ecosystem/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>April 2026</Part>
        <Dated>
            <Date>[8 April 2026](2026-04-08)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ MON's role in Telegram's cryptocurrency ecosystem ]]</Title>
        <Paragraph>
            <Caption />
            A conversation, 34 exchanges: <Means>$[[ MON's role in Telegram's cryptocurrency ecosystem ]]</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
        <Append
            identifier="import"
            type=".json"
        >
            ![[ import.json ]]
        </Append>
    </Chapter>
);
