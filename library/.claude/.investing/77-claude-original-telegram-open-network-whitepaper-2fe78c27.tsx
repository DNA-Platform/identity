import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--original-telegram-open-network-whitepaper--2fe78c27/.cover.tsx';
import TheSynopsis from '../.conversations/claude--original-telegram-open-network-whitepaper--2fe78c27/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Original Telegram Open Network whitepaper ]]( claude--Original Telegram Open Network whitepaper--2fe78c27 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 11 May 2026: <Means>$[[ Original Telegram Open Network whitepaper ]]( claude--Original Telegram Open Network whitepaper--2fe78c27 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
