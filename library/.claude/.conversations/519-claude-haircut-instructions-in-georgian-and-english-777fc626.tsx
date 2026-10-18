import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--haircut-instructions-in-georgian-and-english--777fc626/.cover.tsx';
import TheSynopsis from './claude--haircut-instructions-in-georgian-and-english--777fc626/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>August 2026</Part>
        <Dated>
            <Date>[14 August 2026](2026-08-14)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Haircut instructions in Georgian and English ]]( claude--Haircut instructions in Georgian and English--777fc626 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 8 exchanges: <Means>$[[ Haircut instructions in Georgian and English ]]( claude--Haircut instructions in Georgian and English--777fc626 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
