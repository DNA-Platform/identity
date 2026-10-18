import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--uae-as-crypto-fiat-bridge-for-telegrams-digital-ecosystem--a3aa6b90/.cover.tsx';
import TheSynopsis from '../.conversations/claude--uae-as-crypto-fiat-bridge-for-telegrams-digital-ecosystem--a3aa6b90/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>February 2026</Part>
        <Dated>
            <Date>[2 February 2026](2026-02-02)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ UAE as crypto-fiat bridge for Telegram's digital ecosystem ]]( claude--UAE as crypto-fiat bridge for Telegram's digital ecosystem--a3aa6b90 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 2 February 2026: <Means>$[[ UAE as crypto-fiat bridge for Telegram's digital ecosystem ]]( claude--UAE as crypto-fiat bridge for Telegram's digital ecosystem--a3aa6b90 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
