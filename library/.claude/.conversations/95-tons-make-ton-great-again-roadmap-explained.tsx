import { Append, Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './tons-make-ton-great-again-roadmap-explained/.cover.tsx';
import TheSynopsis from './tons-make-ton-great-again-roadmap-explained/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>May 2026</Part>
        <Dated>
            <Date>[6 May 2026](2026-05-06)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ TON's "Make TON Great Again" roadmap explained ]]</Title>
        <Paragraph>
            <Caption />
            A conversation, 34 exchanges: <Means>$[[ TON's "Make TON Great Again" roadmap explained ]]</Means>.
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
