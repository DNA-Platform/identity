import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--turkish-visa-overstay-penalty-dispute--48ab3881/.cover.tsx';
import TheSynopsis from '../.conversations/claude--turkish-visa-overstay-penalty-dispute--48ab3881/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Turkish visa overstay penalty dispute ]]( claude--Turkish visa overstay penalty dispute--48ab3881 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 8 January 2026: <Means>$[[ Turkish visa overstay penalty dispute ]]( claude--Turkish visa overstay penalty dispute--48ab3881 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
