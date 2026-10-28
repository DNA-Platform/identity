import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--vitest-configuration-not-finding-all-tests--ac7b89e2/.cover.tsx';
import TheSynopsis from './claude--vitest-configuration-not-finding-all-tests--ac7b89e2/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>November 2025</Part>
        <Dated>
            <Date>[3 November 2025](2025-11-03)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Vitest configuration not finding all tests ]]( claude--Vitest configuration not finding all tests--ac7b89e2 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 50 exchanges: <Means>$[[ Vitest configuration not finding all tests ]]( claude--Vitest configuration not finding all tests--ac7b89e2 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
