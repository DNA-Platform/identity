import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--original-telegram-open-network-whitepaper--2fe78c27/.cover.tsx';
import TheSynopsis from '../.conversations/claude--original-telegram-open-network-whitepaper--2fe78c27/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>May 2026</Part>
        <Dated>
            <Date>[11 May 2026](2026-05-11)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Original Telegram Open Network whitepaper ]]( claude--Original Telegram Open Network whitepaper--2fe78c27 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 11 May 2026: <Means>$[[ Original Telegram Open Network whitepaper ]]( claude--Original Telegram Open Network whitepaper--2fe78c27 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
