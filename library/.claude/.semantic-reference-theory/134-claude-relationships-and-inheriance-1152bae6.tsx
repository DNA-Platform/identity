import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--relationships-and-inheriance--1152bae6/.cover.tsx';
import TheSynopsis from '../.conversations/claude--relationships-and-inheriance--1152bae6/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>July 2026</Part>
        <Dated>
            <Date>[4 July 2026](2026-07-04)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Relationships &amp; Inheriance ]]( claude--Relationships &amp; Inheriance--1152bae6 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 4 July 2026: <Means>$[[ Relationships &amp; Inheriance ]]( claude--Relationships &amp; Inheriance--1152bae6 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
