import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--the-genesis-of-writing--0e9fbdd1/.cover.tsx';
import TheSynopsis from './claude--the-genesis-of-writing--0e9fbdd1/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>September 2026</Part>
        <Dated>
            <Date>[20 September 2026](2026-09-20)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ The Genesis of Writing ]]( claude--The Genesis of Writing--0e9fbdd1 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 152 exchanges: <Means>$[[ The Genesis of Writing ]]( claude--The Genesis of Writing--0e9fbdd1 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
