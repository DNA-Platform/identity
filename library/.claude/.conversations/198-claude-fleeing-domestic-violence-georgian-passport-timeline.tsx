import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--fleeing-domestic-violence-georgian-passport-timeline--25828b14/.cover.tsx';
import TheSynopsis from './claude--fleeing-domestic-violence-georgian-passport-timeline--25828b14/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>January 2026</Part>
        <Dated>
            <Date>[16 January 2026](2026-01-16)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Fleeing domestic violence: Georgian passport timeline ]]( claude--Fleeing domestic violence: Georgian passport timeline--25828b14 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 27 exchanges: <Means>$[[ Fleeing domestic violence: Georgian passport timeline ]]( claude--Fleeing domestic violence: Georgian passport timeline--25828b14 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
