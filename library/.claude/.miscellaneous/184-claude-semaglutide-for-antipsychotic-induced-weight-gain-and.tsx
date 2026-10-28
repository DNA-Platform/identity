import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--semaglutide-for-antipsychotic-induced-weight-gain-and-diabet--bf176414/.cover.tsx';
import TheSynopsis from '../.conversations/claude--semaglutide-for-antipsychotic-induced-weight-gain-and-diabet--bf176414/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>August 2026</Part>
        <Dated>
            <Date>[5 August 2026](2026-08-05)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Semaglutide for antipsychotic-induced weight gain and diabetes ]]( claude--Semaglutide for antipsychotic-induced weight gain and diabetes--bf176414 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 5 August 2026: <Means>$[[ Semaglutide for antipsychotic-induced weight gain and diabetes ]]( claude--Semaglutide for antipsychotic-induced weight gain and diabetes--bf176414 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
