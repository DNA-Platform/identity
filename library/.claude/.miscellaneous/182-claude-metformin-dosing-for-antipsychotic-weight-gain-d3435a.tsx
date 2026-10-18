import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--metformin-dosing-for-antipsychotic-weight-gain--d3435ae4/.cover.tsx';
import TheSynopsis from '../.conversations/claude--metformin-dosing-for-antipsychotic-weight-gain--d3435ae4/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Metformin dosing for antipsychotic weight gain ]]( claude--Metformin dosing for antipsychotic weight gain--d3435ae4 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 17 August 2026: <Means>$[[ Metformin dosing for antipsychotic weight gain ]]( claude--Metformin dosing for antipsychotic weight gain--d3435ae4 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
