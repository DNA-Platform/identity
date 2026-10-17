import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--ton-price-adoption-metrics-and-network-effects--3d4d9b62/.cover.tsx';
import TheSynopsis from '../.conversations/claude--ton-price-adoption-metrics-and-network-effects--3d4d9b62/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ TON price adoption metrics and network effects ]]( claude--TON price adoption metrics and network effects--3d4d9b62 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 26 April 2026: <Means>$[[ TON price adoption metrics and network effects ]]( claude--TON price adoption metrics and network effects--3d4d9b62 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
