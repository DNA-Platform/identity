import { Append, Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './ton-and-gram-ecosystem-updates/.cover.tsx';
import TheSynopsis from './ton-and-gram-ecosystem-updates/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>July 2026</Part>
        <Dated>
            <Date>[31 July 2026](2026-07-31)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ TON and GRAM ecosystem updates ]]</Title>
        <Paragraph>
            <Caption />
            A conversation, 84 exchanges: <Means>$[[ TON and GRAM ecosystem updates ]]</Means>.
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
