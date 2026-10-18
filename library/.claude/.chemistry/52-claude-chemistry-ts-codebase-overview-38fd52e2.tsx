import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--chemistry-ts-codebase-overview--38fd52e2/.cover.tsx';
import TheSynopsis from '../.conversations/claude--chemistry-ts-codebase-overview--38fd52e2/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Chemistry.ts codebase overview ]]( claude--Chemistry..ts codebase overview--38fd52e2 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 30 October 2025: <Means>$[[ Chemistry.ts codebase overview ]]( claude--Chemistry..ts codebase overview--38fd52e2 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
