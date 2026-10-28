import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--english-news-channels-on-telegram--22bb3e3b/.cover.tsx';
import TheSynopsis from './claude--english-news-channels-on-telegram--22bb3e3b/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>February 2026</Part>
        <Dated>
            <Date>[13 February 2026](2026-02-13)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ English news channels on Telegram ]]( claude--English news channels on Telegram--22bb3e3b )</Title>
        <Paragraph>
            <Caption />
            A conversation, 8 exchanges: <Means>$[[ English news channels on Telegram ]]( claude--English news channels on Telegram--22bb3e3b )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
