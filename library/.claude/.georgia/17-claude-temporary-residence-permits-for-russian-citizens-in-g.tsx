import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--temporary-residence-permits-for-russian-citizens-in-georgia--5c551508/.cover.tsx';
import TheSynopsis from '../.conversations/claude--temporary-residence-permits-for-russian-citizens-in-georgia--5c551508/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>January 2026</Part>
        <Dated>
            <Date>[14 January 2026](2026-01-14)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Temporary residence permits for Russian citizens in Georgia ]]( claude--Temporary residence permits for Russian citizens in Georgia--5c551508 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 14 January 2026: <Means>$[[ Temporary residence permits for Russian citizens in Georgia ]]( claude--Temporary residence permits for Russian citizens in Georgia--5c551508 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
