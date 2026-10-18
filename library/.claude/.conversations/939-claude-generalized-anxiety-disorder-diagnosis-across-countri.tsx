import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
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
