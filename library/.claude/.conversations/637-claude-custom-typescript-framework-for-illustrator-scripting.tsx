import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--custom-typescript-framework-for-illustrator-scripting--a1981158/.cover.tsx';
import TheSynopsis from './claude--custom-typescript-framework-for-illustrator-scripting--a1981158/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>March 2025</Part>
        <Dated>
            <Date>[7 March 2025](2025-03-07)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Custom TypeScript Framework for Illustrator Scripting ]]( claude--Custom TypeScript Framework for Illustrator Scripting--a1981158 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 28 exchanges: <Means>$[[ Custom TypeScript Framework for Illustrator Scripting ]]( claude--Custom TypeScript Framework for Illustrator Scripting--a1981158 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
