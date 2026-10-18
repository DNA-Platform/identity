import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--telegrams-cryptocurrency-infrastructure-play--d7da5541/.cover.tsx';
import TheSynopsis from '../.conversations/claude--telegrams-cryptocurrency-infrastructure-play--d7da5541/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>February 2026</Part>
        <Dated>
            <Date>[2 February 2026](2026-02-02)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Telegram's cryptocurrency infrastructure play ]]( claude--Telegram's cryptocurrency infrastructure play--d7da5541 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 2 February 2026: <Means>$[[ Telegram's cryptocurrency infrastructure play ]]( claude--Telegram's cryptocurrency infrastructure play--d7da5541 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
