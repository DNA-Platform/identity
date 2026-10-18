import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--finding-renamed-bots-section-in-telegram--5962d97d/.cover.tsx';
import TheSynopsis from '../.conversations/claude--finding-renamed-bots-section-in-telegram--5962d97d/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>August 2026</Part>
        <Dated>
            <Date>[13 August 2026](2026-08-13)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Finding renamed bots section in Telegram ]]( claude--Finding renamed bots section in Telegram--5962d97d )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 13 August 2026: <Means>$[[ Finding renamed bots section in Telegram ]]( claude--Finding renamed bots section in Telegram--5962d97d )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
