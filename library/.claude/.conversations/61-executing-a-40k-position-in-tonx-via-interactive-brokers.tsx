import { Append, Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './executing-a-40k-position-in-tonx-via-interactive-brokers/.cover.tsx';
import TheSynopsis from './executing-a-40k-position-in-tonx-via-interactive-brokers/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>February 2026</Part>
        <Dated>
            <Date>[2 February 2026](2026-02-02)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Executing a 40K position in TONX via Interactive Brokers ]]</Title>
        <Paragraph>
            <Caption />
            A conversation, 55 exchanges: <Means>$[[ Executing a 40K position in TONX via Interactive Brokers ]]</Means>.
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
