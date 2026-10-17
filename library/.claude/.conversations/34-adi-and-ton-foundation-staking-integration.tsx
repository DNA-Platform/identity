import { Append, Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './adi-and-ton-foundation-staking-integration/.cover.tsx';
import TheSynopsis from './adi-and-ton-foundation-staking-integration/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>January 2026</Part>
        <Dated>
            <Date>[13 January 2026](2026-01-13)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ ADI and TON Foundation staking integration ]]</Title>
        <Paragraph>
            <Caption />
            A conversation, 46 exchanges: <Means>$[[ ADI and TON Foundation staking integration ]]</Means>.
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
