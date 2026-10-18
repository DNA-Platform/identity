import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--dark-web-marketplace-takedowns-and-attribution-stories--8035b9fb/.cover.tsx';
import TheSynopsis from './claude--dark-web-marketplace-takedowns-and-attribution-stories--8035b9fb/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>August 2026</Part>
        <Dated>
            <Date>[13 August 2026](2026-08-13)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Dark web marketplace takedowns and attribution stories ]]( claude--Dark web marketplace takedowns and attribution stories--8035b9fb )</Title>
        <Paragraph>
            <Caption />
            A conversation, 44 exchanges: <Means>$[[ Dark web marketplace takedowns and attribution stories ]]( claude--Dark web marketplace takedowns and attribution stories--8035b9fb )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
