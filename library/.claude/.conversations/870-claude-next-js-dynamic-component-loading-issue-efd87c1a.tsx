import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
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
