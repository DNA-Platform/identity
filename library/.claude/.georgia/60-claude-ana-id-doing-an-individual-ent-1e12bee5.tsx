import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--ana-id-doing-an-individual-ent--1e12bee5/.cover.tsx';
import TheSynopsis from '../.conversations/claude--ana-id-doing-an-individual-ent--1e12bee5/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>Its conversations</Part>
        <Dated>
            <Date>[3 June 2026](2026-06-03)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Ana id doing an individual ent… ]]( claude--Ana id doing an individual ent…--1e12bee5 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 3 June 2026: <Means>$[[ Ana id doing an individual ent… ]]( claude--Ana id doing an individual ent…--1e12bee5 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
