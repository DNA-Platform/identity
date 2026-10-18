import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--navigating-the-ssdi-application-process--c6157223/.cover.tsx';
import TheSynopsis from './claude--navigating-the-ssdi-application-process--c6157223/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>March 2025</Part>
        <Dated>
            <Date>[10 March 2025](2025-03-10)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Navigating the SSDI Application Process ]]( claude--Navigating the SSDI Application Process--c6157223 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 28 exchanges: <Means>$[[ Navigating the SSDI Application Process ]]( claude--Navigating the SSDI Application Process--c6157223 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
