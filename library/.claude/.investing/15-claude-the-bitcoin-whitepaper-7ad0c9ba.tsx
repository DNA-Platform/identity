import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--the-bitcoin-whitepaper--7ad0c9ba/.cover.tsx';
import TheSynopsis from '../.conversations/claude--the-bitcoin-whitepaper--7ad0c9ba/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>January 2026</Part>
        <Dated>
            <Date>[17 January 2026](2026-01-17)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ The Bitcoin Whitepaper ]]( claude--The Bitcoin Whitepaper--7ad0c9ba )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 17 January 2026: <Means>$[[ The Bitcoin Whitepaper ]]( claude--The Bitcoin Whitepaper--7ad0c9ba )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
