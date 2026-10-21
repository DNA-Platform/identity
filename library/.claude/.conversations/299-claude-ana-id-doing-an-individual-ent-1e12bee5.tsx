import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--ana-id-doing-an-individual-ent--1e12bee5/.cover.tsx';
import TheSynopsis from './claude--ana-id-doing-an-individual-ent--1e12bee5/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>June 2026</Part>
        <Dated>
            <Date>[3 June 2026](2026-06-03)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Ana id doing an individual ent… ]]( claude--Ana id doing an individual ent…--1e12bee5 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 24 exchanges: <Means>$[[ Ana id doing an individual ent… ]]( claude--Ana id doing an individual ent…--1e12bee5 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
