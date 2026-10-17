import { Append, Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './ton-browser-alternatives-and-dark-web-access/.cover.tsx';
import TheSynopsis from './ton-browser-alternatives-and-dark-web-access/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>August 2026</Part>
        <Dated>
            <Date>[13 August 2026](2026-08-13)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ TON browser alternatives and dark web access ]]</Title>
        <Paragraph>
            <Caption />
            A conversation, 8 exchanges: <Means>$[[ TON browser alternatives and dark web access ]]</Means>.
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
