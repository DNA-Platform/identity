import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--booking-com-pet-declaration-requirements--ce4e1c57/.cover.tsx';
import TheSynopsis from '../.conversations/claude--booking-com-pet-declaration-requirements--ce4e1c57/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>February 2026</Part>
        <Dated>
            <Date>[5 February 2026](2026-02-05)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Booking.com pet declaration requirements ]]( claude--Booking..com pet declaration requirements--ce4e1c57 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 5 February 2026: <Means>$[[ Booking.com pet declaration requirements ]]( claude--Booking..com pet declaration requirements--ce4e1c57 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
