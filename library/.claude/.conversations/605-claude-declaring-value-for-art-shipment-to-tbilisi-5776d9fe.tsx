import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--declaring-value-for-art-shipment-to-tbilisi--5776d9fe/.cover.tsx';
import TheSynopsis from './claude--declaring-value-for-art-shipment-to-tbilisi--5776d9fe/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>May 2026</Part>
        <Dated>
            <Date>[18 May 2026](2026-05-18)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Declaring value for art shipment to Tbilisi ]]( claude--Declaring value for art shipment to Tbilisi--5776d9fe )</Title>
        <Paragraph>
            <Caption />
            A conversation, 8 exchanges: <Means>$[[ Declaring value for art shipment to Tbilisi ]]( claude--Declaring value for art shipment to Tbilisi--5776d9fe )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
