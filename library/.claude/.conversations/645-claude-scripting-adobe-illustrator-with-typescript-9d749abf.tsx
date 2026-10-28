import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--scripting-adobe-illustrator-with-typescript--9d749abf/.cover.tsx';
import TheSynopsis from './claude--scripting-adobe-illustrator-with-typescript--9d749abf/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>December 2024</Part>
        <Dated>
            <Date>[15 December 2024](2024-12-15)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Scripting Adobe Illustrator with TypeScript ]]( claude--Scripting Adobe Illustrator with TypeScript--9d749abf )</Title>
        <Paragraph>
            <Caption />
            A conversation, 38 exchanges: <Means>$[[ Scripting Adobe Illustrator with TypeScript ]]( claude--Scripting Adobe Illustrator with TypeScript--9d749abf )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
