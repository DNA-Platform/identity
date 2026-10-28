import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--illustrator-scripting--6cabbdec/.cover.tsx';
import TheSynopsis from './claude--illustrator-scripting--6cabbdec/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>December 2024</Part>
        <Dated>
            <Date>[1 December 2024](2024-12-01)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Illustrator Scripting ]]( claude--Illustrator Scripting--6cabbdec )</Title>
        <Paragraph>
            <Caption />
            A conversation, 106 exchanges: <Means>$[[ Illustrator Scripting ]]( claude--Illustrator Scripting--6cabbdec )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
