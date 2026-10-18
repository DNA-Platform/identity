import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--telegram-accessibility-anomaly-in-russia--0bd4552d/.cover.tsx';
import TheSynopsis from '../.conversations/claude--telegram-accessibility-anomaly-in-russia--0bd4552d/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>April 2026</Part>
        <Dated>
            <Date>[17 April 2026](2026-04-17)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Telegram accessibility anomaly in Russia ]]( claude--Telegram accessibility anomaly in Russia--0bd4552d )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 17 April 2026: <Means>$[[ Telegram accessibility anomaly in Russia ]]( claude--Telegram accessibility anomaly in Russia--0bd4552d )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
