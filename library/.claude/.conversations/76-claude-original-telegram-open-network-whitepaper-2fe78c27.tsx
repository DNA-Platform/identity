import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--original-telegram-open-network-whitepaper--2fe78c27/.cover.tsx';
import TheSynopsis from './claude--original-telegram-open-network-whitepaper--2fe78c27/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>May 2026</Part>
        <Dated>
            <Date>[11 May 2026](2026-05-11)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Original Telegram Open Network whitepaper ]]( claude--Original Telegram Open Network whitepaper--2fe78c27 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 2 exchanges: <Means>$[[ Original Telegram Open Network whitepaper ]]( claude--Original Telegram Open Network whitepaper--2fe78c27 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
