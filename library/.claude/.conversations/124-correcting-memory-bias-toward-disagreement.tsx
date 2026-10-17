import { Append, Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './correcting-memory-bias-toward-disagreement/.cover.tsx';
import TheSynopsis from './correcting-memory-bias-toward-disagreement/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>July 2026</Part>
        <Dated>
            <Date>[22 July 2026](2026-07-22)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Correcting memory bias toward disagreement ]]</Title>
        <Paragraph>
            <Caption />
            A conversation, 22 exchanges: <Means>$[[ Correcting memory bias toward disagreement ]]</Means>.
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
