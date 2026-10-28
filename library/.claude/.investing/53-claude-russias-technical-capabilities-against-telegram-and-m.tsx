import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--russias-technical-capabilities-against-telegram-and-mtproto--740d0173/.cover.tsx';
import TheSynopsis from '../.conversations/claude--russias-technical-capabilities-against-telegram-and-mtproto--740d0173/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>February 2026</Part>
        <Dated>
            <Date>[27 February 2026](2026-02-27)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Russia's technical capabilities against Telegram and MTProto ]]( claude--Russia's technical capabilities against Telegram and MTProto--740d0173 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 27 February 2026: <Means>$[[ Russia's technical capabilities against Telegram and MTProto ]]( claude--Russia's technical capabilities against Telegram and MTProto--740d0173 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
