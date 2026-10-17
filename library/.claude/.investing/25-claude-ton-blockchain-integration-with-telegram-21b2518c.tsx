import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--ton-blockchain-integration-with-telegram--21b2518c/.cover.tsx';
import TheSynopsis from '../.conversations/claude--ton-blockchain-integration-with-telegram--21b2518c/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ TON blockchain integration with Telegram ]]( claude--TON blockchain integration with Telegram--21b2518c )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 28 January 2026: <Means>$[[ TON blockchain integration with Telegram ]]( claude--TON blockchain integration with Telegram--21b2518c )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
