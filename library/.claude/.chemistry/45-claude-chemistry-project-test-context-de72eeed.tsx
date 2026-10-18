import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--chemistry-project-test-context--de72eeed/.cover.tsx';
import TheSynopsis from '../.conversations/claude--chemistry-project-test-context--de72eeed/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>October 2025</Part>
        <Dated>
            <Date>[21 October 2025](2025-10-21)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Chemistry project test context ]]( claude--Chemistry project test context--de72eeed )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 21 October 2025: <Means>$[[ Chemistry project test context ]]( claude--Chemistry project test context--de72eeed )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
