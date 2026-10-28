import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--creating-array-of-objects-with-conditional-properties--fd65b7af/.cover.tsx';
import TheSynopsis from './claude--creating-array-of-objects-with-conditional-properties--fd65b7af/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>November 2025</Part>
        <Dated>
            <Date>[6 November 2025](2025-11-06)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Creating array of objects with conditional properties ]]( claude--Creating array of objects with conditional properties--fd65b7af )</Title>
        <Paragraph>
            <Caption />
            A conversation, 26 exchanges: <Means>$[[ Creating array of objects with conditional properties ]]( claude--Creating array of objects with conditional properties--fd65b7af )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
