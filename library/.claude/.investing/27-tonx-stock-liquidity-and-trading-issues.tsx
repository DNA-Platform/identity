import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/tonx-stock-liquidity-and-trading-issues/.cover.tsx';
import TheSynopsis from '../.conversations/tonx-stock-liquidity-and-trading-issues/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ TONX stock liquidity and trading issues ]]</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 15 February 2026: <Means>$[[ TONX stock liquidity and trading issues ]]</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
