import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--anonymous-telegram-numbers-with-ton--92b759ad/.cover.tsx';
import TheSynopsis from '../.conversations/claude--anonymous-telegram-numbers-with-ton--92b759ad/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Anonymous Telegram numbers with TON ]]( claude--Anonymous Telegram numbers with TON--92b759ad )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 27 May 2026: <Means>$[[ Anonymous Telegram numbers with TON ]]( claude--Anonymous Telegram numbers with TON--92b759ad )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
