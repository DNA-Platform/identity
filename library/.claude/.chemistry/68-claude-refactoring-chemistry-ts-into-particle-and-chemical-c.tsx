import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--refactoring-chemistry-ts-into-particle-and-chemical-classes--4887921b/.cover.tsx';
import TheSynopsis from '../.conversations/claude--refactoring-chemistry-ts-into-particle-and-chemical-classes--4887921b/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>Its conversations</Part>
        <Dated>
            <Date>[13 December 2025](2025-12-13)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Refactoring chemistry.ts into particle and chemical classes ]]( claude--Refactoring chemistry..ts into particle and chemical classes--4887921b )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 13 December 2025: <Means>$[[ Refactoring chemistry.ts into particle and chemical classes ]]( claude--Refactoring chemistry..ts into particle and chemical classes--4887921b )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
