import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--chemistry-ts-codebase-overview--38fd52e2/.cover.tsx';
import TheSynopsis from './claude--chemistry-ts-codebase-overview--38fd52e2/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>November 2025</Part>
        <Dated>
            <Date>[1 November 2025](2025-11-01)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Chemistry.ts codebase overview ]]( claude--Chemistry..ts codebase overview--38fd52e2 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 262 exchanges: <Means>$[[ Chemistry.ts codebase overview ]]( claude--Chemistry..ts codebase overview--38fd52e2 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
