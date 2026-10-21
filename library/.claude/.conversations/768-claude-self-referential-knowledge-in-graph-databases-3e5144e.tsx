import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--self-referential-knowledge-in-graph-databases--3e5144e3/.cover.tsx';
import TheSynopsis from './claude--self-referential-knowledge-in-graph-databases--3e5144e3/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>June 2026</Part>
        <Dated>
            <Date>[17 June 2026](2026-06-17)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Self-referential knowledge in graph databases ]]( claude--Self-referential knowledge in graph databases--3e5144e3 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 6 exchanges: <Means>$[[ Self-referential knowledge in graph databases ]]( claude--Self-referential knowledge in graph databases--3e5144e3 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
