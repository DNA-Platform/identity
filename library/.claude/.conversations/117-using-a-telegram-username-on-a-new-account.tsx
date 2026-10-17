import { Append, Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './using-a-telegram-username-on-a-new-account/.cover.tsx';
import TheSynopsis from './using-a-telegram-username-on-a-new-account/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>August 2026</Part>
        <Dated>
            <Date>[10 August 2026](2026-08-10)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Using a Telegram username on a new account ]]</Title>
        <Paragraph>
            <Caption />
            A conversation, 6 exchanges: <Means>$[[ Using a Telegram username on a new account ]]</Means>.
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
