import { Append, Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './well-tonx-is-doing-very-well/.cover.tsx';
import TheSynopsis from './well-tonx-is-doing-very-well/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>March 2026</Part>
        <Dated>
            <Date>[22 March 2026](2026-03-22)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Well TONX is doing very well..… ]]</Title>
        <Paragraph>
            <Caption />
            A conversation, 38 exchanges: <Means>$[[ Well TONX is doing very well..… ]]</Means>.
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
