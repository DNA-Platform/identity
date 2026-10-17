import { Append, Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './telegrams-hypothetical-telephone-product-theory/.cover.tsx';
import TheSynopsis from './telegrams-hypothetical-telephone-product-theory/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>August 2026</Part>
        <Dated>
            <Date>[19 August 2026](2026-08-19)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Telegram's hypothetical "Telephone" product theory ]]</Title>
        <Paragraph>
            <Caption />
            A conversation, 30 exchanges: <Means>$[[ Telegram's hypothetical "Telephone" product theory ]]</Means>.
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
