import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--translating-academic-report-screenshot--f7a471e2/.cover.tsx';
import TheSynopsis from '../.conversations/claude--translating-academic-report-screenshot--f7a471e2/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Translating academic report screenshot ]]( claude--Translating academic report screenshot--f7a471e2 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 29 September 2025: <Means>$[[ Translating academic report screenshot ]]( claude--Translating academic report screenshot--f7a471e2 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
