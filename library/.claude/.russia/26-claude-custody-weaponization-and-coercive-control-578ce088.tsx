import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--custody-weaponization-and-coercive-control--578ce088/.cover.tsx';
import TheSynopsis from '../.conversations/claude--custody-weaponization-and-coercive-control--578ce088/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>Its conversations</Part>
        <Dated>
            <Date>[31 January 2026](2026-01-31)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Custody weaponization and coercive control ]]( claude--Custody weaponization and coercive control--578ce088 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 31 January 2026: <Means>$[[ Custody weaponization and coercive control ]]( claude--Custody weaponization and coercive control--578ce088 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
