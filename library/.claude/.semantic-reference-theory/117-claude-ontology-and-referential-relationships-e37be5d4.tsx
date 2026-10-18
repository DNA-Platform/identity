import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--ontology-and-referential-relationships--e37be5d4/.cover.tsx';
import TheSynopsis from '../.conversations/claude--ontology-and-referential-relationships--e37be5d4/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>April 2026</Part>
        <Dated>
            <Date>[23 April 2026](2026-04-23)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Ontology and referential relationships ]]( claude--Ontology and referential relationships--e37be5d4 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 23 April 2026: <Means>$[[ Ontology and referential relationships ]]( claude--Ontology and referential relationships--e37be5d4 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
