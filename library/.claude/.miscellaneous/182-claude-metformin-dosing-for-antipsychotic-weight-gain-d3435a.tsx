import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--metformin-dosing-for-antipsychotic-weight-gain--d3435ae4/.cover.tsx';
import TheSynopsis from '../.conversations/claude--metformin-dosing-for-antipsychotic-weight-gain--d3435ae4/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>August 2026</Part>
        <Dated>
            <Date>[17 August 2026](2026-08-17)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Metformin dosing for antipsychotic weight gain ]]( claude--Metformin dosing for antipsychotic weight gain--d3435ae4 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 17 August 2026: <Means>$[[ Metformin dosing for antipsychotic weight gain ]]( claude--Metformin dosing for antipsychotic weight gain--d3435ae4 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
