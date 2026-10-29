import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--english-news-channels-on-telegram--22bb3e3b/.cover.tsx';
import TheSynopsis from '../.conversations/claude--english-news-channels-on-telegram--22bb3e3b/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>Its conversations</Part>
        <Dated>
            <Date>[13 February 2026](2026-02-13)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ English news channels on Telegram ]]( claude--English news channels on Telegram--22bb3e3b )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 13 February 2026: <Means>$[[ English news channels on Telegram ]]( claude--English news channels on Telegram--22bb3e3b )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
