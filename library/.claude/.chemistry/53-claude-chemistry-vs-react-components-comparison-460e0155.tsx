import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--chemistry-vs-react-components-comparison--460e0155/.cover.tsx';
import TheSynopsis from '../.conversations/claude--chemistry-vs-react-components-comparison--460e0155/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Chemistry vs React components comparison ]]( claude--Chemistry vs React components comparison--460e0155 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 31 October 2025: <Means>$[[ Chemistry vs React components comparison ]]( claude--Chemistry vs React components comparison--460e0155 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
