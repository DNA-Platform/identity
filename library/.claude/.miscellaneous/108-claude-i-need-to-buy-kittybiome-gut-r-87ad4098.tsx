import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--i-need-to-buy-kittybiome-gut-r--87ad4098/.cover.tsx';
import TheSynopsis from '../.conversations/claude--i-need-to-buy-kittybiome-gut-r--87ad4098/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ I need to buy kittybiome gut r… ]]( claude--I need to buy kittybiome gut r…--87ad4098 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 14 March 2026: <Means>$[[ I need to buy kittybiome gut r… ]]( claude--I need to buy kittybiome gut r…--87ad4098 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
