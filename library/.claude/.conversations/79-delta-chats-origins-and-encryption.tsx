import { Append, Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './delta-chats-origins-and-encryption/.cover.tsx';
import TheSynopsis from './delta-chats-origins-and-encryption/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>March 2026</Part>
        <Dated>
            <Date>[23 March 2026](2026-03-23)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Delta Chat's origins and encryption ]]</Title>
        <Paragraph>
            <Caption />
            A conversation, 2 exchanges: <Means>$[[ Delta Chat's origins and encryption ]]</Means>.
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
