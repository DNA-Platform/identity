import { Append, Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './telegram-access-in-russia-amid-roskomnadzor-blocking/.cover.tsx';
import TheSynopsis from './telegram-access-in-russia-amid-roskomnadzor-blocking/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>February 2026</Part>
        <Dated>
            <Date>[12 February 2026](2026-02-12)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Telegram access in Russia amid Roskomnadzor blocking ]]</Title>
        <Paragraph>
            <Caption />
            A conversation, 51 exchanges: <Means>$[[ Telegram access in Russia amid Roskomnadzor blocking ]]</Means>.
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
