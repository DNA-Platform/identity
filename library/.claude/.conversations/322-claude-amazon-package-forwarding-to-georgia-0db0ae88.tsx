import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--amazon-package-forwarding-to-georgia--0db0ae88/.cover.tsx';
import TheSynopsis from './claude--amazon-package-forwarding-to-georgia--0db0ae88/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>July 2026</Part>
        <Dated>
            <Date>[1 July 2026](2026-07-01)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Amazon package forwarding to Georgia ]]( claude--Amazon package forwarding to Georgia--0db0ae88 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 68 exchanges: <Means>$[[ Amazon package forwarding to Georgia ]]( claude--Amazon package forwarding to Georgia--0db0ae88 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
