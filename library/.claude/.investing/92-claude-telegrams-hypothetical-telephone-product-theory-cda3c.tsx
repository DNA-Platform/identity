import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--telegrams-hypothetical-telephone-product-theory--cda3c1bb/.cover.tsx';
import TheSynopsis from '../.conversations/claude--telegrams-hypothetical-telephone-product-theory--cda3c1bb/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>Its conversations</Part>
        <Dated>
            <Date>[19 August 2026](2026-08-19)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Telegram's hypothetical "Telephone" product theory ]]( claude--Telegram's hypothetical "Telephone" product theory--cda3c1bb )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 19 August 2026: <Means>$[[ Telegram's hypothetical "Telephone" product theory ]]( claude--Telegram's hypothetical "Telephone" product theory--cda3c1bb )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
