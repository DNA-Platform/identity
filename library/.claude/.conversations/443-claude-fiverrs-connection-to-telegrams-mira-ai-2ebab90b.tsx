import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--fiverrs-connection-to-telegrams-mira-ai--2ebab90b/.cover.tsx';
import TheSynopsis from './claude--fiverrs-connection-to-telegrams-mira-ai--2ebab90b/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>July 2026</Part>
        <Dated>
            <Date>[28 July 2026](2026-07-28)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Fiverr's connection to Telegram's Mira AI ]]( claude--Fiverr's connection to Telegram's Mira AI--2ebab90b )</Title>
        <Paragraph>
            <Caption />
            A conversation, 2 exchanges: <Means>$[[ Fiverr's connection to Telegram's Mira AI ]]( claude--Fiverr's connection to Telegram's Mira AI--2ebab90b )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
