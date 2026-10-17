import { Append, Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './microsofts-earnings-surge-and-ai-competition-outlook/.cover.tsx';
import TheSynopsis from './microsofts-earnings-surge-and-ai-competition-outlook/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>July 2026</Part>
        <Dated>
            <Date>[30 July 2026](2026-07-30)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Microsoft's earnings surge and AI competition outlook ]]</Title>
        <Paragraph>
            <Caption />
            A conversation, 16 exchanges: <Means>$[[ Microsoft's earnings surge and AI competition outlook ]]</Means>.
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
