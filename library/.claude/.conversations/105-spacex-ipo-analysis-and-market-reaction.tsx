import { Append, Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './spacex-ipo-analysis-and-market-reaction/.cover.tsx';
import TheSynopsis from './spacex-ipo-analysis-and-market-reaction/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>June 2026</Part>
        <Dated>
            <Date>[17 June 2026](2026-06-17)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ SpaceX IPO analysis and market reaction ]]</Title>
        <Paragraph>
            <Caption />
            A conversation, 8 exchanges: <Means>$[[ SpaceX IPO analysis and market reaction ]]</Means>.
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
