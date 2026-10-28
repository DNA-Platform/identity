import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--generalized-anxiety-disorder-diagnosis-across-countries--c8269065/.cover.tsx';
import TheSynopsis from '../.conversations/claude--generalized-anxiety-disorder-diagnosis-across-countries--c8269065/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>March 2026</Part>
        <Dated>
            <Date>[5 March 2026](2026-03-05)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Generalized anxiety disorder diagnosis across countries ]]( claude--Generalized anxiety disorder diagnosis across countries--c8269065 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 5 March 2026: <Means>$[[ Generalized anxiety disorder diagnosis across countries ]]( claude--Generalized anxiety disorder diagnosis across countries--c8269065 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
