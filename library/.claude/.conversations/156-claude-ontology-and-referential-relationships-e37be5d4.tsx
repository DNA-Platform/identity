import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--ontology-and-referential-relationships--e37be5d4/.cover.tsx';
import TheSynopsis from './claude--ontology-and-referential-relationships--e37be5d4/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>April 2026</Part>
        <Dated>
            <Date>[23 April 2026](2026-04-23)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Ontology and referential relationships ]]( claude--Ontology and referential relationships--e37be5d4 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 102 exchanges: <Means>$[[ Ontology and referential relationships ]]( claude--Ontology and referential relationships--e37be5d4 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
