import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--vitest-configuration-not-finding-all-tests--ac7b89e2/.cover.tsx';
import TheSynopsis from '../.conversations/claude--vitest-configuration-not-finding-all-tests--ac7b89e2/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Vitest configuration not finding all tests ]]( claude--Vitest configuration not finding all tests--ac7b89e2 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 3 November 2025: <Means>$[[ Vitest configuration not finding all tests ]]( claude--Vitest configuration not finding all tests--ac7b89e2 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
