import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--telegram-mesh-networking-and-censorship-resistance--06edc90c/.cover.tsx';
import TheSynopsis from '../.conversations/claude--telegram-mesh-networking-and-censorship-resistance--06edc90c/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>Its conversations</Part>
        <Dated>
            <Date>[12 March 2026](2026-03-12)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Telegram mesh networking and censorship resistance ]]( claude--Telegram mesh networking and censorship resistance--06edc90c )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 12 March 2026: <Means>$[[ Telegram mesh networking and censorship resistance ]]( claude--Telegram mesh networking and censorship resistance--06edc90c )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
