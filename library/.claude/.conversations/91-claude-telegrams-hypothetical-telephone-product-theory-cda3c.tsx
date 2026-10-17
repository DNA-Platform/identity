import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--telegrams-hypothetical-telephone-product-theory--cda3c1bb/.cover.tsx';
import TheSynopsis from './claude--telegrams-hypothetical-telephone-product-theory--cda3c1bb/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>August 2026</Part>
        <Dated>
            <Date>[19 August 2026](2026-08-19)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Telegram's hypothetical "Telephone" product theory ]]( claude--Telegram's hypothetical "Telephone" product theory--cda3c1bb )</Title>
        <Paragraph>
            <Caption />
            A conversation, 30 exchanges: <Means>$[[ Telegram's hypothetical "Telephone" product theory ]]( claude--Telegram's hypothetical "Telephone" product theory--cda3c1bb )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
