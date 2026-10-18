import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--typescript-types-for-adobe-illustrator-scripting--07f0404b/.cover.tsx';
import TheSynopsis from './claude--typescript-types-for-adobe-illustrator-scripting--07f0404b/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>December 2024</Part>
        <Dated>
            <Date>[15 December 2024](2024-12-15)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ TypeScript Types for Adobe Illustrator Scripting ]]( claude--TypeScript Types for Adobe Illustrator Scripting--07f0404b )</Title>
        <Paragraph>
            <Caption />
            A conversation, 64 exchanges: <Means>$[[ TypeScript Types for Adobe Illustrator Scripting ]]( claude--TypeScript Types for Adobe Illustrator Scripting--07f0404b )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
