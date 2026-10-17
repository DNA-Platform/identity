import { Append, Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './understanding-tron-crypto-and-its-technical-innovations/.cover.tsx';
import TheSynopsis from './understanding-tron-crypto-and-its-technical-innovations/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>March 2026</Part>
        <Dated>
            <Date>[9 March 2026](2026-03-09)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Understanding TRON crypto and its technical innovations ]]</Title>
        <Paragraph>
            <Caption />
            A conversation, 2 exchanges: <Means>$[[ Understanding TRON crypto and its technical innovations ]]</Means>.
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
