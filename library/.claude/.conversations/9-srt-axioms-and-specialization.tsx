import { Append, Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './srt-axioms-and-specialization/.cover.tsx';
import TheSynopsis from './srt-axioms-and-specialization/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>June 2026</Part>
        <Dated>
            <Date>[13 June 2026](2026-06-13)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ SRT Axioms &amp; Specialization ]]</Title>
        <Paragraph>
            <Caption />
            A conversation, 194 exchanges: <Means>$[[ SRT Axioms &amp; Specialization ]]</Means>.
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
