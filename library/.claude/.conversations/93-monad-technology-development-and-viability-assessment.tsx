import { Append, Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './monad-technology-development-and-viability-assessment/.cover.tsx';
import TheSynopsis from './monad-technology-development-and-viability-assessment/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>May 2026</Part>
        <Dated>
            <Date>[4 May 2026](2026-05-04)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Monad technology development and viability assessment ]]</Title>
        <Paragraph>
            <Caption />
            A conversation, 30 exchanges: <Means>$[[ Monad technology development and viability assessment ]]</Means>.
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
