import { Append, Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './original-telegram-open-network-whitepaper/.cover.tsx';
import TheSynopsis from './original-telegram-open-network-whitepaper/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>May 2026</Part>
        <Dated>
            <Date>[11 May 2026](2026-05-11)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Original Telegram Open Network whitepaper ]]</Title>
        <Paragraph>
            <Caption />
            A conversation, 2 exchanges: <Means>$[[ Original Telegram Open Network whitepaper ]]</Means>.
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
