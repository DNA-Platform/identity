import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/crypto-market-spike-triggers-and-patterns/.cover.tsx';
import TheSynopsis from '../.conversations/crypto-market-spike-triggers-and-patterns/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Crypto market spike triggers and patterns ]]</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 27 January 2026: <Means>$[[ Crypto market spike triggers and patterns ]]</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
