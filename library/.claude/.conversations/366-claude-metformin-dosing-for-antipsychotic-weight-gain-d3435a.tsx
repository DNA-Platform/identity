import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--metformin-dosing-for-antipsychotic-weight-gain--d3435ae4/.cover.tsx';
import TheSynopsis from './claude--metformin-dosing-for-antipsychotic-weight-gain--d3435ae4/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>August 2026</Part>
        <Dated>
            <Date>[17 August 2026](2026-08-17)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Metformin dosing for antipsychotic weight gain ]]( claude--Metformin dosing for antipsychotic weight gain--d3435ae4 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 2 exchanges: <Means>$[[ Metformin dosing for antipsychotic weight gain ]]( claude--Metformin dosing for antipsychotic weight gain--d3435ae4 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
