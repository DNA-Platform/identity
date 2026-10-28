import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--next-js-dynamic-component-loading-issue--efd87c1a/.cover.tsx';
import TheSynopsis from './claude--next-js-dynamic-component-loading-issue--efd87c1a/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>October 2025</Part>
        <Dated>
            <Date>[13 October 2025](2025-10-13)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Next.js dynamic component loading issue ]]( claude--Next..js dynamic component loading issue--efd87c1a )</Title>
        <Paragraph>
            <Caption />
            A conversation, 66 exchanges: <Means>$[[ Next.js dynamic component loading issue ]]( claude--Next..js dynamic component loading issue--efd87c1a )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
