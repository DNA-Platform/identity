import { Append, Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './wise-us-listing-and-adr-comparison/.cover.tsx';
import TheSynopsis from './wise-us-listing-and-adr-comparison/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>May 2026</Part>
        <Dated>
            <Date>[12 May 2026](2026-05-12)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Wise US listing and ADR comparison ]]</Title>
        <Paragraph>
            <Caption />
            A conversation, 12 exchanges: <Means>$[[ Wise US listing and ADR comparison ]]</Means>.
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
