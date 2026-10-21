import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--custody-weaponization-and-coercive-control--578ce088/.cover.tsx';
import TheSynopsis from './claude--custody-weaponization-and-coercive-control--578ce088/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>January 2026</Part>
        <Dated>
            <Date>[31 January 2026](2026-01-31)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Custody weaponization and coercive control ]]( claude--Custody weaponization and coercive control--578ce088 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 2 exchanges: <Means>$[[ Custody weaponization and coercive control ]]( claude--Custody weaponization and coercive control--578ce088 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
