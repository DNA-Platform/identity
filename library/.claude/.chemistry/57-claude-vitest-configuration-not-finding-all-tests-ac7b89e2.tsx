import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--vitest-configuration-not-finding-all-tests--ac7b89e2/.cover.tsx';
import TheSynopsis from '../.conversations/claude--vitest-configuration-not-finding-all-tests--ac7b89e2/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>November 2025</Part>
        <Dated>
            <Date>[3 November 2025](2025-11-03)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Vitest configuration not finding all tests ]]( claude--Vitest configuration not finding all tests--ac7b89e2 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 3 November 2025: <Means>$[[ Vitest configuration not finding all tests ]]( claude--Vitest configuration not finding all tests--ac7b89e2 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
