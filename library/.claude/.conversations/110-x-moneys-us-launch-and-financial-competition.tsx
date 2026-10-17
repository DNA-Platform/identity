import { Append, Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './x-moneys-us-launch-and-financial-competition/.cover.tsx';
import TheSynopsis from './x-moneys-us-launch-and-financial-competition/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>June 2026</Part>
        <Dated>
            <Date>[30 June 2026](2026-06-30)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ X Money's US launch and financial competition ]]</Title>
        <Paragraph>
            <Caption />
            A conversation, 22 exchanges: <Means>$[[ X Money's US launch and financial competition ]]</Means>.
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
