import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--vitest-configuration-not-finding-all-tests--ac7b89e2/.cover.tsx';
import TheSynopsis from '../.conversations/claude--vitest-configuration-not-finding-all-tests--ac7b89e2/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>Its conversations</Part>
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
