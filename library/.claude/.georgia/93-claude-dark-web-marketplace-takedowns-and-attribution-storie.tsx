import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--dark-web-marketplace-takedowns-and-attribution-stories--8035b9fb/.cover.tsx';
import TheSynopsis from '../.conversations/claude--dark-web-marketplace-takedowns-and-attribution-stories--8035b9fb/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Dark web marketplace takedowns and attribution stories ]]( claude--Dark web marketplace takedowns and attribution stories--8035b9fb )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 9 August 2026: <Means>$[[ Dark web marketplace takedowns and attribution stories ]]( claude--Dark web marketplace takedowns and attribution stories--8035b9fb )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
