import { Append, Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './tonx-after-hours-price-spike-analysis/.cover.tsx';
import TheSynopsis from './tonx-after-hours-price-spike-analysis/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>May 2026</Part>
        <Dated>
            <Date>[4 May 2026](2026-05-04)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ TONX after-hours price spike analysis ]]</Title>
        <Paragraph>
            <Caption />
            A conversation, 12 exchanges: <Means>$[[ TONX after-hours price spike analysis ]]</Means>.
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
