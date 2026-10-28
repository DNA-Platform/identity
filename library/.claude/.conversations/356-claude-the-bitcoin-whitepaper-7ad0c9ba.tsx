import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--the-bitcoin-whitepaper--7ad0c9ba/.cover.tsx';
import TheSynopsis from './claude--the-bitcoin-whitepaper--7ad0c9ba/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>January 2026</Part>
        <Dated>
            <Date>[18 January 2026](2026-01-18)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ The Bitcoin Whitepaper ]]( claude--The Bitcoin Whitepaper--7ad0c9ba )</Title>
        <Paragraph>
            <Caption />
            A conversation, 22 exchanges: <Means>$[[ The Bitcoin Whitepaper ]]( claude--The Bitcoin Whitepaper--7ad0c9ba )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
