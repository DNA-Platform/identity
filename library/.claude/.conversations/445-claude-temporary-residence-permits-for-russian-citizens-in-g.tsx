import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--temporary-residence-permits-for-russian-citizens-in-georgia--5c551508/.cover.tsx';
import TheSynopsis from './claude--temporary-residence-permits-for-russian-citizens-in-georgia--5c551508/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>January 2026</Part>
        <Dated>
            <Date>[14 January 2026](2026-01-14)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Temporary residence permits for Russian citizens in Georgia ]]( claude--Temporary residence permits for Russian citizens in Georgia--5c551508 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 6 exchanges: <Means>$[[ Temporary residence permits for Russian citizens in Georgia ]]( claude--Temporary residence permits for Russian citizens in Georgia--5c551508 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
