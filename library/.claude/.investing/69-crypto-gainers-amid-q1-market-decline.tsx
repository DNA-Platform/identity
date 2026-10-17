import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/crypto-gainers-amid-q1-market-decline/.cover.tsx';
import TheSynopsis from '../.conversations/crypto-gainers-amid-q1-market-decline/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Crypto gainers amid Q1 market decline ]]</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 22 April 2026: <Means>$[[ Crypto gainers amid Q1 market decline ]]</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
