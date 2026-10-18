import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--payoneer-access-for-russian-users--c0237c13/.cover.tsx';
import TheSynopsis from '../.conversations/claude--payoneer-access-for-russian-users--c0237c13/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>May 2026</Part>
        <Dated>
            <Date>[8 May 2026](2026-05-08)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Payoneer access for Russian users ]]( claude--Payoneer access for Russian users--c0237c13 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 8 May 2026: <Means>$[[ Payoneer access for Russian users ]]( claude--Payoneer access for Russian users--c0237c13 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
