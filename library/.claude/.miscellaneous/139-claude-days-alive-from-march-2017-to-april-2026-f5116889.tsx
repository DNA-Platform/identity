import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--days-alive-from-march-2017-to-april-2026--f5116889/.cover.tsx';
import TheSynopsis from '../.conversations/claude--days-alive-from-march-2017-to-april-2026--f5116889/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Days alive from March 2017 to April 2026 ]]( claude--Days alive from March 2017 to April 2026--f5116889 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 24 April 2026: <Means>$[[ Days alive from March 2017 to April 2026 ]]( claude--Days alive from March 2017 to April 2026--f5116889 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
