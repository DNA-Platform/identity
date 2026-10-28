import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--first-time-irs-penalty-abatement-options--8d505eb2/.cover.tsx';
import TheSynopsis from '../.conversations/claude--first-time-irs-penalty-abatement-options--8d505eb2/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>May 2026</Part>
        <Dated>
            <Date>[26 May 2026](2026-05-26)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ First-time IRS penalty abatement options ]]( claude--First-time IRS penalty abatement options--8d505eb2 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 26 May 2026: <Means>$[[ First-time IRS penalty abatement options ]]( claude--First-time IRS penalty abatement options--8d505eb2 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
