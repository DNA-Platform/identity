import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--turkish-airlines-cargo-shipping-to-antalya--7f0b34cf/.cover.tsx';
import TheSynopsis from '../.conversations/claude--turkish-airlines-cargo-shipping-to-antalya--7f0b34cf/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>Its conversations</Part>
        <Dated>
            <Date>[30 August 2025](2025-08-30)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Turkish Airlines Cargo Shipping to Antalya ]]( claude--Turkish Airlines Cargo Shipping to Antalya--7f0b34cf )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 30 August 2025: <Means>$[[ Turkish Airlines Cargo Shipping to Antalya ]]( claude--Turkish Airlines Cargo Shipping to Antalya--7f0b34cf )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
