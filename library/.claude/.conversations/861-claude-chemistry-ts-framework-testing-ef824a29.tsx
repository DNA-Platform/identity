import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--chemistry-ts-framework-testing--ef824a29/.cover.tsx';
import TheSynopsis from './claude--chemistry-ts-framework-testing--ef824a29/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>August 2025</Part>
        <Dated>
            <Date>[26 August 2025](2025-08-26)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Chemistry.ts Framework Testing ]]( claude--Chemistry..ts Framework Testing--ef824a29 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 230 exchanges: <Means>$[[ Chemistry.ts Framework Testing ]]( claude--Chemistry..ts Framework Testing--ef824a29 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
