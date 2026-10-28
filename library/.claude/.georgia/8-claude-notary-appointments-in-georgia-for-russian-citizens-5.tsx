import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--notary-appointments-in-georgia-for-russian-citizens--55d9d950/.cover.tsx';
import TheSynopsis from '../.conversations/claude--notary-appointments-in-georgia-for-russian-citizens--55d9d950/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>January 2026</Part>
        <Dated>
            <Date>[11 January 2026](2026-01-11)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Notary appointments in Georgia for Russian citizens ]]( claude--Notary appointments in Georgia for Russian citizens--55d9d950 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 11 January 2026: <Means>$[[ Notary appointments in Georgia for Russian citizens ]]( claude--Notary appointments in Georgia for Russian citizens--55d9d950 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
