import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--batumi-airports-and-gamestonk-and-telegram--e1b292bd/.cover.tsx';
import TheSynopsis from './claude--batumi-airports-and-gamestonk-and-telegram--e1b292bd/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>January 2026</Part>
        <Dated>
            <Date>[12 January 2026](2026-01-12)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Batumi Airports &amp; GameStonk &amp; Telegram ]]( claude--Batumi Airports &amp; GameStonk &amp; Telegram--e1b292bd )</Title>
        <Paragraph>
            <Caption />
            A conversation, 38 exchanges: <Means>$[[ Batumi Airports &amp; GameStonk &amp; Telegram ]]( claude--Batumi Airports &amp; GameStonk &amp; Telegram--e1b292bd )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
