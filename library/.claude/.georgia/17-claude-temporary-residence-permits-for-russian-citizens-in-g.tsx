import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--temporary-residence-permits-for-russian-citizens-in-georgia--5c551508/.cover.tsx';
import TheSynopsis from '../.conversations/claude--temporary-residence-permits-for-russian-citizens-in-georgia--5c551508/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Temporary residence permits for Russian citizens in Georgia ]]( claude--Temporary residence permits for Russian citizens in Georgia--5c551508 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 14 January 2026: <Means>$[[ Temporary residence permits for Russian citizens in Georgia ]]( claude--Temporary residence permits for Russian citizens in Georgia--5c551508 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
