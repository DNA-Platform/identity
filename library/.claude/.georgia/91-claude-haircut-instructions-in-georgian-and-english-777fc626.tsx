import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--haircut-instructions-in-georgian-and-english--777fc626/.cover.tsx';
import TheSynopsis from '../.conversations/claude--haircut-instructions-in-georgian-and-english--777fc626/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>Its conversations</Part>
        <Dated>
            <Date>[14 August 2026](2026-08-14)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Haircut instructions in Georgian and English ]]( claude--Haircut instructions in Georgian and English--777fc626 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 14 August 2026: <Means>$[[ Haircut instructions in Georgian and English ]]( claude--Haircut instructions in Georgian and English--777fc626 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
