import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--rescheduling-fedex-delivery-to-tbilisi--9e6c3434/.cover.tsx';
import TheSynopsis from './claude--rescheduling-fedex-delivery-to-tbilisi--9e6c3434/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>June 2026</Part>
        <Dated>
            <Date>[7 June 2026](2026-06-07)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Rescheduling FedEx delivery to Tbilisi ]]( claude--Rescheduling FedEx delivery to Tbilisi--9e6c3434 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 12 exchanges: <Means>$[[ Rescheduling FedEx delivery to Tbilisi ]]( claude--Rescheduling FedEx delivery to Tbilisi--9e6c3434 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
