import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--amazon-package-forwarding-to-georgia--0db0ae88/.cover.tsx';
import TheSynopsis from '../.conversations/claude--amazon-package-forwarding-to-georgia--0db0ae88/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>June 2026</Part>
        <Dated>
            <Date>[25 June 2026](2026-06-25)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Amazon package forwarding to Georgia ]]( claude--Amazon package forwarding to Georgia--0db0ae88 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 25 June 2026: <Means>$[[ Amazon package forwarding to Georgia ]]( claude--Amazon package forwarding to Georgia--0db0ae88 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
