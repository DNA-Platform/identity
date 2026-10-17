import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--telegrams-cryptocurrency-infrastructure-play--d7da5541/.cover.tsx';
import TheSynopsis from '../.conversations/claude--telegrams-cryptocurrency-infrastructure-play--d7da5541/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Telegram's cryptocurrency infrastructure play ]]( claude--Telegram's cryptocurrency infrastructure play--d7da5541 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 2 February 2026: <Means>$[[ Telegram's cryptocurrency infrastructure play ]]( claude--Telegram's cryptocurrency infrastructure play--d7da5541 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
