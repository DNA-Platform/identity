import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--translating-academic-report-screenshot--f7a471e2/.cover.tsx';
import TheSynopsis from './claude--translating-academic-report-screenshot--f7a471e2/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>September 2025</Part>
        <Dated>
            <Date>[30 September 2025](2025-09-30)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Translating academic report screenshot ]]( claude--Translating academic report screenshot--f7a471e2 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 8 exchanges: <Means>$[[ Translating academic report screenshot ]]( claude--Translating academic report screenshot--f7a471e2 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
