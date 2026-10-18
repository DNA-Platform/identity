import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--laser-photo-epithelial-treatment-for-skin-rejuvenation--88db2300/.cover.tsx';
import TheSynopsis from '../.conversations/claude--laser-photo-epithelial-treatment-for-skin-rejuvenation--88db2300/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Laser photo epithelial treatment for skin rejuvenation ]]( claude--Laser photo epithelial treatment for skin rejuvenation--88db2300 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 8 May 2026: <Means>$[[ Laser photo epithelial treatment for skin rejuvenation ]]( claude--Laser photo epithelial treatment for skin rejuvenation--88db2300 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
