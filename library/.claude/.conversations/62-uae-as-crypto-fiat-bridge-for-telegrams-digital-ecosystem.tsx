import { Append, Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './uae-as-crypto-fiat-bridge-for-telegrams-digital-ecosystem/.cover.tsx';
import TheSynopsis from './uae-as-crypto-fiat-bridge-for-telegrams-digital-ecosystem/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>February 2026</Part>
        <Dated>
            <Date>[2 February 2026](2026-02-02)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ UAE as crypto-fiat bridge for Telegram's digital ecosystem ]]</Title>
        <Paragraph>
            <Caption />
            A conversation, 71 exchanges: <Means>$[[ UAE as crypto-fiat bridge for Telegram's digital ecosystem ]]</Means>.
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
