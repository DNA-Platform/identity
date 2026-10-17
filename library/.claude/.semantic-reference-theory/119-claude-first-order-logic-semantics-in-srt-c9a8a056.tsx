import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--first-order-logic-semantics-in-srt--c9a8a056/.cover.tsx';
import TheSynopsis from '../.conversations/claude--first-order-logic-semantics-in-srt--c9a8a056/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ First order logic semantics in SRT ]]( claude--First order logic semantics in SRT--c9a8a056 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 12 May 2026: <Means>$[[ First order logic semantics in SRT ]]( claude--First order logic semantics in SRT--c9a8a056 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
