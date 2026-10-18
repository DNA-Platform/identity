import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--hydroxyzine-dosing-for-antipsychotic-side-effects--e83d8b0e/.cover.tsx';
import TheSynopsis from './claude--hydroxyzine-dosing-for-antipsychotic-side-effects--e83d8b0e/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>August 2026</Part>
        <Dated>
            <Date>[29 August 2026](2026-08-29)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Hydroxyzine dosing for antipsychotic side effects ]]( claude--Hydroxyzine dosing for antipsychotic side effects--e83d8b0e )</Title>
        <Paragraph>
            <Caption />
            A conversation, 8 exchanges: <Means>$[[ Hydroxyzine dosing for antipsychotic side effects ]]( claude--Hydroxyzine dosing for antipsychotic side effects--e83d8b0e )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
