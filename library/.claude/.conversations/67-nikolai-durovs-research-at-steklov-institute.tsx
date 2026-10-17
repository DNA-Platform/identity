import { Append, Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './nikolai-durovs-research-at-steklov-institute/.cover.tsx';
import TheSynopsis from './nikolai-durovs-research-at-steklov-institute/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>January 2026</Part>
        <Dated>
            <Date>[31 January 2026](2026-01-31)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Nikolai Durov's research at Steklov Institute ]]</Title>
        <Paragraph>
            <Caption />
            A conversation, 88 exchanges: <Means>$[[ Nikolai Durov's research at Steklov Institute ]]</Means>.
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
