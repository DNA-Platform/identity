import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--tnet-and-its-connection-to-telegram--5dc5bce9/.cover.tsx';
import TheSynopsis from './claude--tnet-and-its-connection-to-telegram--5dc5bce9/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>February 2026</Part>
        <Dated>
            <Date>[1 February 2026](2026-02-01)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ TNET and its connection to Telegram ]]( claude--TNET and its connection to Telegram--5dc5bce9 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 54 exchanges: <Means>$[[ TNET and its connection to Telegram ]]( claude--TNET and its connection to Telegram--5dc5bce9 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
