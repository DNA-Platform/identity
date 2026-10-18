import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--problem-summary-request--3941fb3e/.cover.tsx';
import TheSynopsis from './claude--problem-summary-request--3941fb3e/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>October 2026</Part>
        <Dated>
            <Date>[13 October 2026](2026-10-13)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Problem summary request ]]( claude--Problem summary request--3941fb3e )</Title>
        <Paragraph>
            <Caption />
            A conversation, 2 exchanges: <Means>$[[ Problem summary request ]]( claude--Problem summary request--3941fb3e )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
