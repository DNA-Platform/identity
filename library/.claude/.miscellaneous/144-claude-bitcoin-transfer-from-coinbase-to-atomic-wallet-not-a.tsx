import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--bitcoin-transfer-from-coinbase-to-atomic-wallet-not-appearin--1a22d3ef/.cover.tsx';
import TheSynopsis from '../.conversations/claude--bitcoin-transfer-from-coinbase-to-atomic-wallet-not-appearin--1a22d3ef/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Bitcoin transfer from Coinbase to Atomic Wallet not appearing ]]( claude--Bitcoin transfer from Coinbase to Atomic Wallet not appearing--1a22d3ef )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 29 April 2026: <Means>$[[ Bitcoin transfer from Coinbase to Atomic Wallet not appearing ]]( claude--Bitcoin transfer from Coinbase to Atomic Wallet not appearing--1a22d3ef )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
