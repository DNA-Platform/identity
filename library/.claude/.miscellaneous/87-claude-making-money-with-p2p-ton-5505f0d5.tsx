import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--making-money-with-p2p-ton--5505f0d5/.cover.tsx';
import TheSynopsis from '../.conversations/claude--making-money-with-p2p-ton--5505f0d5/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Making money with P2P TON ]]( claude--Making money with P2P TON--5505f0d5 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 1 February 2026: <Means>$[[ Making money with P2P TON ]]( claude--Making money with P2P TON--5505f0d5 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
