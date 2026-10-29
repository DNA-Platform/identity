import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--2026-social-security-disability-earnings-limit--0ccacc8b/.cover.tsx';
import TheSynopsis from '../.conversations/claude--2026-social-security-disability-earnings-limit--0ccacc8b/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>Its conversations</Part>
        <Dated>
            <Date>[28 April 2026](2026-04-28)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ 2026 social security disability earnings limit ]]( claude--2026 social security disability earnings limit--0ccacc8b )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 28 April 2026: <Means>$[[ 2026 social security disability earnings limit ]]( claude--2026 social security disability earnings limit--0ccacc8b )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
