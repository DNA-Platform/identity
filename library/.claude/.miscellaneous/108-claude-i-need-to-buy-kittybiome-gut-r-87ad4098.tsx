import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--i-need-to-buy-kittybiome-gut-r--87ad4098/.cover.tsx';
import TheSynopsis from '../.conversations/claude--i-need-to-buy-kittybiome-gut-r--87ad4098/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>March 2026</Part>
        <Dated>
            <Date>[14 March 2026](2026-03-14)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ I need to buy kittybiome gut r… ]]( claude--I need to buy kittybiome gut r…--87ad4098 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 14 March 2026: <Means>$[[ I need to buy kittybiome gut r… ]]( claude--I need to buy kittybiome gut r…--87ad4098 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
