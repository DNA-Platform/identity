import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--making-money-with-p2p-ton--5505f0d5/.cover.tsx';
import TheSynopsis from '../.conversations/claude--making-money-with-p2p-ton--5505f0d5/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>February 2026</Part>
        <Dated>
            <Date>[1 February 2026](2026-02-01)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Making money with P2P TON ]]( claude--Making money with P2P TON--5505f0d5 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 1 February 2026: <Means>$[[ Making money with P2P TON ]]( claude--Making money with P2P TON--5505f0d5 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
