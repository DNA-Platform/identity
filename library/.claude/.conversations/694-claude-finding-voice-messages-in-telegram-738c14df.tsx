import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--finding-voice-messages-in-telegram--738c14df/.cover.tsx';
import TheSynopsis from './claude--finding-voice-messages-in-telegram--738c14df/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>November 2024</Part>
        <Dated>
            <Date>[2 November 2024](2024-11-02)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Finding Voice Messages in Telegram ]]( claude--Finding Voice Messages in Telegram--738c14df )</Title>
        <Paragraph>
            <Caption />
            A conversation, 8 exchanges: <Means>$[[ Finding Voice Messages in Telegram ]]( claude--Finding Voice Messages in Telegram--738c14df )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
