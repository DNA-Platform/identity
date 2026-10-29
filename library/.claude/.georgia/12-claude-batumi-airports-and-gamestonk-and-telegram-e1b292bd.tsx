import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--batumi-airports-and-gamestonk-and-telegram--e1b292bd/.cover.tsx';
import TheSynopsis from '../.conversations/claude--batumi-airports-and-gamestonk-and-telegram--e1b292bd/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>Its conversations</Part>
        <Dated>
            <Date>[12 January 2026](2026-01-12)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Batumi Airports &amp; GameStonk &amp; Telegram ]]( claude--Batumi Airports &amp; GameStonk &amp; Telegram--e1b292bd )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 12 January 2026: <Means>$[[ Batumi Airports &amp; GameStonk &amp; Telegram ]]( claude--Batumi Airports &amp; GameStonk &amp; Telegram--e1b292bd )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
