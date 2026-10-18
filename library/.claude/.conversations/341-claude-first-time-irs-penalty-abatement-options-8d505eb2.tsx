import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--first-time-irs-penalty-abatement-options--8d505eb2/.cover.tsx';
import TheSynopsis from './claude--first-time-irs-penalty-abatement-options--8d505eb2/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>May 2026</Part>
        <Dated>
            <Date>[27 May 2026](2026-05-27)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ First-time IRS penalty abatement options ]]( claude--First-time IRS penalty abatement options--8d505eb2 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 42 exchanges: <Means>$[[ First-time IRS penalty abatement options ]]( claude--First-time IRS penalty abatement options--8d505eb2 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
