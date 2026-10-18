import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--notary-appointments-in-georgia-for-russian-citizens--55d9d950/.cover.tsx';
import TheSynopsis from './claude--notary-appointments-in-georgia-for-russian-citizens--55d9d950/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>January 2026</Part>
        <Dated>
            <Date>[11 January 2026](2026-01-11)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Notary appointments in Georgia for Russian citizens ]]( claude--Notary appointments in Georgia for Russian citizens--55d9d950 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 6 exchanges: <Means>$[[ Notary appointments in Georgia for Russian citizens ]]( claude--Notary appointments in Georgia for Russian citizens--55d9d950 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
