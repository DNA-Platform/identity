import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--troubleshooting-extendscript-typescript-wrapper-errors--7ce28bd6/.cover.tsx';
import TheSynopsis from './claude--troubleshooting-extendscript-typescript-wrapper-errors--7ce28bd6/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>January 2025</Part>
        <Dated>
            <Date>[13 January 2025](2025-01-13)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Troubleshooting ExtendScript TypeScript Wrapper Errors ]]( claude--Troubleshooting ExtendScript TypeScript Wrapper Errors--7ce28bd6 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 50 exchanges: <Means>$[[ Troubleshooting ExtendScript TypeScript Wrapper Errors ]]( claude--Troubleshooting ExtendScript TypeScript Wrapper Errors--7ce28bd6 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
