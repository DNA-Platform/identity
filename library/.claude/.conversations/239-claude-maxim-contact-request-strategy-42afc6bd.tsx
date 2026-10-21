import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--maxim-contact-request-strategy--42afc6bd/.cover.tsx';
import TheSynopsis from './claude--maxim-contact-request-strategy--42afc6bd/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>October 2026</Part>
        <Dated>
            <Date>[8 October 2026](2026-10-08)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Maxim contact request strategy ]]( claude--Maxim contact request strategy--42afc6bd )</Title>
        <Paragraph>
            <Caption />
            A conversation, 18 exchanges: <Means>$[[ Maxim contact request strategy ]]( claude--Maxim contact request strategy--42afc6bd )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
