import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--rescheduling-fedex-delivery-to-tbilisi--9e6c3434/.cover.tsx';
import TheSynopsis from '../.conversations/claude--rescheduling-fedex-delivery-to-tbilisi--9e6c3434/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>June 2026</Part>
        <Dated>
            <Date>[7 June 2026](2026-06-07)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Rescheduling FedEx delivery to Tbilisi ]]( claude--Rescheduling FedEx delivery to Tbilisi--9e6c3434 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 7 June 2026: <Means>$[[ Rescheduling FedEx delivery to Tbilisi ]]( claude--Rescheduling FedEx delivery to Tbilisi--9e6c3434 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
