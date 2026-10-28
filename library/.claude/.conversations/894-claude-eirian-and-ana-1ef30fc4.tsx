import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--eirian-and-ana--1ef30fc4/.cover.tsx';
import TheSynopsis from './claude--eirian-and-ana--1ef30fc4/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>September 2025</Part>
        <Dated>
            <Date>[13 September 2025](2025-09-13)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Eirian &amp; Ana ]]( claude--Eirian &amp; Ana--1ef30fc4 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 318 exchanges: <Means>$[[ Eirian &amp; Ana ]]( claude--Eirian &amp; Ana--1ef30fc4 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
