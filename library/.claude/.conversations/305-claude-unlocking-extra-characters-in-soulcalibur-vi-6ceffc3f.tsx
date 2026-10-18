import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--unlocking-extra-characters-in-soulcalibur-vi--6ceffc3f/.cover.tsx';
import TheSynopsis from './claude--unlocking-extra-characters-in-soulcalibur-vi--6ceffc3f/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>April 2026</Part>
        <Dated>
            <Date>[9 April 2026](2026-04-09)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Unlocking extra characters in SoulCalibur VI ]]( claude--Unlocking extra characters in SoulCalibur VI--6ceffc3f )</Title>
        <Paragraph>
            <Caption />
            A conversation, 2 exchanges: <Means>$[[ Unlocking extra characters in SoulCalibur VI ]]( claude--Unlocking extra characters in SoulCalibur VI--6ceffc3f )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
