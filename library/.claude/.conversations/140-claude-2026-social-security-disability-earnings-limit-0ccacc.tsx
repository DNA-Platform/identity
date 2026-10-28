import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--2026-social-security-disability-earnings-limit--0ccacc8b/.cover.tsx';
import TheSynopsis from './claude--2026-social-security-disability-earnings-limit--0ccacc8b/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>April 2026</Part>
        <Dated>
            <Date>[28 April 2026](2026-04-28)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ 2026 social security disability earnings limit ]]( claude--2026 social security disability earnings limit--0ccacc8b )</Title>
        <Paragraph>
            <Caption />
            A conversation, 8 exchanges: <Means>$[[ 2026 social security disability earnings limit ]]( claude--2026 social security disability earnings limit--0ccacc8b )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
