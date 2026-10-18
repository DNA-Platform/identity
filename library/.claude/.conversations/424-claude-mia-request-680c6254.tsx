import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--mia-request--680c6254/.cover.tsx';
import TheSynopsis from './claude--mia-request--680c6254/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>October 2026</Part>
        <Dated>
            <Date>[6 October 2026](2026-10-06)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ MIA Request ]]( claude--MIA Request--680c6254 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 100 exchanges: <Means>$[[ MIA Request ]]( claude--MIA Request--680c6254 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
