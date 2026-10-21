import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--bitcoin-transfer-from-coinbase-to-atomic-wallet-not-appearin--1a22d3ef/.cover.tsx';
import TheSynopsis from './claude--bitcoin-transfer-from-coinbase-to-atomic-wallet-not-appearin--1a22d3ef/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>April 2026</Part>
        <Dated>
            <Date>[29 April 2026](2026-04-29)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Bitcoin transfer from Coinbase to Atomic Wallet not appearing ]]( claude--Bitcoin transfer from Coinbase to Atomic Wallet not appearing--1a22d3ef )</Title>
        <Paragraph>
            <Caption />
            A conversation, 26 exchanges: <Means>$[[ Bitcoin transfer from Coinbase to Atomic Wallet not appearing ]]( claude--Bitcoin transfer from Coinbase to Atomic Wallet not appearing--1a22d3ef )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
