import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--fiverrs-connection-to-telegrams-mira-ai--2ebab90b/.cover.tsx';
import TheSynopsis from '../.conversations/claude--fiverrs-connection-to-telegrams-mira-ai--2ebab90b/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>July 2026</Part>
        <Dated>
            <Date>[28 July 2026](2026-07-28)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Fiverr's connection to Telegram's Mira AI ]]( claude--Fiverr's connection to Telegram's Mira AI--2ebab90b )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 28 July 2026: <Means>$[[ Fiverr's connection to Telegram's Mira AI ]]( claude--Fiverr's connection to Telegram's Mira AI--2ebab90b )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
