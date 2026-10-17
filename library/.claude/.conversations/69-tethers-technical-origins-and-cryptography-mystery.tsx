import { Append, Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './tethers-technical-origins-and-cryptography-mystery/.cover.tsx';
import TheSynopsis from './tethers-technical-origins-and-cryptography-mystery/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>January 2026</Part>
        <Dated>
            <Date>[30 January 2026](2026-01-30)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Tether's technical origins and cryptography mystery ]]</Title>
        <Paragraph>
            <Caption />
            A conversation, 52 exchanges: <Means>$[[ Tether's technical origins and cryptography mystery ]]</Means>.
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
