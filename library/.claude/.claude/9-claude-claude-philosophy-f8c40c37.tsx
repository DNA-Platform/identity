import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--claude-philosophy--f8c40c37/.cover.tsx';
import TheSynopsis from '../.conversations/claude--claude-philosophy--f8c40c37/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Claude &gt; Philosophy ]]( claude--Claude &gt; Philosophy--f8c40c37 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 21 June 2026: <Means>$[[ Claude &gt; Philosophy ]]( claude--Claude &gt; Philosophy--f8c40c37 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
