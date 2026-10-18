import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--the-genesis-of-writing--0e9fbdd1/.cover.tsx';
import TheSynopsis from '../.conversations/claude--the-genesis-of-writing--0e9fbdd1/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>September 2026</Part>
        <Dated>
            <Date>[18 September 2026](2026-09-18)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ The Genesis of Writing ]]( claude--The Genesis of Writing--0e9fbdd1 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 18 September 2026: <Means>$[[ The Genesis of Writing ]]( claude--The Genesis of Writing--0e9fbdd1 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
