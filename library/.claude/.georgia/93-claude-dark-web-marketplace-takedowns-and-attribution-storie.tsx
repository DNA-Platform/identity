import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--dark-web-marketplace-takedowns-and-attribution-stories--8035b9fb/.cover.tsx';
import TheSynopsis from '../.conversations/claude--dark-web-marketplace-takedowns-and-attribution-stories--8035b9fb/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>August 2026</Part>
        <Dated>
            <Date>[9 August 2026](2026-08-09)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Dark web marketplace takedowns and attribution stories ]]( claude--Dark web marketplace takedowns and attribution stories--8035b9fb )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 9 August 2026: <Means>$[[ Dark web marketplace takedowns and attribution stories ]]( claude--Dark web marketplace takedowns and attribution stories--8035b9fb )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
