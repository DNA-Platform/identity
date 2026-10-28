import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--ton-blockchain-upgrade-and-fee-implications--8eb3976a/.cover.tsx';
import TheSynopsis from './claude--ton-blockchain-upgrade-and-fee-implications--8eb3976a/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>April 2026</Part>
        <Dated>
            <Date>[23 April 2026](2026-04-23)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ TON blockchain upgrade and fee implications ]]( claude--TON blockchain upgrade and fee implications--8eb3976a )</Title>
        <Paragraph>
            <Caption />
            A conversation, 10 exchanges: <Means>$[[ TON blockchain upgrade and fee implications ]]( claude--TON blockchain upgrade and fee implications--8eb3976a )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
