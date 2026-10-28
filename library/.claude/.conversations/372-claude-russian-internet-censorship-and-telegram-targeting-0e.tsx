import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--russian-internet-censorship-and-telegram-targeting--0ef8e097/.cover.tsx';
import TheSynopsis from './claude--russian-internet-censorship-and-telegram-targeting--0ef8e097/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>February 2026</Part>
        <Dated>
            <Date>[11 February 2026](2026-02-11)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Russian internet censorship and Telegram targeting ]]( claude--Russian internet censorship and Telegram targeting--0ef8e097 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 90 exchanges: <Means>$[[ Russian internet censorship and Telegram targeting ]]( claude--Russian internet censorship and Telegram targeting--0ef8e097 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
