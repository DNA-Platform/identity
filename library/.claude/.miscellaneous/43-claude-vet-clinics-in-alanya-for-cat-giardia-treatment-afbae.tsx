import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--vet-clinics-in-alanya-for-cat-giardia-treatment--afbae201/.cover.tsx';
import TheSynopsis from '../.conversations/claude--vet-clinics-in-alanya-for-cat-giardia-treatment--afbae201/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Vet clinics in Alanya for cat giardia treatment ]]( claude--Vet clinics in Alanya for cat giardia treatment--afbae201 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 16 January 2026: <Means>$[[ Vet clinics in Alanya for cat giardia treatment ]]( claude--Vet clinics in Alanya for cat giardia treatment--afbae201 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
