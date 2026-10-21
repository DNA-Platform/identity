import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--chemistry-project-test-context--de72eeed/.cover.tsx';
import TheSynopsis from './claude--chemistry-project-test-context--de72eeed/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>October 2025</Part>
        <Dated>
            <Date>[22 October 2025](2025-10-22)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Chemistry project test context ]]( claude--Chemistry project test context--de72eeed )</Title>
        <Paragraph>
            <Caption />
            A conversation, 232 exchanges: <Means>$[[ Chemistry project test context ]]( claude--Chemistry project test context--de72eeed )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
