import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--ton-blockchain-integration-with-telegram--21b2518c/.cover.tsx';
import TheSynopsis from './claude--ton-blockchain-integration-with-telegram--21b2518c/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>January 2026</Part>
        <Dated>
            <Date>[29 January 2026](2026-01-29)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ TON blockchain integration with Telegram ]]( claude--TON blockchain integration with Telegram--21b2518c )</Title>
        <Paragraph>
            <Caption />
            A conversation, 63 exchanges: <Means>$[[ TON blockchain integration with Telegram ]]( claude--TON blockchain integration with Telegram--21b2518c )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
