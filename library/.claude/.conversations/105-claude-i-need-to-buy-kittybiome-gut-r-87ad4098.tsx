import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--i-need-to-buy-kittybiome-gut-r--87ad4098/.cover.tsx';
import TheSynopsis from './claude--i-need-to-buy-kittybiome-gut-r--87ad4098/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>March 2026</Part>
        <Dated>
            <Date>[15 March 2026](2026-03-15)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ I need to buy kittybiome gut r… ]]( claude--I need to buy kittybiome gut r…--87ad4098 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 12 exchanges: <Means>$[[ I need to buy kittybiome gut r… ]]( claude--I need to buy kittybiome gut r…--87ad4098 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
