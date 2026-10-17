import { Append, Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './macro-drivers-behind-the-crypto-spike/.cover.tsx';
import TheSynopsis from './macro-drivers-behind-the-crypto-spike/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>August 2026</Part>
        <Dated>
            <Date>[20 August 2026](2026-08-20)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Macro drivers behind the crypto spike ]]</Title>
        <Paragraph>
            <Caption />
            A conversation, 28 exchanges: <Means>$[[ Macro drivers behind the crypto spike ]]</Means>.
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
