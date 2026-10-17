import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/ton-blockchain-integration-with-telegram/.cover.tsx';
import TheSynopsis from '../.conversations/ton-blockchain-integration-with-telegram/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ TON blockchain integration with Telegram ]]</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 28 January 2026: <Means>$[[ TON blockchain integration with Telegram ]]</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
