import { Append, Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './investing-around-ukraine-war-outcomes/.cover.tsx';
import TheSynopsis from './investing-around-ukraine-war-outcomes/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>July 2026</Part>
        <Dated>
            <Date>[29 July 2026](2026-07-29)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Investing around Ukraine war outcomes ]]</Title>
        <Paragraph>
            <Caption />
            A conversation, 6 exchanges: <Means>$[[ Investing around Ukraine war outcomes ]]</Means>.
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
