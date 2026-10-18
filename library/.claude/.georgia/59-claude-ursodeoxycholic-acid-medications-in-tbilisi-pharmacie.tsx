import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--ursodeoxycholic-acid-medications-in-tbilisi-pharmacies--cc78631a/.cover.tsx';
import TheSynopsis from '../.conversations/claude--ursodeoxycholic-acid-medications-in-tbilisi-pharmacies--cc78631a/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Ursodeoxycholic acid medications in Tbilisi pharmacies ]]( claude--Ursodeoxycholic acid medications in Tbilisi pharmacies--cc78631a )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 1 June 2026: <Means>$[[ Ursodeoxycholic acid medications in Tbilisi pharmacies ]]( claude--Ursodeoxycholic acid medications in Tbilisi pharmacies--cc78631a )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
