import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--generalized-anxiety-disorder-diagnosis-across-countries--c8269065/.cover.tsx';
import TheSynopsis from './claude--generalized-anxiety-disorder-diagnosis-across-countries--c8269065/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>March 2026</Part>
        <Dated>
            <Date>[5 March 2026](2026-03-05)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Generalized anxiety disorder diagnosis across countries ]]( claude--Generalized anxiety disorder diagnosis across countries--c8269065 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 4 exchanges: <Means>$[[ Generalized anxiety disorder diagnosis across countries ]]( claude--Generalized anxiety disorder diagnosis across countries--c8269065 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
