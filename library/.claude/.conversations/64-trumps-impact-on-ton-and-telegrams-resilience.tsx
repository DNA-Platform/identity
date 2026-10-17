import { Append, Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './trumps-impact-on-ton-and-telegrams-resilience/.cover.tsx';
import TheSynopsis from './trumps-impact-on-ton-and-telegrams-resilience/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>February 2026</Part>
        <Dated>
            <Date>[1 February 2026](2026-02-01)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Trump's impact on TON and Telegram's resilience ]]</Title>
        <Paragraph>
            <Caption />
            A conversation, 6 exchanges: <Means>$[[ Trump's impact on TON and Telegram's resilience ]]</Means>.
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
