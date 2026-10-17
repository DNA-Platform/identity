import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--russias-telegram-throttling-via-tspu-infrastructure--f9847388/.cover.tsx';
import TheSynopsis from './claude--russias-telegram-throttling-via-tspu-infrastructure--f9847388/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>February 2026</Part>
        <Dated>
            <Date>[10 February 2026](2026-02-10)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Russia's Telegram throttling via TSPU infrastructure ]]( claude--Russia's Telegram throttling via TSPU infrastructure--f9847388 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 61 exchanges: <Means>$[[ Russia's Telegram throttling via TSPU infrastructure ]]( claude--Russia's Telegram throttling via TSPU infrastructure--f9847388 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
