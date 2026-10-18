import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--russian-internet-censorship-and-telegram-targeting--0ef8e097/.cover.tsx';
import TheSynopsis from '../.conversations/claude--russian-internet-censorship-and-telegram-targeting--0ef8e097/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>February 2026</Part>
        <Dated>
            <Date>[10 February 2026](2026-02-10)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Russian internet censorship and Telegram targeting ]]( claude--Russian internet censorship and Telegram targeting--0ef8e097 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 10 February 2026: <Means>$[[ Russian internet censorship and Telegram targeting ]]( claude--Russian internet censorship and Telegram targeting--0ef8e097 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
