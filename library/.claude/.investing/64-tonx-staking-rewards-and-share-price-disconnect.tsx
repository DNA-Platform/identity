import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/tonx-staking-rewards-and-share-price-disconnect/.cover.tsx';
import TheSynopsis from '../.conversations/tonx-staking-rewards-and-share-price-disconnect/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ TONX staking rewards and share price disconnect ]]</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 14 April 2026: <Means>$[[ TONX staking rewards and share price disconnect ]]</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
