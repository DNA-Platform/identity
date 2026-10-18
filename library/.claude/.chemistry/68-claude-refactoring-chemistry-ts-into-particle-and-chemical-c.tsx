import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--refactoring-chemistry-ts-into-particle-and-chemical-classes--4887921b/.cover.tsx';
import TheSynopsis from '../.conversations/claude--refactoring-chemistry-ts-into-particle-and-chemical-classes--4887921b/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Refactoring chemistry.ts into particle and chemical classes ]]( claude--Refactoring chemistry..ts into particle and chemical classes--4887921b )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 13 December 2025: <Means>$[[ Refactoring chemistry.ts into particle and chemical classes ]]( claude--Refactoring chemistry..ts into particle and chemical classes--4887921b )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
