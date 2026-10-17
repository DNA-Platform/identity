import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--telegrams-hypothetical-telephone-product-theory--cda3c1bb/.cover.tsx';
import TheSynopsis from '../.conversations/claude--telegrams-hypothetical-telephone-product-theory--cda3c1bb/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Telegram's hypothetical "Telephone" product theory ]]( claude--Telegram's hypothetical "Telephone" product theory--cda3c1bb )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 19 August 2026: <Means>$[[ Telegram's hypothetical "Telephone" product theory ]]( claude--Telegram's hypothetical "Telephone" product theory--cda3c1bb )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
