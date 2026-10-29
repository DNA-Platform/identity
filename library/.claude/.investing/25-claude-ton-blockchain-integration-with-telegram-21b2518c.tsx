import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--ton-blockchain-integration-with-telegram--21b2518c/.cover.tsx';
import TheSynopsis from '../.conversations/claude--ton-blockchain-integration-with-telegram--21b2518c/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>Its conversations</Part>
        <Dated>
            <Date>[28 January 2026](2026-01-28)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ TON blockchain integration with Telegram ]]( claude--TON blockchain integration with Telegram--21b2518c )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 28 January 2026: <Means>$[[ TON blockchain integration with Telegram ]]( claude--TON blockchain integration with Telegram--21b2518c )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
