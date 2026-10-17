import { Append, Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './telegram-wallet-kyc-and-staking-tax-obligations/.cover.tsx';
import TheSynopsis from './telegram-wallet-kyc-and-staking-tax-obligations/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>February 2026</Part>
        <Dated>
            <Date>[23 February 2026](2026-02-23)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Telegram wallet KYC and staking tax obligations ]]</Title>
        <Paragraph>
            <Caption />
            A conversation, 47 exchanges: <Means>$[[ Telegram wallet KYC and staking tax obligations ]]</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
        <Append
            identifier="import"
            type=".json"
        >
            ![[ import.json ]]
        </Append>
    </Chapter>
);
