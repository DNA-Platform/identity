import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--first-order-logic-semantics-in-srt--c9a8a056/.cover.tsx';
import TheSynopsis from './claude--first-order-logic-semantics-in-srt--c9a8a056/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>May 2026</Part>
        <Dated>
            <Date>[13 May 2026](2026-05-13)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ First order logic semantics in SRT ]]( claude--First order logic semantics in SRT--c9a8a056 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 18 exchanges: <Means>$[[ First order logic semantics in SRT ]]( claude--First order logic semantics in SRT--c9a8a056 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
