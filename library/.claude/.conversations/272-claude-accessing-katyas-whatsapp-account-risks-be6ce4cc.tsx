import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--accessing-katyas-whatsapp-account-risks--be6ce4cc/.cover.tsx';
import TheSynopsis from './claude--accessing-katyas-whatsapp-account-risks--be6ce4cc/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>January 2026</Part>
        <Dated>
            <Date>[31 January 2026](2026-01-31)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Accessing Katya's WhatsApp account risks ]]( claude--Accessing Katya's WhatsApp account risks--be6ce4cc )</Title>
        <Paragraph>
            <Caption />
            A conversation, 2 exchanges: <Means>$[[ Accessing Katya's WhatsApp account risks ]]( claude--Accessing Katya's WhatsApp account risks--be6ce4cc )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
