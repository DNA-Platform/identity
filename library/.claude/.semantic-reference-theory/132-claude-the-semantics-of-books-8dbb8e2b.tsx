import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--the-semantics-of-books--8dbb8e2b/.cover.tsx';
import TheSynopsis from '../.conversations/claude--the-semantics-of-books--8dbb8e2b/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>July 2026</Part>
        <Dated>
            <Date>[16 July 2026](2026-07-16)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ The Semantics of Books ]]( claude--The Semantics of Books--8dbb8e2b )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 16 July 2026: <Means>$[[ The Semantics of Books ]]( claude--The Semantics of Books--8dbb8e2b )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
