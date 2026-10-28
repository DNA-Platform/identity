import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--ton-price-adoption-metrics-and-network-effects--3d4d9b62/.cover.tsx';
import TheSynopsis from './claude--ton-price-adoption-metrics-and-network-effects--3d4d9b62/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>April 2026</Part>
        <Dated>
            <Date>[27 April 2026](2026-04-27)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ TON price adoption metrics and network effects ]]( claude--TON price adoption metrics and network effects--3d4d9b62 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 64 exchanges: <Means>$[[ TON price adoption metrics and network effects ]]( claude--TON price adoption metrics and network effects--3d4d9b62 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
