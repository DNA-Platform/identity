import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/ton-price-adoption-metrics-and-network-effects/.cover.tsx';
import TheSynopsis from '../.conversations/ton-price-adoption-metrics-and-network-effects/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ TON price adoption metrics and network effects ]]</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 26 April 2026: <Means>$[[ TON price adoption metrics and network effects ]]</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
