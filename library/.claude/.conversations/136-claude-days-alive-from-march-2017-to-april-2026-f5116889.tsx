import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--days-alive-from-march-2017-to-april-2026--f5116889/.cover.tsx';
import TheSynopsis from './claude--days-alive-from-march-2017-to-april-2026--f5116889/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>April 2026</Part>
        <Dated>
            <Date>[24 April 2026](2026-04-24)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Days alive from March 2017 to April 2026 ]]( claude--Days alive from March 2017 to April 2026--f5116889 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 6 exchanges: <Means>$[[ Days alive from March 2017 to April 2026 ]]( claude--Days alive from March 2017 to April 2026--f5116889 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
