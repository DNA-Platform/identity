import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--next-js-dynamic-component-loading-issue--efd87c1a/.cover.tsx';
import TheSynopsis from '../.conversations/claude--next-js-dynamic-component-loading-issue--efd87c1a/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>October 2025</Part>
        <Dated>
            <Date>[11 October 2025](2025-10-11)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Next.js dynamic component loading issue ]]( claude--Next..js dynamic component loading issue--efd87c1a )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 11 October 2025: <Means>$[[ Next.js dynamic component loading issue ]]( claude--Next..js dynamic component loading issue--efd87c1a )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
