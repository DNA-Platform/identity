import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--relationships-and-inheriance--1152bae6/.cover.tsx';
import TheSynopsis from '../.conversations/claude--relationships-and-inheriance--1152bae6/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Relationships &amp; Inheriance ]]( claude--Relationships &amp; Inheriance--1152bae6 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 4 July 2026: <Means>$[[ Relationships &amp; Inheriance ]]( claude--Relationships &amp; Inheriance--1152bae6 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
