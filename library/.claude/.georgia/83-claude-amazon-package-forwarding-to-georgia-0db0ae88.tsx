import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--amazon-package-forwarding-to-georgia--0db0ae88/.cover.tsx';
import TheSynopsis from '../.conversations/claude--amazon-package-forwarding-to-georgia--0db0ae88/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Amazon package forwarding to Georgia ]]( claude--Amazon package forwarding to Georgia--0db0ae88 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 25 June 2026: <Means>$[[ Amazon package forwarding to Georgia ]]( claude--Amazon package forwarding to Georgia--0db0ae88 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
