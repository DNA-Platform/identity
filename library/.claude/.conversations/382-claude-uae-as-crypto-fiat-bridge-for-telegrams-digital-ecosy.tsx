import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--uae-as-crypto-fiat-bridge-for-telegrams-digital-ecosystem--a3aa6b90/.cover.tsx';
import TheSynopsis from './claude--uae-as-crypto-fiat-bridge-for-telegrams-digital-ecosystem--a3aa6b90/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>February 2026</Part>
        <Dated>
            <Date>[2 February 2026](2026-02-02)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ UAE as crypto-fiat bridge for Telegram's digital ecosystem ]]( claude--UAE as crypto-fiat bridge for Telegram's digital ecosystem--a3aa6b90 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 71 exchanges: <Means>$[[ UAE as crypto-fiat bridge for Telegram's digital ecosystem ]]( claude--UAE as crypto-fiat bridge for Telegram's digital ecosystem--a3aa6b90 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
