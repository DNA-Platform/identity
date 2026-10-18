import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--problem-summary-request--3941fb3e/.cover.tsx';
import TheSynopsis from '../.conversations/claude--problem-summary-request--3941fb3e/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Problem summary request ]]( claude--Problem summary request--3941fb3e )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 13 October 2026: <Means>$[[ Problem summary request ]]( claude--Problem summary request--3941fb3e )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
