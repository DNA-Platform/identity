import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--accessing-katyas-whatsapp-account-risks--be6ce4cc/.cover.tsx';
import TheSynopsis from '../.conversations/claude--accessing-katyas-whatsapp-account-risks--be6ce4cc/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>January 2026</Part>
        <Dated>
            <Date>[31 January 2026](2026-01-31)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Accessing Katya's WhatsApp account risks ]]( claude--Accessing Katya's WhatsApp account risks--be6ce4cc )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 31 January 2026: <Means>$[[ Accessing Katya's WhatsApp account risks ]]( claude--Accessing Katya's WhatsApp account risks--be6ce4cc )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
