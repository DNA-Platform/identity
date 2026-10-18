import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--anonymous-telegram-numbers-with-ton--92b759ad/.cover.tsx';
import TheSynopsis from './claude--anonymous-telegram-numbers-with-ton--92b759ad/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>May 2026</Part>
        <Dated>
            <Date>[27 May 2026](2026-05-27)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Anonymous Telegram numbers with TON ]]( claude--Anonymous Telegram numbers with TON--92b759ad )</Title>
        <Paragraph>
            <Caption />
            A conversation, 4 exchanges: <Means>$[[ Anonymous Telegram numbers with TON ]]( claude--Anonymous Telegram numbers with TON--92b759ad )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
