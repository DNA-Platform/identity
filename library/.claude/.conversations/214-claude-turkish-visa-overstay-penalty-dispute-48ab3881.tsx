import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--turkish-visa-overstay-penalty-dispute--48ab3881/.cover.tsx';
import TheSynopsis from './claude--turkish-visa-overstay-penalty-dispute--48ab3881/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>January 2026</Part>
        <Dated>
            <Date>[8 January 2026](2026-01-08)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Turkish visa overstay penalty dispute ]]( claude--Turkish visa overstay penalty dispute--48ab3881 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 4 exchanges: <Means>$[[ Turkish visa overstay penalty dispute ]]( claude--Turkish visa overstay penalty dispute--48ab3881 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
