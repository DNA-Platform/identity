import { Append, Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './stars-to-ton-conversion-restrictions-and-pricing/.cover.tsx';
import TheSynopsis from './stars-to-ton-conversion-restrictions-and-pricing/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>May 2026</Part>
        <Dated>
            <Date>[8 May 2026](2026-05-08)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Stars to TON conversion restrictions and pricing ]]</Title>
        <Paragraph>
            <Caption />
            A conversation, 20 exchanges: <Means>$[[ Stars to TON conversion restrictions and pricing ]]</Means>.
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
