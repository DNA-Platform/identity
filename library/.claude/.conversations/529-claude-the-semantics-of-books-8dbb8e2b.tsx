import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
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
