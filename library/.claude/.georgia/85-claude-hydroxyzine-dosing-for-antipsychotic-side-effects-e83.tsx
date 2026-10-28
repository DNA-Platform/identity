import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--hydroxyzine-dosing-for-antipsychotic-side-effects--e83d8b0e/.cover.tsx';
import TheSynopsis from '../.conversations/claude--hydroxyzine-dosing-for-antipsychotic-side-effects--e83d8b0e/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>August 2026</Part>
        <Dated>
            <Date>[29 August 2026](2026-08-29)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Hydroxyzine dosing for antipsychotic side effects ]]( claude--Hydroxyzine dosing for antipsychotic side effects--e83d8b0e )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 29 August 2026: <Means>$[[ Hydroxyzine dosing for antipsychotic side effects ]]( claude--Hydroxyzine dosing for antipsychotic side effects--e83d8b0e )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
