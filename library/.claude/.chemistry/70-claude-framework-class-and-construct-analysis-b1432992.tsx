import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--framework-class-and-construct-analysis--b1432992/.cover.tsx';
import TheSynopsis from '../.conversations/claude--framework-class-and-construct-analysis--b1432992/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Framework class and construct analysis ]]( claude--Framework class and construct analysis--b1432992 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 23 February 2026: <Means>$[[ Framework class and construct analysis ]]( claude--Framework class and construct analysis--b1432992 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
