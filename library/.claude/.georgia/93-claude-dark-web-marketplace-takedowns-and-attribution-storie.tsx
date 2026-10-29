import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--dark-web-marketplace-takedowns-and-attribution-stories--8035b9fb/.cover.tsx';
import TheSynopsis from '../.conversations/claude--dark-web-marketplace-takedowns-and-attribution-stories--8035b9fb/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>Its conversations</Part>
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
