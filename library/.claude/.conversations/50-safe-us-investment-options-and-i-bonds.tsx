import { Append, Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './safe-us-investment-options-and-i-bonds/.cover.tsx';
import TheSynopsis from './safe-us-investment-options-and-i-bonds/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>February 2026</Part>
        <Dated>
            <Date>[14 February 2026](2026-02-14)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Safe US investment options and I Bonds ]]</Title>
        <Paragraph>
            <Caption />
            A conversation, 28 exchanges: <Means>$[[ Safe US investment options and I Bonds ]]</Means>.
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
