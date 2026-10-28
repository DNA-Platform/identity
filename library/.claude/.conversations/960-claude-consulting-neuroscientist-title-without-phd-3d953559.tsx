import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--consulting-neuroscientist-title-without-phd--3d953559/.cover.tsx';
import TheSynopsis from './claude--consulting-neuroscientist-title-without-phd--3d953559/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>July 2026</Part>
        <Dated>
            <Date>[27 July 2026](2026-07-27)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Consulting neuroscientist title without PhD ]]( claude--Consulting neuroscientist title without PhD--3d953559 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 4 exchanges: <Means>$[[ Consulting neuroscientist title without PhD ]]( claude--Consulting neuroscientist title without PhD--3d953559 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
