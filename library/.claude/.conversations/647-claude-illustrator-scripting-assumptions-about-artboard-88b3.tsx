import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--illustrator-scripting-assumptions-about-artboard--88b3e2cc/.cover.tsx';
import TheSynopsis from './claude--illustrator-scripting-assumptions-about-artboard--88b3e2cc/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>December 2024</Part>
        <Dated>
            <Date>[4 December 2024](2024-12-04)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Illustrator Scripting Assumptions About Artboard ]]( claude--Illustrator Scripting Assumptions About Artboard--88b3e2cc )</Title>
        <Paragraph>
            <Caption />
            A conversation, 12 exchanges: <Means>$[[ Illustrator Scripting Assumptions About Artboard ]]( claude--Illustrator Scripting Assumptions About Artboard--88b3e2cc )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
