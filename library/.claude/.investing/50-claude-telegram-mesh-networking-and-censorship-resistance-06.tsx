import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--telegram-mesh-networking-and-censorship-resistance--06edc90c/.cover.tsx';
import TheSynopsis from '../.conversations/claude--telegram-mesh-networking-and-censorship-resistance--06edc90c/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Telegram mesh networking and censorship resistance ]]( claude--Telegram mesh networking and censorship resistance--06edc90c )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 12 March 2026: <Means>$[[ Telegram mesh networking and censorship resistance ]]( claude--Telegram mesh networking and censorship resistance--06edc90c )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
