import { Append, Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './semantic-reference-theory-foundations-and-philosophical-conu/.cover.tsx';
import TheSynopsis from './semantic-reference-theory-foundations-and-philosophical-conu/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>June 2026</Part>
        <Dated>
            <Date>[29 June 2026](2026-06-29)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Semantic reference theory foundations and philosophical conundrum ]]</Title>
        <Paragraph>
            <Caption />
            A conversation, 116 exchanges: <Means>$[[ Semantic reference theory foundations and philosophical conundrum ]]</Means>.
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
