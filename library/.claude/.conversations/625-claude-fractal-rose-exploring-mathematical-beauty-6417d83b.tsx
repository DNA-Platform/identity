import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--fractal-rose-exploring-mathematical-beauty--6417d83b/.cover.tsx';
import TheSynopsis from './claude--fractal-rose-exploring-mathematical-beauty--6417d83b/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>March 2025</Part>
        <Dated>
            <Date>[9 March 2025](2025-03-09)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Fractal Rose: Exploring Mathematical Beauty ]]( claude--Fractal Rose: Exploring Mathematical Beauty--6417d83b )</Title>
        <Paragraph>
            <Caption />
            A conversation, 6 exchanges: <Means>$[[ Fractal Rose: Exploring Mathematical Beauty ]]( claude--Fractal Rose: Exploring Mathematical Beauty--6417d83b )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
