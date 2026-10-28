import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--telegram-wallet-kyc-and-staking-tax-obligations--828fa88c/.cover.tsx';
import TheSynopsis from '../.conversations/claude--telegram-wallet-kyc-and-staking-tax-obligations--828fa88c/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>February 2026</Part>
        <Dated>
            <Date>[23 February 2026](2026-02-23)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Telegram wallet KYC and staking tax obligations ]]( claude--Telegram wallet KYC and staking tax obligations--828fa88c )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 23 February 2026: <Means>$[[ Telegram wallet KYC and staking tax obligations ]]( claude--Telegram wallet KYC and staking tax obligations--828fa88c )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
