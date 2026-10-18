import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--buckwheat-serving-size-and-calories--4d68e6aa/.cover.tsx';
import TheSynopsis from './claude--buckwheat-serving-size-and-calories--4d68e6aa/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>August 2026</Part>
        <Dated>
            <Date>[4 August 2026](2026-08-04)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Buckwheat serving size and calories ]]( claude--Buckwheat serving size and calories--4d68e6aa )</Title>
        <Paragraph>
            <Caption />
            A conversation, 4 exchanges: <Means>$[[ Buckwheat serving size and calories ]]( claude--Buckwheat serving size and calories--4d68e6aa )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
