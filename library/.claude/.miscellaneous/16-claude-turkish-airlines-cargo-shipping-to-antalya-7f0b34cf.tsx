import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--turkish-airlines-cargo-shipping-to-antalya--7f0b34cf/.cover.tsx';
import TheSynopsis from '../.conversations/claude--turkish-airlines-cargo-shipping-to-antalya--7f0b34cf/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Turkish Airlines Cargo Shipping to Antalya ]]( claude--Turkish Airlines Cargo Shipping to Antalya--7f0b34cf )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 30 August 2025: <Means>$[[ Turkish Airlines Cargo Shipping to Antalya ]]( claude--Turkish Airlines Cargo Shipping to Antalya--7f0b34cf )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
