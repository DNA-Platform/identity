import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--object-oriented-decorators-for-adobe-illustrator-scripting--664f3ea7/.cover.tsx';
import TheSynopsis from './claude--object-oriented-decorators-for-adobe-illustrator-scripting--664f3ea7/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>December 2024</Part>
        <Dated>
            <Date>[4 December 2024](2024-12-04)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Object-Oriented Decorators for Adobe Illustrator Scripting ]]( claude--Object-Oriented Decorators for Adobe Illustrator Scripting--664f3ea7 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 36 exchanges: <Means>$[[ Object-Oriented Decorators for Adobe Illustrator Scripting ]]( claude--Object-Oriented Decorators for Adobe Illustrator Scripting--664f3ea7 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
