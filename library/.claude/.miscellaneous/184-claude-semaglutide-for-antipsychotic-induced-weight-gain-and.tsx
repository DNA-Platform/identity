import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--semaglutide-for-antipsychotic-induced-weight-gain-and-diabet--bf176414/.cover.tsx';
import TheSynopsis from '../.conversations/claude--semaglutide-for-antipsychotic-induced-weight-gain-and-diabet--bf176414/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Semaglutide for antipsychotic-induced weight gain and diabetes ]]( claude--Semaglutide for antipsychotic-induced weight gain and diabetes--bf176414 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 5 August 2026: <Means>$[[ Semaglutide for antipsychotic-induced weight gain and diabetes ]]( claude--Semaglutide for antipsychotic-induced weight gain and diabetes--bf176414 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
