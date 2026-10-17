import { Append, Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './solanas-origins-and-technical-architecture/.cover.tsx';
import TheSynopsis from './solanas-origins-and-technical-architecture/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>February 2026</Part>
        <Dated>
            <Date>[12 February 2026](2026-02-12)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Solana's origins and technical architecture ]]</Title>
        <Paragraph>
            <Caption />
            A conversation, 4 exchanges: <Means>$[[ Solana's origins and technical architecture ]]</Means>.
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
