import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--vet-clinics-in-alanya-for-cat-giardia-treatment--afbae201/.cover.tsx';
import TheSynopsis from './claude--vet-clinics-in-alanya-for-cat-giardia-treatment--afbae201/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>January 2026</Part>
        <Dated>
            <Date>[16 January 2026](2026-01-16)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Vet clinics in Alanya for cat giardia treatment ]]( claude--Vet clinics in Alanya for cat giardia treatment--afbae201 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 10 exchanges: <Means>$[[ Vet clinics in Alanya for cat giardia treatment ]]( claude--Vet clinics in Alanya for cat giardia treatment--afbae201 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
