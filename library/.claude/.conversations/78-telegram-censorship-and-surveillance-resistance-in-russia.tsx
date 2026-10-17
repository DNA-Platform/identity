import { Append, Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './telegram-censorship-and-surveillance-resistance-in-russia/.cover.tsx';
import TheSynopsis from './telegram-censorship-and-surveillance-resistance-in-russia/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>March 2026</Part>
        <Dated>
            <Date>[23 March 2026](2026-03-23)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Telegram censorship and surveillance resistance in Russia ]]</Title>
        <Paragraph>
            <Caption />
            A conversation, 6 exchanges: <Means>$[[ Telegram censorship and surveillance resistance in Russia ]]</Means>.
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
