import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/ton-digital-asset-treasury-companies-on-stock-exchanges/.cover.tsx';
import TheSynopsis from '../.conversations/ton-digital-asset-treasury-companies-on-stock-exchanges/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ TON digital asset treasury companies on stock exchanges ]]</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 5 February 2026: <Means>$[[ TON digital asset treasury companies on stock exchanges ]]</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
