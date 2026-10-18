import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--accessing-katyas-whatsapp-account-risks--be6ce4cc/.cover.tsx';
import TheSynopsis from '../.conversations/claude--accessing-katyas-whatsapp-account-risks--be6ce4cc/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Accessing Katya's WhatsApp account risks ]]( claude--Accessing Katya's WhatsApp account risks--be6ce4cc )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 31 January 2026: <Means>$[[ Accessing Katya's WhatsApp account risks ]]( claude--Accessing Katya's WhatsApp account risks--be6ce4cc )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
