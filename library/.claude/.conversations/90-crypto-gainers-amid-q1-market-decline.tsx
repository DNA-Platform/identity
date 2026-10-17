import { Append, Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './crypto-gainers-amid-q1-market-decline/.cover.tsx';
import TheSynopsis from './crypto-gainers-amid-q1-market-decline/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>April 2026</Part>
        <Dated>
            <Date>[22 April 2026](2026-04-22)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Crypto gainers amid Q1 market decline ]]</Title>
        <Paragraph>
            <Caption />
            A conversation, 58 exchanges: <Means>$[[ Crypto gainers amid Q1 market decline ]]</Means>.
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
