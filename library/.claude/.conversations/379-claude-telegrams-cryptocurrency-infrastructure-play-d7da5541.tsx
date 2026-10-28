import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--telegrams-cryptocurrency-infrastructure-play--d7da5541/.cover.tsx';
import TheSynopsis from './claude--telegrams-cryptocurrency-infrastructure-play--d7da5541/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>February 2026</Part>
        <Dated>
            <Date>[2 February 2026](2026-02-02)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Telegram's cryptocurrency infrastructure play ]]( claude--Telegram's cryptocurrency infrastructure play--d7da5541 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 20 exchanges: <Means>$[[ Telegram's cryptocurrency infrastructure play ]]( claude--Telegram's cryptocurrency infrastructure play--d7da5541 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
