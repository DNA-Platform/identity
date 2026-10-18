import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--days-alive-from-march-2017-to-april-2026--f5116889/.cover.tsx';
import TheSynopsis from '../.conversations/claude--days-alive-from-march-2017-to-april-2026--f5116889/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>April 2026</Part>
        <Dated>
            <Date>[24 April 2026](2026-04-24)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Days alive from March 2017 to April 2026 ]]( claude--Days alive from March 2017 to April 2026--f5116889 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 24 April 2026: <Means>$[[ Days alive from March 2017 to April 2026 ]]( claude--Days alive from March 2017 to April 2026--f5116889 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
