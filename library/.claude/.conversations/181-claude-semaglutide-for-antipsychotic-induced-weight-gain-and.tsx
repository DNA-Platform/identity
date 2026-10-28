import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--semaglutide-for-antipsychotic-induced-weight-gain-and-diabet--bf176414/.cover.tsx';
import TheSynopsis from './claude--semaglutide-for-antipsychotic-induced-weight-gain-and-diabet--bf176414/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>August 2026</Part>
        <Dated>
            <Date>[5 August 2026](2026-08-05)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Semaglutide for antipsychotic-induced weight gain and diabetes ]]( claude--Semaglutide for antipsychotic-induced weight gain and diabetes--bf176414 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 68 exchanges: <Means>$[[ Semaglutide for antipsychotic-induced weight gain and diabetes ]]( claude--Semaglutide for antipsychotic-induced weight gain and diabetes--bf176414 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
