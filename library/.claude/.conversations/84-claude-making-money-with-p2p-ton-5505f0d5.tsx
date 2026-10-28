import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--making-money-with-p2p-ton--5505f0d5/.cover.tsx';
import TheSynopsis from './claude--making-money-with-p2p-ton--5505f0d5/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>February 2026</Part>
        <Dated>
            <Date>[1 February 2026](2026-02-01)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Making money with P2P TON ]]( claude--Making money with P2P TON--5505f0d5 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 24 exchanges: <Means>$[[ Making money with P2P TON ]]( claude--Making money with P2P TON--5505f0d5 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
