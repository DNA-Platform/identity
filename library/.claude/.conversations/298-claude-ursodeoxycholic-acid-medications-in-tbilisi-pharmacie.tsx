import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--ursodeoxycholic-acid-medications-in-tbilisi-pharmacies--cc78631a/.cover.tsx';
import TheSynopsis from './claude--ursodeoxycholic-acid-medications-in-tbilisi-pharmacies--cc78631a/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>June 2026</Part>
        <Dated>
            <Date>[1 June 2026](2026-06-01)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Ursodeoxycholic acid medications in Tbilisi pharmacies ]]( claude--Ursodeoxycholic acid medications in Tbilisi pharmacies--cc78631a )</Title>
        <Paragraph>
            <Caption />
            A conversation, 14 exchanges: <Means>$[[ Ursodeoxycholic acid medications in Tbilisi pharmacies ]]( claude--Ursodeoxycholic acid medications in Tbilisi pharmacies--cc78631a )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
