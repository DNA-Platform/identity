import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--relationships-and-inheriance--1152bae6/.cover.tsx';
import TheSynopsis from './claude--relationships-and-inheriance--1152bae6/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>July 2026</Part>
        <Dated>
            <Date>[13 July 2026](2026-07-13)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Relationships &amp; Inheriance ]]( claude--Relationships &amp; Inheriance--1152bae6 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 169 exchanges: <Means>$[[ Relationships &amp; Inheriance ]]( claude--Relationships &amp; Inheriance--1152bae6 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
