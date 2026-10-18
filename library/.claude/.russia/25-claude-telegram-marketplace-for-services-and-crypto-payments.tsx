import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--telegram-marketplace-for-services-and-crypto-payments--e845b07c/.cover.tsx';
import TheSynopsis from '../.conversations/claude--telegram-marketplace-for-services-and-crypto-payments--e845b07c/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Telegram marketplace for services and crypto payments ]]( claude--Telegram marketplace for services and crypto payments--e845b07c )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 2 February 2026: <Means>$[[ Telegram marketplace for services and crypto payments ]]( claude--Telegram marketplace for services and crypto payments--e845b07c )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
