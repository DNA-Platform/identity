import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--ana-id-doing-an-individual-ent--1e12bee5/.cover.tsx';
import TheSynopsis from '../.conversations/claude--ana-id-doing-an-individual-ent--1e12bee5/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Ana id doing an individual ent… ]]( claude--Ana id doing an individual ent…--1e12bee5 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 3 June 2026: <Means>$[[ Ana id doing an individual ent… ]]( claude--Ana id doing an individual ent…--1e12bee5 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
