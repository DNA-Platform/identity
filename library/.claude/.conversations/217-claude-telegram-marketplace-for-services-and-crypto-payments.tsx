import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--telegram-marketplace-for-services-and-crypto-payments--e845b07c/.cover.tsx';
import TheSynopsis from './claude--telegram-marketplace-for-services-and-crypto-payments--e845b07c/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>February 2026</Part>
        <Dated>
            <Date>[2 February 2026](2026-02-02)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Telegram marketplace for services and crypto payments ]]( claude--Telegram marketplace for services and crypto payments--e845b07c )</Title>
        <Paragraph>
            <Caption />
            A conversation, 8 exchanges: <Means>$[[ Telegram marketplace for services and crypto payments ]]( claude--Telegram marketplace for services and crypto payments--e845b07c )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
