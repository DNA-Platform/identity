import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--unlocking-extra-characters-in-soulcalibur-vi--6ceffc3f/.cover.tsx';
import TheSynopsis from '../.conversations/claude--unlocking-extra-characters-in-soulcalibur-vi--6ceffc3f/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Unlocking extra characters in SoulCalibur VI ]]( claude--Unlocking extra characters in SoulCalibur VI--6ceffc3f )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 9 April 2026: <Means>$[[ Unlocking extra characters in SoulCalibur VI ]]( claude--Unlocking extra characters in SoulCalibur VI--6ceffc3f )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
