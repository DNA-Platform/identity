import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--ontology-and-referential-relationships--e37be5d4/.cover.tsx';
import TheSynopsis from '../.conversations/claude--ontology-and-referential-relationships--e37be5d4/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Ontology and referential relationships ]]( claude--Ontology and referential relationships--e37be5d4 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 23 April 2026: <Means>$[[ Ontology and referential relationships ]]( claude--Ontology and referential relationships--e37be5d4 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
