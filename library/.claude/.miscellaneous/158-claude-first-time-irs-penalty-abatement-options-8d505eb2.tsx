import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--first-time-irs-penalty-abatement-options--8d505eb2/.cover.tsx';
import TheSynopsis from '../.conversations/claude--first-time-irs-penalty-abatement-options--8d505eb2/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ First-time IRS penalty abatement options ]]( claude--First-time IRS penalty abatement options--8d505eb2 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 26 May 2026: <Means>$[[ First-time IRS penalty abatement options ]]( claude--First-time IRS penalty abatement options--8d505eb2 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
