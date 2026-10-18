import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--chemistry-project-test-context--de72eeed/.cover.tsx';
import TheSynopsis from '../.conversations/claude--chemistry-project-test-context--de72eeed/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Chemistry project test context ]]( claude--Chemistry project test context--de72eeed )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 21 October 2025: <Means>$[[ Chemistry project test context ]]( claude--Chemistry project test context--de72eeed )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
