import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--the-semantics-of-books--8dbb8e2b/.cover.tsx';
import TheSynopsis from './claude--the-semantics-of-books--8dbb8e2b/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>July 2026</Part>
        <Dated>
            <Date>[19 July 2026](2026-07-19)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ The Semantics of Books ]]( claude--The Semantics of Books--8dbb8e2b )</Title>
        <Paragraph>
            <Caption />
            A conversation, 141 exchanges: <Means>$[[ The Semantics of Books ]]( claude--The Semantics of Books--8dbb8e2b )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
