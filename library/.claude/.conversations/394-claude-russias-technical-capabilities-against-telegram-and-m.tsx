import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--russias-technical-capabilities-against-telegram-and-mtproto--740d0173/.cover.tsx';
import TheSynopsis from './claude--russias-technical-capabilities-against-telegram-and-mtproto--740d0173/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>February 2026</Part>
        <Dated>
            <Date>[27 February 2026](2026-02-27)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Russia's technical capabilities against Telegram and MTProto ]]( claude--Russia's technical capabilities against Telegram and MTProto--740d0173 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 4 exchanges: <Means>$[[ Russia's technical capabilities against Telegram and MTProto ]]( claude--Russia's technical capabilities against Telegram and MTProto--740d0173 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
