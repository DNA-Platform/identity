import { Append, Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './russias-technical-capabilities-against-telegram-and-mtproto/.cover.tsx';
import TheSynopsis from './russias-technical-capabilities-against-telegram-and-mtproto/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>February 2026</Part>
        <Dated>
            <Date>[27 February 2026](2026-02-27)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Russia's technical capabilities against Telegram and MTProto ]]</Title>
        <Paragraph>
            <Caption />
            A conversation, 4 exchanges: <Means>$[[ Russia's technical capabilities against Telegram and MTProto ]]</Means>.
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
