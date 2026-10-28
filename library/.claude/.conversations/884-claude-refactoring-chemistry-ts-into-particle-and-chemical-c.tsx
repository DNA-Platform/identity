import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--refactoring-chemistry-ts-into-particle-and-chemical-classes--4887921b/.cover.tsx';
import TheSynopsis from './claude--refactoring-chemistry-ts-into-particle-and-chemical-classes--4887921b/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>December 2025</Part>
        <Dated>
            <Date>[14 December 2025](2025-12-14)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Refactoring chemistry.ts into particle and chemical classes ]]( claude--Refactoring chemistry..ts into particle and chemical classes--4887921b )</Title>
        <Paragraph>
            <Caption />
            A conversation, 127 exchanges: <Means>$[[ Refactoring chemistry.ts into particle and chemical classes ]]( claude--Refactoring chemistry..ts into particle and chemical classes--4887921b )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
