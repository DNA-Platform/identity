import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--payoneer-access-for-russian-users--c0237c13/.cover.tsx';
import TheSynopsis from './claude--payoneer-access-for-russian-users--c0237c13/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>May 2026</Part>
        <Dated>
            <Date>[8 May 2026](2026-05-08)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Payoneer access for Russian users ]]( claude--Payoneer access for Russian users--c0237c13 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 2 exchanges: <Means>$[[ Payoneer access for Russian users ]]( claude--Payoneer access for Russian users--c0237c13 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
