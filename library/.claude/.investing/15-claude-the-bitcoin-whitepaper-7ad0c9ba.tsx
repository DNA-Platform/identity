import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--the-bitcoin-whitepaper--7ad0c9ba/.cover.tsx';
import TheSynopsis from '../.conversations/claude--the-bitcoin-whitepaper--7ad0c9ba/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ The Bitcoin Whitepaper ]]( claude--The Bitcoin Whitepaper--7ad0c9ba )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 17 January 2026: <Means>$[[ The Bitcoin Whitepaper ]]( claude--The Bitcoin Whitepaper--7ad0c9ba )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
