import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--tonx-staking-rewards-and-share-price-disconnect--140a3ecf/.cover.tsx';
import TheSynopsis from '../.conversations/claude--tonx-staking-rewards-and-share-price-disconnect--140a3ecf/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ TONX staking rewards and share price disconnect ]]( claude--TONX staking rewards and share price disconnect--140a3ecf )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 14 April 2026: <Means>$[[ TONX staking rewards and share price disconnect ]]( claude--TONX staking rewards and share price disconnect--140a3ecf )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
