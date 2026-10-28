import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--anonymous-telegram-numbers-with-ton--92b759ad/.cover.tsx';
import TheSynopsis from '../.conversations/claude--anonymous-telegram-numbers-with-ton--92b759ad/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>May 2026</Part>
        <Dated>
            <Date>[27 May 2026](2026-05-27)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Anonymous Telegram numbers with TON ]]( claude--Anonymous Telegram numbers with TON--92b759ad )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 27 May 2026: <Means>$[[ Anonymous Telegram numbers with TON ]]( claude--Anonymous Telegram numbers with TON--92b759ad )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
