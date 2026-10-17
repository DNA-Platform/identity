import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--russian-internet-censorship-and-telegram-targeting--0ef8e097/.cover.tsx';
import TheSynopsis from '../.conversations/claude--russian-internet-censorship-and-telegram-targeting--0ef8e097/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Russian internet censorship and Telegram targeting ]]( claude--Russian internet censorship and Telegram targeting--0ef8e097 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 10 February 2026: <Means>$[[ Russian internet censorship and Telegram targeting ]]( claude--Russian internet censorship and Telegram targeting--0ef8e097 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
