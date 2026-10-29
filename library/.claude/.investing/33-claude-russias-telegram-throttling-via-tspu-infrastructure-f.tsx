import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--russias-telegram-throttling-via-tspu-infrastructure--f9847388/.cover.tsx';
import TheSynopsis from '../.conversations/claude--russias-telegram-throttling-via-tspu-infrastructure--f9847388/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>Its conversations</Part>
        <Dated>
            <Date>[10 February 2026](2026-02-10)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Russia's Telegram throttling via TSPU infrastructure ]]( claude--Russia's Telegram throttling via TSPU infrastructure--f9847388 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 10 February 2026: <Means>$[[ Russia's Telegram throttling via TSPU infrastructure ]]( claude--Russia's Telegram throttling via TSPU infrastructure--f9847388 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
