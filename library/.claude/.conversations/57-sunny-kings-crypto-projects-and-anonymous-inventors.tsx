import { Append, Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './sunny-kings-crypto-projects-and-anonymous-inventors/.cover.tsx';
import TheSynopsis from './sunny-kings-crypto-projects-and-anonymous-inventors/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>February 2026</Part>
        <Dated>
            <Date>[4 February 2026](2026-02-04)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Sunny King's crypto projects and anonymous inventors ]]</Title>
        <Paragraph>
            <Caption />
            A conversation, 28 exchanges: <Means>$[[ Sunny King's crypto projects and anonymous inventors ]]</Means>.
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
