import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--laser-photo-epithelial-treatment-for-skin-rejuvenation--88db2300/.cover.tsx';
import TheSynopsis from '../.conversations/claude--laser-photo-epithelial-treatment-for-skin-rejuvenation--88db2300/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>May 2026</Part>
        <Dated>
            <Date>[8 May 2026](2026-05-08)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Laser photo epithelial treatment for skin rejuvenation ]]( claude--Laser photo epithelial treatment for skin rejuvenation--88db2300 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 8 May 2026: <Means>$[[ Laser photo epithelial treatment for skin rejuvenation ]]( claude--Laser photo epithelial treatment for skin rejuvenation--88db2300 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
