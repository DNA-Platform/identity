import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--fiverrs-connection-to-telegrams-mira-ai--2ebab90b/.cover.tsx';
import TheSynopsis from '../.conversations/claude--fiverrs-connection-to-telegrams-mira-ai--2ebab90b/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Fiverr's connection to Telegram's Mira AI ]]( claude--Fiverr's connection to Telegram's Mira AI--2ebab90b )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 28 July 2026: <Means>$[[ Fiverr's connection to Telegram's Mira AI ]]( claude--Fiverr's connection to Telegram's Mira AI--2ebab90b )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
