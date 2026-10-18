import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--english-news-channels-on-telegram--22bb3e3b/.cover.tsx';
import TheSynopsis from '../.conversations/claude--english-news-channels-on-telegram--22bb3e3b/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ English news channels on Telegram ]]( claude--English news channels on Telegram--22bb3e3b )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 13 February 2026: <Means>$[[ English news channels on Telegram ]]( claude--English news channels on Telegram--22bb3e3b )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
