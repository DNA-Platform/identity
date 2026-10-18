import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--maxim-contact-request-strategy--42afc6bd/.cover.tsx';
import TheSynopsis from '../.conversations/claude--maxim-contact-request-strategy--42afc6bd/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Maxim contact request strategy ]]( claude--Maxim contact request strategy--42afc6bd )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 8 October 2026: <Means>$[[ Maxim contact request strategy ]]( claude--Maxim contact request strategy--42afc6bd )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
